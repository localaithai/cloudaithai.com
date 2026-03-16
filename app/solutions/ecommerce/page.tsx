import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับร้านค้าออนไลน์",
  description:
    "ระบบ AI Automation สำหรับร้านค้าออนไลน์ ตอบแชทลูกค้าอัตโนมัติ จัดการออเดอร์ วิเคราะห์ยอดขาย แนะนำสินค้า และเพิ่มประสิทธิภาพ E-commerce ด้วย AI",
};

export default function EcommerceSolutionPage() {
  return (
    <main className="bg-[#f2f2f7] mesh-gradient min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1c1c1e] mb-4">
            AI สำหรับร้านค้าออนไลน์
          </h1>
          <p className="text-lg text-[#6e6e73]">Coming soon</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
