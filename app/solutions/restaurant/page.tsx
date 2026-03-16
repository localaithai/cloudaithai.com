import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RestaurantSection from "@/components/RestaurantSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับร้านอาหาร & F&B",
  description:
    "ระบบ AI Automation สำหรับร้านอาหารและธุรกิจ F&B รับออเดอร์อัตโนมัติ จัดการสต๊อกวัตถุดิบ คำนวณ food cost ตอบรีวิว สรุปยอดขาย เริ่มต้น ฿14,900/เดือน",
};

export default function RestaurantSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <RestaurantSection />
      <Contact />
      <Footer />
    </main>
  );
}
