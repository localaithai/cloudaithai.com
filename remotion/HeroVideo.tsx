import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const GREEN = "#34c759";

/* ─── Particle system — NO TEXT, just visuals ─── */
function Particles({ frame }: { frame: number }) {
  const particles = Array.from({ length: 60 }, (_, i) => {
    const seed = i * 137.508;
    const baseX = (seed * 7.3) % 1920;
    const baseY = (seed * 4.1) % 1080;
    const hue = 200 + (i % 7) * 10;
    const size = 1.5 + (i % 4) * 0.8;
    return { baseX, baseY, hue, size, i };
  });

  return (
    <svg width="1920" height="1080" style={{ position: "absolute" }}>
      {particles.map((p, pi) => {
        const x1 = p.baseX + Math.sin(frame * 0.008 + p.i * 0.5) * 40;
        const y1 = p.baseY + Math.cos(frame * 0.006 + p.i * 0.3) * 30;
        return particles.slice(pi + 1).map((q, qi) => {
          const x2 = q.baseX + Math.sin(frame * 0.008 + q.i * 0.5) * 40;
          const y2 = q.baseY + Math.cos(frame * 0.006 + q.i * 0.3) * 30;
          const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
          if (dist > 150) return null;
          return (
            <line key={`${pi}-${qi}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={`hsla(${p.hue}, 70%, 65%, ${(1 - dist / 150) * 0.06})`} strokeWidth={0.5}
            />
          );
        });
      })}
      {particles.map((p) => {
        const x = p.baseX + Math.sin(frame * 0.008 + p.i * 0.5) * 40;
        const y = p.baseY + Math.cos(frame * 0.006 + p.i * 0.3) * 30;
        const pulse = 1 + Math.sin(frame * 0.05 + p.i) * 0.3;
        return (
          <g key={p.i}>
            <circle cx={x} cy={y} r={p.size * 3 * pulse} fill={`hsla(${p.hue}, 70%, 65%, 0.08)`} />
            <circle cx={x} cy={y} r={p.size * pulse} fill={`hsla(${p.hue}, 80%, 70%, 0.5)`} />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Center glow orb ─── */
function CenterOrb({ frame }: { frame: number }) {
  const pulse = 1 + Math.sin(frame * 0.03) * 0.15;
  const rotate = frame * 0.5;
  return (
    <div style={{ position: "absolute", left: 960 - 150, top: 480 - 150, width: 300, height: 300 }}>
      {[200, 150, 100].map((r, i) => (
        <div key={i} style={{
          position: "absolute", left: 150 - r * pulse, top: 150 - r * pulse,
          width: r * 2 * pulse, height: r * 2 * pulse, borderRadius: "50%",
          border: `1px solid hsla(${210 + i * 20}, 80%, 60%, ${0.06 - i * 0.015})`,
          transform: `rotate(${rotate + i * 30}deg)`,
        }} />
      ))}
      <div style={{
        position: "absolute", left: 150 - 35, top: 150 - 35, width: 70, height: 70,
        borderRadius: 18, background: `linear-gradient(135deg, ${BLUE}15, ${PURPLE}10)`,
        border: `1px solid ${BLUE}18`,
        boxShadow: `0 0 ${60 * pulse}px ${20 * pulse}px ${BLUE}06`,
      }} />
    </div>
  );
}

/* ─── Orbiting model badges ─── */
const models = [
  { name: "GPT-5", color: "#10a37f", angle: 0, dist: 240 },
  { name: "Claude 4.6", color: "#c96442", angle: 60, dist: 260 },
  { name: "Gemini 3.1", color: "#4285f4", angle: 120, dist: 230 },
  { name: "DeepSeek", color: "#5b6abf", angle: 180, dist: 250 },
  { name: "Grok 3", color: "#1d9bf0", angle: 240, dist: 240 },
  { name: "o3", color: "#10a37f", angle: 300, dist: 220 },
];

function ModelBadges({ frame }: { frame: number }) {
  const { fps } = useVideoConfig();
  return (
    <>
      {models.map((m, i) => {
        const appear = spring({ frame: frame - 15 - i * 4, fps, config: { damping: 15, stiffness: 80 } });
        const rad = ((m.angle + frame * 0.12) * Math.PI) / 180;
        const bob = Math.sin(frame * 0.02 + i * 1.5) * 8;
        const x = 960 + m.dist * Math.cos(rad);
        const y = 480 + m.dist * 0.65 * Math.sin(rad) + bob;
        return (
          <g key={m.name}>
            {/* Connection line */}
            <svg style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none" }}>
              <line x1={x} y1={y} x2={960} y2={480} stroke={m.color} strokeWidth={0.6} strokeDasharray="4 4" opacity={appear * 0.12} />
              {appear > 0.5 && (() => {
                const t = (Math.sin(frame * 0.02 + i * 2) + 1) / 2;
                return <circle cx={x + (960 - x) * t} cy={y + (480 - y) * t} r={3} fill={m.color} opacity={0.4} />;
              })()}
            </svg>
            {/* Badge */}
            <div style={{
              position: "absolute", left: x - 50, top: y - 16,
              opacity: appear, transform: `scale(${appear})`,
              padding: "7px 14px", borderRadius: 14,
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${m.color}18`,
              boxShadow: `0 4px 16px ${m.color}10`,
              fontSize: 13, fontWeight: 500, color: m.color,
              fontFamily: "SF Pro Display, -apple-system, sans-serif",
              display: "flex", alignItems: "center", gap: 5, whiteSpace: "nowrap",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.color }} />
              {m.name}
            </div>
          </g>
        );
      })}
    </>
  );
}

/* ─── Main — ONLY visuals, no text ─── */
export default function HeroVideo() {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#fbfbfd" }}>
      <Particles frame={frame} />
      <CenterOrb frame={frame} />
      <ModelBadges frame={frame} />
    </AbsoluteFill>
  );
}
