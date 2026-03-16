"use client";
import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 300;
const FPS = 30;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const [loaded, setLoaded] = useState(false);
  const frameRef = useRef(0);

  // Preload
  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/hero-frames/element-${String(i).padStart(3, "0")}.jpeg`;
      img.onload = () => {
        count++;
        loadedRef.current[i] = true;
        if (count >= TOTAL_FRAMES * 0.3 && !loaded) setLoaded(true); // Show after 30% loaded
      };
      img.onerror = () => { count++; };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

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
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        style={{ opacity: loaded ? 0.8 : 0, transition: "opacity 1s ease" }}
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbfbfd]/40 via-[#fbfbfd]/20 to-[#fbfbfd]/70" />
    </div>
  );
}
