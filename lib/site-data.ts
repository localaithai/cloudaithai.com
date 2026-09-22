import type { Metadata } from "next";

import { TITLE_SUFFIX, site } from "@/lib/site";
import { assertSnippet } from "@/lib/snippet";
import { pageSocial } from "@/lib/social";

type Frequency = "weekly" | "monthly";
type RouteDefinition = {
  path: string;
  canonicalPath: string;
  label: string;
  title: string;
  description: string;
  priority: number;
  frequency: Frequency;
  sitelinkName?: string;
};

export const routes = [
  {
    path: "/",
    canonicalPath: "/",
    label: "หน้าแรก",
    title: "Mimir Suites Cloud",
    description: site.description,
    priority: 1,
    frequency: "weekly",
  },
  {
    path: "/about",
    canonicalPath: "/about/",
    label: "About",
    title: "About",
    description:
      "Learn why Mimir Suites Cloud runs on each staff machine with no shared company data.",
    priority: 0.7,
    frequency: "monthly",
    sitelinkName: "About",
  },
  {
    path: "/compare",
    canonicalPath: "/compare/",
    label: "Compare",
    title: "Compare",
    description:
      "Compare Mimir Suites Cloud and on-site AI by data boundary, hardware, and workflow.",
    priority: 0.8,
    frequency: "monthly",
    sitelinkName: "Compare",
  },
  {
    path: "/ecosystem",
    canonicalPath: "/ecosystem/",
    label: "Ecosystem",
    title: "Ecosystem",
    description:
      "Explore Mimir app groups and cloud models for independent staff-machine installs.",
    priority: 0.7,
    frequency: "monthly",
    sitelinkName: "Ecosystem",
  },
  {
    path: "/how-it-works",
    canonicalPath: "/how-it-works/",
    label: "How it works",
    title: "How it works",
    description:
      "See how each staff machine gets its own Mimir apps, model, data, and backup folder.",
    priority: 0.8,
    frequency: "monthly",
    sitelinkName: "How it works",
  },
  {
    path: "/methodology",
    canonicalPath: "/methodology/",
    label: "Methodology",
    title: "Methodology",
    description:
      "Choose Mimir apps, cloud models, and independent seats that fit each team member's work.",
    priority: 0.7,
    frequency: "monthly",
    sitelinkName: "Methodology",
  },
  {
    path: "/pricing",
    canonicalPath: "/pricing/",
    label: "Pricing",
    title: "Pricing",
    description:
      "Review per-app, per-seat Mimir Suites Cloud pricing for the apps each staff machine needs.",
    priority: 0.9,
    frequency: "weekly",
    sitelinkName: "Pricing",
  },
  {
    path: "/solutions/ecommerce",
    canonicalPath: "/solutions/ecommerce/",
    label: "ร้านค้าออนไลน์",
    title: "สำหรับร้านค้าออนไลน์",
    description: "แอป Mimir สำหรับงานเอกสารสินค้า ข้อความ และข้อมูลร้านค้า",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/solutions/creator",
    canonicalPath: "/solutions/creator/",
    label: "Creator",
    title: "สำหรับ Creator",
    description: "แอป Mimir สำหรับสรุป บันทึกเสียง ร่าง และคำบรรยาย",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/solutions/legal",
    canonicalPath: "/solutions/legal/",
    label: "สำนักงานกฎหมาย",
    title: "สำหรับสำนักงานกฎหมาย",
    description: "แอป Mimir เพื่อช่วยอ่าน จัดข้อมูล และร่างจากเอกสาร",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/solutions/healthcare",
    canonicalPath: "/solutions/healthcare/",
    label: "งานเอกสารสุขภาพ",
    title: "สำหรับงานเอกสารสุขภาพ",
    description: "แอป Mimir สำหรับงานธุรการ เอกสาร และสรุป",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/solutions/realestate",
    canonicalPath: "/solutions/realestate/",
    label: "อสังหาริมทรัพย์",
    title: "สำหรับอสังหาริมทรัพย์",
    description: "แอป Mimir สำหรับเอกสารทรัพย์ ข้อเสนอ และข้อมูลประกอบงาน",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/solutions/restaurant",
    canonicalPath: "/solutions/restaurant/",
    label: "ร้านอาหาร",
    title: "สำหรับร้านอาหาร",
    description: "แอป Mimir สำหรับเอกสาร ข้อมูล และข้อความงานหลังบ้าน",
    priority: 0.8,
    frequency: "monthly",
  },
  {
    path: "/privacy",
    canonicalPath: "/privacy/",
    label: "นโยบายความเป็นส่วนตัว",
    title: "นโยบายความเป็นส่วนตัว",
    description:
      "การเก็บ ใช้ และคุ้มครองข้อมูลบนเว็บไซต์ CloudAI Thailand ตาม PDPA",
    priority: 0.3,
    frequency: "monthly",
  },
] as const satisfies readonly RouteDefinition[];

