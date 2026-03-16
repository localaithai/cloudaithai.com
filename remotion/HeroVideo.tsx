import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

/* ─── Apple Keynote style: Light, spacious, one thing at a time ─── */

const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";
const GREEN = "#34c759";
const GRAY = "#86868b";
const LIGHT_GRAY = "#f5f5f7";

/* ─── Smooth gradient blob that slowly morphs ─── */
function GradientBlob({ frame }: { frame: number }) {
  const t = frame * 0.008;
  const x1 = 960 + Math.sin(t) * 200;
  const y1 = 540 + Math.cos(t * 0.7) * 150;
  const x2 = 960 + Math.sin(t * 1.3 + 2) * 250;
  const y2 = 540 + Math.cos(t * 0.9 + 1) * 180;

  return (
    <svg width="1920" height="1080" style={{ position: "absolute" }}>
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="80" />
        </filter>
      </defs>
      <ellipse cx={x1} cy={y1} rx={350} ry={280} fill={`${BLUE}08`} filter="url(#blur)" />
      <ellipse cx={x2} cy={y2} rx={300} ry={250} fill={`${PURPLE}06`} filter="url(#blur)" />
      <ellipse cx={960 + Math.cos(t * 0.5) * 180} cy={540 + Math.sin(t * 0.6 + 3) * 120} rx={250} ry={200} fill={`${VIOLET}04`} filter="url(#blur)" />
    </svg>
  );
}

/* ─── Horizontal line that draws itself ─── */
function DrawLine({ frame, startFrame, y, color }: { frame: number; startFrame: number; y: number; color: string }) {
  const progress = interpolate(frame, [startFrame, startFrame + 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const width = 600 * progress;

  return (
    <div style={{
      position: "absolute",
      left: 960 - 300,
      top: y,
      width: width,
      height: 1.5,
      background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
      borderRadius: 1,
    }} />
  );
}

/* ─── Single model card that slides in ─── */
function ModelCard({
  frame, startFrame, name, color, x, y,
}: {
  frame: number; startFrame: number; name: string; color: string; x: number; y: number;
}) {
  const { fps } = useVideoConfig();
  const appear = spring({ frame: frame - startFrame, fps, config: { damping: 20, stiffness: 60 } });
  const float = Math.sin(frame * 0.015 + startFrame) * 4;

  return (
    <div style={{
      position: "absolute",
      left: x - 60,
      top: y - 18 + float,
      opacity: appear,
      transform: `scale(${appear}) translateY(${(1 - appear) * 20}px)`,
    }}>
      <div style={{
        padding: "10px 20px",
        borderRadius: 50,
        background: "#fff",
        boxShadow: `0 2px 20px ${color}12, 0 0 0 1px ${color}10`,
        fontSize: 15,
        fontWeight: 500,
        color: color,
        fontFamily: "Bai Jamjuree, SF Pro Display, -apple-system, sans-serif",
        display: "flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "nowrap",
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
        {name}
      </div>
    </div>
  );
}

/* ─── Center icon with subtle pulse ─── */
function CenterIcon({ frame }: { frame: number }) {
  const { fps } = useVideoConfig();
  const appear = spring({ frame: frame - 10, fps, config: { damping: 20, stiffness: 50 } });
  const pulse = 1 + Math.sin(frame * 0.03) * 0.03;
  const ringScale = 1 + Math.sin(frame * 0.02) * 0.05;

  return (
    <div style={{
      position: "absolute",
      left: 960 - 40,
      top: 540 - 40,
      width: 80,
      height: 80,
      opacity: appear,
      transform: `scale(${appear * pulse})`,
    }}>
      {/* Outer ring */}
      <div style={{
        position: "absolute",
        inset: -20,
        borderRadius: "50%",
        border: `1px solid ${BLUE}12`,
        transform: `scale(${ringScale})`,
      }} />
      <div style={{
        position: "absolute",
        inset: -40,
        borderRadius: "50%",
        border: `1px solid ${PURPLE}08`,
        transform: `scale(${ringScale * 0.98})`,
      }} />
      {/* Core */}
      <div style={{
        width: 80,
        height: 80,
        borderRadius: 22,
        background: `linear-gradient(135deg, ${BLUE}10, ${PURPLE}08)`,
        border: `1px solid ${BLUE}15`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 36,
      }}>
        ☁️
      </div>
    </div>
  );
}

/* ─── Connecting lines from center to model cards ─── */
function ConnectionLine({
  frame, startFrame, x, y, color,
}: {
  frame: number; startFrame: number; x: number; y: number; color: string;
}) {
  const progress = interpolate(frame, [startFrame, startFrame + 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const cx = 960;
  const cy = 540;
  const dx = cx + (x - cx) * progress;
  const dy = cy + (y - cy) * progress;

  if (progress <= 0) return null;

  return (
    <svg width="1920" height="1080" style={{ position: "absolute", pointerEvents: "none" }}>
      <line x1={cx} y1={cy} x2={dx} y2={dy}
        stroke={color} strokeWidth={1} strokeDasharray="6 6" opacity={0.15}
      />
      {/* Traveling dot */}
      {progress > 0.3 && (
        <circle
          cx={cx + (x - cx) * ((Math.sin(frame * 0.03 + startFrame) + 1) / 2)}
          cy={cy + (y - cy) * ((Math.sin(frame * 0.03 + startFrame) + 1) / 2)}
          r={3} fill={color} opacity={0.3}
        />
      )}
    </svg>
  );
}

/* ─── Main composition ─── */
export default function HeroVideo() {
  const frame = useCurrentFrame();

  const models = [
    { name: "GPT-5", color: "#10a37f", x: 480, y: 280, start: 30 },
    { name: "Claude 4.6", color: "#c96442", x: 1440, y: 300, start: 40 },
    { name: "Gemini 3.1", color: "#4285f4", x: 380, y: 700, start: 50 },
    { name: "DeepSeek V3", color: "#5b6abf", x: 1500, y: 720, start: 60 },
    { name: "Grok 3", color: "#1d9bf0", x: 350, y: 490, start: 70 },
    { name: "o3", color: "#10a37f", x: 1520, y: 510, start: 80 },
  ];

  return (
    <AbsoluteFill style={{ background: "#fbfbfd" }}>
      {/* Slowly morphing gradient blobs */}
      <GradientBlob frame={frame} />

      {/* Subtle horizontal accent lines */}
      <DrawLine frame={frame} startFrame={15} y={380} color={BLUE} />
      <DrawLine frame={frame} startFrame={25} y={700} color={PURPLE} />

      {/* Connection lines (appear before cards) */}
      {models.map((m) => (
        <ConnectionLine key={m.name} frame={frame} startFrame={m.start - 5} x={m.x} y={m.y} color={m.color} />
      ))}

      {/* Center cloud icon */}
      <CenterIcon frame={frame} />

      {/* Model cards — staggered entrance */}
      {models.map((m) => (
        <ModelCard key={m.name} frame={frame} startFrame={m.start} name={m.name} color={m.color} x={m.x} y={m.y} />
      ))}
    </AbsoluteFill>
  );
}
