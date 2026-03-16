"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 180;

const phases = [
  { range: [0, 0.14], label: "STEP 1", title: "ลูกค้าส่งข้อความ", sub: "ผ่าน LINE, WhatsApp, หรือเว็บ" },
  { range: [0.14, 0.28], label: "STEP 2", title: "n8n รับ Webhook", sub: "Workflow automation จัดการ routing" },
  { range: [0.28, 0.47], label: "STEP 3", title: "AI วิเคราะห์ + ค้นหา", sub: "Frontier Model + RAG pipeline" },
  { range: [0.47, 0.67], label: "STEP 4", title: "ค้น Knowledge Base", sub: "Vector DB ค้นเอกสารที่เกี่ยวข้อง" },
  { range: [0.67, 0.81], label: "STEP 5", title: "สร้างคำตอบอัจฉริยะ", sub: "Generate response ภาษาไทย" },
  { range: [0.81, 1], label: "STEP 6", title: "ส่งกลับทันที", sub: "< 3 วินาที ตอบกลับลูกค้า" },
];

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [loaded, setLoaded] = useState(false);

  // Preload frames
  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/element-${String(i).padStart(3, "0")}.jpeg`;
      img.onload = () => {
        count++;
        loadedRef.current[i] = true;
        if (count === TOTAL_FRAMES) setLoaded(true);
      };
      img.onerror = () => {
        count++;
        if (count === TOTAL_FRAMES) setLoaded(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Scroll tracking
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(scrolled / sectionHeight, 1)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Draw frame
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const frameIndex = Math.min(Math.floor(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
    const img = imagesRef.current[frameIndex];
    if (img && loadedRef.current[frameIndex]) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [progress]);

  useEffect(() => {
    const raf = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(raf);
  }, [drawFrame]);

  // Current phase
  const currentPhase = phases.find((p) => progress >= p.range[0] && progress < p.range[1]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#fbfbfd]">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#e5e5ea] z-20">
          <div
            className="h-full"
            style={{
              width: `${progress * 100}%`,
              background: "linear-gradient(90deg, #2997ff, #5856d6, #34c759)",
              transition: "none",
            }}
          />
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          style={{
            width: `min(100vw, ${(100 * 1920) / 1080}vh)`,
            height: `min(100vh, ${(100 * 1080) / 1920}vw)`,
          }}
        />

        {/* Loading */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#fbfbfd] z-30">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-[#2997ff] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-[14px] text-[#86868b]">กำลังโหลด...</p>
            </div>
          </div>
        )}

        {/* Intro overlay */}
        {progress < 0.03 && loaded && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
            style={{ opacity: 1 - progress * 33 }}
          >
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-[#2997ff]/30 animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl">☁️</span>
              </div>
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] tracking-[-0.03em] mb-2">
              ดู AI Workflow แบบ Cinematic
            </h2>
            <p className="text-[15px] text-[#86868b] mb-8 max-w-md">
              เลื่อนลงเพื่อดูแต่ละขั้นตอน ตั้งแต่ลูกค้าส่งข้อความ จนถึง AI ตอบกลับ
            </p>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-5 h-8 rounded-full border-[1.5px] border-[#2997ff]/40 flex justify-center pt-2">
                <div className="w-1 h-2.5 rounded-full bg-[#2997ff] animate-pulse" />
              </div>
              <span className="text-[11px] text-[#2997ff] font-medium tracking-widest">SCROLL</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
