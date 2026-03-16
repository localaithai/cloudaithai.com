"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Calendar, Mail, Lightbulb, ShoppingBag, UtensilsCrossed,
  Plane, Newspaper, Tv, Wifi, MessageCircle, ArrowRight,
  CheckCircle2, Send, Bot, User, Sun, Cloud, Moon, Coffee,
  Clock, Smartphone, Speaker, Thermometer, Lock, Eye,
  Music, Radio, Globe, Zap, Heart, Star, ChevronDown
} from "lucide-react";

/* ─── 8 Capabilities ─── */
const capabilities = [
  {
    icon: <Calendar size={22} />,
    title: "จัดการปฏิทิน",
    desc: "สั่ง AI นัดประชุม เช็คตาราง ตั้ง reminder ผ่าน LINE ไม่ต้องเปิด app ปฏิทิน",
    details: [
      "\"นัดหมอฟันพรุ่งนี้บ่ายโมง\" → สร้าง event + reminder",
      "\"สัปดาห์นี้มีนัดอะไรบ้าง\" → สรุปทุกนัดหมาย",
      "\"เลื่อนประชุมไป 15 โมง\" → อัพเดท + แจ้งคนที่เกี่ยวข้อง",
      "เช็ครวมปฏิทินทุกคนในบ้าน หาเวลาว่างร่วมกัน",
    ],
    color: "#5856d6",
  },
  {
    icon: <Mail size={22} />,
    title: "จัดการอีเมล",
    desc: "AI อ่าน สรุป จัดลำดับ draft ตอบอีเมลให้ — คุณแค่ review แล้วกด Send",
    details: [
      "\"สรุปอีเมลวันนี้หน่อย\" → สรุป 3 บรรทัดแต่ละฉบับ",
      "จัดลำดับ: ด่วน / สำคัญ / ทั่วไป / spam",
      "Draft ตอบอีเมลให้ ตาม tone ที่คุณต้องการ",
      "แจ้งเตือนอีเมลด่วนผ่าน LINE ทันที",
    ],
    color: "#007aff",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Smart Home Control",
    desc: "สั่ง AI เปิด/ปิดไฟ แอร์ กล้อง ล็อคประตู ผ่าน LINE หรือเสียง",
    details: [
      "\"เปิดไฟห้องนอน 50%\" → ปรับแสงทันที",
      "\"ตั้งแอร์ 25 องศา\" → ปรับอุณหภูมิ + ตั้ง timer",
      "\"เปิดกล้องหน้าบ้าน\" → ส่งภาพ live ผ่าน LINE",
      "สร้าง scene: \"กลับบ้าน\" → เปิดไฟ + แอร์ + เพลง",
    ],
    color: "#ffcc00",
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "ช่วยซื้อของ + จองร้าน",
    desc: "สั่ง AI หาร้าน จองโต๊ะ สั่งอาหาร สั่งของ Grab/LINE MAN ได้เลย",
    details: [
      "\"หาร้านซูชิดีๆ แถวสีลม\" → ค้น + สรุปรีวิว + จองโต๊ะ",
      "\"สั่งกาแฟ Starbucks ส่งบ้าน\" → สั่ง order ปกติผ่าน Grab",
      "\"ซื้อนมหมดแล้ว\" → เพิ่มเข้า shopping list + สั่งซื้อ",
      "เปรียบเทียบราคาสินค้าจากหลาย platform",
    ],
    color: "#ff9500",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: "ช่วยเรื่องอาหาร",
    desc: "AI แนะนำเมนู วางแผนมื้ออาหารสัปดาห์ สร้าง shopping list",
    details: [
      "\"วันนี้ทำอะไรกินดี\" → แนะนำ 3 เมนูจากของที่มีในตู้เย็น",
      "วางแผนเมนูทั้งสัปดาห์ (ดูแลโภชนาการ)",
      "สร้าง shopping list อัตโนมัติจากเมนูที่เลือก",
      "\"มี ไข่ หมูสับ ผักบุ้ง\" → AI หาสูตรให้ทันที",
    ],
    color: "#34c759",
  },
  {
    icon: <Plane size={22} />,
    title: "วางแผนเดินทาง",
    desc: "AI ช่วยหาตั๋ว จองโรงแรม วางแผน itinerary ทริปทั้งหมด",
    details: [
      "\"อยากไปเชียงใหม่สุดสัปดาห์นี้\" → หาตั๋ว + โรงแรม + แผนเที่ยว",
      "สร้าง itinerary รายวัน (เช้า กลางวัน เย็น)",
      "เตือนเรื่อง check-in, เที่ยวบิน, สถานที่",
      "แนะนำร้านอาหาร + ที่เที่ยวจากรีวิวจริง",
    ],
    color: "#5ac8fa",
  },
  {
    icon: <Newspaper size={22} />,
    title: "สรุปข่าว + Content",
    desc: "ทุกเช้า AI สรุปข่าวที่คุณสนใจ ส่ง LINE ให้อ่าน 2 นาที",
    details: [
      "เลือกหัวข้อ: tech, crypto, การเมือง, กีฬา, บันเทิง",
      "AI สรุป 5-10 ข่าวเด่นทุกเช้า 7 โมง",
      "\"สรุปข่าว crypto วันนี้\" → สรุป + วิเคราะห์ trend",
      "ส่งบทความที่น่าสนใจตาม interest ของคุณ",
    ],
    color: "#ff3b30",
  },
  {
    icon: <Tv size={22} />,
    title: "ความบันเทิง + เพลง",
    desc: "สั่ง AI เปิดเพลง สร้าง playlist แนะนำหนัง/ซีรีส์ที่ต้องดู",
    details: [
      "\"เปิดเพลง chill ๆ\" → เปิด Spotify playlist ที่เหมาะ",
      "\"แนะนำหนังดีๆ บน Netflix\" → สรุป + rating + เหมาะกับใคร",
      "สร้าง playlist ตามอารมณ์หรือกิจกรรม",
      "ควบคุม smart TV / speaker ผ่าน AI",
    ],
    color: "#af52de",
  },
];

