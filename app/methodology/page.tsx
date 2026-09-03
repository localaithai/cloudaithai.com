import MethodologySection from "@/components/MethodologySection";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/methodology");

export default function MethodologyPage() {
  return (
    <SitePage>
      <MethodologySection />
    </SitePage>
  );
}
