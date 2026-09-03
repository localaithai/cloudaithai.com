import CompareSection from "@/components/CompareSection";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/compare");

export default function ComparePage() {
  return (
    <SitePage>
      <CompareSection />
    </SitePage>
  );
}
