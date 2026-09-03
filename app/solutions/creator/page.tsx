import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/creator");

export default function CreatorPage() {
  return (
    <SitePage>
      <UseCases solution="creator" />
    </SitePage>
  );
}
