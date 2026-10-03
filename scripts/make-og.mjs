#!/usr/bin/env node
/**
 * make-og.mjs
 * Creates the Open Graph image (1200×630) by combining og-bg with
 * the official logo (off-white full logo) and text overlay.
 *
 * Usage: npm run og
 */

import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { writeFile } from 'fs/promises';
import path from 'path';

const OG_SRC = path.join('raw-images', 'og', 'og-bg.png');
const OG_OUT = path.join('public', 'og-image.png');
const LOGO_SRC = path.join('public', 'brand', 'logo-full.svg');
const W = 1200, H = 630;

// Check if source exists; if not, generate a dark fallback
let basePipeline;
if (existsSync(OG_SRC)) {
  basePipeline = sharp(OG_SRC).resize(W, H, { fit: 'cover', position: 'right' });
} else {
  console.warn(`⚠  og-bg.png not found — using dark fallback background for OG image.`);
  basePipeline = sharp({
    create: { width: W, height: H, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  }).png();
}

// Composite elements list
const compositeInputs = [];

// 1. Left-side dark gradient & text overlay
const textOverlaySvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="fadeIn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0B0B0C" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="#0B0B0C" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0B0B0C" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <!-- Left-side dark gradient so text/logo is always legible -->
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#fadeIn)"/>
  
  <!-- Accent line -->
  <rect x="72" y="115" width="48" height="3" rx="2" fill="#FF5A1F"/>

  <!-- Tagline -->
  <text
    x="72" y="415"
    font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="28"
    font-weight="500"
    letter-spacing="0"
    fill="#A1A09A"
  >AI-native software studio</text>

  <!-- Location -->
  <text
    x="72" y="455"
    font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="20"
    font-weight="400"
    letter-spacing="1"
    fill="#71706C"
  >Vadodara, India</text>
</svg>
`.trim();

compositeInputs.push({ input: Buffer.from(textOverlaySvg), blend: 'over' });

// 2. Off-white Logo composite
if (existsSync(LOGO_SRC)) {
  const logoRaw = readFileSync(LOGO_SRC, 'utf8');
  const logoSvgColored = logoRaw.replaceAll('currentColor', '#F2F1EC');
  const logoBuf = await sharp(Buffer.from(logoSvgColored))
    .resize({ height: 220 })
    .toBuffer();

  compositeInputs.push({
    input: logoBuf,
    top: 150,
    left: 72,
    blend: 'over'
  });
}

// Composite and save
const result = await basePipeline
  .composite(compositeInputs)
  .png({ quality: 90, compressionLevel: 8 })
  .toBuffer();

const kb = Math.round(result.length / 1024);
console.log(`OG image: ${kb}KB`);

if (kb > 300) {
  console.warn(`⚠  OG image is ${kb}KB (target < 300KB). Compressing further…`);
  const compressed = await sharp(result).png({ quality: 75, compressionLevel: 9 }).toBuffer();
  await writeFile(OG_OUT, compressed);
  console.log(`✓  OG image saved to ${OG_OUT} (${Math.round(compressed.length / 1024)}KB)`);
} else {
  await writeFile(OG_OUT, result);
  console.log(`✓  OG image saved to ${OG_OUT} (${kb}KB)`);
}
