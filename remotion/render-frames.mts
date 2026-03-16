import { bundle } from "@remotion/bundler";
import { renderFrames, selectComposition } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log("📦 Bundling...");
  const bundled = await bundle({
    entryPoint: path.join(__dirname, "./index.ts"),
    webpackOverride: (config) => config,
  });

  const compositionId = "CloudWorkflow";

  console.log("🎬 Selecting composition:", compositionId);
  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
  });

  const outputDir = path.join(__dirname, "../public/frames");

  console.log(`🖼️  Rendering ${composition.durationInFrames} frames to ${outputDir}...`);
  await renderFrames({
    composition,
    serveUrl: bundled,
    outputDir,
    imageFormat: "jpeg",
    jpegQuality: 85,
    onFrameUpdate: (frame) => {
      if (frame % 30 === 0) {
        console.log(`   Frame ${frame}/${composition.durationInFrames}`);
      }
    },
  });

  console.log("✅ Done! Frames saved to public/frames/");
}

main().catch(console.error);
