import CompareSection from "@/components/CompareSection";
import SitePage from "@/components/site-page";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/compare");

export default function ComparePage() {
  return (
    <SitePage>
      <SitelinkTrail path="/compare" />
      <CompareSection />
    </SitePage>
  );
}
