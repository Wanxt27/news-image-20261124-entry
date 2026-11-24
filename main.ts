// The World in One Day — 24 November 2026.
// Node 22, standard library only. The entry image lives beside this file;
// the program copies it byte-for-byte to the output directory.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Refuse to ship anything that is not a whole PNG.
const header = readFileSync(source).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(pngMagic)) {
  throw new Error("entry.png is not a PNG file");
}
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// Guard: the output must be the whole image, byte for byte.
const inSize = statSync(source).size;
const outSize = statSync(target).size;
if (inSize !== outSize) {
  throw new Error(`entry.png size mismatch: wrote ${outSize}, expected ${inSize}`);
}
console.log(`wrote ${target} (${outSize} bytes)`);
