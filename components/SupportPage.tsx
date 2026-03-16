"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  MessageCircle,
  Monitor,
  Check,
  X,
  AlertTriangle,
  Zap,
  TrendingUp,
  ArrowRight,
  HeartHandshake,
  Wrench,
  Activity,
  Users,
  ChevronRight,
  Server,
  Brain,
  Workflow,
  BadgeCheck,
  Star,
} from "lucide-react";

/* ─── data ─── */

const freeSupportTiers = [
  {
    pkg: "Starter",
    days: 30,
    color: "#2997ff",
    covered: [
      "แก้ bug ที่เกิดจากการติดตั้ง",
      "ตอบคำถามการใช้งาน ผ่าน LINE",
      "ปรับ workflow เล็กน้อย (ไม่เกิน 2 ครั้ง)",
      "ช่วย troubleshoot error",
    ],
  },
  {
    pkg: "Professional",
    days: 60,
    color: "#5856d6",
    covered: [
      "ทุกอย่างใน Starter",
      "ปรับ workflow ไม่จำกัดครั้ง",
      "Optimize model ให้เร็ว/ถูกลง",
      "Training เพิ่มเติม 1 ชม.",
      "Monthly check-in 1 ครั้ง",
    ],
  },
  {
    pkg: "Enterprise",
    days: 90,
    color: "#bf5af2",
    covered: [
      "ทุกอย่างใน Professional",
      "Priority response ภายใน 2 ชม.",
      "On-site visit 1 ครั้ง",
      "Performance report",
      "Dedicated LINE group",
      "Knowledge base update ฟรี",
    ],
  },
];

