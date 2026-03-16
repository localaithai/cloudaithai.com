import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrototypeSection from "@/components/PrototypeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prototype & Demo — ทดลองก่อนตัดสินใจ",
  description:
    "เราสร้าง Prototype ฟรีให้ลูกค้าทดลองใช้ก่อนตัดสินใจ ไม่พอใจ ไม่ต้องจ่าย AI Chatbot, Workflow Automation, Dashboard พร้อมทดลองใน 3-5 วัน",
};

export default function PrototypePage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <PrototypeSection />
      <Contact />
      <Footer />
    </main>
  );
}
