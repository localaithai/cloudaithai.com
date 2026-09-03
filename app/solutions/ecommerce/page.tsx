import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/ecommerce");

export default function EcommercePage() {
  return (
    <SitePage>
      <UseCases solution="ecommerce" />
    </SitePage>
  );
}
