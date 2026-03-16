"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  "0, 113, 227",   // blue
  "88, 86, 214",   // purple
  "191, 90, 242",  // violet
  "52, 170, 220",  // light blue
  "48, 209, 88",   // green
];

export default function FloatingParticles({ count = 40, speed = 0.3 }: { count?: number; speed?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Init particles
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * speed,
        vy: -Math.random() * speed * 0.8 - 0.1,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        life: 0,
        maxLife: 200 + Math.random() * 300,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Fade in/out
        const lifeRatio = p.life / p.maxLife;
        let fade = 1;
        if (lifeRatio < 0.1) fade = lifeRatio / 0.1;
        else if (lifeRatio > 0.8) fade = (1 - lifeRatio) / 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha * fade})`;
        ctx.fill();

        // Reset if dead or off-screen
        if (p.life >= p.maxLife || p.y < -10 || p.x < -10 || p.x > w() + 10) {
          p.x = Math.random() * w();
          p.y = h() + 10;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 300;
          p.vx = (Math.random() - 0.5) * speed;
          p.vy = -Math.random() * speed * 0.8 - 0.1;
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
