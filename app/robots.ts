import type { MetadataRoute } from "next";
import { PRIVATE_PATHS, isProductionDeployment, site } from "@/lib/site";
export const dynamic = "force-static";
export const AI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "CCBot", "meta-externalagent"];
export default function robots(): MetadataRoute.Robots {
  if (!isProductionDeployment()) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: [...PRIVATE_PATHS] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: [...PRIVATE_PATHS] },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
