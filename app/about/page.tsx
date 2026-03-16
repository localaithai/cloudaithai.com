import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา — CloudAI Thailand",
  description:
    "ทำไมธุรกิจไทย 50+ รายเลือกใช้ CloudAI Thailand — ปรึกษาฟรี ไม่ผูกสัญญา ติดตั้งเสร็จ 1-2 สัปดาห์ ใช้ Frontier Model ฉลาดที่สุด Open-source tools ไม่มีค่า license",
};

export default function AboutPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <AboutSection />
      <Contact />
      <Footer />
    </main>
  );
}
