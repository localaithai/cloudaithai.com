"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GridCanvas from "./GridCanvas";

/* ─── Orbiting AI model nodes ─── */
const orbitNodes = [
  { name: "GPT-5", color: "#10a37f", angle: 0 },
  { name: "Claude", color: "#c96442", angle: 60 },
  { name: "Gemini", color: "#4285f4", angle: 120 },
  { name: "DeepSeek", color: "#5b6abf", angle: 180 },
  { name: "Grok", color: "#1d9bf0", angle: 240 },
  { name: "o3", color: "#10a37f", angle: 300 },
];

function OrbitalVisualization() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square mt-8">
      {/* Orbit rings */}
      {[85, 60].map((size, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 m-auto rounded-full border border-[#d2d2d7]/20"
          style={{ width: `${size}%`, height: `${size}%` }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Center core */}
      <div className="absolute inset-0 m-auto w-20 h-20">
        <motion.div
          className="w-full h-full rounded-2xl bg-gradient-to-br from-[#2997ff]/10 to-[#5856d6]/10 border border-[#2997ff]/15 flex items-center justify-center"
          animate={{ boxShadow: ["0 0 0 0 rgba(41,151,255,0)", "0 0 40px 8px rgba(41,151,255,0.06)", "0 0 0 0 rgba(41,151,255,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="text-center">
            <span className="text-2xl block">☁️</span>
            <span className="text-[8px] font-semibold text-[#2997ff]">CLOUD AI</span>
          </div>
        </motion.div>
      </div>

      {/* Orbiting model pills */}
      {orbitNodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180;
        const radius = 42;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return (
          <motion.div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.5, ease: "backOut" }}
          >
            <motion.div
              className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white border shadow-sm"
              style={{ color: node.color, borderColor: node.color + "25" }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {node.name}
            </motion.div>
          </motion.div>
        );
      })}

      {/* SVG connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        {orbitNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 42 * Math.cos(rad);
          const y = 50 + 42 * Math.sin(rad);
          return (
            <motion.line
              key={i}
              x1="50" y1="50" x2={x} y2={y}
              stroke="#2997ff" strokeWidth="0.2" strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
            />
          );
        })}
        {/* Traveling pulses */}
        {orbitNodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = 50 + 42 * Math.cos(rad);
          const y = 50 + 42 * Math.sin(rad);
          return (
            <motion.circle
              key={`pulse-${i}`} r="0.6" fill={node.color}
              animate={{ cx: [50, x], cy: [50, y], opacity: [0, 0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 + i * 0.6, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      {/* Floating particles */}
      {[
        { x: 15, y: 25 }, { x: 72, y: 18 }, { x: 88, y: 55 }, { x: 28, y: 72 },
        { x: 62, y: 82 }, { x: 35, y: 15 }, { x: 80, y: 38 }, { x: 18, y: 60 },
        { x: 55, y: 90 }, { x: 42, y: 12 }, { x: 75, y: 68 }, { x: 10, y: 45 },
      ].map((pos, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            left: `${pos.x}%`, top: `${pos.y}%`,
            background: ["#2997ff", "#5856d6", "#af52de", "#34c759"][i % 4],
          }}
          animate={{ opacity: [0, 0.4, 0], y: [0, -15 - (i % 4) * 5] }}
          transition={{ duration: 2.5 + (i % 3) * 0.5, repeat: Infinity, delay: (i % 6) * 0.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive grid canvas */}
      <GridCanvas />

      <motion.div style={{ opacity, y, scale }} className="relative z-10 max-w-[980px] mx-auto px-6 text-center">
        {/* Overline with pulse */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[#2997ff] text-[17px] font-normal mb-4 flex items-center justify-center gap-2"
        >
          <span className="relative w-2 h-2 rounded-full bg-[#34c759]">
            <span className="absolute inset-0 rounded-full bg-[#34c759] animate-ping opacity-40" />
          </span>
          CloudAI Thailand
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#1d1d1f] mb-4"
        >
          ให้ AI ทำงานแทน
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-[28px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#86868b] mb-6"
        >
          คุณทำสิ่งที่สำคัญ
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[17px] sm:text-[21px] text-[#86868b] max-w-[600px] mx-auto mb-8 leading-[1.47]"
        >
          ติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model อย่าง
          GPT-5, Claude, Gemini สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#pricing" className="apple-btn apple-btn-blue">ดูแพ็คเกจ</a>
          <a href="#solutions" className="apple-link">ดูว่า AI ทำอะไรได้บ้าง</a>
        </motion.div>

        {/* Orbital visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <OrbitalVisualization />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-5 h-8 rounded-full border-[1.5px] border-[#d2d2d7] flex justify-center pt-2">
            <motion.div className="w-0.5 h-1.5 rounded-full bg-[#86868b]" animate={{ y: [0, 6, 0], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
