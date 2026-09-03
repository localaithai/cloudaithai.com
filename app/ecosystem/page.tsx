import EcosystemSection from "@/components/EcosystemSection";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/ecosystem");

export default function EcosystemPage() {
  return (
    <SitePage>
      <EcosystemSection />
    </SitePage>
  );
}
