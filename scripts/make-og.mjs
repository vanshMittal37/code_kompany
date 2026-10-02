#!/usr/bin/env node
/**
 * make-og.mjs
 * Creates the Open Graph image (1200×630) by combining og-bg with
 * an SVG text overlay. Text is NEVER rendered by the image model —
 * it is always added here by code.
 *
 * Usage: npm run og
 */

import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';

const OG_SRC = path.join('raw-images', 'og', 'og-bg.png');
const OG_OUT = path.join('public', 'og-image.png');
const W = 1200, H = 630;

// Check if source exists; if not, generate a dark fallback
let basePipeline;
if (existsSync(OG_SRC)) {
  basePipeline = sharp(OG_SRC).resize(W, H, { fit: 'cover', position: 'right' });
} else {
  console.warn(`⚠  og-bg.png not found — using dark fallback background for OG image.`);
  // Create a solid dark background as fallback
  basePipeline = sharp({
    create: { width: W, height: H, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  }).png();
}

// SVG text overlay (no fonts embedded — uses generic system sans-serif)
// Text is on the LEFT third; the right two-thirds show the image subject.
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="fadeIn" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0B0B0C" stop-opacity="0.96"/>
      <stop offset="55%" stop-color="#0B0B0C" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#0B0B0C" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <!-- Left-side dark gradient so text is always legible -->
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#fadeIn)"/>
  <!-- Accent line -->
  <rect x="72" y="220" width="48" height="3" rx="2" fill="#FF5A1F"/>
  <!-- Brand name -->
  <text
    x="72" y="310"
    font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="72"
    font-weight="700"
    letter-spacing="-2"
    fill="#F2F1EC"
  >CODE KOMPANY</text>
  <!-- Tagline -->
  <text
    x="72" y="370"
    font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="28"
    font-weight="400"
    letter-spacing="0"
    fill="#8F8D87"
  >AI-native software studio</text>
  <!-- Location -->
  <text
    x="72" y="415"
    font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    font-size="20"
    font-weight="400"
    letter-spacing="1"
    fill="#8F8D87"
  >Vadodara, India</text>
</svg>
`.trim();

const svgBuf = Buffer.from(svg);

// Composite and save
const result = await basePipeline
  .composite([{ input: svgBuf, blend: 'over' }])
  .png({ quality: 90, compressionLevel: 8 })
  .toBuffer();

const kb = Math.round(result.length / 1024);
console.log(`OG image: ${kb}KB`);

if (kb > 300) {
  console.warn(`⚠  OG image is ${kb}KB (target < 300KB). Compressing further…`);
  const compressed = await sharp(result).png({ quality: 75, compressionLevel: 9 }).toBuffer();
  const { writeFile } = await import('fs/promises');
  await writeFile(OG_OUT, compressed);
  console.log(`✓  OG image saved to ${OG_OUT} (${Math.round(compressed.length / 1024)}KB)`);
} else {
  const { writeFile } = await import('fs/promises');
  await writeFile(OG_OUT, result);
  console.log(`✓  OG image saved to ${OG_OUT} (${kb}KB)`);
}
