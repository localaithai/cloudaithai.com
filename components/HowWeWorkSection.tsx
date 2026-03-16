"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Pencil,
  Server,
  Workflow,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  ChevronRight,
  Check,
  X,
  Shield,
  Clock,
  Zap,
  Users,
  Phone,
  Headphones,
  Wrench,
  Star,
  BarChart3,
  Activity,
  CircleDollarSign,
  Terminal,
  GitBranch,
  Bot,
  MessageSquare,
  CheckCircle2,
  Monitor,
} from "lucide-react";
import { useState } from "react";

/* ─── Brand icon with fallback ─── */
const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function BrandIcon({
  slug,
  fallback,
  size = 20,
}: {
  slug: string;
  fallback: string;
  size?: number;
}) {
  const [err, setErr] = useState(false);
  const file = SLUG_TO_FILE[slug] || slug;
  if (err) return <span style={{ fontSize: size * 0.9 }}>{fallback}</span>;
  return (
    <img
      src={`/brands/${file}.svg`}
      alt={slug}
      width={size}
      height={size}
      onError={() => setErr(true)}
      className="opacity-90"
      loading="lazy"
    />
  );
}

/* ─── Shared fade-up props ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ═══════════════════════════════════════════════
   SECTION 1 — เราทำอะไรให้คุณ
   ═══════════════════════════════════════════════ */
const serviceSteps = [
  { icon: <MessageCircle size={20} />, label: "ปรึกษา", color: "#30d158" },
  { icon: <Pencil size={20} />, label: "ออกแบบ", color: "#2997ff" },
  { icon: <Server size={20} />, label: "ติดตั้ง", color: "#5856d6" },
  { icon: <GraduationCap size={20} />, label: "สอนใช้", color: "#ff9500" },
  { icon: <HeartHandshake size={20} />, label: "ดูแล", color: "#ff375f" },
];

const timelineWeeks = [
  { week: "สัปดาห์ 1", tasks: "ปรึกษา + ออกแบบ Solution", pct: 25 },
  { week: "สัปดาห์ 2", tasks: "ตั้งค่า VPS + ติดตั้ง Tools", pct: 50 },
  { week: "สัปดาห์ 3", tasks: "สร้าง Workflow + ทดสอบ", pct: 75 },
  { week: "สัปดาห์ 4", tasks: "Training + Go Live", pct: 100 },
];

function WhatWeDoSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Our Service
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            เราทำอะไรให้คุณ.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[660px] mx-auto leading-[1.47]">
            เราเป็นบริษัท <span className="text-[#1d1d1f] font-semibold">บริการ</span> ไม่ใช่แค่ขาย software —
            ดูแลคุณตั้งแต่ปรึกษาจนถึงหลังติดตั้ง
          </p>
        </motion.div>

        {/* Horizontal service flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="apple-card p-8 md:p-10 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {serviceSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:gap-0">
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                    style={{ background: step.color }}
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-[13px] font-semibold text-[#1d1d1f]">
                    {step.label}
                  </span>
                </div>
                {i < serviceSteps.length - 1 && (
                  <ChevronRight
                    size={18}
                    className="text-[#d2d2d7] hidden sm:block mx-3 shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-week timeline bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="apple-card p-8 md:p-10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Clock size={16} className="text-[#6e6e73]" />
            <p className="text-[13px] font-semibold text-[#6e6e73] uppercase tracking-widest">
              Timeline — เสร็จใน 4 สัปดาห์
            </p>
          </div>
          <div className="space-y-5">
            {timelineWeeks.map((w, i) => (
              <div key={w.week}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-semibold text-[#1d1d1f]">
                    {w.week}
                  </span>
                  <span className="text-[12px] text-[#6e6e73]">{w.tasks}</span>
                </div>
                <div className="h-2.5 bg-[#f5f5f7] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#2997ff] to-[#5856d6]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${w.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — ขั้นตอนทำงาน (6 steps)
   ═══════════════════════════════════════════════ */

/* --- Step mockups --- */
function LineChatMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-[#06c755] flex items-center justify-center">
          <MessageCircle size={12} className="text-white" />
        </div>
        <span className="text-[12px] font-semibold text-[#1d1d1f]">LINE Chat</span>
        <span className="text-[10px] text-[#6e6e73] ml-auto">ปรึกษาฟรี</span>
      </div>
      <div className="flex justify-end">
        <div className="bg-[#06c755] text-white text-[11px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[200px]">
          สนใจระบบ AI ครับ ธุรกิจร้านอาหาร 3 สาขา
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white text-[#1d1d1f] text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[220px] border border-black/[0.04]">
          สวัสดีครับ! แนะนำ Starter Package เหมาะมากครับ ตอบแชทได้ทั้ง LINE + FB
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-[#06c755] text-white text-[11px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[160px]">
          ราคาเท่าไหร่ครับ?
        </div>
      </div>
      <div className="flex justify-start">
        <div className="bg-white text-[#1d1d1f] text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[240px] border border-black/[0.04]">
          ฿19,900 ครั้งเดียวครับ ค่า API ~฿500/เดือน ส่ง proposal ให้ดูไหมครับ?
        </div>
      </div>
    </div>
  );
}

function ArchitectureMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5">
      <p className="text-[10px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
        Solution Architecture
      </p>
      <div className="flex flex-col items-center gap-3">
        {/* Top row */}
        <div className="flex items-center gap-3">
          <div className="bg-[#06c755]/10 text-[11px] font-medium text-[#06c755] px-3 py-2 rounded-lg border border-[#06c755]/20">
            LINE
          </div>
          <div className="bg-[#2997ff]/10 text-[11px] font-medium text-[#2997ff] px-3 py-2 rounded-lg border border-[#2997ff]/20">
            Facebook
          </div>
          <div className="bg-[#ff9500]/10 text-[11px] font-medium text-[#ff9500] px-3 py-2 rounded-lg border border-[#ff9500]/20">
            Website
          </div>
        </div>
        {/* Arrow down */}
        <div className="w-px h-4 bg-[#d2d2d7]" />
        {/* Middle: n8n */}
        <div className="bg-white rounded-xl px-5 py-3 border border-black/[0.06] shadow-sm text-center">
          <p className="text-[12px] font-bold text-[#1d1d1f]">n8n Workflow</p>
          <p className="text-[10px] text-[#6e6e73]">Automation Hub</p>
        </div>
        {/* Arrow down */}
        <div className="w-px h-4 bg-[#d2d2d7]" />
        {/* Bottom row */}
        <div className="flex items-center gap-3">
          <div className="bg-[#5856d6]/10 text-[11px] font-medium text-[#5856d6] px-3 py-2 rounded-lg border border-[#5856d6]/20">
            Flowise RAG
          </div>
          <div className="bg-[#af52de]/10 text-[11px] font-medium text-[#af52de] px-3 py-2 rounded-lg border border-[#af52de]/20">
            GPT-5 / Claude
          </div>
        </div>
        {/* Arrow down */}
        <div className="w-px h-4 bg-[#d2d2d7]" />
        <div className="bg-[#30d158]/10 text-[11px] font-medium text-[#30d158] px-3 py-2 rounded-lg border border-[#30d158]/20">
          Google Sheets / CRM
        </div>
      </div>
    </div>
  );
}

function TerminalMockup() {
  return (
    <div className="bg-[#1d1d1f] rounded-2xl p-5 font-mono">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="text-[10px] text-white/40 ml-2">terminal — vps-setup</span>
      </div>
      <div className="space-y-1.5 text-[11px]">
        <p className="text-[#30d158]">$ ssh root@vps.cloudaithai.com</p>
        <p className="text-white/60">Connected to Ubuntu 24.04</p>
        <p className="text-[#30d158]">$ docker compose up -d</p>
        <p className="text-white/60">[+] Running 5/5</p>
        <p className="text-white/40"> ✓ n8n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Started</p>
        <p className="text-white/40"> ✓ flowise &nbsp;&nbsp;&nbsp;Started</p>
        <p className="text-white/40"> ✓ postgres &nbsp;&nbsp;Started</p>
        <p className="text-white/40"> ✓ redis &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Started</p>
        <p className="text-white/40"> ✓ caddy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Started</p>
        <p className="text-[#2997ff]">$ curl https://ai.yoursite.com/health</p>
        <p className="text-[#30d158]">{"{ \"status\": \"ok\" }"}</p>
      </div>
    </div>
  );
}

function WorkflowNodesMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5">
      <p className="text-[10px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
        n8n Workflow
      </p>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          { label: "Webhook", icon: "🔗", color: "#2997ff" },
          { label: "AI Agent", icon: "🤖", color: "#5856d6" },
          { label: "RAG Query", icon: "📄", color: "#af52de" },
          { label: "IF/ELSE", icon: "🔀", color: "#ff9500" },
          { label: "LINE Reply", icon: "💬", color: "#06c755" },
          { label: "Log to Sheet", icon: "📊", color: "#30d158" },
        ].map((node, i, arr) => (
          <div key={node.label} className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border shadow-sm"
              style={{ borderColor: node.color + "30" }}
            >
              <span className="text-[12px]">{node.icon}</span>
              <span className="text-[10px] font-medium text-[#1d1d1f]">
                {node.label}
              </span>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight size={12} className="text-[#d2d2d7] shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChecklistMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5">
      <p className="text-[10px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
        QA Checklist & Training
      </p>
      <div className="space-y-2.5">
        {[
          { label: "Chatbot ตอบถูกต้อง 95%+", done: true },
          { label: "Workflow trigger ทำงานปกติ", done: true },
          { label: "LINE + Facebook connected", done: true },
          { label: "RAG accuracy ผ่าน threshold", done: true },
          { label: "Training ทีมลูกค้า (2 ชม.)", done: true },
          { label: "ส่งมอบ documentation", done: true },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 border border-black/[0.04]"
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                item.done
                  ? "bg-[#30d158] text-white"
                  : "bg-[#f5f5f7] border border-[#d2d2d7]"
              }`}
            >
              {item.done && <Check size={11} />}
            </div>
            <span
              className={`text-[12px] ${
                item.done
                  ? "text-[#1d1d1f] font-medium"
                  : "text-[#6e6e73]"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-[#f5f5f7] rounded-2xl p-5">
      <p className="text-[10px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
        Live Monitoring Dashboard
      </p>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "System", status: "Online", color: "#30d158" },
          { label: "n8n", status: "Running", color: "#30d158" },
          { label: "Flowise", status: "Running", color: "#30d158" },
          { label: "API", status: "Connected", color: "#30d158" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-xl px-3 py-2.5 border border-black/[0.04] flex items-center justify-between"
          >
            <span className="text-[11px] font-medium text-[#1d1d1f]">
              {item.label}
            </span>
            <span className="flex items-center gap-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: item.color }}
              />
              <span className="text-[10px]" style={{ color: item.color }}>
                {item.status}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-3 border border-black/[0.04]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-medium text-[#1d1d1f]">
            Messages Today
          </span>
          <span className="text-[13px] font-bold text-[#2997ff]">247</span>
        </div>
        <div className="flex items-end gap-[3px] h-8">
          {[30, 45, 60, 40, 70, 85, 55, 90, 65, 75, 50, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[#2997ff]/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const workSteps = [
  {
    step: 1,
    title: "ปรึกษาฟรี",
    desc: "แชทมาทาง LINE หรือโทรมา — บอกเราว่าธุรกิจคุณทำอะไร ปัญหาที่เจอคืออะไร เราจะวิเคราะห์และเสนอ solution ให้ฟรี ไม่มี commitment",
    color: "#30d158",
    mockup: <LineChatMockup />,
  },
  {
    step: 2,
    title: "ออกแบบ Solution",
    desc: "ออกแบบ architecture ที่เหมาะกับธุรกิจคุณ — เลือก tools, เลือก AI model, ออกแบบ workflow ทั้งหมด ส่ง proposal ให้ review",
    color: "#2997ff",
    mockup: <ArchitectureMockup />,
  },
  {
    step: 3,
    title: "ตั้งค่า VPS",
    desc: "ติดตั้ง server, Docker containers, SSL certificate, domain — ทุกอย่างพร้อมใช้ ปลอดภัย และ scale ได้",
    color: "#5856d6",
    mockup: <TerminalMockup />,
  },
  {
    step: 4,
    title: "สร้าง Workflow",
    desc: "สร้าง automation workflow ตามที่ออกแบบไว้ — ต่อ API, สร้าง RAG pipeline, ทำ chatbot, connect ทุก channel",
    color: "#ff9500",
    mockup: <WorkflowNodesMockup />,
  },
  {
    step: 5,
    title: "ทดสอบ & Training",
    desc: "ทดสอบทุก workflow อย่างละเอียด ตรวจสอบ accuracy ของ AI และสอนทีมของคุณใช้ระบบทั้งหมด พร้อมส่ง documentation",
    color: "#af52de",
    mockup: <ChecklistMockup />,
  },
  {
    step: 6,
    title: "Go Live",
    desc: "เปิดใช้งานจริง — monitoring dashboard พร้อม แจ้งเตือนทันทีถ้ามีปัญหา ดูแลหลังติดตั้งฟรี 30 วัน",
    color: "#ff375f",
    mockup: <DashboardMockup />,
  },
];

function WorkStepsSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            ขั้นตอนทำงาน.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            6 ขั้นตอนจากปรึกษาจนถึง Go Live — โปร่งใส ทุกขั้นตอน
          </p>
        </motion.div>

        <div className="space-y-8">
          {workSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="apple-card p-0 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Text side */}
                <div
                  className={`p-8 md:p-10 flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[15px] font-bold"
                      style={{ background: step.color }}
                    >
                      {step.step}
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.65]">
                    {step.desc}
                  </p>
                </div>
                {/* Mockup side */}
                <div
                  className={`p-6 md:p-8 bg-[#fbfbfd] flex items-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="w-full">{step.mockup}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — เครื่องมือที่เราใช้
   ═══════════════════════════════════════════════ */
const tools = [
  {
    name: "n8n",
    slug: "n8n",
    fallback: "⚡",
    why: "Workflow automation ที่ยืดหยุ่นที่สุด — ต่อ 400+ apps, visual editor, self-hosted ได้",
    features: ["Visual Workflow Builder", "400+ Integrations", "Webhook & Cron"],
    color: "#ff6d5a",
    mockupNodes: ["Trigger", "AI Agent", "IF/ELSE", "HTTP", "Reply"],
  },
  {
    name: "Flowise",
    slug: "flowise",
    fallback: "🌊",
    why: "สร้าง RAG pipeline + AI chatbot แบบ drag-and-drop ไม่ต้องเขียน code",
    features: ["Drag & Drop RAG", "Vector Store", "Chat Memory"],
    color: "#2997ff",
    mockupNodes: ["Document", "Splitter", "Embedding", "Vector DB", "Chat"],
  },
  {
    name: "OpenClaw",
    slug: "openclaw",
    fallback: "🦞",
    why: "AI Agent framework สำหรับงานซับซ้อน — multi-step reasoning, tool calling",
    features: ["Multi-Agent", "Tool Calling", "Complex Reasoning"],
    color: "#ff375f",
    mockupNodes: ["Agent", "Tool", "Memory", "Output"],
  },
  {
    name: "Dify",
    slug: "dify",
    fallback: "🔮",
    why: "All-in-one LLM platform — ทำ chatbot, workflow, knowledge base ในที่เดียว",
    features: ["LLM Orchestration", "Knowledge Base", "Prompt IDE"],
    color: "#5856d6",
    mockupNodes: ["Prompt", "LLM", "Knowledge", "API"],
  },
  {
    name: "ActivePieces",
    slug: "activepieces",
    fallback: "🧩",
    why: "Zapier alternative ที่ self-hosted ได้ — เหมาะกับ automation ง่ายๆ ใช้เลยได้",
    features: ["Simple Automation", "100+ Templates", "No-code"],
    color: "#ff9500",
    mockupNodes: ["Trigger", "Action", "Filter", "Send"],
  },
];

function ToolsSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Our Tools
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            เครื่องมือที่เราใช้.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[660px] mx-auto leading-[1.47]">
            Open-source tools ที่เราคัดมาแล้ว — ไม่มีค่า license ตลอดไป
          </p>
        </motion.div>

        <div className="space-y-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="apple-card p-0 overflow-hidden relative"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${tool.color}, ${tool.color}88)` }}
              />
              <div className="grid md:grid-cols-5 gap-0">
                {/* Info (3 cols) */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/[0.04] flex items-center justify-center">
                      <BrandIcon slug={tool.slug} fallback={tool.fallback} size={24} />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#1d1d1f]">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
                        Open-source
                      </span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-5">
                    <span className="text-[#1d1d1f] font-medium">ทำไมเราเลือก: </span>
                    {tool.why}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#6e6e73]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Mini UI mockup (2 cols) */}
                <div className="md:col-span-2 p-6 md:p-8 bg-[#fbfbfd] flex items-center">
                  <div className="w-full">
                    <div className="bg-[#f5f5f7] rounded-2xl p-4">
                      <p className="text-[9px] text-[#6e6e73] uppercase tracking-widest font-medium mb-3 text-center">
                        {tool.name} Workflow
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-1.5">
                        {tool.mockupNodes.map((node, ni, arr) => (
                          <div key={node} className="flex items-center gap-1.5">
                            <div
                              className="text-[9px] font-medium px-2.5 py-1.5 rounded-lg bg-white border shadow-sm"
                              style={{ borderColor: tool.color + "30", color: tool.color }}
                            >
                              {node}
                            </div>
                            {ni < arr.length - 1 && (
                              <ArrowRight size={9} className="text-[#d2d2d7] shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — VPS vs Managed
   ═══════════════════════════════════════════════ */
function VpsVsManagedSection() {
  const vpsPoints = [
    { text: "ควบคุม 100% — เข้าถึง server เต็มที่", included: true },
    { text: "ราคาถูก ฿300-1,500/เดือน", included: true },
    { text: "Customize ได้ทุกอย่าง", included: true },
    { text: "ต้องดูแล server เอง (หรือจ้างเราดูแล)", included: true },
    { text: "ต้องมีความรู้ DevOps เบื้องต้น", included: false },
    { text: "Auto-scaling (ต้อง setup เอง)", included: false },
  ];

  const managedPoints = [
    { text: "ไม่ต้องดูแล server เลย", included: true },
    { text: "Auto-scaling + Auto-backup", included: true },
    { text: "99.9% uptime SLA", included: true },
    { text: "เราดูแลให้ทั้งหมด 24/7", included: true },
    { text: "ราคาสูงกว่า ฿2,500-8,000/เดือน", included: false },
    { text: "Customize ได้น้อยกว่า", included: false },
  ];

  return (
    <section className="apple-section section-gray">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Hosting Options
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            VPS vs Managed.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[660px] mx-auto leading-[1.47]">
            เลือก hosting ที่เหมาะกับธุรกิจคุณ — ทั้งสองแบบเราติดตั้งให้
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* VPS Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="apple-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2997ff] to-[#5856d6]" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#2997ff]/10 flex items-center justify-center">
                <Server size={20} className="text-[#2997ff]" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f]">VPS (Self-hosted)</h3>
                <p className="text-[12px] text-[#6e6e73]">ควบคุมเต็มที่ ราคาประหยัด</p>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-[32px] font-bold text-[#2997ff]">฿300</span>
                <span className="text-[15px] text-[#6e6e73]">- 1,500/เดือน</span>
              </div>
              <p className="text-[12px] text-[#6e6e73] mt-1">ค่า VPS อย่างเดียว (Hetzner, Vultr, DigitalOcean)</p>
            </div>
            <div className="space-y-3 mb-6">
              {vpsPoints.map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      p.included
                        ? "bg-[#30d158]/10 text-[#30d158]"
                        : "bg-[#ff375f]/10 text-[#ff375f]"
                    }`}
                  >
                    {p.included ? <Check size={11} /> : <X size={11} />}
                  </div>
                  <span className="text-[13px] text-[#1d1d1f] pt-0.5">{p.text}</span>
                </div>
              ))}
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#2997ff]/5 border border-[#2997ff]/10">
              <p className="text-[12px] text-[#2997ff] font-medium">
                เหมาะกับ: SME ที่มีทีม IT หรือต้องการ cost ต่ำที่สุด
              </p>
            </div>
          </motion.div>

          {/* Managed Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="apple-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff9500] to-[#ff375f]" />
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#ff9500]/10 text-[#ff9500]">
                แนะนำ
              </span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#ff9500]/10 flex items-center justify-center">
                <Shield size={20} className="text-[#ff9500]" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Managed Cloud</h3>
                <p className="text-[12px] text-[#6e6e73]">เราดูแลให้ทุกอย่าง</p>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-[32px] font-bold text-[#ff9500]">฿2,500</span>
                <span className="text-[15px] text-[#6e6e73]">- 8,000/เดือน</span>
              </div>
              <p className="text-[12px] text-[#6e6e73] mt-1">รวม hosting + monitoring + maintenance</p>
            </div>
            <div className="space-y-3 mb-6">
              {managedPoints.map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      p.included
                        ? "bg-[#30d158]/10 text-[#30d158]"
                        : "bg-[#ff375f]/10 text-[#ff375f]"
                    }`}
                  >
                    {p.included ? <Check size={11} /> : <X size={11} />}
                  </div>
                  <span className="text-[13px] text-[#1d1d1f] pt-0.5">{p.text}</span>
                </div>
              ))}
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#ff9500]/5 border border-[#ff9500]/10">
              <p className="text-[12px] text-[#ff9500] font-medium">
                เหมาะกับ: ธุรกิจที่ไม่มีทีม IT ต้องการ zero-maintenance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 5 — หลังติดตั้งเสร็จ
   ═══════════════════════════════════════════════ */
const supportTiers = [
  {
    days: 30,
    title: "ฟรี 30 วัน",
    desc: "ทุก package รวมดูแลฟรี 30 วัน — แก้บัค, ปรับ workflow, ตอบคำถาม",
    color: "#30d158",
    features: [
      "แก้บัคและปัญหาทั้งหมด",
      "ปรับ workflow ตาม feedback",
      "ตอบคำถามทาง LINE ภายใน 4 ชม.",
      "อัปเดต AI model ถ้ามีรุ่นใหม่",
    ],
    price: "ฟรี",
    priceNote: "รวมในค่า setup",
  },
  {
    days: 60,
    title: "ขยาย 60 วัน",
    desc: "ต้องการดูแลต่อ? เพิ่ม 30 วัน สำหรับธุรกิจที่ต้องการปรับระบบเพิ่ม",
    color: "#2997ff",
    features: [
      "ทุกอย่างใน 30 วัน +",
      "ปรับ workflow ได้ 3 ครั้ง",
      "เพิ่ม integration ใหม่ 1 ตัว",
      "Monthly performance report",
    ],
    price: "฿3,900",
    priceNote: "ต่อ 30 วัน",
  },
  {
    days: 90,
    title: "ขยาย 90 วัน",
    desc: "ดูแลยาว 3 เดือน — เหมาะกับธุรกิจที่ต้องการ fine-tune ระบบอย่างต่อเนื่อง",
    color: "#5856d6",
    features: [
      "ทุกอย่างใน 60 วัน +",
      "ปรับ workflow ไม่จำกัด",
      "Priority support (ตอบใน 2 ชม.)",
      "Quarterly strategy review",
    ],
    price: "฿9,900",
    priceNote: "ต่อ 90 วัน (ประหยัด 15%)",
  },
];

const maintenancePlans = [
  {
    name: "Basic",
    price: "฿1,900",
    period: "/เดือน",
    features: [
      "Server monitoring 24/7",
      "Auto-backup ทุกวัน",
      "แก้ปัญหาภายใน 24 ชม.",
      "อัปเดต security patch",
    ],
    color: "#6e6e73",
  },
  {
    name: "Pro",
    price: "฿4,900",
    period: "/เดือน",
    features: [
      "ทุกอย่างใน Basic +",
      "ปรับ workflow 3 ครั้ง/เดือน",
      "แก้ปัญหาภายใน 4 ชม.",
      "Monthly performance report",
      "เพิ่ม feature ใหม่ได้",
    ],
    color: "#2997ff",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "฿9,900",
    period: "/เดือน",
    features: [
      "ทุกอย่างใน Pro +",
      "Dedicated support team",
      "แก้ปัญหาภายใน 1 ชม.",
      "ปรับ workflow ไม่จำกัด",
      "On-site visit 1 ครั้ง/เดือน",
      "SLA guarantee 99.9%",
    ],
    color: "#5856d6",
  },
];

function AfterInstallSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            After Installation
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            หลังติดตั้งเสร็จ.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[660px] mx-auto leading-[1.47]">
            เราไม่ทิ้งคุณหลังติดตั้ง — ดูแลต่อเนื่อง ให้ระบบทำงานราบรื่น
          </p>
        </motion.div>

        {/* Support tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-[22px] font-semibold text-[#1d1d1f] text-center mb-8">
            Support หลังติดตั้ง
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {supportTiers.map((tier, i) => (
              <motion.div
                key={tier.days}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="apple-card p-6 md:p-8 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: tier.color }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-[14px] font-bold mb-4"
                  style={{ background: tier.color }}
                >
                  {tier.days}
                </div>
                <h4 className="text-[17px] font-semibold text-[#1d1d1f] mb-1">
                  {tier.title}
                </h4>
                <p className="text-[13px] text-[#6e6e73] leading-[1.5] mb-4">
                  {tier.desc}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span
                    className="text-[28px] font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-[12px] text-[#6e6e73]">{tier.priceNote}</span>
                </div>
                <div className="space-y-2.5">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check
                        size={13}
                        className="shrink-0 mt-0.5"
                        style={{ color: tier.color }}
                      />
                      <span className="text-[13px] text-[#1d1d1f]">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Maintenance plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-[22px] font-semibold text-[#1d1d1f] text-center mb-3">
            แผนดูแลรายเดือน
          </h3>
          <p className="text-[15px] text-[#6e6e73] text-center mb-8 max-w-[500px] mx-auto">
            หลังหมด support ฟรี — เลือกแผนดูแลต่อเนื่องตามความต้องการ
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {maintenancePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`apple-card p-6 md:p-8 relative overflow-hidden ${
                  plan.popular ? "ring-2 ring-[#2997ff]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#2997ff]/10 text-[#2997ff]">
                      แนะนำ
                    </span>
                  </div>
                )}
                <h4
                  className="text-[17px] font-semibold mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-0.5 mb-5">
                  <span className="text-[32px] font-bold text-[#1d1d1f]">
                    {plan.price}
                  </span>
                  <span className="text-[14px] text-[#6e6e73]">{plan.period}</span>
                </div>
                <div className="space-y-2.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Check size={13} className="shrink-0 mt-0.5 text-[#30d158]" />
                      <span className="text-[13px] text-[#1d1d1f]">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 6 — ทำไมเลือกเรา
   ═══════════════════════════════════════════════ */
const whyReasons = [
  {
    icon: <CircleDollarSign size={22} />,
    title: "จ่ายครั้งเดียว ไม่ผูกสัญญา",
    desc: "Setup fee ครั้งเดียว ระบบเป็นของคุณ 100% ไม่มี subscription lock-in ไม่มีค่า license รายเดือน",
    color: "#30d158",
  },
  {
    icon: <Zap size={22} />,
    title: "เสร็จใน 1-4 สัปดาห์",
    desc: "ไม่ต้องรอ 3-6 เดือน เราใช้ template สำเร็จรูปปรับแต่งตามธุรกิจ — ใช้งานได้เร็ว",
    color: "#2997ff",
  },
  {
    icon: <Headphones size={22} />,
    title: "ดูแลหลังติดตั้ง",
    desc: "ฟรี 30 วัน + แผนดูแลรายเดือน ไม่ทิ้งหลังขาย มีปัญหาแชทมาได้ตลอด",
    color: "#5856d6",
  },
  {
    icon: <Users size={22} />,
    title: "ทีมคนไทย พูดภาษาเดียวกัน",
    desc: "ไม่ต้อง support เป็นภาษาอังกฤษ สื่อสารง่าย เข้าใจ context ธุรกิจไทย",
    color: "#ff9500",
  },
];

function WhyUsSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Why Us
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            ทำไมเลือกเรา.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            4 เหตุผลที่ธุรกิจไทยไว้วางใจเรา
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {whyReasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="apple-card p-8 md:p-10 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${reason.color}, ${reason.color}88)` }}
              />
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: reason.color + "12", color: reason.color }}
              >
                {reason.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-3">
                {reason.title}
              </h3>
              <p className="text-[15px] text-[#6e6e73] leading-[1.65]">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[17px] text-[#6e6e73] mb-6">
            พร้อมเริ่มต้นหรือยัง? ปรึกษาฟรี ไม่มี commitment
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="#contact" className="apple-btn apple-btn-blue">
              ปรึกษาฟรี
            </a>
            <a href="#pricing" className="apple-link">
              ดูแพ็คเกจทั้งหมด
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT — HowWeWorkSection
   ═══════════════════════════════════════════════ */
export default function HowWeWorkSection() {
  return (
    <>
      <WhatWeDoSection />
      <WorkStepsSection />
      <ToolsSection />
      <VpsVsManagedSection />
      <AfterInstallSection />
      <WhyUsSection />
    </>
  );
}
