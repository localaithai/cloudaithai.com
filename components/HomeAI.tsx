"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, Music, Lightbulb, ShoppingBag, CloudSun, Tv, Wifi } from "lucide-react";

const features = [
  { icon: <MessageCircle size={20} />, title: "สั่งผ่าน LINE / WhatsApp", desc: "พิมพ์หรือพูด สั่ง AI ทำทุกอย่าง — เปิดไฟ ดูปฏิทิน สั่งของ", color: "#2997ff" },
  { icon: <Calendar size={20} />, title: "จัดการปฏิทิน", desc: "\"นัดหมอพรุ่งนี้บ่ายโมง\" → AI สร้าง event + ตั้งแจ้งเตือนให้", color: "#5856d6" },
  { icon: <CloudSun size={20} />, title: "พยากรณ์อากาศ + แนะนำ", desc: "\"พรุ่งนี้ฝนตกไหม\" → AI ดูพยากรณ์ + แนะนำหยิบร่ม", color: "#5ac8fa" },
  { icon: <ShoppingBag size={20} />, title: "สั่งของ / ค้นข้อมูล", desc: "\"หาร้านซูชิดีๆ แถวสีลม\" → AI ค้น + สรุปรีวิว + จองโต๊ะ", color: "#ff9500" },
  { icon: <Music size={20} />, title: "ควบคุมเพลง / Media", desc: "เชื่อม Spotify, YouTube — สั่งเปิดเพลง สร้าง playlist ได้", color: "#ff2d55" },
  { icon: <Lightbulb size={20} />, title: "Smart Home", desc: "เชื่อม Home Assistant — สั่งเปิด/ปิดไฟ แอร์ กล้อง ผ่าน AI", color: "#ffcc00" },
  { icon: <Tv size={20} />, title: "สรุปข่าว / Content", desc: "ทุกเช้า AI สรุปข่าวที่คุณสนใจ ส่ง LINE ให้อ่าน 2 นาที", color: "#34c759" },
  { icon: <Wifi size={20} />, title: "ทำงานจากทุกที่", desc: "Cloud-based — ใช้ได้ทุกที่มี internet ไม่ต้องติดตั้งอะไร", color: "#af52de" },
];

const demos = [
  { user: "พรุ่งนี้มีนัดอะไรบ้าง?", ai: "พรุ่งนี้คุณมี 3 นัด:\n☕ 09:00 ประชุมทีม Marketing\n🏥 13:00 นัดหมอฟัน (Thonglor Dental)\n🍽️ 19:00 ดินเนอร์กับคุณแม่ที่ร้านจันทร์", delay: 0 },
  { user: "สรุปอีเมลวันนี้หน่อย", ai: "คุณได้อีเมล 12 ฉบับวันนี้:\n🔴 ด่วน: Invoice #4421 จาก Supplier A ครบกำหนดพรุ่งนี้\n📋 สำคัญ: สัญญาใหม่จาก Client B รอ sign\n📌 ที่เหลือ: 10 ฉบับ marketing/newsletter", delay: 0.5 },
  { user: "สั่งกาแฟ Starbucks ส่งบ้าน", ai: "ได้เลย! ออเดอร์ปกติของคุณ:\n☕ Iced Caramel Macchiato Grande\n🏠 ส่งที่ 42/7 สุขุมวิท 39\n💰 ฿195 (รวมค่าส่ง)\n\nสั่งผ่าน Grab แล้ว — ประมาณ 20 นาทีถึงค่ะ 🚗", delay: 1 },
];

export default function HomeAI() {
  return (
    <section id="home-ai" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#af52de] uppercase tracking-widest mb-3">Home AI</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            ผู้ช่วย AI ที่บ้าน
          </h2>
          <p className="text-base text-[#86868b] max-w-xl mx-auto">
            เหมือนมี JARVIS ส่วนตัว — สั่งผ่าน LINE จัดการปฏิทิน สั่งของ ควบคุม smart home ได้หมด
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Features grid */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="apple-card relative p-4"
                >
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] rounded-full flex items-center justify-center mb-2" style={{ color: f.color }}>
                      {f.icon}
                    </div>
                    <h3 className="text-[13px] font-semibold text-[#1d1d1f] mb-0.5">{f.title}</h3>
                    <p className="text-[11px] text-[#86868b] leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/home-ai"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#af52de] text-white font-medium text-[14px] hover:bg-[#9b40c4] transition-all shadow-lg shadow-[#af52de]/20"
            >
              ดูรายละเอียด Home AI <ArrowRight size={16} />
            </motion.a>
          </div>

          {/* Right: Chat demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="apple-card relative p-0 overflow-hidden">
              {/* Chat header */}
              <div className="nav-glass px-5 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[12px] text-[#86868b] font-medium ml-2">Home AI Assistant</span>
                <span className="ml-auto relative w-2 h-2 rounded-full bg-[#34c759]">
                  <span className="absolute inset-0 rounded-full bg-[#34c759] animate-ping opacity-50" />
                </span>
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-4 max-h-[460px] overflow-y-auto">
                {demos.map((demo, i) => (
                  <div key={i} className="space-y-3">
                    {/* User */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: demo.delay }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#2997ff] text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%]">
                        {demo.user}
                      </div>
                    </motion.div>
                    {/* AI */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: demo.delay + 0.3 }}
                      className="flex justify-start"
                    >
                      <div className="apple-card relative !rounded-2xl !rounded-bl-md p-4 max-w-[85%] text-[13px] text-[#1d1d1f] whitespace-pre-line leading-relaxed">
                        {demo.ai}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
