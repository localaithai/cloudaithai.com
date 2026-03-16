import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CreatorSection from "@/components/CreatorSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับ Content Creator & Agency — เขียน Script Caption วาง Content Calendar",
  description: "AI Automation สำหรับ Creator & Agency เขียน TikTok script, IG caption, วาง content calendar, วิเคราะห์ engagement เริ่มต้น ฿9,900",
};

export default function CreatorSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <CreatorSection />
      <Contact />
      <Footer />
    </main>
  );
}
