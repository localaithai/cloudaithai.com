import { APP_ID, ORG_ID, SITE_ID, absoluteUrl, site } from "@/lib/site";

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": ORG_ID, name: site.name, url: site.url, slogan: site.tagline, description: site.description },
      { "@type": "WebSite", "@id": SITE_ID, name: site.name, url: site.url, description: site.description, inLanguage: site.htmlLang, publisher: { "@id": ORG_ID } },
      { "@type": "SoftwareApplication", "@id": APP_ID, url: absoluteUrl("/"), name: site.suiteName, applicationCategory: "BusinessApplication", operatingSystem: "Desktop", description: site.description, brand: { "@type": "Brand", name: "Mimir" }, publisher: { "@id": ORG_ID } },
    ],
  };
}
