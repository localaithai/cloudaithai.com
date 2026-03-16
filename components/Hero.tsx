"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Cinematic particle field canvas ─── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let time = 0;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const count = 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      hue: Math.random() * 60 + 200, // blue-purple range
    }));

    const draw = () => {
      time += 0.005;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${particles[i].hue}, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.15;
        p.y += p.vy + Math.cos(time + p.x * 0.01) * 0.15;

        // Wrap
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 65%, 0.3)`);
        grad.addColorStop(1, `hsla(${p.hue}, 80%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.5)`;
        ctx.fill();
      }

      // Central radial glow
      const cx = w / 2;
      const cy = h * 0.48;
      const pulse = 1 + Math.sin(time * 2) * 0.1;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 300 * pulse);
      glow.addColorStop(0, "rgba(41, 151, 255, 0.04)");
      glow.addColorStop(0.5, "rgba(88, 86, 214, 0.02)");
      glow.addColorStop(1, "rgba(41, 151, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 300 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

/* ─── Animated model badges that float in ─── */
const modelBadges = [
  { name: "GPT-5", color: "#10a37f", x: -280, y: -140 },
  { name: "Claude 4.6", color: "#c96442", x: 260, y: -160 },
  { name: "Gemini 3.1", color: "#4285f4", x: -320, y: 60 },
  { name: "DeepSeek V3", color: "#5b6abf", x: 300, y: 40 },
  { name: "Grok 3", color: "#1d9bf0", x: -200, y: 160 },
  { name: "o3", color: "#10a37f", x: 220, y: 150 },
];

function FloatingModels() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      <div className="relative w-full h-full">
        {modelBadges.map((model, i) => (
          <motion.div
            key={model.name}
            className="absolute left-1/2 top-[48%]"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: 0.7,
              scale: 1,
              x: model.x,
              y: model.y,
            }}
            transition={{
              delay: 1 + i * 0.15,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-lg text-[13px] font-medium"
              style={{
                color: model.color,
                boxShadow: `0 4px 20px ${model.color}15, 0 0 0 0.5px ${model.color}15`,
              }}
              animate={{ y: [0, -6 - (i % 3) * 2, 0] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <span className="mr-1.5 inline-block w-2 h-2 rounded-full" style={{ background: model.color }} />
              {model.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

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

/* ─── Counter animation ─── */
function AnimatedCounter({ value, suffix = "", delay = 0 }: { value: string; suffix?: string; delay?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {value}{suffix}
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [0, 10]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Cinematic particle field */}
      <ParticleField />

      {/* Floating model badges */}
      <FloatingModels />

      {/* Content */}
      <motion.div
        style={{ opacity, y, scale, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
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

        {/* Main headline — reveal animation */}
        <div className="mb-3">
          <RevealText
            text="ให้ AI ทำงานแทน"
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#1d1d1f]"
            delay={0.4}
          />
        </div>
        <div className="mb-8">
          <RevealText
            text="คุณทำสิ่งที่สำคัญ"
            className="text-[28px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#86868b]"
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
          <motion.a
            href="#pricing"
            className="apple-btn apple-btn-blue relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">ดูแพ็คเกจ</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2997ff] to-[#5856d6]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#solutions"
            className="apple-link"
            whileHover={{ x: 3 }}
          >
            ดูว่า AI ทำอะไรได้บ้าง
          </motion.a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center gap-12 md:gap-20"
        >
          {[
            { value: "6+", label: "Frontier Models", delay: 1.4 },
            { value: "55+", label: "Integrations", delay: 1.55 },
            { value: "฿19,900", label: "เริ่มต้น", delay: 1.7 },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] tracking-[-0.02em]">
                <AnimatedCounter value={stat.value} delay={stat.delay} />
              </p>
              <p className="text-[12px] text-[#86868b] mt-1 tracking-wide">{stat.label}</p>
            </div>
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
            <motion.div
              className="w-1 h-2 rounded-full bg-[#2997ff]"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
