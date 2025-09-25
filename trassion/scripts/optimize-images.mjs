#!/usr/bin/env node
import fg from "fast-glob";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.resolve(process.cwd(), "../images"); // original static folder
const OUT_DIR = path.resolve(process.cwd(), "public/images");

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function processImage(file) {
  const rel = path.relative(SRC_DIR, file);
  const outBase = path.join(OUT_DIR, rel).replace(/\\/g, "/");
  const outDir = path.dirname(outBase);
  await ensureDir(outDir);
  const ext = path.extname(file).toLowerCase();
  const baseNoExt = outBase.replace(/\.[^.]+$/, "");
  const image = sharp(file);
  const meta = await image.metadata();
  const width = meta.width || 0;

  // Generate multiple responsive sizes (only shrink, never upscale)
  const targetWidths = [1920, 1280, 1024, 768, 512, 320].filter(
    (w) => w < width || width === 0
  );
  if (targetWidths.length === 0) targetWidths.push(width); // original size if smaller than smallest target

  await Promise.all(
    targetWidths.map(async (w) => {
      const suffix = `-${w}w.webp`;
      await image
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(`${baseNoExt}${suffix}`);
    })
  );

  // Also produce an optimized original format webp fallback at original width
  await image.clone().webp({ quality: 82 }).toFile(`${baseNoExt}-orig.webp`);
  console.log("Optimized", rel);
}

async function run() {
  const files = await fg(["**/*.{png,jpg,jpeg,webp}"], {
    cwd: SRC_DIR,
    absolute: true,
  });
  if (!files.length) {
    console.log("No source images found in", SRC_DIR);
    return;
  }
  for (const f of files) {
    try {
      await processImage(f);
    } catch (e) {
      console.error("Error optimizing", f, e.message);
    }
  }
  console.log(
    'Image optimization complete. Place <img src="/images/yourfile-512w.webp" srcSet="..." /> in components.'
  );
}

run();
