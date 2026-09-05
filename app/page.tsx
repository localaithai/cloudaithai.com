import Contact from "@/components/Contact";
import DataHandlingSection from "@/components/data-handling-section";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ScrollShowcase from "@/components/ScrollShowcase";
import Solutions from "@/components/Solutions";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/");

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content" className="bg-[#fbfbfd]">
        <Hero />
        <ScrollShowcase />
        <Models />
        <Solutions />
        <DataHandlingSection />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
