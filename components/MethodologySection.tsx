"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Brain,
  Bot,
  MessageSquareWarning,
  Search,
  Palette,
  Hammer,
  FlaskConical,
  Rocket,
  Lock,
  ShieldCheck,
  AlertTriangle,
  Database,
  Globe,
  KeyRound,
  Flame,
  RefreshCcw,
  Eye,
  Terminal,
  CheckCircle2,
  XCircle,
  Users,
  FileText,
  ArrowRight,
  Zap,
  Heart,
  GitBranch,
  Star,
  ExternalLink,
  CircleDollarSign,
  Siren,
  Activity,
  HardDrive,
  BadgeCheck,
  CloudOff,
  Building2,
  Stethoscope,
  Landmark,
  ShieldAlert,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
} as const;

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

/* ──────────────────────────────────────────────
   Section heading helper
   ────────────────────────────────────────────── */
function SectionHeading({
  badge,
  title,
  subtitle,
}: {
  badge: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
        {badge}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   SECTION 1 — Core Principles
   ══════════════════════════════════════════════ */
const principles = [
  {
    icon: Hammer,
    color: "#2997ff",
    title: "Custom-Built, Every Time",
    subtitle: "ไม่มี solution สำเร็จรูป ทุกโปรเจกต์ออกแบบและสร้างเฉพาะสำหรับธุรกิจคุณ",
    quote: "แพ็คเกจคือ tier ราคา ไม่ใช่ของสำเร็จรูป — สิ่งที่ส่งมอบทุกชิ้นไม่เหมือนกัน",
  },
  {
    icon: GitBranch,
    color: "#ff6d5a",
    title: "Open-Source First",
    subtitle: "ใช้ open-source tools เท่านั้น ลูกค้าเป็นเจ้าของทุกอย่าง ไม่ lock-in",
    quote: "ถ้าเราเลิกกิจการ ลูกค้ายังใช้งานต่อได้",
    tools: [
      { name: "n8n", stars: "50K+", color: "#ff6d5a" },
      { name: "Flowise", stars: "30K+", color: "#3b82f6" },
      { name: "Dify", stars: "90K+", color: "#8b5cf6" },
    ],
  },
  {
    icon: Database,
    color: "#5856d6",
    title: "Data Stays Yours",
    subtitle: "ข้อมูลลูกค้าอยู่บน VPS ของลูกค้า ไม่อยู่กับเรา",
    diagram: true,
  },
  {
    icon: Brain,
    color: "#30d158",
    title: "Right Model for the Job",
    subtitle: "ไม่ใช้ model แพงสุดทุกงาน เลือกให้เหมาะ ประหยัดค่า API",
    flowchart: true,
  },
  {
    icon: Bot,
    color: "#ff9500",
    title: "Automate the Boring",
    subtitle: "AI ทำงานซ้ำ คนทำงานที่ต้องคิด",
    beforeAfter: true,
  },
  {
    icon: MessageSquareWarning,
    color: "#ff2d55",
    title: "Honest About Limitations",
    subtitle: "บอกตรงๆ ว่า AI ทำอะไรได้/ไม่ได้",
    canDo: [
      "ตอบคำถามจาก knowledge base",
      "สรุปเอกสาร / อีเมลยาว",
      "Draft content / copywriting",
      "Automate ขั้นตอนซ้ำซาก",
      "วิเคราะห์ข้อมูล / สร้าง report",
    ],
    cantDo: [
      "ตัดสินใจทางกฎหมาย / การเงิน",
      "รับประกันความถูกต้อง 100%",
      "แทนที่พนักงานทั้งหมด",
      "เข้าใจบริบทที่ไม่เคยเห็น",
      "ทำงานโดยไม่ต้อง monitor",
    ],
  },
];

function PrinciplesSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Our Principles"
          title="หลักการของเรา"
          subtitle="6 หลักการที่เราถือปฏิบัติทุกโปรเจกต์ ไม่มีข้อยกเว้น"
        />

        <motion.div
          
          
          
          viewport={{ once: true }}
          className="space-y-8"
        >
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              
              
              className="apple-card p-8 md:p-10"
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: p.color + "12" }}
                >
                  <p.icon size={28} style={{ color: p.color }} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f]">{p.title}</h3>
                  <p className="text-[15px] text-[#6e6e73] mt-1">{p.subtitle}</p>
                </div>
              </div>

              {/* Open-Source First — tool badges */}
              {p.tools && (
                <div className="ml-0 md:ml-[4.75rem]">
                  {p.quote && (
                    <div className="mb-5 px-4 py-3 rounded-xl bg-[#f5f5f7] border-l-4 border-[#ff6d5a]">
                      <p className="text-[14px] text-[#1d1d1f] italic">&ldquo;{p.quote}&rdquo;</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {p.tools.map((t) => (
                      <div
                        key={t.name}
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#f5f5f7] border border-black/[0.04]"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[13px] font-bold"
                          style={{ background: t.color }}
                        >
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-[#1d1d1f]">{t.name}</p>
                          <div className="flex items-center gap-1 text-[12px] text-[#6e6e73]">
                            <Star size={11} className="fill-[#ff9500] text-[#ff9500]" />
                            {t.stars} GitHub Stars
                          </div>
                        </div>
                        <span className="ml-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
                          Open Source
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Data Stays Yours — data flow diagram */}
              {p.diagram && (
                <div className="ml-0 md:ml-[4.75rem]">
                  <div className="rounded-2xl bg-[#f5f5f7] p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                      <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm">
                        <Server size={28} className="text-[#5856d6]" />
                        <span className="text-[13px] font-semibold text-[#1d1d1f]">VPS ของลูกค้า</span>
                        <span className="text-[11px] text-[#6e6e73]">n8n / Flowise / Dify</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
                          DATA อยู่ที่นี่
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <ArrowRight size={20} className="text-[#2997ff] rotate-90 md:rotate-0" />
                        <span className="text-[10px] text-[#6e6e73]">API call only</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white border border-black/[0.04] shadow-sm">
                        <Globe size={28} className="text-[#6e6e73]" />
                        <span className="text-[13px] font-semibold text-[#1d1d1f]">AI Provider</span>
                        <span className="text-[11px] text-[#6e6e73]">OpenAI / Anthropic / Google</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ff9500]/10 text-[#ff9500]">
                          ไม่เก็บ data
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1 opacity-30">
                        <XCircle size={20} className="text-[#ff3b30]" />
                      </div>
                      <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white border border-dashed border-[#ff3b30]/30 opacity-40">
                        <Building2 size={28} className="text-[#ff3b30]" />
                        <span className="text-[13px] font-semibold text-[#1d1d1f]">Server ของเรา</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ff3b30]/10 text-[#ff3b30]">
                          ไม่มี data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Right Model — flowchart */}
              {p.flowchart && (
                <div className="ml-0 md:ml-[4.75rem]">
                  <div className="rounded-2xl bg-[#f5f5f7] p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          task: "ตอบคำถามง่ายๆ",
                          model: "Gemini Flash",
                          cost: "~฿0.01/query",
                          color: "#30d158",
                          badge: "ถูกที่สุด",
                        },
                        {
                          task: "สรุปเอกสาร / RAG",
                          model: "GPT-4.1 mini",
                          cost: "~฿0.10/query",
                          color: "#ff9500",
                          badge: "คุ้มค่า",
                        },
                        {
                          task: "วิเคราะห์ซับซ้อน",
                          model: "Claude Opus / GPT-4.1",
                          cost: "~฿1.00/query",
                          color: "#ff2d55",
                          badge: "ฉลาดที่สุด",
                        },
                      ].map((item) => (
                        <div
                          key={item.model}
                          className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-black/[0.04]"
                        >
                          <span className="text-[11px] font-medium text-[#6e6e73] bg-[#f5f5f7] px-3 py-1 rounded-full">
                            {item.task}
                          </span>
                          <ArrowRight size={14} className="text-[#2997ff] rotate-90" />
                          <div
                            className="w-full text-center py-3 rounded-xl text-white font-semibold text-[14px]"
                            style={{ background: item.color }}
                          >
                            {item.model}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-semibold text-[#1d1d1f]">
                              {item.cost}
                            </span>
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: item.color + "15", color: item.color }}
                            >
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Automate the Boring — before / after */}
              {p.beforeAfter && (
                <div className="ml-0 md:ml-[4.75rem]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#f5f5f7] p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Bot size={18} className="text-[#ff9500]" />
                        <span className="text-[13px] font-bold text-[#ff9500] uppercase">AI ทำ</span>
                      </div>
                      <ul className="space-y-2.5">
                        {[
                          "ตอบ FAQ ลูกค้า 24/7",
                          "คัดกรอง leads จาก LINE",
                          "สรุปอีเมล / เอกสาร",
                          "สร้าง report อัตโนมัติ",
                          "แจ้งเตือน follow-up",
                          "จัดหมวดหมู่ ticket",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#1d1d1f]">
                            <Zap size={14} className="text-[#ff9500] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#f5f5f7] p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Users size={18} className="text-[#2997ff]" />
                        <span className="text-[13px] font-bold text-[#2997ff] uppercase">คนทำ</span>
                      </div>
                      <ul className="space-y-2.5">
                        {[
                          "ตัดสินใจกลยุทธ์",
                          "ปิดการขาย / negotiation",
                          "ดูแลลูกค้า VIP",
                          "สร้างความสัมพันธ์",
                          "แก้ปัญหาซับซ้อน",
                          "สร้างสรรค์ไอเดียใหม่",
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#1d1d1f]">
                            <Heart size={14} className="text-[#2997ff] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Honest About Limitations — can/can't */}
              {p.canDo && p.cantDo && (
                <div className="ml-0 md:ml-[4.75rem]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#30d158]/[0.06] p-6 border border-[#30d158]/10">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 size={18} className="text-[#30d158]" />
                        <span className="text-[13px] font-bold text-[#30d158]">AI ทำได้ดี</span>
                      </div>
                      <ul className="space-y-2.5">
                        {p.canDo.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#1d1d1f]">
                            <CheckCircle2 size={14} className="text-[#30d158] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl bg-[#ff3b30]/[0.04] p-6 border border-[#ff3b30]/10">
                      <div className="flex items-center gap-2 mb-4">
                        <XCircle size={18} className="text-[#ff3b30]" />
                        <span className="text-[13px] font-bold text-[#ff3b30]">AI ยังทำไม่ได้</span>
                      </div>
                      <ul className="space-y-2.5">
                        {p.cantDo.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#1d1d1f]">
                            <XCircle size={14} className="text-[#ff3b30] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 2 — Methodology / Engineering Approach
   ══════════════════════════════════════════════ */
const phases = [
  {
    icon: Search,
    color: "#2997ff",
    phase: "Discovery",
    duration: "1-2 วัน",
    title: "เข้าใจธุรกิจ",
    tasks: [
      "สัมภาษณ์ทีมงาน เข้าใจ workflow ปัจจุบัน",
      "Map ขั้นตอนทั้งหมด ระบุจุดที่เสียเวลา",
      "ระบุ automation candidates (ROI สูงสุด)",
      "เก็บ requirements + constraints",
    ],
    mockup: "whiteboard",
  },
  {
    icon: Palette,
    color: "#5856d6",
    phase: "Design",
    duration: "1-2 วัน",
    title: "ออกแบบ Solution",
    tasks: [
      "เลือก tools + AI models ที่เหมาะสม",
      "ออกแบบ system architecture",
      "Estimate ค่าใช้จ่ายรายเดือน",
      "ทำ proposal ให้ลูกค้า approve",
    ],
    mockup: "architecture",
  },
  {
    icon: Hammer,
    color: "#ff9500",
    phase: "Build",
    duration: "3-7 วัน",
    title: "สร้างระบบ",
    tasks: [
      "Setup VPS + Docker environment",
      "Install & configure tools",
      "Build AI workflows + integrations",
      "Connect APIs (LINE, CRM, etc.)",
    ],
    mockup: "terminal",
  },
  {
    icon: FlaskConical,
    color: "#ff2d55",
    phase: "Test",
    duration: "2-3 วัน",
    title: "ทดสอบ",
    tasks: [
      "ทดสอบทุก workflow ตั้งแต่ต้นจนจบ",
      "ทดสอบ edge cases + error handling",
      "Load testing (ถ้าจำเป็น)",
      "UAT กับทีมงานลูกค้า",
    ],
    mockup: "checklist",
  },
  {
    icon: Rocket,
    color: "#30d158",
    phase: "Deploy & Train",
    duration: "1-2 วัน",
    title: "Go Live + อบรม",
    tasks: [
      "Go live on production",
      "Training ทีมงาน (video call / on-site)",
      "ส่งมอบ documentation + คู่มือ",
      "Setup monitoring + alerts",
    ],
    mockup: "training",
  },
];

function WhiteboardMockup() {
  return (
    <div className="rounded-xl bg-white border border-black/[0.06] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-[11px] text-[#6e6e73] ml-2">workflow-mapping.fig</span>
      </div>
      <div className="flex items-center justify-center gap-3 py-4 flex-wrap">
        {["ลูกค้าสั่งซื้อ", "ระบบรับ order", "แจ้ง warehouse", "จัดส่ง", "แจ้งลูกค้า"].map(
          (step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-lg bg-[#2997ff]/10 text-[12px] font-medium text-[#2997ff] border border-[#2997ff]/20">
                {step}
              </div>
              {i < 4 && <ArrowRight size={14} className="text-[#6e6e73]" />}
            </div>
          )
        )}
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-[#ff9500]" />
        <span className="text-[11px] text-[#ff9500] font-medium">pain point: แจ้งลูกค้าทำมือ ใช้เวลา 2 ชม./วัน</span>
      </div>
    </div>
  );
}

function ArchitectureMockup() {
  return (
    <div className="rounded-xl bg-white border border-black/[0.06] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-[11px] text-[#6e6e73] ml-2">architecture.draw</span>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="col-span-3 px-4 py-2 rounded-lg bg-[#2997ff]/10 border border-[#2997ff]/20">
          <span className="text-[11px] font-semibold text-[#2997ff]">LINE / Website / API</span>
        </div>
        <div className="px-3 py-2 rounded-lg bg-[#ff6d5a]/10 border border-[#ff6d5a]/20">
          <span className="text-[11px] font-semibold text-[#ff6d5a]">n8n</span>
        </div>
        <div className="px-3 py-2 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20">
          <span className="text-[11px] font-semibold text-[#3b82f6]">Flowise</span>
        </div>
        <div className="px-3 py-2 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20">
          <span className="text-[11px] font-semibold text-[#8b5cf6]">Dify</span>
        </div>
        <div className="col-span-3 px-4 py-2 rounded-lg bg-[#30d158]/10 border border-[#30d158]/20">
          <span className="text-[11px] font-semibold text-[#30d158]">VPS (Docker) — ข้อมูลอยู่ที่นี่</span>
        </div>
      </div>
    </div>
  );
}

function TerminalMockup() {
  return (
    <div className="rounded-xl bg-[#1d1d1f] p-5 shadow-sm font-mono">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="text-[11px] text-[#6e6e73] ml-2">terminal</span>
      </div>
      <div className="space-y-1.5 text-[12px]">
        <p className="text-[#30d158]">$ docker compose up -d</p>
        <p className="text-[#a1a1a6]">[+] Running 5/5</p>
        <p className="text-[#a1a1a6]">
          <span className="text-[#30d158]">✓</span> Container n8n{" "}
          <span className="text-[#30d158]">Started</span>
        </p>
        <p className="text-[#a1a1a6]">
          <span className="text-[#30d158]">✓</span> Container flowise{" "}
          <span className="text-[#30d158]">Started</span>
        </p>
        <p className="text-[#a1a1a6]">
          <span className="text-[#30d158]">✓</span> Container dify{" "}
          <span className="text-[#30d158]">Started</span>
        </p>
        <p className="text-[#a1a1a6]">
          <span className="text-[#30d158]">✓</span> Container postgres{" "}
          <span className="text-[#30d158]">Started</span>
        </p>
        <p className="text-[#a1a1a6]">
          <span className="text-[#30d158]">✓</span> Container redis{" "}
          <span className="text-[#30d158]">Started</span>
        </p>
        <p className="text-[#30d158] mt-2">$ docker ps</p>
        <p className="text-[#a1a1a6]">5 containers running — all healthy</p>
      </div>
    </div>
  );
}

function ChecklistMockup() {
  return (
    <div className="rounded-xl bg-white border border-black/[0.06] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <FlaskConical size={16} className="text-[#ff2d55]" />
        <span className="text-[13px] font-semibold text-[#1d1d1f]">Test Results</span>
      </div>
      <div className="space-y-2">
        {[
          "LINE webhook → n8n trigger",
          "AI chatbot response accuracy",
          "Error handling (invalid input)",
          "Concurrent user load (50 users)",
          "Backup & restore verification",
          "API fallback (provider down)",
        ].map((test) => (
          <div key={test} className="flex items-center gap-2.5">
            <CheckCircle2 size={16} className="text-[#30d158] shrink-0" />
            <span className="text-[13px] text-[#1d1d1f]">{test}</span>
            <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
              PASS
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrainingMockup() {
  return (
    <div className="rounded-xl bg-white border border-black/[0.06] p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Users size={16} className="text-[#30d158]" />
        <span className="text-[13px] font-semibold text-[#1d1d1f]">Handover Package</span>
      </div>
      <div className="space-y-2.5">
        {[
          { icon: FileText, label: "User Manual (PDF + Video)", status: "Delivered" },
          { icon: Terminal, label: "Admin Access & Credentials", status: "Delivered" },
          { icon: Users, label: "Team Training Session (2 hrs)", status: "Completed" },
          { icon: Activity, label: "Monitoring Dashboard Setup", status: "Active" },
          { icon: Shield, label: "Support SLA (30 days included)", status: "Active" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <item.icon size={14} className="text-[#2997ff] shrink-0" />
            <span className="text-[13px] text-[#1d1d1f]">{item.label}</span>
            <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockupComponents: Record<string, () => React.ReactNode> = {
  whiteboard: WhiteboardMockup,
  architecture: ArchitectureMockup,
  terminal: TerminalMockup,
  checklist: ChecklistMockup,
  training: TrainingMockup,
};

function MethodologyPhases() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Methodology"
          title="วิธีทำงาน"
          subtitle="กระบวนการที่ผ่านการพิสูจน์แล้ว ส่งมอบตรงเวลา ทุกครั้ง"
        />

        <div className="space-y-8">
          {phases.map((phase, i) => {
            const MockupComponent = mockupComponents[phase.mockup];
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="apple-card p-8 md:p-10"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left — info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: phase.color + "12" }}
                      >
                        <phase.icon size={24} style={{ color: phase.color }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-[#1d1d1f]">{phase.phase}</h3>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: phase.color + "15", color: phase.color }}
                          >
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-[14px] text-[#6e6e73]">{phase.title}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2.5 text-[14px] text-[#1d1d1f]/80">
                          <CheckCircle2 size={14} className="text-[#30d158] shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — mockup */}
                  <div className="lg:w-[380px] shrink-0">
                    {MockupComponent && <MockupComponent />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 apple-card p-8 text-center"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-2">
            Total Timeline
          </p>
          <p className="text-3xl md:text-4xl font-bold text-[#1d1d1f]">8-16 วันทำการ</p>
          <p className="text-[15px] text-[#6e6e73] mt-2">
            จาก Discovery ถึง Go Live — เร็วกว่า software house ทั่วไป 3-5 เท่า
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 3 — Security & Compliance
   ══════════════════════════════════════════════ */
function SecuritySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Security & Compliance"
          title="ความปลอดภัยและการปฏิบัติตามกฎหมาย"
          subtitle="เราให้ความสำคัญกับ data privacy และ security เป็นอันดับหนึ่ง"
        />

        {/* PDPA Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10 mb-8"
        >
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#5856d6]/10 shrink-0">
              <ShieldCheck size={28} className="text-[#5856d6]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f]">PDPA Compliance</h3>
              <p className="text-[15px] text-[#6e6e73] mt-1">
                พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล — เราจัดการให้ครบ
              </p>
            </div>
          </div>

          <div className="ml-0 md:ml-[4.75rem] grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Globe,
                title: "Data Processing",
                desc: "API ส่งข้อมูลไป process แล้วลบ — OpenAI/Anthropic/Google ไม่เก็บ data สำหรับ training",
                status: "Compliant",
              },
              {
                icon: Server,
                title: "Data Storage",
                desc: "ข้อมูลทั้งหมดอยู่บน VPS ของลูกค้า ไม่อยู่กับเรา ลูกค้า control เต็มที่",
                status: "Compliant",
              },
              {
                icon: FileText,
                title: "Consent Management",
                desc: "ถ้า chatbot เก็บข้อมูลลูกค้า ต้องมี consent form ก่อนเก็บทุกครั้ง",
                status: "Included",
              },
              {
                icon: Eye,
                title: "Right to Access/Delete",
                desc: "ลูกค้าสามารถขอดูหรือลบข้อมูลได้ตลอดเวลา เพราะข้อมูลอยู่บน VPS ของตัวเอง",
                status: "Built-in",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#f5f5f7] p-5 border border-black/[0.04]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <item.icon size={18} className="text-[#5856d6]" />
                  <span className="text-[14px] font-semibold text-[#1d1d1f]">{item.title}</span>
                  <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
                    {item.status}
                  </span>
                </div>
                <p className="text-[13px] text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* API Data Policies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10 mb-8"
        >
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#2997ff]/10 shrink-0">
              <Database size={28} className="text-[#2997ff]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f]">API Data Policies</h3>
              <p className="text-[15px] text-[#6e6e73] mt-1">
                แต่ละ provider จัดการกับ data ของคุณยังไง
              </p>
            </div>
          </div>

          <div className="ml-0 md:ml-[4.75rem]">
            <div className="rounded-2xl bg-[#f5f5f7] overflow-hidden">
              <div className="grid grid-cols-12 gap-0 text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider px-5 py-3 border-b border-black/[0.04]">
                <div className="col-span-3">Provider</div>
                <div className="col-span-3">ใช้ data train?</div>
                <div className="col-span-3">เก็บ data?</div>
                <div className="col-span-3">ความเสี่ยง</div>
              </div>
              {[
                {
                  name: "OpenAI",
                  train: "ไม่ใช้ (since 2024)",
                  store: "30 วัน แล้วลบ",
                  risk: "Low",
                  riskColor: "#30d158",
                },
                {
                  name: "Anthropic",
                  train: "ไม่ใช้ (by default)",
                  store: "30 วัน แล้วลบ",
                  risk: "Low",
                  riskColor: "#30d158",
                },
                {
                  name: "Google",
                  train: "ไม่ใช้ (Gemini API)",
                  store: "ไม่เก็บ",
                  risk: "Low",
                  riskColor: "#30d158",
                },
                {
                  name: "DeepSeek",
                  train: "ตรวจสอบ policy",
                  store: "อาจเก็บใน China",
                  risk: "Medium",
                  riskColor: "#ff9500",
                },
              ].map((provider) => (
                <div
                  key={provider.name}
                  className="grid grid-cols-12 gap-0 px-5 py-3.5 border-b border-black/[0.03] last:border-0 items-center"
                >
                  <div className="col-span-3 text-[14px] font-semibold text-[#1d1d1f]">
                    {provider.name}
                  </div>
                  <div className="col-span-3 text-[13px] text-[#6e6e73]">{provider.train}</div>
                  <div className="col-span-3 text-[13px] text-[#6e6e73]">{provider.store}</div>
                  <div className="col-span-3">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: provider.riskColor + "15",
                        color: provider.riskColor,
                      }}
                    >
                      {provider.risk}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 px-4 py-3 rounded-xl bg-[#ff9500]/[0.06] border border-[#ff9500]/10">
              <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-[#ff9500] shrink-0 mt-0.5" />
                <p className="text-[13px] text-[#1d1d1f]/80">
                  <strong>DeepSeek:</strong> ข้อมูลอาจถูกเก็บบน server ในจีน — แนะนำใช้เฉพาะงานที่ไม่มีข้อมูลอ่อนไหว หรือใช้ local deployment
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VPS Security */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10 mb-8"
        >
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#30d158]/10 shrink-0">
              <Lock size={28} className="text-[#30d158]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f]">VPS Security</h3>
              <p className="text-[15px] text-[#6e6e73] mt-1">
                สิ่งที่เราทำให้ทุก VPS — ไม่มีข้อยกเว้น
              </p>
            </div>
          </div>

          <div className="ml-0 md:ml-[4.75rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: KeyRound,
                  title: "SSH Key Only",
                  desc: "ปิด password authentication — ใช้ SSH key เท่านั้น",
                },
                {
                  icon: Shield,
                  title: "UFW Firewall",
                  desc: "เปิดเฉพาะ port ที่ใช้งาน ปิดทุกอย่างที่ไม่จำเป็น",
                },
                {
                  icon: ShieldAlert,
                  title: "Fail2ban",
                  desc: "บล็อก IP ที่พยายาม brute force อัตโนมัติ",
                },
                {
                  icon: RefreshCcw,
                  title: "Auto Security Updates",
                  desc: "อัปเดต security patches อัตโนมัติ ไม่ต้องรอ",
                },
                {
                  icon: HardDrive,
                  title: "Encrypted Backups",
                  desc: "Backup ข้อมูลแบบเข้ารหัส กู้คืนได้ทุกเมื่อ",
                },
                {
                  icon: Globe,
                  title: "Tailscale Private Access",
                  desc: "เข้าถึง admin panel ผ่าน VPN เท่านั้น ไม่เปิดสู่ internet",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#f5f5f7] border border-black/[0.04]"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#30d158]/10 shrink-0">
                    <item.icon size={16} className="text-[#30d158]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#1d1d1f]">{item.title}</p>
                    <p className="text-[12px] text-[#6e6e73] mt-0.5">{item.desc}</p>
                  </div>
                  <Lock size={12} className="text-[#30d158] shrink-0 mt-1 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* When to Use Local AI */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10"
        >
          <div className="flex items-start gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#ff9500]/10 shrink-0">
              <AlertTriangle size={28} className="text-[#ff9500]" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f]">
                เมื่อไหร่ควรใช้ Local AI แทน
              </h3>
              <p className="text-[15px] text-[#6e6e73] mt-1">
                บางกรณีที่ข้อมูลไม่ควรออกนอกองค์กรเลย
              </p>
            </div>
          </div>

          <div className="ml-0 md:ml-[4.75rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: Stethoscope,
                  title: "ข้อมูลผู้ป่วย (HIPAA-level)",
                  desc: "ประวัติการรักษา ผลตรวจ ข้อมูลสุขภาพ",
                },
                {
                  icon: CircleDollarSign,
                  title: "ข้อมูลทางการเงินสูงมาก",
                  desc: "ข้อมูลการลงทุน ความลับทางการเงิน M&A",
                },
                {
                  icon: Eye,
                  title: "ความลับทางการค้า (Trade Secrets)",
                  desc: "สูตรการผลิต IP ที่ยังไม่จดสิทธิบัตร",
                },
                {
                  icon: Landmark,
                  title: "หน่วยงานรัฐ",
                  desc: "ห้ามส่งข้อมูลออกนอกประเทศตามกฎหมาย",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-5 rounded-xl bg-[#ff9500]/[0.05] border border-[#ff9500]/10"
                >
                  <item.icon size={20} className="text-[#ff9500] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#1d1d1f]">{item.title}</p>
                    <p className="text-[12px] text-[#6e6e73] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 rounded-xl bg-[#2997ff]/[0.06] border border-[#2997ff]/10">
              <div className="flex items-center gap-3">
                <ArrowRight size={18} className="text-[#2997ff] shrink-0" />
                <p className="text-[14px] text-[#1d1d1f]">
                  กรณีเหล่านี้ เราแนะนำ <strong className="text-[#2997ff]">LocalAI Thailand</strong> — ติดตั้ง AI model บน server ของลูกค้า ข้อมูลไม่ออกไปไหนเลย
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 4 — Risk Management
   ══════════════════════════════════════════════ */
const risks = [
  {
    severity: "Medium",
    sevColor: "#ff9500",
    icon: Brain,
    title: "AI ตอบผิด (Hallucination)",
    problem: "AI อาจสร้างข้อมูลที่ดูน่าเชื่อแต่ไม่จริง",
    mitigation: [
      "ใช้ RAG ดึงข้อมูลจาก knowledge base จริง",
      "Fact-check layer ก่อนส่งถึงลูกค้า",
      "Human review สำหรับ critical tasks",
      "แสดง source/reference ทุกคำตอบ",
    ],
  },
  {
    severity: "Medium",
    sevColor: "#ff9500",
    icon: CloudOff,
    title: "API ล่ม",
    problem: "Provider (OpenAI/Anthropic/Google) อาจ downtime",
    mitigation: [
      "Fallback model strategy: ถ้า OpenAI ล่ม → ใช้ Gemini",
      "Multi-provider setup ตั้งแต่ต้น",
      "Queue system รอ retry อัตโนมัติ",
      "แจ้งเตือนทีมทันทีที่ตรวจพบ",
    ],
  },
  {
    severity: "Low",
    sevColor: "#30d158",
    icon: Server,
    title: "VPS ล่ม",
    problem: "Server อาจ down จาก hardware failure หรือ provider issue",
    mitigation: [
      "Automated daily backup + snapshot",
      "Restore ได้ภายใน 1 ชั่วโมง",
      "Monitoring 24/7 + alert",
      "Disaster recovery plan พร้อมใช้",
    ],
  },
  {
    severity: "Medium",
    sevColor: "#ff9500",
    icon: CircleDollarSign,
    title: "ค่า API พุ่ง",
    problem: "ถ้ามี spike ในการใช้งาน ค่า API อาจสูงกว่าที่คาด",
    mitigation: [
      "Monitor usage แบบ real-time",
      "Alert เมื่อถึง threshold ที่กำหนด",
      "Auto-switch ไป model ที่ถูกกว่า",
      "ตั้ง monthly budget cap",
    ],
  },
  {
    severity: "High",
    sevColor: "#ff3b30",
    icon: Siren,
    title: "ลูกค้าถูก hack",
    problem: "Server หรือ credentials ถูก compromise",
    mitigation: [
      "Security best practices ตั้งแต่ต้น (SSH key, firewall, Fail2ban)",
      "Incident response plan เตรียมไว้",
      "Rotate API keys ทันที",
      "Restore from clean backup",
    ],
  },
];

function RiskSection() {
  return (
    <section className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Risk Management"
          title="จัดการความเสี่ยง"
          subtitle="เตรียมรับมือทุกสถานการณ์ — ไม่ใช่แค่หวังว่าจะไม่เกิด"
        />

        <motion.div
          
          
          
          viewport={{ once: true }}
          className="space-y-6"
        >
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              
              
              className="apple-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: risk.sevColor + "12" }}
                  >
                    <risk.icon size={24} style={{ color: risk.sevColor }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[#1d1d1f]">{risk.title}</h3>
                      <span
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase"
                        style={{
                          background: risk.sevColor + "15",
                          color: risk.sevColor,
                        }}
                      >
                        {risk.severity} Risk
                      </span>
                    </div>
                    <p className="text-[14px] text-[#6e6e73] mb-4">{risk.problem}</p>
                    <div className="space-y-2">
                      <p className="text-[12px] font-semibold text-[#2997ff] uppercase tracking-wider">
                        Mitigation Strategy
                      </p>
                      {risk.mitigation.map((m) => (
                        <div key={m} className="flex items-start gap-2">
                          <Shield size={13} className="text-[#30d158] shrink-0 mt-0.5" />
                          <span className="text-[13px] text-[#1d1d1f]/80">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SECTION 5 — Open Source Commitment
   ══════════════════════════════════════════════ */
function OpenSourceSection() {
  const commitments = [
    {
      icon: BadgeCheck,
      title: "ลูกค้าเป็นเจ้าของทุกอย่าง",
      desc: "Workflows, data, configurations — ทุกอย่างเป็นของลูกค้า 100% ไม่ใช่ของเรา",
    },
    {
      icon: RefreshCcw,
      title: "ไม่มี Vendor Lock-in",
      desc: "ย้าย provider ได้ทุกเมื่อ เปลี่ยนทีมดูแลได้ ไม่ต้องพึ่งเราตลอด",
    },
    {
      icon: Users,
      title: "Community Support",
      desc: "Tools ทุกตัวมี community ขนาดใหญ่ช่วยพัฒนาตลอด อัปเดตทุกสัปดาห์",
    },
    {
      icon: Eye,
      title: "Transparent",
      desc: "Source code เปิดดูได้ทั้งหมด ไม่มีอะไรซ่อน ไม่มี black box",
    },
  ];

  const tools = [
    {
      name: "n8n",
      stars: "50K+",
      desc: "Workflow Automation",
      color: "#ff6d5a",
      url: "github.com/n8n-io/n8n",
    },
    {
      name: "Flowise",
      stars: "30K+",
      desc: "Chatbot & RAG Builder",
      color: "#3b82f6",
      url: "github.com/FlowiseAI/Flowise",
    },
    {
      name: "Dify",
      stars: "90K+",
      desc: "AI App Platform",
      color: "#8b5cf6",
      url: "github.com/langgenius/dify",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          badge="Open Source Commitment"
          title="ทำไมเราเลือก Open Source"
          subtitle="เพราะเราเชื่อว่าลูกค้าควรเป็นเจ้าของ solution ของตัวเอง"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {commitments.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="apple-card p-7"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#2997ff]/10 shrink-0">
                  <c.icon size={22} className="text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#1d1d1f] mb-1">{c.title}</h3>
                  <p className="text-[14px] text-[#6e6e73] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stars Visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="apple-card p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <p className="text-[13px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-2">
              Backed by Global Community
            </p>
            <p className="text-lg text-[#1d1d1f] font-medium">
              รวม GitHub Stars มากกว่า <strong className="text-[#ff9500]">170,000+</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-[#f5f5f7] border border-black/[0.04]"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                  style={{ background: tool.color }}
                >
                  {tool.name[0]}
                </div>
                <h4 className="text-lg font-bold text-[#1d1d1f]">{tool.name}</h4>
                <p className="text-[13px] text-[#6e6e73] mb-3">{tool.desc}</p>
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  <Star size={16} className="fill-[#ff9500] text-[#ff9500]" />
                  <span className="text-xl font-bold text-[#1d1d1f]">{tool.stars}</span>
                </div>

                {/* Star bar visual */}
                <div className="h-2 rounded-full bg-black/[0.04] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tool.name === "Dify" ? "100%" : tool.name === "n8n" ? "56%" : "33%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: tool.color }}
                  />
                </div>

                <div className="flex items-center justify-center gap-1.5 mt-3 text-[12px] text-[#6e6e73]">
                  <ExternalLink size={11} />
                  <span>{tool.url}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════ */
export default function MethodologySection() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-4"
          >
            Our Methodology
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6"
          >
            หลักการทำงานของเรา
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed"
          >
            เราเชื่อว่าความโปร่งใสสร้างความไว้วางใจ — นี่คือทุกอย่างที่คุณต้องรู้
            เกี่ยวกับวิธีคิด วิธีทำงาน และวิธีดูแลข้อมูลของคุณ
          </motion.p>
        </div>
      </section>

      <PrinciplesSection />
      <MethodologyPhases />
      <SecuritySection />
      <RiskSection />
      <OpenSourceSection />
    </>
  );
}
