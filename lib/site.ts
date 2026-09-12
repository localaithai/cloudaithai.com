type SiteConfig = {
  name: string;
  suiteName: string;
  url: string;
  htmlLang: string;
  openGraphLocale: string;
  tagline: string;
  description: string;
  primaryCta: { label: string; href: string };
  legalDisclosure?: string;
  themeColor: string;
  social: { ogImage: string };
};

export const site: SiteConfig = {
  name: "CloudAI Thailand",
  suiteName: "Mimir Suites Cloud",
  url: "https://cloudaithai.com",
  htmlLang: "th",
  openGraphLocale: "th_TH",
  tagline: "Mimir Suites Cloud สำหรับงานเอกสารและงานธุรกิจบนทุกเครื่องของทีม",
  description:
    "Mimir Suites Cloud ติดตั้งบนเครื่องพนักงาน เลือกแอปและโมเดลคลาวด์ได้ โดยไม่ต้องซื้อเครื่อง AI",
  primaryCta: { label: "Request a Demo", href: "/#contact" },
  themeColor: "#fbfbfd",
  social: { ogImage: "/opengraph-image" },
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
export const TITLE_SUFFIX = ` | ${site.name}`;
export const ORG_ID = `${site.url}/#organization`;
export const SITE_ID = `${site.url}/#website`;
export const APP_ID = `${site.url}/#mimir-suites-cloud`;
export const PRIVATE_PATHS = ["/api/", "/admin/", "/preview/"] as const;

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production";
}
