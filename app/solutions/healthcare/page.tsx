import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับคลินิก & โรงพยาบาล",
  description:
    "ระบบ AI Automation สำหรับคลินิกและโรงพยาบาล นัดหมายอัตโนมัติ วิเคราะห์อาการเบื้องต้น จัดการเวชระเบียน ติดตามผู้ป่วย และเพิ่มประสิทธิภาพการดูแลสุขภาพด้วย AI",
};

export default function HealthcareSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-4">
            AI สำหรับคลินิก & โรงพยาบาล
          </h1>
          <p className="text-lg text-[#6e6e73]">Coming soon</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
