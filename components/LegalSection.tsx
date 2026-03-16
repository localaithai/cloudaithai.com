"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, FileText, Search, Shield, Clock, AlertTriangle, Check, ChevronDown, ArrowRight, Brain, DollarSign } from "lucide-react";

const painPoints = [
  { icon: <FileText size={20} />, title: "เอกสารเยอะมาก", desc: "สัญญา 50-100 หน้า × 20 เรื่อง/เดือน อ่านไม่ทัน ตกหล่นได้", color: "#ff3b30" },
  { icon: <Search size={20} />, title: "ค้นข้อกฎหมายนาน", desc: "หาว่า พ.ร.บ. ไหนเกี่ยว มาตราอะไรบังคับ ใช้เวลาครึ่งวัน", color: "#ff9500" },
  { icon: <Clock size={20} />, title: "Draft เอกสารช้า", desc: "ร่างหนังสือทวงถาม สัญญาใหม่ ใช้เวลา 2-3 ชม./ฉบับ", color: "#5856d6" },
  { icon: <AlertTriangle size={20} />, title: "ตรวจ compliance ไม่ครบ", desc: "PDPA, พ.ร.บ.คอมพ์ ฯลฯ มีอัพเดทตลอด ตรวจไม่ทัน", color: "#af52de" },
];

const workflows = [
  {
    title: "วิเคราะห์สัญญาอัตโนมัติ",
    desc: "Upload สัญญา → AI อ่านทั้งฉบับ → สรุปประเด็นสำคัญ ข้อเสี่ยง ข้อเสนอแนะ",
    steps: ["Upload PDF/Word สัญญา", "AI อ่านและจำแนกส่วนสำคัญ (ข้อตกลง, ค่าปรับ, ระยะเวลา, การยกเลิก)", "สรุป 1 หน้า: ข้อดี ข้อเสี่ยง ข้อเสนอแนะ", "Highlight ข้อที่ต้องระวัง + เปรียบเทียบกับ standard"],
    model: "Claude Opus 4.6 (1M context — อ่าน 700+ หน้า)",
    cost: "~฿9/สัญญา 50 หน้า",
    timeSaved: "จาก 3 ชม. เหลือ 5 นาที",
  },
  {
    title: "ค้นข้อกฎหมายด้วย AI (Legal RAG)",
    desc: "ถามคำถามภาษาไทย → AI ค้นจากฐานข้อมูลกฎหมาย + คำพิพากษา",
    steps: ["Upload พ.ร.บ., กฎกระทรวง, คำพิพากษา เข้าระบบ", "AI สร้าง knowledge base (RAG)", "ทนายพิมพ์คำถาม: \"PDPA มีบทลงโทษอะไรบ้าง\"", "AI ตอบ + อ้างอิงมาตรา + แสดงเอกสารต้นทาง"],
    model: "GPT-5 + Flowise RAG pipeline",
    cost: "~฿1,500/เดือน (ค้นหา 200 ครั้ง)",
    timeSaved: "จาก 30 นาที เหลือ 30 วินาที",
  },
  {
    title: "Draft เอกสารกฎหมาย",
    desc: "บอก AI ว่าต้องการเอกสารอะไร → AI ร่างให้ตาม template + ปรับตามข้อมูล",
    steps: ["เลือก template (หนังสือทวงถาม, สัญญาเช่า, MOU, NDA)", "ใส่ข้อมูล (ชื่อ, วันที่, จำนวนเงิน, เงื่อนไข)", "AI ร่างเอกสารพร้อมใช้", "ทนาย review + แก้ไข + approve"],
    model: "Claude Sonnet 4.6 (draft quality ดี)",
    cost: "~฿5/เอกสาร",
    timeSaved: "จาก 2 ชม. เหลือ 10 นาที",
  },
  {
    title: "ตรวจ PDPA Compliance",
    desc: "AI ตรวจเว็บไซต์, แอป, เอกสาร ว่าเป็นไปตาม PDPA หรือไม่",
    steps: ["ให้ AI อ่าน privacy policy, consent form, data flow", "AI เปรียบเทียบกับ PDPA requirements", "สรุปรายงาน: ผ่าน/ไม่ผ่าน + สิ่งที่ต้องแก้", "สร้าง action plan อัตโนมัติ"],
    model: "Claude Opus (complex compliance analysis)",
    cost: "~฿15/ครั้ง",
    timeSaved: "จาก 1 วัน เหลือ 30 นาที",
  },
];

