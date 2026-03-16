import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home AI Assistant — ผู้ช่วย AI ที่บ้าน",
  description:
    "ระบบ AI Automation สำหรับบ้านอัจฉริยะ ผู้ช่วย AI ส่วนตัว ควบคุมอุปกรณ์ในบ้าน จัดการตารางเวลา สั่งของ วางแผนการเงิน และดูแลชีวิตประจำวันด้วย AI",
};

export default function HomeAiPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-4">
            Home AI Assistant — ผู้ช่วย AI ที่บ้าน
          </h1>
          <p className="text-lg text-[#6e6e73]">Coming soon</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
