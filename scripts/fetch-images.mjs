#!/usr/bin/env node
/**
 * fetch-images.mjs
 * Downloads the licensed source photos listed in scripts/image-sources.json
 * into /raw-images/<folder>/<name>.jpg. Any existing raw file with the same
 * name (e.g. an older .png) is kept as _<name>.<ext>, which optimize-images skips.
 *
 * Usage: node scripts/fetch-images.mjs && npm run images
 */

import { readFile, writeFile, mkdir, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const RAW_DIR = 'raw-images';
const sources = JSON.parse(await readFile('scripts/image-sources.json', 'utf8'));

for (const [key, src] of Object.entries(sources)) {
  if (key.startsWith('_')) continue;
  const [folder, name] = key.split('/');
  const dir = path.join(RAW_DIR, folder);
  await mkdir(dir, { recursive: true });

  // Keep any previous raw source out of the pipeline instead of deleting it
  for (const ext of ['png', 'jpeg', 'webp']) {
    const old = path.join(dir, `${name}.${ext}`);
    if (existsSync(old)) await rename(old, path.join(dir, `_${name}.${ext}`));
  }

  const url = `https://images.unsplash.com/photo-${src.id}?w=2400&q=85&fm=jpg&fit=max`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`✗  ${key}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  await writeFile(path.join(dir, `${name}.jpg`), Buffer.from(await res.arrayBuffer()));
  console.log(`✓  ${key}  ←  ${src.author}`);
}
