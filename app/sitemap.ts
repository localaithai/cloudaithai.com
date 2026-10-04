import { blog } from "@/lib/blog";
import type { MetadataRoute } from "next";
import { REVIEWED_DATE, routes } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";
const lastModified = new Date("2026-09-04T00:00:00.000Z");
const scopeReviewedPaths = new Set(["/", "/ecosystem", "/pricing", "/solutions/creator"]);
export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes.map((route): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(route.canonicalPath),
    lastModified:
      scopeReviewedPaths.has(route.path)
        ? new Date(`${REVIEWED_DATE}T00:00:00+07:00`)
        : lastModified,
    changeFrequency: route.frequency,
    priority: route.priority,
  })), ...blog.sitemapEntries()];
}
