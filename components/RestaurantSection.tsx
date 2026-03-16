"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed, Clock, Package, Star, DollarSign,
  MessageSquare, BarChart3, ArrowRight, CheckCircle2, XCircle,
  ChevronDown, Bell, ShoppingBag, TrendingUp, Workflow,
  Bot, Calculator, Flame, Store, Building2, ChefHat,
  AlertTriangle, Truck, ClipboardList, Receipt
} from "lucide-react";

/* ─── Pain Points ─── */
const painPoints = [
  {
    icon: <Clock size={20} />,
    text: "รับ order ไม่ทัน",
    detail: "ช่วง peak ลูกค้าโทรสั่ง + walk-in + LINE + Grab พร้อมกัน พนักงานตอบไม่ทัน ลูกค้ารอนาน ยกเลิกออเดอร์ เสียยอดขาย 20-30%",
    color: "#ff3b30",
  },
  {
    icon: <Package size={20} />,
    text: "วัตถุดิบหมดไม่รู้ตัว",
    detail: "กุ้งหมด ผักหมด เนื้อหมด แต่ยังรับออเดอร์ ต้องไปซื้อเพิ่มกลางวัน ราคาแพง คุณภาพไม่ดี เสียเวลา เสียเงิน เสียลูกค้า",
    color: "#ff9500",
  },
  {
    icon: <Star size={20} />,
    text: "รีวิวลูกค้าไม่มีใครตอบ",
    detail: "ลูกค้ารีวิว 1 ดาวบน Google / Wongnai ทิ้งไว้หลายเดือน ไม่มีใครตอบ คนอื่นเห็นแล้วไม่กล้ามากิน rating ร่วงเรื่อยๆ",
    color: "#5856d6",
  },
  {
    icon: <DollarSign size={20} />,
    text: "Food cost ไม่รู้ตัวเลขจริง",
    detail: "ไม่รู้ว่าเมนูไหนกำไรเท่าไร เมนูไหนขาดทุน ราคาวัตถุดิบขึ้นแต่ไม่ได้ปรับราคา food cost บานปลายจาก 30% เป็น 45%",
    color: "#2997ff",
  },
];

