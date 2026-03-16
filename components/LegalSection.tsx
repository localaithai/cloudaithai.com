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
  { name: "Solo Lawyer", price: "฿19,900", monthly: "฿1,000-2,500", features: ["Contract analysis (10/เดือน)", "Legal RAG 1 ฐานข้อมูล", "Document draft 3 templates", "Support 30 วัน"], color: "#2997ff" },
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
          <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
            <Scale size={14} className="text-[#5856d6]" />
            <span className="text-[12px] font-medium text-[#5856d6]">Legal AI Solution</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            AI สำหรับ<span className="gradient-text">สำนักงานกฎหมาย</span>
          </h1>
          <p className="text-base text-[#86868b] max-w-xl mx-auto">
            วิเคราะห์สัญญา 50 หน้าใน 5 นาที ค้นข้อกฎหมายใน 30 วินาที Draft เอกสารใน 10 นาที
          </p>
        </motion.div>

        {/* Pain points */}
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {painPoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="apple-card relative p-5">
              <div className="relative z-10 flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] rounded-full flex items-center justify-center shrink-0" style={{ color: p.color }}>{p.icon}</div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-0.5">{p.title}</h3>
                  <p className="text-[12px] text-[#86868b]">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflows */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] text-center mb-10">สิ่งที่ AI ทำให้ได้</h2>
          <div className="space-y-4">
            {workflows.map((wf, i) => (
              <div key={wf.title} className="apple-card relative overflow-hidden">
                <button onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)} className="w-full text-left p-6 relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{wf.title}</h3>
                      <p className="text-[13px] text-[#86868b]">{wf.desc}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:block text-[11px] bg-[#f5f5f7] rounded-full px-3 py-1 text-[#5856d6] font-medium">{wf.timeSaved}</span>
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
                              <span className="text-[13px] text-[#1d1d1f]/80">{step}</span>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-[#f5f5f7] rounded-full px-3 py-2 text-center"><p className="text-[10px] text-[#86868b]">Model</p><p className="text-[11px] font-medium text-[#1d1d1f]">{wf.model}</p></div>
                          <div className="bg-[#f5f5f7] rounded-full px-3 py-2 text-center"><p className="text-[10px] text-[#86868b]">ค่าใช้จ่าย</p><p className="text-[11px] font-medium text-[#5856d6]">{wf.cost}</p></div>
                          <div className="bg-[#f5f5f7] rounded-full px-3 py-2 text-center"><p className="text-[10px] text-[#86868b]">ประหยัดเวลา</p><p className="text-[11px] font-medium text-[#34c759]">{wf.timeSaved}</p></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══ INTERACTIVE MOCKUP: ดูตัวอย่างจริง ═══ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="text-center mb-10">
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">Live Demo</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">ดูตัวอย่างจริง</h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">ระบบ AI วิเคราะห์สัญญา + ค้นกฎหมาย ที่ทนายใช้งานจริงได้ทันที</p>
          </div>

          {/* ── Contract Viewer Mockup ── */}
          <div className="apple-card overflow-hidden mb-6">
            <div className="relative z-10">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.04] bg-[#fafafa]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] text-[#86868b] bg-white rounded-md px-4 py-1 border border-black/[0.06]">
                    Cloud AI Legal — Contract Analyzer
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-5 divide-x divide-black/[0.04]">
                {/* Left: Contract document */}
                <div className="md:col-span-3 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText size={16} className="text-[#5856d6]" />
                    <span className="text-[13px] font-semibold text-[#1d1d1f]">สัญญาเช่า_อาคารพาณิชย์_2568.pdf</span>
                    <span className="text-[10px] bg-[#f5f5f7] text-[#86868b] rounded-full px-2 py-0.5 ml-auto">32 หน้า</span>
                  </div>

                  <div className="bg-white border border-black/[0.06] rounded-xl p-5 space-y-4 font-serif text-[13px] text-[#1d1d1f]/80 leading-relaxed">
                    <h3 className="text-center text-[15px] font-bold text-[#1d1d1f] font-sans">สัญญาเช่าอาคารพาณิชย์</h3>
                    <p className="text-center text-[12px] text-[#86868b] font-sans">เลขที่ RENT-2568-00147</p>
                    <div className="h-[0.5px] bg-black/10 my-3" />
                    <p>ทำที่ กรุงเทพมหานคร วันที่ 15 มีนาคม 2568</p>
                    <p>สัญญานี้ทำขึ้นระหว่าง <span className="font-semibold">บริษัท ก้าวหน้า พร็อพเพอร์ตี้ จำกัด</span> (ผู้ให้เช่า) กับ <span className="font-semibold">บริษัท เทค สตาร์ท จำกัด</span> (ผู้เช่า)</p>

                    <div className="bg-[#ff3b30]/[0.06] border border-[#ff3b30]/20 rounded-lg p-3 relative">
                      <div className="absolute -top-2 left-3 bg-[#ff3b30] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">ข้อเสี่ยง</div>
                      <p className="text-[12px]"><span className="font-semibold">ข้อ 5.3</span> ผู้เช่าจะต้องรับผิดชอบค่าเสียหายทั้งหมดที่เกิดขึ้นกับทรัพย์สินที่เช่า <span className="underline decoration-[#ff3b30] decoration-wavy">ไม่ว่าจะเกิดจากสาเหตุใดก็ตาม รวมถึงเหตุสุดวิสัย</span></p>
                    </div>

                    <p><span className="font-semibold">ข้อ 6</span> อัตราค่าเช่ารายเดือน เดือนละ 45,000 บาท (สี่หมื่นห้าพันบาทถ้วน) ชำระภายในวันที่ 5 ของทุกเดือน</p>

                    <div className="bg-[#ff3b30]/[0.06] border border-[#ff3b30]/20 rounded-lg p-3 relative">
                      <div className="absolute -top-2 left-3 bg-[#ff3b30] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">ข้อเสี่ยง</div>
                      <p className="text-[12px]"><span className="font-semibold">ข้อ 8.2</span> หากผู้เช่าผิดนัดชำระค่าเช่า ให้ผู้ให้เช่ามีสิทธิเรียกค่าปรับ <span className="underline decoration-[#ff3b30] decoration-wavy">ร้อยละ 5 ต่อวัน</span> ของยอดค้างชำระ</p>
                    </div>

                    <p><span className="font-semibold">ข้อ 12</span> ระยะเวลาเช่า 3 ปี นับแต่วันที่ลงนามในสัญญา ต่อสัญญาได้โดยต้องแจ้งล่วงหน้า 90 วัน</p>
                  </div>
                </div>

                {/* Right: AI Analysis panel */}
                <div className="md:col-span-2 p-6 bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-5">
                    <Brain size={16} className="text-[#5856d6]" />
                    <span className="text-[13px] font-semibold text-[#1d1d1f]">AI Analysis</span>
                    <span className="text-[10px] bg-[#34c759]/10 text-[#34c759] rounded-full px-2 py-0.5 ml-auto font-medium">วิเคราะห์แล้ว</span>
                  </div>

                  {/* Risk items */}
                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <AlertTriangle size={12} /> ข้อเสี่ยง (3 รายการ)
                    </p>
                    <div className="space-y-2">
                      {[
                        { clause: "ข้อ 5.3", text: "รับผิดชอบความเสียหายจากเหตุสุดวิสัย — ผิดปกติ ควรยกเว้น force majeure" },
                        { clause: "ข้อ 8.2", text: "ค่าปรับ 5%/วัน สูงเกินไป — ปกติ 0.5-1.5%/วัน อาจถือเป็นเบี้ยปรับที่ศาลลดได้" },
                        { clause: "ข้อ 15", text: "ไม่มี clause การคืนเงินประกัน — ควรระบุเงื่อนไขและระยะเวลาคืน" },
                      ].map((risk, ri) => (
                        <div key={ri} className="bg-white rounded-lg p-3 border border-[#ff3b30]/10">
                          <span className="text-[10px] font-bold text-[#ff3b30] bg-[#ff3b30]/10 rounded-full px-2 py-0.5">{risk.clause}</span>
                          <p className="text-[11px] text-[#1d1d1f]/80 mt-1.5 leading-relaxed">{risk.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-[#2997ff] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <ArrowRight size={12} /> ข้อเสนอแนะ
                    </p>
                    <div className="space-y-2">
                      {[
                        "เพิ่ม Force Majeure clause ยกเว้นเหตุสุดวิสัย",
                        "ลดอัตราค่าปรับเป็น 1.5%/วัน (มาตรฐานตลาด)",
                        "เพิ่มข้อกำหนดเรื่องการคืนเงินประกันภายใน 30 วัน",
                      ].map((rec, ri) => (
                        <div key={ri} className="flex items-start gap-2 bg-[#2997ff]/[0.05] rounded-lg p-2.5">
                          <Check size={13} className="text-[#2997ff] shrink-0 mt-0.5" />
                          <span className="text-[11px] text-[#1d1d1f]/80">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-white rounded-xl p-4 border border-black/[0.06]">
                    <p className="text-[11px] font-semibold text-[#1d1d1f] mb-2 flex items-center gap-1.5">
                      <Shield size={12} className="text-[#5856d6]" /> สรุป
                    </p>
                    <p className="text-[11px] text-[#86868b] leading-relaxed">
                      สัญญาฉบับนี้มีข้อที่ <span className="text-[#ff3b30] font-medium">ไม่เป็นธรรมต่อผู้เช่า 3 จุด</span> โดยเฉพาะเรื่องค่าปรับที่สูงกว่ามาตรฐาน
                      และการรับผิดชอบเหตุสุดวิสัย ควรเจรจาแก้ไขก่อนลงนาม
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex-1 bg-[#f5f5f7] rounded-full h-2 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff9500] to-[#ff3b30]" style={{ width: "35%" }} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#ff9500]">ความเสี่ยง: ปานกลาง-สูง</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Legal Search Mockup ── */}
          <div className="apple-card overflow-hidden">
            <div className="relative z-10">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.04] bg-[#fafafa]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] text-[#86868b] bg-white rounded-md px-4 py-1 border border-black/[0.06]">
                    Cloud AI Legal — Legal RAG Search
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Search bar */}
                <div className="flex items-center gap-3 bg-white border border-black/[0.08] rounded-2xl px-5 py-3.5 mb-6 shadow-sm">
                  <Search size={18} className="text-[#5856d6]" />
                  <span className="text-[14px] text-[#1d1d1f] flex-1">PDPA มาตราที่เกี่ยวข้องกับการเก็บข้อมูลลูกค้า</span>
                  <div className="bg-[#5856d6] text-white text-[12px] font-medium px-4 py-1.5 rounded-full shrink-0">ค้นหา</div>
                </div>

                {/* AI result */}
                <div className="bg-[#fafafa] rounded-2xl p-5 border border-black/[0.04]">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain size={14} className="text-[#5856d6]" />
                    <span className="text-[12px] font-semibold text-[#1d1d1f]">AI สรุปคำตอบ</span>
                    <span className="text-[10px] text-[#86868b] ml-auto">ค้นจาก พ.ร.บ. PDPA พ.ศ. 2562 + กฎกระทรวง 3 ฉบับ</span>
                  </div>

                  <p className="text-[13px] text-[#1d1d1f]/80 leading-relaxed mb-4">
                    การเก็บรวบรวมข้อมูลส่วนบุคคลของลูกค้า ต้องปฏิบัติตามหลักเกณฑ์ที่กำหนดไว้ใน พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 โดยมีมาตราที่เกี่ยวข้องดังนี้:
                  </p>

                  <div className="space-y-3">
                    {[
                      { section: "มาตรา 19", title: "หลักการเก็บรวบรวมข้อมูล", text: "ต้องเก็บเท่าที่จำเป็น ตามวัตถุประสงค์ที่แจ้งไว้ โดยชอบด้วยกฎหมาย เป็นธรรม และโปร่งใส", tag: "สำคัญ" },
                      { section: "มาตรา 21", title: "การขอความยินยอม", text: "ต้องขอ consent ก่อนเก็บข้อมูล เป็นหนังสือหรืออิเล็กทรอนิกส์ ภาษาเข้าใจง่าย แยกชัดเจนจากเงื่อนไขอื่น", tag: "บังคับ" },
                      { section: "มาตรา 23", title: "ข้อมูลที่เก็บได้", text: "ห้ามเก็บข้อมูลเกินวัตถุประสงค์ และต้องลบเมื่อหมดความจำเป็น หรือเจ้าของข้อมูลถอนความยินยอม", tag: "สำคัญ" },
                      { section: "มาตรา 26", title: "ข้อมูลอ่อนไหว (Sensitive Data)", text: "ห้ามเก็บข้อมูลเชื้อชาติ ศาสนา สุขภาพ พฤติกรรมทางเพศ ฯลฯ เว้นแต่ได้รับ explicit consent", tag: "เข้มงวด" },
                    ].map((item, si) => (
                      <motion.div key={si} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.08 }}
                        className="bg-white rounded-xl p-4 border border-black/[0.04] hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[12px] font-bold text-[#5856d6]">{item.section}</span>
                          <span className="text-[12px] font-semibold text-[#1d1d1f]">{item.title}</span>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ml-auto ${
                            item.tag === "บังคับ" ? "bg-[#ff3b30]/10 text-[#ff3b30]" :
                            item.tag === "เข้มงวด" ? "bg-[#af52de]/10 text-[#af52de]" :
                            "bg-[#ff9500]/10 text-[#ff9500]"
                          }`}>{item.tag}</span>
                        </div>
                        <p className="text-[11px] text-[#86868b] leading-relaxed">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/[0.04]">
                    <span className="text-[10px] text-[#86868b]">ใช้เวลาค้นหา: 2.3 วินาที | แหล่งอ้างอิง: 4 มาตรา จาก 1 พ.ร.บ.</span>
                    <span className="text-[10px] text-[#5856d6] font-medium cursor-pointer hover:underline">ดูเอกสารต้นฉบับ →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] text-center mb-10">แพ็คเกจสำหรับสำนักงานกฎหมาย</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pricing.map((plan) => (
              <div key={plan.name} className={`apple-card relative p-6 ${plan.badge ? "" : ""}`}>
                {plan.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>{plan.badge}</span></div>}
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-[#1d1d1f] text-center mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-center mb-1" style={{ color: plan.color }}>{plan.price}</p>
                  <p className="text-[11px] text-[#86868b] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                  <p className="text-[11px] text-[#86868b] text-center mb-4 pb-4 border-b border-black/5">+ {plan.monthly}/เดือน</p>
                  <div className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2"><Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} /><span className="text-[12px] text-[#86868b]">{f}</span></div>
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
