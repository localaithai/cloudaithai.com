import HowWeWorkSection from "@/components/HowWeWorkSection";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/how-it-works");

export default function HowItWorksPage() {
  return (
    <SitePage>
      <HowWeWorkSection />
    </SitePage>
  );
}
