import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai",
  subsets: ["latin", "thai"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const SITE_URL = "https://www.cloudaithai.com";
const TITLE = "CloudAI Thailand | AI Automation สำหรับธุรกิจไทย ใช้ GPT-5, Claude, Gemini เริ่มต้น ฿19,900";
const DESCRIPTION =
  "CloudAI Thailand — บริการติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model (GPT-5, Claude 4.6, Gemini 3.1 Pro, DeepSeek V3) + n8n, OpenClaw, Flowise, Dify สร้าง Workflow อัตโนมัติ ลดงานซ้ำ 80% ไม่มี solution สำเร็จรูป ทุกระบบสร้างเฉพาะสำหรับธุรกิจคุณ เริ่มต้น ฿19,900";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | CloudAI Thailand — AI Automation",
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  keywords: [
    "AI Automation Thailand",
    "Cloud AI Thailand",
    "CloudAI Thai",
    "คลาวด์ เอไอ ไทยแลนด์",
    "AI สำหรับธุรกิจไทย",
    "ระบบ AI อัตโนมัติ",
    "n8n Thailand",
    "AI Workflow Automation",
    "GPT-5 Thailand",
    "Claude AI Thailand",
    "Gemini AI Thailand",
    "DeepSeek Thailand",
    "Chatbot Thailand",
    "AI Agent Thailand",
    "Flowise Thailand",
    "Dify Thailand",
    "OpenClaw Thailand",
    "AI ร้านค้าออนไลน์",
    "AI Content Creator",
    "AI สำนักงานกฎหมาย",
    "AI คลินิก",
    "AI ร้านอาหาร",
    "AI อสังหาริมทรัพย์",
    "ติดตั้ง AI ประเทศไทย",
    "AI ไม่มีค่า license",
    "Open-source AI tools",
  ],
  authors: [{ name: "CloudAI Thailand" }],
  creator: "CloudAI Thailand",
  publisher: "CloudAI Thailand",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: "CloudAI Thailand",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloudAI Thailand — AI Automation สำหรับธุรกิจไทย",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "th-TH": SITE_URL,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CloudAI Thailand",
              url: SITE_URL,
              logo: `${SITE_URL}/icon.svg`,
              description: DESCRIPTION,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangkok",
                addressCountry: "TH",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66827047606",
                contactType: "sales",
                availableLanguage: ["Thai", "English"],
              },
              sameAs: ["https://www.localaithai.com"],
            }),
          }}
        />
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CloudAI Thailand",
              description: "บริการติดตั้งระบบ AI Automation สำหรับธุรกิจไทย ใช้ Frontier Model สร้าง Workflow อัตโนมัติ",
              url: SITE_URL,
              telephone: "+66827047606",
              email: "chavin@pace-design.co.th",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangkok",
                addressRegion: "Bangkok",
                addressCountry: "TH",
              },
              priceRange: "฿19,900 - ฿99,900",
              openingHours: "Mo-Fr 09:00-18:00",
            }),
          }}
        />
        {/* JSON-LD Product */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "CloudAI Automation Setup",
              description: "ติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model",
              brand: { "@type": "Brand", name: "CloudAI Thailand" },
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "19900",
                highPrice: "99900",
                priceCurrency: "THB",
                offerCount: "3",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "12",
                bestRating: "5",
              },
            }),
          }}
        />
        {/* JSON-LD FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "CloudAI Thailand คืออะไร?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "บริการติดตั้งระบบ AI Automation สำหรับธุรกิจไทย ใช้ Frontier Model อย่าง GPT-5, Claude, Gemini สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80% เริ่มต้น ฿19,900",
                  },
                },
                {
                  "@type": "Question",
                  name: "ค่าใช้จ่ายรายเดือนเท่าไหร่?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ค่า VPS hosting ฿700-5,000/เดือน + ค่า API ตามใช้จริง ฿300-8,000/เดือน ขึ้นกับปริมาณการใช้งาน",
                  },
                },
                {
                  "@type": "Question",
                  name: "ต้องมีความรู้ technical ไหม?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "ไม่ต้อง เราติดตั้ง ตั้งค่า สอนใช้ ดูแลให้ครบ ทุก tool เป็น visual drag-and-drop ไม่ต้องเขียนโค้ด",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${baiJamjuree.variable} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