/* ─── 5 Automation Workflows ─── */
const workflows = [
  {
    icon: <MessageSquare size={22} />,
    title: "LINE Order Bot",
    subtitle: "ลูกค้าสั่งอาหารผ่าน LINE → AI รับ order ทันที",
    color: "#06c755",
    steps: [
      "ลูกค้าส่งข้อความสั่งอาหารผ่าน LINE OA เช่น 'ข้าวผัดกุ้ง 2 จาน ต้มยำ 1 ถ้วย'",
      "n8n รับ webhook → Flowise วิเคราะห์ข้อความ จับคู่กับเมนูในระบบ",
      "AI ยืนยันออเดอร์: รายการอาหาร, จำนวน, ราคารวม, เวลาที่ต้องรอ",
      "ตรวจ stock วัตถุดิบอัตโนมัติ — ถ้าวัตถุดิบหมด แนะนำเมนูทดแทน",
      "ส่ง order เข้าระบบ POS / ครัว ผ่าน printer หรือ display",
      "แจ้งลูกค้าเมื่ออาหารเสร็จ พร้อมเวลาโดยประมาณ",
    ],
    tools: ["n8n", "Flowise", "LINE Messaging API", "POS Integration"],
    models: ["Gemini 2.5 Flash (เข้าใจภาษาไทย)", "GPT-4.1 (order ซับซ้อน)"],
    cost: "฿500-1,200/เดือน",
    result: "รับ order ได้ 24/7 ลดงานพนักงานหน้าร้าน 70% ไม่พลาด order อีก",
  },
  {
    icon: <Bell size={22} />,
    title: "Inventory Alert System",
    subtitle: "วัตถุดิบใกล้หมด → AI แจ้งเตือน + สั่งซื้ออัตโนมัติ",
    color: "#ff9500",
    steps: [
      "พนักงานบันทึกวัตถุดิบที่รับเข้า + ที่ใช้ไปในแต่ละวัน (Google Sheets / POS)",
      "n8n check stock ทุก 2 ชั่วโมง เทียบกับ minimum level ที่กำหนด",
      "ถ้าวัตถุดิบต่ำกว่า threshold → แจ้งเตือนผ่าน LINE group ครัว ทันที",
      "AI วิเคราะห์ usage pattern → แนะนำจำนวนสั่งซื้อที่เหมาะสม",
      "สร้าง PO (purchase order) draft ส่งให้ supplier ผ่าน LINE / email",
      "บันทึก price history ของ supplier → แจ้งถ้าราคาขึ้นผิดปกติ",
    ],
    tools: ["n8n", "Google Sheets", "LINE API", "POS Data"],
    models: ["Gemini Flash (monitoring)", "GPT-4.1 (demand forecasting)"],
    cost: "฿400-900/เดือน",
    result: "ลดวัตถุดิบหมด stock 90% ลดของเสีย (waste) 25% ลดต้นทุนซื้อกลางวัน",
  },
  {
    icon: <Star size={22} />,
    title: "Review Auto-Reply",
    subtitle: "รีวิวเข้ามา → AI ตอบทันที + วิเคราะห์ feedback",
    color: "#ff2d55",
    steps: [
      "รีวิวใหม่เข้ามาจาก Google Maps, Wongnai, Facebook, LINE OA",
      "n8n รับ notification → AI วิเคราะห์ sentiment: ชม / ติ / เฉยๆ",
      "รีวิวดี (4-5 ดาว) → AI ตอบขอบคุณ ชวนมากินเมนูใหม่ ส่ง coupon",
      "รีวิวลบ (1-2 ดาว) → AI draft คำขอโทษ + แก้ปัญหา ส่งให้เจ้าของ approve ก่อนตอบ",
      "สรุป insight รายสัปดาห์: อาหารจานไหนถูกติบ่อย, บริการจุดไหนต้องแก้",
      "Track rating trend → แจ้งเตือนถ้า average rating ลดลงต่อเนื่อง",
    ],
    tools: ["n8n", "Flowise", "Google Business API", "Wongnai API"],
    models: ["Gemini Flash (sentiment analysis)", "Claude Sonnet (ตอบรีวิวไทย)"],
    cost: "฿500-1,200/เดือน",
    result: "ตอบรีวิวภายใน 30 นาที rating เพิ่ม 0.3-0.5 ดาว ใน 3 เดือน",
  },
  {
    icon: <Calculator size={22} />,
    title: "Food Cost Calculator",
    subtitle: "รู้ต้นทุนจริงทุกเมนู → ปรับราคาได้แม่นยำ",
    color: "#2997ff",
    steps: [
      "บันทึกสูตรอาหาร (recipe) แต่ละเมนู — วัตถุดิบอะไรบ้าง ใช้ปริมาณเท่าไร",
      "เชื่อมกับราคาวัตถุดิบล่าสุดจาก supplier (อัพเดทอัตโนมัติ)",
      "AI คำนวณ food cost แต่ละเมนู + food cost % (ต้นทุน/ราคาขาย)",
      "แจ้งเตือนถ้าเมนูไหน food cost เกิน 35% → แนะนำปรับราคาหรือเปลี่ยนวัตถุดิบ",
      "วิเคราะห์ menu mix: เมนูไหนขายดีแต่กำไรน้อย, เมนูไหนกำไรดีแต่ขายน้อย",
      "สร้าง report: Star (ขายดี+กำไรดี), Puzzle (กำไรดี+ขายน้อย), Dog (ทั้งขายน้อย+กำไรน้อย)",
    ],
    tools: ["n8n", "Google Sheets", "POS Data", "Supplier Database"],
    models: ["Gemini Flash (calculation)", "GPT-4.1 (menu engineering analysis)"],
    cost: "฿600-1,500/เดือน",
    result: "รู้ต้นทุนจริงทุกเมนู food cost ลดจาก 42% เหลือ 32% กำไรเพิ่ม 25%",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Daily Sales Report",
    subtitle: "ทุกค่ำ → AI สรุปยอดขาย + แนะนำวันถัดไป",
    color: "#5856d6",
    steps: [
      "n8n ดึงข้อมูลยอดขายจาก POS / Google Sheets ตอนร้านปิด ทุกวัน",
      "รวมข้อมูลทุกช่องทาง: หน้าร้าน, LINE order, Grab, LINE MAN, Robinhood",
      "AI วิเคราะห์: เมนูขายดีวันนี้, ช่วงเวลาที่ขายดี, ยอดเฉลี่ย/บิล",
      "เปรียบเทียบกับวันเดียวกันสัปดาห์ก่อน + เดือนก่อน",
      "แนะนำวันถัดไป: เตรียมวัตถุดิบอะไรเพิ่ม, เมนูไหนควร promote",
      "ส่งสรุปผ่าน LINE group เจ้าของ + ผู้จัดการ ทุกคืน 22:00 น.",
    ],
    tools: ["n8n", "Google Sheets", "POS API", "LINE API"],
    models: ["Gemini Flash (daily summary)", "GPT-4.1 (trend analysis)"],
    cost: "฿800-1,800/เดือน",
    result: "เจ้าของเห็นยอดขายทุกวัน วางแผนได้ดี ยอดขายเพิ่ม 15-30%",
  },
];

