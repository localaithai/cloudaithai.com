"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, FileText, Search, Shield, Clock, AlertTriangle, Check, ChevronDown, ArrowRight, Brain, BookOpen, FilePen, ClipboardCheck, X } from "lucide-react";

/* ─── LEGAL PAGE — Every section has industry-specific UI ─── */

export default function LegalSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <Scale size={14} className="text-[#5856d6]" />
              <span className="text-[12px] font-medium text-[#5856d6]">Legal AI Solution</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">สำนักงานกฎหมาย</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              วิเคราะห์สัญญา 50 หน้าใน 5 นาที ค้นข้อกฎหมายใน 30 วินาที ร่างเอกสารใน 10 นาที ตรวจ PDPA อัตโนมัติ
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — with real UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่ทนายและสำนักงานกฎหมายเจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Contract stack mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">สัญญารอวิเคราะห์</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">12 ฉบับ</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { name: "สัญญาเช่าอาคาร_2568.pdf", pages: "54 หน้า", deadline: "พรุ่งนี้", urgent: true },
                  { name: "สัญญาจ้างผลิต_ABC.pdf", pages: "38 หน้า", deadline: "2 วัน", urgent: true },
                  { name: "MOU_ร่วมทุน.pdf", pages: "27 หน้า", deadline: "3 วัน", urgent: false },
                  { name: "NDA_บริษัทเทค.pdf", pages: "12 หน้า", deadline: "5 วัน", urgent: false },
                  { name: "สัญญาซื้อขาย_ที่ดิน.pdf", pages: "63 หน้า", deadline: "7 วัน", urgent: false },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#fafafa]">
                    <FileText size={14} className="text-[#86868b] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-[#1d1d1f] truncate">{doc.name}</p>
                      <p className="text-[10px] text-[#86868b]">{doc.pages}</p>
                    </div>
                    <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full shrink-0 ${doc.urgent ? "bg-[#ff3b30]/10 text-[#ff3b30]" : "text-[#86868b] bg-[#f5f5f7]"}`}>{doc.deadline}</span>
                  </div>
                ))}
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-1">อ่านไม่ทัน deadline ตกหล่นได้</p>
              </div>
            </motion.div>

            {/* Legal search takes forever mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">ค้นข้อกฎหมาย</span>
                <span className="text-[11px] text-[#ff9500] font-medium">ค้นหามา 45 นาที...</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 bg-white border border-black/[0.08] rounded-xl px-3 py-2.5 mb-3">
                  <Search size={14} className="text-[#86868b]" />
                  <span className="text-[12px] text-[#1d1d1f]">พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล มาตราที่เกี่ยวกับ...</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "พ.ร.บ. PDPA 2562", status: "เปิดอ่าน 157 มาตรา" },
                    { label: "กฎกระทรวง ฉบับที่ 1", status: "ยังไม่ได้ดู" },
                    { label: "กฎกระทรวง ฉบับที่ 2", status: "ยังไม่ได้ดู" },
                    { label: "คำพิพากษาศาลฎีกา", status: "หาไม่เจอ" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                      <span className="text-[12px] text-[#1d1d1f]">{item.label}</span>
                      <span className="text-[10px] text-[#86868b]">{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3">
                  <div className="inline-flex items-center gap-2 text-[#ff9500]">
                    <Clock size={14} />
                    <span className="text-[12px] font-medium">เสียเวลาครึ่งวัน ยังหาไม่ครบ</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Draft document manually */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5856d6]/8 flex items-center justify-center shrink-0 text-[#5856d6]"><FilePen size={20} /></div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">ร่างเอกสารใช้เวลานาน</h3>
                  <p className="text-[12px] text-[#86868b]">ร่างหนังสือทวงถาม <span className="text-[#5856d6] font-medium">2 ชม./ฉบับ</span> สัญญาเช่า <span className="text-[#5856d6] font-medium">4 ชม.</span> MOU <span className="text-[#5856d6] font-medium">3 ชม.</span></p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-[#f5f5f7] rounded-full h-1.5 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-[#5856d6]" initial={{ width: 0 }} whileInView={{ width: "25%" }} viewport={{ once: true }} transition={{ duration: 2 }} />
                    </div>
                    <span className="text-[10px] text-[#86868b]">25% เสร็จ (วันนี้)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PDPA compliance checklist */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#af52de]/8 flex items-center justify-center shrink-0 text-[#af52de]"><Shield size={20} /></div>
                <div className="flex-1">
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-2">PDPA Compliance ไม่ครบ</h3>
                  <div className="space-y-1.5">
                    {[
                      { label: "Privacy Policy", done: true },
                      { label: "Consent Form", done: false },
                      { label: "Data Processing Agreement", done: false },
                      { label: "Data Breach Notification", done: false },
                      { label: "DPIA Assessment", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${item.done ? "bg-[#34c759] border-[#34c759]" : "border-[#d2d2d7]"}`}>
                          {item.done && <Check size={10} className="text-white" />}
                        </div>
                        <span className={`text-[11px] ${item.done ? "text-[#86868b] line-through" : "text-[#1d1d1f]"}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#af52de] font-medium mt-2">ผ่านแค่ 1/5 รายการ — เสี่ยงโดนปรับ</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side contract review ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">เปลี่ยนจากอ่านเอง เป็น AI วิเคราะห์ให้</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">ใช้เวลา: 3 ชม. | ตกหล่น: บ่อย</div>
                <div className="p-4 space-y-3">
                  {/* Simulated contract with messy highlights */}
                  <div className="bg-white border border-black/[0.06] rounded-lg p-3 font-serif text-[11px] text-[#1d1d1f]/70 leading-relaxed space-y-2">
                    <p className="text-center text-[12px] font-bold text-[#1d1d1f] font-sans">สัญญาเช่าอาคารพาณิชย์</p>
                    <p><span className="bg-yellow-200">ข้อ 5.3 ผู้เช่าจะต้องรับผิดชอบ</span>ค่าเสียหายทั้งหมด <span className="bg-yellow-200">ไม่ว่าจะเกิดจากสาเหตุใด</span></p>
                    <p><span className="bg-pink-200">ข้อ 8.2 ค่าปรับร้อยละ 5 ต่อวัน</span> ของยอดค้างชำระ</p>
                    <p className="text-[#86868b]">ข้อ 9 ... ข้อ 10 ... ข้อ 11 ...</p>
                    <p className="text-[#86868b]">[อีก 40+ หน้า ยังไม่ได้อ่าน]</p>
                  </div>
                  {/* Sticky notes */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="text-[9px] px-2 py-1 rounded bg-yellow-100 text-yellow-700 -rotate-2">ตรวจข้อ 5 อีกที</span>
                    <span className="text-[9px] px-2 py-1 rounded bg-pink-100 text-pink-700 rotate-1">ค่าปรับสูงไป?</span>
                    <span className="text-[9px] px-2 py-1 rounded bg-blue-100 text-blue-700 -rotate-1">ถามหุ้นส่วน</span>
                    <span className="text-[9px] px-2 py-1 rounded bg-green-100 text-green-700 rotate-2">เทียบสัญญาเก่า</span>
                  </div>
                  <div className="text-center">
                    <p className="text-[11px] text-[#ff3b30] font-medium">อ่านไป highlight ไป ไม่แน่ใจว่าครบไหม</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">ใช้เวลา: 5 นาที | ครบถ้วน: 100%</div>
                <div className="p-4 space-y-3">
                  {/* AI Summary panel */}
                  <div className="bg-[#fafafa] rounded-xl p-3 space-y-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <Brain size={13} className="text-[#5856d6]" />
                      <span className="text-[11px] font-semibold text-[#1d1d1f]">AI สรุปสัญญา 54 หน้า</span>
                    </div>
                    {/* Summary */}
                    <div className="bg-white rounded-lg p-2.5 border border-black/[0.04]">
                      <p className="text-[10px] font-semibold text-[#5856d6] mb-1">สรุป</p>
                      <p className="text-[10px] text-[#86868b]">สัญญาเช่าอาคาร 3 ปี ค่าเช่า 45,000/เดือน มีข้อที่ไม่เป็นธรรม 3 จุด</p>
                    </div>
                    {/* Risks */}
                    <div className="bg-white rounded-lg p-2.5 border border-[#ff3b30]/10">
                      <p className="text-[10px] font-semibold text-[#ff3b30] mb-1">ข้อเสี่ยง 3 รายการ</p>
                      <div className="space-y-1">
                        <p className="text-[10px] text-[#1d1d1f]/70">ข้อ 5.3 — รับผิดเหตุสุดวิสัย (ผิดปกติ)</p>
                        <p className="text-[10px] text-[#1d1d1f]/70">ข้อ 8.2 — ค่าปรับ 5%/วัน (สูงเกิน)</p>
                        <p className="text-[10px] text-[#1d1d1f]/70">ข้อ 15 — ไม่มีเงื่อนไขคืนเงินประกัน</p>
                      </div>
                    </div>
                    {/* Recommendations */}
                    <div className="bg-white rounded-lg p-2.5 border border-[#2997ff]/10">
                      <p className="text-[10px] font-semibold text-[#2997ff] mb-1">ข้อเสนอแนะ</p>
                      <div className="space-y-1">
                        <div className="flex items-start gap-1"><Check size={9} className="text-[#2997ff] mt-0.5 shrink-0" /><p className="text-[10px] text-[#1d1d1f]/70">เพิ่ม Force Majeure clause</p></div>
                        <div className="flex items-start gap-1"><Check size={9} className="text-[#2997ff] mt-0.5 shrink-0" /><p className="text-[10px] text-[#1d1d1f]/70">ลดค่าปรับเป็น 1.5%/วัน</p></div>
                      </div>
                    </div>
                    {/* Related sections */}
                    <div className="flex flex-wrap gap-1">
                      {["ม.383 ป.พ.พ.", "ม.391 ป.พ.พ.", "พ.ร.บ.เช่า ม.4"].map(s => (
                        <span key={s} className="text-[9px] px-2 py-0.5 rounded-full bg-[#5856d6]/8 text-[#5856d6] font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium text-[10px]">AI</span>
                      <span className="text-[10px] text-[#86868b]">วิเคราะห์ใน 4.7 วินาที</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOWS — with inline mini-demos ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">4 ระบบ AI สำหรับงานกฎหมาย</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">ทุกอย่างพร้อมใช้งานทันที ไม่ต้อง coding</p>

          <div className="space-y-4">
            {[
              {
                icon: <BookOpen size={20} />, title: "วิเคราะห์สัญญาอัตโนมัติ", color: "#5856d6",
                desc: "Upload สัญญา → AI อ่านทั้งฉบับ → สรุปประเด็น ข้อเสี่ยง ข้อเสนอแนะ",
                saved: "3 ชม. → 5 นาที", cost: "~฿9/ฉบับ",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa] border border-black/[0.04]">
                    <div className="flex items-center gap-2 mb-3">
                      <FileText size={13} className="text-[#5856d6]" />
                      <span className="text-[11px] font-semibold text-[#1d1d1f]">ผลวิเคราะห์: สัญญาเช่า_2568.pdf</span>
                      <span className="text-[9px] bg-[#34c759]/10 text-[#34c759] rounded-full px-2 py-0.5 ml-auto">เสร็จแล้ว</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white rounded-lg p-2 text-center border border-black/[0.04]">
                        <p className="text-[16px] font-semibold text-[#ff3b30]">3</p>
                        <p className="text-[9px] text-[#86868b]">ข้อเสี่ยง</p>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center border border-black/[0.04]">
                        <p className="text-[16px] font-semibold text-[#2997ff]">5</p>
                        <p className="text-[9px] text-[#86868b]">ข้อเสนอแนะ</p>
                      </div>
                      <div className="bg-white rounded-lg p-2 text-center border border-black/[0.04]">
                        <p className="text-[16px] font-semibold text-[#5856d6]">4</p>
                        <p className="text-[9px] text-[#86868b]">มาตราอ้างอิง</p>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-2 bg-white rounded-lg p-2 border border-[#ff3b30]/10">
                        <AlertTriangle size={11} className="text-[#ff3b30] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-[#ff3b30]">ข้อ 5.3</span>
                          <p className="text-[10px] text-[#86868b]">รับผิดเหตุสุดวิสัย — ควรเพิ่ม Force Majeure</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-white rounded-lg p-2 border border-[#ff3b30]/10">
                        <AlertTriangle size={11} className="text-[#ff3b30] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-bold text-[#ff3b30]">ข้อ 8.2</span>
                          <p className="text-[10px] text-[#86868b]">ค่าปรับ 5%/วัน — ปกติ 0.5-1.5% ศาลอาจลดได้ (ม.383)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <Search size={20} />, title: "ค้นข้อกฎหมายด้วย AI (Legal RAG)", color: "#2997ff",
                desc: "ถามภาษาไทย → AI ค้นจากฐานข้อมูล พ.ร.บ. + คำพิพากษา → ตอบพร้อมอ้างมาตรา",
                saved: "30 นาที → 30 วิ", cost: "~฿1,500/เดือน",
                demo: (
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 bg-white border border-black/[0.08] rounded-xl px-3 py-2">
                      <Search size={12} className="text-[#2997ff]" />
                      <span className="text-[11px] text-[#1d1d1f]">PDPA บทลงโทษกรณีข้อมูลรั่ว</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { section: "ม.90", text: "ปรับไม่เกิน 5 ล้านบาท — ไม่ปฏิบัติตามคำสั่งคณะกรรมการ", tag: "โทษปรับ" },
                        { section: "ม.91", text: "จำคุกไม่เกิน 1 ปี หรือปรับไม่เกิน 1 ล้าน — ใช้ sensitive data โดยไม่ได้รับ consent", tag: "โทษอาญา" },
                      ].map((r, ri) => (
                        <div key={ri} className="bg-[#fafafa] rounded-lg p-2.5 border border-black/[0.04]">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold text-[#2997ff]">{r.section}</span>
                            <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-[#ff3b30]/10 text-[#ff3b30]">{r.tag}</span>
                          </div>
                          <p className="text-[10px] text-[#86868b]">{r.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-[9px] text-[#86868b] text-right">ค้นใน 2.1 วินาที | แหล่ง: พ.ร.บ. PDPA 2562</p>
                  </div>
                ),
              },
              {
                icon: <FilePen size={20} />, title: "ร่างเอกสารกฎหมาย", color: "#34c759",
                desc: "เลือก template → ใส่ข้อมูล → AI ร่างเอกสารพร้อมใช้ ทนาย review แก้ไขได้",
                saved: "2 ชม. → 10 นาที", cost: "~฿5/ฉบับ",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa] border border-black/[0.04]">
                    <div className="flex items-center gap-2 mb-3">
                      <FilePen size={13} className="text-[#34c759]" />
                      <span className="text-[11px] font-semibold text-[#1d1d1f]">หนังสือทวงถามให้ชำระหนี้</span>
                      <span className="text-[9px] bg-[#34c759]/10 text-[#34c759] rounded-full px-2 py-0.5 ml-auto">ร่างเสร็จ</span>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-black/[0.04] font-serif text-[11px] text-[#1d1d1f]/80 leading-relaxed space-y-1.5">
                      <p className="text-right text-[10px]">วันที่ 15 มีนาคม 2568</p>
                      <p className="font-semibold">เรื่อง: ขอให้ชำระหนี้ตามสัญญา</p>
                      <p>เรียน คุณสมชาย ใจดี</p>
                      <p className="text-[10px]">ตามที่ท่านได้ทำสัญญากู้ยืมเงินกับ บริษัท ABC จำกัด เมื่อวันที่ 1 มกราคม 2568 จำนวน <span className="font-semibold">500,000 บาท</span> กำหนดชำระคืนภายใน 60 วัน...</p>
                      <p className="text-[10px] text-[#86868b]">[...ร่างอัตโนมัติ ทนาย review ก่อนส่ง]</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {["หนังสือทวงถาม", "สัญญาเช่า", "MOU", "NDA", "หนังสือมอบอำนาจ"].map(t => (
                        <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-[#34c759]/8 text-[#34c759] font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                icon: <ClipboardCheck size={20} />, title: "ตรวจ PDPA Compliance", color: "#af52de",
                desc: "AI ตรวจเว็บไซต์ แอป เอกสาร ว่าเป็นไปตาม PDPA → รายงาน ผ่าน/ไม่ผ่าน + action plan",
                saved: "1 วัน → 30 นาที", cost: "~฿15/ครั้ง",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa] border border-black/[0.04]">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield size={13} className="text-[#af52de]" />
                      <span className="text-[11px] font-semibold text-[#1d1d1f]">PDPA Compliance Report</span>
                      <span className="text-[9px] bg-[#ff9500]/10 text-[#ff9500] rounded-full px-2 py-0.5 ml-auto">72% ผ่าน</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { label: "Privacy Policy ครบถ้วน", pass: true },
                        { label: "Consent Form ถูกต้อง", pass: true },
                        { label: "Cookie Banner มี opt-out", pass: true },
                        { label: "Data Retention Policy", pass: false, note: "ไม่มี — ต้องจัดทำ" },
                        { label: "Data Breach Protocol", pass: false, note: "ไม่มี — ต้องแจ้งภายใน 72 ชม." },
                        { label: "DPO แต่งตั้ง", pass: true },
                        { label: "DPIA Assessment", pass: false, note: "ยังไม่ได้ทำ" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-black/[0.04]">
                          {item.pass ? (
                            <div className="w-4 h-4 rounded-full bg-[#34c759] flex items-center justify-center shrink-0"><Check size={10} className="text-white" /></div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-[#ff3b30] flex items-center justify-center shrink-0"><X size={10} className="text-white" /></div>
                          )}
                          <span className="text-[10px] text-[#1d1d1f] flex-1">{item.label}</span>
                          {item.note && <span className="text-[9px] text-[#ff3b30]">{item.note}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
            ].map((wf, i) => (
              <motion.div key={wf.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="apple-card overflow-hidden">
                <button onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)} className="w-full text-left p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: wf.color + "10", color: wf.color }}>{wf.icon}</div>
                    <div className="flex-1"><h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{wf.title}</h3><p className="text-[13px] text-[#86868b]">{wf.desc}</p></div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden sm:block text-right"><p className="text-[11px] font-medium" style={{ color: wf.color }}>{wf.saved}</p><p className="text-[10px] text-[#86868b]">{wf.cost}</p></div>
                      <motion.div animate={{ rotate: expandedWorkflow === i ? 180 : 0 }}><ChevronDown size={16} className="text-[#d2d2d7]" /></motion.div>
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedWorkflow === i && wf.demo && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="px-5 pb-5">{wf.demo}</div></motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DASHBOARD MOCKUP ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">Dashboard ที่คุณได้</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">ดูทุกอย่างในที่เดียว</p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.05]">
            {/* macOS chrome */}
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">Cloud AI Legal Dashboard</span>
            </div>
            <div className="p-6">
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "คดีที่ active", value: "23", change: "+3 เดือนนี้", color: "#5856d6" },
                  { label: "สัญญาวิเคราะห์แล้ว", value: "147", change: "+12 สัปดาห์นี้", color: "#2997ff" },
                  { label: "Compliance Score", value: "89%", change: "+7%", color: "#34c759" },
                  { label: "เวลาที่ประหยัด", value: "340 ชม.", change: "เดือนนี้", color: "#ff9500" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-[#fafafa]">
                    <p className="text-[10px] text-[#86868b]">{s.label}</p>
                    <p className="text-[18px] font-semibold text-[#1d1d1f]">{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: s.color }}>{s.change}</p>
                  </div>
                ))}
              </div>
              {/* Recent analyses */}
              <div className="mb-4">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-2">สัญญาที่วิเคราะห์ล่าสุด</p>
              </div>
              <div className="space-y-1.5">
                {[
                  { id: "C-0234", name: "สัญญาเช่าอาคาร_เทคสตาร์ท", risk: "ปานกลาง-สูง", riskColor: "#ff9500", status: "รอ review", sc: "#ff9500" },
                  { id: "C-0233", name: "NDA_บริษัท XYZ", risk: "ต่ำ", riskColor: "#34c759", status: "approve แล้ว", sc: "#34c759" },
                  { id: "C-0232", name: "สัญญาจ้างผลิต_ABC Corp", risk: "สูง", riskColor: "#ff3b30", status: "แก้ไข", sc: "#ff3b30" },
                  { id: "C-0231", name: "MOU ร่วมทุน_พาร์ทเนอร์", risk: "ต่ำ", riskColor: "#34c759", status: "เสร็จ", sc: "#34c759" },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-mono text-[#86868b]">{o.id}</span>
                      <div>
                        <p className="text-[12px] font-medium text-[#1d1d1f]">{o.name}</p>
                        <p className="text-[10px]" style={{ color: o.riskColor }}>ความเสี่ยง: {o.risk}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: o.sc + "12", color: o.sc }}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING with ROI ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับสำนักงานกฎหมาย</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Solo Lawyer", price: "฿19,900", monthly: "฿1,000-2,500", color: "#2997ff", features: ["Contract analysis (10/เดือน)", "Legal RAG 1 ฐานข้อมูล", "Document draft 3 templates", "PDPA basic checklist", "Support 30 วัน"], best: "ทนายเดี่ยว / ที่ปรึกษา" },
              { name: "Law Firm", price: "฿49,900", monthly: "฿3,000-8,000", color: "#5856d6", badge: "แนะนำ", features: ["Contract analysis ไม่จำกัด", "Legal RAG หลายฐานข้อมูล", "Document draft ทุก template", "PDPA compliance เต็มรูปแบบ", "Dashboard + analytics", "Training ทีม 2 ชม.", "Support 60 วัน"], best: "สำนักงาน 3-15 คน" },
              { name: "Enterprise", price: "฿89,900", monthly: "฿5,000-15,000", color: "#af52de", features: ["ทุกอย่างใน Law Firm", "Custom template development", "API integration กับระบบที่มี", "Multi-user + permissions", "Case management system", "On-site training 1 วัน", "Priority support 90 วัน"], best: "สำนักงาน 15+ คน / in-house" },
            ].map((plan) => (
              <div key={plan.name} className={`apple-card p-6 ${plan.badge ? "ring-2 ring-[#5856d6]/20" : ""}`}>
                {plan.badge && <div className="text-center mb-3"><span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>{plan.badge}</span></div>}
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] text-center">{plan.name}</h3>
                <p className="text-[32px] font-semibold text-center mt-1 mb-0.5" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-[11px] text-[#86868b] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                <p className="text-[11px] text-[#86868b] text-center mb-5 pb-5 border-b border-black/[0.04]">+ {plan.monthly}/เดือน</p>
                <div className="space-y-2 mb-5">{plan.features.map((f) => <div key={f} className="flex items-start gap-2"><Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} /><span className="text-[12px] text-[#86868b]">{f}</span></div>)}</div>
                <p className="text-[11px] text-[#86868b] mb-3">เหมาะกับ: {plan.best}</p>
                <a href="/#contact" className="block text-center text-[13px] font-medium py-2.5 rounded-full" style={plan.badge ? { background: plan.color, color: "#fff" } : { background: "#f5f5f7" }}>เริ่มต้นใช้งาน</a>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-6 mt-8">
            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">คุ้มค่าแค่ไหน?</h3>
            <div className="grid sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#ff3b30]/5">
                <p className="text-[11px] text-[#86868b]">จ้างทนายจูเนียร์</p>
                <p className="text-[20px] font-semibold text-[#ff3b30]">฿25,000</p>
                <p className="text-[10px] text-[#86868b]">/เดือน</p>
              </div>
              <div className="p-4 rounded-xl bg-[#34c759]/5">
                <p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p>
                <p className="text-[20px] font-semibold text-[#34c759]">฿3,000</p>
                <p className="text-[10px] text-[#86868b]">/เดือน</p>
              </div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5">
                <p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p>
                <p className="text-[20px] font-semibold text-[#2997ff]">฿264,000</p>
                <p className="text-[10px] text-[#86868b]">ลด 88%</p>
              </div>
              <div className="p-4 rounded-xl bg-[#5856d6]/5">
                <p className="text-[11px] text-[#86868b]">เวลาที่ได้คืน</p>
                <p className="text-[20px] font-semibold text-[#5856d6]">340 ชม.</p>
                <p className="text-[10px] text-[#86868b]">/เดือน</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยงานกฎหมาย?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าสำนักงานคุณทำงานด้านไหน เราออกแบบระบบให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
