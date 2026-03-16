import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HealthcareSection from "@/components/HealthcareSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับคลินิก & โรงพยาบาล",
  description:
    "ระบบ AI Automation สำหรับคลินิกและโรงพยาบาล นัดหมายอัตโนมัติ ค้นข้อมูลยา สรุปเวชระเบียน เคลมประกัน รายงานประจำวัน เริ่มต้น ฿19,900/เดือน",
};

export default function HealthcareSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <HealthcareSection />
      <Contact />
      <Footer />
    </main>
  );
}
