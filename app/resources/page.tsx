import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ResourcesSection from "@/components/ResourcesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Resources — คู่มือ AI Automation สำหรับธุรกิจไทย",
  description:
    "คู่มือ บทความ เครื่องมือเปรียบเทียบ และเครื่องคำนวณ ROI สำหรับธุรกิจที่ต้องการเริ่มใช้ AI Automation — CloudAI Thailand",
};

export default function ResourcesPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <ResourcesSection />
      <Contact />
      <Footer />
    </main>
  );
}
