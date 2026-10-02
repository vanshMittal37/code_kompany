#!/usr/bin/env node
/**
 * optimize-images.mjs
 * Processes all raw images from /raw-images/ into responsive .webp sets
 * and generates an images.generated.json manifest with LQIP placeholders.
 *
 * Usage: npm run images
 */

import { readdir, stat, mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const RAW_DIR     = 'raw-images';
const OUT_DIR     = 'public/images';
const MANIFEST    = 'src/data/images.generated.json';
const WIDTHS      = [640, 1024, 1600, 2400];
const QUALITY     = 78;
const QUALITY_MIN = 70;
const TARGET_KB   = { 1600: 250, 1024: 120 };
const LQIP_W      = 24;

/* ── helpers ─────────────────────────────────────────────── */
async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

/** Walk raw-images and return every processable file */
async function findRawImages(dir, results = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      await findRawImages(path.join(dir, e.name), results);
    } else if (/\.(png|jpe?g|webp)$/i.test(e.name) && !e.name.startsWith('_')) {
      results.push(path.join(dir, e.name));
    }
  }
  return results;
}

/** Generate a base64 LQIP placeholder */
async function makeLqip(img) {
  const buf = await img.clone().resize(LQIP_W).webp({ quality: 30 }).toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

/** Try to encode at a given quality; return null if over target KB */
async function tryEncode(img, w, q) {
  const buf = await img.clone().resize(w).webp({ quality: q }).toBuffer();
  return buf;
}

/* ── main ────────────────────────────────────────────────── */
const rawFiles = await findRawImages(RAW_DIR);
if (rawFiles.length === 0) {
  console.log('No raw images found in', RAW_DIR);
  process.exit(0);
}

const manifest = {};
const summary  = [];

for (const rawPath of rawFiles) {
  // Derive folder/name key, e.g. "hero/hero-dark"
  const rel      = path.relative(RAW_DIR, rawPath).replace(/\\/g, '/');
  const ext      = path.extname(rel);
  const noExt    = rel.slice(0, -ext.length);            // "hero/hero-dark"
  const [folder, ...nameParts] = noExt.split('/');
  const name     = nameParts.join('/');                   // "hero-dark"

  const outFolder = path.join(OUT_DIR, folder);
  await ensureDir(outFolder);

  // Check if already processed (compare source mtime to oldest output)
  const rawStat = await stat(rawPath);
  const firstOut = path.join(outFolder, `${name}-640.webp`);
  if (existsSync(firstOut)) {
    const outStat = await stat(firstOut);
    if (outStat.mtimeMs >= rawStat.mtimeMs) {
      console.log(`⏭  Skipping (unchanged): ${rel}`);
      // Still need to read existing manifest entry if present
      // Will be re-added below from existing JSON if available
    }
  }

  // Load the image
  let img;
  try {
    img = sharp(rawPath);
  } catch (e) {
    console.error(`✗  Failed to load ${rawPath}:`, e.message);
    continue;
  }

  const meta = await img.metadata();
  const { width: origW, height: origH } = meta;

  // Determine applicable widths (never upscale)
  const applicableWidths = WIDTHS.filter(w => w <= origW);
  if (applicableWidths.length === 0) applicableWidths.push(origW);

  // Generate LQIP
  const lqip = await makeLqip(img);

  const createdWidths = [];
  const rowSizes = {};

  for (const w of applicableWidths) {
    const outPath = path.join(outFolder, `${name}-${w}.webp`);

    // Check if we need to re-generate
    let needsGen = true;
    if (existsSync(outPath)) {
      const outStat = await stat(outPath);
      if (outStat.mtimeMs >= rawStat.mtimeMs) {
        needsGen = false;
      }
    }

    if (needsGen) {
      let q = QUALITY;
      let buf = await tryEncode(img, w, q);

      // Lower quality if over target
      const targetW = TARGET_KB[w];
      if (targetW && buf.length / 1024 > targetW) {
        q = QUALITY_MIN;
        buf = await tryEncode(img, w, q);
      }

      await writeFile(outPath, buf);
    }

    const s = await stat(outPath);
    createdWidths.push(w);
    rowSizes[w] = Math.round(s.size / 1024);
  }

  // Build manifest entry
  const aspectRatio = +(origH > 0 ? (origW / origH).toFixed(4) : 1);
  const key = noExt;  // "hero/hero-dark"

  manifest[key] = {
    widths:      createdWidths,
    width:       origW,
    height:      origH,
    aspectRatio,
    lqip,
  };

  summary.push({
    key,
    widths: createdWidths,
    kb1600: rowSizes[1600] ?? rowSizes[createdWidths[createdWidths.length - 1]],
    kb1024: rowSizes[1024] ?? '-',
  });

  console.log(`✓  ${key}  [${createdWidths.join(', ')}]w  1600→${rowSizes[1600] ?? '?'}KB`);
}

// Write manifest
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`\n📄 Manifest written to ${MANIFEST}`);

// Summary table
console.log('\n' + '─'.repeat(70));
console.log('Key'.padEnd(35) + 'Widths'.padEnd(20) + '1600KB'.padEnd(8) + '1024KB');
console.log('─'.repeat(70));
for (const r of summary) {
  console.log(
    r.key.padEnd(35) +
    r.widths.join(',').padEnd(20) +
    String(r.kb1600 ?? '?').padEnd(8) +
    r.kb1024
  );
}
console.log('─'.repeat(70));
console.log(`\nDone. ${summary.length} image(s) processed.\n`);
