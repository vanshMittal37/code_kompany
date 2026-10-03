/**
 * fix-svgs.mjs
 * Fixes the logo-mark.svg viewBox so the KO letters are no longer clipped.
 * The path data goes to y≈919, but the viewBox was only 880 tall.
 */
import { readFileSync, writeFileSync } from 'fs';

// Fix logo-mark.svg: expand viewBox height to 920 to show all paths
const markSvg = readFileSync('public/brand/logo-mark.svg', 'utf8');
const fixedMark = markSvg
  .replace('width="1465" height="880" viewBox="0 0 1465 880"', 'width="1465" height="920" viewBox="0 0 1465 920"')
  .replace('height="880" viewBox="0 0 1465 880"', 'height="920" viewBox="0 0 1465 920"');
writeFileSync('public/brand/logo-mark.svg', fixedMark, 'utf8');
console.log('Fixed logo-mark.svg viewBox: 0 0 1465 920');

// Verify logo-full.svg viewBox
const fullSvg = readFileSync('public/brand/logo-full.svg', 'utf8');
const fullVB = fullSvg.match(/viewBox="([^"]+)"/);
console.log('logo-full.svg viewBox:', fullVB && fullVB[1]);

console.log('Done!');
