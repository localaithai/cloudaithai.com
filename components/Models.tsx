"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Brain, DollarSign, Clock, Star } from "lucide-react";

interface Model {
  name: string;
  provider: string;
  color: string;
  input: string;
  output: string;
  strength: string;
  badge: string;
  context: string;
  speed: string;
  bestFor: string[];
  description: string;
  realWorldExample: string;
  monthlyEstimate: string;
}

const models: Model[] = [
  {
    name: "GPT-5",
    provider: "OpenAI",
    color: "#10a37f",
    input: "$1.25",
    output: "$10.00",
    strength: "General + Reasoning ครบเครื่อง",
    badge: "Flagship",
    context: "128K tokens",
    speed: "~80 tok/s",
    bestFor: ["งานทั่วไป", "เขียน content", "วิเคราะห์ข้อมูล", "code generation"],
    description: "Model หลักของ OpenAI ครบเครื่องทุกด้าน — เขียน วิเคราะห์ แปล สรุป code ได้หมด คุ้มค่าที่สุดสำหรับงานทั่วไป",
    realWorldExample: "สร้าง blog post 1,000 คำ → ใช้ ~2,000 tokens → ค่าใช้จ่าย ~฿0.40",
    monthlyEstimate: "~฿800-2,500/เดือน",
  },
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    color: "#d4a574",
    input: "$5.00",
    output: "$25.00",
    strength: "Reasoning ลึกสุด + 1M Context",
    badge: "Most Capable",
    context: "1M tokens (beta)",
    speed: "~40 tok/s",
    bestFor: ["วิเคราะห์เอกสารยาว", "complex reasoning", "งานที่ต้องความแม่นยำสูง", "code review"],
    description: "Model ที่ฉลาดที่สุดในโลกตอนนี้ — 1M context window อ่านเอกสาร 700+ หน้าได้ทีเดียว เหมาะกับงานที่ต้องคิดลึก วิเคราะห์ซับซ้อน",
    realWorldExample: "วิเคราะห์สัญญา 50 หน้า → ใช้ ~50,000 tokens → ค่าใช้จ่าย ~฿9",
    monthlyEstimate: "~฿2,000-8,000/เดือน",
  },
  {
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    color: "#d4a574",
    input: "$3.00",
    output: "$15.00",
    strength: "Balance คุณภาพ-ราคา ดีที่สุด",
    badge: "Best Balance",
    context: "200K tokens",
    speed: "~70 tok/s",
    bestFor: ["chatbot", "customer support", "content writing", "daily tasks"],
    description: "จุดลงตัวของคุณภาพและราคา — ฉลาดพอสำหรับงานส่วนใหญ่ เร็วกว่า Opus เหมาะเป็น default model",
    realWorldExample: "ตอบลูกค้า 100 ข้อความ/วัน → ~฿45/วัน → ~฿1,350/เดือน",
    monthlyEstimate: "~฿1,000-4,000/เดือน",
  },
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    color: "#4285f4",
    input: "$2.00",
    output: "$12.00",
    strength: "Top Benchmark + Multimodal",
    badge: "#1 Benchmark",
    context: "1M tokens",
    speed: "~90 tok/s",
    bestFor: ["multimodal (รูป+ข้อความ)", "research", "data analysis", "translation"],
    description: "อันดับ 1 หลาย benchmark — รองรับ multimodal (รูปภาพ, video, audio) 1M context เท่า Claude Opus แต่ถูกกว่า",
    realWorldExample: "วิเคราะห์ใบเสร็จ 200 ใบ (รูปภาพ) → ~฿120",
    monthlyEstimate: "~฿1,200-5,000/เดือน",
  },
  {
    name: "Gemini 3 Flash",
    provider: "Google",
    color: "#4285f4",
    input: "$0.50",
    output: "$3.00",
    strength: "เร็วสุด ถูกสุดใน tier นี้",
    badge: "Speed King",
    context: "1M tokens",
    speed: "~150 tok/s",
    bestFor: ["high-volume tasks", "classification", "extraction", "quick replies"],
    description: "เร็วที่สุดและถูกที่สุดในระดับ frontier — เหมาะกับงานที่ต้องรันเยอะๆ เช่น classify อีเมล 1,000 ฉบับ",
    realWorldExample: "Classify อีเมล 1,000 ฉบับ/วัน → ~฿15/วัน → ~฿450/เดือน",
    monthlyEstimate: "~฿300-1,500/เดือน",
  },
  {
    name: "DeepSeek V3",
    provider: "DeepSeek",
    color: "#5b6abf",
    input: "$0.28",
    output: "$0.42",
    strength: "ถูกมาก คุณภาพเกือบเท่า GPT-5",
    badge: "Budget King",
    context: "128K tokens",
    speed: "~100 tok/s",
    bestFor: ["high-volume automation", "ร่างเอกสาร", "summarization", "budget workflows"],
    description: "ถูกกว่า GPT-5 ถึง 5-25 เท่า แต่คุณภาพใกล้เคียงมาก — เหมาะสำหรับ workflow ที่รันเยอะๆ ต้องการประหยัด",
    realWorldExample: "สรุปข่าว 500 บทความ/วัน → ~฿8/วัน → ~฿240/เดือน",
    monthlyEstimate: "~฿200-800/เดือน",
  },
  {
    name: "o3",
    provider: "OpenAI",
    color: "#10a37f",
    input: "$2.00",
    output: "$8.00",
    strength: "Deep Reasoning + Math + Code",
    badge: "Deep Thinker",
    context: "200K tokens",
    speed: "~30 tok/s (thinking)",
    bestFor: ["math problems", "complex logic", "scientific analysis", "debugging"],
    description: "Reasoning model — คิดก่อนตอบ เหมาะกับโจทย์ที่ต้องคิดหลายขั้น คณิตศาสตร์ วิทยาศาสตร์ debug code ซับซ้อน",
    realWorldExample: "Debug production issue 10 ครั้ง/สัปดาห์ → ~฿250/สัปดาห์",
    monthlyEstimate: "~฿500-3,000/เดือน",
  },
  {
    name: "Grok 3",
    provider: "xAI",
    color: "#1d9bf0",
    input: "$3.00",
    output: "$15.00",
    strength: "Real-time data + ข้อมูลล่าสุด",
    badge: "Real-time",
    context: "128K tokens",
    speed: "~60 tok/s",
    bestFor: ["market research", "trend analysis", "news monitoring", "competitive intel"],
    description: "เข้าถึงข้อมูล real-time ได้ — เหมาะสำหรับ research ข่าว, track competitors, วิเคราะห์ trend ตลาด",
    realWorldExample: "สรุปข่าวคู่แข่ง 5 บริษัท รายวัน → ~฿60/วัน",
    monthlyEstimate: "~฿1,000-4,000/เดือน",
  },
];

