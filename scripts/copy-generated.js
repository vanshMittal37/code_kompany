import fs from 'fs';
import path from 'path';

const copies = [
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\cta_ribbon_1790917326479.png', dest: 'raw-images/cta/cta-ribbon.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_01_1790917377205.png', dest: 'raw-images/projects/project-01.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_02_1790917417134.png', dest: 'raw-images/projects/project-02.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_03_1790917454816.png', dest: 'raw-images/projects/project-03.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_04_1790917492880.png', dest: 'raw-images/projects/project-04.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_05_1790917532831.png', dest: 'raw-images/projects/project-05.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\project_06_1790917563953.png', dest: 'raw-images/projects/project-06.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_manufacturing_1790917595144.png', dest: 'raw-images/industries/manufacturing.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_healthcare_1790917630100.png', dest: 'raw-images/industries/healthcare.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_real_estate_1790917674838.png', dest: 'raw-images/industries/real-estate.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_ecommerce_1790917718898.png', dest: 'raw-images/industries/ecommerce.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_startups_1790917756012.png', dest: 'raw-images/industries/startups.png' },
  { src: 'C:\\Users\\Vansh\\.gemini\\antigravity-ide\\brain\\71e69bf4-b5ec-4ed1-967c-ad5b805322fc\\industry_growing_business_1790917787132.png', dest: 'raw-images/industries/growing-business.png' }
];

for (const item of copies) {
  const destDir = path.dirname(item.dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(item.src, item.dest);
  console.log(`Copied ${item.src} -> ${item.dest}`);
}
