"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const tools = [
  {
    name: "n8n",
    tagline: "Workflow Automation",
    description: "เชื่อมทุกแอป สร้าง workflow อัตโนมัติ ลากวาง 400+ integrations — LINE, Slack, Gmail, Sheets, CRM",
    features: ["400+ Integrations", "Visual Builder", "Webhook & Cron", "AI Nodes"],
    color: "#ff6d5a",
    icon: "⚡",
  },
  {
    name: "OpenClaw",
    tagline: "AI Agent ส่วนตัว",
    description: "AI Assistant ที่จำบริบท สั่งผ่าน LINE/WhatsApp/Telegram จัดการปฏิทิน อีเมล ไฟล์ browse เว็บ",
    features: ["100+ AgentSkills", "Chat Integration", "Memory", "Browser AI"],
    color: "#e74c3c",
    icon: "🦞",
  },
  {
    name: "Flowise",
    tagline: "Chatbot & RAG Builder",
    description: "สร้าง AI Chatbot และ RAG pipeline แบบ drag-and-drop ฝัง chatbot ลงเว็บไซต์ได้ทันที",
    features: ["Drag & Drop", "RAG Pipeline", "Embed Widget", "100+ LLMs"],
    color: "#3b82f6",
    icon: "🌊",
  },
  {
    name: "Dify",
    tagline: "AI App Platform",
    description: "สร้าง AI application ครบวงจร ตั้งแต่ prototype ถึง production — workflow, RAG, agent, analytics",
    features: ["AI Workflow", "Knowledge Base", "50+ Tools", "Analytics"],
    color: "#8b5cf6",
    icon: "🔮",
  },
  {
    name: "ActivePieces",
    tagline: "No-Code Automation",
    description: "ใช้ง่ายที่สุด ออกแบบมาให้คนไม่เขียนโค้ดใช้ได้ ใช้แทน Zapier/Make ได้เลย",
    features: ["No-Code", "200+ Apps", "AI Pieces", "Team Collab"],
    color: "#30d158",
    icon: "🧩",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <FloatingParticles count={25} speed={0.2} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-3">Automation Tools</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            เครื่องมือ 5 ตัวที่ทำทุกอย่าง
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            Open-source ทั้งหมด ไม่มีค่า license — เราติดตั้ง ตั้งค่า สอนใช้ให้ครบ
          </p>
        </motion.div>

        <div className="space-y-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#fafafa] rounded-3xl p-8 md:p-10 border border-black/[0.04] card-glow hover:bg-white transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#1d1d1f]">{tool.name}</h3>
                      <p className="text-[13px] text-[#6e6e73]">{tool.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#1d1d1f]/70 leading-relaxed mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((f) => (
                      <span key={f} className="text-[11px] font-medium px-3 py-1 rounded-full border border-black/[0.06] text-[#1d1d1f]/60">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: tool.color + "10" }}
                  >
                    <span className="text-4xl">{tool.icon}</span>
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
