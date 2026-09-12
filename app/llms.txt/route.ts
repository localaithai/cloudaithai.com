import { absoluteUrl, site } from "@/lib/site";
import { faqs, routes } from "@/lib/site-data";

export const dynamic = "force-static";

export function GET() {
  const pages = routes.map((route) => `- [${route.title}](${absoluteUrl(route.canonicalPath)}): ${route.description}`);
  const questions = faqs.map(([question, answer]) => `- ${question}: ${answer}`);
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Facts",
    "- Mimir Suites Cloud is installed separately on each staff machine, with one seat per machine and data kept separate by seat.",
    "- Document text goes to the selected cloud model after personally identifiable information is redacted by default.",
    "- Setup includes choosing a backup folder for each seat.",
    "- The Cloud edition needs no AI machine, worker or hosted server from CloudAI Thailand.",
    "",
    "## Frequently asked questions",
    ...questions,
    "",
    "## Pages",
    ...pages,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
