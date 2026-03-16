"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Wrench,
  Server,
  Zap,
  ShoppingCart,
  Video,
  Scale,
  Heart,
  Building2,
  UtensilsCrossed,
  Home,
  ChevronDown,
  ChevronUp,
  Calculator,
  Users,
  Bot,
  ArrowRight,
  Shield,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  HardDrive,
  Cpu,
  Wifi,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const pricingComponents = [
  {
    icon: Wrench,
    label: "Setup Fee",
    sublabel: "จ่ายครั้งเดียว",
    desc: "ค่าติดตั้งระบบ ตั้งค่า workflow, AI model, RAG pipeline ทุกอย่างพร้อมใช้งาน",
    color: "#2997ff",
  },
  {
    icon: Server,
    label: "Hosting",
    sublabel: "รายเดือน",
    desc: "ค่า VPS server ที่รันระบบ เลือกได้เอง ฿500-2,000/เดือน ตาม spec",
    color: "#5856d6",
  },
  {
    icon: Zap,
    label: "API",
    sublabel: "ตามใช้จริง",
    desc: "ค่าเรียกใช้ AI model (GPT-5, Claude, Gemini) จ่ายตาม token ที่ใช้จริง",
    color: "#bf5af2",
  },
];

const mainPlans = [
  {
    name: "Starter",
    price: "19,900",
    monthly: "฿700 - 2,500",
    desc: "เริ่มต้น AI Automation สำหรับธุรกิจเล็ก",
    color: "#2997ff",
    tools: ["n8n", "Flowise"],
    includes: [
      "ติดตั้ง n8n + Flowise บน VPS",
      "3 workflow อัตโนมัติ",
      "Frontier Model 1 ตัว (เลือกได้)",
      "RAG pipeline 1 ชุด",
      "Chatbot embed 1 ตัว",
      "Hosting setup + SSL",
      "คู่มือการใช้งาน",
      "Support LINE 30 วัน",
    ],
    excludes: [
      "OpenClaw / Dify",
      "Custom integrations",
      "Training ทีมงาน on-site",
    ],
    bestFor: "1-3 คน",
    cta: "เริ่มต้นใช้งาน",
  },
  {
    name: "Professional",
    price: "39,900",
    monthly: "฿1,500 - 5,000",
    desc: "AI Automation ครบชุดสำหรับทีม",
    color: "#5856d6",
    badge: "แนะนำ",
    tools: ["n8n", "OpenClaw", "Flowise", "Dify"],
    includes: [
      "ติดตั้ง 4 tools ครบ",
      "10 workflow อัตโนมัติ",
      "Frontier Model ไม่จำกัด",
      "RAG pipeline ไม่จำกัด",
      "Chatbot embed ไม่จำกัด",
      "OpenClaw ผ่าน LINE / WhatsApp",
      "Hosting + automated backup",
      "Training online 2 ชม.",
      "Support LINE 60 วัน",
    ],
    excludes: ["Custom development", "On-site training"],
    bestFor: "3-10 คน",
    cta: "เลือกแพ็คเกจนี้",
  },
  {
    name: "Enterprise",
    price: "89,900",
    monthly: "฿3,000 - 15,000",
    desc: "AI Automation ระดับองค์กร ครบทุกอย่าง",
    color: "#bf5af2",
    tools: ["n8n", "OpenClaw", "Flowise", "Dify", "ActivePieces"],
    includes: [
      "ติดตั้งทุก tool (5 ตัว)",
      "Workflow ไม่จำกัด",
      "Multi-model strategy",
      "Custom integration ตามต้องการ",
      "Knowledge base ครบ",
      "Multi-server architecture",
      "Training on-site 1 วัน",
      "Support 90 วัน + Priority",
      "Monthly maintenance option",
    ],
    excludes: [],
    bestFor: "10+ คน",
    cta: "ปรึกษาทีมงาน",
  },
];

const industryTabs = [
  { key: "ecommerce", label: "E-commerce", icon: ShoppingCart, href: "/solutions/ecommerce" },
  { key: "creator", label: "Creator", icon: Video, href: "/solutions/creator" },
  { key: "legal", label: "Legal", icon: Scale, href: "/solutions/legal" },
  { key: "healthcare", label: "Healthcare", icon: Heart, href: "/solutions/healthcare" },
  { key: "realestate", label: "Real Estate", icon: Building2, href: "/solutions/realestate" },
  { key: "restaurant", label: "Restaurant", icon: UtensilsCrossed, href: "/solutions/restaurant" },
  { key: "homeai", label: "Home AI", icon: Home, href: "/home-ai" },
];

type IndustryPackage = {
  name: string;
  price: string;
  monthly: string;
  features: string[];
};

