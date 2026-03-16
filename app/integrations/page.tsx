import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Integrations from "@/components/Integrations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "55+ Integrations | เชื่อมต่อทุกแอป",
  description:
    "เชื่อมต่อ 55+ integrations — AI Models (GPT-5, Claude, Gemini), Automation (n8n, Flowise, Dify), Chat (LINE, WhatsApp, Facebook), Hosting, Database และอื่นๆ ทั้งหมดเชื่อมกันได้ผ่าน CloudAI Thailand",
  keywords: [
    "AI integrations",
    "n8n Thailand",
    "Flowise",
    "LINE API",
    "GPT-5",
    "Claude",
    "Gemini",
    "automation",
    "CloudAI",
  ],
  openGraph: {
    title: "55+ Integrations | เชื่อมต่อทุกแอป — CloudAI Thailand",
    description:
      "เชื่อมต่อ AI Models, Automation tools, Chat platforms, Hosting, Database และอื่นๆ กว่า 55 integrations ผ่าน CloudAI Thailand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "55+ Integrations | เชื่อมต่อทุกแอป — CloudAI Thailand",
    description:
      "เชื่อมต่อ AI Models, Automation tools, Chat platforms, Hosting, Database และอื่นๆ กว่า 55 integrations",
  },
};

export default function IntegrationsPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <Integrations />
      <Contact />
      <Footer />
    </main>
  );
}
