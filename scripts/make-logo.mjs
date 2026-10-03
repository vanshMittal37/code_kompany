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

  const fullSvgRaw = await traceImage(fullTrimmedBuffer, { color: '#000000' });
  const fullSvg = cleanSvg(fullSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-full.svg'), fullSvg);
  console.log('✓ Created public/brand/logo-full.svg');

  const meta = await sharp(fullTrimmedBuffer).metadata();
  const W = meta.width;
  const H = meta.height;

  // 2. Mark only ({ CO / KO }) - top 55%
  const markH = Math.floor(H * 0.55);
  const markBuffer = await sharp(fullTrimmedBuffer)
    .extract({ left: 0, top: 0, width: W, height: markH })
    .png()
    .toBuffer();

  const markSvgRaw = await traceImage(markBuffer, { color: '#000000' });
  const markSvg = cleanSvg(markSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-mark.svg'), markSvg);
  console.log('✓ Created public/brand/logo-mark.svg');

  // 3. Wordmark only ("CODE KOMPANY") - bottom 45%
  const wordTop = Math.floor(H * 0.55);
  const wordH = H - wordTop;
  const wordmarkBuffer = await sharp(fullTrimmedBuffer)
    .extract({ left: 0, top: wordTop, width: W, height: wordH })
    .png()
    .toBuffer();

  const wordmarkSvgRaw = await traceImage(wordmarkBuffer, { color: '#000000' });
  const wordmarkSvg = cleanSvg(wordmarkSvgRaw, 'currentColor');
  fs.writeFileSync(path.join(BRAND_DIR, 'logo-wordmark.svg'), wordmarkSvg);
  console.log('✓ Created public/brand/logo-wordmark.svg');

  // 4. Create PNG versions for JSON-LD, Manifest & App Icons
  // logo-512.png (512px black logo on transparent background)
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

  const logoTransparentBuffer = await sharp(rawData, {
    raw: { width: W, height: H, channels: 4 }
  }).png().toBuffer();

  await sharp(logo512Canvas)
    .composite([{ input: await sharp(logoTransparentBuffer).resize(480, 480, { fit: 'contain' }).toBuffer(), gravity: 'center' }])
    .png()
    .toFile(path.join(BRAND_DIR, 'logo-512.png'));
  console.log('✓ Created public/brand/logo-512.png');

  // 5. Favicon SVG with theme media query
  const pathMatch = markSvgRaw.match(/<path[^>]+d="([^"]+)"/);
  const pathD = pathMatch ? pathMatch[1] : '';
  const viewBoxMatch = markSvgRaw.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 100 100';

  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">
  <style>
    path { fill: #141414; }
    @media (prefers-color-scheme: dark) {
      path { fill: #F2F1EC; }
    }
  </style>
  <path fill-rule="evenodd" d="${pathD}" />
</svg>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg);
  console.log('✓ Created public/favicon.svg');

  // 6. PNG Favicons & App Icons (apple-touch-icon 180x180, icon-192, icon-512)
  // Dark mark on transparent 32x32
  const markRawData = await sharp(markBuffer).ensureAlpha().raw().toBuffer();
  const markMeta = await sharp(markBuffer).metadata();
  for (let i = 0; i < markRawData.length; i += 4) {
    if (markRawData[i] > 200 && markRawData[i + 1] > 200 && markRawData[i + 2] > 200) {
      markRawData[i + 3] = 0;
    }
  }

  const markTransparentBuffer = await sharp(markRawData, {
    raw: { width: markMeta.width, height: markMeta.height, channels: 4 }
  }).png().toBuffer();

  await sharp(markTransparentBuffer)
    .resize(32, 32, { fit: 'contain' })
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-32.png'));
  console.log('✓ Created public/favicon-32.png');

  // Create off-white mark on #0B0B0C background for Apple Touch & Web Manifest icons
  const offWhiteMarkRaw = Buffer.from(markRawData);
  for (let i = 0; i < offWhiteMarkRaw.length; i += 4) {
    if (offWhiteMarkRaw[i] < 100 && offWhiteMarkRaw[i + 3] > 0) {
      offWhiteMarkRaw[i] = 242;     // R
      offWhiteMarkRaw[i + 1] = 241; // G
      offWhiteMarkRaw[i + 2] = 236; // B
      offWhiteMarkRaw[i + 3] = 255; // A
    } else {
      offWhiteMarkRaw[i + 3] = 0;
    }
  }

  const offWhiteMarkBuffer = await sharp(offWhiteMarkRaw, {
    raw: { width: markMeta.width, height: markMeta.height, channels: 4 }
  }).png().toBuffer();

  // apple-touch-icon 180x180
  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: await sharp(offWhiteMarkBuffer).resize(130, 130, { fit: 'contain' }).toBuffer(), gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✓ Created public/apple-touch-icon.png');

  // icon-192.png
  await sharp({
    create: { width: 192, height: 192, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: await sharp(offWhiteMarkBuffer).resize(140, 140, { fit: 'contain' }).toBuffer(), gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-192.png'));
  console.log('✓ Created public/icon-192.png');

  // icon-512.png
  await sharp({
    create: { width: 512, height: 512, channels: 4, background: { r: 11, g: 11, b: 12, alpha: 1 } }
  })
    .composite([{ input: await sharp(offWhiteMarkBuffer).resize(380, 380, { fit: 'contain' }).toBuffer(), gravity: 'center' }])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'icon-512.png'));
  console.log('✓ Created public/icon-512.png');

  console.log('✨ Brand logo vector tracing & icon generation complete!');
}

main().catch((err) => {
  console.error('❌ Error processing logo:', err);
  process.exit(1);
});
