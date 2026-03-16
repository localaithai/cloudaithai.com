import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const TOTAL = 180;

// Colors
const BG = "#fbfbfd";
const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";
const GREEN = "#34c759";
const GRAY = "#86868b";
const DARK = "#1d1d1f";

// Node positions (cloud AI architecture)
const nodes = [
  { id: "user", label: "ลูกค้า", emoji: "👤", x: 160, y: 540, color: BLUE },
  { id: "line", label: "LINE", emoji: "💬", x: 480, y: 540, color: "#00C300" },
  { id: "n8n", label: "n8n", emoji: "⚡", x: 800, y: 400, color: "#EA4B71" },
  { id: "ai", label: "AI Model", emoji: "🧠", x: 1120, y: 300, color: PURPLE },
  { id: "rag", label: "RAG", emoji: "🔍", x: 1120, y: 540, color: VIOLET },
  { id: "db", label: "Database", emoji: "💾", x: 1400, y: 540, color: GREEN },
  { id: "response", label: "คำตอบ", emoji: "✨", x: 1600, y: 400, color: BLUE },
  { id: "back", label: "ส่งกลับ", emoji: "🚀", x: 480, y: 300, color: "#ff9500" },
];

const connections = [
  { from: 0, to: 1, phase: 0 },
  { from: 1, to: 2, phase: 1 },
  { from: 2, to: 3, phase: 2 },
  { from: 2, to: 4, phase: 2 },
  { from: 4, to: 5, phase: 3 },
  { from: 3, to: 6, phase: 4 },
  { from: 6, to: 7, phase: 5 },
  { from: 7, to: 0, phase: 6 },
];

const phases = [
  { range: [0, 25], title: "ลูกค้าส่งข้อความ", sub: "ผ่าน LINE, WhatsApp, หรือเว็บ" },
  { range: [25, 50], title: "n8n รับ Webhook", sub: "Workflow automation จัดการ routing" },
  { range: [50, 85], title: "AI วิเคราะห์ + ค้นหา", sub: "Frontier Model + RAG pipeline" },
  { range: [85, 120], title: "ค้น Knowledge Base", sub: "Vector DB ค้นเอกสารที่เกี่ยวข้อง" },
  { range: [120, 145], title: "สร้างคำตอบอัจฉริยะ", sub: "Generate response ภาษาไทย" },
  { range: [145, 170], title: "ส่งกลับทันที", sub: "< 3 วินาที ตอบกลับลูกค้า" },
  { range: [170, 180], title: "วนรอบ", sub: "ทำงาน 24/7 อัตโนมัติ" },
];

function drawConnection(
  ctx: CanvasRenderingContext2D,
  from: typeof nodes[0],
  to: typeof nodes[0],
  progress: number,
  color: string
) {
  // Draw line
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(
    from.x + (to.x - from.x) * Math.min(progress, 1),
    from.y + (to.y - from.y) * Math.min(progress, 1)
  );
  ctx.strokeStyle = color + "40";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw traveling dot
  if (progress > 0 && progress < 1.5) {
    const dotProgress = Math.min(progress, 1);
    const dx = from.x + (to.x - from.x) * dotProgress;
    const dy = from.y + (to.y - from.y) * dotProgress;
    ctx.beginPath();
    ctx.arc(dx, dy, 5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Glow
    const grad = ctx.createRadialGradient(dx, dy, 0, dx, dy, 20);
    grad.addColorStop(0, color + "40");
    grad.addColorStop(1, color + "00");
    ctx.beginPath();
    ctx.arc(dx, dy, 20, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

export default function CloudVideo() {
  const frame = useCurrentFrame();
  const progress = frame / TOTAL;

  // Current phase
  const currentPhase = phases.findIndex(
    (p) => frame >= p.range[0] && frame < p.range[1]
  );
  const phase = phases[Math.max(0, currentPhase)];

  return (
    <AbsoluteFill style={{ background: BG }}>
      {/* Grid background */}
      <svg width="1920" height="1080" style={{ position: "absolute", opacity: 0.3 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={1080} stroke="#e5e5ea" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={1920} y2={i * 50} stroke="#e5e5ea" strokeWidth={0.5} />
        ))}
      </svg>

      {/* Connections */}
      <svg width="1920" height="1080" style={{ position: "absolute" }}>
        {connections.map((conn, i) => {
          const phaseStart = conn.phase * 25;
          const connProgress = interpolate(frame, [phaseStart, phaseStart + 20], [0, 1.3], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const from = nodes[conn.from];
          const to = nodes[conn.to];

          return (
            <g key={i}>
              {/* Static line (faded) */}
              <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#e5e5ea" strokeWidth={1} strokeDasharray="6 4" />
              {/* Animated line */}
              {connProgress > 0 && (
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={from.x + (to.x - from.x) * Math.min(connProgress, 1)}
                  y2={from.y + (to.y - from.y) * Math.min(connProgress, 1)}
                  stroke={from.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  opacity={0.6}
                />
              )}
              {/* Traveling dot */}
              {connProgress > 0 && connProgress < 1.3 && (
                <circle
                  cx={from.x + (to.x - from.x) * Math.min(connProgress, 1)}
                  cy={from.y + (to.y - from.y) * Math.min(connProgress, 1)}
                  r={6}
                  fill={from.color}
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const nodeAppear = interpolate(frame, [i * 8, i * 8 + 15], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.out(Easing.back(1.5)),
        });
        const isActive = connections.some(
          (c) =>
            (c.from === i || c.to === i) &&
            frame >= c.phase * 25 &&
            frame < c.phase * 25 + 30
        );

        return (
          <div
            key={node.id}
            style={{
              position: "absolute",
              left: node.x - 50,
              top: node.y - 50,
              width: 100,
              height: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${nodeAppear})`,
              opacity: nodeAppear,
            }}
          >
            {/* Pulse ring when active */}
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  border: `2px solid ${node.color}40`,
                  animation: "pulse 1s ease-out infinite",
                }}
              />
            )}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: isActive ? node.color + "15" : "#fff",
                border: `1.5px solid ${isActive ? node.color + "40" : "#e5e5ea"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                boxShadow: isActive
                  ? `0 8px 24px ${node.color}20`
                  : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.3s",
              }}
            >
              {node.emoji}
            </div>
            <span
              style={{
                marginTop: 6,
                fontSize: 13,
                fontWeight: 500,
                color: isActive ? node.color : GRAY,
                fontFamily: "SF Pro Display, -apple-system, sans-serif",
              }}
            >
              {node.label}
            </span>
          </div>
        );
      })}

      {/* Phase title (bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: BLUE,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 8,
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
          }}
        >
          {currentPhase >= 0 ? `STEP ${currentPhase + 1}` : "CLOUD AI WORKFLOW"}
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            color: DARK,
            letterSpacing: "-0.03em",
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
          }}
        >
          {phase?.title || "AI Automation Pipeline"}
        </div>
        <div
          style={{
            fontSize: 19,
            color: GRAY,
            marginTop: 4,
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
          }}
        >
          {phase?.sub || "ระบบอัตโนมัติสำหรับธุรกิจไทย"}
        </div>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "#e5e5ea",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${BLUE}, ${PURPLE}, ${GREEN})`,
          }}
        />
      </div>

      {/* Branding */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: `linear-gradient(135deg, ${BLUE}, ${PURPLE})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          C
        </div>
        <span style={{ fontSize: 15, fontWeight: 600, color: DARK, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
          CloudAI Thailand
        </span>
      </div>
    </AbsoluteFill>
  );
}
