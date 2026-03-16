"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function ModelIcon({ slug, fallback, size = 18 }: { slug: string; fallback: string; size?: number }) {
  const [err, setErr] = useState(false);
  const file = SLUG_TO_FILE[slug] || slug;
  if (err) return <span style={{ fontSize: size }}>{fallback}</span>;
  return <img src={`/brands/${file}.svg`} alt={slug} width={size} height={size} onError={() => setErr(true)} loading="lazy" />;
}

const models = [
  { name: "GPT-5", provider: "OpenAI", color: "#10a37f", slug: "openai", fallback: "🤖", input: "$1.25", output: "$10", context: "128K", speed: "~80 tok/s", badge: "Flagship", desc: "ครบเครื่องทุกด้าน คุ้มค่าที่สุดสำหรับงานทั่วไป", monthly: "~฿800-2,500" },
  { name: "Claude Opus 4.6", provider: "Anthropic", color: "#c96442", slug: "anthropic", fallback: "🧠", input: "$5.00", output: "$25", context: "1M", speed: "~40 tok/s", badge: "Most Capable", desc: "ฉลาดที่สุด 1M context อ่านเอกสาร 700+ หน้า", monthly: "~฿2,000-8,000" },
  { name: "Claude Sonnet 4.6", provider: "Anthropic", color: "#c96442", slug: "anthropic", fallback: "🧠", input: "$3.00", output: "$15", context: "200K", speed: "~70 tok/s", badge: "Best Balance", desc: "Balance คุณภาพ-ราคาดีที่สุด เหมาะเป็น default", monthly: "~฿1,000-4,000" },
  { name: "Gemini 3.1 Pro", provider: "Google", color: "#4285f4", slug: "googlegemini", fallback: "🔵", input: "$2.00", output: "$12", context: "1M", speed: "~90 tok/s", badge: "#1 Benchmark", desc: "อันดับ 1 benchmark + multimodal (รูป/video)", monthly: "~฿1,200-5,000" },
  { name: "Gemini 3 Flash", provider: "Google", color: "#4285f4", slug: "googlegemini", fallback: "⚡", input: "$0.50", output: "$3", context: "1M", speed: "~150 tok/s", badge: "Speed King", desc: "เร็วสุด ถูกสุด เหมาะงาน high-volume", monthly: "~฿300-1,500" },
  { name: "DeepSeek V3", provider: "DeepSeek", color: "#5b6abf", slug: "deepseek", fallback: "🔮", input: "$0.28", output: "$0.42", context: "128K", speed: "~100 tok/s", badge: "Budget King", desc: "ถูกกว่า GPT-5 ถึง 25 เท่า คุณภาพใกล้เคียง", monthly: "~฿200-800" },
  { name: "o3", provider: "OpenAI", color: "#10a37f", slug: "openai", fallback: "🤖", input: "$2.00", output: "$8", context: "200K", speed: "~30 tok/s", badge: "Reasoning", desc: "คิดก่อนตอบ เหมาะโจทย์ซับซ้อน คณิตศาสตร์ code", monthly: "~฿500-3,000" },
  { name: "Grok 3", provider: "xAI", color: "#1d9bf0", slug: "x", fallback: "𝕏", input: "$3.00", output: "$15", context: "128K", speed: "~60 tok/s", badge: "Real-time", desc: "เข้าถึงข้อมูล real-time ข่าว trend ตลาด", monthly: "~฿1,000-4,000" },
];

export default function Models() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="models" className="apple-section section-gray">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Apple-style section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            Frontier Models.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            เชื่อมต่อกับ AI ที่ฉลาดที่สุดในโลก แต่ละตัวมีจุดเด่นต่างกัน เราช่วยเลือกให้เหมาะกับธุรกิจคุณ
          </p>
        </motion.div>

        {/* Model list */}
        <div className="space-y-3 mb-16">
          {models.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="apple-card">
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left px-4 py-3 sm:px-6 sm:py-5 flex items-center gap-3 sm:gap-5"
                >
                  {/* Brand icon */}
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: m.color + "10" }}>
                    <ModelIcon slug={m.slug} fallback={m.fallback} size={16} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-[17px] font-semibold text-[#1d1d1f]">{m.name}</span>
                      <span className="text-[12px] font-medium px-2 py-0.5 rounded-full" style={{ background: m.color + "12", color: m.color }}>
                        {m.badge}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#6e6e73]">{m.desc}</span>
                  </div>

                  <div className="text-right shrink-0 hidden sm:block">
                    <span className="text-[14px] font-medium text-[#1d1d1f]">{m.monthly}</span>
                    <span className="text-[12px] text-[#6e6e73] block">ต่อเดือน</span>
                  </div>

                  <motion.div animate={{ rotate: expanded === i ? 180 : 0 }} className="shrink-0">
                    <ChevronDown size={18} className="text-[#6e6e73]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5">
                        <div className="border-t border-[#d2d2d7]/30 pt-4 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                          {[
                            { label: "Provider", value: m.provider },
                            { label: "Input/1M", value: m.input },
                            { label: "Output/1M", value: m.output },
                            { label: "Context", value: m.context },
                            { label: "Speed", value: m.speed },
                          ].map((stat) => (
                            <div key={stat.label}>
                              <p className="text-[11px] text-[#6e6e73] mb-0.5">{stat.label}</p>
                              <p className="text-[14px] font-medium text-[#1d1d1f]">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost scenarios — Apple tile style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] mb-2">ค่าใช้จ่ายจริง</h3>
          <p className="text-[17px] text-[#6e6e73]">ตัวอย่างค่า API ต่อเดือนสำหรับธุรกิจแต่ละขนาด</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "ร้านค้าเล็ก", desc: "ตอบลูกค้า 50 ข้อความ/วัน", cost: "฿450–800", model: "Gemini Flash", color: "#2997ff" },
            { title: "ออฟฟิศ 10 คน", desc: "อีเมล + ประชุม + เอกสาร", cost: "฿1,500–3,000", model: "GPT-5 + Sonnet", color: "#5856d6" },
            { title: "บริษัทใหญ่", desc: "RAG + compliance + analytics", cost: "฿3,000–8,000", model: "Opus + Flash", color: "#af52de" },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="apple-card p-6 text-center"
            >
              <p className="text-[14px] text-[#6e6e73] mb-1">{s.title}</p>
              <p className="text-[32px] font-semibold tracking-[-0.03em] mb-1" style={{ color: s.color }}>{s.cost}</p>
              <p className="text-[12px] text-[#6e6e73]">{s.desc}</p>
              <p className="text-[11px] text-[#6e6e73] mt-2">Model: {s.model}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