const maintenancePlans = [
  {
    name: "Basic",
    price: "3,900",
    color: "#2997ff",
    desc: "ดูแลพื้นฐาน สำหรับระบบที่เสถียรแล้ว",
    features: [
      { text: "Server & workflow monitoring 24/7", included: true },
      { text: "Bug fixes & error resolution", included: true },
      { text: "Monthly health check-in call", included: true },
      { text: "LINE support (9:00-18:00 จ-ศ)", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Security patches & updates", included: true },
      { text: "Workflow updates & changes", included: false },
      { text: "Model optimization", included: false },
      { text: "Dedicated account manager", included: false },
      { text: "On-site visit", included: false },
    ],
    mockup: {
      type: "dashboard",
      title: "Monitoring Dashboard",
      items: [
        { label: "Uptime", value: "99.95%", status: "green" },
        { label: "Workflows Active", value: "12/12", status: "green" },
        { label: "Errors (7d)", value: "0", status: "green" },
        { label: "API Cost (MTD)", value: "฿1,847", status: "neutral" },
      ],
    },
  },
  {
    name: "Pro",
    price: "7,900",
    color: "#5856d6",
    badge: "แนะนำ",
    desc: "ดูแลเต็มรูปแบบ + ปรับปรุงต่อเนื่อง",
    features: [
      { text: "Server & workflow monitoring 24/7", included: true },
      { text: "Bug fixes & error resolution", included: true },
      { text: "Monthly health check-in call", included: true },
      { text: "Priority LINE support (9:00-21:00 ทุกวัน)", included: true },
      { text: "Monthly performance report", included: true },
      { text: "Security patches & updates", included: true },
      { text: "Workflow updates (ไม่จำกัด)", included: true },
      { text: "Model optimization & cost reduction", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "On-site visit", included: false },
    ],
    mockup: {
      type: "chat",
      title: "LINE Priority Support",
      messages: [
        { from: "customer", text: "Workflow ส่ง email หยุดทำงานครับ" },
        { from: "support", text: "รับทราบครับ กำลังตรวจสอบให้เลย" },
        { from: "support", text: "พบปัญหาแล้วครับ API key หมดอายุ กำลัง renew ให้" },
        { from: "support", text: "แก้ไขเสร็จแล้วครับ ระบบกลับมาปกติ (12 นาที)" },
      ],
    },
  },
  {
    name: "Priority",
    price: "14,900",
    color: "#bf5af2",
    desc: "ดูแลระดับ Enterprise + SLA การันตี",
    features: [
      { text: "Server & workflow monitoring 24/7", included: true },
      { text: "Bug fixes & error resolution", included: true },
      { text: "Weekly health check-in call", included: true },
      { text: "24/7 LINE & phone support", included: true },
      { text: "Weekly performance report", included: true },
      { text: "Security patches & updates", included: true },
      { text: "Workflow updates (ไม่จำกัด)", included: true },
      { text: "Model optimization & cost reduction", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "On-site visit 1 ครั้ง/เดือน", included: true },
    ],
    mockup: {
      type: "sla",
      title: "SLA Dashboard — Priority",
      items: [
        { label: "Uptime (30d)", value: "99.97%", target: "99.9%" },
        { label: "Avg Response", value: "18 min", target: "< 30 min" },
        { label: "Issues Resolved", value: "14/14", target: "100%" },
        { label: "On-site Visits", value: "1/1", target: "1/mo" },
      ],
    },
  },
];

const slaLevels = [
  {
    priority: "Critical",
    desc: "ระบบหยุดทำงานทั้งหมด",
    icon: AlertTriangle,
    color: "#ff3b30",
    basic: "4 ชม.",
    pro: "1 ชม.",
    priority_plan: "30 นาที",
  },
  {
    priority: "High",
    desc: "Workflow หลักมีปัญหา",
    icon: Zap,
    color: "#ff9500",
    basic: "8 ชม.",
    pro: "2 ชม.",
    priority_plan: "1 ชม.",
  },
  {
    priority: "Medium",
    desc: "ปัญหาที่มี workaround ได้",
    icon: Wrench,
    color: "#ffcc00",
    basic: "24 ชม.",
    pro: "4 ชม.",
    priority_plan: "2 ชม.",
  },
  {
    priority: "Low",
    desc: "คำถาม / ปรับแต่งเล็กน้อย",
    icon: MessageCircle,
    color: "#30d158",
    basic: "48 ชม.",
    pro: "8 ชม.",
    priority_plan: "4 ชม.",
  },
];

const commonIssues = [
  {
    icon: Brain,
    problem: "AI ตอบผิด / ตอบไม่ตรง",
    cause: "Knowledge base ไม่อัพเดท หรือ prompt ไม่ชัดเจน",
    solution: "Retrain model, อัพเดท knowledge base, ปรับ prompt engineering",
    time: "1-3 วัน",
    color: "#2997ff",
  },
  {
    icon: Workflow,
    problem: "Workflow หยุดทำงาน",
    cause: "API error, server restart, หรือ trigger เปลี่ยน",
    solution: "Monitoring ตรวจจับอัตโนมัติ → แจ้งทีม → แก้ไขทันที",
    time: "30 นาที - 4 ชม.",
    color: "#5856d6",
  },
  {
    icon: TrendingUp,
    problem: "API ราคาขึ้น / ค่าใช้จ่ายสูง",
    cause: "Model pricing เปลี่ยน หรือ usage เพิ่มขึ้น",
    solution: "Optimize model selection, ใช้ caching, switch ไป model ที่ถูกกว่า",
    time: "1-2 วัน",
    color: "#ff9500",
  },
  {
    icon: Star,
    problem: "อยากเพิ่ม feature ใหม่",
    cause: "ธุรกิจเติบโต ต้องการ automation เพิ่ม",
    solution: "ประเมิน scope → เสนอ quote → พัฒนาเพิ่มเติม",
    time: "3-7 วัน",
    color: "#bf5af2",
  },
];

const upgradePath = [
  {
    from: "Starter",
    to: "Professional",
    color: "#2997ff",
    toColor: "#5856d6",
    gains: [
      "เพิ่มจาก 3 → 10 workflows",
      "ได้ OpenClaw + Dify",
      "LINE/WhatsApp integration",
      "Training ทีมงาน",
    ],
  },
  {
    from: "Professional",
    to: "Enterprise",
    color: "#5856d6",
    toColor: "#bf5af2",
    gains: [
      "Workflow ไม่จำกัด",
      "Multi-model strategy",
      "Custom integration",
      "Multi-server architecture",
      "On-site training 1 วัน",
    ],
  },
];

const addOns = [
  { icon: Workflow, label: "เพิ่ม Workflow", price: "฿2,900/workflow", color: "#2997ff" },
  { icon: MessageCircle, label: "เพิ่ม Platform (LINE, WhatsApp, etc.)", price: "฿4,900/platform", color: "#5856d6" },
  { icon: Brain, label: "เพิ่ม Knowledge Base / RAG", price: "฿3,900/ชุด", color: "#bf5af2" },
  { icon: Server, label: "LocalAI Setup (Privacy)", price: "฿29,900+", color: "#30d158" },
];

/* ─── component ─── */

export default function SupportPage() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
              Support & Maintenance
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5">
              หลังติดตั้งเสร็จ
              <br />
              <span className="text-[#6e6e73]">เราดูแลให้ทุกอย่าง</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto">
              ระบบ AI ไม่ใช่แค่ติดตั้งแล้วจบ — ต้องดูแล monitor และปรับปรุงอย่างต่อเนื่อง
              เราอยู่เคียงข้างคุณตลอดเส้นทาง
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 1 — POST-SETUP JOURNEY ═══════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
              Post-Setup Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Support ฟรีหลังติดตั้ง
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
              ทุกแพ็คเกจมี support ฟรีหลังติดตั้ง เพื่อให้แน่ใจว่าระบบทำงานสมบูรณ์
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {freeSupportTiers.map((tier, i) => (
              <motion.div
                key={tier.pkg}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="apple-card p-8"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: tier.color + "12" }}
                >
                  <Shield size={24} style={{ color: tier.color }} />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">{tier.pkg}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-[#1d1d1f]">{tier.days}</span>
                  <span className="text-[15px] text-[#6e6e73]">วัน ฟรี</span>
                </div>
                <div className="space-y-2.5">
                  {tier.covered.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: tier.color + "10" }}
                      >
                        <Check size={10} style={{ color: tier.color }} />
                      </div>
                      <span className="text-[13px] text-[#1d1d1f]/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* After free period */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 apple-card p-8 md:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ff9500]/10 flex items-center justify-center shrink-0">
                <Clock size={24} className="text-[#ff9500]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">
                  หลังหมด Free Support แล้วเป็นอย่างไร?
                </h3>
                <p className="text-[15px] text-[#6e6e73] mb-4 leading-relaxed">
                  ระบบยังทำงานปกติ 100% — คุณเป็นเจ้าของทุกอย่าง ไม่มี lock-in
                  แต่ถ้าต้องการให้เราดูแลต่อ มี 3 ตัวเลือก:
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "ดูแลเอง",
                      desc: "ใช้คู่มือที่เราให้ ดูแลระบบเอง ติดต่อเราเฉพาะเวลาต้องการ (คิดรายครั้ง)",
                      color: "#30d158",
                    },
                    {
                      title: "Maintenance Plan",
                      desc: "เลือกแพลนรายเดือน ให้เราดูแลให้ทั้งหมด สบายใจไม่ต้องห่วง",
                      color: "#2997ff",
                    },
                    {
                      title: "เรียกเมื่อต้องการ",
                      desc: "ไม่ต้องจ่ายรายเดือน เรียกเราเฉพาะเวลามีปัญหา (฿1,500/ชม.)",
                      color: "#5856d6",
                    },
                  ].map((opt) => (
                    <div key={opt.title} className="bg-[#f5f5f7] rounded-2xl p-5">
                      <div
                        className="w-2 h-2 rounded-full mb-3"
                        style={{ background: opt.color }}
                      />
                      <p className="text-[14px] font-semibold text-[#1d1d1f] mb-1">{opt.title}</p>
                      <p className="text-[12px] text-[#6e6e73] leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — MONTHLY MAINTENANCE PLANS ═══════════ */}
      <section className="py-24 md:py-32 bg-[#f5f5f7]/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">
              Monthly Plans
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Monthly Maintenance Plans
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
              เลือกแพลนที่เหมาะกับธุรกิจ ยกเลิกได้ทุกเมื่อ ไม่มี lock-in
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`apple-card relative p-8 !overflow-visible ${plan.badge ? "!bg-white/65 lg:-mt-4 lg:mb-4" : ""}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-[11px] font-semibold px-4 py-1 rounded-full text-white"
                      style={{ background: plan.color }}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6 pb-6 border-b border-black/[0.04]">
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-[11px] text-[#6e6e73]">฿</span>
                    <span className="text-4xl font-bold text-[#1d1d1f]">{plan.price}</span>
                    <span className="text-[13px] text-[#6e6e73]">/เดือน</span>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] mt-1">{plan.desc}</p>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: f.included ? plan.color + "10" : "rgba(0,0,0,0.03)",
                        }}
                      >
                        {f.included ? (
                          <Check size={10} style={{ color: plan.color }} />
                        ) : (
                          <X size={10} className="text-[#d2d2d7]" />
                        )}
                      </div>
                      <span
                        className={`text-[13px] ${f.included ? "text-[#1d1d1f]/80" : "text-[#d2d2d7]"}`}
                      >
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mockup */}
                <div className="rounded-xl bg-[#f5f5f7] p-4 mb-6">
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-3">
                    {plan.mockup.title}
                  </p>

                  {plan.mockup.type === "dashboard" && (
                    <div className="grid grid-cols-2 gap-2">
                      {plan.mockup.items?.map((item: any) => (
                        <div key={item.label} className="bg-white rounded-lg p-3">
                          <p className="text-[10px] text-[#6e6e73] mb-1">{item.label}</p>
                          <p className="text-[15px] font-semibold text-[#1d1d1f]">{item.value}</p>
                          {(item as any).status === "green" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[#30d158] mt-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.mockup.type === "chat" && (
                    <div className="space-y-2">
                      {plan.mockup.messages?.map((msg: any, idx: number) => (
                        <div
                          key={idx}
                          className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] ${
                              msg.from === "customer"
                                ? "bg-[#30d158] text-white"
                                : "bg-white text-[#1d1d1f]"
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {plan.mockup.type === "sla" && (
                    <div className="space-y-2">
                      {plan.mockup.items?.map((item: any) => (
                        <div key={item.label} className="bg-white rounded-lg p-3 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-[#6e6e73]">{item.label}</p>
                            <p className="text-[14px] font-semibold text-[#1d1d1f]">{item.value}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[9px] text-[#6e6e73]">Target</p>
                            <p className="text-[11px] text-[#30d158] font-medium">{item.target}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="block text-center text-[14px] font-medium py-3 rounded-full transition-all"
                  style={
                    plan.badge
                      ? { background: plan.color, color: "white", boxShadow: `0 4px 16px ${plan.color}30` }
                      : { background: "#f5f5f7", color: "#1d1d1f" }
                  }
                >
                  เลือกแพลนนี้
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — SLA ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[13px] font-semibold text-[#30d158] uppercase tracking-widest mb-3">
              Service Level Agreement
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              SLA ของเรา
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
              เราให้คำมั่นสัญญาที่ชัดเจน ทั้ง response time และ uptime
            </p>
          </motion.div>

          {/* Response Time Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 md:p-8 mb-8"
          >
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-6 flex items-center gap-2">
              <Clock size={20} className="text-[#2997ff]" />
              Response Time ตาม Priority
            </h3>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[1fr_1fr_100px_100px_100px] gap-4 pb-3 border-b border-black/[0.06] mb-2">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider">Priority</p>
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider">Description</p>
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider text-center">Basic</p>
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider text-center">Pro</p>
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider text-center">Priority</p>
            </div>

            <div className="space-y-3 md:space-y-0">
              {slaLevels.map((level, i) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.priority}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="md:grid md:grid-cols-[1fr_1fr_100px_100px_100px] gap-4 py-3 border-b border-black/[0.04] last:border-0"
                  >
                    <div className="flex items-center gap-2 mb-1 md:mb-0">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center"
                        style={{ background: level.color + "15" }}
                      >
                        <Icon size={14} style={{ color: level.color }} />
                      </div>
                      <span className="text-[14px] font-semibold text-[#1d1d1f]">{level.priority}</span>
                    </div>
                    <p className="text-[13px] text-[#6e6e73] mb-2 md:mb-0 md:flex md:items-center">
                      {level.desc}
                    </p>
                    <div className="flex md:block gap-4 md:gap-0">
                      <p className="text-[13px] text-[#1d1d1f] md:text-center">
                        <span className="md:hidden text-[11px] text-[#6e6e73]">Basic: </span>
                        {level.basic}
                      </p>
                    </div>
                    <div className="flex md:block gap-4 md:gap-0">
                      <p className="text-[13px] text-[#5856d6] font-medium md:text-center">
                        <span className="md:hidden text-[11px] text-[#6e6e73]">Pro: </span>
                        {level.pro}
                      </p>
                    </div>
                    <div className="flex md:block gap-4 md:gap-0">
                      <p className="text-[13px] text-[#bf5af2] font-semibold md:text-center">
                        <span className="md:hidden text-[11px] text-[#6e6e73]">Priority: </span>
                        {level.priority_plan}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Uptime & Downtime */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="apple-card p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#30d158]/10 flex items-center justify-center mb-5">
                <Activity size={24} className="text-[#30d158]" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">Uptime Commitment</h3>
              <div className="space-y-3 mb-5">
                {[
                  { plan: "Basic", uptime: "99.5%", downtime: "~3.6 ชม./เดือน" },
                  { plan: "Pro", uptime: "99.8%", downtime: "~1.4 ชม./เดือน" },
                  { plan: "Priority", uptime: "99.9%", downtime: "~43 นาที/เดือน" },
                ].map((item) => (
                  <div key={item.plan} className="flex items-center justify-between py-2 border-b border-black/[0.04] last:border-0">
                    <span className="text-[14px] font-medium text-[#1d1d1f]">{item.plan}</span>
                    <div className="text-right">
                      <span className="text-[15px] font-bold text-[#30d158]">{item.uptime}</span>
                      <p className="text-[11px] text-[#6e6e73]">max downtime: {item.downtime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="apple-card p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ff3b30]/10 flex items-center justify-center mb-5">
                <AlertTriangle size={24} className="text-[#ff3b30]" />
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3">อะไรนับเป็น Downtime</h3>
              <div className="space-y-3">
                {[
                  { text: "Server หรือ workflow หยุดทำงานโดยที่ไม่ได้แจ้งล่วงหน้า", count: true },
                  { text: "API ตอบช้าเกิน 30 วินาที ต่อเนื่องมากกว่า 5 นาที", count: true },
                  { text: "Chatbot offline ไม่สามารถตอบลูกค้าได้", count: true },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#ff3b30]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-[#ff3b30]" />
                    </div>
                    <span className="text-[13px] text-[#1d1d1f]/80">{item.text}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-black/[0.04]">
                  <p className="text-[12px] font-semibold text-[#6e6e73] mb-2">ไม่นับเป็น Downtime:</p>
                  {[
                    "Scheduled maintenance (แจ้งล่วงหน้า 24 ชม.)",
                    "Third-party API down (OpenAI, Google, etc.)",
                    "ปัญหาจาก internet ของลูกค้า",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2.5 mb-2">
                      <div className="w-4 h-4 rounded-full bg-[#30d158]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-[#30d158]" />
                      </div>
                      <span className="text-[12px] text-[#6e6e73]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — COMMON ISSUES ═══════════ */}
      <section className="py-24 md:py-32 bg-[#f5f5f7]/60">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">
              Troubleshooting
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              ปัญหาที่พบบ่อย & วิธีแก้
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
              ปัญหาเหล่านี้เป็นเรื่องปกติ — เราเจอมาหมดแล้ว และรู้วิธีแก้
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonIssues.map((issue, i) => {
              const Icon = issue.icon;
              return (
                <motion.div
                  key={issue.problem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="apple-card p-8"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: issue.color + "12" }}
                    >
                      <Icon size={24} style={{ color: issue.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-3">{issue.problem}</h3>

                      <div className="space-y-3">
                        <div>
                          <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-1">
                            สาเหตุ
                          </p>
                          <p className="text-[13px] text-[#1d1d1f]/70">{issue.cause}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-1">
                            วิธีแก้
                          </p>
                          <p className="text-[13px] text-[#1d1d1f]/80">{issue.solution}</p>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                          <Clock size={12} className="text-[#6e6e73]" />
                          <span className="text-[12px] text-[#6e6e73]">
                            ระยะเวลาแก้ไข: {issue.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — UPGRADE PATH ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[13px] font-semibold text-[#bf5af2] uppercase tracking-widest mb-3">
              Upgrade Path
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              เติบโตไปด้วยกัน
            </h2>
            <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
              เริ่มเล็ก ขยายเมื่อพร้อม — เราออกแบบให้ scale ได้ง่าย
            </p>
          </motion.div>

          {/* Upgrade arrows */}
          <div className="space-y-6 mb-12">
            {upgradePath.map((path, i) => (
              <motion.div
                key={path.from}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="apple-card p-8"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                  <span
                    className="text-[14px] font-semibold px-4 py-1.5 rounded-full text-white"
                    style={{ background: path.color }}
                  >
                    {path.from}
                  </span>
                  <ArrowRight size={20} className="text-[#6e6e73] hidden sm:block" />
                  <ChevronRight size={20} className="text-[#6e6e73] sm:hidden rotate-90" />
                  <span
                    className="text-[14px] font-semibold px-4 py-1.5 rounded-full text-white"
                    style={{ background: path.toColor }}
                  >
                    {path.to}
                  </span>
                </div>
                <p className="text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-3">
                  สิ่งที่ได้เพิ่ม
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {path.gains.map((gain) => (
                    <div key={gain} className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: path.toColor + "10" }}
                      >
                        <Check size={10} style={{ color: path.toColor }} />
                      </div>
                      <span className="text-[13px] text-[#1d1d1f]/80">{gain}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-8 md:p-10"
          >
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">เพิ่มเติมแบบ A La Carte</h3>
            <p className="text-[13px] text-[#6e6e73] mb-6">
              ไม่ต้อง upgrade แพ็คเกจ — เลือกเพิ่มเฉพาะสิ่งที่ต้องการ
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {addOns.map((addon) => {
                const Icon = addon.icon;
                return (
                  <div key={addon.label} className="flex items-center gap-4 bg-[#f5f5f7] rounded-2xl p-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: addon.color + "12" }}
                    >
                      <Icon size={20} style={{ color: addon.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#1d1d1f] truncate">{addon.label}</p>
                      <p className="text-[12px] text-[#6e6e73]">{addon.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* LocalAI CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 apple-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#30d158]/5 to-transparent rounded-full -mr-20 -mt-20" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#30d158]/10 flex items-center justify-center shrink-0">
                <Server size={28} className="text-[#30d158]" />
              </div>
              <div className="flex-1">
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">
                  ต้องการ Privacy สูงสุด? ลอง LocalAI
                </h3>
                <p className="text-[14px] text-[#6e6e73] leading-relaxed">
                  รัน AI model บนเครื่องของคุณเอง ข้อมูลไม่ออกไปไหน เหมาะสำหรับธุรกิจที่มี sensitive data
                  เช่น สถานพยาบาล สำนักงานกฎหมาย หรือการเงิน
                </p>
              </div>
              <a
                href="/home-ai"
                className="shrink-0 text-[14px] font-medium px-6 py-3 rounded-full bg-[#30d158] text-white transition-all hover:shadow-lg"
              >
                ดู LocalAI
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
