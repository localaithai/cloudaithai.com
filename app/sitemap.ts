import type { MetadataRoute } from "next";
import { routes } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/site";
export const dynamic = "force-static";
const lastModified = new Date("2026-09-04T00:00:00.000Z");
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.canonicalPath),
    lastModified:
      route.canonicalPath === "/"
        ? new Date("2026-10-03T00:00:00+07:00")
        : lastModified,
    changeFrequency: route.frequency,
    priority: route.priority,
  }));
}
