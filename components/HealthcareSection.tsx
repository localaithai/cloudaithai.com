"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse, Clock, Pill, FileText, Users, Calendar,
  Search, ClipboardList, Shield, BarChart3, ArrowRight,
  CheckCircle2, XCircle, ChevronDown, MessageSquare,
  Bot, Stethoscope, Activity, AlertTriangle, Workflow,
  BrainCircuit, Syringe, Hospital, UserCheck
} from "lucide-react";

/* ─── Pain Points ─── */
const painPoints = [
  {
    icon: <Clock size={20} />,
    text: "ผู้ป่วยรอนาน",
    detail: "ผู้ป่วย walk-in รอคิวเฉลี่ย 45-90 นาที เพราะระบบนัดหมายไม่มีประสิทธิภาพ จัดคิวมือ ซ้ำซ้อน ผู้ป่วยไม่พอใจ ย้ายไปคลินิกอื่น",
    color: "#ff3b30",
  },
  {
    icon: <Pill size={20} />,
    text: "ค้นข้อมูลยาไม่ทัน",
    detail: "แพทย์ต้องค้น drug interaction, ขนาดยา, ข้อห้ามใช้ จากหลาย source ใช้เวลา 5-10 นาที/เคส ทำให้ตรวจช้า คิวยาวขึ้น",
    color: "#ff9500",
  },
  {
    icon: <FileText size={20} />,
    text: "เอกสารเยอะมาก",
    detail: "ใบส่งตัว, ใบรับรองแพทย์, สรุปเวชระเบียน, เอกสารเคลมประกัน ทุกอย่างต้องพิมพ์มือ ผิดพลาดบ่อย เสียเวลาแก้ไข",
    color: "#5856d6",
  },
  {
    icon: <Users size={20} />,
    text: "ซ้ำซ้อนงาน admin",
    detail: "พยาบาลเสียเวลา 40% ไปกับงาน admin — บันทึกข้อมูล, นัดหมาย, โทรติดตาม แทนที่จะได้ดูแลผู้ป่วย",
    color: "#2997ff",
  },
];

