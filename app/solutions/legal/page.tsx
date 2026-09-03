import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/legal");

export default function LegalPage() {
  return (
    <SitePage>
      <UseCases solution="legal" />
    </SitePage>
  );
}
