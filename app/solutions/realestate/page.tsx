import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RealEstateSection from "@/components/RealEstateSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับอสังหาริมทรัพย์",
  description:
    "ระบบ AI Automation สำหรับอสังหาริมทรัพย์ ตอบคำถามลูกค้าอัตโนมัติ วิเคราะห์ราคาตลาด จับคู่ผู้ซื้อกับทรัพย์สิน จัดการนัดชม และปิดการขายด้วย AI",
};

export default function RealestateSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <RealEstateSection />
      <Contact />
      <Footer />
    </main>
  );
}
