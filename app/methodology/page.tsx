import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MethodologySection from "@/components/MethodologySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Methodology — หลักการทำงานของเรา",
  description:
    "เรียนรู้หลักการทำงานของ CloudAI Thailand — Open-Source First, Data Privacy, PDPA Compliance, Security Best Practices และวิธีการทำงานตั้งแต่ Discovery ถึง Deploy",
};

export default function MethodologyPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <MethodologySection />
      <Contact />
      <Footer />
    </main>
  );
}