/* ─── Smart Home Integrations ─── */
const smartHomeIntegrations = [
  {
    name: "Home Assistant",
    desc: "Hub กลาง เชื่อมอุปกรณ์ smart home ทุกยี่ห้อ",
    devices: ["ไฟ Philips Hue", "แอร์ Daikin/LG", "กล้อง Reolink", "ล็อค Yale/Samsung"],
    color: "#007aff",
  },
  {
    name: "Tuya / Smart Life",
    desc: "อุปกรณ์ราคาประหยัด ใช้ง่าย มีให้เลือกเยอะ",
    devices: ["ปลั๊กอัจฉริยะ", "หลอดไฟ WiFi", "รีโมท IR", "เซ็นเซอร์ประตู/หน้าต่าง"],
    color: "#ff9500",
  },
  {
    name: "Xiaomi / Mi Home",
    desc: "Ecosystem ใหญ่ ราคาดี อุปกรณ์เชื่อมกันได้หมด",
    devices: ["เครื่องฟอกอากาศ", "หุ่นยนต์ดูดฝุ่น", "กล้องวงจรปิด", "เซ็นเซอร์อุณหภูมิ"],
    color: "#34c759",
  },
];

/* ─── Daily Routine Demo ─── */
const dailyRoutine = [
  {
    time: "07:00",
    period: "เช้า",
    icon: <Sun size={20} />,
    color: "#ff9500",
    actions: [
      { trigger: "ตื่นนอน (alarm)", action: "เปิดไฟห้องนอน 30% → 100% ค่อยๆ สว่าง" },
      { trigger: "\"สวัสดีตอนเช้า\"", action: "AI สรุปข่าว + ตารางวันนี้ + พยากรณ์อากาศ" },
      { trigger: "เข้าห้องน้ำ", action: "เปิดเพลงเบาๆ + อุ่นน้ำ (smart water heater)" },
      { trigger: "ออกจากบ้าน", action: "ปิดไฟ + แอร์ + ล็อคประตู + เปิดกล้อง" },
    ],
  },
  {
    time: "12:00",
    period: "กลางวัน",
    icon: <Coffee size={20} />,
    color: "#007aff",
    actions: [
      { trigger: "\"สั่งกาแฟ\"", action: "สั่ง order ปกติจาก Starbucks ส่งออฟฟิศ" },
      { trigger: "\"นัดประชุม 14:00\"", action: "เช็คปฏิทิน + สร้าง event + ส่ง invite" },
      { trigger: "\"สรุปอีเมล\"", action: "สรุป 15 ฉบับ → 3 บรรทัดแต่ละอัน + จัดลำดับ" },
      { trigger: "\"พรุ่งนี้ฝนตกไหม\"", action: "ดูพยากรณ์ + แนะนำหยิบร่ม" },
    ],
  },
  {
    time: "18:00",
    period: "เย็น",
    icon: <Cloud size={20} />,
    color: "#5856d6",
    actions: [
      { trigger: "GPS ใกล้ถึงบ้าน", action: "เปิดแอร์ 25 องศา + เปิดไฟทางเดิน" },
      { trigger: "\"ทำอะไรกินดี\"", action: "แนะนำ 3 เมนูจากของในตู้เย็น + สูตร" },
      { trigger: "\"จองร้านอาหาร\"", action: "หาร้านตาม preference + จอง 2 ที่นั่ง" },
      { trigger: "\"เปิด Netflix\"", action: "เปิด TV + แนะนำหนัง/ซีรีส์ที่น่าดู" },
    ],
  },
  {
    time: "22:00",
    period: "กลางคืน",
    icon: <Moon size={20} />,
    color: "#af52de",
    actions: [
      { trigger: "\"Good night\"", action: "ปิดไฟทุกห้อง ยกเว้นทางเดิน (dimmed)" },
      { trigger: "ตั้ง alarm", action: "\"ปลุก 7 โมง\" → ตั้ง alarm + wake-up routine" },
      { trigger: "Security mode", action: "ล็อคประตู + เปิดกล้อง + เซ็นเซอร์ motion" },
      { trigger: "สรุปวันนี้", action: "AI สรุปสิ่งที่ทำ + เตรียม to-do พรุ่งนี้" },
    ],
  },
];

