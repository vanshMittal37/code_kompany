import fs from 'fs';
import path from 'path';

const copies = [
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\about_studio_1790943766267.png', dest: 'raw-images/about/studio.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\about_mindset_1790943925383.png', dest: 'raw-images/about/mindset.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\intro_wide_1790943981789.png', dest: 'raw-images/intro/intro-wide.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\not_found_1790944024547.png', dest: 'raw-images/cta/not-found.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\og_bg_1790944255648.png', dest: 'raw-images/og/og-bg.png' }
];

for (const item of copies) {
  const destDir = path.dirname(item.dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(item.src, item.dest);
  console.log(`Copied ${item.src} -> ${item.dest}`);
}
