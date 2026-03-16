import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";

/* ─── Mobile: 780x1400, taller layout ─── */

function GradientBlob({ frame }: { frame: number }) {
  const t = frame * 0.008;
  return (
    <svg width="780" height="1400" style={{ position: "absolute" }}>
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
        </filter>
      </defs>
      <ellipse cx={390 + Math.sin(t) * 100} cy={600 + Math.cos(t * 0.7) * 80} rx={200} ry={180} fill={`${BLUE}08`} filter="url(#blur)" />
      <ellipse cx={390 + Math.sin(t * 1.3 + 2) * 120} cy={700 + Math.cos(t * 0.9 + 1) * 100} rx={180} ry={160} fill={`${PURPLE}06`} filter="url(#blur)" />
    </svg>
  );
}

function ModelCard({ frame, startFrame, name, color, x, y }: { frame: number; startFrame: number; name: string; color: string; x: number; y: number }) {
  const { fps } = useVideoConfig();
  const appear = spring({ frame: frame - startFrame, fps, config: { damping: 20, stiffness: 60 } });
  const float = Math.sin(frame * 0.015 + startFrame) * 3;
  return (
    <div style={{
      position: "absolute", left: x - 50, top: y - 14 + float,
      opacity: appear, transform: `scale(${appear})`,
    }}>
      <div style={{
        padding: "8px 16px", borderRadius: 40, background: "#fff",
        boxShadow: `0 2px 16px ${color}12, 0 0 0 1px ${color}10`,
        fontSize: 13, fontWeight: 500, color,
        fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
        display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
      }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
        {name}
      </div>
    </div>
  );
}

export default function HeroVideoMobile() {
  const frame = useCurrentFrame();

  const titleOp = interpolate(frame, [5, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [5, 30], [30, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const subOp = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(frame, [20, 45], [25, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  const models = [
    { name: "GPT-5", color: "#10a37f", x: 140, y: 680, start: 50 },
    { name: "Claude 4.6", color: "#c96442", x: 600, y: 700, start: 60 },
    { name: "Gemini 3.1", color: "#4285f4", x: 120, y: 820, start: 70 },
    { name: "DeepSeek V3", color: "#5b6abf", x: 620, y: 840, start: 80 },
    { name: "Grok 3", color: "#1d9bf0", x: 180, y: 950, start: 90 },
    { name: "o3", color: "#10a37f", x: 560, y: 960, start: 100 },
  ];

  return (
    <AbsoluteFill style={{ background: "#fbfbfd" }}>
      <GradientBlob frame={frame} />

      {/* Text */}
      <div style={{ position: "absolute", top: 200, left: 0, right: 0, textAlign: "center", zIndex: 10, padding: "0 40px" }}>
        <div style={{
          fontSize: 16, color: BLUE, fontWeight: 500, marginBottom: 14,
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
        }}>
          AI Automation สำหรับธุรกิจไทย
        </div>
        <div style={{
          fontSize: 56, fontWeight: 600, color: "#1d1d1f", letterSpacing: "-0.025em", lineHeight: 1.25,
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
          opacity: titleOp, transform: `translateY(${titleY}px)`,
        }}>
          ให้ AI ทำงานแทน
        </div>
        <div style={{
          fontSize: 38, fontWeight: 500,
          background: "linear-gradient(90deg, #2997ff, #5856d6)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "-0.02em", lineHeight: 1.15,
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
          opacity: subOp, transform: `translateY(${subY}px)`, marginTop: 4,
        }}>
          คุณทำสิ่งที่สำคัญ
        </div>
      </div>

      {/* Center icon */}
      <div style={{
        position: "absolute", left: 390 - 35, top: 580 - 35, width: 70, height: 70,
        borderRadius: 18, background: `linear-gradient(135deg, ${BLUE}10, ${PURPLE}08)`,
        border: `1px solid ${BLUE}15`, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 30, opacity: spring({ frame: frame - 10, fps: 30, config: { damping: 20, stiffness: 50 } }),
      }}>
        ☁️
      </div>

      {/* Connection lines */}
      <svg width="780" height="1400" style={{ position: "absolute", pointerEvents: "none" }}>
        {models.map((m) => {
          const progress = interpolate(frame, [m.start - 5, m.start + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          if (progress <= 0) return null;
          return (
            <line key={m.name} x1={390} y1={580} x2={390 + (m.x - 390) * progress} y2={580 + (m.y - 580) * progress}
              stroke={m.color} strokeWidth={0.8} strokeDasharray="4 4" opacity={0.15}
            />
          );
        })}
      </svg>

      {/* Model cards */}
      {models.map((m) => (
        <ModelCard key={m.name} frame={frame} startFrame={m.start} name={m.name} color={m.color} x={m.x} y={m.y} />
      ))}
    </AbsoluteFill>
  );
}