/* ─── Chat Demo ─── */
const chatMessages = [
  { role: "user" as const, text: "พรุ่งนี้มีนัดอะไรบ้าง?" },
  { role: "ai" as const, text: "พรุ่งนี้คุณมี 3 นัดค่ะ:\n\n☕ 09:00 ประชุมทีม Marketing (Google Meet)\n🏥 13:00 นัดหมอฟัน (Thonglor Dental Clinic)\n🍽️ 19:00 ดินเนอร์กับคุณแม่ที่ร้านจันทร์\n\nต้องการให้เตรียมอะไรเพิ่มไหมคะ?" },
  { role: "user" as const, text: "สรุปอีเมลวันนี้หน่อย" },
  { role: "ai" as const, text: "วันนี้คุณได้อีเมล 12 ฉบับค่ะ:\n\n🔴 ด่วน: Invoice #4421 จาก Supplier A ครบกำหนดพรุ่งนี้\n📋 สำคัญ: สัญญาใหม่จาก Client B รอ sign\n📌 ทั่วไป: 8 ฉบับ newsletter/marketing\n🗑️ ไม่สำคัญ: 2 ฉบับ promotion\n\nต้องการให้ draft ตอบอีเมลด่วนไหมคะ?" },
  { role: "user" as const, text: "draft ตอบ Invoice ด่วนให้หน่อย" },
  { role: "ai" as const, text: "Draft ตอบอีเมลให้แล้วค่ะ:\n\n📧 To: supplier-a@company.com\nSubject: Re: Invoice #4421 - Payment Confirmation\n\n\"สวัสดีครับ/ค่ะ\n\nรับทราบ Invoice #4421 จำนวน ฿45,000 แล้ว\nจะดำเนินการจ่ายภายในวันนี้ครับ/ค่ะ\n\nขอบคุณครับ/ค่ะ\"\n\n✅ ส่งเลย หรือ ✏️ แก้ไขก่อน?" },
  { role: "user" as const, text: "ส่งเลย แล้วกลับบ้านเปิดแอร์ 25 องศาด้วย" },
  { role: "ai" as const, text: "ทำให้แล้ว 2 อย่างค่ะ:\n\n📧 ส่งอีเมลตอบ Invoice #4421 แล้ว ✅\n❄️ เปิดแอร์ห้องนั่งเล่น 25°C แล้ว ✅\n   → ประมาณ 15 นาทีห้องจะเย็นพอดีค่ะ\n\nต้องการอะไรเพิ่มไหมคะ? 😊" },
];