const pricing = [
  { name: "Solo Lawyer", price: "฿19,900", monthly: "฿1,000-2,500", features: ["Contract analysis (10/เดือน)", "Legal RAG 1 ฐานข้อมูล", "Document draft 3 templates", "Support 30 วัน"], color: "#007aff" },
  { name: "Law Firm", price: "฿49,900", monthly: "฿3,000-8,000", features: ["Contract analysis ไม่จำกัด", "Legal RAG หลายฐานข้อมูล", "Document draft ไม่จำกัด template", "PDPA compliance checker", "Training ทีม 2 ชม.", "Support 60 วัน"], color: "#5856d6", badge: "แนะนำ" },
  { name: "Enterprise", price: "฿89,900", monthly: "฿5,000-15,000", features: ["ทุกอย่างใน Law Firm", "Custom template development", "API integration กับระบบที่มี", "Multi-user + permissions", "On-site training 1 วัน", "Priority support 90 วัน"], color: "#af52de" },
];

export default function LegalSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 mb-6">
            <Scale size={14} className="text-[#5856d6]" />
            <span className="text-[12px] font-medium text-[#5856d6]">Legal AI Solution</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1c1c1e] tracking-tight mb-4">
            AI สำหรับ<span className="gradient-text">สำนักงานกฎหมาย</span>
          </h1>
          <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
            วิเคราะห์สัญญา 50 หน้าใน 5 นาที ค้นข้อกฎหมายใน 30 วินาที Draft เอกสารใน 10 นาที
          </p>
        </motion.div>

        {/* Pain points */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {painPoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card relative p-5">
              <div className="relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1c1c1e] mb-0.5">{p.title}</h3>
                  <p className="text-[12px] text-[#8e8e93]">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflows */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c1c1e] text-center mb-10">สิ่งที่ AI ทำให้ได้</h2>
          <div className="space-y-4">
            {workflows.map((wf, i) => (
              <div key={wf.title} className="glass-card relative overflow-hidden">
                <button onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)} className="w-full text-left p-6 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#1c1c1e] mb-1">{wf.title}</h3>
                      <p className="text-[13px] text-[#6e6e73]">{wf.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:block text-[11px] glass-pill px-3 py-1 text-[#5856d6] font-medium">{wf.timeSaved}</span>
                      <motion.div animate={{ rotate: expandedWorkflow === i ? 180 : 0 }}><ChevronDown size={16} className="text-[#c7c7cc]" /></motion.div>
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedWorkflow === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 space-y-4 relative z-10">
                        <div className="h-[0.5px] bg-black/5" />
                        <div className="space-y-2">
                          {wf.steps.map((step, si) => (
                            <div key={si} className="flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-[#5856d6] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{si + 1}</span>
                              <span className="text-[13px] text-[#1c1c1e]/80">{step}</span>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="glass-pill px-3 py-2 text-center"><p className="text-[10px] text-[#8e8e93]">Model</p><p className="text-[11px] font-medium text-[#1c1c1e]">{wf.model}</p></div>
                          <div className="glass-pill px-3 py-2 text-center"><p className="text-[10px] text-[#8e8e93]">ค่าใช้จ่าย</p><p className="text-[11px] font-medium text-[#5856d6]">{wf.cost}</p></div>
                          <div className="glass-pill px-3 py-2 text-center"><p className="text-[10px] text-[#8e8e93]">ประหยัดเวลา</p><p className="text-[11px] font-medium text-[#34c759]">{wf.timeSaved}</p></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1c1c1e] text-center mb-10">แพ็คเกจสำหรับสำนักงานกฎหมาย</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pricing.map((plan) => (
              <div key={plan.name} className={`glass-card relative p-6 ${plan.badge ? "shimmer-bg" : ""}`}>
                {plan.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>{plan.badge}</span></div>}
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-[#1c1c1e] text-center mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-center mb-1" style={{ color: plan.color }}>{plan.price}</p>
                  <p className="text-[11px] text-[#8e8e93] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                  <p className="text-[11px] text-[#8e8e93] text-center mb-4 pb-4 border-b border-black/5">+ {plan.monthly}/เดือน</p>
                  <div className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2"><Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} /><span className="text-[12px] text-[#6e6e73]">{f}</span></div>
                    ))}
                  </div>
                  <a href="/#contact" className="block text-center text-[13px] font-medium py-2.5 rounded-full transition-all" style={plan.badge ? { background: plan.color, color: "white" } : { background: "rgba(0,0,0,0.04)" }}>
                    เริ่มต้นใช้งาน
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
