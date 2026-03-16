"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity, y }} className="relative max-w-[980px] mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[#2997ff] text-[17px] font-normal mb-4"
        >
          CloudAI Thailand
        </motion.p>

        {/* Main headline — Apple-sized */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#1d1d1f] mb-4"
        >
          ให้ AI ทำงานแทน
        </motion.h1>

        {/* Sub headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-[28px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#86868b] mb-6"
        >
          คุณทำสิ่งที่สำคัญ
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[17px] sm:text-[21px] text-[#86868b] max-w-[600px] mx-auto mb-8 leading-[1.47] font-normal"
        >
          ติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model อย่าง
          GPT-5, Claude, Gemini สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#pricing" className="apple-btn apple-btn-blue">
            ดูแพ็คเกจ
          </a>
          <a href="#solutions" className="apple-link">
            ดูว่า AI ทำอะไรได้บ้าง
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
