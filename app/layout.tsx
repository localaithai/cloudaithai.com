import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Script from "next/script";

import "./globals.css";
import OmniToaster from "@/components/omni-toaster";
import PageTransition from "@/components/PageTransition";
import { site } from "@/lib/site";
import { metadataFor } from "@/lib/site-data";
import { siteGraph } from "@/lib/structured-data";

const font = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin", "thai"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mimir Suites Cloud",
    template: "%s | CloudAI Thailand",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  ...metadataFor("/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.htmlLang} className="scroll-smooth">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly summary" />
      </head>
      <body className={`${font.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }} />
        <MotionConfig reducedMotion="user">
          <PageTransition>{children}</PageTransition>
        </MotionConfig>
        <Script src="https://localai-omni.vercel.app/cta.js" strategy="afterInteractive" />
        <Script src="https://localai-omni.vercel.app/analytics.js" strategy="afterInteractive" />
        <OmniToaster />
      </body>
    </html>
  );
}
