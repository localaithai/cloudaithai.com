import { bundle } from "@remotion/bundler";
import { renderFrames, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log("📦 Bundling HeroLoop...");
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "./index.ts"),
    webpackOverride: (config) => config,
  });

  const compositionId = "HeroLoop";

  console.log("🎬 Selecting composition:", compositionId);
  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
  });

  const outputDir = path.join(__dirname, "../public/hero-frames");

  console.log(`🖼️  Rendering ${composition.durationInFrames} frames to ${outputDir}...`);

  const { assetsInfo } = await renderFrames({
    composition,
    serveUrl: bundled,
    outputDir,
    imageFormat: "jpeg",
    jpegQuality: 90,
    onFrameUpdate: (frame: number) => {
      if (frame % 30 === 0) {
        console.log(`   Frame ${frame}/${composition.durationInFrames}`);
      }
    },
  });

  console.log("✅ Done! Hero frames saved to public/hero-frames/");
}

main().catch(console.error);
