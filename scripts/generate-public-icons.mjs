import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const svg = readFileSync(join(root, "favicon.svg"));

const out = [
  ["apple-touch-icon.png", 180],
  ["icon-192.png", 192],
  ["icon-512.png", 512],
];

for (const [name, size] of out) {
  await sharp(svg).resize(size, size).png().toFile(join(root, name));
  console.log("wrote", name);
}
