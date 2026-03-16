"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "ปรึกษาฟรี",
    desc: "บอกเราว่าธุรกิจคุณทำอะไร ต้องการ automate ส่วนไหน — เราออกแบบ solution ให้ฟรี",
    color: "#0071e3",
  },
  {
    num: "02",
    title: "เลือก Hosting",
    desc: "VPS (control เต็มที่) หรือ Managed Cloud (ไม่ต้องดูแลเอง) — เราแนะนำให้ตามความเหมาะสม",
    color: "#5856d6",
  },
  {
    num: "03",
    title: "ติดตั้ง & สร้าง Workflow",
    desc: "เราติดตั้ง tools ตั้งค่า AI สร้าง automation ตาม requirement ทดสอบจนสมบูรณ์",
    color: "#bf5af2",
  },
  {
    num: "04",
    title: "Training & Go Live",
    desc: "อบรมทีมงานใช้งาน ส่งมอบคู่มือ ระบบพร้อมใช้ + support หลังติดตั้ง",
    color: "#30d158",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            4 ขั้นตอนง่ายๆ
          </h2>
          <p className="text-lg text-[#6e6e73]">จากปรึกษาถึงใช้งานจริง ภายใน 1-2 สัปดาห์</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#0071e3]/20 via-[#5856d6]/20 to-[#30d158]/20 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 md:gap-8"
              >
                <div className="relative shrink-0">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg"
                    style={{ background: step.color, boxShadow: `0 8px 24px ${step.color}30` }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1d1d1f] mb-1">{step.title}</h3>
                  <p className="text-[15px] text-[#6e6e73] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