const industryPackages: Record<string, IndustryPackage[]> = {
  ecommerce: [
    {
      name: "Starter",
      price: "19,900",
      monthly: "~฿700-2,500",
      features: [
        "Chatbot ตอบลูกค้า LINE/Messenger",
        "สร้าง product description อัตโนมัติ",
        "แจ้งเตือน order ผ่าน LINE",
      ],
    },
    {
      name: "Professional",
      price: "39,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "วิเคราะห์ยอดขาย + forecast",
        "จัดการ stock อัตโนมัติ",
        "Reply review อัตโนมัติ",
        "สร้าง social content",
      ],
    },
    {
      name: "Enterprise",
      price: "79,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน Professional +",
        "Multi-platform sync",
        "AI pricing optimization",
        "Customer segmentation",
        "Custom dashboard",
      ],
    },
  ],
  creator: [
    {
      name: "Starter",
      price: "19,900",
      monthly: "~฿700-2,500",
      features: [
        "AI สร้าง caption + hashtag",
        "Content calendar automation",
        "Reply DM อัตโนมัติ",
      ],
    },
    {
      name: "Professional",
      price: "39,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "Script generator จาก trending",
        "Thumbnail idea generator",
        "Analytics dashboard",
        "Brand deal tracker",
      ],
    },
    {
      name: "Enterprise",
      price: "69,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน Professional +",
        "Multi-platform publishing",
        "AI video summarizer",
        "Sponsorship proposal generator",
        "Team collaboration tools",
      ],
    },
  ],
  legal: [
    {
      name: "Starter",
      price: "29,900",
      monthly: "~฿700-2,500",
      features: [
        "AI ค้นหากฎหมาย + คำพิพากษา",
        "สรุปเอกสารยาว",
        "Draft สัญญาเบื้องต้น",
      ],
    },
    {
      name: "Professional",
      price: "59,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "Case management automation",
        "Client intake chatbot",
        "Due diligence assistant",
        "Template library (50+ แบบ)",
      ],
    },
    {
      name: "Enterprise",
      price: "99,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน Professional +",
        "Multi-language contract",
        "Compliance monitoring",
        "Knowledge base ไม่จำกัด",
        "Priority support + SLA",
      ],
    },
  ],
  healthcare: [
    {
      name: "Starter",
      price: "29,900",
      monthly: "~฿700-2,500",
      features: [
        "Chatbot นัดหมาย LINE",
        "เตือนนัด + follow-up อัตโนมัติ",
        "FAQ สุขภาพตอบอัตโนมัติ",
      ],
    },
    {
      name: "Professional",
      price: "59,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "Patient triage chatbot",
        "สรุป medical record",
        "Multi-branch management",
        "Analytics dashboard",
      ],
    },
    {
      name: "Enterprise",
      price: "99,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน เครือข่าย +",
        "Integration กับ HIS/EMR",
        "Clinical decision support",
        "Custom AI model training",
        "On-premise option",
      ],
    },
  ],
  realestate: [
    {
      name: "Starter",
      price: "19,900",
      monthly: "~฿700-2,500",
      features: [
        "Chatbot ตอบลูกค้าสนใจ",
        "สร้าง listing description",
        "แจ้งเตือน lead ใหม่",
      ],
    },
    {
      name: "Professional",
      price: "39,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "Property matching AI",
        "Market analysis automation",
        "Virtual tour script",
        "CRM integration",
      ],
    },
    {
      name: "Enterprise",
      price: "79,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน Professional +",
        "Lead scoring AI",
        "Sales pipeline automation",
        "Multi-project dashboard",
        "Custom integration",
      ],
    },
  ],
  restaurant: [
    {
      name: "Starter",
      price: "19,900",
      monthly: "~฿700-2,500",
      features: [
        "Chatbot รับ order LINE",
        "เมนูแนะนำอัตโนมัติ",
        "แจ้งเตือน stock ใกล้หมด",
      ],
    },
    {
      name: "Professional",
      price: "34,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Starter +",
        "Multi-platform order sync",
        "Review management AI",
        "สร้าง social content",
        "Cost analysis automation",
      ],
    },
    {
      name: "Enterprise",
      price: "69,900",
      monthly: "~฿3,000-15,000",
      features: [
        "ทุกอย่างใน Professional +",
        "Multi-branch dashboard",
        "Menu optimization AI",
        "Staff scheduling assist",
        "Franchise management",
      ],
    },
  ],
  homeai: [
    {
      name: "Starter",
      price: "14,900",
      monthly: "~฿700-2,500",
      features: [
        "ติดตั้ง Home Assistant",
        "ควบคุมอุปกรณ์ 10 ตัว",
        "Voice control ภาษาไทย",
      ],
    },
    {
      name: "Professional",
      price: "29,900",
      monthly: "~฿1,500-5,000",
      features: [
        "ทุกอย่างใน Basic +",
        "Automation scene ไม่จำกัด",
        "Energy monitoring",
        "Security camera AI",
        "Remote access",
      ],
    },
    {
      name: "Full Smart Home",
      price: "Custom",
      monthly: "ปรึกษาทีมงาน",
      features: [
        "ทุกอย่างใน Professional +",
        "AI ปรับ automation ตาม pattern",
        "Multi-zone climate control",
        "EV charger integration",
        "On-site installation",
      ],
    },
  ],
};

