import { absoluteUrl, TITLE_SUFFIX } from "@/lib/site";
import { type RoutePath, routeAt } from "@/lib/site-data";
import {
  HASHED_SOCIAL_IMAGE,
  type OpenGraph,
  pageSocial,
  type TwitterCard,
} from "@/lib/social";

/** Everything the base layout renders into <head> for one page. */
export type PageHead = {
  /** The <title> text, rendered as given. */
  readonly title: string;
  readonly description: string;
  /** Absolute canonical URL. */
  readonly canonical: string;
  readonly openGraph: OpenGraph;
  readonly twitter: TwitterCard;
  /** Adds a noindex robots tag. */
  readonly noindex?: boolean;
};

/**
 * Head for a route in site-data.ts. The <title> is the bare route title while
 * the social titles carry TITLE_SUFFIX: that is what the Next.js build shipped,
 * because the root layout's metadata replaced its own title template.
 */
export function pageHead(path: RoutePath): PageHead {
  const route = routeAt(path);
  return {
    title: route.title,
    description: route.description,
    canonical: absoluteUrl(route.canonicalPath),
    ...pageSocial({
      path: route.canonicalPath,
      title: `${route.title}${TITLE_SUFFIX}`,
      description: route.description,
    }),
  };
}

/** Next.js's default not-found page: the home head, noindex, hashed card. */
export function notFoundHead(): PageHead {
  const home = pageHead("/");
  return {
    ...home,
    title: "404: This page could not be found.",
    noindex: true,
    openGraph: { ...home.openGraph, images: [HASHED_SOCIAL_IMAGE] },
  };
}
