"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart,
  MessageSquare,
  Clock,
  TrendingUp,
  ArrowRight,
  Check,
  X,
  DollarSign,
  BarChart3,
  Users,
  Zap,
  Bot,
  FileText,
  Star,
  Building2,
  UtensilsCrossed,
  Home,
  Palette,
  Scale,
  ChevronRight,
  Timer,
  AlertTriangle,
  Sparkles,
  Target,
  BadgeCheck,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER — counts up when scrolled into view
   ═══════════════════════════════════════════════════════════ */
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════
   CASE STUDY DATA
   ═══════════════════════════════════════════════════════════ */
interface CaseStudy {
  id: string;
  company: string;
  tagline: string;
  industry: string;
  industrySlug: string;
  size: string;
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  result: {
    title: string;
    description: string;
    highlights: string[];
  };
  metrics: {
    label: string;
    value: number;
    suffix: string;
    prefix: string;
    description: string;
  }[];
  roi: {
    amount: string;
    period: string;
    description: string;
  };
  beforeAfter: {
    before: { label: string; value: string; sub: string };
    after: { label: string; value: string; sub: string };
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

const caseStudies: CaseStudy[] = [
  /* ── 1. GlowUp Cosmetics ── */
  {
    id: "glowup",
    company: "GlowUp Cosmetics",
    tagline: "ร้านเครื่องสำอางออนไลน์",
    industry: "E-Commerce",
    industrySlug: "ecommerce",
    size: "5 คน · ยอดขาย ฿1.2M/เดือน",
    icon: <ShoppingCart className="w-5 h-5" />,
    accentColor: "#ff6b9d",
    accentBg: "rgba(255,107,157,0.08)",
    problem: {
      title: "ตอบแชทไม่ทัน ยอดขายรั่ว",
      description:
        "ได้รับข้อความ LINE OA กว่า 200+ ข้อความต่อวัน พนักงาน 2 คนตอบแชทไม่ทัน ลูกค้ารอนาน 15-30 นาที หลายคนหนีไปร้านคู่แข่ง",
      painPoints: [
        "ข้อความ 200+ ต่อวัน ตอบไม่ทัน",
        "ลูกค้ารอนาน 15-30 นาที",
        "พนักงาน 2 คน Burnout หนัก",
        "ยอดขายหลุด 30-40% ในช่วง peak",
      ],
    },
    solution: {
      title: "AI Chatbot + Order Automation",
      description:
        "ติดตั้ง AI chatbot บน LINE OA ที่ตอบคำถามสินค้า แนะนำโปรโมชัน และปิดการขายอัตโนมัติ พร้อมระบบ order automation ที่เชื่อมกับ inventory",
      features: [
        "AI chatbot ตอบ LINE 24/7",
        "แนะนำสินค้าตาม skin type",
        "ปิดการขาย + สร้าง order อัตโนมัติ",
        "แจ้งเตือน restock อัตโนมัติ",
      ],
    },
    result: {
      title: "ตอบไว ปิดการขายพุ่ง",
      description:
        "AI ตอบแชทภายใน 3 วินาที ลูกค้าไม่ต้องรอ ปิดการขายเพิ่มขึ้น 40% ลดพนักงานตอบแชท 1 คน ย้ายไปทำ content แทน",
      highlights: [
        "ตอบแชทภายใน 3 วินาที",
        "ปิดการขายเพิ่ม +40%",
        "ลดพนักงานตอบแชท 1 คน",
        "Customer satisfaction 4.8/5",
      ],
    },
    metrics: [
      {
        label: "Response Time",
        value: 3,
        suffix: " วินาที",
        prefix: "",
        description: "จาก 15 นาที → 3 วินาที",
      },
      {
        label: "ยอดขาย",
        value: 40,
        suffix: "%",
        prefix: "+",
        description: "ปิดการขายเพิ่มขึ้น",
      },
      {
        label: "ประหยัด/ปี",
        value: 180,
        suffix: "K",
        prefix: "฿",
        description: "ลดต้นทุนพนักงาน",
      },
      {
        label: "คืนทุน",
        value: 1.5,
        suffix: " เดือน",
        prefix: "",
        description: "ROI period",
      },
    ],
    roi: {
      amount: "฿180,000/ปี",
      period: "คืนทุนใน 1.5 เดือน",
      description: "ประหยัดค่าพนักงาน 1 คน + รายได้เพิ่มจากยอดขาย +40%",
    },
    beforeAfter: {
      before: {
        label: "ก่อนใช้ AI",
        value: "15-30 นาที",
        sub: "ลูกค้ารอตอบแชท",
      },
      after: {
        label: "หลังใช้ AI",
        value: "3 วินาที",
        sub: "AI ตอบทันที 24/7",
      },
    },
    testimonial: {
      quote:
        "เมื่อก่อนช่วง flash sale พนักงานแทบร้องไห้ ตอนนี้ AI รับมือได้หมด ยอดขายพุ่งขึ้น 40% แบบไม่ต้องจ้างคนเพิ่ม",
      name: "คุณพิม",
      role: "Owner, GlowUp Cosmetics",
    },
  },

  /* ── 2. BrightSpark Agency ── */
  {
    id: "brightspark",
    company: "BrightSpark Agency",
    tagline: "Content Creator Agency",
    industry: "Creative Agency",
    industrySlug: "creator",
    size: "8 คน · ดูแล 10+ แบรนด์",
    icon: <Palette className="w-5 h-5" />,
    accentColor: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.08)",
    problem: {
      title: "ผลิต Content ไม่ทัน ต้องจ้าง Freelancer",
      description:
        "ดูแล content ให้ 5 แบรนด์ ต้องเขียน script, caption, วาง content calendar ทุกสัปดาห์ ทีม 3 คนไม่พอ ต้องจ้าง freelancer เพิ่มเดือนละ ฿25,000",
      painPoints: [
        "เขียน content 5 แบรนด์ ไม่ทัน deadline",
        "จ้าง freelancer เพิ่มเดือนละ ฿25,000",
        "Quality ไม่สม่ำเสมอ",
        "ไม่มีเวลารับลูกค้าใหม่",
      ],
    },
    solution: {
      title: "AI Content Pipeline",
      description:
        "สร้าง AI workflow ที่ช่วยเขียน script, caption, และวาง content calendar อัตโนมัติ โดย train กับ brand voice ของแต่ละแบรนด์",
      features: [
        "AI เขียน script ตาม brand voice",
        "Auto-generate caption + hashtag",
        "Content calendar วางแผน 1 เดือนล่วงหน้า",
        "A/B testing caption อัตโนมัติ",
      ],
    },
    result: {
      title: "ผลิต Content เร็วขึ้น 3 เท่า",
      description:
        "ทีมผลิต content ได้เร็วขึ้น 3 เท่า ไม่ต้องจ้าง freelancer และมีเวลารับแบรนด์เพิ่มอีก 5 ตัว เพิ่มรายได้ ฿75,000/เดือน",
      highlights: [
        "ผลิต content เร็วขึ้น 3 เท่า",
        "ลดค่า freelancer ฿25,000/เดือน",
        "รับ brand เพิ่ม 5 ตัว",
        "Engagement rate เฉลี่ย +22%",
      ],
    },
    metrics: [
      {
        label: "ความเร็ว",
        value: 3,
        suffix: "x",
        prefix: "",
        description: "ผลิต content เร็วขึ้น",
      },
      {
        label: "Brand เพิ่ม",
        value: 5,
        suffix: " แบรนด์",
        prefix: "+",
        description: "รับลูกค้าใหม่ได้",
      },
      {
        label: "รายได้เพิ่ม",
        value: 75,
        suffix: "K/เดือน",
        prefix: "฿",
        description: "จาก brand ใหม่",
      },
      {
        label: "Engagement",
        value: 22,
        suffix: "%",
        prefix: "+",
        description: "อัตราการมีส่วนร่วม",
      },
    ],
    roi: {
      amount: "฿75,000/เดือน",
      period: "รายได้เพิ่มทันทีเดือนแรก",
      description: "ลดค่า freelancer + รายได้จาก 5 แบรนด์ใหม่",
    },
    beforeAfter: {
      before: {
        label: "ก่อนใช้ AI",
        value: "5 แบรนด์",
        sub: "ทำไม่ทัน ต้องจ้างเพิ่ม",
      },
      after: {
        label: "หลังใช้ AI",
        value: "10 แบรนด์",
        sub: "ทีมเดิม ทำได้หมด",
      },
    },
    testimonial: {
      quote:
        "AI เหมือนได้ copywriter มืออาชีพมาช่วยอีก 3 คน แต่ไม่ต้องจ่ายเงินเดือน ตอนนี้รับงานได้เพิ่มเป็นเท่าตัว",
      name: "คุณบอส",
      role: "Creative Director, BrightSpark",
    },
  },

  /* ── 3. ธนกฤต & Partners ── */
  {
    id: "thanakrit",
    company: "ธนกฤต & Partners",
    tagline: "สำนักงานกฎหมาย",
    industry: "Legal",
    industrySlug: "legal",
    size: "12 คน · คดี 200+/ปี",
    icon: <Scale className="w-5 h-5" />,
    accentColor: "#0ea5e9",
    accentBg: "rgba(14,165,233,0.08)",
    problem: {
      title: "วิเคราะห์สัญญานาน เสียเวลามาก",
      description:
        "ทนายจูเนียร์ใช้เวลา 3 ชั่วโมงวิเคราะห์สัญญา 50 หน้า ต้องเทียบ precedent case อีก ทำให้รับคดีได้จำกัด",
      painPoints: [
        "วิเคราะห์สัญญา 50 หน้า ใช้เวลา 3 ชม.",
        "เทียบ precedent case ยาก หาเอกสารนาน",
        "Junior lawyer overload",
        "รับคดีได้จำกัด เสียรายได้",
      ],
    },
    solution: {
      title: "AI Contract Analysis + Legal RAG",
      description:
        "ระบบ AI วิเคราะห์สัญญาอัตโนมัติ พร้อม RAG ที่เชื่อมกับฐานข้อมูลกฎหมายและ precedent cases ของสำนักงาน",
      features: [
        "AI อ่าน + สรุปสัญญาอัตโนมัติ",
        "ชี้จุดเสี่ยงในสัญญา (risk flag)",
        "ค้นหา precedent case ด้วย RAG",
        "เทียบเทียม clause กับ template",
      ],
    },
    result: {
      title: "วิเคราะห์เหลือ 5 นาที",
      description:
        "AI วิเคราะห์สัญญาเหลือ 5 นาที จาก 3 ชั่วโมง Junior lawyer มีเวลาทำงานอื่น สำนักงานรับคดีได้เพิ่มขึ้น",
      highlights: [
        "วิเคราะห์สัญญาเหลือ 5 นาที",
        "ค้นหา precedent เร็วขึ้น 10 เท่า",
        "Junior lawyer ทำงานอื่นได้",
        "รับคดีเพิ่มขึ้น 30%",
      ],
    },
    metrics: [
      {
        label: "เวลาวิเคราะห์",
        value: 5,
        suffix: " นาที",
        prefix: "",
        description: "จาก 3 ชั่วโมง → 5 นาที",
      },
      {
        label: "เร็วขึ้น",
        value: 36,
        suffix: "x",
        prefix: "",
        description: "ความเร็ววิเคราะห์สัญญา",
      },
      {
        label: "ประหยัด/ปี",
        value: 240,
        suffix: "K",
        prefix: "฿",
        description: "ลดเวลาทนาย",
      },
      {
        label: "คดีเพิ่ม",
        value: 30,
        suffix: "%",
        prefix: "+",
        description: "รับคดีได้มากขึ้น",
      },
    ],
    roi: {
      amount: "฿240,000/ปี",
      period: "คืนทุนใน 2 เดือน",
      description: "ประหยัดเวลาทนาย + รายได้จากคดีที่รับเพิ่ม",
    },
    beforeAfter: {
      before: {
        label: "ก่อนใช้ AI",
        value: "3 ชั่วโมง",
        sub: "วิเคราะห์สัญญา 50 หน้า",
      },
      after: {
        label: "หลังใช้ AI",
        value: "5 นาที",
        sub: "AI วิเคราะห์ + สรุปให้",
      },
    },
    testimonial: {
      quote:
        "ทนายจูเนียร์เคยใช้เวลาครึ่งวันอ่านสัญญา ตอนนี้ AI สรุปให้ 5 นาที แม่นยำกว่าด้วย เหลือเวลาไปทำงานที่สำคัญกว่า",
      name: "คุณธนกฤต",
      role: "Managing Partner",
    },
  },

  /* ── 4. ข้าวมันไก่ประเสริฐ ── */
  {
    id: "prasert",
    company: "ข้าวมันไก่ประเสริฐ",
    tagline: "ร้านอาหาร 3 สาขา",
    industry: "Restaurant",
    industrySlug: "restaurant",
    size: "3 สาขา · พนักงาน 15 คน",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    problem: {
      title: "Order หลุด ของหมดไม่รู้",
      description:
        "รับ order ผ่าน LINE ไม่ทันช่วง peak hour สั่งแล้วของหมดบอกไม่ได้ food waste เยอะ review ตกเหลือ 3.8",
      painPoints: [
        "รับ order LINE ไม่ทันช่วง peak hour",
        "ลูกค้าสั่งแล้วของหมด ต้องโทรบอก",
        "Food waste สูง ฿8,000/สัปดาห์",
        "Review ตกเหลือ 3.8 ดาว",
      ],
    },
    solution: {
      title: "LINE Order Bot + Inventory Tracking",
      description:
        "ระบบรับ order อัตโนมัติผ่าน LINE ที่เชื่อมกับ inventory แบบ real-time แจ้งลูกค้าทันทีถ้าของหมด พร้อมระบบ forecast วัตถุดิบ",
      features: [
        "LINE bot รับ order อัตโนมัติ",
        "Inventory tracking แบบ real-time",
        "แจ้งเตือนวัตถุดิบใกล้หมด",
        "AI forecast ยอดขายรายวัน",
      ],
    },
    result: {
      title: "0 Order หลุด Review พุ่ง",
      description:
        "ไม่มี order หลุดอีก food waste ลดลง 25% review เพิ่มจาก 3.8 เป็น 4.6 ดาว รายได้เพิ่ม ฿35,000/เดือน",
      highlights: [
        "0 order หลุด",
        "Food waste ลด 25%",
        "Review 3.8 → 4.6 ดาว",
        "รายได้เพิ่ม ฿35,000/เดือน",
      ],
    },
    metrics: [
      {
        label: "Order หลุด",
        value: 0,
        suffix: "",
        prefix: "",
        description: "ไม่มี order ตกหล่น",
      },
      {
        label: "Food Waste",
        value: 25,
        suffix: "%",
        prefix: "-",
        description: "ลดของเสีย",
      },
      {
        label: "Review",
        value: 4.6,
        suffix: " ดาว",
        prefix: "",
        description: "จาก 3.8 → 4.6",
      },
      {
        label: "รายได้เพิ่ม",
        value: 35,
        suffix: "K/เดือน",
        prefix: "฿",
        description: "จากลูกค้าเพิ่ม",
      },
    ],
    roi: {
      amount: "฿35,000/เดือน",
      period: "คืนทุนใน 1 เดือน",
      description: "รายได้เพิ่ม + ลดค่า food waste ฿32,000/เดือน",
    },
    beforeAfter: {
      before: {
        label: "ก่อนใช้ AI",
        value: "3.8 ดาว",
        sub: "Order หลุด ของหมดบ่อย",
      },
      after: {
        label: "หลังใช้ AI",
        value: "4.6 ดาว",
        sub: "0 order หลุด ลูกค้าแฮปปี้",
      },
    },
    testimonial: {
      quote:
        "ช่วง 11 โมง-บ่ายโมง เมื่อก่อนวุ่นวายมาก order หลุดเป็นว่าเล่น ตอนนี้ LINE bot รับ order ให้หมด ลูกค้าชอบมาก review ขึ้นเห็นๆ",
      name: "คุณประเสริฐ",
      role: "เจ้าของร้าน",
    },
  },

  /* ── 5. Prime Living Realty ── */
  {
    id: "primeliving",
    company: "Prime Living Realty",
    tagline: "Agency อสังหาริมทรัพย์",
    industry: "Real Estate",
    industrySlug: "realestate",
    size: "20 คน · 50+ โครงการ",
    icon: <Home className="w-5 h-5" />,
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    problem: {
      title: "ตอบช้า 2 ชม. ลูกค้าหนี 40%",
      description:
        "ลูกค้าสอบถามผ่าน LINE เรื่องโครงการ ราคา ผ่อนต่อเดือน ทีม sale ตอบช้าเฉลี่ย 2 ชั่วโมง ลูกค้า 40% หนีไปซื้อที่อื่น",
      painPoints: [
        "ตอบ LINE ลูกค้าช้าเฉลี่ย 2 ชม.",
        "ลูกค้าหนี 40% ไปคู่แข่ง",
        "Sale ตอบคำถามซ้ำๆ ทุกวัน",
        "ไม่มีระบบจัด priority lead",
      ],
    },
    solution: {
      title: "AI Property Bot + Lead Scoring",
      description:
        "AI chatbot ตอบคำถามโครงการ ราคา ผ่อนต่อเดือน พร้อมระบบ lead scoring ที่จัดลำดับลูกค้าตามความพร้อมซื้อ",
      features: [
        "AI ตอบข้อมูลโครงการ 24/7",
        "คำนวณผ่อนต่อเดือนอัตโนมัติ",
        "Lead scoring จัด priority",
        "แจ้ง sale ทันทีเมื่อ hot lead",
      ],
    },
    result: {
      title: "ตอบ 3 วินาที ปิดดีลเพิ่ม 5 ห้อง/เดือน",
      description:
        "AI ตอบทันทีใน 3 วินาที ลูกค้าไม่หนี lead scoring ช่วย sale โฟกัสลูกค้าที่พร้อมซื้อ ปิดดีลเพิ่ม 5 ห้อง/เดือน",
      highlights: [
        "ตอบลูกค้าภายใน 3 วินาที",
        "ลูกค้าหนีลดจาก 40% → 8%",
        "ปิดดีลเพิ่ม 5 ห้อง/เดือน",
        "Sale productivity +60%",
      ],
    },
    metrics: [
      {
        label: "Response",
        value: 3,
        suffix: " วินาที",
        prefix: "",
        description: "จาก 2 ชม. → 3 วินาที",
      },
      {
        label: "ปิดดีลเพิ่ม",
        value: 5,
        suffix: " ห้อง/เดือน",
        prefix: "+",
        description: "จาก lead ที่ไม่หลุด",
      },
      {
        label: "Commission เพิ่ม",
        value: 150,
        suffix: "K/เดือน",
        prefix: "฿",
        description: "รายได้ commission",
      },
      {
        label: "Lead หลุด",
        value: 8,
        suffix: "%",
        prefix: "",
        description: "จาก 40% → 8%",
      },
    ],
    roi: {
      amount: "฿150,000/เดือน",
      period: "คืนทุนใน 1 สัปดาห์",
      description: "Commission จาก 5 ห้อง/เดือน ที่เพิ่มขึ้น",
    },
    beforeAfter: {
      before: {
        label: "ก่อนใช้ AI",
        value: "40%",
        sub: "ลูกค้าหนีเพราะตอบช้า",
      },
      after: {
        label: "หลังใช้ AI",
        value: "8%",
        sub: "ตอบ 3 วิ ลูกค้าอยู่",
      },
    },
    testimonial: {
      quote:
        "เมื่อก่อน lead ดีๆ หลุดไปเพราะ sale ตอบไม่ทัน ตอนนี้ AI คุยกับลูกค้าก่อน พอ sale โทรไป ลูกค้าพร้อมซื้อเลย",
      name: "คุณพิชญ์",
      role: "Sales Director, Prime Living",
    },
  },
];

/* ═══════════════════════════════════════════════════════════
   SOLUTION LINK MAP
   ═══════════════════════════════════════════════════════════ */
const solutionLinks: Record<string, { label: string; href: string }> = {
  ecommerce: {
    label: "ดู solution สำหรับ E-Commerce",
    href: "/solutions/ecommerce",
  },
  creator: {
    label: "ดู solution สำหรับ Creator Agency",
    href: "/solutions/creator",
  },
  legal: {
    label: "ดู solution สำหรับ สำนักงานกฎหมาย",
    href: "/solutions/legal",
  },
  restaurant: {
    label: "ดู solution สำหรับ ร้านอาหาร",
    href: "/solutions/restaurant",
  },
  realestate: {
    label: "ดู solution สำหรับ อสังหาริมทรัพย์",
    href: "/solutions/realestate",
  },
};

/* ═══════════════════════════════════════════════════════════
   BEFORE / AFTER VISUAL
   ═══════════════════════════════════════════════════════════ */
function BeforeAfterCard({
  data,
  accentColor,
}: {
  data: CaseStudy["beforeAfter"];
  accentColor: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Before */}
      <div className="relative rounded-2xl border border-red-200/60 bg-red-50/40 p-5 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-300 to-red-400" />
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <X className="w-4 h-4 text-red-400" />
          <span className="text-xs font-medium text-red-400 tracking-wide uppercase">
            {data.before.label}
          </span>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-1">
          {data.before.value}
        </p>
        <p className="text-xs text-[#86868b]">{data.before.sub}</p>
      </div>

      {/* After */}
      <div
        className="relative rounded-2xl border p-5 text-center overflow-hidden"
        style={{
          borderColor: `${accentColor}30`,
          backgroundColor: `${accentColor}08`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-1"
          style={{
            background: `linear-gradient(to right, ${accentColor}80, ${accentColor})`,
          }}
        />
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <Check className="w-4 h-4" style={{ color: accentColor }} />
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: accentColor }}
          >
            {data.after.label}
          </span>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] mb-1">
          {data.after.value}
        </p>
        <p className="text-xs text-[#86868b]">{data.after.sub}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLOW STEP (Problem → Solution → Result)
   ═══════════════════════════════════════════════════════════ */
function FlowStep({
  step,
  icon,
  color,
  title,
  description,
  items,
  itemIcon,
}: {
  step: string;
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  items: string[];
  itemIcon: "alert" | "zap" | "check";
}) {
  const iconMap = {
    alert: <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />,
    zap: <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />,
    check: <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />,
  };

  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
        <div>
          <p
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color }}
          >
            {step}
          </p>
          <p className="text-sm font-semibold text-[#1d1d1f] leading-tight">
            {title}
          </p>
        </div>
      </div>
      <p className="text-xs text-[#86868b] mb-3 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-[#1d1d1f]">
            {iconMap[itemIcon]}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SINGLE CASE STUDY CARD (full-width)
   ═══════════════════════════════════════════════════════════ */
