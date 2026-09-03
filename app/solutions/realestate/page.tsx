import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/realestate");

export default function RealEstatePage() {
  return (
    <SitePage>
      <UseCases solution="realestate" />
    </SitePage>
  );
}
