"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ─── Animated Cloud Network Visualization ─── */
const nodes = [
  { name: "GPT-5", x: 50, y: 18, color: "#10a37f", size: 44 },
  { name: "Claude", x: 18, y: 35, color: "#d4a574", size: 40 },
  { name: "Gemini", x: 82, y: 32, color: "#4285f4", size: 42 },
  { name: "DeepSeek", x: 28, y: 68, color: "#5b6abf", size: 36 },
  { name: "Grok", x: 72, y: 70, color: "#1d9bf0", size: 36 },
  { name: "o3", x: 50, y: 80, color: "#10a37f", size: 34 },
];

const toolNodes = [
  { name: "n8n", emoji: "⚡", x: 35, y: 45 },
  { name: "Flowise", emoji: "🌊", x: 65, y: 45 },
  { name: "OpenClaw", emoji: "🦞", x: 50, y: 55 },
  { name: "Dify", emoji: "🔮", x: 40, y: 62 },
  { name: "ActivePieces", emoji: "🧩", x: 60, y: 62 },
];

// Generate connections between nodes
const connections = [
  [0, 1], [0, 2], [0, 5], [1, 3], [2, 4], [3, 5], [4, 5], [1, 2], [3, 4],
];

function NetworkVisualization() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        {connections.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="#0071e3"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: "easeOut" }}
          />
        ))}
        {/* Animated pulses along connections */}
        {connections.map(([a, b], i) => (
          <motion.circle
            key={`pulse-${a}-${b}`}
            r="0.5"
            fill="#0071e3"
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[a].x, nodes[b].x],
              cy: [nodes[a].y, nodes[b].y],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: 2 + i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Model nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: "backOut" }}
        >
          <motion.div
            className="rounded-full flex items-center justify-center backdrop-blur-sm border shadow-lg"
            style={{
              width: node.size,
              height: node.size,
              background: `${node.color}08`,
              borderColor: `${node.color}25`,
              boxShadow: `0 4px 20px ${node.color}15`,
            }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[9px] font-bold" style={{ color: node.color }}>{node.name}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Tool nodes (smaller, in the center) */}
      {toolNodes.map((tool, i) => (
        <motion.div
          key={tool.name}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + i * 0.1, duration: 0.5, ease: "backOut" }}
        >
          <motion.div
            className="w-9 h-9 rounded-xl bg-white border border-black/[0.06] shadow-md flex items-center justify-center"
            animate={{ y: [0, -3, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm">{tool.emoji}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Center glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,113,227,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: ["#0071e3", "#5856d6", "#bf5af2", "#30d158", "#34aadc"][i % 5],
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: [0, -15 - Math.random() * 25],
            x: [0, (Math.random() - 0.5) * 15],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-14">
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,113,227,0.06) 0%, rgba(88,86,214,0.04) 40%, transparent 70%)" }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,170,220,0.05) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y: yParallax, opacity: opacityFade }} className="relative w-full">
        <div className="max-w-5xl mx-auto px-6">
          {/* Top: Text */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071e3]/[0.06] border border-[#0071e3]/10 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                <span className="text-[12px] font-medium text-[#0071e3]">AI Automation สำหรับธุรกิจไทย</span>
              </motion.div>

              <h1 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-[#1d1d1f] mb-5">
                ให้ AI ทำงานแทน
                <br />
                <span className="gradient-text">คุณทำสิ่งที่สำคัญ</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed font-light"
              >
                ติดตั้งระบบ AI Automation ใช้ Frontier Model — GPT-5, Claude 4.6, Gemini 3.1 Pro
                <br className="hidden md:block" />
                สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8"
              >
                <a href="#pricing" className="px-8 py-3 rounded-full bg-[#0071e3] text-white font-medium text-[15px] hover:bg-[#0077ed] transition-all shadow-lg shadow-[#0071e3]/20 hover:shadow-xl hover:shadow-[#0071e3]/25 hover:-translate-y-0.5">
                  ดูแพ็คเกจ
                </a>
                <a href="#tools" className="px-8 py-3 rounded-full text-[#0071e3] font-medium text-[15px] border border-[#0071e3]/15 hover:bg-[#0071e3]/[0.04] transition-all">
                  ดูเครื่องมือทั้งหมด →
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <NetworkVisualization />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-10 md:gap-20 mt-4"
          >
            {[
              { value: "6+", label: "Frontier Models" },
              { value: "5", label: "Automation Tools" },
              { value: "฿19,900", label: "เริ่มต้น" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.15 }}
              >
                <p className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">{stat.value}</p>
                <p className="text-[11px] text-[#6e6e73] mt-0.5 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-[1.5px] border-[#d2d2d7] flex justify-center pt-2">
            <motion.div
              className="w-0.5 h-1.5 rounded-full bg-[#6e6e73]"
              animate={{ y: [0, 6, 0], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
