"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const plans = [
  {
    name: "Starter",
    price: "19,900",
    monthly: "฿700 - 2,500",
    desc: "เริ่มต้น AI Automation สำหรับทีมเล็ก",
    color: "#0071e3",
    tools: ["n8n", "Flowise"],
    includes: [
      "ติดตั้ง n8n + Flowise",
      "3 workflow อัตโนมัติ",
      "Frontier Model 1 ตัว",
      "RAG pipeline 1 ชุด",
      "Chatbot embed 1 ตัว",
      "Hosting setup + SSL",
      "คู่มือการใช้งาน",
      "Support 30 วัน",
    ],
    excludes: ["OpenClaw / Dify", "Custom integrations", "Training ทีมงาน"],
    bestFor: "1-3 คน",
  },
  {
    name: "Professional",
    price: "39,900",
    monthly: "฿1,200 - 5,000",
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
      "Hosting + backup",
      "Training 2 ชม.",
      "Support 60 วัน",
    ],
    excludes: ["Custom development", "On-site training"],
    bestFor: "3-10 คน",
  },
  {
    name: "Enterprise",
    price: "89,900",
    monthly: "฿2,500 - 15,000",
    desc: "AI Automation ระดับองค์กร ครบทุกอย่าง",
    color: "#bf5af2",
    tools: ["n8n", "OpenClaw", "Flowise", "Dify", "ActivePieces"],
    includes: [
      "ติดตั้งทุก tool (5 ตัว)",
      "Workflow ไม่จำกัด",
      "Multi-model strategy",
      "Custom integration",
      "Knowledge base ครบ",
      "Multi-server architecture",
      "Training 1 วัน (on-site)",
      "Support 90 วัน + Priority",
      "Monthly maintenance option",
    ],
    excludes: [],
    bestFor: "10+ คน",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <FloatingParticles count={20} speed={0.15} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Setup fee ครั้งเดียว
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            จ่ายค่าติดตั้งครั้งเดียว + ค่า hosting & API รายเดือนตามใช้จริง
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border card-glow ${
                plan.badge ? "border-[#5856d6]/20 md:-mt-4 md:mb-4 shadow-lg shadow-[#5856d6]/5 shimmer" : "border-black/[0.06]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pb-6 border-b border-black/[0.04]">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-[11px] text-[#6e6e73]">฿</span>
                  <span className="text-4xl font-bold text-[#1d1d1f]">{plan.price}</span>
                </div>
                <p className="text-[11px] text-[#6e6e73]">Setup fee (ครั้งเดียว)</p>
                <p className="text-[12px] text-[#6e6e73] mt-1">+ {plan.monthly}/เดือน</p>
              </div>

              {/* Tools */}
              <div className="mb-5">
                <p className="text-[11px] text-[#6e6e73] mb-2">เครื่องมือที่ติดตั้ง</p>
                <div className="flex flex-wrap gap-1.5">
                  {plan.tools.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f]">{t}</span>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div className="space-y-2.5 mb-6">
                {plan.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: plan.color + "10" }}>
                      <Check size={10} style={{ color: plan.color }} />
                    </div>
                    <span className="text-[13px] text-[#1d1d1f]/80">{item}</span>
                  </div>
                ))}
                {plan.excludes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-black/[0.03]">
                      <X size={10} className="text-[#d2d2d7]" />
                    </div>
                    <span className="text-[13px] text-[#d2d2d7]">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#6e6e73] mb-4">เหมาะกับทีม {plan.bestFor}</p>

              <a
                href="#contact"
                className="block text-center text-[14px] font-medium py-3 rounded-full transition-all"
                style={
                  plan.badge
                    ? { background: plan.color, color: "white", boxShadow: `0 4px 16px ${plan.color}30` }
                    : { background: "#f5f5f7", color: "#1d1d1f" }
                }
              >
                เริ่มต้นใช้งาน
              </a>
            </motion.div>
          ))}
        </div>

        {/* Cost breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-black/[0.04]"
        >
          <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">ค่าใช้จ่ายรายเดือน (ประมาณ)</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-[13px] text-[#6e6e73]">
            <div>
              <p className="font-medium text-[#1d1d1f] mb-2">ค่า Hosting</p>
              <p>VPS (2 vCPU, 4GB): ~฿500-900/เดือน</p>
              <p>VPS (4 vCPU, 8GB): ~฿1,200-2,000/เดือน</p>
              <p>Managed Cloud: ~฿700-3,000/เดือน</p>
            </div>
            <div>
              <p className="font-medium text-[#1d1d1f] mb-2">ค่า API (ตามใช้จริง)</p>
              <p>GPT-5: ~$1.25/1M input, ~$10/1M output</p>
              <p>Gemini 3 Flash: ~$0.50/1M input (ถูกสุด)</p>
              <p>DeepSeek V3: ~$0.28/1M input (ถูกที่สุด)</p>
              <p className="mt-2 text-[#1d1d1f]">ใช้ทั่วไป: ~฿300-3,000/เดือน</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
