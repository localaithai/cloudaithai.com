import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI สำหรับ Content Creator & Agency",
  description:
    "ระบบ AI Automation สำหรับ Content Creator และ Agency สร้างคอนเทนต์อัตโนมัติ ตัดต่อวิดีโอ เขียนสคริปต์ จัดการ Social Media และวางแผนคอนเทนต์ด้วย AI",
};

export default function CreatorSolutionPage() {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] mb-4">
            AI สำหรับ Content Creator & Agency
          </h1>
          <p className="text-lg text-[#6e6e73]">Coming soon</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
