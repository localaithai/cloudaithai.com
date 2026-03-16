"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Clock, Pill, FileText, Calendar, ChevronDown, Check, BarChart3, Shield, AlertTriangle, ClipboardList } from "lucide-react";

/* ─── HEALTHCARE PAGE — Every section has industry-specific UI ─── */

export default function HealthcareSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <HeartPulse size={14} className="text-[#2997ff]" />
              <span className="text-[12px] font-medium text-[#2997ff]">Healthcare AI Solution</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">คลินิก & โรงพยาบาล</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              จัดคิวนัดหมายอัตโนมัติ ค้นข้อมูลยาทันที สรุปเวชระเบียน เคลมประกัน — ลดงาน admin 80%
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — with real UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่คลินิก & โรงพยาบาลเจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Patient queue mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">คิวผู้ป่วยวันนี้</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">20 คนรอ</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { name: "คุณสมศรี", time: "08:30", wait: "52 นาที" },
                  { name: "คุณวิชัย", time: "08:45", wait: "45 นาที" },
                  { name: "คุณนภา", time: "09:00", wait: "38 นาที" },
                  { name: "คุณพงษ์", time: "09:15", wait: "30 นาที" },
                  { name: "คุณมาลี", time: "09:30", wait: "25 นาที" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#e5e5ea] shrink-0 flex items-center justify-center text-[9px] text-[#86868b]">{i + 1}</div>
                      <div><p className="text-[12px] text-[#1d1d1f] font-medium">{p.name}</p><p className="text-[9px] text-[#86868b]">นัด {p.time}</p></div>
                    </div>
                    <span className="text-[10px] text-[#ff3b30] font-medium">รอ {p.wait}</span>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <p className="text-[11px] text-[#ff3b30] font-medium">เฉลี่ยรอ 45 นาที — ผู้ป่วยไม่พอใจ ย้ายคลินิก</p>
                </div>
              </div>
            </motion.div>

            {/* Drug interaction lookup mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">ค้นหา Drug Interaction</span>
                <span className="text-[11px] text-[#ff9500] font-medium">ใช้เวลา 8 นาที</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="p-3 rounded-lg bg-[#fafafa]">
                  <div className="flex items-center gap-2 mb-2">
                    <Pill size={14} className="text-[#ff9500]" />
                    <span className="text-[12px] font-medium text-[#1d1d1f]">Warfarin + Aspirin</span>
                  </div>
                  <div className="text-[11px] text-[#86868b] space-y-1">
                    <p>กำลังค้นหาใน... MIMS Thailand</p>
                    <p>กำลังค้นหาใน... Drug Interaction Checker</p>
                    <p>กำลังค้นหาใน... UpToDate</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#ff9500]">
                  <Clock size={12} />
                  <span>เปิดหนังสือ 3 เล่ม + เว็บ 2 เจ้า = 8 นาที/เคส</span>
                </div>
                <p className="text-[11px] text-[#ff3b30] text-center font-medium">คิวยาวขึ้นเรื่อย ๆ เพราะตรวจช้า</p>
              </div>
            </motion.div>

            {/* Paperwork pile mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5856d6]/8 flex items-center justify-center shrink-0 text-[#5856d6]"><FileText size={20} /></div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">เอกสารกองเป็นภูเขา</h3>
                  <p className="text-[12px] text-[#86868b]">ใบส่งตัว + ใบรับรองแพทย์ + เวชระเบียน + เคลมประกัน = <span className="text-[#5856d6] font-medium">พิมพ์มือ 3 ชม./วัน</span></p>
                  <div className="flex gap-1.5 mt-2 flex-wrap">
                    {["ใบส่งตัว", "ใบรับรองแพทย์", "เคลมประกัน", "สรุป OPD"].map(d => (
                      <span key={d} className="text-[9px] px-2 py-0.5 rounded bg-[#5856d6]/8 text-[#5856d6] font-medium">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Missed follow-ups mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff3b30]/8 flex items-center justify-center shrink-0 text-[#ff3b30]"><AlertTriangle size={20} /></div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">ผู้ป่วยหายไป ไม่มา follow-up</h3>
                  <p className="text-[12px] text-[#86868b] mb-2">โทรติดตามไม่ทัน ผู้ป่วยลืมนัด <span className="text-[#ff3b30] font-medium">30% ไม่มาตามนัด</span></p>
                  <div className="space-y-1">
                    {[
                      { name: "คุณสุดา — เบาหวาน", date: "เลยนัด 5 วัน" },
                      { name: "คุณประเสริฐ — ความดัน", date: "เลยนัด 3 วัน" },
                      { name: "คุณวรรณา — ไทรอยด์", date: "เลยนัด 7 วัน" },
                    ].map((p, i) => (
                      <div key={i} className="flex items-center justify-between text-[10px]">
                        <span className="text-[#1d1d1f]">{p.name}</span>
                        <span className="text-[#ff3b30] font-medium">{p.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side chat mockups ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">จากโทรไม่ติด เป็นจองนัดทันที</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">โทรติดต่อคลินิก — สายไม่ว่าง</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">อยากนัดหมอวันเสาร์ค่ะ</div>
                  </div>
                  <div className="text-center py-4">
                    <div className="inline-flex items-center gap-2 text-[#d2d2d7]">
                      <span className="text-[20px]">📞</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] animate-pulse" style={{ animationDelay: "0.2s" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] animate-pulse" style={{ animationDelay: "0.4s" }} />
                      </div>
                    </div>
                    <p className="text-[11px] text-[#d2d2d7] mt-2">สายไม่ว่าง...</p>
                    <p className="text-[10px] text-[#d2d2d7]">โทร 3 ครั้งแล้ว ไม่มีคนรับ</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">ช่างเถอะ ไปคลินิกอื่นดีกว่า</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">LINE Chat — จองนัดทันที 24/7</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#2997ff] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[70%]">อยากนัดหมอวันเสาร์ค่ะ</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[85%]">
                      <p className="font-medium mb-1">คลินิกสุขภาพดี</p>
                      <p className="text-[#86868b]">วันเสาร์ที่ 21 มี.ค. ว่างค่ะ:</p>
                      <div className="flex flex-wrap gap-1 mt-1.5 mb-2">
                        {["09:00", "10:30", "13:00", "14:30", "16:00"].map(t => (
                          <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] font-medium">{t}</span>
                        ))}
                      </div>
                      <p className="text-[#2997ff]">เลือกเวลาได้เลยค่ะ</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#2997ff] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm">10:30 ค่ะ</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[85%]">
                      <p>จองสำเร็จ! เสาร์ 21 มี.ค. 10:30 น.</p>
                      <p className="text-[#86868b] mt-1">นพ.สมชาย อายุรกรรม ห้อง 3</p>
                      <p className="text-[#86868b]">จะแจ้งเตือนล่วงหน้า 1 วันค่ะ</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#86868b] px-2 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium">AI</span> 2.1 วินาที
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
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">5 ระบบอัตโนมัติ</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">ลดงาน admin ให้บุคลากรมีเวลาดูแลผู้ป่วย</p>

          <div className="space-y-4">
            {[
              {
                icon: <Calendar size={20} />, title: "Appointment Bot", color: "#34c759", desc: "ผู้ป่วยนัดหมายผ่าน LINE → AI จัดคิวอัตโนมัติ 24/7", saved: "ลดโทร 90%", cost: "~฿500/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <p className="text-[11px] font-medium text-[#34c759] mb-2">LINE Chat — นัดหมาย</p>
                    <div className="space-y-2">
                      <div className="flex justify-end"><div className="bg-[#34c759] text-white text-[10px] px-2.5 py-1.5 rounded-full">นัดหมอวันพุธบ่ายได้ไหมคะ</div></div>
                      <div className="flex justify-start">
                        <div className="bg-white text-[10px] px-2.5 py-1.5 rounded-lg shadow-sm">
                          <p className="text-[#1d1d1f]">พุธที่ 19 มี.ค. ว่างค่ะ:</p>
                          <div className="flex gap-1 mt-1">
                            {["13:00", "14:00", "15:30"].map(t => <span key={t} className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] text-[9px] font-medium">{t}</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end"><div className="bg-[#34c759] text-white text-[10px] px-2.5 py-1.5 rounded-full">14:00 ค่ะ</div></div>
                      <div className="flex justify-start"><div className="bg-white text-[10px] px-2.5 py-1.5 rounded-lg shadow-sm text-[#34c759] font-medium">จองสำเร็จ! พุธ 19 มี.ค. 14:00 น. นพ.สมชาย ห้อง 3</div></div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <Pill size={20} />, title: "Drug Info RAG", color: "#ff9500", desc: "ค้นข้อมูลยา ขนาด ข้อห้าม drug interaction ทันทีจาก database", saved: "8นาที→3วินาที", cost: "~฿400/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <div className="p-3 rounded-lg bg-white shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[12px] font-semibold text-[#1d1d1f]">Metformin 500mg</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759] font-medium">First-line DM</span>
                      </div>
                      <div className="space-y-2 text-[10px]">
                        <div><span className="text-[#86868b]">Dosage:</span> <span className="text-[#1d1d1f]">500-2000 mg/day แบ่ง 2-3 มื้อ</span></div>
                        <div><span className="text-[#86868b]">Contraindication:</span> <span className="text-[#ff3b30]">eGFR {"<"} 30, hepatic impairment, heart failure (NYHA IV)</span></div>
                        <div className="p-2 rounded bg-[#ff9500]/5 border border-[#ff9500]/10">
                          <p className="text-[#ff9500] font-medium">Drug Interactions:</p>
                          <p className="text-[#86868b] mt-0.5">Warfarin — เพิ่มฤทธิ์ anticoagulant</p>
                          <p className="text-[#86868b]">Alcohol — เพิ่มเสี่ยง lactic acidosis</p>
                        </div>
                        <div><span className="text-[#86868b]">Side effects:</span> <span className="text-[#1d1d1f]">คลื่นไส้ ท้องเสีย (ช่วงแรก)</span></div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <ClipboardList size={20} />, title: "Patient History Summary", color: "#5856d6", desc: "AI สรุปประวัติผู้ป่วย ยาที่ใช้ ผลแลป ในการ์ดเดียว", saved: "อ่าน 10 หน้า→1 การ์ด", cost: "~฿300/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <div className="p-3 rounded-lg bg-white shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-[12px] font-semibold text-[#1d1d1f]">คุณสมศรี วงศ์ดี</p>
                          <p className="text-[9px] text-[#86868b]">หญิง 58 ปี | HN: 12345</p>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#5856d6]/10 text-[#5856d6] font-medium">AI Summary</span>
                      </div>
                      <div className="space-y-1.5 text-[10px]">
                        <div className="p-1.5 rounded bg-[#fafafa]">
                          <span className="text-[#86868b]">โรคประจำตัว:</span> <span className="text-[#1d1d1f]">DM type 2, HT, Dyslipidemia</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#fafafa]">
                          <span className="text-[#86868b]">ยาปัจจุบัน:</span> <span className="text-[#1d1d1f]">Metformin 500mg, Amlodipine 5mg, Simvastatin 20mg</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#fafafa]">
                          <span className="text-[#86868b]">Lab ล่าสุด:</span> <span className="text-[#1d1d1f]">HbA1c 7.2%, FBS 142, Cr 0.9</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#ff9500]/5">
                          <span className="text-[#ff9500] font-medium">Note:</span> <span className="text-[#1d1d1f]">HbA1c สูงขึ้นจาก 6.8% ควรปรับยา</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <Shield size={20} />, title: "Insurance Claim Auto-fill", color: "#2997ff", desc: "AI กรอกฟอร์มเคลมประกันอัตโนมัติจากเวชระเบียน", saved: "20นาที→2นาที", cost: "~฿300/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <div className="p-3 rounded-lg bg-white shadow-sm">
                      <p className="text-[11px] font-semibold text-[#2997ff] mb-2">ฟอร์มเคลมประกัน — Auto-filled</p>
                      <div className="space-y-1.5 text-[10px]">
                        {[
                          { label: "ชื่อผู้ป่วย", value: "นางสมศรี วงศ์ดี" },
                          { label: "เลขกรมธรรม์", value: "AIA-2024-XXXXX" },
                          { label: "วินิจฉัย", value: "E11.9 Type 2 DM without complications" },
                          { label: "ICD-10", value: "E11.9, I10, E78.5" },
                          { label: "ค่ารักษา", value: "฿2,450" },
                        ].map(f => (
                          <div key={f.label} className="flex items-center gap-2">
                            <span className="text-[#86868b] w-20 shrink-0">{f.label}:</span>
                            <span className="text-[#1d1d1f] flex-1 px-2 py-0.5 rounded bg-[#2997ff]/5 font-medium">{f.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-[9px] text-[#34c759]">
                        <Check size={10} />
                        <span>AI กรอกจากเวชระเบียนอัตโนมัติ — ตรวจสอบก่อนส่ง</span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <BarChart3 size={20} />, title: "Daily Clinic Report", color: "#af52de", desc: "ทุกเช้า AI สรุปสถิติคลินิก ส่ง LINE ให้ผู้บริหาร", saved: "ไม่ต้องทำรายงานเอง", cost: "~฿200/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <div className="p-3 rounded-lg bg-white shadow-sm">
                      <p className="text-[11px] font-semibold text-[#af52de] mb-2">รายงานประจำวัน — 15 มี.ค. 2026</p>
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        {[
                          { label: "ผู้ป่วยทั้งหมด", value: "48" },
                          { label: "รอเฉลี่ย", value: "12 นาที" },
                          { label: "รายได้", value: "฿67,200" },
                          { label: "Satisfaction", value: "4.8/5" },
                        ].map(s => (
                          <div key={s.label} className="p-1.5 rounded bg-[#fafafa] text-center">
                            <p className="text-[9px] text-[#86868b]">{s.label}</p>
                            <p className="text-[12px] font-semibold text-[#1d1d1f]">{s.value}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-[9px] text-[#86868b]">Top: อายุรกรรม 18 คน | ผิวหนัง 12 คน | กระดูก 8 คน</p>
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
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">Dashboard คลินิกของคุณ</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">ดูทุกอย่างในที่เดียว</p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.05]">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">Healthcare AI Dashboard</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "นัดหมายวันนี้", value: "32", change: "จอง LINE 78%", color: "#2997ff" },
                  { label: "ตรวจแล้ว", value: "24/32", change: "75%", color: "#34c759" },
                  { label: "เวลารอเฉลี่ย", value: "12 นาที", change: "-73%", color: "#5856d6" },
                  { label: "Satisfaction", value: "4.8", change: "★★★★★", color: "#ff9500" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-[#fafafa]">
                    <p className="text-[10px] text-[#86868b]">{s.label}</p>
                    <p className="text-[18px] font-semibold text-[#1d1d1f]">{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: s.color }}>{s.change}</p>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-2">นัดหมายถัดไป</p>
                <div className="space-y-1.5">
                  {[
                    { time: "14:00", name: "คุณสมศรี", dept: "อายุรกรรม — นพ.สมชาย", room: "ห้อง 3", sc: "#2997ff" },
                    { time: "14:30", name: "คุณวิชัย", dept: "กระดูก — นพ.ประเสริฐ", room: "ห้อง 5", sc: "#ff9500" },
                    { time: "15:00", name: "คุณนภา", dept: "ผิวหนัง — พญ.มาลี", room: "ห้อง 2", sc: "#5856d6" },
                    { time: "15:00", name: "คุณแก้ว", dept: "อายุรกรรม — นพ.สมชาย", room: "ห้อง 3", sc: "#34c759" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-mono text-[#86868b]">{a.time}</span>
                        <div><p className="text-[12px] font-medium text-[#1d1d1f]">{a.name}</p><p className="text-[10px] text-[#86868b]">{a.dept}</p></div>
                      </div>
                      <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: a.sc + "12", color: a.sc }}>{a.room}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING with ROI ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับสถานพยาบาล</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Clinic", price: "฿19,900", monthly: "฿800-2,000", color: "#34c759", features: ["Appointment bot (LINE)", "Drug info RAG", "Patient summary AI", "3 workflows", "Support 30 วัน"], best: "คลินิกเดี่ยว 1-3 หมอ" },
              { name: "Hospital", price: "฿49,900", monthly: "฿3,000-6,000", color: "#2997ff", badge: "แนะนำ", features: ["ทุกอย่างใน Clinic", "Insurance claim auto-fill", "Daily report dashboard", "Multi-department", "10 workflows", "Training 4 ชม."], best: "คลินิกรวม / รพ.ขนาดเล็ก" },
              { name: "Enterprise", price: "฿89,900", monthly: "฿5,000-12,000", color: "#af52de", features: ["ทุกอย่างใน Hospital", "เชื่อมต่อ HIS/EMR", "Custom AI models", "BI dashboard ครบ", "Workflow ไม่จำกัด", "Training on-site"], best: "โรงพยาบาลขนาดกลาง-ใหญ่" },
            ].map((plan) => (
              <div key={plan.name} className={`apple-card p-6 ${plan.badge ? "ring-2 ring-[#2997ff]/20" : ""}`}>
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

          {/* ROI */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-6 mt-8">
            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">คุ้มค่าแค่ไหน?</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#ff3b30]/5"><p className="text-[11px] text-[#86868b]">จ้าง admin + โทรติดตาม</p><p className="text-[20px] font-semibold text-[#ff3b30]">฿18,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#34c759]/5"><p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p><p className="text-[20px] font-semibold text-[#34c759]">฿2,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5"><p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p><p className="text-[20px] font-semibold text-[#2997ff]">฿192,000</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยดูแลคลินิก?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าคลินิกคุณมีกี่หมอ ดูกี่คนต่อวัน เราออกแบบ workflow ให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
