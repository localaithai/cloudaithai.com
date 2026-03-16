"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart, MessageSquare, Package, FileText, BarChart3, Star,
  Bell, ArrowRight, Clock, DollarSign, Zap, TrendingUp, CheckCircle2,
  XCircle, ChevronDown, Send, Bot, User, Workflow, AlertTriangle,
  ShoppingBag, BadgePercent, Truck, HeartHandshake
} from "lucide-react";

/* ─── Pain Points ─── */
const painPoints = [
  { icon: <MessageSquare size={20} />, text: "ตอบแชทลูกค้าไม่ทัน", detail: "ลูกค้าส่งข้อความมา 200+ ครั้ง/วัน ตอบไม่ไหว ลูกค้าหนีไปร้านอื่น", color: "#ff3b30" },
  { icon: <Package size={20} />, text: "Order ผิดบ่อย", detail: "จดออเดอร์มือ ส่งผิดไซส์ ผิดสี ต้อง return เสียค่าส่งซ้ำ", color: "#ff9500" },
  { icon: <FileText size={20} />, text: "ไม่มีเวลาเขียน content", detail: "ต้อง caption สินค้าใหม่ 20 รายการ/สัปดาห์ เขียนไม่ทัน", color: "#5856d6" },
  { icon: <BarChart3 size={20} />, text: "ไม่รู้ว่าขายอะไรดี", detail: "ไม่มี data วิเคราะห์ ตัดสินใจจากความรู้สึก สต็อกสินค้าไม่ตรง demand", color: "#2997ff" },
  { icon: <Star size={20} />, text: "Review ลบไม่มีใครตอบ", detail: "ลูกค้ารีวิว 1 ดาว ทิ้งไว้ 3 เดือน คนอื่นเห็นแล้วไม่กล้าซื้อ", color: "#ff2d55" },
  { icon: <Bell size={20} />, text: "สต็อกหมดไม่รู้ตัว", detail: "ของหมด stock แต่ยังรับออเดอร์ ต้องคืนเงิน เสียความเชื่อมั่น", color: "#ff9500" },
];

