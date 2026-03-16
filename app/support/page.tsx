import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SupportPage from "@/components/SupportPage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support & Maintenance — ดูแลระบบ AI ของคุณ",
  description:
    "บริการดูแลระบบ AI หลังติดตั้ง Monthly Maintenance Plans ตั้งแต่ ฿3,900/เดือน SLA 99.9% monitoring 24/7 LINE support ทีมช่างพร้อมแก้ปัญหาให้ทันที",
};

export default function SupportPageRoute() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <SupportPage />
      <Contact />
      <Footer />
    </main>
  );
}
