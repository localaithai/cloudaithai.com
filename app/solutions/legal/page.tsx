import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LegalSection from "@/components/LegalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับสำนักงานกฎหมาย — วิเคราะห์สัญญา ค้นข้อกฎหมาย Draft เอกสาร",
  description:
    "ระบบ AI สำหรับสำนักงานกฎหมาย วิเคราะห์สัญญา 50 หน้าใน 5 นาที ค้นข้อกฎหมายใน 30 วินาที Draft เอกสารใน 10 นาที ตรวจ PDPA compliance อัตโนมัติ เริ่มต้น ฿19,900",
};

export default function LegalSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <LegalSection />
      <Contact />
      <Footer />
    </main>
  );
}