/* ─── Before/After ─── */
const comparisons = [
  {
    aspect: "รับออเดอร์",
    before: "พนักงานรับโทร + LINE + walk-in พร้อมกัน ตอบไม่ทัน",
    after: "AI รับ order ผ่าน LINE 24/7 ส่งเข้าครัวอัตโนมัติ",
    saving: "ลด 70%",
  },
  {
    aspect: "เช็ค stock วัตถุดิบ",
    before: "นับมือทุกเช้า ลืมบ่อย ของหมดกลางวัน",
    after: "Real-time monitoring แจ้งเตือนอัตโนมัติ",
    saving: "0% หมด stock",
  },
  {
    aspect: "ตอบรีวิวลูกค้า",
    before: "ลืมตอบ ทิ้ง 1 ดาวไว้หลายเดือน",
    after: "AI ตอบทุกรีวิวภายใน 30 นาที",
    saving: "+0.5 ดาว",
  },
  {
    aspect: "คำนวณ food cost",
    before: "ไม่รู้ต้นทุนจริง เดาจากความรู้สึก",
    after: "AI คำนวณทุกเมนู แจ้งเตือนถ้าเกิน target",
    saving: "ลด 10%",
  },
  {
    aspect: "สรุปยอดขาย",
    before: "ดู POS เองตอนปิดร้าน ไม่ได้วิเคราะห์",
    after: "AI สรุป + แนะนำทุกคืน ส่ง LINE ให้เจ้าของ",
    saving: "ขายเพิ่ม 20%",
  },
  {
    aspect: "สั่งซื้อวัตถุดิบ",
    before: "โทรสั่ง supplier เอง จำไม่ได้ว่าสั่งอะไรไป",
    after: "AI สร้าง PO อัตโนมัติ track ราคา supplier",
    saving: "ลด 25%",
  },
];

/* ─── Chat Demo ─── */
const chatMessages = [
  { role: "customer" as const, text: "สั่งข้าวผัดกุ้ง 2 จาน กับต้มยำกุ้ง 1 ถ้วยครับ" },
  { role: "ai" as const, text: "รับออเดอร์ค่ะ!\n\nรายการสั่ง:\n- ข้าวผัดกุ้ง x2 — ฿160\n- ต้มยำกุ้ง x1 — ฿120\n\nรวม ฿280\nเวลาเตรียม ~15 นาที\n\nรับที่ร้านหรือส่ง delivery คะ?" },
  { role: "customer" as const, text: "ส่ง delivery ครับ ซอยสุขุมวิท 31" },
  { role: "ai" as const, text: "รับทราบค่ะ!\n\nสรุป Order #1847\n- ข้าวผัดกุ้ง x2 — ฿160\n- ต้มยำกุ้ง x1 — ฿120\n- ค่าส่ง (ซอย สุขุมวิท 31) — ฿30\n\nรวมทั้งหมด ฿310\n\nชำระเงินได้ที่ลิงก์:\npay.cloudai.th/order/1847\n\nอาหารจะถึงประมาณ 30-40 นาทีค่ะ" },
];

