// Builds apple-icon.png (180) and favicon.ico (16/32/48, PNG-encoded) from reference/logo/mark-cobalt.svg.
// icon.svg is a straight copy of the same file. Run: npm run icons
import sharp from 'sharp';
import { readFile, writeFile, copyFile } from 'node:fs/promises';

const src = 'reference/logo/mark-cobalt.svg';
const svg = await readFile(src);

await copyFile(src, 'src/app/icon.svg');

// Apple touch icon: iOS masks corners itself, so render the mark on a full cobalt square.
const square = Buffer.from(svg.toString().replace('rx="10"', 'rx="0"'));
await sharp(square, { density: 512 }).resize(180, 180).png().toFile('src/app/apple-icon.png');

const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map((s) => sharp(svg, { density: 512 }).resize(s, s).png().toBuffer()));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
const dir = Buffer.alloc(16 * sizes.length);
let offset = 6 + dir.length;
pngs.forEach((png, i) => {
  const o = i * 16;
  dir.writeUInt8(sizes[i] % 256, o);
  dir.writeUInt8(sizes[i] % 256, o + 1);
  dir.writeUInt8(0, o + 2);
  dir.writeUInt8(0, o + 3);
  dir.writeUInt16LE(1, o + 4);
  dir.writeUInt16LE(32, o + 6);
  dir.writeUInt32LE(png.length, o + 8);
  dir.writeUInt32LE(offset, o + 12);
  offset += png.length;
});
await writeFile('src/app/favicon.ico', Buffer.concat([header, dir, ...pngs]));
console.log('icons written: src/app/icon.svg, apple-icon.png, favicon.ico');