/* ─── OpenClaw Info ─── */
const openClawFeatures = [
  { icon: <Globe size={16} />, text: "Open-source AI agent framework", color: "#007aff" },
  { icon: <Zap size={16} />, text: "รองรับ tools/functions เชื่อม API ภายนอก", color: "#ff9500" },
  { icon: <Lock size={16} />, text: "ข้อมูลอยู่ที่คุณ ไม่ส่งไปไหน", color: "#34c759" },
  { icon: <Smartphone size={16} />, text: "ใช้ผ่าน LINE, WhatsApp, Web", color: "#5856d6" },
  { icon: <Heart size={16} />, text: "เรียนรู้ preferences จากการใช้งาน", color: "#ff2d55" },
  { icon: <Star size={16} />, text: "Customizable — เพิ่ม skill ได้ไม่จำกัด", color: "#af52de" },
];

/* ─── Pricing ─── */
const pricingPlans = [
  {
    name: "Personal",
    price: "฿9,900",
    period: "ค่า setup ครั้งเดียว",
    apiCost: "~฿500-1,500/เดือน",
    color: "#007aff",
    features: [
      "ปฏิทิน + อีเมล AI",
      "สรุปข่าวรายวัน",
      "Shopping assistant",
      "Smart Home (1 ห้อง, 5 อุปกรณ์)",
      "LINE integration",
      "1 user",
    ],
    best: false,
  },
  {
    name: "Family",
    price: "฿19,900",
    period: "ค่า setup ครั้งเดียว",
    apiCost: "~฿1,500-3,500/เดือน",
    color: "#af52de",
    features: [
      "ทุกอย่างใน Personal",
      "Smart Home (ทั้งบ้าน, unlimited อุปกรณ์)",
      "เมนูอาหาร + shopping list",
      "วางแผนเดินทาง",
      "ความบันเทิง (Spotify, Netflix, TV)",
      "ปฏิทินครอบครัว (sync ทุกคน)",
      "5 users",
      "Daily routine automation",
    ],
    best: true,
  },
];

