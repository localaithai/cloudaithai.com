"use client";
import { motion } from "framer-motion";

const floatingWords = [
  { text: "GPT-5", x: "10%", y: "20%", delay: 0 },
  { text: "Claude 4.6", x: "75%", y: "15%", delay: 0.3 },
  { text: "Gemini 3.1", x: "85%", y: "55%", delay: 0.6 },
  { text: "n8n", x: "5%", y: "60%", delay: 0.9 },
  { text: "Flowise", x: "20%", y: "80%", delay: 1.2 },
  { text: "DeepSeek", x: "65%", y: "78%", delay: 1.5 },
  { text: "OpenClaw", x: "90%", y: "35%", delay: 0.4 },
  { text: "Dify", x: "40%", y: "85%", delay: 0.7 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-14">
      {/* Soft gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#0071e3]/8 via-[#5856d6]/5 to-[#bf5af2]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#34aadc]/6 to-transparent blur-3xl" />
      </div>

      {/* Floating model names */}
      {floatingWords.map((word) => (
        <motion.span
          key={word.text}
          className="absolute text-[11px] font-medium text-[#0071e3]/20 select-none hidden md:block"
          style={{ left: word.x, top: word.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{ delay: word.delay + 0.5, duration: 4 + word.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {word.text}
        </motion.span>
      ))}

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0071e3]/8 border border-[#0071e3]/15 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
            <span className="text-[12px] font-medium text-[#0071e3]">AI Automation สำหรับธุรกิจไทย</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-[#1d1d1f] mb-6">
            ให้ AI ทำงานแทน
            <br />
            <span className="gradient-text">คุณทำสิ่งที่สำคัญ</span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            ติดตั้งระบบ AI Automation ให้ธุรกิจของคุณ — ใช้ Frontier Model อย่าง GPT-5, Claude 4.6, Gemini 3.1 Pro
            สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#pricing" className="px-8 py-3.5 rounded-full bg-[#0071e3] text-white font-medium text-[15px] hover:bg-[#0077ed] transition-all shadow-lg shadow-[#0071e3]/20 hover:shadow-xl hover:shadow-[#0071e3]/30 hover:-translate-y-0.5">
              ดูแพ็คเกจ
            </a>
            <a href="#tools" className="px-8 py-3.5 rounded-full text-[#0071e3] font-medium text-[15px] border border-[#0071e3]/20 hover:bg-[#0071e3]/5 transition-all">
              ดูเครื่องมือทั้งหมด
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center gap-12 md:gap-20"
          >
            {[
              { value: "6+", label: "Frontier Models" },
              { value: "5", label: "Automation Tools" },
              { value: "฿19,900", label: "เริ่มต้น" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#1d1d1f]">{stat.value}</p>
                <p className="text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-[#d2d2d7] flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#6e6e73]"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