export type RoutePath = (typeof routes)[number]["path"];
export type SiteRoute = (typeof routes)[number];

export function routeAt(path: RoutePath): SiteRoute {
  const route = routes.find((candidate) => candidate.path === path);
  if (!route) throw new Error(`Missing site route: ${path}`);
  return route;
}

export function metadataFor(path: RoutePath): Metadata {
  const route = routeAt(path);
  assertSnippet(path, {
    title: route.title,
    description: route.description,
    titleSuffix: TITLE_SUFFIX,
  });
  const canonical = route.canonicalPath;
  const title = `${route.title}${TITLE_SUFFIX}`;
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical },
    ...pageSocial({ path: canonical, title, description: route.description }),
  };
}

for (const route of routes) metadataFor(route.path);

export const navigation = [
  { href: "/how-it-works", label: "วิธีใช้งาน", external: false },
  { href: "/solutions/ecommerce", label: "Solutions", external: false },
  { href: "/pricing", label: "ราคา", external: false },
  { href: "/compare", label: "เปรียบเทียบ", external: false },
  { href: "https://localaithai.com", label: "On-site option", external: true },
] as const;

export const footer = [
  { href: "/pricing", label: "Pricing", external: false },
  { href: "/how-it-works", label: "How it works", external: false },
  { href: "/compare", label: "Compare", external: false },
  { href: "/methodology", label: "Methodology", external: false },
  { href: "/ecosystem", label: "Ecosystem", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/privacy", label: "นโยบายความเป็นส่วนตัว", external: false },
  {
    href: "https://localaithai.com",
    label: "Local AI Thailand",
    external: true,
  },
] as const;

export const models = ["Claude", "Gemini", "GPT", "DeepSeek"] as const;

/** App names carry spaces ("Second Brain"); their marks are kebab-cased. */
export function appMarkPath(app: string): string {
  const slug = app
    .replace(/^Mimir /, "")
    .toLowerCase()
    .replace(/ /g, "-");
  return `/mimir-apps/${slug}.png`;
}

export const appGroups = [
  {
    title: "Converters",
    detail: "รับไฟล์แล้วช่วยแปลง ตรวจ สรุป หรือจัดรูปข้อมูลให้คนทำงานต่อ",
    apps: [
      "Scan",
      "Extract",
      "Verify",
      "Summarize",
      "Redact",
      "Translate",
      "Transcribe",
      "Write",
    ],
  },
  {
    title: "Systems of record",
    detail: "ข้อมูลแต่ละชุดอยู่ใน seat ของเครื่องนั้น",
    apps: [
      "Ledger",
      "Quotation",
      "Second Brain",
      "Intake",
      "Reconcile",
      "Docs",
      "Slides",
      "Chat",
    ],
  },
] as const;
export const setupSteps = [
  [
    "1",
    "ติดตั้ง Suite",
    "ติดตั้ง Mimir Suite บนเครื่องพนักงานแต่ละเครื่อง และเลือกโฟลเดอร์สำรองข้อมูลตอนตั้งค่า",
  ],
  ["2", "Sign in", "ลงชื่อเข้าใช้ใน seat ของเครื่องนั้น"],
  ["3", "เลือกแอป", "เลือก Mimir apps ที่ตรงกับงานของแต่ละคน"],
  ["4", "เลือกโมเดล", "เลือก Claude, Gemini, GPT หรือ DeepSeek ตามงาน"],
  ["5", "เริ่มทำงาน", "ทำงานกับเอกสาร เสียง รูป และข้อมูลธุรกิจจากใน Suite"],
] as const;
export const faqs = [
  [
    "Cloud edition คืออะไร?",
    "คือ Mimir Suite desktop app ที่ติดตั้งบนเครื่องพนักงาน ไม่ต้องซื้อเครื่อง AI และไม่มีเซิร์ฟเวอร์หรือบริการโฮสต์จากเรา",
  ],
  [
    "หนึ่งบริษัทใช้หลายคนได้ไหม?",
    "ได้ โดยซื้อหนึ่ง seat ต่อหนึ่งเครื่อง แต่ละ seat เป็นการติดตั้งแยกกันและเก็บข้อมูลของตัวเอง ไม่มีข้อมูลที่แชร์ข้ามเครื่อง",
  ],
  [
    "ข้อมูลถูกจัดการอย่างไร?",
    "ข้อความในเอกสารถูกส่งไปยังโมเดลคลาวด์ ข้อมูลส่วนบุคคลถูกปิดทับโดยค่าเริ่มต้นก่อนออกจากเครื่อง ข้อมูลของแต่ละ seat อยู่บนเครื่องนั้น และเลือกโฟลเดอร์สำรองข้อมูลระหว่างตั้งค่า",
  ],
  [
    "เลือกโมเดลอะไรได้บ้าง?",
    "เลือก Claude, Gemini, GPT หรือ DeepSeek ผ่านแอปตามงานที่ต้องการได้",
  ],
  [
    "ราคาคิดอย่างไร?",
    "คิดต่อแอปต่อ seat ส่วนค่าใช้โมเดลยังไม่กำหนด กรุณาติดต่อเราเพื่อคุยความต้องการ",
  ],
  [
    "ถ้าภายหลังต้องการข้อมูลบนสถานที่ทำงาน?",
    "สามารถย้ายข้อมูลเดิมไปยัง AI machine ของ Local edition ได้ ดูทางเลือก on-site ที่ localaithai.com",
  ],
] as const;
export const solutions = {
  ecommerce: {
    title: "Mimir Suites Cloud สำหรับร้านค้าออนไลน์",
    intro: "จัดเอกสารสินค้า ข้อความ และข้อมูลหลังบ้านจากบนเครื่องทำงานของทีม",
    apps: [
      "Mimir Scan",
      "Mimir Extract",
      "Mimir Write",
      "Mimir Translate",
      "Mimir Quotation",
    ],
  },
  creator: {
    title: "Mimir Suites Cloud สำหรับ Creator",
    intro:
      "ช่วยอ่านแหล่งข้อมูล สรุป บันทึกเสียง เขียนร่าง และทำสไลด์จากงานของคุณ",
    apps: [
      "Mimir Summarize",
      "Mimir Transcribe",
      "Mimir Write",
      "Mimir Slides",
      "Mimir Second Brain",
    ],
  },
  legal: {
    title: "Mimir Suites Cloud สำหรับสำนักงานกฎหมาย",
    intro:
      "ช่วยอ่าน จัดข้อมูล และร่างจากเอกสารให้ทีมตรวจทานต่อ ไม่ใช่คำแนะนำทางกฎหมาย",
    apps: [
      "Mimir Scan",
      "Mimir Extract",
      "Mimir Verify",
      "Mimir Summarize",
      "Mimir Redact",
    ],
  },
  healthcare: {
    title: "Mimir Suites Cloud สำหรับงานเอกสารสุขภาพ",
    intro:
      "ช่วยงานธุรการ เอกสาร และสรุปสำหรับผู้รับผิดชอบ ไม่ใช้เพื่อการวินิจฉัยหรือการรักษา",
    apps: [
      "Mimir Scan",
      "Mimir Extract",
      "Mimir Summarize",
      "Mimir Redact",
      "Mimir Docs",
    ],
  },
  realestate: {
    title: "Mimir Suites Cloud สำหรับอสังหาริมทรัพย์",
    intro: "จัดเอกสารทรัพย์ ข้อเสนอ และข้อมูลประกอบการทำงานของแต่ละ seat",
    apps: [
      "Mimir Extract",
      "Mimir Verify",
      "Mimir Write",
      "Mimir Quotation",
      "Mimir Second Brain",
    ],
  },
  restaurant: {
    title: "Mimir Suites Cloud สำหรับร้านอาหาร",
    intro: "รวบรวมเอกสาร จัดข้อมูล และร่างข้อความสำหรับงานหลังบ้านของร้าน",
    apps: [
      "Mimir Scan",
      "Mimir Extract",
      "Mimir Write",
      "Mimir Reconcile",
      "Mimir Ledger",
    ],
  },
} as const;