/* ─── 6 Automation Workflows ─── */
const workflows = [
  {
    icon: <MessageSquare size={22} />,
    title: "LINE Auto-Reply Chatbot",
    subtitle: "ลูกค้าถาม → AI ตอบทันที 24/7",
    color: "#30d158",
    steps: [
      "ลูกค้าส่งข้อความถามสินค้าผ่าน LINE OA",
      "n8n รับ webhook → ส่งให้ Flowise วิเคราะห์คำถาม",
      "AI ค้นข้อมูลสินค้าจาก product database (RAG)",
      "ตอบลูกค้าทันที — ราคา, สี, ไซส์, มีของไหม",
      "ถ้าลูกค้าจะซื้อ → สร้าง order link อัตโนมัติ",
      "ถ้าคำถามซับซ้อน → ส่งต่อพนักงานพร้อม context",
    ],
    tools: ["n8n", "Flowise", "LINE Messaging API"],
    models: ["Gemini 3 Flash (ถูก เร็ว)", "GPT-5 (คำถามซับซ้อน)"],
    cost: "฿450-1,200/เดือน",
    result: "ตอบลูกค้าภายใน 3 วินาที ลดงานตอบแชท 85%",
  },
  {
    icon: <Package size={22} />,
    title: "Order Processing อัตโนมัติ",
    subtitle: "ออเดอร์เข้า → AI จัดการทุกขั้นตอน",
    color: "#2997ff",
    steps: [
      "ลูกค้าสั่งของผ่าน LINE / Shopee / Lazada / เว็บ",
      "n8n รับ webhook → AI extract ข้อมูลออเดอร์",
      "ตรวจ stock อัตโนมัติจาก Google Sheets",
      "สร้าง invoice + ส่ง payment link ให้ลูกค้า",
      "หลังจ่าย → แจ้งคลังสินค้าผ่าน LINE group",
      "สร้าง tracking number → ส่งให้ลูกค้าอัตโนมัติ",
      "อัพเดท sales dashboard แบบ real-time",
    ],
    tools: ["n8n", "Google Sheets", "LINE API", "Shopee API"],
    models: ["Gemini Flash (extract ข้อมูล)", "GPT-5 (order ซับซ้อน)"],
    cost: "฿600-1,500/เดือน",
    result: "ลดงาน manual 80% ลด error จาก 15% เหลือ 2%",
  },
  {
    icon: <FileText size={22} />,
    title: "Product Description Generator",
    subtitle: "ถ่ายรูปสินค้า → AI เขียน caption ให้",
    color: "#af52de",
    steps: [
      "Upload รูปสินค้า + ข้อมูลพื้นฐาน (ชื่อ, ราคา, วัสดุ)",
      "AI วิเคราะห์รูป — สี, สไตล์, จุดเด่น",
      "สร้าง caption 3 แบบ: สั้น (LINE), กลาง (IG), ยาว (เว็บ)",
      "ใส่ hashtag ที่เกี่ยวข้อง + trending",
      "สร้าง SEO title + meta description สำหรับเว็บ",
      "ส่งให้ review หรือ auto-post ได้เลย",
    ],
    tools: ["n8n", "Dify", "Canva API"],
    models: ["Claude Sonnet (creative)", "GPT-5 Vision (วิเคราะห์รูป)"],
    cost: "฿800-2,000/เดือน",
    result: "เขียน caption สินค้า 50 รายการ/ชั่วโมง แทนที่จะ 5 รายการ",
  },
  {
    icon: <Bell size={22} />,
    title: "Stock Alert & Reorder",
    subtitle: "สต็อกใกล้หมด → AI แจ้งเตือน + สั่งซื้อ",
    color: "#ff9500",
    steps: [
      "n8n check stock ทุก 30 นาทีจาก spreadsheet",
      "ถ้าต่ำกว่า threshold → แจ้งเตือนผ่าน LINE",
      "AI วิเคราะห์ sales velocity → แนะนำจำนวนสั่งซื้อ",
      "สร้าง PO (purchase order) draft ส่งให้ supplier",
      "พอของมา → อัพเดท stock อัตโนมัติ",
      "สร้าง report สรุป stock movement รายสัปดาห์",
    ],
    tools: ["n8n", "Google Sheets", "LINE API"],
    models: ["Gemini Flash (monitoring)", "GPT-5 (forecasting)"],
    cost: "฿400-900/เดือน",
    result: "ลด out-of-stock 90% ลดต้นทุน overstock 30%",
  },
  {
    icon: <Star size={22} />,
    title: "Review Management AI",
    subtitle: "รีวิวเข้า → AI ตอบ + วิเคราะห์",
    color: "#ff2d55",
    steps: [
      "รีวิวใหม่เข้า (Shopee, Lazada, Google, Facebook)",
      "AI วิเคราะห์ sentiment: positive / neutral / negative",
      "รีวิวดี → ตอบขอบคุณ + แนะนำสินค้าเกี่ยวข้อง",
      "รีวิวลบ → draft คำตอบที่แก้ปัญหา ส่งให้ approve",
      "สรุป insight: สินค้าไหนมีปัญหาอะไรบ่อย",
      "แจ้งเตือนถ้ามีรีวิว 1-2 ดาว ต้องรีบตอบ",
    ],
    tools: ["n8n", "Flowise", "Shopee/Lazada API"],
    models: ["Gemini Flash (sentiment)", "Claude Sonnet (ตอบรีวิว)"],
    cost: "฿500-1,200/เดือน",
    result: "ตอบรีวิวภายใน 1 ชม. แทนที่จะ 3 วัน rating เพิ่ม 0.5 ดาว",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Sales Analytics Dashboard",
    subtitle: "ทุกเช้า → AI สรุปยอดขาย + แนะนำ",
    color: "#5856d6",
    steps: [
      "n8n ดึงข้อมูลขายจากทุก channel (LINE, Shopee, Lazada, เว็บ)",
      "รวมข้อมูลเข้า Google Sheets / database กลาง",
      "AI วิเคราะห์: สินค้าขายดี, ช่วงเวลาขายดี, กลุ่มลูกค้า",
      "สร้าง dashboard สรุปรายวัน + รายสัปดาห์",
      "AI แนะนำ: ควรลดราคาสินค้าไหน, ควร promote อะไร",
      "ส่งสรุปผ่าน LINE ทุกเช้า 8 โมง",
    ],
    tools: ["n8n", "Google Sheets", "Looker Studio"],
    models: ["GPT-5 (analysis)", "Gemini Flash (daily summary)"],
    cost: "฿1,000-2,500/เดือน",
    result: "ตัดสินใจจาก data ไม่ใช่ gut feeling ยอดขายเพิ่ม 20-40%",
  },
];

