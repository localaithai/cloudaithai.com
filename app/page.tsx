import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import ScrollVideo from "@/components/ScrollVideo";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fbfbfd]">
      <Navbar />
      <Hero />
      <ScrollVideo />
      <Models />
      <Solutions />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
