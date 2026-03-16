"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── A cinematic scroll-driven workflow visualization ─── */
const steps = [
  { label: "ลูกค้าส่งข้อความ", emoji: "💬", color: "#2997ff" },
  { label: "AI วิเคราะห์ intent", emoji: "🧠", color: "#5856d6" },
  { label: "ค้นหาข้อมูลจาก RAG", emoji: "🔍", color: "#bf5af2" },
  { label: "สร้างคำตอบอัจฉริยะ", emoji: "✨", color: "#30d158" },
  { label: "ส่งกลับทันที", emoji: "🚀", color: "#ff9f0a" },
];

function WorkflowStep({ step, index, progress }: { step: typeof steps[0]; index: number; progress: any }) {
  const stepStart = index / steps.length;
  const stepEnd = (index + 1) / steps.length;
  const opacity = useTransform(progress, [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd], [0.15, 1, 1, 0.15]);
  const scale = useTransform(progress, [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd], [0.92, 1, 1, 0.92]);
  const x = useTransform(progress, [stepStart, stepStart + 0.05], [30, 0]);

  return (
    <motion.div
      style={{ opacity, scale, x }}
      className="flex items-center gap-5 py-4"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg text-2xl"
        style={{ background: `${step.color}10`, boxShadow: `0 8px 24px ${step.color}15` }}
      >
        {step.emoji}
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: step.color }}>
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <p className="text-lg font-semibold text-[#1d1d1f]">{step.label}</p>
      </div>
    </motion.div>
  );
}

export default function ScrollShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Progress bar
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">Live Demo</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            ดูว่า AI ทำงานยังไง
          </h2>
          <p className="text-base text-[#86868b] font-light max-w-md mx-auto">
            ตัวอย่าง: ลูกค้าส่งข้อความถาม → AI ตอบอัตโนมัติใน 3 วินาที
          </p>
        </motion.div>

        <div ref={containerRef} className="grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Left: Steps */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-7 top-8 bottom-8 w-[2px] bg-[#f5f5f7] rounded-full">
              <motion.div
                className="w-full rounded-full bg-gradient-to-b from-[#2997ff] via-[#5856d6] to-[#30d158]"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-2 pl-2">
              {steps.map((step, i) => (
                <WorkflowStep key={step.label} step={step} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Right: Animated chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#fafafa] rounded-3xl border border-black/[0.06] shadow-xl shadow-black/[0.04] overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-black/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[12px] text-[#86868b] font-medium ml-2">AI Chat Assistant</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-4 min-h-[320px]">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-end"
                >
                  <div className="bg-[#2997ff] text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[80%]">
                    สินค้ารุ่น X200 ราคาเท่าไหร่ มี stock ไหม?
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-1 px-4"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#86868b]"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-black/[0.06] text-[#1d1d1f] text-[13px] px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%] shadow-sm">
                    <p className="mb-2">สินค้ารุ่น X200 มีรายละเอียดดังนี้:</p>
                    <p className="text-[#86868b] mb-2">📦 <strong>ราคา:</strong> ฿12,900 (รวม VAT)</p>
                    <p className="text-[#86868b] mb-2">✅ <strong>Stock:</strong> มี 23 ชิ้น พร้อมส่ง</p>
                    <p className="text-[#86868b]">🚚 <strong>จัดส่ง:</strong> 1-2 วันทำการ</p>
                    <p className="mt-2 text-[#2997ff] text-[12px]">ต้องการสั่งซื้อเลยไหมคะ? 😊</p>
                  </div>
                </motion.div>

                {/* Source badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 }}
                  className="flex items-center gap-2 text-[10px] text-[#86868b] px-2"
                >
                  <span className="px-2 py-0.5 rounded-full bg-[#2997ff]/5 text-[#2997ff] font-medium">RAG</span>
                  <span>ค้นจาก product_catalog.xlsx + stock_db</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