/* ─── 5 Automation Workflows ─── */
const workflows = [
  {
    icon: <Calendar size={22} />,
    title: "Patient Appointment Bot",
    subtitle: "ผู้ป่วยนัดหมายผ่าน LINE → ระบบจัดคิวอัตโนมัติ",
    color: "#30d158",
    steps: [
      "ผู้ป่วยส่งข้อความนัดหมายผ่าน LINE OA ของคลินิก/รพ.",
      "n8n รับ webhook → Flowise วิเคราะห์ข้อความ (แผนก, อาการ, วัน-เวลาที่ต้องการ)",
      "AI เช็คตารางแพทย์จาก Google Calendar / HIS ว่าว่างเมื่อไร",
      "เสนอ slot ที่ว่าง 3 ช่วง ให้ผู้ป่วยเลือก",
      "ยืนยันนัด → สร้าง appointment ในระบบ + ส่ง reminder ก่อน 24 ชม.",
      "วันนัด → ส่ง QR code check-in ให้ผู้ป่วย ไม่ต้องรอคิว",
    ],
    tools: ["n8n", "Flowise", "LINE Messaging API", "Google Calendar"],
    models: ["Gemini 2.5 Flash (จัดคิว)", "GPT-4.1 (เข้าใจอาการ)"],
    cost: "฿500-1,200/เดือน",
    result: "ลดเวลารอคิว 60% ลด no-show 40% ด้วย reminder อัตโนมัติ",
  },
  {
    icon: <Search size={22} />,
    title: "Drug Info Lookup (RAG)",
    subtitle: "แพทย์ถามชื่อยา → AI ค้น interaction + ขนาดยาทันที",
    color: "#2997ff",
    steps: [
      "แพทย์พิมพ์ชื่อยา หรือถามเป็นภาษาธรรมชาติ เช่น 'ยาลดไขมันกินกับ warfarin ได้ไหม'",
      "Flowise RAG ค้นจากฐานข้อมูลยา (MIMS Thailand, FDA, Lexicomp)",
      "AI สรุป: drug interaction, contraindication, ขนาดยาตาม GFR/น้ำหนัก",
      "แสดงผลพร้อม reference + level of evidence",
      "บันทึก query log เพื่อ audit trail ตาม HA standard",
      "ถ้า critical interaction → แจ้งเตือนแพทย์ทันที พร้อมแนะนำยาทดแทน",
    ],
    tools: ["Flowise", "Qdrant Vector DB", "n8n", "HIS API"],
    models: ["GPT-4.1 (medical reasoning)", "Gemini Flash (quick lookup)"],
    cost: "฿800-2,000/เดือน",
    result: "ค้นข้อมูลยาจาก 5-10 นาที เหลือ 10 วินาที ลด medication error 35%",
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Patient History Summary",
    subtitle: "เวชระเบียน 50 หน้า → AI สรุปให้ 1 หน้า",
    color: "#af52de",
    steps: [
      "แพทย์เปิดแฟ้มผู้ป่วย ส่งเวชระเบียนเข้าระบบ (PDF/scan/HIS data)",
      "AI OCR + extract ข้อมูลสำคัญ: diagnosis, medications, lab results, allergies",
      "สร้าง clinical summary แบ่งตาม timeline: อดีต → ปัจจุบัน",
      "Highlight ข้อมูลสำคัญ: allergies (แพ้ยา), chronic diseases, recent labs ที่ผิดปกติ",
      "สร้าง problem list + active medication list อัตโนมัติ",
      "แพทย์ review + approve → บันทึกเข้า HIS เป็น structured data",
    ],
    tools: ["n8n", "Flowise", "OCR API", "HIS Integration"],
    models: ["GPT-4.1 (medical summary)", "Claude Sonnet (document analysis)"],
    cost: "฿1,200-3,000/เดือน",
    result: "แพทย์อ่านประวัติผู้ป่วยจาก 15 นาที เหลือ 2 นาที ดูแลผู้ป่วยได้มากขึ้น",
  },
  {
    icon: <Shield size={22} />,
    title: "Insurance Claim Processing",
    subtitle: "เคลมประกัน → AI กรอกเอกสาร + ส่งอัตโนมัติ",
    color: "#ff9500",
    steps: [
      "พยาบาลบันทึกข้อมูลการรักษาเข้าระบบ HIS ตามปกติ",
      "n8n trigger → AI ดึงข้อมูลการรักษา + รหัส ICD-10 + ค่าใช้จ่าย",
      "AI กรอกฟอร์มเคลมประกันอัตโนมัติ ตาม format ของแต่ละบริษัทประกัน",
      "ตรวจสอบความครบถ้วน: เอกสารครบไหม, รหัสถูกไหม, ค่าใช้จ่ายตรงกันไหม",
      "ส่ง pre-authorization request ไปบริษัทประกันผ่าน API/email",
      "Track สถานะเคลม → แจ้ง admin ถ้ามี rejection ต้องแก้ไข",
    ],
    tools: ["n8n", "Google Sheets", "Email API", "HIS Integration"],
    models: ["GPT-4.1 (form filling)", "Gemini Flash (ICD-10 coding)"],
    cost: "฿1,000-2,500/เดือน",
    result: "ลดเวลาทำเคลมจาก 30 นาที เหลือ 5 นาที rejection rate ลด 50%",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Daily Report Generation",
    subtitle: "ทุกเช้า → AI สรุปรายงานประจำวันให้ผู้บริหาร",
    color: "#5856d6",
    steps: [
      "n8n ดึงข้อมูลจาก HIS ทุกเช้า 6:00 น. — OPD visits, IPD census, revenue, lab pending",
      "รวมข้อมูลทุกแผนก: จำนวนผู้ป่วย, bed occupancy, average waiting time",
      "AI วิเคราะห์ trend: เปรียบเทียบกับสัปดาห์ก่อน + เดือนก่อน",
      "สร้าง executive summary: highlight ประเด็นสำคัญ + anomaly ที่ต้องดูแล",
      "สร้าง dashboard visual summary ส่งเข้า LINE group ผู้บริหาร",
      "ถ้ามี KPI ที่ต่ำกว่า target → แจ้งเตือน + แนะนำ action",
    ],
    tools: ["n8n", "Google Sheets", "Looker Studio", "LINE API"],
    models: ["Gemini Flash (data summary)", "GPT-4.1 (analysis + recommendation)"],
    cost: "฿800-1,800/เดือน",
    result: "ผู้บริหารเห็นภาพรวม รพ. ทุกเช้าภายใน 2 นาที ตัดสินใจได้เร็วขึ้น",
  },
];

