import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import ScrollShowcase from "@/components/ScrollShowcase";
import Tools from "@/components/Tools";
import Solutions from "@/components/Solutions";
import HomeAI from "@/components/HomeAI";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fbfbfd]">
      <Navbar />
      <Hero />
      <Models />
      <ScrollShowcase />
      <Tools />
      <Solutions />
      <HomeAI />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
