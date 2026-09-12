import Link from "next/link";
import { site } from "@/lib/site";
import { routeAt } from "@/lib/site-data";

export function SitelinkTrail({
  path,
}: {
  path: Parameters<typeof routeAt>[0];
}) {
  const route = routeAt(path);
  const sitelinkName = "sitelinkName" in route ? route.sitelinkName : undefined;
  if (!sitelinkName) throw new Error(`Missing sitelink name for ${path}`);

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl px-6 pt-6 text-sm text-[#6e6e73]"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-[#06c]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-[#1d1d1f]">
            {sitelinkName}
          </li>
        </ol>
      </nav>
      <h1 className="sr-only">{sitelinkName}</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: site.url,
              },
              { "@type": "ListItem", position: 2, name: sitelinkName },
            ],
          }).replaceAll("<", "\\u003c"),
        }}
      />
    </>
  );
}