/* ─── Before/After ─── */
const comparisons = [
  {
    aspect: "นัดหมายผู้ป่วย",
    before: "โทรนัด ถือสาย 10 นาที จดมือ ลืมบ่อย",
    after: "นัดผ่าน LINE 24/7 ยืนยันทันที มี reminder",
    saving: "ลด 60%",
  },
  {
    aspect: "ค้นข้อมูลยา",
    before: "เปิดหนังสือ/เว็บ 3-4 แหล่ง ใช้เวลา 5-10 นาที",
    after: "AI ค้นจากฐานข้อมูลยา ได้คำตอบใน 10 วินาที",
    saving: "เร็วขึ้น 30x",
  },
  {
    aspect: "สรุปเวชระเบียน",
    before: "แพทย์อ่านแฟ้ม 50 หน้า ใช้เวลา 15 นาที/ราย",
    after: "AI สรุปให้ 1 หน้า พร้อม highlight จุดสำคัญ",
    saving: "เร็วขึ้น 7x",
  },
  {
    aspect: "เคลมประกัน",
    before: "พิมพ์ฟอร์มมือ 30 นาที/ราย ผิดบ่อย ถูก reject",
    after: "AI กรอกฟอร์มอัตโนมัติ ตรวจสอบก่อนส่ง",
    saving: "ลด 83%",
  },
  {
    aspect: "รายงานประจำวัน",
    before: "admin รวบรวมข้อมูล 2 ชม. ทุกเช้า",
    after: "AI สรุป + ส่ง LINE ให้ผู้บริหารทุกเช้า 7 โมง",
    saving: "อัตโนมัติ",
  },
  {
    aspect: "ติดตามผู้ป่วย",
    before: "โทรติดตามได้ 20 ราย/วัน พยาบาลไม่ว่าง",
    after: "AI ส่ง follow-up ผ่าน LINE ทุกราย อัตโนมัติ",
    saving: "ครบ 100%",
  },
];

