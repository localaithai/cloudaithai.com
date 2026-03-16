"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Shield,
  Brain,
  Wrench,
  Server,
  ArrowRight,
  Check,
  X,
  Cloud,
  HardDrive,
  Zap,
  Lock,
  Wifi,
  WifiOff,
  CreditCard,
  CalendarCheck,
} from "lucide-react";
import { useState } from "react";

/* ─── Brand icon: local SVGs with emoji fallback ─── */
const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function BrandIcon({ slug, fallback, size = 20 }: { slug: string; fallback: string; size?: number }) {
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

/* ─── Section fade-in wrapper ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ═══════════════════════════════════════════════
   SECTION 1 — เราคือใคร
   ═══════════════════════════════════════════════ */
function WhoWeAre() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            เราคือใคร.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[660px] mx-auto leading-[1.47]">
            เราเป็นส่วนหนึ่งของ LocalAI Thailand ecosystem — ทีมที่เชื่อว่า
            AI ควรเข้าถึงได้ง่ายสำหรับทุกธุรกิจ ไม่ใช่แค่บริษัทใหญ่
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission card */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="apple-card p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-5">
              <Zap size={22} className="text-[#2997ff]" />
            </div>
            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">
              Cloud AI Automation
            </h3>
            <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-5">
              เราออกแบบและติดตั้งระบบ AI Automation สำหรับธุรกิจไทยโดยเฉพาะ
              ใช้ Frontier Model อย่าง GPT-5, Claude 4.6, Gemini 3.1 Pro
              ร่วมกับ open-source tools — ติดตั้งครั้งเดียว ใช้ได้ตลอด
            </p>
            <div className="flex flex-wrap gap-2">
              {["AI Workflow", "RAG Pipeline", "AI Chatbot", "Document AI", "Voice AI"].map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#6e6e73]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Ecosystem card */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="apple-card p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#5856d6]/10 flex items-center justify-center mb-5">
              <Server size={22} className="text-[#5856d6]" />
            </div>
            <h3 className="text-[22px] font-semibold text-[#1d1d1f] mb-3">
              LocalAI Thailand Ecosystem
            </h3>
            <p className="text-[15px] text-[#6e6e73] leading-[1.6] mb-5">
              CloudAI Thailand เป็นส่วนหนึ่งของ ecosystem ที่ครอบคลุม
              ทั้ง Cloud AI (เริ่มเร็ว, ใช้ Frontier Model) และ Local AI
              (100% privacy, ทำงาน offline) — คุณเลือกได้ตามความเหมาะสม
            </p>
            <div className="flex gap-3">
              <a
                href="https://cloudaithai.com"
                className="text-[13px] font-medium px-4 py-2 rounded-full bg-[#2997ff] text-white"
              >
                Cloud AI
              </a>
              <a
                href="https://localaithai.com"
                target="_blank"
                className="text-[13px] font-medium px-4 py-2 rounded-full bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] transition-colors"
              >
                Local AI
              </a>
            </div>
          </motion.div>
        </div>

        {/* Contact strip */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="apple-card p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-1">
                พร้อมให้คำปรึกษาฟรี
              </h3>
              <p className="text-[14px] text-[#6e6e73]">
                บอกเราว่าธุรกิจคุณทำอะไร — เราจะออกแบบ solution ให้ฟรี ไม่มี commitment
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: <Mail size={15} />,
                  label: "chavin@pace-design.co.th",
                  href: "mailto:chavin@pace-design.co.th",
                },
                {
                  icon: <Phone size={15} />,
                  label: "082-704-7606",
                  href: "tel:0827047606",
                },
                {
                  icon: <MessageCircle size={15} />,
                  label: "LINE @542mgysj",
                  href: "https://line.me/R/ti/p/@542mgysj",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-2 text-[13px] font-medium text-[#2997ff] hover:text-[#0071e3] transition-colors"
                >
                  {c.icon}
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — ทำไมเลือกเรา (6 reasons)
   ═══════════════════════════════════════════════ */
const reasons = [
  {
    title: "ปรึกษาฟรี ไม่มี commitment",
    desc: "แชทมาถามได้เลย — เราจะวิเคราะห์ธุรกิจคุณและเสนอ solution ให้ฟรี ไม่ต้องจ่ายสักบาทจนกว่าจะพร้อม",
    color: "#30d158",
    visual: "line-chat",
  },
  {
    title: "Open-source tools = ไม่มีค่า license",
    desc: "n8n, Flowise, OpenClaw, Dify, ActivePieces — ทุก tool เป็น open-source ไม่มีค่า license รายเดือน จ่ายแค่ค่า hosting ตามจริง",
    color: "#2997ff",
    visual: "tool-logos",
  },
  {
    title: "ติดตั้งเสร็จ 1-2 สัปดาห์",
    desc: "ไม่ต้องรอ 3-6 เดือนเหมือนโปรเจค IT ทั่วไป — เราใช้ workflow สำเร็จรูปปรับแต่งตามธุรกิจคุณ พร้อมใช้ภายใน 1-2 สัปดาห์",
    color: "#ff9500",
    visual: "timeline",
  },
  {
    title: "Setup ครั้งเดียว ไม่ผูกสัญญา",
    desc: "จ่ายค่า setup ครั้งเดียว ฿19,900-89,900 หลังจากนั้นระบบเป็นของคุณ 100% ไม่มีสัญญารายปี ไม่มี lock-in",
    color: "#5856d6",
    visual: "pricing-compare",
  },
  {
    title: "ใช้ Frontier Model ฉลาดที่สุด",
    desc: "เข้าถึง GPT-5, Claude Opus 4.6, Gemini 3.1 Pro, DeepSeek V3, Grok 3, o3 — AI ที่ฉลาดที่สุดในโลก ไม่ใช่ model รุ่นเก่า",
    color: "#af52de",
    visual: "model-badges",
  },
  {
    title: "มี LocalAI ถ้าต้องการ privacy",
    desc: "ข้อมูลละเอียดอ่อน? เราติดตั้ง AI บนเครื่องของคุณเอง ข้อมูลไม่ออกออฟฟิศ ทำงาน offline 100% ผ่าน localaithai.com",
    color: "#ff375f",
    visual: "local-cta",
  },
];

/* ─── Visual mockups for each reason ─── */
function ReasonVisual({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "line-chat":
      return (
        <div className="bg-[#f5f5f7] rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#06c755] flex items-center justify-center">
              <MessageCircle size={14} className="text-white" />
            </div>
            <span className="text-[13px] font-semibold text-[#1d1d1f]">LINE Chat</span>
          </div>
          {/* Customer message */}
          <div className="flex justify-end">
            <div className="bg-[#06c755] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[200px]">
              สวัสดีครับ สนใจระบบ AI ตอบแชทลูกค้า อยากสอบถามราคา
            </div>
          </div>
          {/* Our reply */}
          <div className="flex justify-start">
            <div className="bg-white text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[220px] border border-black/[0.04]">
              สวัสดีครับ ยินดีครับ! ธุรกิจพี่ทำเกี่ยวกับอะไรครับ? จะได้แนะนำ solution ที่เหมาะที่สุด
            </div>
          </div>
          {/* Customer reply */}
          <div className="flex justify-end">
            <div className="bg-[#06c755] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[180px]">
              ร้านอาหาร 3 สาขาครับ ลูกค้าถามเยอะมาก
            </div>
          </div>
          {/* Our reply */}
          <div className="flex justify-start">
            <div className="bg-white text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[240px] border border-black/[0.04]">
              แนะนำ Starter ฿19,900 ครับ ตอบแชทได้ทั้ง LINE + FB ใช้ Gemini Flash ค่า API แค่ ~฿500/เดือน
            </div>
          </div>
          <p className="text-[10px] text-[#6e6e73] text-center pt-1">
            ปรึกษาฟรี — ไม่มีค่าใช้จ่ายใดๆ จนกว่าจะตกลง
          </p>
        </div>
      );

    case "tool-logos":
      return (
        <div className="bg-[#f5f5f7] rounded-2xl p-5">
          <p className="text-[11px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
            Open-Source Tools
          </p>
          <div className="grid grid-cols-5 gap-3">
            {[
              { name: "n8n", slug: "n8n", fallback: "⚡", license: "Fair-code" },
              { name: "Flowise", slug: "flowise", fallback: "🌊", license: "Apache 2.0" },
              { name: "OpenClaw", slug: "openclaw", fallback: "🦞", license: "Open-source" },
              { name: "Dify", slug: "dify", fallback: "🔮", license: "Apache 2.0" },
              { name: "ActivePieces", slug: "activepieces", fallback: "🧩", license: "MIT" },
            ].map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-1.5">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-black/[0.04] flex items-center justify-center">
                  <BrandIcon slug={t.slug} fallback={t.fallback} size={22} />
                </div>
                <span className="text-[10px] font-medium text-[#1d1d1f]">{t.name}</span>
                <span className="text-[9px] text-[#6e6e73]">{t.license}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#30d158] font-medium">
            <Check size={12} />
            ค่า license = ฿0 ตลอดไป
          </div>
        </div>
      );

    case "timeline":
      return (
        <div className="bg-[#f5f5f7] rounded-2xl p-5">
          <p className="text-[11px] text-[#6e6e73] uppercase tracking-widest font-medium mb-5 text-center">
            Timeline
          </p>
          <div className="space-y-4">
            {[
              { day: "วันที่ 1-2", label: "วิเคราะห์ธุรกิจ + ออกแบบ workflow", pct: 15 },
              { day: "วันที่ 3-5", label: "ติดตั้ง tools + ต่อ API", pct: 45 },
              { day: "วันที่ 6-9", label: "สร้าง workflow + RAG + chatbot", pct: 80 },
              { day: "วันที่ 10-14", label: "ทดสอบ + training + Go Live", pct: 100 },
            ].map((step, i) => (
              <div key={step.day}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[12px] font-semibold text-[#1d1d1f]">{step.day}</span>
                  <span className="text-[11px] text-[#6e6e73]">{step.label}</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}cc)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${step.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-[20px] font-semibold text-[#1d1d1f]">1-2 สัปดาห์</span>
            <p className="text-[11px] text-[#6e6e73]">เทียบกับ 3-6 เดือนของโปรเจค IT ทั่วไป</p>
          </div>
        </div>
      );

    case "pricing-compare":
      return (
        <div className="bg-[#f5f5f7] rounded-2xl p-5">
          <p className="text-[11px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
            Cost Comparison (1 ปี)
          </p>
          <div className="space-y-3">
            {/* Us */}
            <div className="bg-white rounded-xl p-4 border border-[#5856d6]/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-semibold text-[#1d1d1f]">CloudAI Thailand</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#30d158]/10 text-[#30d158]">
                  ประหยัด
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[24px] font-bold text-[#5856d6]">฿19,900</span>
                <span className="text-[12px] text-[#6e6e73]">setup ครั้งเดียว</span>
              </div>
              <p className="text-[11px] text-[#6e6e73] mt-1">+ ฿700-2,500/เดือน (hosting + API)</p>
              <p className="text-[11px] font-medium text-[#30d158] mt-1">
                รวม 1 ปี: ฿28,300 - 49,900
              </p>
            </div>
            {/* SaaS competitor */}
            <div className="bg-white rounded-xl p-4 border border-black/[0.04] opacity-70">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[13px] font-semibold text-[#1d1d1f]">SaaS ทั่วไป</span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#ff375f]/10 text-[#ff375f]">
                  ผูกสัญญา
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[24px] font-bold text-[#6e6e73]">฿3,000-15,000</span>
                <span className="text-[12px] text-[#6e6e73]">/เดือน</span>
              </div>
              <p className="text-[11px] text-[#6e6e73] mt-1">สัญญา 1-3 ปี, จำกัด user/feature</p>
              <p className="text-[11px] font-medium text-[#ff375f] mt-1">
                รวม 1 ปี: ฿36,000 - 180,000
              </p>
            </div>
          </div>
        </div>
      );

    case "model-badges":
      return (
        <div className="bg-[#f5f5f7] rounded-2xl p-5">
          <p className="text-[11px] text-[#6e6e73] uppercase tracking-widest font-medium mb-4 text-center">
            Frontier Models
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "GPT-5", provider: "OpenAI", color: "#10a37f", slug: "openai", fallback: "🤖", badge: "Flagship" },
              { name: "Claude 4.6", provider: "Anthropic", color: "#c96442", slug: "anthropic", fallback: "🧠", badge: "Most Capable" },
              { name: "Gemini 3.1", provider: "Google", color: "#4285f4", slug: "googlegemini", fallback: "🔵", badge: "#1 Benchmark" },
              { name: "DeepSeek V3", provider: "DeepSeek", color: "#5b6abf", slug: "deepseek", fallback: "🔮", badge: "Budget King" },
              { name: "Grok 3", provider: "xAI", color: "#1d9bf0", slug: "x", fallback: "𝕏", badge: "Real-time" },
              { name: "o3", provider: "OpenAI", color: "#10a37f", slug: "openai", fallback: "🤖", badge: "Reasoning" },
            ].map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-xl p-3 border border-black/[0.04] flex items-center gap-2.5"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: m.color + "10" }}
                >
                  <BrandIcon slug={m.slug} fallback={m.fallback} size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-[#1d1d1f] truncate">{m.name}</p>
                  <span
                    className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                    style={{ background: m.color + "12", color: m.color }}
                  >
                    {m.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-[#6e6e73] text-center mt-3">
            เราเลือก model ที่เหมาะกับงานแต่ละประเภท — ไม่ใช่ใช้ตัวเดียวทุกงาน
          </p>
        </div>
      );

    case "local-cta":
      return (
        <div className="bg-gradient-to-br from-[#1d1d1f] to-[#2d2d30] rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <Lock size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[14px] font-semibold">LocalAI Thailand</p>
              <p className="text-[11px] text-white/60">localaithai.com</p>
            </div>
          </div>
          <p className="text-[13px] text-white/70 leading-[1.6] mb-4">
            สำหรับธุรกิจที่ข้อมูลต้องไม่ออกออฟฟิศ — โรงพยาบาล, สำนักงานกฎหมาย,
            สถาบันการเงิน — เราติดตั้ง AI บน hardware ของคุณเอง
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["100% Privacy", "Offline", "No API Cost", "GPU Server"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://localaithai.com"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2997ff] hover:text-[#5ac8fa] transition-colors"
          >
            ดู LocalAI Thailand
            <ArrowRight size={13} />
          </a>
        </div>
      );

    default:
      return null;
  }
}

function WhyChooseUs() {
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
            6 เหตุผลที่ธุรกิจไทยเลือกใช้บริการเรา
          </p>
        </motion.div>

        <div className="space-y-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="apple-card p-0 overflow-hidden"
            >
              <div
                className={`grid md:grid-cols-2 gap-0 ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Text side */}
                <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[15px] font-bold"
                      style={{ background: reason.color }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1d1d1f]">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-[#6e6e73] leading-[1.65]">
                    {reason.desc}
                  </p>
                </div>
                {/* Visual side */}
                <div className={`p-6 md:p-8 bg-[#fbfbfd] flex items-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-full">
                    <ReasonVisual type={reason.visual} color={reason.color} />
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
   SECTION 3 — Cloud vs Local
   ═══════════════════════════════════════════════ */
function CloudVsLocal() {
  const cloudPoints = [
    { icon: <Cloud size={16} />, text: "ไม่ต้องซื้อ hardware เริ่มได้ทันที" },
    { icon: <Brain size={16} />, text: "ใช้ Frontier Model ฉลาดที่สุดในโลก" },
    { icon: <Zap size={16} />, text: "ติดตั้งเสร็จ 1-2 สัปดาห์" },
    { icon: <CreditCard size={16} />, text: "Setup fee ครั้งเดียว ฿19,900-89,900" },
    { icon: <Wifi size={16} />, text: "อัปเดต model ใหม่ได้ตลอด" },
    { icon: <CalendarCheck size={16} />, text: "55+ integrations พร้อมใช้" },
  ];

  const localPoints = [
    { icon: <Lock size={16} />, text: "100% Privacy — ข้อมูลไม่ออกออฟฟิศ" },
    { icon: <HardDrive size={16} />, text: "ทำงานบน hardware ของคุณเอง" },
    { icon: <WifiOff size={16} />, text: "ทำงาน offline ได้" },
    { icon: <Shield size={16} />, text: "ไม่มีค่า API รายเดือน" },
    { icon: <Server size={16} />, text: "เหมาะ regulated industries" },
    { icon: <Wrench size={16} />, text: "Customize ได้ 100%" },
  ];

  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Cloud vs Local
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            เลือกแบบที่ใช่.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            ทั้ง Cloud AI และ Local AI มีจุดเด่นต่างกัน — เลือกตามความเหมาะสมของธุรกิจคุณ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Cloud column */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="apple-card p-8 md:p-10 relative overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2997ff] to-[#5856d6]" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#2997ff]/10 flex items-center justify-center">
                <Cloud size={20} className="text-[#2997ff]" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#1d1d1f]">Cloud AI</h3>
                <p className="text-[12px] text-[#6e6e73]">cloudaithai.com</p>
              </div>
            </div>
            <p className="text-[14px] text-[#6e6e73] mb-6 leading-[1.6]">
              เหมาะกับธุรกิจที่ต้องการเริ่มเร็ว ใช้ AI ที่ฉลาดที่สุด
              โดยไม่ต้องลงทุน hardware
            </p>
            <div className="space-y-3 mb-8">
              {cloudPoints.map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#2997ff]/8 flex items-center justify-center shrink-0 text-[#2997ff]">
                    {p.icon}
                  </div>
                  <span className="text-[14px] text-[#1d1d1f] pt-0.5">{p.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] font-medium text-[#6e6e73] mb-3 uppercase tracking-wider">
              เหมาะกับ
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["SME", "Startup", "ร้านค้า", "ออฟฟิศ", "E-commerce", "Creator"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#2997ff]/8 text-[#2997ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-[#2997ff] text-white text-[14px] font-medium hover:bg-[#0077ed] transition-colors"
            >
              ดูแพ็คเกจ Cloud AI
              <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Local column */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="apple-card-dark p-8 md:p-10 relative overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff375f] to-[#af52de]" />
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <HardDrive size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#f5f5f7]">Local AI</h3>
                <p className="text-[12px] text-[#a1a1a6]">localaithai.com</p>
              </div>
            </div>
            <p className="text-[14px] text-[#a1a1a6] mb-6 leading-[1.6]">
              เหมาะกับธุรกิจที่ต้องการ privacy สูงสุด
              ข้อมูลอยู่ในออฟฟิศ ไม่ส่งออกเลย
            </p>
            <div className="space-y-3 mb-8">
              {localPoints.map((p) => (
                <div key={p.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center shrink-0 text-[#a1a1a6]">
                    {p.icon}
                  </div>
                  <span className="text-[14px] text-[#f5f5f7] pt-0.5">{p.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] font-medium text-[#a1a1a6] mb-3 uppercase tracking-wider">
              เหมาะกับ
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["โรงพยาบาล", "กฎหมาย", "การเงิน", "ราชการ", "ข้อมูลลับ", "Compliance"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/8 text-[#a1a1a6]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://localaithai.com"
              target="_blank"
              className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-[14px] font-medium hover:bg-white/20 transition-colors border border-white/10"
            >
              ดู LocalAI Thailand
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Quick comparison table */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-8 apple-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-black/[0.04]">
                  <th className="text-left px-6 py-4 text-[#6e6e73] font-medium">เปรียบเทียบ</th>
                  <th className="text-center px-6 py-4 text-[#2997ff] font-semibold">Cloud AI</th>
                  <th className="text-center px-6 py-4 text-[#1d1d1f] font-semibold">Local AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Hardware ที่ต้องใช้", cloud: "ไม่ต้อง", local: "GPU Server" },
                  { label: "AI Model", cloud: "Frontier Model", local: "Open-source Model" },
                  { label: "ความฉลาด", cloud: "สูงสุด", local: "ดีมาก" },
                  { label: "Privacy", cloud: "ดี (API encrypted)", local: "สูงสุด (100% offline)" },
                  { label: "ค่าใช้จ่ายรายเดือน", cloud: "฿700-15,000", local: "฿0 (ค่าไฟ)" },
                  { label: "เวลาติดตั้ง", cloud: "1-2 สัปดาห์", local: "2-4 สัปดาห์" },
                  { label: "ทำงาน Offline", cloud: false, local: true },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-black/[0.04] last:border-0">
                    <td className="px-6 py-3.5 text-[#1d1d1f] font-medium">{row.label}</td>
                    <td className="px-6 py-3.5 text-center text-[#6e6e73]">
                      {typeof row.cloud === "boolean" ? (
                        row.cloud ? (
                          <Check size={16} className="text-[#30d158] mx-auto" />
                        ) : (
                          <X size={16} className="text-[#d2d2d7] mx-auto" />
                        )
                      ) : (
                        row.cloud
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center text-[#6e6e73]">
                      {typeof row.local === "boolean" ? (
                        row.local ? (
                          <Check size={16} className="text-[#30d158] mx-auto" />
                        ) : (
                          <X size={16} className="text-[#d2d2d7] mx-auto" />
                        )
                      ) : (
                        row.local
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — ตัวเลขที่เราภูมิใจ
   ═══════════════════════════════════════════════ */
const stats = [
  {
    value: "6+",
    label: "Frontier Models",
    desc: "GPT-5, Claude 4.6, Gemini 3.1, DeepSeek V3, Grok 3, o3",
    color: "#2997ff",
  },
  {
    value: "55+",
    label: "Integrations",
    desc: "LINE, Facebook, WhatsApp, Gmail, Google Sheets, Notion, Slack...",
    color: "#5856d6",
  },
  {
    value: "7",
    label: "Industry Solutions",
    desc: "ร้านอาหาร, อสังหา, E-commerce, Creator, กฎหมาย, สุขภาพ, Home AI",
    color: "#af52de",
  },
  {
    value: "5",
    label: "Open-source Tools",
    desc: "n8n, Flowise, OpenClaw, Dify, ActivePieces",
    color: "#ff9500",
  },
];

function ProudNumbers() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            ตัวเลขที่เราภูมิใจ.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            เราสร้าง ecosystem ที่ครอบคลุมทุกความต้องการด้าน AI สำหรับธุรกิจไทย
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="apple-card p-8 text-center relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${stat.color}, ${stat.color}88)`,
                }}
              />
              <motion.p
                className="text-[48px] sm:text-[56px] font-bold tracking-[-0.04em] mb-2"
                style={{ color: stat.color }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-[15px] font-semibold text-[#1d1d1f] mb-2">
                {stat.label}
              </p>
              <p className="text-[12px] text-[#6e6e73] leading-[1.5]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[17px] text-[#6e6e73] mb-6">
            พร้อมให้ AI ทำงานแทนหรือยัง?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href="#contact" className="apple-btn apple-btn-blue">
              ปรึกษาฟรี
            </a>
            <a href="/" className="apple-link">
              กลับหน้าแรก
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT — AboutSection
   ═══════════════════════════════════════════════ */
export default function AboutSection() {
  return (
    <>
      <WhoWeAre />
      <WhyChooseUs />
      <CloudVsLocal />
      <ProudNumbers />
    </>
  );
}
