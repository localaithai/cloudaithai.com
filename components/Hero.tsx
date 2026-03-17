"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function BrandIcon({ slug, fallback, size = 20 }: { slug: string; fallback: string; size?: number }) {
  const [err, setErr] = useState(false);
  const file = SLUG_TO_FILE[slug] || slug;
  if (err) return <span style={{ fontSize: size * 0.9 }}>{fallback}</span>;
  return <img src={`/brands/${file}.svg`} alt={slug} width={size} height={size} onError={() => setErr(true)} className="opacity-90" loading="lazy" />;
}

/* ─── Bold, visible model pills with real presence ─── */
const models = [
  { name: "GPT-5", color: "#10a37f", bg: "#10a37f15", slug: "openai", fallback: "🤖" },
  { name: "Claude 4.6", color: "#c96442", bg: "#c9644215", slug: "anthropic", fallback: "🧠" },
  { name: "Gemini 3.1", color: "#4285f4", bg: "#4285f415", slug: "googlegemini", fallback: "🔵" },
  { name: "DeepSeek V3", color: "#5b6abf", bg: "#5b6abf15", slug: "deepseek", fallback: "🔮" },
  { name: "Grok 3", color: "#1d9bf0", bg: "#1d9bf015", slug: "x", fallback: "𝕏" },
  { name: "o3", color: "#10a37f", bg: "#10a37f15", slug: "openai", fallback: "🤖" },
];

const tools = [
  { name: "n8n", slug: "n8n", fallback: "⚡" },
  { name: "Flowise", slug: "flowise", fallback: "🌊" },
  { name: "OpenClaw", slug: "openclaw", fallback: "🦞" },
  { name: "Dify", slug: "dify", fallback: "🔮" },
  { name: "ActivePieces", slug: "activepieces", fallback: "🧩" },
];

export default function Hero() {
  return (
    <section className="relative bg-[#fbfbfd] overflow-hidden">
      {/* Background gradient — bolder, actually visible */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(41,151,255,0.12) 0%, transparent 70%)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,86,214,0.10) 0%, transparent 70%)" }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(175,82,222,0.08) 0%, transparent 70%)" }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 pt-28 sm:pt-36 pb-20 sm:pb-28 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#2997ff] text-[15px] sm:text-[17px] font-medium mb-5"
          >
            AI Automation สำหรับธุรกิจไทย
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[42px] sm:text-[64px] md:text-[80px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f] mb-2"
          >
            ให้ AI ทำงานแทน
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-[28px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.15] tracking-[-0.02em] gradient-text mb-6"
          >
            คุณทำสิ่งที่สำคัญ
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-[16px] sm:text-[19px] text-[#6e6e73] max-w-[540px] mx-auto mb-8 leading-[1.55]"
          >
            ติดตั้งระบบ AI Automation ใช้ Frontier Model อย่าง GPT-5, Claude, Gemini
            สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="max-w-[560px] mx-auto mb-10 py-5 border-t border-b border-black/[0.06]"
          >
            <p className="text-[15px] sm:text-[17px] text-[#1d1d1f] font-medium italic leading-[1.6] text-center">
              "ไม่มี solution สำเร็จรูปที่เหมาะกับทุกคน
              <br className="hidden sm:block" />
              มีแต่ระบบที่สร้างขึ้นให้พอดีกับธุรกิจคุณ"
            </p>
            <p className="text-[12px] text-[#6e6e73] text-center mt-2 tracking-wider uppercase">Our Philosophy</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14"
          >
            <a href="#pricing" className="apple-btn apple-btn-blue">ดูแพ็คเกจ</a>
            <a href="/#contact" className="apple-btn apple-btn-outline" style={{ border: "1px solid #2997ff", color: "#2997ff", background: "transparent" }}>Request a Demo</a>
            <a href="#solutions" className="apple-link">ดูว่า AI ทำอะไรได้บ้าง</a>
          </motion.div>

          {/* ─── Model pills — bold, clearly visible ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-6"
          >
            <p className="text-[11px] sm:text-[12px] text-[#6e6e73] uppercase tracking-[0.15em] font-medium mb-4">Frontier Models</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {models.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full border cursor-default"
                  style={{
                    background: m.bg,
                    borderColor: m.color + "20",
                    color: m.color,
                  }}
                >
                  <span className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[14px] font-medium">
                    <BrandIcon slug={m.slug} fallback={m.fallback} size={14} />
                    {m.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Tool icons row ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mb-12"
          >
            <p className="text-[11px] sm:text-[12px] text-[#6e6e73] uppercase tracking-[0.15em] font-medium mb-4">Automation Tools</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex flex-col items-center gap-1 cursor-default"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-md shadow-black/[0.04] border border-black/[0.04] flex items-center justify-center">
                    <BrandIcon slug={t.slug} fallback={t.fallback} size={24} />
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#6e6e73] font-medium">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─── Stats ─── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex justify-center gap-8 sm:gap-16 md:gap-24"
          >
            {[
              { value: "6+", label: "Frontier Models" },
              { value: "55+", label: "Integrations" },
              { value: "฿19,900", label: "เริ่มต้น" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + i * 0.1 }}
              >
                <p className="text-[18px] sm:text-[28px] font-semibold text-[#1d1d1f] tracking-tight">{stat.value}</p>
                <p className="text-[10px] sm:text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
