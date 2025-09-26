#!/usr/bin/env node
// Copies raw images & videos from the original root folders into Vite public for easier local dev.
// Run: npm run sync:assets (then optionally npm run optimize:images)
import { cp } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

const projectRoot = process.cwd();
// original static folders (one level up from vite app)
const SRC_IMAGES = path.resolve(projectRoot, "../images");
const SRC_VIDEOS = path.resolve(projectRoot, "../videos");
const OUT_IMAGES = path.join(projectRoot, "public/images");
const OUT_VIDEOS = path.join(projectRoot, "public/videos");

async function safeCopy(src, dest) {
  if (!existsSync(src)) {
    console.log("Skip (not found):", src);
    return;
  }
  await cp(src, dest, { recursive: true });
  console.log("Copied", src, "->", dest);
}

(async function run() {
  try {
    await safeCopy(SRC_IMAGES, OUT_IMAGES);
    await safeCopy(SRC_VIDEOS, OUT_VIDEOS);
    console.log("Asset sync complete.");
  } catch (e) {
    console.error("Asset sync failed:", e.message);
    process.exit(1);
  }
})();
