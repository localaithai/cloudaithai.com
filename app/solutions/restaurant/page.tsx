import SitePage from "@/components/site-page";
import UseCases from "@/components/UseCases";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/solutions/restaurant");

export default function RestaurantPage() {
  return (
    <SitePage>
      <UseCases solution="restaurant" />
    </SitePage>
  );
}
