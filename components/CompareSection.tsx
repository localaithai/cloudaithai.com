"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageSquare,
  Bot,
  Clock,
  Users,
  FileText,
  ShoppingCart,
  Globe,
  Shield,
  Server,
  Cpu,
  Lock,
  Eye,
  Zap,
  Building2,
  Code,
  GraduationCap,
  AlertTriangle,
  HeadphonesIcon,
  DollarSign,
  CalendarDays,
  Wrench,
  TrendingUp,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════ */

interface CompareRow {
  label: string;
  chatgpt?: string;
  cloudai?: string;
  cloud?: string;
  local?: string;
  agency?: string;
  us?: string;
  diy?: string;
  weDoIt?: string;
  chatgptIcon?: boolean;
  cloudaiIcon?: boolean;
  cloudIcon?: boolean;
  localIcon?: boolean;
  agencyIcon?: boolean;
  usIcon?: boolean;
  diyIcon?: boolean;
  weDoItIcon?: boolean;
}

/* ═══════════════════════════════════════════════════════════
   SECTION 1 DATA — ChatGPT Plus vs CloudAI
   ═══════════════════════════════════════════════════════════ */

const chatgptVsCloudRows: CompareRow[] = [
  {
    label: "ราคา",
    chatgpt: "฿700/เดือน",
    cloudai: "฿19,900 + ฿800/เดือน",
  },
  {
    label: "1 ปี รวม",
    chatgpt: "฿8,400",
    cloudai: "฿29,500",
  },
  {
    label: "2 ปี รวม",
    chatgpt: "฿16,800",
    cloudai: "฿39,100",
  },
  {
    label: "3 ปี รวม",
    chatgpt: "฿25,200",
    cloudai: "฿48,700",
  },
  {
    label: "ตอบแชทลูกค้าอัตโนมัติ",
    chatgpt: "ไม่ได้",
    cloudai: "ได้",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "เชื่อม LINE / Facebook",
    chatgpt: "ไม่ได้",
    cloudai: "ได้",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "จัดการ Order",
    chatgpt: "ไม่ได้",
    cloudai: "ได้",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "RAG จากเอกสารบริษัท",
    chatgpt: "Manual upload",
    cloudai: "Automatic sync",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "ทำงาน 24/7",
    chatgpt: "ต้องเปิดเอง",
    cloudai: "อัตโนมัติ",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "รู้ข้อมูลสินค้า/บริการ",
    chatgpt: "ไม่รู้",
    cloudai: "รู้ทั้งหมด",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "Multiple Users",
    chatgpt: "1 account",
    cloudai: "ไม่จำกัด",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
  {
    label: "Custom Workflow",
    chatgpt: "ไม่ได้",
    cloudai: "ได้ตามต้องการ",
    chatgptIcon: false,
    cloudaiIcon: true,
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 2 DATA — Cloud AI vs Local AI
   ═══════════════════════════════════════════════════════════ */

const cloudVsLocalRows: CompareRow[] = [
  {
    label: "ราคาเริ่มต้น",
    cloud: "฿9,900 - ฿89,900",
    local: "฿150,000 - ฿500,000+",
  },
  {
    label: "ค่ารายเดือน",
    cloud: "฿800 - ฿5,000 (hosting + API)",
    local: "฿0 - ฿2,000 (ค่าไฟ)",
  },
  {
    label: "ประสิทธิภาพ Model",
    cloud: "Frontier (GPT-5, Claude 4.6)",
    local: "Open-source (Llama, Qwen)",
  },
  {
    label: "ความเป็นส่วนตัว",
    cloud: "ข้อมูลอยู่บน Cloud",
    local: "ข้อมูลอยู่ในออฟฟิศ 100%",
    cloudIcon: false,
    localIcon: true,
  },
  {
    label: "Internet ต้องใช้?",
    cloud: "ต้องมี",
    local: "ไม่ต้อง (offline ได้)",
    cloudIcon: false,
    localIcon: true,
  },
  {
    label: "Scale ง่าย?",
    cloud: "ง่ายมาก (เพิ่ม resource)",
    local: "ต้องซื้อ hardware เพิ่ม",
    cloudIcon: true,
    localIcon: false,
  },
  {
    label: "Setup เร็ว?",
    cloud: "1-2 สัปดาห์",
    local: "2-4 สัปดาห์",
    cloudIcon: true,
    localIcon: false,
  },
  {
    label: "เหมาะกับ",
    cloud: "SME, Startup, ทีมเล็ก",
    local: "โรงพยาบาล, ธนาคาร, ราชการ",
  },
];

const cloudVsLocalRecs = [
  {
    useCase: "ร้านค้าออนไลน์ / ร้านอาหาร",
    rec: "Cloud AI",
    reason: "ราคาถูก ใช้งานง่าย เริ่มได้เลย",
    link: "https://www.cloudaithai.com",
  },
  {
    useCase: "คลินิก / โรงพยาบาล",
    rec: "Local AI",
    reason: "ข้อมูลผู้ป่วยต้องอยู่ภายใน ตาม PDPA",
    link: "https://www.localaithai.com",
  },
  {
    useCase: "สำนักงานบัญชี / กฎหมาย",
    rec: "Local AI",
    reason: "เอกสารลับ ต้อง air-gapped",
    link: "https://www.localaithai.com",
  },
  {
    useCase: "อสังหาริมทรัพย์",
    rec: "Cloud AI",
    reason: "ตอบแชทลูกค้า 24/7 เชื่อม LINE",
    link: "https://www.cloudaithai.com",
  },
  {
    useCase: "โรงงาน / Manufacturing",
    rec: "Local AI",
    reason: "ไม่มี internet ในโรงงาน + ข้อมูล sensitive",
    link: "https://www.localaithai.com",
  },
  {
    useCase: "E-commerce หลายสาขา",
    rec: "Cloud AI",
    reason: "Scale ง่าย เชื่อมหลายช่องทาง",
    link: "https://www.cloudaithai.com",
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 3 DATA — Agency vs CloudAI
   ═══════════════════════════════════════════════════════════ */

const agencyVsUsRows: CompareRow[] = [
  {
    label: "ค่า Setup",
    agency: "฿100,000 - ฿500,000",
    us: "฿19,900 - ฿89,900",
  },
  {
    label: "ค่ารายเดือน",
    agency: "฿10,000 - ฿30,000",
    us: "฿800 - ฿5,000",
  },
  {
    label: "ระยะเวลาส่งงาน",
    agency: "2-3 เดือน",
    us: "1-4 สัปดาห์",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "เป็นเจ้าของระบบ?",
    agency: "ไม่ (Proprietary)",
    us: "ใช่ (Open-source)",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "แก้ไขเอง?",
    agency: "ต้องจ่ายเพิ่ม",
    us: "แก้ได้เอง หรือให้เราช่วย",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "Lock-in",
    agency: "สูง (ย้ายยาก)",
    us: "ไม่มี (ย้ายได้ทันที)",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "AI Model",
    agency: "Fixed (เลือกไม่ได้)",
    us: "เลือกได้ (GPT-5, Claude, Gemini)",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "Workflow Automation",
    agency: "จำกัด",
    us: "n8n + Dify (ไม่จำกัด)",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "Update / Maintenance",
    agency: "ต้องจ่ายเพิ่มทุกครั้ง",
    us: "รวมใน monthly fee",
    agencyIcon: false,
    usIcon: true,
  },
  {
    label: "Transparency",
    agency: "Black box",
    us: "เห็นทุก flow, ทุก prompt",
    agencyIcon: false,
    usIcon: true,
  },
];

/* ═══════════════════════════════════════════════════════════
   SECTION 4 DATA — DIY vs CloudAI
   ═══════════════════════════════════════════════════════════ */

const diyVsUsRows: CompareRow[] = [
  {
    label: "Learning Curve",
    diy: "3-6 เดือน",
    weDoIt: "1-2 สัปดาห์ (เราทำให้)",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "ต้นทุนจริง",
    diy: "฿0 (เวลาคุณ = ฿50,000+)",
    weDoIt: "฿19,900",
  },
  {
    label: "ความเสี่ยง",
    diy: "สูง (ผิดพลาด, ความปลอดภัย)",
    weDoIt: "ต่ำ (เราดูแลให้)",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "Support",
    diy: "Stack Overflow / Google",
    weDoIt: "ทีมงานเฉพาะทาง",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "Production-ready",
    diy: "ไม่แน่ใจ",
    weDoIt: "พร้อมใช้ทันที",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "Security / PDPA",
    diy: "ต้องศึกษาเอง",
    weDoIt: "จัดการให้ครบ",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "Integration (LINE/FB/CRM)",
    diy: "Debug เอง",
    weDoIt: "เชื่อมให้พร้อมใช้",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "เวลาที่เสีย",
    diy: "500+ ชั่วโมง",
    weDoIt: "0 ชม. (คุณโฟกัสธุรกิจ)",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "Update ตาม AI ใหม่",
    diy: "ต้องตามเอง",
    weDoIt: "เรา update ให้",
    diyIcon: false,
    weDoItIcon: true,
  },
  {
    label: "ผลลัพธ์",
    diy: "Prototype (อาจใช้ไม่ได้)",
    weDoIt: "Production (ใช้ได้จริง)",
    diyIcon: false,
    weDoItIcon: true,
  },
];

/* ═══════════════════════════════════════════════════════════
   ICON CELL COMPONENT
   ═══════════════════════════════════════════════════════════ */

function CellValue({
  text,
  isPositive,
}: {
  text: string;
  isPositive?: boolean;
}) {
  if (isPositive === true) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-[#1d1d1f]">
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#34c759]/10 flex items-center justify-center">
          <Check size={13} className="text-[#34c759]" />
        </span>
        {text}
      </span>
    );
  }
  if (isPositive === false) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-[#86868b]">
        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#ff3b30]/10 flex items-center justify-center">
          <X size={13} className="text-[#ff3b30]" />
        </span>
        {text}
      </span>
    );
  }
  return <span className="text-sm text-[#1d1d1f]">{text}</span>;
}

/* ═══════════════════════════════════════════════════════════
   SECTION WRAPPER
   ═══════════════════════════════════════════════════════════ */

function SectionBlock({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="mb-24"
    >
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-wide text-[#6e6e73] uppercase mb-3"
        >
          เปรียบเทียบ {index + 1}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-[#6e6e73] max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
      {children}
    </motion.section>
  );
}

/* ═══════════════════════════════════════════════════════════
   COMPARISON TABLE
   ═══════════════════════════════════════════════════════════ */

function CompareTable({
  colA,
  colB,
  colAColor,
  colBColor,
  rows,
  fieldA,
  fieldB,
  iconA,
  iconB,
}: {
  colA: string;
  colB: string;
  colAColor: string;
  colBColor: string;
  rows: CompareRow[];
  fieldA: keyof CompareRow;
  fieldB: keyof CompareRow;
  iconA: keyof CompareRow;
  iconB: keyof CompareRow;
}) {
  return (
    <div className="apple-card overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.5fr_1fr_1fr] border-b border-[#e5e5e5]">
        <div className="p-4 sm:p-5" />
        <div
          className="p-4 sm:p-5 text-center font-semibold text-sm sm:text-base"
          style={{ color: colAColor }}
        >
          {colA}
        </div>
        <div
          className="p-4 sm:p-5 text-center font-semibold text-sm sm:text-base"
          style={{ color: colBColor }}
        >
          {colB}
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={row.label}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className={`grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1.5fr_1fr_1fr] ${
            i < rows.length - 1 ? "border-b border-[#f0f0f0]" : ""
          } ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
        >
          <div className="p-4 sm:p-5 font-medium text-sm text-[#1d1d1f]">
            {row.label}
          </div>
          <div className="p-4 sm:p-5 flex items-center justify-center">
            <CellValue
              text={row[fieldA] as string}
              isPositive={row[iconA] as boolean | undefined}
            />
          </div>
          <div className="p-4 sm:p-5 flex items-center justify-center">
            <CellValue
              text={row[fieldB] as string}
              isPositive={row[iconB] as boolean | undefined}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAV PILLS
   ═══════════════════════════════════════════════════════════ */

const sections = [
  { id: "chatgpt-vs-cloudai", label: "ChatGPT vs CloudAI", icon: Bot },
  { id: "cloud-vs-local", label: "Cloud vs Local", icon: Server },
  { id: "agency-vs-us", label: "Agency vs เรา", icon: Building2 },
  { id: "diy-vs-us", label: "DIY vs เรา", icon: Code },
];

function NavPills({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-2 mb-16"
    >
      {sections.map((s) => {
        const Icon = s.icon;
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => {
              onSelect(s.id);
              document
                .getElementById(s.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-[#1d1d1f] text-white shadow-lg"
                : "bg-white text-[#6e6e73] hover:bg-[#f5f5f7] border border-[#e5e5e5]"
            }`}
          >
            <Icon size={16} />
            {s.label}
          </button>
        );
      })}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   VERDICT BOX
   ═══════════════════════════════════════════════════════════ */

function VerdictBox({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-2xl p-6 sm:p-8 text-center"
      style={{ backgroundColor: `${color}08`, border: `1px solid ${color}20` }}
    >
      <p
        className="text-lg sm:text-xl font-semibold"
        style={{ color }}
      >
        {text}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CTA BUTTON
   ═══════════════════════════════════════════════════════════ */

function CtaButton({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-shadow hover:shadow-lg"
      style={{ backgroundColor: color }}
    >
      {label}
      <ArrowRight size={16} />
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   RECOMMENDATION CARD
   ═══════════════════════════════════════════════════════════ */

function RecCard({
  useCase,
  rec,
  reason,
  link,
  index,
}: {
  useCase: string;
  rec: string;
  reason: string;
  link: string;
  index: number;
}) {
  const isCloud = rec === "Cloud AI";
  const color = isCloud ? "#2997ff" : "#5856d6";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="apple-card p-5 sm:p-6 flex flex-col gap-3 group cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-[#1d1d1f]">{useCase}</span>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            color,
            backgroundColor: `${color}12`,
          }}
        >
          {rec}
        </span>
      </div>
      <p className="text-sm text-[#6e6e73]">{reason}</p>
      <span
        className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
        style={{ color }}
      >
        ดูรายละเอียด
        <ArrowRight size={12} />
      </span>
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   BREAKEVEN CALCULATOR (mini)
   ═══════════════════════════════════════════════════════════ */

function BreakevenNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 apple-card p-5 sm:p-6 bg-[#f5f5f7] border-none"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#ff9f0a]/10 flex items-center justify-center">
          <TrendingUp size={18} className="text-[#ff9f0a]" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
            Break-even Point
          </p>
          <p className="text-sm text-[#6e6e73] leading-relaxed">
            ถ้าดูแค่ราคา ChatGPT ถูกกว่าในช่วง 1-3 ปีแรก แต่ ChatGPT
            เป็นแค่ tool ส่วนตัว ไม่ได้ตอบแชทลูกค้า ไม่ได้เชื่อม LINE
            ไม่ได้จัดการ Order{" "}
            <span className="font-semibold text-[#1d1d1f]">
              CloudAI คืนทุนจาก productivity ที่เพิ่มขึ้นภายใน 1-2 เดือนแรก
            </span>{" "}
            เพราะลดงาน manual ได้ 80%+
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function CompareSection() {
  const [activeSection, setActiveSection] = useState("chatgpt-vs-cloudai");

  return (
    <section className="py-20 sm:py-28 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Hero heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            เปรียบเทียบทุกทางเลือก
          </h1>
          <p className="text-lg sm:text-xl text-[#6e6e73] max-w-2xl mx-auto">
            ดูข้อดี-ข้อเสียของแต่ละทางเลือกแบบตรงไปตรงมา
            ไม่มีอะไรซ่อน เพื่อให้คุณตัดสินใจได้ถูกต้อง
          </p>
        </motion.div>

        {/* Nav pills */}
        <NavPills active={activeSection} onSelect={setActiveSection} />

        {/* ─── SECTION 1: ChatGPT vs CloudAI ─── */}
        <SectionBlock
          id="chatgpt-vs-cloudai"
          index={0}
          title="ChatGPT Plus ฿700/เดือน vs CloudAI ฿19,900 ครั้งเดียว"
          subtitle="เครื่องมือส่วนตัว vs ระบบสำหรับธุรกิจ"
        >
          <CompareTable
            colA="ChatGPT Plus"
            colB="CloudAI"
            colAColor="#6e6e73"
            colBColor="#2997ff"
            rows={chatgptVsCloudRows}
            fieldA="chatgpt"
            fieldB="cloudai"
            iconA="chatgptIcon"
            iconB="cloudaiIcon"
          />
          <BreakevenNote />
          <VerdictBox
            text="ChatGPT เป็น tool ส่วนตัว — CloudAI เป็นระบบสำหรับธุรกิจ"
            color="#2997ff"
          />
        </SectionBlock>

        {/* ─── SECTION 2: Cloud vs Local ─── */}
        <SectionBlock
          id="cloud-vs-local"
          index={1}
          title="Cloud AI vs Local AI"
          subtitle="เลือกให้เหมาะกับธุรกิจของคุณ"
        >
          <CompareTable
            colA="Cloud AI"
            colB="Local AI"
            colAColor="#2997ff"
            colBColor="#5856d6"
            rows={cloudVsLocalRows}
            fieldA="cloud"
            fieldB="local"
            iconA="cloudIcon"
            iconB="localIcon"
          />

          {/* Recommendations grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-6 text-center">
              แนะนำตามประเภทธุรกิจ
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cloudVsLocalRecs.map((r, i) => (
                <RecCard key={r.useCase} {...r} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <CtaButton
              href="https://www.cloudaithai.com"
              label="Cloud AI Thailand"
              color="#2997ff"
            />
            <CtaButton
              href="https://www.localaithai.com"
              label="Local AI Thailand"
              color="#5856d6"
            />
          </motion.div>

          <VerdictBox
            text="ไม่มีคำตอบที่ถูกเสมอ — ขึ้นอยู่กับลักษณะธุรกิจ ความลับของข้อมูล และงบประมาณ"
            color="#5856d6"
          />
        </SectionBlock>

        {/* ─── SECTION 3: Agency vs Us ─── */}
        <SectionBlock
          id="agency-vs-us"
          index={2}
          title="เราเทียบกับ Agency ทำ Chatbot"
          subtitle="จ้าง Agency แพง แต่คุณไม่ได้เป็นเจ้าของ"
        >
          <CompareTable
            colA="Agency ทั่วไป"
            colB="CloudAI Thailand"
            colAColor="#6e6e73"
            colBColor="#2997ff"
            rows={agencyVsUsRows}
            fieldA="agency"
            fieldB="us"
            iconA="agencyIcon"
            iconB="usIcon"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 apple-card p-5 sm:p-6 bg-[#f5f5f7] border-none"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#ff3b30]/10 flex items-center justify-center">
                <Lock size={18} className="text-[#ff3b30]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                  Vendor Lock-in คือความเสี่ยงที่ใหญ่ที่สุด
                </p>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Agency ส่วนใหญ่ใช้ระบบ proprietary — ถ้าเลิกจ้าง
                  คุณเสียทุกอย่าง ต้องเริ่มใหม่จากศูนย์ กับ CloudAI
                  คุณเป็นเจ้าของระบบ open-source ย้ายได้ แก้ได้
                  ไม่ต้องพึ่งใครตลอดไป
                </p>
              </div>
            </div>
          </motion.div>

          <VerdictBox
            text="จ่ายน้อยกว่า ส่งเร็วกว่า เป็นเจ้าของจริง ไม่ Lock-in"
            color="#2997ff"
          />
        </SectionBlock>

        {/* ─── SECTION 4: DIY vs Us ─── */}
        <SectionBlock
          id="diy-vs-us"
          index={3}
          title="เราเทียบกับ DIY (ทำเอง)"
          subtitle="ฟรีไม่ได้แปลว่าถูก — เวลาคุณมีค่า"
        >
          <CompareTable
            colA="ทำเอง (DIY)"
            colB="CloudAI ทำให้"
            colAColor="#6e6e73"
            colBColor="#2997ff"
            rows={diyVsUsRows}
            fieldA="diy"
            fieldB="weDoIt"
            iconA="diyIcon"
            iconB="weDoItIcon"
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 apple-card p-5 sm:p-6 bg-[#f5f5f7] border-none"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#5856d6]/10 flex items-center justify-center">
                <Clock size={18} className="text-[#5856d6]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                  เวลาคือต้นทุนที่แพงที่สุด
                </p>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  ถ้าคุณเป็นเจ้าของธุรกิจ เวลา 500+ ชั่วโมงที่ใช้ศึกษา AI,
                  debug code, อ่าน documentation คือเวลาที่ไม่ได้ใช้หาลูกค้า
                  ดูแลธุรกิจ หรือพัฒนาสินค้า{" "}
                  <span className="font-semibold text-[#1d1d1f]">
                    ให้ผู้เชี่ยวชาญทำในสิ่งที่เขาถนัด คุณก็ทำในสิ่งที่คุณถนัด
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 apple-card p-5 sm:p-6 bg-[#f5f5f7] border-none"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#ff9f0a]/10 flex items-center justify-center">
                <AlertTriangle size={18} className="text-[#ff9f0a]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1d1d1f] mb-1">
                  ความเสี่ยงที่มองไม่เห็น
                </p>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  Prompt injection, data leakage, API key หลุด, PDPA
                  compliance — สิ่งเหล่านี้ต้องเข้าใจอย่างลึกซึ้ง
                  ความผิดพลาดเดียวอาจทำให้ข้อมูลลูกค้าหลุด
                  หรือเสียชื่อเสียงทั้งบริษัท
                </p>
              </div>
            </div>
          </motion.div>

          <VerdictBox
            text="เวลาคุณมีค่ามากกว่า ฿19,900 — ให้เราทำให้ คุณโฟกัสธุรกิจ"
            color="#2997ff"
          />
        </SectionBlock>

        {/* ─── FINAL CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-8"
        >
          <div className="apple-card p-8 sm:p-12 bg-gradient-to-br from-[#1d1d1f] to-[#2d2d30] border-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              พร้อมเริ่มต้นแล้ว?
            </h2>
            <p className="text-[#a1a1a6] mb-8 max-w-lg mx-auto">
              ปรึกษาฟรี ไม่มีข้อผูกมัด เราช่วยวิเคราะห์ว่าทางเลือกไหน
              เหมาะกับธุรกิจของคุณที่สุด
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CtaButton
                href="https://www.cloudaithai.com"
                label="Cloud AI — เริ่ม ฿9,900"
                color="#2997ff"
              />
              <CtaButton
                href="https://www.localaithai.com"
                label="Local AI — ปรึกษาฟรี"
                color="#5856d6"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