function ModelCard({ model, index }: { model: Model; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className={`group bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${
          expanded ? "shadow-xl shadow-black/[0.06] border-black/[0.08]" : "border-black/[0.04] hover:shadow-lg hover:shadow-black/[0.04] hover:-translate-y-1"
        }`}
      >
        <button onClick={() => setExpanded(!expanded)} className="w-full text-left p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              {/* Animated color orb */}
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                style={{ background: `${model.color}08` }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${model.color}20, transparent 70%)` }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <span className="text-[13px] font-semibold relative z-10" style={{ color: model.color }}>
                  {model.name.split(" ")[0].charAt(0)}
                </span>
              </motion.div>

              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="text-base font-semibold text-[#1d1d1f]">{model.name}</h3>
                  <span className="text-[10px] font-medium px-2.5 py-0.5 rounded-full" style={{ background: model.color + "10", color: model.color }}>
                    {model.badge}
                  </span>
                </div>
                <p className="text-[12px] text-[#6e6e73] mb-1">{model.provider} · {model.context} · {model.speed}</p>
                <p className="text-[13px] text-[#1d1d1f]/70">{model.strength}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] text-[#6e6e73]">ประมาณ</p>
                <p className="text-[13px] font-semibold" style={{ color: model.color }}>{model.monthlyEstimate}</p>
              </div>
              <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={16} className="text-[#d2d2d7]" />
              </motion.div>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0 space-y-5">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{model.description}</p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { icon: <DollarSign size={14} />, label: "Input", value: `${model.input}/1M tok` },
                    { icon: <DollarSign size={14} />, label: "Output", value: `${model.output}/1M tok` },
                    { icon: <Clock size={14} />, label: "ความเร็ว", value: model.speed },
                    { icon: <Brain size={14} />, label: "Context", value: model.context },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#fafafa] rounded-xl p-3 text-center">
                      <div className="flex items-center justify-center gap-1 text-[#6e6e73] mb-1">
                        {stat.icon}
                        <span className="text-[10px]">{stat.label}</span>
                      </div>
                      <p className="text-[12px] font-medium text-[#1d1d1f]">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Best for */}
                <div>
                  <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">เหมาะกับ</p>
                  <div className="flex flex-wrap gap-2">
                    {model.bestFor.map((use) => (
                      <span key={use} className="text-[12px] px-3 py-1.5 rounded-full border border-black/[0.06] text-[#1d1d1f]/70">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Real world example */}
                <div className="bg-gradient-to-r from-[#fafafa] to-white rounded-xl p-4 border border-black/[0.04]">
                  <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-1">ตัวอย่างค่าใช้จ่ายจริง</p>
                  <p className="text-[13px] text-[#1d1d1f]">{model.realWorldExample}</p>
                  <p className="text-[12px] mt-2 font-medium" style={{ color: model.color }}>ค่าใช้จ่ายต่อเดือนโดยประมาณ: {model.monthlyEstimate}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Cost Comparison Table ─── */
function CostComparison() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 bg-white rounded-3xl border border-black/[0.04] overflow-hidden"
    >
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">เปรียบเทียบค่าใช้จ่าย AI ทุก Model</h3>
        <p className="text-[13px] text-[#6e6e73] mb-6">ราคาต่อ 1 ล้าน tokens (ประมาณ 750,000 คำ หรือหนังสือ 3 เล่ม)</p>

        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-black/[0.04]">
                <th className="text-left py-3 px-3 text-[#6e6e73] font-medium">Model</th>
                <th className="text-center py-3 px-3 text-[#6e6e73] font-medium">Input/1M</th>
                <th className="text-center py-3 px-3 text-[#6e6e73] font-medium">Output/1M</th>
                <th className="text-center py-3 px-3 text-[#6e6e73] font-medium">Context</th>
                <th className="text-center py-3 px-3 text-[#6e6e73] font-medium">ความเร็ว</th>
                <th className="text-center py-3 px-3 text-[#6e6e73] font-medium">ค่าใช้จ่าย/เดือน</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={m.name} className={`${i % 2 === 0 ? "bg-[#fafafa]/50" : ""} hover:bg-[#0071e3]/[0.02] transition-colors`}>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: m.color }} />
                      <span className="font-medium text-[#1d1d1f]">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center font-mono text-[#1d1d1f]">{m.input}</td>
                  <td className="py-3 px-3 text-center font-mono text-[#1d1d1f]">{m.output}</td>
                  <td className="py-3 px-3 text-center text-[#6e6e73]">{m.context}</td>
                  <td className="py-3 px-3 text-center text-[#6e6e73]">{m.speed}</td>
                  <td className="py-3 px-3 text-center font-medium" style={{ color: m.color }}>{m.monthlyEstimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cost scenarios */}
      <div className="border-t border-black/[0.04] p-6 md:p-8 bg-[#fafafa]/50">
        <h4 className="text-[14px] font-semibold text-[#1d1d1f] mb-4">สถานการณ์จริง — ค่า API ต่อเดือน</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { scenario: "ร้านค้าออนไลน์ขนาดเล็ก", desc: "ตอบลูกค้า 50 ข้อความ/วัน + สรุป order", model: "Gemini 3 Flash", cost: "~฿450-800", color: "#4285f4" },
            { scenario: "ออฟฟิศ 10 คน", desc: "AI ช่วยเขียนอีเมล สรุปประชุม แปลเอกสาร", model: "GPT-5 / Claude Sonnet", cost: "~฿1,500-3,000", color: "#10a37f" },
            { scenario: "บริษัทที่มีเอกสารเยอะ", desc: "RAG ค้นสัญญา 500 ฉบับ + วิเคราะห์ daily", model: "Claude Opus + Flash", cost: "~฿3,000-8,000", color: "#d4a574" },
          ].map((s) => (
            <div key={s.scenario} className="bg-white rounded-2xl p-5 border border-black/[0.04]">
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-1">{s.scenario}</p>
              <p className="text-[12px] text-[#6e6e73] mb-3">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#6e6e73]">{s.model}</span>
                <span className="text-[14px] font-semibold" style={{ color: s.color }}>{s.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Models() {
  return (
    <section id="models" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-3">Frontier Models</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            AI ที่ฉลาดที่สุดในโลก
          </h2>
          <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
            เราเชื่อมต่อกับทุก Frontier Model — เลือกใช้ตามงาน หรือใช้หลายตัวพร้อมกัน
            แต่ละตัวมีจุดเด่นต่างกัน เราช่วยเลือกให้เหมาะกับธุรกิจคุณ
          </p>
        </motion.div>

        {/* Model cards */}
        <div className="space-y-4">
          {models.map((model, i) => (
            <ModelCard key={model.name} model={model} index={i} />
          ))}
        </div>

        {/* Cost comparison table */}
        <CostComparison />
      </div>
    </section>
  );
}
