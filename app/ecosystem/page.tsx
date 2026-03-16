import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EcosystemSection from "@/components/EcosystemSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecosystem — เครือข่าย AI ครบวงจร",
  description:
    "เครือข่าย CloudAI + LocalAI ครบวงจร — Cloud-based Frontier Models, On-premise Local AI, Technology Partners, เลือกแบบที่เหมาะกับธุรกิจคุณ",
  keywords: [
    "CloudAI ecosystem",
    "LocalAI Thailand",
    "AI partners",
    "Cloud vs Local AI",
    "AI Thailand",
    "n8n",
    "Flowise",
    "Dify",
    "OpenAI",
    "Anthropic",
  ],
  openGraph: {
    title: "Ecosystem — เครือข่าย AI ครบวงจร | CloudAI Thailand",
    description:
      "เครือข่าย CloudAI + LocalAI ครบวงจร — เลือกแบบที่เหมาะกับธุรกิจคุณ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecosystem — เครือข่าย AI ครบวงจร | CloudAI Thailand",
    description:
      "เครือข่าย CloudAI + LocalAI ครบวงจร — Cloud & On-premise AI Solutions",
  },
};

export default function EcosystemPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <EcosystemSection />
      <Contact />
      <Footer />
    </main>
  );
}
