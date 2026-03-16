"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, MessageSquare, FileText, CalendarClock, TrendingUp,
  Users, ArrowRight, Clock, CheckCircle2, XCircle, ChevronDown,
  Send, Bot, User, AlertTriangle, MapPin, DollarSign, Home,
  Search, Star, Check, BarChart3, Phone, Zap
} from "lucide-react";

/* ─── Pain Points ─── */
const painPoints = [
  {
    icon: <MessageSquare size={20} />,
    title: "ตอบลูกค้าไม่ทัน 24/7",
    desc: "ลูกค้าสอบถามทรัพย์มาทุกเวลา ตี 2 ก็ถาม ตอบไม่ทัน ลูกค้าไปหานายหน้าคนอื่น",
    color: "#ff3b30",
  },
  {
    icon: <Home size={20} />,
    title: "Listing เยอะจัดการไม่ไหว",
    desc: "มีทรัพย์ 200+ รายการ อัพเดทราคา สถานะ รูปภาพ ไม่ครบ ข้อมูลไม่ตรง",
    color: "#ff9500",
  },
  {
    icon: <CalendarClock size={20} />,
    title: "นัดดูไม่ตรงเวลา",
    desc: "นัดชมทรัพย์ซ้อนกัน ลูกค้าเลื่อนบ่อย ลืม follow-up ทำให้เสียโอกาสปิดการขาย",
    color: "#5856d6",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "ไม่รู้ราคาตลาด",
    desc: "ตั้งราคาจากความรู้สึก ไม่มี data เปรียบเทียบ ทำให้ขายช้าหรือขายถูกเกินไป",
    color: "#2997ff",
  },
];

