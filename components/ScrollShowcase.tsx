"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── Cinematic scroll-driven workflow pipeline ─── */
const pipeline = [
  { emoji: "💬", title: "ข้อความเข้า", sub: "ลูกค้าส่งข้อความผ่าน LINE", color: "#2997ff" },
  { emoji: "🧠", title: "AI วิเคราะห์", sub: "เข้าใจ intent + ภาษาไทย", color: "#5856d6" },
  { emoji: "🔍", title: "ค้นหาข้อมูล", sub: "RAG ค้นจาก knowledge base", color: "#af52de" },
  { emoji: "✨", title: "สร้างคำตอบ", sub: "Frontier Model generate response", color: "#34c759" },
  { emoji: "🚀", title: "ส่งกลับทันที", sub: "ตอบกลับใน < 3 วินาที", color: "#ff9500" },
];

export default function ScrollShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="apple-section section-gray relative overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] mb-4">
            ดูว่า AI ทำงานยังไง.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#86868b] max-w-[600px] mx-auto leading-[1.47]">
            จากข้อความลูกค้า ถึงคำตอบอัจฉริยะ ใน 3 วินาที
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#e5e5ea] -translate-y-1/2" />
          <motion.div
            className="hidden md:block absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#2997ff] via-[#5856d6] to-[#34c759]"
            style={{ width: useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]) }}
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-3 relative z-10">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center"
              >
                {/* Icon circle */}
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center shadow-lg relative"
                  style={{ boxShadow: `0 8px 30px ${step.color}15` }}
                  whileInView={{ scale: [0.8, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                >
                  <span className="text-2xl md:text-3xl">{step.emoji}</span>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: step.color + "30" }}
                    animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                </motion.div>

                <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{step.title}</h3>
                <p className="text-[12px] text-[#86868b]">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat demo - cinematic reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-lg mx-auto"
        >
          <div className="apple-card p-0 overflow-hidden shadow-2xl shadow-black/[0.08]">
            {/* macOS window chrome */}
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-[#e5e5ea]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">AI Chat — ร้านค้าออนไลน์</span>
              <span className="ml-auto relative w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#34c759]" />
                <span className="absolute inset-0 rounded-full bg-[#34c759] animate-ping opacity-30" />
              </span>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-4 bg-white">
              {/* Customer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex justify-end"
              >
                <div className="bg-[#2997ff] text-white text-[14px] px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[75%]">
                  สินค้ารุ่น X200 ราคาเท่าไหร่ มี stock ไหมครับ?
                </div>
              </motion.div>

              {/* Typing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-1.5 px-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div key={i} className="w-2 h-2 rounded-full bg-[#c7c7cc]"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
                <span className="text-[11px] text-[#c7c7cc] ml-1">AI กำลังค้นหา...</span>
              </motion.div>

              {/* AI Response */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex justify-start"
              >
                <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[14px] px-5 py-4 rounded-2xl rounded-bl-sm max-w-[85%] space-y-2">
                  <p>สินค้ารุ่น <strong>X200</strong> ค่ะ:</p>
                  <p className="text-[#86868b]">💰 ราคา: <strong className="text-[#1d1d1f]">฿12,900</strong> (รวม VAT)</p>
                  <p className="text-[#86868b]">📦 Stock: <strong className="text-[#34c759]">มี 23 ชิ้น</strong> พร้อมส่ง</p>
                  <p className="text-[#86868b]">🚚 จัดส่ง: <strong className="text-[#1d1d1f]">1-2 วันทำการ</strong></p>
                  <p className="text-[#2997ff] text-[13px] mt-1">ต้องการสั่งซื้อเลยไหมคะ? 😊</p>
                </div>
              </motion.div>

              {/* Source badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2 }}
                className="flex items-center gap-2 text-[11px] text-[#86868b]"
              >
                <span className="px-2 py-0.5 rounded-full bg-[#2997ff]/8 text-[#2997ff] font-medium">RAG</span>
                <span>ข้อมูลจาก product_catalog + stock_db</span>
                <span className="text-[#34c759]">• 2.1 วินาที</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
