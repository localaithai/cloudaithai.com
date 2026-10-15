import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { site } from "./src/lib/site";

// Static output served by Vercel from dist/. No API routes, no middleware, no
// request-time rendering: every endpoint under src/pages/ is prerendered.
export default defineConfig({
  site: site.url,
  output: "static",
  // One canonical URL shape, matching vercel.json's trailingSlash.
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
  integrations: [react()],
  // Bai Jamjuree carries both Thai and Latin runs.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Bai Jamjuree",
      cssVariable: "--font-bai",
      weights: [200, 300, 400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "thai"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