/* ─── 5 Automation Workflows ─── */
const workflows = [
  {
    icon: <MessageSquare size={22} />,
    title: "LINE Property Inquiry Bot",
    subtitle: "ลูกค้าถาม → AI ตอบพร้อมรายละเอียดทรัพย์ทันที 24/7",
    color: "#30d158",
    steps: [
      "ลูกค้าส่งข้อความสอบถามทรัพย์ผ่าน LINE OA เช่น \"หาคอนโดสุขุมวิท งบ 3 ล้าน\"",
      "n8n รับ webhook → ส่งให้ Flowise วิเคราะห์ความต้องการ (ทำเล, งบ, ขนาด, ประเภท)",
      "AI ค้นทรัพย์ที่ตรง criteria จาก listing database (RAG)",
      "ส่งรายละเอียดทรัพย์ให้ลูกค้า — รูป, ราคา, พื้นที่, ใกล้ BTS/MRT",
      "ถ้าลูกค้าสนใจ → สร้าง link นัดชมอัตโนมัติ",
      "ถ้าคำถามซับซ้อน (สินเชื่อ, กฎหมาย) → ส่งต่อนายหน้าพร้อม context ครบ",
    ],
    tools: ["n8n", "Flowise", "LINE Messaging API", "Google Sheets"],
    models: ["Gemini 3 Flash (ถูก เร็ว)", "GPT-5 (คำถามซับซ้อน)"],
    cost: "฿500-1,500/เดือน",
    result: "ตอบลูกค้าภายใน 5 วินาที 24/7 ลดงานตอบแชท 80%",
  },
  {
    icon: <FileText size={22} />,
    title: "Listing Description Generator",
    subtitle: "ใส่ข้อมูลทรัพย์ → AI เขียน listing โปรมืออาชีพ",
    color: "#af52de",
    steps: [
      "Upload รูปทรัพย์ + ข้อมูลพื้นฐาน (ประเภท, ราคา, พื้นที่, ที่ตั้ง, จุดเด่น)",
      "AI วิเคราะห์รูป — มุมห้อง, วิว, สภาพ, สไตล์ตกแต่ง",
      "สร้าง listing description 3 แบบ: สั้น (LINE), กลาง (DDproperty), ยาว (เว็บ)",
      "ใส่ SEO keywords ที่เกี่ยวข้อง (\"คอนโดใกล้ BTS\", \"บ้านเดี่ยว ราคาถูก\")",
      "สร้าง highlight จุดขาย + เปรียบเทียบราคากับทรัพย์ใกล้เคียง",
      "ส่งให้ review หรือ auto-post ลงทุก platform ได้เลย",
    ],
    tools: ["n8n", "Dify", "GPT-5 Vision"],
    models: ["Claude Sonnet (creative copy)", "GPT-5 Vision (วิเคราะห์รูป)"],
    cost: "฿800-2,000/เดือน",
    result: "เขียน listing 30 รายการ/ชั่วโมง แทนที่จะ 3 รายการ เร็วขึ้น 10x",
  },
  {
    icon: <CalendarClock size={22} />,
    title: "Appointment Scheduler",
    subtitle: "ลูกค้าสนใจ → AI จัดนัดชมทรัพย์ให้อัตโนมัติ",
    color: "#2997ff",
    steps: [
      "ลูกค้าแจ้งว่าสนใจดูทรัพย์ผ่าน LINE / เว็บ",
      "AI เช็คตารางนายหน้าจาก Google Calendar",
      "เสนอ 3 slot เวลาที่ว่าง ให้ลูกค้าเลือก",
      "พอลูกค้าเลือก → สร้าง calendar event + แจ้งนายหน้า",
      "ส่ง reminder ก่อนนัด 24 ชม. และ 1 ชม. ผ่าน LINE",
      "หลังดูทรัพย์ → AI ส่ง follow-up ถามความสนใจ + เสนอทรัพย์คล้ายกัน",
    ],
    tools: ["n8n", "Google Calendar", "LINE API"],
    models: ["Gemini Flash (scheduling)", "GPT-5 (follow-up)"],
    cost: "฿400-1,000/เดือน",
    result: "นัดชมทรัพย์อัตโนมัติ ลด no-show 60% เพิ่ม conversion 35%",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Market Price Analysis",
    subtitle: "AI วิเคราะห์ราคาตลาด → ตั้งราคาแม่นยำ",
    color: "#ff9500",
    steps: [
      "ดึงข้อมูลราคาทรัพย์ใกล้เคียงจาก DDproperty, Hipflat, และฐานข้อมูลภายใน",
      "AI วิเคราะห์: ราคา/ตร.ม., trend ย้อนหลัง 6-12 เดือน, อัตราขาย",
      "เปรียบเทียบกับทรัพย์ที่ขายได้จริงในรอบ 3 เดือน",
      "แนะนำช่วงราคาที่เหมาะสม (ราคาต่ำสุด / แนะนำ / สูงสุด)",
      "สร้าง CMA report (Comparative Market Analysis) อัตโนมัติ",
      "ส่งรายงานให้เจ้าของทรัพย์ / นายหน้า ผ่าน LINE หรือ Email",
    ],
    tools: ["n8n", "Python scraper", "Google Sheets"],
    models: ["GPT-5 (data analysis)", "Gemini Flash (daily monitoring)"],
    cost: "฿1,500-3,000/เดือน",
    result: "ตั้งราคาแม่นยำ ขายเร็วขึ้น 40% ได้ราคาดีขึ้น 8-15%",
  },
  {
    icon: <Users size={22} />,
    title: "Lead Scoring & Follow-up",
    subtitle: "AI จัดลำดับลูกค้า → follow-up อัตโนมัติ ไม่มีหลุด",
    color: "#ff2d55",
    steps: [
      "ลูกค้าใหม่เข้ามาจากทุกช่องทาง (LINE, เว็บ, โทร, walk-in)",
      "AI วิเคราะห์พฤติกรรม: ดูทรัพย์กี่รายการ, ถามราคา, มีงบเท่าไร",
      "ให้คะแนน lead: Hot (พร้อมซื้อ), Warm (สนใจ), Cold (แค่ดูๆ)",
      "Hot lead → แจ้งนายหน้าทันทีผ่าน LINE + โทรภายใน 5 นาที",
      "Warm lead → AI ส่ง content ทรัพย์ที่ตรงใจ ทุก 3 วัน",
      "Cold lead → ส่ง newsletter ราคาตลาด + ทรัพย์ใหม่ รายสัปดาห์",
    ],
    tools: ["n8n", "Flowise", "Google Sheets", "LINE API"],
    models: ["Gemini Flash (scoring)", "Claude Sonnet (personalized msg)"],
    cost: "฿1,000-2,500/เดือน",
    result: "ไม่มี lead หลุด ปิดการขายเพิ่ม 45% เพราะ follow-up ตรงเวลา",
  },
];

