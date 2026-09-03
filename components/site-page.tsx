import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionPageContent from "@/components/motion-page-content";

export default function SitePage({ children }: { children: ReactNode }) {
  return (
    <main className="bg-[#fbfbfd] min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <MotionPageContent>{children}</MotionPageContent>
      <Contact />
      <Footer />
    </main>
  );
}
