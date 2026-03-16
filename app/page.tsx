import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import ScrollShowcase from "@/components/ScrollShowcase";
import Tools from "@/components/Tools";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f2f2f7] mesh-gradient min-h-screen">
      <Navbar />
      <Hero />
      <Models />
      <ScrollShowcase />
      <Tools />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
