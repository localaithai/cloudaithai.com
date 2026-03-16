import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "วิธีทำงานของเรา — ตั้งแต่ปรึกษาถึงใช้งานจริง",
  description:
    "ดูขั้นตอนการทำงานของ CloudAI Thailand ตั้งแต่ปรึกษาฟรี ออกแบบ Solution ติดตั้ง VPS & Tools สร้าง AI Workflow ทดสอบ Training จนถึง Go Live + Support",
};

export default function HowItWorksPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <HowWeWorkSection />
      <Contact />
      <Footer />
    </main>
  );
}
