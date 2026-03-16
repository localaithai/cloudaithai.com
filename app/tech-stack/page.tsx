import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechStackPage from "@/components/TechStackPage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tech Stack — เครื่องมือ AI ที่เราใช้",
  description:
    "เจาะลึกทุกเครื่องมือ AI ที่ CloudAI Thailand ใช้ — n8n, Flowise, OpenClaw, Dify, ActivePieces พร้อมเหตุผลว่าทำไมถึงเลือกใช้ และเชื่อมต่อกันอย่างไร",
  keywords: [
    "n8n Thailand",
    "Flowise RAG",
    "OpenClaw AI Agent",
    "Dify AI Platform",
    "ActivePieces automation",
    "AI tech stack",
    "เครื่องมือ AI",
    "CloudAI Thailand",
  ],
  openGraph: {
    title: "Tech Stack — เครื่องมือ AI ที่เราใช้ | CloudAI Thailand",
    description:
      "เจาะลึก 5 เครื่องมือ AI หลักที่เราใช้ พร้อม architecture diagram แสดงการเชื่อมต่อ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack — เครื่องมือ AI ที่เราใช้ | CloudAI Thailand",
    description:
      "n8n, Flowise, OpenClaw, Dify, ActivePieces — ทำไมถึงเลือกใช้ และเชื่อมต่อกันอย่างไร",
  },
};

export default function TechStackRoute() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <TechStackPage />
      <Contact />
      <Footer />
    </main>
  );
}
