import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/healthcare");

export default function HealthcarePage() {
  return (
    <SitePage>
      <UseCases solution="healthcare" />
    </SitePage>
  );
}
