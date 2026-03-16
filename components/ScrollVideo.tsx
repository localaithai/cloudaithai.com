"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 180;

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [useDesktopFrames, setUseDesktopFrames] = useState(!isMobile);

  // Probe desktop frames — fallback to mobile if missing
  useEffect(() => {
    if (isMobile) { setUseDesktopFrames(false); return; }
    const probe = new Image();
    probe.src = "/frames/element-000.jpeg";
    probe.onload = () => setUseDesktopFrames(true);
    probe.onerror = () => setUseDesktopFrames(false);
  }, [isMobile]);

  const frameDir = useDesktopFrames ? "/frames" : "/frames-mobile";
  const WIDTH = useDesktopFrames ? 1920 : 780;
  const HEIGHT = useDesktopFrames ? 1080 : 1400;

  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];
    loadedRef.current = new Array(TOTAL_FRAMES).fill(false);
    setLoaded(false);

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${frameDir}/element-${String(i).padStart(3, "0")}.jpeg`;
      img.onload = () => {
        count++;
        loadedRef.current[i] = true;
        if (count >= TOTAL_FRAMES * 0.15) setLoaded(true);
      };
      img.onerror = () => { count++; };
      images.push(img);
    }
    imagesRef.current = images;
  }, [frameDir]);

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

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const frameIndex = Math.min(Math.floor(progress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
    const img = imagesRef.current[frameIndex];
    if (img && loadedRef.current[frameIndex] && img.complete && img.naturalWidth > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  }, [progress]);

  useEffect(() => {
    const raf = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(raf);
  }, [drawFrame]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: isMobile ? "300vh" : "400vh" }}>
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

        {/* Canvas — full screen, responsive */}
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          style={{
            width: isMobile ? "100%" : `min(100vw, ${(100 * WIDTH) / HEIGHT}vh)`,
            height: isMobile ? "100%" : `min(100vh, ${(100 * HEIGHT) / WIDTH}vw)`,
            objectFit: "contain",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        />

        {/* Loading */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#fbfbfd] z-30">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-[#2997ff] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-[14px] text-[#6e6e73]">กำลังโหลด...</p>
            </div>
          </div>
        )}

        {/* Intro overlay */}
        {progress < 0.03 && loaded && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-12 text-center px-6"
            style={{ opacity: 1 - progress * 33 }}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-6 h-10 rounded-full border-2 border-[#2997ff]/30 flex justify-center pt-2">
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
