import type { CSSProperties, ReactNode } from "react";
import SitePage from "@/components/site-page";
import "./blog.css";

const tokens = {
  "--blog-bg": "#fbfbfd",
  "--blog-surface": "#fff",
  "--blog-ink": "#1d1d1f",
  "--blog-muted": "#515157",
  "--blog-border": "#d6d6db",
  "--blog-accent": "#0071e3",
  "--blog-accent-ink": "#fff",
  "--blog-tint": "#eef5ff",
  "--blog-radius": "16px",
} as CSSProperties;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/blog/feed.xml"
        title="RSS"
      />
      <SitePage>
        <div className="mimir-blog" style={tokens}>
          {children}
        </div>
      </SitePage>
    </>
  );
}
