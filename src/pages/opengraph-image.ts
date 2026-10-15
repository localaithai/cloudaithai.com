import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";
import type { APIRoute } from "astro";
import satori from "satori";
import { OG_SIZE, OgCard } from "@/components/og-card";

// Satori needs an explicit font and cannot read woff2. Noto Sans Regular is
// the face next/og drew this card with, so the regenerated PNG matches it.
const FONT = "@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff";

export const GET: APIRoute = async () => {
  const font = await readFile(createRequire(import.meta.url).resolve(FONT));
  const svg = await satori(OgCard(), {
    ...OG_SIZE,
    fonts: [{ name: "Noto Sans", data: font, weight: 400, style: "normal" }],
  });
  const png = new Resvg(svg, {
    fitTo: { mode: "width", value: OG_SIZE.width },
  })
    .render()
    .asPng();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
