import AboutSection from "@/components/AboutSection";
import SitePage from "@/components/site-page";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/about");

export default function AboutPage() {
  return (
    <SitePage>
      <SitelinkTrail path="/about" />
      <AboutSection />
    </SitePage>
  );
}