const vpsTable = [
  {
    provider: "DigitalOcean",
    specs: "2 vCPU / 4 GB RAM / 80 GB SSD",
    price: "$24/mo (~฿840)",
    best: "เริ่มต้น Starter",
  },
  {
    provider: "DigitalOcean",
    specs: "4 vCPU / 8 GB RAM / 160 GB SSD",
    price: "$48/mo (~฿1,680)",
    best: "Pro / หลาย tools",
  },
  {
    provider: "Vultr",
    specs: "2 vCPU / 4 GB RAM / 80 GB NVMe",
    price: "$24/mo (~฿840)",
    best: "เริ่มต้น Starter",
  },
  {
    provider: "Vultr",
    specs: "4 vCPU / 8 GB RAM / 160 GB NVMe",
    price: "$48/mo (~฿1,680)",
    best: "Pro / หลาย tools",
  },
  {
    provider: "Hetzner",
    specs: "4 vCPU / 8 GB RAM / 160 GB SSD",
    price: "€7.49/mo (~฿290)",
    best: "คุ้มสุด!",
  },
  {
    provider: "Hetzner",
    specs: "8 vCPU / 16 GB RAM / 320 GB SSD",
    price: "€14.49/mo (~฿560)",
    best: "Enterprise คุ้มสุด",
  },
];

const apiModels = [
  { name: "GPT-5", inputCost: 1.25, outputCost: 10.0 },
  { name: "Claude Sonnet 4", inputCost: 3.0, outputCost: 15.0 },
  { name: "Gemini 2.5 Flash", inputCost: 0.15, outputCost: 0.6 },
  { name: "DeepSeek V3", inputCost: 0.28, outputCost: 1.1 },
  { name: "Llama 4 (Groq)", inputCost: 0.05, outputCost: 0.1 },
];

const hardwareOptions = [
  {
    name: "Mac Mini M4",
    price: "฿22,900",
    specs: "10-core CPU / 16 GB RAM / 256 GB SSD",
    monthly: "฿0 (ค่าไฟ ~฿150)",
    pros: ["ไม่มีค่ารายเดือน VPS", "เร็วกว่า VPS ถูก", "ข้อมูลอยู่ในออฟฟิศ 100%", "รัน local AI model เพิ่มได้"],
    cons: ["ต้องมี internet เสถียร", "ถ้าไฟดับ = ระบบหยุด", "ต้องดูแล hardware เอง"],
    best: "ออฟฟิศ / ร้านที่มี internet ดี",
    color: "#1d1d1f",
  },
  {
    name: "Mac Mini M4 Pro",
    price: "฿56,900",
    specs: "14-core CPU / 24 GB RAM / 512 GB SSD",
    monthly: "฿0 (ค่าไฟ ~฿200)",
    pros: ["RAM 24GB รัน RAG + หลาย tool พร้อมกัน", "ประหยัดค่า VPS ฿1,500+/เดือน", "รัน Ollama + local model ได้", "คืนทุนใน 12-18 เดือน"],
    cons: ["ลงทุนสูงกว่าตอนแรก", "ต้องมี UPS กันไฟดับ", "ต้อง setup Tailscale สำหรับ remote access"],
    best: "สำนักงานกฎหมาย / คลินิก / Enterprise",
    color: "#bf5af2",
  },
  {
    name: "Mini PC (Intel N100)",
    price: "฿5,900 - ฿8,900",
    specs: "4-core CPU / 8-16 GB RAM / 256 GB SSD",
    monthly: "฿0 (ค่าไฟ ~฿80)",
    pros: ["ราคาถูกที่สุด", "เล็ก เงียบ ประหยัดไฟ", "พอสำหรับ n8n + Flowise"],
    cons: ["ช้ากว่า Mac Mini มาก", "RAM จำกัด ไม่เหมาะหลาย tool", "ไม่รองรับ local AI model"],
    best: "ร้านอาหาร / ร้านค้าเล็ก Starter",
    color: "#34c759",
  },
];

