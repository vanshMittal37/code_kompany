import sharp from 'sharp';
import potrace from 'potrace';
import fs from 'fs';
import path from 'path';

const RAW_LOGO = path.join('raw-images', 'brand', 'logo-original.jpeg');
const BRAND_DIR = path.join('public', 'brand');
const PUBLIC_DIR = path.join('public');

if (!fs.existsSync(BRAND_DIR)) {
  fs.mkdirSync(BRAND_DIR, { recursive: true });
}

function traceImage(buffer, options = {}) {
  return new Promise((resolve, reject) => {
    potrace.trace(buffer, { threshold: 128, turdSize: 2, optCurve: true, ...options }, (err, svg) => {
      if (err) reject(err);
      else resolve(svg);
    });
  });
}

function cleanSvg(svgStr, fillColor = 'currentColor') {
  let cleaned = svgStr
    .replace(/fill="#[0-9a-fA-F]{3,6}"/g, `fill="${fillColor}"`)
    .replace(/fill="black"/g, `fill="${fillColor}"`);

  if (!cleaned.includes('viewBox')) {
    const wMatch = cleaned.match(/width="(\d+)"/);
    const hMatch = cleaned.match(/height="(\d+)"/);
    if (wMatch && hMatch) {
      cleaned = cleaned.replace('<svg ', `<svg viewBox="0 0 ${wMatch[1]} ${hMatch[1]}" `);
    }
  }
  return cleaned;
}

