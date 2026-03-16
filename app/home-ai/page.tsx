import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HomeAISection from "@/components/HomeAISection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home AI Assistant — ผู้ช่วย AI ส่วนตัว สั่งผ่าน LINE จัดการชีวิตประจำวัน",
  description: "ผู้ช่วย AI ที่บ้าน เหมือน JARVIS สั่งผ่าน LINE จัดการปฏิทิน อีเมล smart home สั่งของ วางแผนการเดินทาง เริ่มต้น ฿9,900",
};

export default function HomeAiPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <HomeAISection />
      <Contact />
      <Footer />
    </main>
  );
}
