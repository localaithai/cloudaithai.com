import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EcommerceSection from "@/components/EcommerceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับร้านค้าออนไลน์ — ตอบแชท จัดการ Order สร้าง Content อัตโนมัติ",
  description: "ระบบ AI Automation สำหรับ E-commerce ตอบแชทลูกค้า 24/7 จัดการออเดอร์ สร้าง product description วิเคราะห์ยอดขาย เริ่มต้น ฿19,900",
};

export default function EcommerceSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <EcommerceSection />
      <Contact />
      <Footer />
    </main>
  );
}