/* ─── Pricing Packages ─── */
const pricingPackages = [
  {
    name: "Single Branch",
    price: "฿14,900",
    period: "/เดือน",
    desc: "สำหรับร้านอาหาร 1 สาขา ร้านกาแฟ ร้านชา",
    color: "#06c755",
    features: [
      "LINE Order Bot (รับ order 24/7)",
      "Inventory Alert (แจ้งเตือน stock)",
      "Review Auto-Reply (Google, FB)",
      "Daily Sales Summary",
      "รองรับ 1,000 orders/เดือน",
      "Support ผ่าน LINE ในเวลาทำการ",
    ],
    highlight: false,
  },
  {
    name: "Multi Branch",
    price: "฿34,900",
    period: "/เดือน",
    desc: "สำหรับร้านอาหาร 2-5 สาขา ร้านแฟรนไชส์",
    color: "#2997ff",
    features: [
      "ทุกอย่างใน Single Branch +",
      "Food Cost Calculator ทุกเมนู",
      "Multi-branch dashboard",
      "เปรียบเทียบยอดขายระหว่างสาขา",
      "รองรับ 5,000 orders/เดือน",
      "Menu engineering analysis",
      "Priority support 7 วัน/สัปดาห์",
    ],
    highlight: true,
  },
  {
    name: "Chain",
    price: "฿69,900",
    period: "/เดือน",
    desc: "สำหรับเชนร้านอาหาร 6+ สาขา franchise",
    color: "#af52de",
    features: [
      "ทุกอย่างใน Multi Branch +",
      "Central kitchen management",
      "Franchise performance tracking",
      "Custom AI workflows ไม่จำกัด",
      "Orders ไม่จำกัดจำนวน",
      "API integration กับ POS ที่ใช้อยู่",
      "Dedicated account manager",
      "SLA 99.9% uptime",
    ],
    highlight: false,
  },
];

/* ─── Tools Used ─── */
const toolsUsed = [
  { name: "n8n", desc: "Workflow automation — เชื่อมต่อ POS, LINE, supplier ทุกระบบ", color: "#ff6d5a" },
  { name: "Flowise", desc: "AI Chatbot + RAG — สร้าง order bot ที่เข้าใจเมนูร้านคุณ", color: "#2997ff" },
  { name: "LINE Messaging API", desc: "รับ order + แจ้งเตือน + ส่ง report ผ่าน LINE OA", color: "#06c755" },
  { name: "Google Sheets", desc: "Database สำหรับ stock, recipe, food cost calculation", color: "#34c759" },
  { name: "POS Integration", desc: "เชื่อมต่อ POS ที่ใช้อยู่ — FoodStory, Ocha, POSRocket", color: "#ff9500" },
  { name: "Google Business API", desc: "ดึงรีวิว + ตอบรีวิวบน Google Maps อัตโนมัติ", color: "#4285f4" },
];

