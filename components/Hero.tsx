"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const vizScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const vizOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[140vh] bg-[#fbfbfd]">
      {/* ═══ TOP: Clean text zone — NO particles, NO visuals ═══ */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-20 pt-32 sm:pt-40 pb-16 text-center px-6"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-[#2997ff] text-[17px] font-medium">AI Automation สำหรับธุรกิจไทย</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[44px] sm:text-[60px] md:text-[72px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#1d1d1f] mb-3 max-w-[800px] mx-auto"
        >
          ให้ AI ทำงานแทน<br />
          <span className="text-[#86868b]">คุณทำสิ่งที่สำคัญ</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-[17px] sm:text-[19px] text-[#86868b] max-w-[520px] mx-auto mb-8 leading-[1.5]"
        >
          ติดตั้งระบบ AI Automation ใช้ Frontier Model อย่าง GPT-5, Claude, Gemini
          สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#pricing" className="apple-btn apple-btn-blue">ดูแพ็คเกจ</a>
          <a href="#solutions" className="apple-link">ดูว่า AI ทำอะไรได้บ้าง</a>
        </motion.div>
      </motion.div>

      {/* ═══ BOTTOM: Cinematic Remotion video zone ═══ */}
      <motion.div
        style={{ scale: vizScale, opacity: vizOpacity }}
        className="relative z-10 w-full max-w-[1200px] mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/[0.06]"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Remotion canvas fills this container */}
          <HeroCanvas />

          {/* Subtle inner border */}
          <div className="absolute inset-0 rounded-3xl border border-black/[0.04] pointer-events-none z-10" />
        </motion.div>

        {/* Stats below the video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-16 md:gap-24 mt-10"
        >
          {[
            { value: "6+", label: "Frontier Models" },
            { value: "55+", label: "Integrations" },
            { value: "฿19,900", label: "เริ่มต้น" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <p className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight">{stat.value}</p>
              <p className="text-[12px] text-[#86868b] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
