type SiteConfig = {
  name: string;
  suiteName: string;
  url: string;
  htmlLang: string;
  openGraphLocale: string;
  tagline: string;
  description: string;
  primaryCta: { label: string; href: string };
  contact: { email: string; phone: string; line: string; lineUrl: string };
  legalDisclosure?: string;
};

export const site: SiteConfig = {
  name: "CloudAI Thailand",
  suiteName: "Mimir Suites Cloud",
  url: "https://www.cloudaithai.com",
  htmlLang: "th",
  openGraphLocale: "th_TH",
  tagline: "Mimir Suites Cloud สำหรับงานเอกสารและงานธุรกิจบนทุกเครื่องของทีม",
  description:
    "Mimir Suites Cloud ติดตั้งบนเครื่องพนักงาน เลือกแอปและโมเดลคลาวด์ได้ โดยไม่ต้องซื้อเครื่อง AI",
  primaryCta: { label: "Request a Demo", href: "/#contact" },
  contact: {
    email: "sales@cloudaithai.com",
    phone: "082-704-7606",
    line: "@542mgysj",
    lineUrl: "https://line.me/R/ti/p/@542mgysj",
  },
};

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();
