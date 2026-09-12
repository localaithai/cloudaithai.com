import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

const socialImage = { url: site.social.ogImage, width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` } as const;

export function pageSocial({ path, title, description }: { path: string; title: string; description: string }): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { type: "website", siteName: site.name, locale: site.openGraphLocale, url: absoluteUrl(path), title, description, images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
  };
}
