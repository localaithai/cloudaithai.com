import AboutSection from "@/components/AboutSection";
import SitePage from "@/components/site-page";
import { metadataFor } from "@/lib/site-data";

export const metadata = metadataFor("/about");

export default function AboutPage() {
  return (
    <SitePage>
      <AboutSection />
    </SitePage>
  );
}
