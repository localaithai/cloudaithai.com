"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import HeroCanvas from "./HeroCanvas";

/* ─── Staggered text reveal ─── */
function RevealText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Remotion cinematic background — 300 looping frames */}
      <HeroCanvas />

      {/* Content on top */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-[980px] mx-auto px-6 text-center"
      >
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2.5 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-50" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34c759]" />
          </span>
          <span className="text-[#2997ff] text-[15px] font-medium tracking-wide">CloudAI Thailand</span>
        </motion.div>

        {/* Headlines */}
        <div className="mb-2">
          <RevealText
            text="ให้ AI ทำงานแทน"
            className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]"
            delay={0.4}
          />
        </div>
        <div className="mb-6">
          <RevealText
            text="คุณทำสิ่งที่สำคัญ"
            className="text-[24px] sm:text-[36px] md:text-[44px] font-medium leading-[1.15] tracking-[-0.02em] text-[#86868b]"
            delay={0.55}
          />
        </div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-[17px] sm:text-[21px] text-[#86868b] max-w-[600px] mx-auto mb-10 leading-[1.52]"
        >
          ติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model อย่าง
          GPT-5, Claude, Gemini สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#pricing" className="apple-btn apple-btn-blue">ดูแพ็คเกจ</a>
          <a href="#solutions" className="apple-link">ดูว่า AI ทำอะไรได้บ้าง</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center gap-12 md:gap-20"
        >
          {[
            { value: "6+", label: "Frontier Models" },
            { value: "55+", label: "Integrations" },
            { value: "฿19,900", label: "เริ่มต้น" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.15 }}
            >
              <p className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.02em]">{stat.value}</p>
              <p className="text-[12px] text-[#86868b] mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-6 h-10 rounded-full border-2 border-[#d2d2d7] flex justify-center pt-2">
            <motion.div className="w-1 h-2 rounded-full bg-[#2997ff]" animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
