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
  console.log('buf metadata:', meta);

  try {
    const mark = await sharp(buf).extract({ left: 0, top: 0, width: meta.width, height: 1000 }).toBuffer();
    console.log('mark extract OK');
  } catch (e) {
    console.error('mark extract error:', e.message);
  }

  try {
    const word = await sharp(buf).extract({ left: 0, top: 1040, width: meta.width, height: 500 }).toBuffer();
    console.log('word extract OK');
  } catch (e) {
    console.error('word extract error:', e.message);
  }
}

test();
