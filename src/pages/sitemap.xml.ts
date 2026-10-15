import type { APIRoute } from "astro";
import { blog } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";
import { REVIEWED_DATE, routes } from "@/lib/site-data";

const lastModified = new Date("2026-09-04T00:00:00.000Z");
const scopeReviewedPaths = new Set<string>([
  "/",
  "/ecosystem",
  "/pricing",
  "/solutions/creator",
]);

export const GET: APIRoute = () => {
  const entries = [
    ...routes.map((route) => ({
      url: absoluteUrl(route.canonicalPath),
      lastModified: scopeReviewedPaths.has(route.path)
        ? new Date(`${REVIEWED_DATE}T00:00:00+07:00`)
        : lastModified,
      changeFrequency: route.frequency,
      priority: route.priority,
    })),
    ...blog.sitemapEntries(),
  ];
  const urls = entries.map(
    (entry) =>
      `<url>\n<loc>${entry.url}</loc>\n<lastmod>${entry.lastModified.toISOString()}</lastmod>\n<changefreq>${entry.changeFrequency}</changefreq>\n<priority>${entry.priority}</priority>\n</url>\n`,
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("")}</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