async function main() {
  console.log('🖼  Processing brand logo...');

  if (!fs.existsSync(RAW_LOGO)) {
    throw new Error(`Raw logo missing at ${RAW_LOGO}`);
  }

  // 1. Full logo (Mark + Wordmark)
  const fullTrimmedBuffer = await sharp(RAW_LOGO)
    .threshold(200)
    .trim()
    .resize({ height: 1600, fit: 'contain' })
    .png()
    .toBuffer();

  const meta = await sharp(fullTrimmedBuffer).metadata();
  const W = meta.width;
  const H = meta.height;

  // Find exact gap between mark and wordmark by analyzing row pixel data
  const rawPixelData = await sharp(fullTrimmedBuffer).raw().toBuffer();
  
  // Image is 4 channels (RGBA). Count dark pixels per row.
  const rowDarkCount = new Array(H).fill(0);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 4;
      const r = rawPixelData[idx], g = rawPixelData[idx+1], b = rawPixelData[idx+2];
      if (r < 100 && g < 100 && b < 100) {
        rowDarkCount[y]++;
      }
    }
  }

  // Find the zero-dark-pixel gap row between Y = 0.65*H and Y = 0.78*H
  let gapY = Math.floor(H * 0.70);
  for (let y = Math.floor(H * 0.65); y < Math.floor(H * 0.78); y++) {
    if (rowDarkCount[y] === 0) {
      gapY = y;
      break;
    }
  }

  console.log(`Measured Logo Height: ${H}px, Width: ${W}px. Mark/Wordmark gap found at Y = ${gapY}px`);

  // 1. Full SVG
  const fullSvgRaw = await traceImage(fullTrimmedBuffer, { color: '#000000' });
  const fullSvg = cleanSvg(fullSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-full.svg'), fullSvg);
  console.log('✓ Created public/brand/logo-full.svg');

  // 2. Mark only ({ CO / KO }) - top to gapY
  const markBuffer = await sharp(fullTrimmedBuffer)
    .extract({ left: 0, top: 0, width: W, height: gapY })
    .trim()
    .png()
    .toBuffer();

  const markSvgRaw = await traceImage(markBuffer, { color: '#000000' });
  const markSvg = cleanSvg(markSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-mark.svg'), markSvg);
  console.log('✓ Created public/brand/logo-mark.svg');

  // 3. Wordmark only ("CODE KOMPANY") - gapY to bottom
  const wordHeight = meta.height - gapY;
  const wordmarkBuffer = await sharp(fullTrimmedBuffer)
    .extract({ left: 0, top: gapY, width: W, height: wordHeight })
    .trim()
    .png()
    .toBuffer();

  const wordmarkSvgRaw = await traceImage(wordmarkBuffer, { color: '#000000' });
  const wordmarkSvg = cleanSvg(wordmarkSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-wordmark.svg'), wordmarkSvg);
  console.log('✓ Created public/brand/logo-wordmark.svg');

  // 4. Create PNG versions for JSON-LD, Manifest & App Icons
  const logo512Canvas = await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  }).png().toBuffer();

  // Convert fullTrimmedBuffer white pixels to transparent
  const rawData = await sharp(fullTrimmedBuffer).ensureAlpha().raw().toBuffer();
  for (let i = 0; i < rawData.length; i += 4) {
    if (rawData[i] > 200 && rawData[i + 1] > 200 && rawData[i + 2] > 200) {
      rawData[i + 3] = 0; // Alpha 0
    }
  }

  const transparentLogo = await sharp(rawData, {
    raw: { width: W, height: H, channels: 4 }
  }).png().toBuffer();

  const logo512 = await sharp(transparentLogo)
    .resize(480, 480, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp(logo512Canvas)
    .composite([{ input: logo512, gravity: 'center' }])
    .toFile(path.join(BRAND_DIR, 'logo-512.png'));
  console.log('✓ Created public/brand/logo-512.png');

  // Favicon SVG - Adaptive
  const markMeta = await sharp(markBuffer).metadata();
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${markMeta.width} ${markMeta.height}">
  <style>
    path { fill: #141414; }
    @media (prefers-color-scheme: dark) {
      path { fill: #F2F1EC; }
    }
  </style>
  ${markSvg.replace(/<svg[^>]*>/, '').replace('</svg>', '')}
</svg>`;
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg);
  console.log('✓ Created public/favicon.svg');

  // Favicon 32x32 PNG
  const markTransparentRaw = await sharp(markBuffer).ensureAlpha().raw().toBuffer();
  for (let i = 0; i < markTransparentRaw.length; i += 4) {
    if (markTransparentRaw[i] > 200 && markTransparentRaw[i + 1] > 200 && markTransparentRaw[i + 2] > 200) {
      markTransparentRaw[i + 3] = 0;
    }
  }
  const markTransparent = await sharp(markTransparentRaw, {
    raw: { width: markMeta.width, height: markMeta.height, channels: 4 }
  }).png().toBuffer();

  await sharp(markTransparent)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(PUBLIC_DIR, 'favicon-32.png'));
  console.log('✓ Created public/favicon-32.png');

  // Apple touch icon 180x180 (off-white mark on #0B0B0C background)
  const offWhiteMarkRaw = await sharp(markBuffer).ensureAlpha().raw().toBuffer();
  for (let i = 0; i < offWhiteMarkRaw.length; i += 4) {
    if (offWhiteMarkRaw[i] > 200 && offWhiteMarkRaw[i + 1] > 200 && offWhiteMarkRaw[i + 2] > 200) {
      offWhiteMarkRaw[i + 3] = 0;
    } else {
      offWhiteMarkRaw[i] = 242;     // R #F2
      offWhiteMarkRaw[i + 1] = 241; // G #F1
      offWhiteMarkRaw[i + 2] = 236; // B #EC
    }
  }
  const offWhiteMark = await sharp(offWhiteMarkRaw, {
    raw: { width: markMeta.width, height: markMeta.height, channels: 4 }
  }).png().toBuffer();

  const appleMarkResized = await sharp(offWhiteMark)
    .resize(130, 130, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: appleMarkResized, gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');

  // Icon 192 and 512 for site.webmanifest
  const icon192Mark = await sharp(offWhiteMark)
    .resize(140, 140, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp({
    create: { width: 192, height: 192, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: icon192Mark, gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));
  console.log('✓ Created public/icon-192.png');

  const icon512Mark = await sharp(offWhiteMark)
    .resize(380, 380, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: icon512Mark, gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));
  console.log('✓ Created public/icon-512.png');

  console.log('✨ Brand logo vector tracing & icon generation complete!');
}

main().catch(console.error);
