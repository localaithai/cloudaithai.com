"use client";
import { useEffect, useRef } from "react";

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // Grid dots
    const spacing = 50;
    const maxDist = 180;
    const cols = Math.ceil(window.innerWidth / spacing) + 1;
    const rows = Math.ceil(window.innerHeight / spacing) + 1;

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / maxDist);

          // Dot
          const baseAlpha = 0.06;
          const alpha = baseAlpha + proximity * 0.25;
          const radius = 1 + proximity * 2.5;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 113, 227, ${alpha})`;
          ctx.fill();

          // Connection lines to nearby dots on hover
          if (proximity > 0.3) {
            // Connect to right neighbor
            if (c < cols - 1) {
              const nx = (c + 1) * spacing;
              const ny = r * spacing;
              const ndist = Math.sqrt((nx - mx) ** 2 + (ny - my) ** 2);
              const nprox = Math.max(0, 1 - ndist / maxDist);
              if (nprox > 0.2) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nx, ny);
                ctx.strokeStyle = `rgba(0, 113, 227, ${Math.min(proximity, nprox) * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
            // Connect to bottom neighbor
            if (r < rows - 1) {
              const nx = c * spacing;
              const ny = (r + 1) * spacing;
              const ndist = Math.sqrt((nx - mx) ** 2 + (ny - my) ** 2);
              const nprox = Math.max(0, 1 - ndist / maxDist);
              if (nprox > 0.2) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(nx, ny);
                ctx.strokeStyle = `rgba(0, 113, 227, ${Math.min(proximity, nprox) * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }

      // Mouse glow
      if (mx > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        gradient.addColorStop(0, "rgba(0, 113, 227, 0.04)");
        gradient.addColorStop(1, "rgba(0, 113, 227, 0)");
        ctx.beginPath();
        ctx.arc(mx, my, 120, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