export default function HomeAISection() {
  const [expandedCap, setExpandedCap] = useState<number | null>(null);

  return (
    <div className="mesh-gradient min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass-pill px-5 py-2 mb-6 text-[13px] text-[#af52de] font-medium">
              <Home size={16} /> Home AI Assistant
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1c1c1e] tracking-tight mb-6">
              <span className="gradient-text">JARVIS</span> ส่วนตัวของคุณ
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto mb-4 leading-relaxed">
              ผู้ช่วย AI ที่เข้าใจคุณ — จัดการปฏิทิน, อีเมล, smart home, สั่งของ, วางแผนมื้ออาหาร, เดินทาง
              ทั้งหมดสั่งผ่าน LINE แค่พิมพ์หรือพูด
            </p>
            <p className="text-[14px] text-[#8e8e93] max-w-xl mx-auto mb-10">
              Powered by OpenClaw — open-source AI agent framework ข้อมูลอยู่ที่คุณ 100%
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "8+", label: "ความสามารถ", color: "#af52de" },
              { value: "24/7", label: "พร้อมใช้งาน", color: "#007aff" },
              { value: "LINE", label: "สั่งผ่าน LINE", color: "#34c759" },
              { value: "100%", label: "ข้อมูลเป็นของคุณ", color: "#ff9500" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ WHAT IS HOME AI ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[13px] font-semibold text-[#af52de] uppercase tracking-widest mb-3">What is Home AI?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-4">
                เหมือนมี JARVIS จาก Iron Man
              </h2>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-4">
                Home AI คือผู้ช่วย AI ส่วนตัวที่ทำงานให้คุณ 24/7 สั่งผ่าน LINE แค่พิมพ์ภาษาไทย
                ไม่ต้องเรียนรู้ command ไม่ต้องติดตั้ง app ใหม่
              </p>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-6">
                ต่างจาก Siri หรือ Google Assistant ตรงที่ Home AI <strong>เชื่อมกับบริการจริง</strong>
                ได้ — สั่งของ Grab, จองร้านอาหาร, จ่ายบิล, ควบคุม smart home ทุกยี่ห้อ
                และ <strong>เรียนรู้ความชอบของคุณ</strong> เช่น กาแฟที่ชอบสั่ง อุณหภูมิแอร์ที่ชอบ
              </p>
              <div className="flex flex-wrap gap-2">
                {["พิมพ์ภาษาไทย", "ไม่ต้อง command", "เชื่อม API จริง", "เรียนรู้ได้"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1.5 glass-pill text-[#af52de] font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* JARVIS visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 text-center shimmer-bg">
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#af52de] to-[#5856d6] mx-auto mb-5 flex items-center justify-center shadow-lg shadow-[#af52de]/30">
                    <Bot size={40} className="text-white" />
                  </div>
                  <h3 className="text-[20px] font-bold gradient-text mb-2">Home AI</h3>
                  <p className="text-[13px] text-[#6e6e73] mb-4">by CloudAI Thailand</p>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {[
                      { icon: <MessageCircle size={14} />, text: "สั่งผ่าน LINE" },
                      { icon: <Wifi size={14} />, text: "Smart Home" },
                      { icon: <Calendar size={14} />, text: "ปฏิทิน + อีเมล" },
                      { icon: <ShoppingBag size={14} />, text: "สั่งของ + จองร้าน" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2 text-[11px] text-[#6e6e73] glass-pill px-3 py-2">
                        <span className="text-[#af52de]">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 8 CAPABILITIES ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              8 ความสามารถหลัก
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              แต่ละความสามารถเชื่อมกับ API จริง — ไม่ใช่แค่ตอบคำถาม แต่ทำงานให้จริงๆ
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className={`glass-card relative overflow-hidden ${expandedCap === i ? "!bg-white/95" : ""}`}>
                  <button
                    onClick={() => setExpandedCap(expandedCap === i ? null : i)}
                    className="w-full text-left p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center shrink-0" style={{ color: cap.color }}>
                        {cap.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-semibold text-[#1c1c1e] mb-0.5">{cap.title}</h3>
                        <p className="text-[12px] text-[#8e8e93] leading-relaxed">{cap.desc}</p>
                      </div>
                      <motion.div animate={{ rotate: expandedCap === i ? 180 : 0 }} className="shrink-0">
                        <ChevronDown size={14} className="text-[#d2d2d7]" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedCap === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 space-y-2">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent mb-3" />
                          {cap.details.map((d, di) => (
                            <div key={di} className="flex items-start gap-2 text-[12px] text-[#1c1c1e]/80">
                              <CheckCircle2 size={13} style={{ color: cap.color }} className="shrink-0 mt-0.5" />
                              {d}
                            </div>
                          ))}
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

      {/* ═══ OPENCLAW INTEGRATION ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#007aff] uppercase tracking-widest mb-3">Powered by OpenClaw</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              Open-source AI Agent Framework
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              Home AI สร้างบน OpenClaw — framework ที่เราพัฒนาเอง ข้อมูลทั้งหมดอยู่ที่คุณ ไม่ส่งไปไหน
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {openClawFeatures.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card p-5"
              >
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg glass-pill flex items-center justify-center shrink-0" style={{ color: f.color }}>
                    {f.icon}
                  </div>
                  <p className="text-[13px] text-[#1c1c1e] leading-relaxed">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SMART HOME INTEGRATIONS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ffcc00] uppercase tracking-widest mb-3">Smart Home</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              เชื่อมอุปกรณ์ Smart Home ทุกยี่ห้อ
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              ผ่าน Home Assistant — เชื่อมอุปกรณ์ทุกยี่ห้อเข้าด้วยกัน สั่งผ่าน AI ได้ทั้งหมด
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {smartHomeIntegrations.map((sh, i) => (
              <motion.div
                key={sh.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center mb-4" style={{ color: sh.color }}>
                    <Wifi size={22} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-[#1c1c1e] mb-1">{sh.name}</h3>
                  <p className="text-[12px] text-[#8e8e93] mb-4">{sh.desc}</p>
                  <div className="space-y-2">
                    {sh.devices.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-[12px] text-[#1c1c1e]">
                        <CheckCircle2 size={12} style={{ color: sh.color }} className="shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DAILY ROUTINE DEMO ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#5856d6] uppercase tracking-widest mb-3">Daily Routine</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              AI ดูแลคุณตลอดทั้งวัน
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              ตั้งแต่ตื่นนอนจนเข้านอน AI ทำงานให้คุณอัตโนมัติ
            </p>
          </motion.div>

          <div className="space-y-6">
            {dailyRoutine.map((period, i) => (
              <motion.div
                key={period.period}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: period.color + "15", color: period.color }}>
                      {period.icon}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#1c1c1e]">{period.period}</h3>
                      <p className="text-[12px] text-[#8e8e93]">{period.time}</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {period.actions.map((action, ai) => (
                      <div key={ai} className="bg-[#fafafa] rounded-xl p-4">
                        <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-1">Trigger</p>
                        <p className="text-[12px] text-[#1c1c1e] font-medium mb-2">{action.trigger}</p>
                        <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-1">Action</p>
                        <p className="text-[12px] text-[#1c1c1e]/80">{action.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-widest mb-3">Multi-turn Chat</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-4">
                คุยกับ AI เหมือนคุยกับคน
              </h2>
              <p className="text-base text-[#6e6e73] leading-relaxed mb-6">
                Home AI จำบริบทได้ — ถามต่อเนื่องได้ สั่งหลายอย่างในข้อความเดียวได้
                ไม่ต้องพูดซ้ำ ไม่ต้อง explain ใหม่
              </p>
              <div className="space-y-3">
                {[
                  "จำบริบทการสนทนา (multi-turn)",
                  "สั่งหลายอย่างในข้อความเดียว",
                  "เข้าใจภาษาไทยธรรมชาติ",
                  "ทำงานจริง ไม่ใช่แค่ตอบคำถาม",
                  "เรียนรู้ความชอบของคุณเอง",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[#1c1c1e]">
                    <CheckCircle2 size={16} className="text-[#34c759] shrink-0" />
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
              <div className="glass-card relative p-0 overflow-hidden">
                <div className="liquid-glass-strong px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[12px] text-[#6e6e73] font-medium ml-2">Home AI Assistant</span>
                  <span className="ml-auto relative w-2 h-2 rounded-full bg-[#34c759]">
                    <span className="absolute inset-0 rounded-full bg-[#34c759] animate-ping opacity-50" />
                  </span>
                </div>

                <div className="p-5 space-y-3 max-h-[560px] overflow-y-auto">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-7 h-7 rounded-full bg-[#af52de]/10 flex items-center justify-center mr-2 shrink-0 mt-1">
                          <Bot size={14} className="text-[#af52de]" />
                        </div>
                      )}
                      <div
                        className={`text-[13px] px-4 py-2.5 max-w-[80%] whitespace-pre-line leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#007aff] text-white rounded-2xl rounded-br-md"
                            : "glass-card relative !rounded-2xl !rounded-bl-md p-4 text-[#1c1c1e]"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.role === "user" && (
                        <div className="w-7 h-7 rounded-full bg-[#007aff]/10 flex items-center justify-center ml-2 shrink-0 mt-1">
                          <User size={14} className="text-[#007aff]" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 border-t border-black/[0.04]">
                  <div className="glass-input flex items-center gap-2 px-4 py-3">
                    <span className="text-[13px] text-[#c7c7cc] flex-1">พิมพ์ข้อความ...</span>
                    <Send size={16} className="text-[#007aff]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              แพ็คเกจ Home AI
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              จ่ายค่า setup ครั้งเดียว + ค่า API ตามใช้งานจริง
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-7 relative !overflow-visible ${plan.best ? "ring-2 ring-[#af52de]/30" : ""}`}
              >
                {plan.best && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-4 py-1 rounded-full bg-[#af52de] text-white">
                    แนะนำ
                  </div>
                )}
                <div className="relative z-10">
                  <h3 className="text-[18px] font-semibold text-[#1c1c1e] mb-1">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-0.5" style={{ color: plan.color }}>{plan.price}</p>
                  <p className="text-[12px] text-[#8e8e93] mb-1">{plan.period}</p>
                  <p className="text-[13px] text-[#6e6e73] mb-1">+ ค่า API {plan.apiCost}</p>
                  <p className="text-[11px] text-[#8e8e93] mb-6">หรือใช้ Mac Mini แทน VPS — ไม่มีค่า hosting</p>

                  <div className="space-y-2.5 mb-7">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-[13px] text-[#1c1c1e]">
                        <CheckCircle2 size={15} style={{ color: plan.color }} className="shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://lin.ee/cloudai"
                    className="block w-full text-center py-3.5 rounded-full font-medium text-[15px] transition-all"
                    style={{
                      background: plan.best ? plan.color : "transparent",
                      color: plan.best ? "white" : plan.color,
                      border: plan.best ? "none" : `1.5px solid ${plan.color}`,
                    }}
                  >
                    เลือกแพ็คเกจนี้
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[12px] text-[#8e8e93] mt-6"
          >
            * ค่า setup รวมการติดตั้ง Home Assistant, เชื่อม smart home devices, และ training AI ตาม preferences ของคุณ
          </motion.p>
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
            <div className="glass-card p-10 shimmer-bg">
              <div className="relative z-10">
                <Home size={40} className="text-[#af52de] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c1c1e] mb-3">
                  พร้อมมี JARVIS ส่วนตัว?
                </h2>
                <p className="text-base text-[#6e6e73] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — บอกว่ามี smart home อะไรบ้าง อยากให้ AI ช่วยอะไร เราออกแบบระบบให้เลย
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://lin.ee/cloudai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#af52de] text-white font-medium text-[15px] hover:bg-[#9b40c4] transition-all shadow-lg shadow-[#af52de]/20"
                  >
                    <MessageCircle size={18} /> ปรึกษาฟรีผ่าน LINE
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-pill text-[#af52de] font-medium text-[15px] hover:bg-white/60 transition-all"
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
