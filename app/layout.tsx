import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Script from "next/script";

import "./globals.css";
import OmniToaster from "@/components/omni-toaster";
import PageTransition from "@/components/PageTransition";
import { absoluteUrl, site } from "@/lib/site";

const font = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin", "thai"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mimir Suites Cloud | CloudAI Thailand",
    template: "%s | CloudAI Thailand",
  },
  description: site.description,
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: site.openGraphLocale,
    siteName: site.name,
  },
  twitter: { card: "summary" },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": absoluteUrl("/#mimir-suites-cloud"),
    url: absoluteUrl("/"),
    name: site.suiteName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Desktop",
    description: site.description,
    brand: { "@type": "Brand", name: "Mimir" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.htmlLang} className="scroll-smooth">
      <body className={`${font.variable} antialiased`}>
        {structuredData.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
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
