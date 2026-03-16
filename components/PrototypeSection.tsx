"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Play,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
  Gift,
  ShoppingCart,
  UtensilsCrossed,
  Scale,
  Bot,
  LayoutDashboard,
  Server,
  Workflow,
  Clock,
  FileText,
  Users,
  Rocket,
  Sparkles,
  CircleDot,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Section 1 — ทดลองก่อน จ่ายทีหลัง
   ───────────────────────────────────────────── */

const steps = [
  {
    icon: MessageSquare,
    label: "ปรึกษาฟรี",
    desc: "บอกปัญหาและเป้าหมายธุรกิจ",
  },
  {
    icon: Lightbulb,
    label: "สร้าง Prototype",
    desc: "เราสร้างระบบทดลองให้ใน 3-5 วัน",
  },
  {
    icon: Play,
    label: "ลูกค้าทดลอง",
    desc: "ใช้งานจริง ทดสอบกับทีมงาน",
  },
  {
    icon: CheckCircle,
    label: "ตัดสินใจ",
    desc: "พอใจค่อยจ่าย ไม่พอใจไม่ต้องจ่าย",
  },
];

function SectionTryBeforePay() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide text-[#2997ff] uppercase mb-3"
        >
          Zero-Risk Model
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4"
        >
          ทดลองก่อน จ่ายทีหลัง
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto mb-16"
        >
          เราสร้าง Working Prototype ฟรีให้คุณทดลองใช้งานจริง
          <br />
          <span className="font-semibold text-[#1d1d1f]">
            ไม่พอใจ ไม่ต้องจ่าย
          </span>
        </motion.p>

        {/* 4-Step Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              <div className="apple-card rounded-2xl p-8 h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-bold text-[#2997ff]/40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-5 mx-auto">
                  <step.icon className="w-7 h-7 text-[#2997ff]" />
                </div>

                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                  {step.label}
                </h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[#2997ff]/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3"
        >
          <ShieldCheck className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            ไม่มีสัญญาผูกมัด &middot; ไม่มีค่าใช้จ่ายแอบแฝง &middot;
            ยกเลิกได้ทุกเมื่อ
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 — Prototype คืออะไร
   ───────────────────────────────────────────── */

const protoFeatures = [
  {
    icon: Bot,
    title: "Working AI Chatbot",
    desc: "แชทบอทที่ทำงานจริง ตอบคำถามจากข้อมูลสินค้า/บริการของคุณ",
  },
  {
    icon: Workflow,
    title: "Sample Workflows",
    desc: "1-2 workflow อัตโนมัติที่รันได้จริง เช่น แจ้งเตือน LINE, สรุปข้อมูล",
  },
  {
    icon: LayoutDashboard,
    title: "Mockup Dashboard",
    desc: "หน้าจอตัวอย่างแสดงภาพรวมระบบเต็ม ให้เห็นว่า production จะเป็นอย่างไร",
  },
  {
    icon: Server,
    title: "รันบน Demo Server ของเรา",
    desc: "ลูกค้าไม่ต้องจ่ายค่า server ทุกอย่างรันบน VPS ของเราระหว่างทดลอง",
  },
];

function SectionWhatIsPrototype() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wide text-[#2997ff] uppercase mb-3"
          >
            What You Get
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4"
          >
            Prototype คืออะไร
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#6e6e73] max-w-2xl mx-auto"
          >
            ไม่ใช่แค่ slide หรือ mockup แต่เป็นระบบที่ทำงานได้จริง
            สร้างจากข้อมูลจริงของธุรกิจคุณ
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {protoFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="apple-card rounded-2xl p-8 bg-[#fbfbfd] border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#2997ff]/10 flex items-center justify-center flex-shrink-0">
                  <feat.icon className="w-6 h-6 text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mock Prototype Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
        >
          {/* Demo badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              DEMO PROTOTYPE
            </span>
          </div>

          {/* Title bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-[#6e6e73] ml-3">
              prototype.cloudai-thailand.com/dashboard
            </span>
          </div>

          {/* Dashboard content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "ข้อความวันนี้", value: "247", change: "+18%" },
                { label: "ตอบอัตโนมัติ", value: "92%", change: "+5%" },
                { label: "ลูกค้าใหม่", value: "34", change: "+12%" },
                { label: "เวลาตอบเฉลี่ย", value: "1.2s", change: "-40%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#fbfbfd] rounded-xl border border-gray-100 p-4"
                >
                  <p className="text-xs text-[#6e6e73] mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-[#1d1d1f]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 font-medium">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Chat preview row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#fbfbfd] rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                  Live Chat Preview
                </p>
                <div className="space-y-2.5">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-3.5 h-3.5 text-[#6e6e73]" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-2 text-sm text-[#1d1d1f]">
                      สินค้า A ราคาเท่าไหร่ครับ?
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-[#2997ff] rounded-2xl rounded-tr-sm px-3.5 py-2 text-sm text-white">
                      สินค้า A ราคา ฿1,290 ค่ะ มีโปรลด 10% ถ้าสั่ง 3 ชิ้นขึ้นไป
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#2997ff]/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-[#2997ff]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fbfbfd] rounded-xl border border-gray-100 p-5">
                <p className="text-sm font-semibold text-[#1d1d1f] mb-3">
                  Workflow Status
                </p>
                <div className="space-y-3">
                  {[
                    {
                      name: "Auto-reply LINE",
                      status: "Active",
                      color: "green",
                    },
                    {
                      name: "สรุปยอดขายรายวัน",
                      status: "Active",
                      color: "green",
                    },
                    {
                      name: "แจ้งเตือน stock ต่ำ",
                      status: "Pending",
                      color: "amber",
                    },
                  ].map((wf, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-[#1d1d1f]">{wf.name}</span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          wf.color === "green"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {wf.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 — ตัวอย่าง Prototype (3 Industries)
   ───────────────────────────────────────────── */

const industries = [
  {
    icon: ShoppingCart,
    industry: "E-Commerce",
    title: "LINE Bot ตอบคำถามสินค้า",
    desc: "บอทดึงข้อมูลจาก catalog จริงของคุณ ตอบราคา สต็อก โปรโมชั่น ได้ทันที",
    before: {
      label: "ก่อน",
      lines: [
        "ลูกค้า: สินค้า X มีสีอะไรบ้างคะ",
        "...(รอแอดมิน 2 ชม.)...",
        'แอดมิน: "มีสีดำกับขาวค่ะ"',
        "ลูกค้า: ราคาเท่าไหร่คะ",
        "...(รอแอดมิน 1 ชม.)...",
      ],
    },
    after: {
      label: "หลัง (AI Prototype)",
      lines: [
        "ลูกค้า: สินค้า X มีสีอะไรบ้างคะ",
        'AI: "มีสีดำ ขาว และน้ำเงิน ราคา ฿890',
        "ตอนนี้ลด 15% เหลือ ฿756.50",
        'สั่งเลยไหมคะ?"',
        "ตอบใน 1.2 วินาที",
      ],
    },
  },
  {
    icon: UtensilsCrossed,
    industry: "Restaurant",
    title: "Order Bot พร้อมเมนูจริง",
    desc: "บอทรับออเดอร์อัตโนมัติ ใช้เมนูและราคาจริงของร้าน พร้อมแนะนำเมนูเพิ่ม",
    before: {
      label: "ก่อน",
      lines: [
        "ลูกค้า: เมนูวันนี้มีอะไรบ้าง",
        "...(โทรไม่ติด)...",
        "ลูกค้า: แชทไป LINE ร้าน",
        "...(รอ 30 นาที)...",
        'พนักงาน: "ดูในเพจนะคะ"',
      ],
    },
    after: {
      label: "หลัง (AI Prototype)",
      lines: [
        "ลูกค้า: อยากสั่งข้าวผัดกุ้ง 2 จาน",
        'AI: "ข้าวผัดกุ้ง 2 จาน = ฿180',
        "แนะนำ: ต้มยำกุ้ง ฿120 ลด 10%",
        'รวม ฿288 ส่งที่ไหนคะ?"',
        "รับออเดอร์ 24 ชม.",
      ],
    },
  },
  {
    icon: Scale,
    industry: "Legal / สำนักงานกฎหมาย",
    title: "RAG Search เอกสารกฎหมาย",
    desc: "ค้นหาข้อมูลจากเอกสารกฎหมายตัวอย่าง ตอบพร้อมอ้างอิงมาตรา",
    before: {
      label: "ก่อน",
      lines: [
        "ทนาย: ค้นคำพิพากษาเรื่อง X",
        "...(เปิดไฟล์ 200+ หน้า)...",
        "...(ค้น Ctrl+F ไม่เจอ)...",
        "...(เปลี่ยนไฟล์ ค้นใหม่)...",
        "ใช้เวลา 2-3 ชั่วโมง",
      ],
    },
    after: {
      label: "หลัง (AI Prototype)",
      lines: [
        "ทนาย: ค้นคำพิพากษาเรื่อง X",
        'AI: "พบ 3 คำพิพากษาที่เกี่ยวข้อง',
        "1. ฎีกาที่ 1234/2567 — มาตรา 420",
        '2. ฎีกาที่ 5678/2566 — มาตรา 112"',
        "ค้นเจอใน 2 วินาที",
      ],
    },
  },
];

function SectionExamples() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wide text-[#2997ff] uppercase mb-3"
          >
            Real Examples
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4"
          >
            ตัวอย่าง Prototype
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#6e6e73] max-w-2xl mx-auto"
          >
            ดูตัวอย่างจริงจากธุรกิจ 3 ประเภท ที่เราสร้าง prototype ให้ทดลอง
          </motion.p>
        </div>

        <div className="space-y-12">
          {industries.map((item, idx) => (
            <motion.div
              key={item.industry}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="apple-card rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2997ff]/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-[#2997ff]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2997ff] uppercase tracking-wide">
                    {item.industry}
                  </p>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="px-8 pb-6 text-sm text-[#6e6e73]">{item.desc}</p>

              {/* Before / After */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-100">
                {/* Before */}
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 bg-red-50/30">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wide mb-3">
                    {item.before.label}
                  </p>
                  <div className="space-y-2">
                    {item.before.lines.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm ${
                          line.startsWith("...")
                            ? "text-red-400 italic"
                            : "text-[#1d1d1f]"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="p-6 md:p-8 bg-green-50/30">
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-3">
                    {item.after.label}
                  </p>
                  <div className="space-y-2">
                    {item.after.lines.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm ${
                          i === item.after.lines.length - 1
                            ? "text-green-600 font-semibold mt-2"
                            : "text-[#1d1d1f]"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
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

/* ─────────────────────────────────────────────
   Section 4 — จาก Prototype สู่ Production
   ───────────────────────────────────────────── */

const timeline = [
  {
    days: "Day 1-2",
    title: "ปรึกษา + รับข้อมูล",
    desc: "คุยเป้าหมาย รับข้อมูลสินค้า/บริการ กำหนด scope",
    icon: MessageSquare,
    color: "bg-blue-500",
  },
  {
    days: "Day 3-5",
    title: "สร้าง Prototype",
    desc: "สร้าง chatbot, workflow, dashboard ทดลอง",
    icon: Lightbulb,
    color: "bg-purple-500",
  },
  {
    days: "Day 6-7",
    title: "ลูกค้าทดลอง + Feedback",
    desc: "ทีมงานทดลองใช้จริง ให้ feedback แก้ไข",
    icon: Play,
    color: "bg-amber-500",
  },
  {
    days: "Day 8-14",
    title: "Build Production",
    desc: "ถ้าตกลง — deploy ระบบจริง ต่อ API ครบ เทรน AI เต็มรูปแบบ",
    icon: Rocket,
    color: "bg-green-500",
  },
];

function SectionTimeline() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wide text-[#2997ff] uppercase mb-3"
          >
            Timeline
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4"
          >
            จาก Prototype สู่ Production
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[#6e6e73] max-w-2xl mx-auto"
          >
            ภายใน 2 สัปดาห์ คุณมีระบบ AI ที่ทำงานจริง
          </motion.p>
        </div>

        {/* Animated timeline bar */}
        <div className="relative mb-12">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-[#2997ff] via-purple-500 to-green-500"
            />
          </div>

          {/* Day markers */}
          <div className="flex justify-between mt-2">
            {["Day 1", "Day 5", "Day 7", "Day 14"].map((d) => (
              <span key={d} className="text-xs text-[#6e6e73]">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline cards */}
        <div className="space-y-6">
          {timeline.map((step, i) => (
            <motion.div
              key={step.days}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-start gap-5"
            >
              {/* Dot + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-px h-12 bg-gray-200 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4">
                <p className="text-xs font-bold text-[#2997ff] uppercase tracking-wide mb-1">
                  {step.days}
                </p>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6e6e73]">{step.desc}</p>

                {/* Special note for Day 8-14 */}
                {i === timeline.length - 1 && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-green-700 font-medium">
                      เริ่ม build เฉพาะเมื่อลูกค้าพอใจ prototype แล้วเท่านั้น
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 — ทำไม Prototype สำคัญ
   ───────────────────────────────────────────── */

const reasons = [
  {
    icon: ShieldCheck,
    title: "ลดความเสี่ยง",
    desc: "เห็นของจริงก่อนจ่ายเงิน ไม่ต้องเสี่ยงจ่ายค่าพัฒนาแล้วไม่ได้อย่างที่คิด",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: SlidersHorizontal,
    title: "ปรับแต่งได้",
    desc: "แก้ไขก่อน deploy จริง ให้ตรงกับ workflow และความต้องการของทีมงาน",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Zap,
    title: "เร็ว",
    desc: "3-5 วันได้ทดลองระบบจริง ไม่ต้องรอหลายเดือนเหมือน software house ทั่วไป",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Gift,
    title: "ฟรี",
    desc: "ไม่มีค่าใช้จ่ายสำหรับ prototype เราลงทุนให้ก่อน เพราะมั่นใจในคุณภาพ",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

function SectionWhyPrototype() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-wide text-[#2997ff] uppercase mb-3"
          >
            Why It Matters
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4"
          >
            ทำไม Prototype สำคัญ
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="apple-card rounded-2xl p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${reason.bg} flex items-center justify-center mb-5`}
              >
                <reason.icon className={`w-7 h-7 ${reason.color}`} />
              </div>

              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 — CTA: ขอ Prototype ฟรี
   ───────────────────────────────────────────── */

function SectionCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] p-12 md:p-16 shadow-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-16 rounded-2xl bg-[#2997ff] flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            ขอ Prototype ฟรี
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-8 max-w-lg mx-auto"
          >
            บอกธุรกิจของคุณ แล้วเราจะสร้าง prototype ให้ทดลองฟรีใน 3-5 วัน
            ไม่มีข้อผูกมัด
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://lin.ee/cloudai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b84e] text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              <MessageSquare className="w-5 h-5" />
              LINE: @cloudai
            </a>

            <a
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base border border-white/20"
            >
              ดูราคาแพ็คเกจ
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 text-sm text-gray-500"
          >
            ปรึกษาฟรี &middot; สร้าง Prototype ฟรี &middot; ไม่พอใจไม่ต้องจ่าย
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main Export
   ───────────────────────────────────────────── */

export default function PrototypeSection() {
  return (
    <div>
      <SectionTryBeforePay />
      <SectionWhatIsPrototype />
      <SectionExamples />
      <SectionTimeline />
      <SectionWhyPrototype />
      <SectionCTA />
    </div>
  );
}
