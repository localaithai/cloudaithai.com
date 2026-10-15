import type { APIRoute } from "astro";
import { isProductionDeployment, PRIVATE_PATHS, site } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "meta-externalagent",
];

type Rule = { userAgent: string[]; allow?: string; disallow: string[] };

function body(): string {
  // Preview deployments must never be indexed.
  if (!isProductionDeployment()) return "User-Agent: *\nDisallow: /\n\n";
  const rules: Rule[] = [
    { userAgent: ["*"], allow: "/", disallow: [...PRIVATE_PATHS] },
    { userAgent: AI_CRAWLERS, allow: "/", disallow: [...PRIVATE_PATHS] },
  ];
  const groups = rules.map(
    (rule) =>
      rule.userAgent.map((agent) => `User-Agent: ${agent}\n`).join("") +
      (rule.allow ? `Allow: ${rule.allow}\n` : "") +
      rule.disallow.map((path) => `Disallow: ${path}\n`).join("") +
      "\n",
  );
  return `${groups.join("")}Host: ${site.url}\nSitemap: ${site.url}/sitemap.xml\n`;
}

export const GET: APIRoute = () =>
  new Response(body(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