const maintenancePlans = [
  {
    name: "Basic",
    price: "3,900",
    color: "#2997ff",
    includes: [
      "Monitoring ระบบ 24/7",
      "แก้ปัญหาระบบล่มภายใน 24 ชม.",
      "Update security patches",
      "Backup ข้อมูลรายสัปดาห์",
      "Support LINE วันจันทร์-ศุกร์",
    ],
    excludes: [
      "เพิ่ม/แก้ workflow",
      "Training ทีมงาน",
      "On-site support",
    ],
  },
  {
    name: "Pro",
    price: "7,900",
    color: "#5856d6",
    badge: "ยอดนิยม",
    includes: [
      "ทุกอย่างใน Basic +",
      "แก้ปัญหาภายใน 4 ชม.",
      "เพิ่ม/แก้ workflow 5 ครั้ง/เดือน",
      "Backup รายวัน",
      "Performance optimization",
      "Monthly report",
      "Support LINE ทุกวัน 9:00-21:00",
    ],
    excludes: ["On-site support"],
  },
  {
    name: "Priority",
    price: "14,900",
    color: "#bf5af2",
    includes: [
      "ทุกอย่างใน Pro +",
      "แก้ปัญหาภายใน 1 ชม.",
      "เพิ่ม/แก้ workflow ไม่จำกัด",
      "Dedicated account manager",
      "Training ทีมงาน 1 ครั้ง/เดือน",
      "On-site support (กทม.)",
      "Support LINE/โทร 24/7",
      "Quarterly strategy review",
    ],
    excludes: [],
  },
];

const roiComparison = [
  {
    role: "พนักงานตอบแชท",
    humanCost: "15,000 - 18,000",
    aiCost: "842 - 2,400",
    saving: "~85%",
  },
  {
    role: "Content Writer",
    humanCost: "20,000 - 35,000",
    aiCost: "950 - 1,800",
    saving: "~95%",
  },
  {
    role: "Data Entry / Admin",
    humanCost: "15,000 - 20,000",
    aiCost: "700 - 1,500",
    saving: "~93%",
  },
  {
    role: "เลขาฯ / ผู้ช่วย",
    humanCost: "18,000 - 25,000",
    aiCost: "1,200 - 3,000",
    saving: "~88%",
  },
];