/* ─── Before/After ─── */
const comparisons = [
  { aspect: "ตอบแชทลูกค้า", before: "พนักงาน 2 คน ตอบได้ 8 ชม./วัน", after: "AI ตอบ 24/7 ไม่มีวันหยุด", saving: "ลด 85%" },
  { aspect: "จัดการออเดอร์", before: "จดมือ → Google Form → copy ไป sheet", after: "อัตโนมัติ ตั้งแต่รับ order ถึงส่งของ", saving: "ลด 80%" },
  { aspect: "เขียน caption สินค้า", before: "5 รายการ/ชั่วโมง เขียนเองทั้งหมด", after: "50+ รายการ/ชั่วโมง AI เขียน คนแค่ review", saving: "เร็วขึ้น 10x" },
  { aspect: "เช็ค stock", before: "เปิด spreadsheet นับเอง สัปดาห์ละครั้ง", after: "Real-time monitoring แจ้งเตือนอัตโนมัติ", saving: "0% out-of-stock" },
  { aspect: "ตอบรีวิว", before: "ลืมตอบบ่อย รีวิว 1 ดาวทิ้งไว้หลายเดือน", after: "AI ตอบทุกรีวิวภายใน 1 ชม.", saving: "+0.5 ดาว" },
  { aspect: "วิเคราะห์ยอดขาย", before: "ดู dashboard เองเดือนละครั้ง", after: "AI สรุป + แนะนำทุกเช้า", saving: "ขายเพิ่ม 25%" },
];

/* ─── Chat Demo ─── */
const chatMessages = [
  { role: "customer" as const, text: "สนใจเสื้อ oversize สีดำค่ะ มีไซส์ L ไหม?" },
  { role: "ai" as const, text: "มีค่ะ! 🖤 เสื้อ Oversize Premium Cotton สีดำ\n\n📏 ไซส์ L: หน้ากว้าง 60cm ยาว 76cm\n💰 ราคา ฿590 (ปกติ ฿790)\n📦 เหลือ 8 ตัว\n🚚 ส่ง Kerry ฟรี ถึงภายใน 2-3 วัน\n\nสั่งเลยมั้ยคะ? 😊" },
  { role: "customer" as const, text: "สั่งเลยค่ะ 1 ตัว ส่ง 42/7 สุขุมวิท 39" },
  { role: "ai" as const, text: "รับออเดอร์แล้วค่ะ! ✅\n\n📋 สรุปออเดอร์ #4421\n👕 เสื้อ Oversize สีดำ ไซส์ L x1\n💰 ฿590 (ส่งฟรี)\n🏠 42/7 สุขุมวิท 39\n\n💳 ชำระเงินได้ที่ลิงก์นี้:\npay.cloudai.th/order/4421\n\nพอจ่ายแล้วแจ้งสลิปมาได้เลยนะคะ" },
];