function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const link = solutionLinks[study.industrySlug];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="apple-card rounded-3xl bg-white border border-[#d2d2d7]/40 shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      {/* ── Top accent bar ── */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${study.accentColor}60, ${study.accentColor})`,
        }}
      />

      <div className="p-6 sm:p-10">
        {/* ── Header: Company + Badge ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: study.accentBg, color: study.accentColor }}
            >
              {study.icon}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight">
                {study.company}
              </h3>
              <p className="text-sm text-[#86868b] mt-0.5">{study.tagline}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: study.accentBg, color: study.accentColor }}
            >
              {study.icon}
              {study.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#f5f5f7] text-[#86868b]">
              <Users className="w-3.5 h-3.5" />
              {study.size}
            </span>
          </div>
        </div>

        {/* ── Before / After Visual ── */}
        <div className="mb-8">
          <BeforeAfterCard
            data={study.beforeAfter}
            accentColor={study.accentColor}
          />
        </div>

        {/* ── Problem → Solution → Result Flow ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <FlowStep
            step="Problem"
            icon={<AlertTriangle className="w-4 h-4" />}
            color="#ef4444"
            title={study.problem.title}
            description={study.problem.description}
            items={study.problem.painPoints}
            itemIcon="alert"
          />

          {/* Arrow divider (desktop only) */}
          <div className="hidden md:flex items-center justify-center -mx-4">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#d2d2d7] to-transparent relative">
              <ArrowRight className="w-5 h-5 text-[#86868b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-0.5 rounded-full" />
            </div>
          </div>
          {/* Mobile arrow */}
          <div className="flex md:hidden items-center justify-center -my-2">
            <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#86868b] rotate-90" />
            </div>
          </div>

          <FlowStep
            step="Solution"
            icon={<Zap className="w-4 h-4" />}
            color="#2997ff"
            title={study.solution.title}
            description={study.solution.description}
            items={study.solution.features}
            itemIcon="zap"
          />

          {/* Arrow divider (desktop only) */}
          <div className="hidden md:flex items-center justify-center -mx-4">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#d2d2d7] to-transparent relative">
              <ArrowRight className="w-5 h-5 text-[#86868b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-0.5 rounded-full" />
            </div>
          </div>
          {/* Mobile arrow */}
          <div className="flex md:hidden items-center justify-center -my-2">
            <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-[#86868b] rotate-90" />
            </div>
          </div>

          <FlowStep
            step="Result"
            icon={<TrendingUp className="w-4 h-4" />}
            color="#34c759"
            title={study.result.title}
            description={study.result.description}
            items={study.result.highlights}
            itemIcon="check"
          />
        </div>

        {/* ── Key Metrics (animated counters) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {study.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl bg-[#f5f5f7]/80 p-4 text-center"
            >
              <p className="text-xs text-[#86868b] mb-1 font-medium">
                {metric.label}
              </p>
              <p
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ color: study.accentColor }}
              >
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  duration={1500}
                />
              </p>
              <p className="text-[10px] text-[#86868b] mt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── ROI Highlight Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border-2 p-5 sm:p-6 mb-8 relative overflow-hidden"
          style={{
            borderColor: `${study.accentColor}30`,
            backgroundColor: `${study.accentColor}05`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: study.accentColor }}
          />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 relative z-10">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${study.accentColor}15`, color: study.accentColor }}
            >
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: study.accentColor }}
                >
                  {study.roi.amount}
                </p>
                <span className="text-sm font-semibold text-[#1d1d1f]">
                  {study.roi.period}
                </span>
              </div>
              <p className="text-sm text-[#86868b] mt-1">
                {study.roi.description}
              </p>
            </div>
            <div
              className="shrink-0 px-4 py-2 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: study.accentColor }}
            >
              ROI
            </div>
          </div>
        </motion.div>

        {/* ── Testimonial ── */}
        <div className="rounded-2xl bg-[#f5f5f7]/60 p-5 sm:p-6 mb-6">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                style={{ color: study.accentColor, fill: study.accentColor }}
              />
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#1d1d1f] leading-relaxed mb-4 italic">
            &ldquo;{study.testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: study.accentColor }}
            >
              {study.testimonial.name.charAt(3)}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f]">
                {study.testimonial.name}
              </p>
              <p className="text-xs text-[#86868b]">
                {study.testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* ── Solution link ── */}
        {link && (
          <motion.a
            href={link.href}
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium group"
            style={{ color: study.accentColor }}
          >
            {link.label}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SUMMARY STATS BAR
   ═══════════════════════════════════════════════════════════ */
function SummaryStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { label: "ธุรกิจที่ได้ผลลัพธ์", value: 50, suffix: "+", prefix: "", icon: <BadgeCheck className="w-5 h-5" /> },
    { label: "ประหยัดรวม/ปี", value: 8.4, suffix: "M", prefix: "฿", icon: <DollarSign className="w-5 h-5" /> },
    { label: "คืนทุนเฉลี่ย", value: 1.5, suffix: " เดือน", prefix: "", icon: <Timer className="w-5 h-5" /> },
    { label: "ความพึงพอใจ", value: 4.9, suffix: "/5", prefix: "", icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          className="apple-card rounded-2xl bg-white border border-[#d2d2d7]/40 shadow-[0_2px_12px_rgba(0,0,0,0.04)] p-5 text-center"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#86868b] mx-auto mb-3">
            {stat.icon}
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              duration={2000}
            />
          </p>
          <p className="text-xs text-[#86868b] mt-1 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INDUSTRY FILTER PILLS
   ═══════════════════════════════════════════════════════════ */
function IndustryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (v: string) => void;
}) {
  const filters = [
    { key: "all", label: "ทั้งหมด", icon: <Sparkles className="w-3.5 h-3.5" /> },
    { key: "ecommerce", label: "E-Commerce", icon: <ShoppingCart className="w-3.5 h-3.5" /> },
    { key: "creator", label: "Creative", icon: <Palette className="w-3.5 h-3.5" /> },
    { key: "legal", label: "Legal", icon: <Scale className="w-3.5 h-3.5" /> },
    { key: "restaurant", label: "Restaurant", icon: <UtensilsCrossed className="w-3.5 h-3.5" /> },
    { key: "realestate", label: "Real Estate", icon: <Home className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((f) => (
        <motion.button
          key={f.key}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onChange(f.key)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active === f.key
              ? "bg-[#1d1d1f] text-white shadow-lg"
              : "bg-white text-[#86868b] border border-[#d2d2d7]/60 hover:border-[#1d1d1f]/20 hover:text-[#1d1d1f]"
          }`}
        >
          {f.icon}
          {f.label}
        </motion.button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════ */
export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((s) => s.industrySlug === activeFilter);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#2997ff]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-gradient-to-tl from-[#34c759]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/40 mb-6">
            <Target className="w-4 h-4 text-[#2997ff]" />
            <span className="text-xs font-semibold text-[#86868b] tracking-wide">
              CASE STUDIES
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5">
            ผลลัพธ์จริง
            <br />
            <span className="bg-gradient-to-r from-[#2997ff] to-[#5856d6] bg-clip-text text-transparent">
              จากธุรกิจไทย
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            ไม่ใช่ทฤษฎี แต่คือ ROI จริงจากธุรกิจที่ใช้ AI Automation
            <br className="hidden sm:block" />
            ของ CloudAI Thailand
          </p>
        </motion.div>

        {/* ── Summary Stats ── */}
        <SummaryStats />

        {/* ── Industry Filter ── */}
        <IndustryFilter active={activeFilter} onChange={setActiveFilter} />

        {/* ── Case Study Cards ── */}
        <div className="space-y-10">
          {filteredStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}

          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-[#86868b]">ไม่มี case study ในหมวดนี้</p>
            </motion.div>
          )}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="apple-card rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d30] p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5856d6]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                ธุรกิจของคุณจะเป็นรายต่อไป
              </h3>
              <p className="text-[#86868b] mb-8 max-w-lg mx-auto leading-relaxed">
                ปรึกษาฟรี เราจะวิเคราะห์ workflow ของคุณ
                <br className="hidden sm:block" />
                และเสนอ solution ที่คืนทุนเร็วที่สุด
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://line.me/ti/p/~@cloudaithai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2997ff] text-white rounded-full text-sm font-semibold hover:bg-[#0077ed] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  ปรึกษาฟรีผ่าน LINE
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  ดูแพ็กเกจ
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
