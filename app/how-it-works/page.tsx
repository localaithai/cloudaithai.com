import HowWeWorkSection from "@/components/HowWeWorkSection";
import SitePage from "@/components/site-page";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/how-it-works");

export default function HowItWorksPage() {
  return (
    <SitePage>
      <SitelinkTrail path="/how-it-works" />
      <HowWeWorkSection />
    </SitePage>
  );
}
