"use client";
import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="relative bg-[#fbfbfd] pt-20 pb-24">
      {/* ═══ Cinematic Remotion video — text is IN the video ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full max-w-[1100px] mx-auto px-6"
      >
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/[0.06]"
          style={{ aspectRatio: "16/9" }}
        >
          <HeroCanvas />
          <div className="absolute inset-0 rounded-3xl border border-black/[0.04] pointer-events-none z-10" />
        </div>
      </motion.div>

      {/* ═══ CTAs below video ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
      >
        <a href="#pricing" className="apple-btn apple-btn-blue">ดูแพ็คเกจ</a>
        <a href="#solutions" className="apple-link">ดูว่า AI ทำอะไรได้บ้าง</a>
      </motion.div>

      {/* ═══ Stats ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
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
            transition={{ delay: 1 + i * 0.1 }}
          >
            <p className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight">{stat.value}</p>
            <p className="text-[12px] text-[#86868b] mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
