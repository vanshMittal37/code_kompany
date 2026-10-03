import sharp from 'sharp';
import path from 'path';

const RAW_LOGO = path.join('raw-images', 'brand', 'logo-original.jpeg');

async function test() {
  const buf = await sharp(RAW_LOGO)
    .threshold(200)
    .trim()
    .resize({ height: 1600, fit: 'contain' })
    .png()
    .toBuffer();

  const meta = await sharp(buf).metadata();
  console.log('REAL METADATA:', meta.width, meta.height);
}

test();