/* ─── Before/After ─── */
const comparisons = [
  {
    aspect: "ตอบลูกค้า",
    before: "ตอบได้แค่เวลาทำงาน 9-18 น.",
    after: "AI ตอบ 24/7 พร้อมรายละเอียดทรัพย์",
    saving: "ลด 80%",
  },
  {
    aspect: "เขียน Listing",
    before: "3 รายการ/ชม. เขียนเองทุกอัน",
    after: "30+ รายการ/ชม. AI เขียน คนแค่ review",
    saving: "เร็วขึ้น 10x",
  },
  {
    aspect: "นัดชมทรัพย์",
    before: "โทรนัดเอง ซ้อนบ่อย ลืม follow-up",
    after: "AI จัดตาราง + reminder อัตโนมัติ",
    saving: "-60% no-show",
  },
  {
    aspect: "วิเคราะห์ราคา",
    before: "ตั้งราคาจากประสบการณ์ ไม่มี data",
    after: "AI วิเคราะห์ตลาด + สร้าง CMA report",
    saving: "+15% ราคา",
  },
  {
    aspect: "จัดการ Lead",
    before: "จดมือ ลืม follow-up บ่อย lead หลุด",
    after: "AI score + follow-up อัตโนมัติ ไม่มีหลุด",
    saving: "+45% ปิดขาย",
  },
];

/* ─── Chat Demo ─── */
const chatMessages = [
  { role: "customer" as const, text: "สนใจคอนโดแถวสุขุมวิทค่ะ งบ 3-4 ล้าน ใกล้ BTS" },
  {
    role: "ai" as const,
    text: "หาให้แล้วค่ะ! มี 3 ทรัพย์ที่ตรง criteria:\n\n1. The Base Sukhumvit 77\n   1 bed 30 ตร.ม. ชั้น 15\n   ราคา ฿3.2M ใกล้ BTS อ่อนนุช 200m\n\n2. Ideo Mobi Sukhumvit 66\n   1 bed 35 ตร.ม. ชั้น 22 วิวเมือง\n   ราคา ฿3.8M ใกล้ BTS อุดมสุข 100m\n\n3. Aspire Sukhumvit 48\n   1 bed 28 ตร.ม. ชั้น 10 ตกแต่งครบ\n   ราคา ฿2.9M ใกล้ BTS พระโขนง 350m\n\nสนใจดูห้องไหนคะ?",
  },
  { role: "customer" as const, text: "สนใจ Ideo Mobi ค่ะ นัดดูได้ไหม เสาร์หน้า" },
  {
    role: "ai" as const,
    text: "ว่างค่ะ! นัดได้เลย\n\nวันเสาร์ที่ 22 มี.ค. เลือกเวลาได้เลยค่ะ:\n- 10:00-11:00\n- 13:00-14:00\n- 15:00-16:00\n\nสะดวกช่วงไหนคะ?\n\nจุดนัดพบ: Lobby ชั้น G Ideo Mobi Sukhumvit 66\nนายหน้า: คุณแพร (โทร 08x-xxx-xxxx)",
  },
];

/* ─── Pricing ─── */
const pricing = [
  {
    name: "Solo Agent",
    price: "฿14,900",
    monthly: "฿1,500-3,000",
    features: [
      "LINE Inquiry Bot (500 msg/เดือน)",
      "Listing Description Generator",
      "Appointment Scheduler พื้นฐาน",
      "Support 30 วัน",
    ],
    color: "#2997ff",
  },
  {
    name: "Agency",
    price: "฿39,900",
    monthly: "฿3,500-8,000",
    features: [
      "LINE Inquiry Bot ไม่จำกัด",
      "Listing Generator ไม่จำกัด",
      "Appointment Scheduler + Reminder",
      "Market Price Analysis",
      "Lead Scoring & Follow-up",
      "Training ทีม 2 ชม.",
      "Support 60 วัน",
    ],
    color: "#5856d6",
    badge: "แนะนำ",
  },
  {
    name: "Developer",
    price: "฿79,900",
    monthly: "฿8,000-20,000",
    features: [
      "ทุกอย่างใน Agency",
      "Multi-project dashboard",
      "Custom CMA report template",
      "API integration กับระบบ CRM ที่มี",
      "Multi-user + permissions",
      "On-site training 1 วัน",
      "Priority support 90 วัน",
    ],
    color: "#af52de",
  },
];

/* ─── Tools ─── */
const toolsUsed = [
  { name: "n8n", desc: "Workflow automation — เชื่อมทุก API เข้าด้วยกัน", color: "#ff6d5a" },
  { name: "Flowise", desc: "AI Chatbot builder — สร้าง RAG chatbot สำหรับ listing", color: "#2997ff" },
  { name: "LINE Messaging API", desc: "ส่ง/รับข้อความ LINE OA + rich message", color: "#30d158" },
  { name: "Google Calendar", desc: "จัดการนัดชมทรัพย์ + sync ตารางนายหน้า", color: "#4285F4" },
  { name: "Google Sheets", desc: "Listing database, lead tracking, price data", color: "#34c759" },
  { name: "Dify", desc: "AI workflow builder สำหรับ listing description", color: "#af52de" },
];

