import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

/* ─── Mobile 780x1400 version of CloudWorkflow ─── */

const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";
const GREEN = "#34c759";
const GRAY = "#86868b";
const DARK = "#1d1d1f";

const nodes = [
  { id: "user", label: "ลูกค้า", emoji: "👤", x: 390, y: 200, color: BLUE },
  { id: "line", label: "LINE", emoji: "💬", x: 390, y: 360, color: "#00C300" },
  { id: "n8n", label: "n8n", emoji: "⚡", x: 200, y: 520, color: "#EA4B71" },
  { id: "ai", label: "AI Model", emoji: "🧠", x: 580, y: 520, color: PURPLE },
  { id: "rag", label: "RAG", emoji: "🔍", x: 200, y: 700, color: VIOLET },
  { id: "db", label: "Database", emoji: "💾", x: 580, y: 700, color: GREEN },
  { id: "response", label: "คำตอบ", emoji: "✨", x: 390, y: 880, color: BLUE },
  { id: "back", label: "ส่งกลับ", emoji: "🚀", x: 390, y: 1040, color: "#ff9500" },
];

const connections = [
  { from: 0, to: 1, phase: 0 },
  { from: 1, to: 2, phase: 1 },
  { from: 1, to: 3, phase: 1 },
  { from: 2, to: 4, phase: 2 },
  { from: 3, to: 5, phase: 2 },
  { from: 4, to: 6, phase: 3 },
  { from: 5, to: 6, phase: 3 },
  { from: 6, to: 7, phase: 4 },
];

const phases = [
  { range: [0, 30], title: "ลูกค้าส่งข้อความ", sub: "ผ่าน LINE / WhatsApp" },
  { range: [30, 60], title: "n8n + AI รับงาน", sub: "Workflow routing อัตโนมัติ" },
  { range: [60, 95], title: "ค้นหา Knowledge Base", sub: "RAG + Vector DB" },
  { range: [95, 135], title: "สร้างคำตอบอัจฉริยะ", sub: "Frontier Model generate" },
  { range: [135, 180], title: "ส่งกลับทันที", sub: "< 3 วินาที" },
];

export default function CloudVideoMobile() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = frame / 180;
  const currentPhase = phases.findIndex((p) => frame >= p.range[0] && frame < p.range[1]);
  const phase = phases[Math.max(0, currentPhase)];

  return (
    <AbsoluteFill style={{ background: "#fbfbfd" }}>
      {/* Grid */}
      <svg width="780" height="1400" style={{ position: "absolute", opacity: 0.2 }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={1400} stroke="#e5e5ea" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={780} y2={i * 50} stroke="#e5e5ea" strokeWidth={0.5} />
        ))}
      </svg>

      {/* Connections */}
      <svg width="780" height="1400" style={{ position: "absolute" }}>
        {connections.map((conn, i) => {
          const phaseStart = conn.phase * 30;
          const p = interpolate(frame, [phaseStart, phaseStart + 20], [0, 1.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          return (
            <g key={i}>
              <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#e5e5ea" strokeWidth={0.8} strokeDasharray="4 3" />
              {p > 0 && (
                <line x1={from.x} y1={from.y}
                  x2={from.x + (to.x - from.x) * Math.min(p, 1)}
                  y2={from.y + (to.y - from.y) * Math.min(p, 1)}
                  stroke={from.color} strokeWidth={2} strokeLinecap="round" opacity={0.5}
                />
              )}
              {p > 0 && p < 1.3 && (
                <circle
                  cx={from.x + (to.x - from.x) * Math.min(p, 1)}
                  cy={from.y + (to.y - from.y) * Math.min(p, 1)}
                  r={5} fill={from.color}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const appear = spring({ frame: frame - i * 6, fps, config: { damping: 15, stiffness: 80 } });
        const isActive = connections.some((c) => (c.from === i || c.to === i) && frame >= c.phase * 30 && frame < c.phase * 30 + 30);
        return (
          <div key={node.id} style={{
            position: "absolute", left: node.x - 40, top: node.y - 40, width: 80, height: 80,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            transform: `scale(${appear})`, opacity: appear,
          }}>
            <div style={{
              width: 54, height: 54, borderRadius: 16,
              background: isActive ? node.color + "12" : "#fff",
              border: `1.5px solid ${isActive ? node.color + "35" : "#e5e5ea"}`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
              boxShadow: isActive ? `0 6px 20px ${node.color}18` : "0 2px 6px rgba(0,0,0,0.03)",
            }}>
              {node.emoji}
            </div>
            <span style={{
              marginTop: 4, fontSize: 12, fontWeight: 500,
              color: isActive ? node.color : GRAY,
              fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
            }}>{node.label}</span>
          </div>
        );
      })}

      {/* Phase title */}
      <div style={{ position: "absolute", bottom: 100, left: 0, right: 0, textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Bai Jamjuree, -apple-system, sans-serif" }}>
          {currentPhase >= 0 ? `STEP ${currentPhase + 1}` : "CLOUD AI"}
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, color: DARK, letterSpacing: "-0.02em", fontFamily: "Bai Jamjuree, -apple-system, sans-serif" }}>
          {phase?.title || "AI Automation"}
        </div>
        <div style={{ fontSize: 16, color: GRAY, marginTop: 2, fontFamily: "Bai Jamjuree, -apple-system, sans-serif" }}>
          {phase?.sub || ""}
        </div>
      </div>

      {/* Progress */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#e5e5ea" }}>
        <div style={{ width: `${progress * 100}%`, height: "100%", background: `linear-gradient(90deg, ${BLUE}, ${PURPLE}, ${GREEN})` }} />
      </div>

      {/* Brand */}
      <div style={{ position: "absolute", top: 20, left: 24, display: "flex", alignItems: "center", gap: 6, opacity: 0.5 }}>
        <div style={{ width: 20, height: 20, borderRadius: 6, background: `linear-gradient(135deg, ${BLUE}, ${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 9, fontWeight: 800 }}>C</div>
        <span style={{ fontSize: 11, fontWeight: 600, color: DARK, fontFamily: "Bai Jamjuree, -apple-system, sans-serif" }}>CloudAI</span>
      </div>
    </AbsoluteFill>
  );
}