/* ─── Pricing ─── */
const pricingItems = [
  { name: "LINE Auto-Reply (Gemini Flash)", usage: "~3,000 ข้อความ/เดือน", cost: "฿450" },
  { name: "Order Processing (n8n)", usage: "~500 orders/เดือน", cost: "฿600" },
  { name: "Product Caption AI", usage: "~200 สินค้า/เดือน", cost: "฿800" },
  { name: "Stock Alert System", usage: "ตรวจ 24/7", cost: "฿400" },
  { name: "Review Management", usage: "~100 รีวิว/เดือน", cost: "฿500" },
  { name: "Sales Analytics", usage: "รายงานรายวัน", cost: "฿1,000" },
];

/* ─── Tools ─── */
const toolsUsed = [
  { name: "n8n", desc: "Workflow automation — เชื่อมทุก API เข้าด้วยกัน", color: "#ff6d5a" },
  { name: "Flowise", desc: "AI Chatbot builder — สร้าง RAG chatbot ง่ายๆ", color: "#2997ff" },
  { name: "LINE Messaging API", desc: "ส่ง/รับข้อความ LINE OA อัตโนมัติ", color: "#30d158" },
  { name: "Google Sheets", desc: "Database สำหรับ stock, orders, analytics", color: "#34c759" },
  { name: "Shopee/Lazada API", desc: "เชื่อมข้อมูลร้านค้า marketplace", color: "#ff9500" },
  { name: "Dify", desc: "AI workflow builder สำหรับ content generation", color: "#af52de" },
];