/* ─── Pricing Packages ─── */
const pricingPackages = [
  {
    name: "Clinic",
    price: "฿19,900",
    period: "/เดือน",
    desc: "สำหรับคลินิกเวชกรรม, ทันตกรรม, ผิวหนัง",
    color: "#30d158",
    features: [
      "Appointment Bot (LINE OA)",
      "Drug Info Lookup (RAG)",
      "Patient Follow-up อัตโนมัติ",
      "รายงานสรุปประจำวัน",
      "รองรับ 500 ผู้ป่วย/เดือน",
      "Support ผ่าน LINE ในเวลาทำการ",
    ],
    highlight: false,
  },
  {
    name: "Hospital",
    price: "฿49,900",
    period: "/เดือน",
    desc: "สำหรับโรงพยาบาลขนาดเล็ก-กลาง",
    color: "#2997ff",
    features: [
      "ทุกอย่างใน Clinic +",
      "Patient History Summary (AI)",
      "Insurance Claim Processing",
      "เชื่อมต่อ HIS (HOSxP, SSB)",
      "รองรับ 3,000 ผู้ป่วย/เดือน",
      "Multi-department dashboard",
      "Priority support 7 วัน/สัปดาห์",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "฿89,900",
    period: "/เดือน",
    desc: "สำหรับโรงพยาบาลขนาดใหญ่ เครือข่ายคลินิก",
    color: "#af52de",
    features: [
      "ทุกอย่างใน Hospital +",
      "Custom AI workflows ไม่จำกัด",
      "On-premise deployment option",
      "เชื่อมต่อ PACS, LIS, RIS",
      "ผู้ป่วยไม่จำกัดจำนวน",
      "HA / JCI compliance support",
      "Dedicated account manager",
      "SLA 99.9% uptime",
    ],
    highlight: false,
  },
];

/* ─── Tools Used ─── */
const toolsUsed = [
  { name: "n8n", desc: "Workflow automation — เชื่อมต่อ HIS, LINE, ระบบต่างๆ เข้าด้วยกัน", color: "#ff6d5a" },
  { name: "Flowise", desc: "AI Chatbot + RAG — สร้าง medical knowledge base ค้นข้อมูลยา", color: "#2997ff" },
  { name: "Qdrant", desc: "Vector database — จัดเก็บข้อมูลยา วิธีรักษา อย่างมีประสิทธิภาพ", color: "#30d158" },
  { name: "LINE Messaging API", desc: "ช่องทางสื่อสารกับผู้ป่วย นัดหมาย ติดตามอาการ", color: "#06c755" },
  { name: "Google Workspace", desc: "Calendar, Sheets, Docs — จัดการตารางแพทย์ + เอกสาร", color: "#34c759" },
  { name: "HIS Integration", desc: "เชื่อมต่อ HOSxP, SSB, หรือระบบ HIS ที่ใช้อยู่", color: "#ff9500" },
];

export default function HealthcareSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div className="bg-[#fbfbfd] min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-5 py-2 mb-6 text-[13px] text-[#30d158] font-medium">
              <HeartPulse size={16} /> Healthcare AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              AI สำหรับ<span className="gradient-text">คลินิก & โรงพยาบาล</span>
            </h1>
            <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
              นัดหมายอัตโนมัติ, ค้นข้อมูลยาทันที, สรุปเวชระเบียน, เคลมประกัน, รายงานประจำวัน
              — ลดภาระงาน admin ให้ทีมแพทย์มีเวลาดูแลผู้ป่วยมากขึ้น
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "60%", label: "ลดเวลารอคิว", color: "#30d158" },
              { value: "10 วิ", label: "ค้นข้อมูลยา", color: "#2997ff" },
              { value: "7x", label: "สรุปเวชระเบียนเร็วขึ้น", color: "#af52de" },
              { value: "50%", label: "ลด claim rejection", color: "#ff9500" },
            ].map((stat) => (
              <div key={stat.label} className="apple-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[12px] text-[#86868b] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-widest mb-3">Pain Points</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              ปัญหาที่คลินิก & โรงพยาบาลเจอทุกวัน
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ทุกปัญหามี solution — AI ช่วยแก้ได้จริง ไม่ใช่แค่ concept
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="apple-card p-6"
              >
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: p.color + "15", color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">{p.text}</h3>
                  <p className="text-[13px] text-[#86868b] leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5 AUTOMATION WORKFLOWS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">Automation Workflows</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              5 ระบบ AI สำหรับคลินิก & โรงพยาบาล
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ออกแบบมาเพื่อสถานพยาบาลไทยโดยเฉพาะ — เชื่อมต่อ HIS ที่ใช้อยู่ได้ทันที
            </p>
          </motion.div>

          <div className="space-y-4">
            {workflows.map((wf, i) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={`apple-card relative overflow-hidden ${expandedWorkflow === i ? "!bg-white/70" : ""}`}>
                  <button
                    onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)}
                    className="w-full text-left p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: wf.color + "15", color: wf.color }}>
                        {wf.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{wf.title}</h3>
                        <p className="text-[13px] text-[#86868b]">{wf.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:block text-[11px] text-[#86868b]">{wf.cost}</span>
                        <motion.div animate={{ rotate: expandedWorkflow === i ? 180 : 0 }}>
                          <ChevronDown size={16} className="text-[#d2d2d7]" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedWorkflow === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-5">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

                          {/* Steps */}
                          <div>
                            <p className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider mb-3">ขั้นตอนการทำงาน</p>
                            <div className="space-y-2">
                              {wf.steps.map((step, si) => (
                                <div key={si} className="flex items-start gap-3">
                                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-0.5" style={{ background: wf.color }}>
                                    {si + 1}
                                  </span>
                                  <span className="text-[13px] text-[#1d1d1f]/80">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tools + Models + Result */}
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">เครื่องมือ</p>
                              <div className="flex flex-wrap gap-1.5">
                                {wf.tools.map((t) => (
                                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#1d1d1f]">{t}</span>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">AI Model</p>
                              <div className="space-y-1">
                                {wf.models.map((m) => (
                                  <p key={m} className="text-[11px] text-[#1d1d1f]">{m}</p>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">ผลลัพธ์</p>
                              <p className="text-[13px] font-medium" style={{ color: wf.color }}>{wf.result}</p>
                              <p className="text-[11px] text-[#86868b] mt-1">ค่า API ~{wf.cost}/เดือน</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-widest mb-3">Before / After</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              เดิม vs ใช้ AI
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เปรียบเทียบการทำงานแบบเดิม กับการใช้ AI Automation ช่วย
            </p>
          </motion.div>

          <div className="apple-card overflow-hidden">
            <div className="relative z-10">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 p-5 border-b border-black/[0.04] nav-glass">
                <div className="col-span-3 text-[12px] font-semibold text-[#86868b]">งาน</div>
                <div className="col-span-4 text-[12px] font-semibold text-[#ff3b30] flex items-center gap-1"><XCircle size={13} /> เดิม (ทำมือ)</div>
                <div className="col-span-4 text-[12px] font-semibold text-[#34c759] flex items-center gap-1"><CheckCircle2 size={13} /> ใช้ AI</div>
                <div className="col-span-1 text-[12px] font-semibold text-[#2997ff] text-center">ผล</div>
              </div>

              {comparisons.map((c, i) => (
                <motion.div
                  key={c.aspect}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-4 p-5 border-b border-black/[0.03] hover:bg-white/30 transition-colors"
                >
                  <div className="col-span-3 text-[13px] font-medium text-[#1d1d1f]">{c.aspect}</div>
                  <div className="col-span-4 text-[12px] text-[#86868b]">{c.before}</div>
                  <div className="col-span-4 text-[12px] text-[#1d1d1f]">{c.after}</div>
                  <div className="col-span-1 text-center">
                    <span className="text-[11px] font-semibold text-[#34c759] bg-[#f5f5f7] rounded-full px-2 py-0.5">{c.saving}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING PACKAGES ═══ */}
      <section className="py-20 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              แพ็คเกจสำหรับสถานพยาบาล
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เลือกแพ็คเกจที่เหมาะกับขนาดสถานพยาบาลของคุณ — ทดลองใช้ฟรี 14 วัน
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`apple-card p-8 relative ${pkg.highlight ? "ring-2 ring-[#2997ff]" : ""}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2997ff] text-white text-[11px] font-semibold px-4 py-1 rounded-full">
                    แนะนำ
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: pkg.color + "15" }}>
                    {pkg.name === "Clinic" && <Stethoscope size={22} style={{ color: pkg.color }} />}
                    {pkg.name === "Hospital" && <Hospital size={22} style={{ color: pkg.color }} />}
                    {pkg.name === "Enterprise" && <BrainCircuit size={22} style={{ color: pkg.color }} />}
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{pkg.name}</h3>
                  <p className="text-[12px] text-[#86868b] mb-4">{pkg.desc}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold" style={{ color: pkg.color }}>{pkg.price}</span>
                    <span className="text-[13px] text-[#86868b]">{pkg.period}</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-[13px] text-[#1d1d1f]">
                        <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: pkg.color }} />
                        {feat}
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://lin.ee/cloudai"
                    className={`block w-full text-center py-3 rounded-full font-medium text-[14px] transition-all ${
                      pkg.highlight
                        ? "bg-[#2997ff] text-white hover:bg-[#0066d6] shadow-lg shadow-[#2997ff]/20"
                        : "bg-[#f5f5f7] text-[#2997ff] hover:bg-white/60"
                    }`}
                  >
                    เริ่มต้นใช้งาน
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[12px] text-[#86868b] mt-6"
          >
            * ค่า setup ครั้งแรก ฿25,000-80,000 (ขึ้นกับความซับซ้อนของระบบ HIS) + ค่า API ตามใช้งานจริง / ราคายังไม่รวม VAT
          </motion.p>
        </div>
      </section>

      {/* ═══ TOOLS USED ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              เครื่องมือที่ใช้
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เลือกใช้เครื่องมือ open-source เป็นหลัก — ไม่ถูก lock-in กับ vendor ใดๆ
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsUsed.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="apple-card p-5"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center mb-3">
                    <Workflow size={18} style={{ color: tool.color }} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{tool.name}</h3>
                  <p className="text-[12px] text-[#86868b] leading-relaxed">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE NOTE ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="apple-card p-8">
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#30d158]/10 flex items-center justify-center shrink-0">
                    <Shield size={24} className="text-[#30d158]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">ความปลอดภัยข้อมูลผู้ป่วย & PDPA</h3>
                    <p className="text-[13px] text-[#86868b] leading-relaxed mb-4">
                      เราออกแบบระบบโดยคำนึงถึงความปลอดภัยของข้อมูลผู้ป่วยเป็นอันดับแรก
                      ข้อมูลทุกอย่างเข้ารหัส (encrypted) ทั้ง at rest และ in transit
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        "PDPA compliant — ขอ consent ก่อนเก็บข้อมูลทุกครั้ง",
                        "Data encryption — AES-256 ทั้ง at rest & in transit",
                        "Access control — Role-based, audit log ทุก action",
                        "On-premise option — Deploy บน server ของ รพ. ได้",
                        "HA standard ready — รองรับมาตรฐานคุณภาพ รพ.",
                        "Data retention policy — ลบข้อมูลตาม policy ที่กำหนด",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2 text-[12px] text-[#1d1d1f]">
                          <CheckCircle2 size={14} className="text-[#30d158] shrink-0 mt-0.5" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="apple-card p-10">
              <div className="relative z-10">
                <HeartPulse size={40} className="text-[#30d158] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                  พร้อมให้ AI ช่วยคลินิก & โรงพยาบาลของคุณ?
                </h2>
                <p className="text-base text-[#86868b] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — เราเข้าไปสำรวจระบบที่ใช้อยู่แล้วออกแบบ solution ที่เชื่อมต่อกับ HIS ของคุณได้ทันที
                  ทดลองใช้ฟรี 14 วัน ไม่มี commitment
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://lin.ee/cloudai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#30d158] text-white font-medium text-[15px] hover:bg-[#28a745] transition-all shadow-lg shadow-[#30d158]/20"
                  >
                    <MessageSquare size={18} /> ปรึกษาฟรีผ่าน LINE
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f5f7] text-[#30d158] font-medium text-[15px] hover:bg-white/60 transition-all"
                  >
                    ดูแพ็คเกจ <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
