import PricingPage from "@/components/PricingPage";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/pricing");

export default function PricingRoute() {
  return (
    <SitePage>
      <PricingPage />
    </SitePage>
  );
}