const faqs = [
  {
    q: "ทำไมไม่คิดเป็น subscription รายเดือนเหมือนที่อื่น?",
    a: "เพราะเราเชื่อว่าระบบที่ดีควรเป็นของคุณ ไม่ใช่ต้องเช่า เราคิดค่า setup ครั้งเดียว ส่งมอบระบบให้คุณเป็นเจ้าของ ค่ารายเดือนคือค่า server กับ API ที่คุณจ่ายตรงกับ provider ไม่ผ่านเรา",
  },
  {
    q: "ถ้าเลิกใช้บริการ ระบบยังทำงานต่อได้ไหม?",
    a: "ได้ 100% ระบบทุกอย่างติดตั้งบน server ของคุณ ถ้าเลิกใช้ maintenance ระบบก็ยังรันต่อได้ปกติ แค่ต้องดูแล server เอง",
  },
  {
    q: "ค่า API แพงไหม? ประมาณเท่าไหร่ต่อเดือน?",
    a: "ขึ้นอยู่กับปริมาณการใช้งาน ร้านค้าทั่วไปที่มี 50 ข้อความ/วัน ค่า API ประมาณ ฿200-500/เดือน ถ้าใช้ DeepSeek หรือ Gemini Flash จะถูกลงอีก",
  },
  {
    q: "เปลี่ยนแพ็คเกจหรือเพิ่ม tool ทีหลังได้ไหม?",
    a: "ได้ เราคิดค่า upgrade ตามส่วนต่างของ setup fee + ค่าติดตั้ง tool เพิ่ม ไม่ต้องจ่ายใหม่ทั้งหมด",
  },
  {
    q: "ใช้เวลาติดตั้งนานเท่าไหร่?",
    a: "Starter 3-5 วันทำการ, Pro 5-10 วันทำการ, Enterprise 10-20 วันทำการ ขึ้นอยู่กับความซับซ้อนของ workflow",
  },
  {
    q: "ถ้ามีปัญหาหลังหมดช่วง support ทำอย่างไร?",
    a: "สามารถซื้อ maintenance package รายเดือนได้ หรือจ้างเป็นครั้งๆ คิดตามชั่วโมง (฿1,500/ชม.) เราไม่ทิ้งลูกค้า",
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION HEADER COMPONENT
   ═══════════════════════════════════════════════════════════ */

function SectionHeader({
  tag,
  title,
  subtitle,
}: {
  tag: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
        {tag}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function PricingPage() {
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");
  const [selectedModel, setSelectedModel] = useState(0);
  const [msgVolume, setMsgVolume] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* API cost estimate: assume ~800 input tokens + ~400 output tokens per message */
  const model = apiModels[selectedModel];
  const dailyInputTokens = msgVolume * 800;
  const dailyOutputTokens = msgVolume * 400;
  const monthlyInputCost =
    (dailyInputTokens * 30 * model.inputCost) / 1_000_000;
  const monthlyOutputCost =
    (dailyOutputTokens * 30 * model.outputCost) / 1_000_000;
  const monthlyApiUsd = monthlyInputCost + monthlyOutputCost;
  const monthlyApiBaht = Math.round(monthlyApiUsd * 35);

  return (
    <>
      {/* ═══ SECTION 1: วิธีคิดราคา ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            tag="Pricing Model"
            title="วิธีคิดราคา"
            subtitle="โปร่งใส เข้าใจง่าย ไม่มีค่าใช้จ่ายซ่อน"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingComponents.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="apple-card p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: item.color + "12" }}
                >
                  <item.icon size={26} style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">
                  {item.label}
                </h3>
                <p className="text-[13px] font-medium mb-3" style={{ color: item.color }}>
                  {item.sublabel}
                </p>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual formula */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 text-center mb-8"
          >
            <div className="px-5 py-3 rounded-2xl bg-[#2997ff]/10 text-[#2997ff] font-semibold text-[15px]">
              Setup Fee
            </div>
            <span className="text-2xl text-[#6e6e73] font-light">+</span>
            <div className="px-5 py-3 rounded-2xl bg-[#5856d6]/10 text-[#5856d6] font-semibold text-[15px]">
              Hosting/เดือน
            </div>
            <span className="text-2xl text-[#6e6e73] font-light">+</span>
            <div className="px-5 py-3 rounded-2xl bg-[#bf5af2]/10 text-[#bf5af2] font-semibold text-[15px]">
              API ตามใช้จริง
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[15px] font-medium text-[#1d1d1f]"
          >
            ไม่มี subscription ซ่อน &middot; ไม่มี lock-in &middot;
            ระบบเป็นของคุณ 100%
          </motion.p>
        </div>
      </section>

      {/* ═══ SECTION 2: Main Packages ═══ */}
      <section className="py-24 md:py-32 section-gray relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Packages"
            title="แพ็คเกจหลัก"
            subtitle="เลือกแพ็คเกจที่เหมาะกับธุรกิจของคุณ"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-lg mx-auto -mt-6 mb-14"
          >
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f] font-medium italic leading-[1.6]">
              "แพ็คเกจคือจุดเริ่มต้น ไม่ใช่จุดสิ้นสุด — สิ่งที่คุณได้รับคือระบบที่พอดีกับธุรกิจคุณ ไม่ใช่ของสำเร็จรูปที่ใส่ทุกคน"
            </p>
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {mainPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`apple-card relative p-8 !overflow-visible ${
                  plan.badge ? "!bg-white/65 md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-[11px] font-semibold px-4 py-1 rounded-full text-white"
                      style={{ background: plan.color }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pb-6 border-b border-black/[0.04]">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[13px] text-[#6e6e73] mb-3">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-[11px] text-[#6e6e73]">฿</span>
                    <span className="text-4xl font-bold text-[#1d1d1f]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6e6e73]">
                    Setup fee (ครั้งเดียว)
                  </p>
                  <p className="text-[12px] text-[#6e6e73] mt-1">
                    + {plan.monthly}/เดือน (hosting + API)
                  </p>
                </div>

                {/* Tools */}
                <div className="mb-5">
                  <p className="text-[11px] text-[#6e6e73] mb-2">
                    เครื่องมือที่ติดตั้ง
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div className="space-y-2.5 mb-6">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.color + "10" }}
                      >
                        <Check size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-[13px] text-[#1d1d1f]/80">
                        {item}
                      </span>
                    </div>
                  ))}
                  {plan.excludes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-black/[0.03]">
                        <X size={10} className="text-[#d2d2d7]" />
                      </div>
                      <span className="text-[13px] text-[#d2d2d7]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-[#6e6e73] mb-4">
                  เหมาะกับทีม {plan.bestFor}
                </p>

                <a
                  href="#contact"
                  className="block text-center text-[14px] font-medium py-3 rounded-full transition-all"
                  style={
                    plan.badge
                      ? {
                          background: plan.color,
                          color: "white",
                          boxShadow: `0 4px 16px ${plan.color}30`,
                        }
                      : { background: "#f5f5f7", color: "#1d1d1f" }
                  }
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: Industry Packages ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Industry Solutions"
            title="แพ็คเกจรายอุตสาหกรรม"
            subtitle="ราคาเฉพาะสำหรับแต่ละอุตสาหกรรม ตั้งค่าตรงกับงานที่คุณต้องใช้จริง"
          />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveIndustry(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                  activeIndustry === tab.key
                    ? "bg-[#1d1d1f] text-white"
                    : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Industry packages grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {industryPackages[activeIndustry]?.map((pkg, i) => (
                <div key={pkg.name} className="apple-card p-7">
                  <h4 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-[11px] text-[#6e6e73]">฿</span>
                    <span className="text-3xl font-bold text-[#1d1d1f]">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] mb-5">
                    Setup fee + {pkg.monthly}/เดือน
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className="text-[#2997ff] shrink-0 mt-0.5"
                        />
                        <span className="text-[13px] text-[#1d1d1f]/80">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="block text-center text-[13px] font-medium py-2.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
                  >
                    สนใจแพ็คเกจนี้
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Link to solution page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a
              href={
                industryTabs.find((t) => t.key === activeIndustry)?.href || "#"
              }
              className="inline-flex items-center gap-1.5 text-[15px] text-[#2997ff] font-medium hover:underline"
            >
              ดูรายละเอียด{" "}
              {industryTabs.find((t) => t.key === activeIndustry)?.label}{" "}
              เพิ่มเติม
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 4: ค่าใช้จ่ายรายเดือนจริงๆ ═══ */}
      <section className="py-24 md:py-32 section-gray relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Real Costs"
            title="ค่าใช้จ่ายรายเดือนจริงๆ"
            subtitle="เปิดหมดไม่มีกั๊ก — นี่คือตัวเลขจริงที่ลูกค้าจ่ายทุกเดือน"
          />

          {/* VPS Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#5856d6]/10 flex items-center justify-center">
                <Server size={20} className="text-[#5856d6]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                  ค่า VPS Hosting
                </h3>
                <p className="text-[13px] text-[#6e6e73]">
                  เปรียบเทียบ provider ยอดนิยม
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      Provider
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      Specs
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      ราคา/เดือน
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3">
                      เหมาะกับ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vpsTable.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-black/[0.03] last:border-0"
                    >
                      <td className="py-3 pr-4 text-[13px] font-medium text-[#1d1d1f]">
                        {row.provider}
                      </td>
                      <td className="py-3 pr-4 text-[13px] text-[#6e6e73]">
                        {row.specs}
                      </td>
                      <td className="py-3 pr-4 text-[13px] font-medium text-[#1d1d1f]">
                        {row.price}
                      </td>
                      <td className="py-3 text-[13px] text-[#6e6e73]">
                        {row.best}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Hardware Add-on — Mac Mini / Mini PC instead of VPS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8 mb-8 !overflow-visible"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#1d1d1f]/10 flex items-center justify-center">
                <Cpu size={20} className="text-[#1d1d1f]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                  Hardware Add-on
                </h3>
                <p className="text-[13px] text-[#6e6e73]">
                  ใช้ Mac Mini / Mini PC แทน VPS — ไม่มีค่ารายเดือน ข้อมูลอยู่ที่คุณ 100%
                </p>
              </div>
            </div>
            <p className="text-[12px] text-[#8e8e93] mb-6 ml-[52px]">
              ซื้อ hardware เพิ่ม → เราติดตั้ง n8n, Flowise, OpenClaw ให้บนเครื่อง → ไม่ต้องจ่ายค่า VPS อีก
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {hardwareOptions.map((hw) => (
                <div
                  key={hw.name}
                  className="rounded-2xl border border-black/[0.06] p-5 relative"
                >
                  <h4 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{hw.name}</h4>
                  <p className="text-[22px] font-bold mb-1" style={{ color: hw.color }}>{hw.price}</p>
                  <p className="text-[11px] text-[#8e8e93] mb-1">{hw.specs}</p>
                  <p className="text-[12px] font-medium text-[#34c759] mb-4">รายเดือน: {hw.monthly}</p>

                  <div className="space-y-1.5 mb-3">
                    {hw.pros.map((p) => (
                      <div key={p} className="flex items-start gap-2">
                        <Check size={12} className="text-[#34c759] shrink-0 mt-0.5" />
                        <span className="text-[12px] text-[#1d1d1f]/80">{p}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5 mb-4">
                    {hw.cons.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <X size={12} className="text-[#ff3b30] shrink-0 mt-0.5" />
                        <span className="text-[12px] text-[#6e6e73]">{c}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-black/[0.04]">
                    <p className="text-[11px] text-[#6e6e73]">เหมาะกับ</p>
                    <p className="text-[12px] font-medium text-[#1d1d1f]">{hw.best}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-[#f5f5f7] flex items-start gap-3">
              <Wifi size={16} className="text-[#ff9500] shrink-0 mt-0.5" />
              <div>
                <p className="text-[13px] font-medium text-[#1d1d1f] mb-0.5">ต้องมี internet เสถียร</p>
                <p className="text-[12px] text-[#6e6e73]">
                  Hardware ต้องเชื่อม internet ตลอดเพื่อเรียก API (GPT-5, Claude, Gemini) และรับ webhook จาก LINE
                  — แนะนำ internet บ้าน/ออฟฟิศ 100Mbps+ พร้อม Tailscale สำหรับ remote access
                </p>
              </div>
            </div>
          </motion.div>

          {/* API Cost Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#bf5af2]/10 flex items-center justify-center">
                <Calculator size={20} className="text-[#bf5af2]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f]">
                  คำนวณค่า API
                </h3>
                <p className="text-[13px] text-[#6e6e73]">
                  เลือก model + ปริมาณการใช้ ดูค่าใช้จ่ายโดยประมาณ
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Model selector */}
                <div>
                  <label className="text-[13px] font-medium text-[#1d1d1f] block mb-2">
                    เลือก AI Model
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {apiModels.map((m, i) => (
                      <button
                        key={m.name}
                        onClick={() => setSelectedModel(i)}
                        className={`text-left px-4 py-2.5 rounded-xl text-[13px] transition-all ${
                          selectedModel === i
                            ? "bg-[#1d1d1f] text-white"
                            : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
                        }`}
                      >
                        <span className="font-medium">{m.name}</span>
                        <span className="text-[11px] opacity-70 ml-2">
                          ${m.inputCost}/1M in &middot; ${m.outputCost}/1M out
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Volume slider */}
                <div>
                  <label className="text-[13px] font-medium text-[#1d1d1f] block mb-2">
                    ข้อความต่อวัน: {msgVolume}
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={500}
                    step={10}
                    value={msgVolume}
                    onChange={(e) => setMsgVolume(Number(e.target.value))}
                    className="w-full accent-[#2997ff]"
                  />
                  <div className="flex justify-between text-[11px] text-[#6e6e73] mt-1">
                    <span>10</span>
                    <span>250</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="flex items-center">
                <div className="w-full p-6 rounded-2xl bg-[#f5f5f7] text-center">
                  <p className="text-[13px] text-[#6e6e73] mb-2">
                    ค่า API โดยประมาณ
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-[13px] text-[#6e6e73]">฿</span>
                    <span className="text-5xl font-bold text-[#1d1d1f]">
                      {monthlyApiBaht.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] mb-4">
                    /เดือน (~${monthlyApiUsd.toFixed(2)} USD)
                  </p>
                  <div className="text-[12px] text-[#6e6e73] space-y-1">
                    <p>
                      {model.name} &middot; {msgVolume} msg/วัน &middot; 30 วัน
                    </p>
                    <p>~{(msgVolume * 800).toLocaleString()} input tokens/วัน</p>
                    <p>~{(msgVolume * 400).toLocaleString()} output tokens/วัน</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real examples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8"
          >
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-6">
              ตัวอย่างค่าใช้จ่ายจริง
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "ร้านค้า 50 msg/วัน",
                  hosting: "฿840",
                  api: "~฿200",
                  total: "฿1,040",
                  model: "DeepSeek V3",
                },
                {
                  label: "คลินิก 100 msg/วัน",
                  hosting: "฿840",
                  api: "~฿700",
                  total: "฿1,540",
                  model: "Gemini 2.5 Flash",
                },
                {
                  label: "Enterprise 300 msg/วัน",
                  hosting: "฿1,680",
                  api: "~฿5,600",
                  total: "฿7,280",
                  model: "GPT-5",
                },
              ].map((ex) => (
                <div key={ex.label} className="p-5 rounded-2xl bg-[#f5f5f7]">
                  <p className="text-[14px] font-semibold text-[#1d1d1f] mb-3">
                    {ex.label}
                  </p>
                  <div className="space-y-1.5 text-[13px] text-[#6e6e73]">
                    <div className="flex justify-between">
                      <span>Hosting (VPS)</span>
                      <span className="font-medium text-[#1d1d1f]">
                        {ex.hosting}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>API ({ex.model})</span>
                      <span className="font-medium text-[#1d1d1f]">
                        {ex.api}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-black/[0.06]">
                      <span className="font-semibold text-[#1d1d1f]">
                        รวม/เดือน
                      </span>
                      <span className="font-bold text-[#2997ff]">
                        {ex.total}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 5: Monthly Maintenance ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="Maintenance"
            title="ดูแลรายเดือน"
            subtitle="เสริมได้ตามต้องการ — ไม่บังคับ แต่สบายใจกว่า"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {maintenancePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`apple-card relative p-8 !overflow-visible ${
                  plan.badge ? "!bg-white/65 md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-[11px] font-semibold px-4 py-1 rounded-full text-white"
                      style={{ background: plan.color }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pb-6 border-b border-black/[0.04]">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-[11px] text-[#6e6e73]">฿</span>
                    <span className="text-4xl font-bold text-[#1d1d1f]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6e6e73]">/เดือน</p>
                </div>

                <div className="space-y-2.5 mb-6">
                  {plan.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: plan.color + "10" }}
                      >
                        <Check size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-[13px] text-[#1d1d1f]/80">
                        {item}
                      </span>
                    </div>
                  ))}
                  {plan.excludes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-black/[0.03]">
                        <X size={10} className="text-[#d2d2d7]" />
                      </div>
                      <span className="text-[13px] text-[#d2d2d7]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block text-center text-[13px] font-medium py-2.5 rounded-full transition-all"
                  style={
                    plan.badge
                      ? {
                          background: plan.color,
                          color: "white",
                          boxShadow: `0 4px 16px ${plan.color}30`,
                        }
                      : { background: "#f5f5f7", color: "#1d1d1f" }
                  }
                >
                  เลือกแผนนี้
                </a>
              </motion.div>
            ))}
          </div>

          {/* Worth it? comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8"
          >
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">
              คุ้มค่าไหม?
            </h3>
            <p className="text-[14px] text-[#6e6e73] mb-6">
              เทียบกับจ้าง IT ประจำดูแลระบบ
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-[#f5f5f7]">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={18} className="text-[#6e6e73]" />
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">
                    จ้าง IT ประจำ
                  </p>
                </div>
                <div className="space-y-2 text-[13px] text-[#6e6e73]">
                  <p>เงินเดือน: ฿25,000 - 45,000/เดือน</p>
                  <p>ประกันสังคม + สวัสดิการ: ~฿5,000/เดือน</p>
                  <p>ไม่ได้เชี่ยวชาญ AI โดยเฉพาะ</p>
                  <p>ลาป่วย ลาพักร้อน ลาออก</p>
                  <p className="font-semibold text-[#1d1d1f] pt-2 border-t border-black/[0.06]">
                    รวม: ฿30,000 - 50,000/เดือน
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-[#2997ff]/5 border border-[#2997ff]/10">
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={18} className="text-[#2997ff]" />
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">
                    Maintenance Pro
                  </p>
                </div>
                <div className="space-y-2 text-[13px] text-[#6e6e73]">
                  <p>฿7,900/เดือน (คงที่)</p>
                  <p>ทีมผู้เชี่ยวชาญ AI ดูแล</p>
                  <p>Response ภายใน 4 ชม.</p>
                  <p>ไม่มีลา ไม่มีลาออก</p>
                  <p className="font-semibold text-[#2997ff] pt-2 border-t border-[#2997ff]/10">
                    ประหยัด: ~฿22,000 - 42,000/เดือน
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 6: ROI — คุ้มค่าแค่ไหน ═══ */}
      <section className="py-24 md:py-32 section-gray relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            tag="ROI"
            title="คุ้มค่าแค่ไหน"
            subtitle="เปรียบเทียบต้นทุน จ้างคน vs ใช้ AI ในแต่ละตำแหน่ง"
          />

          {/* Role comparison table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8 mb-8"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-black/[0.06]">
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      ตำแหน่งงาน
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      <span className="flex items-center gap-1.5">
                        <Users size={13} /> จ้างคน/เดือน
                      </span>
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3 pr-4">
                      <span className="flex items-center gap-1.5">
                        <Bot size={13} /> ใช้ AI/เดือน
                      </span>
                    </th>
                    <th className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider pb-3">
                      ประหยัด
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roiComparison.map((row) => (
                    <tr
                      key={row.role}
                      className="border-b border-black/[0.03] last:border-0"
                    >
                      <td className="py-3.5 pr-4 text-[14px] font-medium text-[#1d1d1f]">
                        {row.role}
                      </td>
                      <td className="py-3.5 pr-4 text-[14px] text-[#6e6e73]">
                        ฿{row.humanCost}
                      </td>
                      <td className="py-3.5 pr-4 text-[14px] font-medium text-[#2997ff]">
                        ฿{row.aiCost}
                      </td>
                      <td className="py-3.5">
                        <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600">
                          {row.saving}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Payback + stat */}
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="apple-card p-7 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-[#2997ff]" />
              </div>
              <p className="text-4xl font-bold text-[#1d1d1f] mb-2">
                {"< "}2 เดือน
              </p>
              <p className="text-[14px] text-[#6e6e73]">
                ระยะเวลาคืนทุนเฉลี่ย
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card p-7 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5856d6]/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} className="text-[#5856d6]" />
              </div>
              <p className="text-4xl font-bold text-[#1d1d1f] mb-2">85-95%</p>
              <p className="text-[14px] text-[#6e6e73]">
                ลดต้นทุนเทียบกับจ้างคน
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="apple-card p-7 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#bf5af2]/10 flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon size={24} className="text-[#bf5af2]" />
              </div>
              <p className="text-4xl font-bold text-[#1d1d1f] mb-2">24/7</p>
              <p className="text-[14px] text-[#6e6e73]">
                AI ทำงานไม่มีวันหยุด
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[17px] font-semibold text-[#1d1d1f] mt-10"
          >
            ลูกค้าทุกรายคืนทุนภายใน 2 เดือน
          </motion.p>
        </div>
      </section>

      {/* ═══ SECTION 7: FAQ ═══ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            tag="FAQ"
            title="คำถามเรื่องราคา"
            subtitle="คำถามที่ลูกค้าถามบ่อยเกี่ยวกับค่าใช้จ่าย"
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="apple-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[15px] font-medium text-[#1d1d1f] pr-4">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[#6e6e73] shrink-0" />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-[#6e6e73] shrink-0"
                    />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14px] text-[#6e6e73] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