export default function RealEstateSection() {
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
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-5 py-2 mb-6 text-[13px] text-[#2997ff] font-medium">
              <Building2 size={16} /> Real Estate AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              AI สำหรับ<span className="gradient-text">อสังหาริมทรัพย์</span>
            </h1>
            <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
              ตอบลูกค้า 24/7, เขียน listing มืออาชีพ, นัดชมทรัพย์อัตโนมัติ, วิเคราะห์ราคาตลาด,
              จัดการ lead ไม่มีหลุด — เริ่มต้นแค่ ฿14,900
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
              { value: "80%", label: "ลดงานตอบแชท", color: "#30d158" },
              { value: "5 วิ", label: "ตอบลูกค้า 24/7", color: "#2997ff" },
              { value: "10x", label: "เขียน listing เร็วขึ้น", color: "#af52de" },
              { value: "45%", label: "ปิดขายเพิ่มขึ้น", color: "#ff2d55" },
            ].map((stat) => (
              <div key={stat.label} className="apple-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
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
            <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-widest mb-3">
              Pain Points
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              ปัญหาที่นายหน้าอสังหาฯ เจอทุกวัน
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ถ้าคุณเจอปัญหาเหล่านี้ AI ช่วยแก้ได้ทั้งหมด
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="apple-card p-5"
              >
                <div className="relative z-10 flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center shrink-0"
                    style={{ color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{p.title}</h3>
                    <p className="text-[12px] text-[#86868b] leading-relaxed">{p.desc}</p>
                  </div>
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
            <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
              Automation Workflows
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              5 ระบบ AI สำหรับอสังหาริมทรัพย์
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              แต่ละระบบทำงานอัตโนมัติ — เลือกใช้ทีละตัว หรือใช้ทั้งหมดก็ได้
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
                <div
                  className={`apple-card relative overflow-hidden ${expandedWorkflow === i ? "!bg-white/70" : ""}`}
                >
                  <button
                    onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)}
                    className="w-full text-left p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: wf.color + "15", color: wf.color }}
                      >
                        {wf.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">
                          {wf.title}
                        </h3>
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
                            <p className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider mb-3">
                              ขั้นตอนการทำงาน
                            </p>
                            <div className="space-y-2">
                              {wf.steps.map((step, si) => (
                                <div key={si} className="flex items-start gap-3">
                                  <span
                                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-0.5"
                                    style={{ background: wf.color }}
                                  >
                                    {si + 1}
                                  </span>
                                  <span className="text-[13px] text-[#1d1d1f]/80">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tools + Models + Cost */}
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">
                                เครื่องมือ
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {wf.tools.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#1d1d1f]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">
                                AI Model
                              </p>
                              <div className="space-y-1">
                                {wf.models.map((m) => (
                                  <p key={m} className="text-[11px] text-[#1d1d1f]">
                                    {m}
                                  </p>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#86868b] uppercase tracking-wider mb-2">
                                ผลลัพธ์
                              </p>
                              <p className="text-[13px] font-medium" style={{ color: wf.color }}>
                                {wf.result}
                              </p>
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
            <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-widest mb-3">
              Before / After
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              เดิม vs ใช้ AI
            </h2>
          </motion.div>

          <div className="apple-card overflow-hidden">
            <div className="relative z-10">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 p-5 border-b border-black/[0.04] nav-glass">
                <div className="col-span-3 text-[12px] font-semibold text-[#86868b]">งาน</div>
                <div className="col-span-4 text-[12px] font-semibold text-[#ff3b30] flex items-center gap-1">
                  <XCircle size={13} /> เดิม (ทำมือ)
                </div>
                <div className="col-span-4 text-[12px] font-semibold text-[#34c759] flex items-center gap-1">
                  <CheckCircle2 size={13} /> ใช้ AI
                </div>
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
                    <span className="text-[11px] font-semibold text-[#34c759] bg-[#f5f5f7] rounded-full px-2 py-0.5">
                      {c.saving}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHAT DEMO ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[13px] font-semibold text-[#30d158] uppercase tracking-widest mb-3">
                Live Demo
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                ลูกค้าถาม → AI หาทรัพย์ + นัดชมให้
              </h2>
              <p className="text-base text-[#86868b] leading-relaxed mb-6">
                ดู AI chatbot จริงที่ตอบลูกค้า — ค้นทรัพย์ตาม criteria, แสดงรายละเอียด,
                นัดชมทรัพย์ พร้อมส่ง reminder ให้อัตโนมัติ ไม่ต้องรอนายหน้า
              </p>
              <div className="space-y-3">
                {[
                  "ค้นทรัพย์ตามงบ ทำเล ขนาด ประเภท",
                  "แสดงรายละเอียด + รูปทรัพย์ทันที",
                  "นัดชมทรัพย์ + ส่ง reminder อัตโนมัติ",
                  "Follow-up หลังดูทรัพย์ + แนะนำทรัพย์คล้ายกัน",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[#1d1d1f]">
                    <CheckCircle2 size={16} className="text-[#30d158] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="apple-card relative p-0 overflow-hidden">
                {/* Header */}
                <div className="nav-glass px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[12px] text-[#86868b] font-medium ml-2">
                    LINE OA — อสังหาริมทรัพย์
                  </span>
                  <span className="ml-auto relative w-2 h-2 rounded-full bg-[#34c759]">
                    <span className="absolute inset-0 rounded-full bg-[#34c759] animate-ping opacity-50" />
                  </span>
                </div>

                {/* Messages */}
                <div className="p-5 space-y-3 max-h-[520px] overflow-y-auto">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className={`flex ${msg.role === "customer" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-7 h-7 rounded-full bg-[#30d158]/10 flex items-center justify-center mr-2 shrink-0 mt-1">
                          <Bot size={14} className="text-[#30d158]" />
                        </div>
                      )}
                      <div
                        className={`text-[13px] px-4 py-2.5 max-w-[80%] whitespace-pre-line leading-relaxed ${
                          msg.role === "customer"
                            ? "bg-[#2997ff] text-white rounded-2xl rounded-br-md"
                            : "apple-card relative !rounded-2xl !rounded-bl-md p-4 text-[#1d1d1f]"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === "customer" && (
                        <div className="w-7 h-7 rounded-full bg-[#2997ff]/10 flex items-center justify-center ml-2 shrink-0 mt-1">
                          <User size={14} className="text-[#2997ff]" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-black/[0.04]">
                  <div className="bg-white rounded-[14px] border border-[#d2d2d7]/40 flex items-center gap-2 px-4 py-3">
                    <span className="text-[13px] text-[#c7c7cc] flex-1">พิมพ์ข้อความ...</span>
                    <Send size={16} className="text-[#2997ff]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              แพ็คเกจสำหรับอสังหาริมทรัพย์
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เลือกแพ็คเกจที่เหมาะกับธุรกิจคุณ — ค่า setup ครั้งเดียว + ค่า API ตามใช้งานจริง
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {pricing.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="apple-card relative p-6"
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="text-[11px] font-semibold px-4 py-1 rounded-full text-white"
                      style={{ background: plan.color }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="relative z-10">
                  <h3 className="text-base font-semibold text-[#1d1d1f] text-center mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-2xl font-bold text-center mb-1" style={{ color: plan.color }}>
                    {plan.price}
                  </p>
                  <p className="text-[11px] text-[#86868b] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                  <p className="text-[11px] text-[#86868b] text-center mb-4 pb-4 border-b border-black/5">
                    + {plan.monthly}/เดือน (ค่า API)
                  </p>
                  <div className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                        <span className="text-[12px] text-[#86868b]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/#contact"
                    className="block text-center text-[13px] font-medium py-2.5 rounded-full transition-all"
                    style={
                      plan.badge
                        ? { background: plan.color, color: "white" }
                        : { background: "rgba(0,0,0,0.04)" }
                    }
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
            * ทุกแพ็คเกจรวม training การใช้งาน + support หลัง setup — ค่า API จ่ายตามจริง ไม่มี hidden fee
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
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              เครื่องมือที่ใช้
            </h2>
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
                  <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center mb-3">
                    <Zap size={18} style={{ color: tool.color }} />
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{tool.name}</h3>
                  <p className="text-[12px] text-[#86868b] leading-relaxed">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                <Building2 size={40} className="text-[#2997ff] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                  พร้อมให้ AI ช่วยธุรกิจอสังหาฯ ของคุณ?
                </h2>
                <p className="text-base text-[#86868b] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — เราวิเคราะห์ธุรกิจคุณแล้วแนะนำ solution ที่เหมาะสมที่สุด
                  ไม่มี commitment เริ่มต้นได้ภายใน 1 สัปดาห์
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://lin.ee/cloudai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2997ff] text-white font-medium text-[15px] hover:bg-[#0066d6] transition-all shadow-lg shadow-[#2997ff]/20"
                  >
                    <MessageSquare size={18} /> ปรึกษาฟรีผ่าน LINE
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f5f7] text-[#2997ff] font-medium text-[15px] hover:bg-white/60 transition-all"
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
