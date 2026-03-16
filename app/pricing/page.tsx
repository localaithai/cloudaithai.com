import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingPage from "@/components/PricingPage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ราคา — แพ็คเกจ AI Automation เริ่มต้น ฿9,900",
  description:
    "ราคาบริการ AI Automation สำหรับธุรกิจไทย Setup fee ครั้งเดียว + ค่า hosting & API ตามใช้จริง ไม่มี subscription ซ่อน ไม่มี lock-in เริ่มต้น ฿9,900",
};

export default function PricingPageRoute() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <PricingPage />
      <Contact />
      <Footer />
    </main>
  );
}
