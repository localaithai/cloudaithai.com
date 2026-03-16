import { bundle } from "@remotion/bundler";
import { renderFrames, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log("📦 Bundling HeroLoopMobile...");
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "./index.ts"),
    webpackOverride: (config) => config,
  });

  const composition = await selectComposition({
    serveUrl: bundled,
    id: "HeroLoopMobile",
  });

  const outputDir = path.join(__dirname, "../public/hero-frames-mobile");

  console.log(`🖼️  Rendering ${composition.durationInFrames} mobile frames...`);
  const { assetsInfo } = await renderFrames({
    composition,
    serveUrl: bundled,
    outputDir,
    imageFormat: "jpeg",
    jpegQuality: 85,
    onFrameUpdate: (frame: number) => {
      if (frame % 60 === 0) console.log(`   Frame ${frame}/${composition.durationInFrames}`);
    },
  });

  console.log("✅ Mobile frames done!");
}

main().catch(console.error);
