import path from "node:path";
import { type BlogSite, createBlog, type Post } from "@mimir/blog";
import { ORG_ID, SITE_ID, site, TITLE_SUFFIX } from "@/lib/site";
import { blogIndex, routes } from "@/lib/site-data";

const normalizePath = (route: string) =>
  route === "" || route === "/" ? "/" : `${route.replace(/\/+$/, "")}/`;
export const blogSite: BlogSite = {
  url: site.url,
  name: site.name,
  locale: "th",
  titleSuffix: TITLE_SUFFIX,
  orgId: ORG_ID,
  siteId: SITE_ID,
};
export const blog = createBlog({
  site: blogSite,
  contentDir: path.resolve(process.cwd(), "content/blog"),
  knownPaths: routes.map(({ canonicalPath }) => normalizePath(canonicalPath)),
  moneyPaths: [
    "/methodology/",
    "/how-it-works/",
    "/compare/",
    "/solutions/legal/",
  ],
  index: blogIndex,
});
export const orderedBlogPosts = [...blog.posts()].sort(
  (left, right) =>
    right.published.getTime() - left.published.getTime() ||
    (right.newsDate ?? "").localeCompare(left.newsDate ?? "") ||
    left.slug.localeCompare(right.slug),
);
export function blogPostImage(post: Post): string {
  return post.hero
    ? `${blogSite.url}/blog-media/${path.basename(new URL(post.hero.src).pathname)}`
    : new URL(site.social.ogImage, blogSite.url).href;
}