export default function EcommerceSection() {
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
              <ShoppingCart size={16} /> E-commerce AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              AI สำหรับ<span className="gradient-text">ร้านค้าออนไลน์</span>
            </h1>
            <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
              ตอบแชท, จัดการออเดอร์, เขียน caption, เช็คสต็อก, ตอบรีวิว, วิเคราะห์ยอดขาย
              — ทั้งหมดอัตโนมัติ เริ่มต้นแค่ ฿450/เดือน
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
              { value: "85%", label: "ลดงานตอบแชท", color: "#30d158" },
              { value: "3 วิ", label: "ตอบลูกค้า", color: "#2997ff" },
              { value: "฿3,750", label: "ค่า API เฉลี่ย/เดือน", color: "#ff9500" },
              { value: "10x", label: "เขียน caption เร็วขึ้น", color: "#af52de" },
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
              ปัญหาที่ร้านค้าออนไลน์เจอทุกวัน
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ถ้าคุณเจอปัญหาเหล่านี้ AI ช่วยแก้ได้ทั้งหมด
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="apple-card p-5"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] rounded-full flex items-center justify-center mb-3" style={{ color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1">{p.text}</h3>
                  <p className="text-[12px] text-[#86868b] leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 AUTOMATION WORKFLOWS ═══ */}
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
              6 ระบบ AI สำหรับร้านค้าออนไลน์
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

                          {/* Tools + Models + Cost */}
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

      {/* ═══ CHAT DEMO ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[13px] font-semibold text-[#30d158] uppercase tracking-widest mb-3">Live Demo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                ลูกค้าถาม → AI ตอบทันที
              </h2>
              <p className="text-base text-[#86868b] leading-relaxed mb-6">
                ดู AI chatbot จริงที่ตอบลูกค้า — ดึงข้อมูลสินค้า, เช็ค stock, สร้าง order, ส่ง payment link ได้ทันที
                ไม่ต้องรอพนักงาน ลูกค้าได้คำตอบภายใน 3 วินาที
              </p>
              <div className="space-y-3">
                {[
                  "ตอบได้ 24/7 ไม่มีวันหยุด",
                  "ดึงข้อมูลสินค้า real-time จาก database",
                  "สร้าง order + payment link อัตโนมัติ",
                  "ส่งต่อพนักงานถ้าคำถามซับซ้อน",
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
                  <span className="text-[12px] text-[#86868b] font-medium ml-2">LINE OA — ร้านเสื้อผ้า</span>
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
                  <div className="bg-white rounded-[14px] border border-[#d2d2d7]/40 focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 focus:outline-none flex items-center gap-2 px-4 py-3">
                    <span className="text-[13px] text-[#c7c7cc] flex-1">พิมพ์ข้อความ...</span>
                    <Send size={16} className="text-[#2997ff]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ESTIMATE ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              ค่าใช้จ่าย API จริง
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ค่า API ที่ต้องจ่ายจริง — ไม่มีค่า license ซ่อน ไม่มีค่า subscription ต่อ user
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card overflow-hidden"
          >
            <div className="relative z-10">
              <div className="grid grid-cols-3 gap-4 p-5 border-b border-black/[0.04] nav-glass">
                <div className="text-[12px] font-semibold text-[#86868b]">ระบบ</div>
                <div className="text-[12px] font-semibold text-[#86868b]">ปริมาณใช้งาน</div>
                <div className="text-[12px] font-semibold text-[#86868b] text-right">ค่า API/เดือน</div>
              </div>
              {pricingItems.map((item, i) => (
                <div key={item.name} className="grid grid-cols-3 gap-4 p-5 border-b border-black/[0.03]">
                  <div className="text-[13px] text-[#1d1d1f] font-medium">{item.name}</div>
                  <div className="text-[12px] text-[#86868b]">{item.usage}</div>
                  <div className="text-[13px] text-[#2997ff] font-semibold text-right">{item.cost}</div>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-4 p-5 bg-[#2997ff]/5">
                <div className="text-[14px] text-[#1d1d1f] font-bold">รวมทั้งหมด</div>
                <div className="text-[12px] text-[#86868b]">ร้านขนาดกลาง</div>
                <div className="text-[16px] text-[#2997ff] font-bold text-right">~฿3,750/เดือน</div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[12px] text-[#86868b] mt-4"
          >
            * ค่า setup ครั้งแรก ฿15,000-35,000 (ขึ้นกับจำนวนระบบ) + ค่า API ตามใช้งานจริง
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
                  <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] rounded-full flex items-center justify-center mb-3">
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

      {/* ═══ LIVE MOCKUP: ดูตัวอย่างจริง ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">Interactive Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-3">
              ดูตัวอย่างจริง
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ระบบ AI ทำงานร่วมกับหน้าร้านออนไลน์ — ตอบลูกค้า + จัดการออเดอร์อัตโนมัติ
            </p>
          </motion.div>

          {/* E-commerce Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="apple-card p-0 overflow-hidden"
          >
            {/* Browser chrome */}
            <div className="nav-glass px-5 py-3 flex items-center gap-3 border-b border-black/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#f5f5f7] rounded-lg px-4 py-1.5 text-[11px] text-[#86868b] flex items-center gap-2 max-w-md mx-auto">
                  <span className="text-[#34c759]">&#128274;</span> shopee.co.th/shop/aromahouse-official
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 min-h-[520px]">
              {/* LEFT: Product Page Mockup (3 cols) */}
              <div className="lg:col-span-3 p-6 border-r border-black/[0.04]">
                {/* Shop header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/[0.04]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff9500] to-[#ff6b35] flex items-center justify-center text-white text-[13px] font-bold">AH</div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">AromaHouse Official</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#86868b]">&#9733; 4.9 (2.3k รีวิว)</span>
                      <span className="text-[10px] bg-[#ff9500]/10 text-[#ff9500] px-2 py-0.5 rounded-full font-medium">Preferred Seller</span>
                    </div>
                  </div>
                </div>

                {/* Product card */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Product image placeholder */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-[#fdf6ec] to-[#f5e6d0] flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute top-3 left-3 bg-[#ff3b30] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">-35%</div>
                    <div className="text-5xl mb-2">&#127879;</div>
                    <p className="text-[11px] text-[#86868b] mt-1">Reed Diffuser 200ml</p>
                    <div className="absolute bottom-3 flex gap-1.5">
                      {["#D4A574", "#C9B896", "#8B7355", "#2C1810"].map((c) => (
                        <div key={c} className="w-4 h-4 rounded-full border-2 border-white shadow-sm" style={{ background: c }} />
                      ))}
                    </div>
                  </motion.div>

                  {/* Product info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1d1d1f] leading-snug">Reed Diffuser น้ำหอมปรับอากาศ กลิ่น Champagne Gold 200ml</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[20px] font-bold text-[#ff3b30]">&#3647;490</span>
                        <span className="text-[13px] text-[#86868b] line-through">&#3647;750</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-[#86868b]">กลิ่น:</span>
                        <div className="flex gap-1">
                          {["Champagne Gold", "Rose Garden", "Ocean Breeze", "Lavender"].map((s, idx) => (
                            <span key={s} className={`px-2 py-0.5 rounded-full text-[10px] ${idx === 0 ? "bg-[#ff9500]/10 text-[#ff9500] border border-[#ff9500]/20 font-medium" : "bg-[#f5f5f7] text-[#86868b]"}`}>{s}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-[#86868b]">สต็อก:</span>
                        <span className="text-[#34c759] font-medium">มีสินค้า 24 ชิ้น</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-[#86868b]">จัดส่ง:</span>
                        <span className="text-[#1d1d1f]">ฟรี! ถึงภายใน 1-3 วัน</span>
                        <Truck size={12} className="text-[#34c759]" />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="flex items-center gap-1 text-[11px] text-[#86868b]">
                        <Star size={12} className="text-[#ffcc00] fill-[#ffcc00]" /> 4.9
                      </div>
                      <div className="text-[11px] text-[#86868b]">ขายแล้ว 1.2k ชิ้น</div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 py-2.5 rounded-xl bg-[#ff9500]/10 text-[#ff9500] text-[12px] font-medium flex items-center justify-center gap-1.5">
                        <ShoppingBag size={14} /> ใส่ตะกร้า
                      </button>
                      <button className="flex-1 py-2.5 rounded-xl bg-[#ff9500] text-white text-[12px] font-medium">
                        ซื้อเลย
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: AI Chat Widget (2 cols) */}
              <div className="lg:col-span-2 flex flex-col bg-[#fafafa]">
                {/* Chat header */}
                <div className="px-5 py-3 border-b border-black/[0.04] flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#30d158]/10 flex items-center justify-center">
                    <Bot size={14} className="text-[#30d158]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1d1d1f]">AromaHouse AI Assistant</p>
                    <p className="text-[10px] text-[#34c759] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] inline-block" /> ออนไลน์ ตอบภายใน 3 วินาที
                    </p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                  {/* Customer message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#2997ff] text-white text-[12px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%] leading-relaxed">
                      สินค้านี้มีสี Champagne ไหมคะ?
                    </div>
                  </motion.div>

                  {/* AI response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#30d158]/10 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={11} className="text-[#30d158]" />
                    </div>
                    <div className="apple-card !rounded-2xl !rounded-bl-md p-3.5 max-w-[90%] text-[12px] text-[#1d1d1f] leading-relaxed space-y-2">
                      <p>มีค่ะ! กลิ่น <span className="font-semibold text-[#ff9500]">Champagne Gold</span> เป็นกลิ่นขายดีอันดับ 1 ของร้านเลยค่ะ</p>
                      <div className="bg-[#f5f5f7] rounded-xl p-3 space-y-1.5">
                        <p className="text-[11px]">&#127879; Reed Diffuser — Champagne Gold 200ml</p>
                        <p className="text-[11px]">&#128176; <span className="text-[#ff3b30] font-semibold">&#3647;490</span> <span className="line-through text-[#86868b]">&#3647;750</span> (ลด 35%)</p>
                        <p className="text-[11px]">&#128230; คงเหลือ: <span className="text-[#34c759] font-medium">24 ชิ้น</span></p>
                        <p className="text-[11px]">&#128666; ส่งฟรี ถึงภายใน 1-3 วัน</p>
                      </div>
                      <p>สั่งซื้อเลยมั้ยคะ? ตอนนี้ลดราคาพิเศษอยู่ค่ะ &#128522;</p>
                    </div>
                  </motion.div>

                  {/* Customer confirms */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#2997ff] text-white text-[12px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[85%]">
                      สั่ง 2 ชิ้นเลยค่ะ
                    </div>
                  </motion.div>

                  {/* AI order confirmation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="flex gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#30d158]/10 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={11} className="text-[#30d158]" />
                    </div>
                    <div className="apple-card !rounded-2xl !rounded-bl-md p-3.5 max-w-[90%] text-[12px] text-[#1d1d1f] leading-relaxed">
                      <p>รับออเดอร์แล้วค่ะ! &#9989;</p>
                      <div className="bg-[#f5f5f7] rounded-xl p-3 space-y-1 mt-2">
                        <p className="text-[11px] font-semibold">&#128203; ออเดอร์ #AH-7821</p>
                        <p className="text-[11px]">&#127879; Champagne Gold 200ml x2</p>
                        <p className="text-[11px]">&#128176; รวม &#3647;980 (ส่งฟรี)</p>
                      </div>
                      <p className="mt-2">&#128179; ชำระเงินที่ลิงก์นี้ค่ะ:<br /><span className="text-[#2997ff] underline">pay.aromahouse.co.th/7821</span></p>
                    </div>
                  </motion.div>
                </div>

                {/* Chat input */}
                <div className="p-3 border-t border-black/[0.04]">
                  <div className="bg-white rounded-xl border border-[#d2d2d7]/40 flex items-center gap-2 px-3 py-2.5">
                    <span className="text-[12px] text-[#c7c7cc] flex-1">พิมพ์ข้อความ...</span>
                    <Send size={14} className="text-[#2997ff]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Pipeline Animation */}
            <div className="border-t border-black/[0.04] px-6 py-5 bg-[#fafafa]">
              <p className="text-[11px] font-medium text-[#86868b] uppercase tracking-wider mb-4 text-center">Order Processing Pipeline — อัตโนมัติทั้งหมด</p>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
                {[
                  { label: "Order Received", icon: <ShoppingCart size={14} />, color: "#2997ff", status: "&#9989;" },
                  { label: "Stock Checked", icon: <Package size={14} />, color: "#34c759", status: "&#9989;" },
                  { label: "Invoice Created", icon: <FileText size={14} />, color: "#ff9500", status: "&#9989;" },
                  { label: "Payment Confirmed", icon: <DollarSign size={14} />, color: "#af52de", status: "&#9989;" },
                  { label: "Shipped", icon: <Truck size={14} />, color: "#30d158", status: "&#128230;" },
                ].map((step, i, arr) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 * i + 0.1, type: "spring" }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: step.color + "15", color: step.color }}
                      >
                        {step.icon}
                      </motion.div>
                      <span className="text-[10px] text-[#1d1d1f] font-medium text-center max-w-[80px]">{step.label}</span>
                      <span className="text-[10px]" dangerouslySetInnerHTML={{ __html: step.status }} />
                    </div>
                    {i < arr.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 * i + 0.2 }}
                        className="hidden md:block w-8 h-[2px] origin-left"
                        style={{ background: `linear-gradient(to right, ${step.color}, ${arr[i + 1].color})` }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="text-center mt-4"
              >
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#34c759] font-medium bg-[#34c759]/10 px-3 py-1 rounded-full">
                  <Zap size={12} /> ทั้งหมดเสร็จใน 8 วินาที — ไม่ต้องทำมือสักขั้นตอน
                </span>
              </motion.div>
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
                <ShoppingCart size={40} className="text-[#2997ff] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                  พร้อมให้ AI ช่วยร้านค้าของคุณ?
                </h2>
                <p className="text-base text-[#86868b] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — เราวิเคราะห์ร้านคุณแล้วแนะนำ solution ที่เหมาะสมที่สุด
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
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f5f7] rounded-full text-[#2997ff] font-medium text-[15px] hover:bg-white/60 transition-all"
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
