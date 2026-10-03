import fs from 'fs';
import path from 'path';

const src = 'public/images/loggo.jpeg';
const rawDest = 'raw-images/brand/logo-original.jpeg';
const publicBrand = 'public/brand';

if (!fs.existsSync('raw-images/brand')) {
  fs.mkdirSync('raw-images/brand', { recursive: true });
}
if (!fs.existsSync(publicBrand)) {
  fs.mkdirSync(publicBrand, { recursive: true });
}

if (fs.existsSync(src)) {
  fs.copyFileSync(src, rawDest);
  console.log(`Copied ${src} -> ${rawDest}`);
} else {
  console.error(`Source logo not found at ${src}`);
}
