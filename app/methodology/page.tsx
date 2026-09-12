import MethodologySection from "@/components/MethodologySection";
import SitePage from "@/components/site-page";
import { SitelinkTrail } from "@/components/SitelinkTrail";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/methodology");

export default function MethodologyPage() {
  return (
    <SitePage>
      <SitelinkTrail path="/methodology" />
      <MethodologySection />
    </SitePage>
  );
}
