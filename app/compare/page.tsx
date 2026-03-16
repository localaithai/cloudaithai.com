import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CompareSection from "@/components/CompareSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เปรียบเทียบ — ChatGPT vs Custom AI, Cloud vs Local",
  description:
    "เปรียบเทียบ ChatGPT Plus กับ CloudAI, Cloud AI กับ Local AI, Agency กับเรา, DIY กับเรา ดูข้อดีข้อเสียแต่ละทางเลือกแบบจัดเต็ม เพื่อให้คุณตัดสินใจได้ถูกต้อง",
};

export default function ComparePage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <CompareSection />
      <Contact />
      <Footer />
    </main>
  );
}