export default function RestaurantSection() {
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
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-5 py-2 mb-6 text-[13px] text-[#ff9500] font-medium">
              <UtensilsCrossed size={16} /> Restaurant & F&B AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
              AI สำหรับ<span className="gradient-text">ร้านอาหาร & F&B</span>
            </h1>
            <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-10 leading-relaxed">
              รับออเดอร์อัตโนมัติ, แจ้งเตือน stock วัตถุดิบ, ตอบรีวิว, คำนวณ food cost, สรุปยอดขาย
              — ให้ AI จัดการงานหลังบ้าน คุณโฟกัสทำอาหารอร่อย
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
              { value: "70%", label: "ลดงานรับ order", color: "#06c755" },
              { value: "0%", label: "วัตถุดิบหมด stock", color: "#ff9500" },
              { value: "+0.5", label: "rating เพิ่มขึ้น", color: "#ff2d55" },
              { value: "32%", label: "food cost ลดเหลือ", color: "#2997ff" },
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
              ปัญหาที่ร้านอาหารเจอทุกวัน
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              ยิ่งร้านยุ่ง ยิ่งมีปัญหาเยอะ — AI ช่วยแก้ได้ทั้งหมด
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
              5 ระบบ AI สำหรับร้านอาหาร & F&B
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เริ่มจากระบบเดียวก็ได้ แล้วค่อยเพิ่ม — ทุกระบบเชื่อมต่อกันอัตโนมัติ
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
              ร้านอาหารที่ใช้ AI เปลี่ยนไปแค่ไหน — ดูตัวเลขจริง
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

      {/* ═══ CHAT DEMO ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[13px] font-semibold text-[#06c755] uppercase tracking-widest mb-3">Live Demo</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
                ลูกค้าสั่ง → AI รับ order ทันที
              </h2>
              <p className="text-base text-[#86868b] leading-relaxed mb-6">
                ดู LINE Order Bot จริง — ลูกค้าพิมพ์สั่งอาหารเป็นภาษาธรรมชาติ AI เข้าใจเมนู,
                คำนวณราคา, เช็ค stock, สร้าง order ส่งเข้าครัว ทั้งหมดอัตโนมัติ
              </p>
              <div className="space-y-3">
                {[
                  "เข้าใจภาษาไทย สั่งแบบปกติได้เลย",
                  "เช็ค stock วัตถุดิบ real-time ก่อนรับ order",
                  "คำนวณราคา + ค่าส่ง อัตโนมัติ",
                  "ส่ง order เข้าครัวทันที ไม่ต้องรอพนักงาน",
                  "แนะนำเมนูเพิ่ม (upsell) อัตโนมัติ",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[#1d1d1f]">
                    <CheckCircle2 size={16} className="text-[#06c755] shrink-0" />
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
                  <span className="text-[12px] text-[#86868b] font-medium ml-2">LINE OA — ร้านอาหาร</span>
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
                        <div className="w-7 h-7 rounded-full bg-[#06c755]/10 flex items-center justify-center mr-2 shrink-0 mt-1">
                          <Bot size={14} className="text-[#06c755]" />
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
                          <UtensilsCrossed size={14} className="text-[#2997ff]" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-black/[0.04]">
                  <div className="bg-white rounded-[14px] border border-[#d2d2d7]/40 flex items-center gap-2 px-4 py-3">
                    <span className="text-[13px] text-[#c7c7cc] flex-1">สั่งอาหาร...</span>
                    <Flame size={16} className="text-[#ff9500]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE DEMO — Restaurant-specific UI ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] tracking-tight mb-3">ดูตัวอย่างจริง</h2>
            <p className="text-[17px] text-[#86868b]">ระบบ AI สำหรับร้านอาหาร — จากสั่งอาหารถึงจัดการครัว</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LINE Order Bot Mockup */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-[#00C300] text-white">
                <span className="text-lg">💬</span>
                <span className="text-[13px] font-semibold">LINE — สั่งอาหารออนไลน์</span>
              </div>
              <div className="p-5 space-y-3 bg-[#7494a5]/5 min-h-[300px]">
                <div className="flex justify-end">
                  <div className="bg-[#06C755] text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[75%]">
                    สั่งข้าวผัดกะเพราหมูสับไข่ดาว 2 จาน กับต้มยำกุ้ง 1 ถ้วยครับ
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white text-[#1d1d1f] text-[13px] px-4 py-3 rounded-2xl rounded-bl-sm max-w-[80%] shadow-sm">
                    <p className="font-medium mb-2">ออเดอร์ #247 ✅</p>
                    <p className="text-[#86868b]">🍳 ข้าวผัดกะเพราหมูสับไข่ดาว x2 — ฿120</p>
                    <p className="text-[#86868b]">🍲 ต้มยำกุ้ง x1 — ฿180</p>
                    <p className="font-semibold mt-2">รวม: ฿420</p>
                    <p className="text-[#86868b] text-[12px] mt-1">⏱️ ประมาณ 15-20 นาที</p>
                    <p className="text-[#2997ff] text-[12px] mt-1">ต้องการเพิ่มเมนูอื่นไหมคะ?</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-[#86868b] px-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#2997ff]/8 text-[#2997ff] font-medium">AI</span>
                  ตอบอัตโนมัติ • 1.2 วินาที
                </div>
              </div>
            </motion.div>

            {/* Kitchen Dashboard Mockup */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
                <span className="text-[13px] font-semibold text-[#1d1d1f]">🍴 Kitchen Dashboard</span>
                <span className="text-[11px] text-[#86868b]">Live</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { id: "#247", items: "กะเพราหมูสับ x2, ต้มยำกุ้ง x1", status: "กำลังทำ", color: "#ff9500", time: "5 นาที" },
                  { id: "#246", items: "ผัดไทย x1, ส้มตำ x2", status: "เสร็จแล้ว", color: "#34c759", time: "12 นาที" },
                  { id: "#245", items: "ข้าวมันไก่ x3", status: "กำลังส่ง", color: "#2997ff", time: "18 นาที" },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 rounded-xl bg-[#fafafa] border border-black/[0.03]">
                    <div>
                      <p className="text-[13px] font-medium text-[#1d1d1f]">{order.id}</p>
                      <p className="text-[11px] text-[#86868b]">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: order.color + "15", color: order.color }}>{order.status}</span>
                      <p className="text-[10px] text-[#86868b] mt-1">{order.time}</p>
                    </div>
                  </div>
                ))}
                {/* Inventory alert */}
                <div className="p-3 rounded-xl bg-[#ff3b30]/5 border border-[#ff3b30]/10">
                  <p className="text-[12px] font-medium text-[#ff3b30] flex items-center gap-1.5">
                    <AlertTriangle size={13} /> แจ้งเตือน: กุ้ง เหลือ 8 ตัว (ต่ำกว่า 10)
                  </p>
                  <p className="text-[11px] text-[#86868b] mt-0.5">AI แนะนำ: สั่งเพิ่ม 2 กก. จาก Supplier A</p>
                </div>
              </div>
            </motion.div>
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
              แพ็คเกจสำหรับร้านอาหาร & F&B
            </h2>
            <p className="text-base text-[#86868b] max-w-xl mx-auto">
              เลือกแพ็คเกจตามขนาดร้าน — ทดลองใช้ฟรี 14 วัน ไม่ต้องผูกบัตร
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
                    ยอดนิยม
                  </div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: pkg.color + "15" }}>
                    {pkg.name === "Single Branch" && <Store size={22} style={{ color: pkg.color }} />}
                    {pkg.name === "Multi Branch" && <Building2 size={22} style={{ color: pkg.color }} />}
                    {pkg.name === "Chain" && <ChefHat size={22} style={{ color: pkg.color }} />}
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
            * ค่า setup ครั้งแรก ฿12,000-45,000 (ขึ้นกับจำนวนระบบ + การเชื่อมต่อ POS) + ค่า API ตามใช้งานจริง / ราคายังไม่รวม VAT
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
              ใช้เครื่องมือ open-source — เชื่อมต่อกับ POS ที่ร้านใช้อยู่แล้วได้ทันที
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
                <UtensilsCrossed size={40} className="text-[#ff9500] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-3">
                  พร้อมให้ AI ช่วยร้านอาหารของคุณ?
                </h2>
                <p className="text-base text-[#86868b] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — เราเข้าไปดูร้านของคุณแล้วแนะนำ solution ที่เหมาะสม
                  เริ่มต้นได้ภายใน 1 สัปดาห์ ทดลองใช้ฟรี 14 วัน ไม่มี commitment
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://lin.ee/cloudai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ff9500] text-white font-medium text-[15px] hover:bg-[#e08600] transition-all shadow-lg shadow-[#ff9500]/20"
                  >
                    <MessageSquare size={18} /> ปรึกษาฟรีผ่าน LINE
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f5f7] text-[#ff9500] font-medium text-[15px] hover:bg-white/60 transition-all"
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
