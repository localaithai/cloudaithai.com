"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 300;
const FPS = 30;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const frameRef = useRef(0);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const frameDir = isMobile ? "/hero-frames-mobile" : "/hero-frames";
  const WIDTH = isMobile ? 780 : 1920;
  const HEIGHT = isMobile ? 1400 : 1080;

  // Preload
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

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let lastTime = 0;
    let animId: number;

    const draw = (time: number) => {
      const elapsed = time - lastTime;
      if (elapsed > 1000 / FPS) {
        lastTime = time;
        frameRef.current = (frameRef.current + 1) % TOTAL_FRAMES;
        const img = imagesRef.current[frameRef.current];
        if (img && loadedRef.current[frameRef.current]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      }
      animId = requestAnimationFrame(draw);
    };
    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        className="w-full h-full object-contain"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease" }}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-[#f5f5f7] flex items-center justify-center rounded-3xl">
          <div className="w-6 h-6 border-2 border-[#2997ff] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
