import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — ตัวอย่างผลลัพธ์จริง",
  description:
    "ดูผลลัพธ์จริงจากธุรกิจไทยที่ใช้ AI Automation — ROI ชัดเจน คืนทุนเร็ว เพิ่มรายได้ ลดต้นทุน ด้วย CloudAI Thailand",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <CaseStudiesSection />
      <Contact />
      <Footer />
    </main>
  );
}
