/**
 * Raster icon pipeline: edit `public/icon-source.png`, then run `npm run icons`.
 * Writes apple-touch-icon.png, icon-192/512, favicon-32.png, and multi-size favicon.ico.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const srcPath = join(root, "icon-source.png");

/** Square output, letterboxing with black to match the sprout artwork. */
function resizeToPng(size) {
  return sharp(srcPath)
    .resize(size, size, {
      fit: "contain",
      position: "center",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    })
    .png();
}

const outputs = [
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
  ["favicon-32.png", 32],
];

for (const [name, size] of outputs) {
  await resizeToPng(size).toFile(join(root, name));
  console.log("wrote", name);
}

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(icoSizes.map((s) => resizeToPng(s).toBuffer()));
writeFileSync(join(root, "favicon.ico"), await toIco(icoBuffers));
console.log("wrote favicon.ico");
