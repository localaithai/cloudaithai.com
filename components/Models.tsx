"use client";
import { motion } from "framer-motion";

const models = [
  {
    name: "GPT-5",
    provider: "OpenAI",
    color: "#10a37f",
    input: "$1.25",
    output: "$10.00",
    strength: "General + Reasoning ครบเครื่อง",
    badge: "Flagship",
  },
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    color: "#d4a574",
    input: "$5.00",
    output: "$25.00",
    strength: "Reasoning ลึก + 1M Context",
    badge: "Most Capable",
  },
  {
    name: "Claude Sonnet 4.6",
    provider: "Anthropic",
    color: "#d4a574",
    input: "$3.00",
    output: "$15.00",
    strength: "Balance คุณภาพ-ราคา ดีที่สุด",
    badge: "Best Value",
  },
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    color: "#4285f4",
    input: "$2.00",
    output: "$12.00",
    strength: "Top Benchmark + Multimodal",
    badge: "#1 Benchmark",
  },
  {
    name: "Gemini 3 Flash",
    provider: "Google",
    color: "#4285f4",
    input: "$0.50",
    output: "$3.00",
    strength: "เร็วสุด ถูกสุดใน tier นี้",
    badge: "Speed King",
  },
  {
    name: "DeepSeek V3",
    provider: "DeepSeek",
    color: "#5b6abf",
    input: "$0.28",
    output: "$0.42",
    strength: "ถูกมาก คุณภาพเกือบเท่า GPT-5",
    badge: "Budget King",
  },
  {
    name: "o3",
    provider: "OpenAI",
    color: "#10a37f",
    input: "$2.00",
    output: "$8.00",
    strength: "Deep Reasoning + Math + Code",
    badge: "Reasoning",
  },
  {
    name: "Grok 3",
    provider: "xAI",
    color: "#1d9bf0",
    input: "$3.00",
    output: "$15.00",
    strength: "Real-time data + ข้อมูลล่าสุด",
    badge: "Real-time",
  },
];

export default function Models() {
  return (
    <section id="models" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
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
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            เราเชื่อมต่อกับทุก Frontier Model — เลือกใช้ตามงาน หรือใช้หลายตัวพร้อมกัน
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl p-5 border border-black/[0.04] hover:border-black/[0.08] transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.05] hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: model.color }} />
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: model.color + "10", color: model.color }}>
                  {model.badge}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{model.name}</h3>
              <p className="text-[11px] text-[#6e6e73] mb-3">{model.provider}</p>

              <p className="text-[12px] text-[#1d1d1f] mb-4 leading-relaxed">{model.strength}</p>

              <div className="pt-3 border-t border-black/[0.04]">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#6e6e73]">Input</span>
                  <span className="font-mono text-[#1d1d1f]">{model.input}/1M</span>
                </div>
                <div className="flex justify-between text-[11px] mt-1">
                  <span className="text-[#6e6e73]">Output</span>
                  <span className="font-mono text-[#1d1d1f]">{model.output}/1M</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
