import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Img } from "remotion";

const BG = "#fbfbfd";
const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";
const GREEN = "#34c759";
const GRAY = "#86868b";
const DARK = "#1d1d1f";

/* ─── Icon component with simpleicons ─── */
function Icon({ slug, fallback, size = 28, color }: { slug: string; fallback: string; size?: number; color?: string }) {
  const url = color
    ? `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`
    : `https://cdn.simpleicons.org/${slug}`;
  return (
    <Img src={url} width={size} height={size} style={{ objectFit: "contain" }}
      onError={() => {}} // Remotion handles errors
    />
  );
}

/* ─── Centered node layout — symmetric around 960,540 ─── */
const CX = 960;
const CY = 540;

const nodes = [
  { id: "user", label: "ลูกค้า", slug: "line", fallback: "👤", x: CX, y: CY - 300, color: "#00C300", iconColor: "00C300" },
  { id: "n8n", label: "n8n", slug: "n8n", fallback: "⚡", x: CX - 350, y: CY - 100, color: "#EA4B71", iconColor: "EA4B71" },
  { id: "ai", label: "AI Model", slug: "openai", fallback: "🧠", x: CX + 350, y: CY - 100, color: PURPLE, iconColor: "5856d6" },
  { id: "rag", label: "RAG", slug: "pinecone", fallback: "🔍", x: CX - 350, y: CY + 150, color: VIOLET, iconColor: "af52de" },
  { id: "db", label: "Database", slug: "supabase", fallback: "💾", x: CX + 350, y: CY + 150, color: GREEN, iconColor: "34c759" },
  { id: "response", label: "คำตอบ", slug: "googlechat", fallback: "✨", x: CX, y: CY + 300, color: BLUE, iconColor: "2997ff" },
];

const connections = [
  { from: 0, to: 1, phase: 0 },
  { from: 0, to: 2, phase: 0 },
  { from: 1, to: 3, phase: 1 },
  { from: 2, to: 4, phase: 1 },
  { from: 3, to: 5, phase: 2 },
  { from: 4, to: 5, phase: 2 },
];

const phases = [
  { range: [0, 30], title: "ลูกค้าส่งข้อความ", sub: "ผ่าน LINE / WhatsApp / เว็บ" },
  { range: [30, 70], title: "n8n + AI วิเคราะห์", sub: "Workflow Automation + Frontier Model" },
  { range: [70, 120], title: "ค้นหา Knowledge Base", sub: "RAG Pipeline + Vector Database" },
  { range: [120, 155], title: "สร้างคำตอบอัจฉริยะ", sub: "Generate response ภาษาไทย" },
  { range: [155, 180], title: "ส่งกลับทันที", sub: "< 3 วินาที ตอบกลับลูกค้า" },
];

export default function CloudVideo() {
  const frame = useCurrentFrame();
  const progress = frame / 180;
  const currentPhase = phases.findIndex((p) => frame >= p.range[0] && frame < p.range[1]);
  const phase = phases[Math.max(0, currentPhase)];

  return (
    <AbsoluteFill style={{ background: BG }}>
      {/* ─── Subtle grid ─── */}
      <svg width="1920" height="1080" style={{ position: "absolute", opacity: 0.15 }}>
        {Array.from({ length: 39 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={1080} stroke="#d2d2d7" strokeWidth={0.5} />
        ))}
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={1920} y2={i * 50} stroke="#d2d2d7" strokeWidth={0.5} />
        ))}
      </svg>

      {/* ─── Center pulse ring ─── */}
      {[120, 200, 300].map((r, i) => {
        const ringOp = interpolate(frame, [5 + i * 5, 25 + i * 5], [0, 0.12], { extrapolateRight: "clamp" });
        const pulse = 1 + Math.sin(frame * 0.02 + i) * 0.03;
        return (
          <div key={i} style={{
            position: "absolute",
            left: CX - r * pulse,
            top: CY - r * pulse,
            width: r * 2 * pulse,
            height: r * 2 * pulse,
            borderRadius: "50%",
            border: `1.5px solid ${BLUE}`,
            opacity: ringOp,
          }} />
        );
      })}

      {/* ─── Connection lines ─── */}
      <svg width="1920" height="1080" style={{ position: "absolute" }}>
        {connections.map((conn, i) => {
          const phaseStart = conn.phase * 35 + 10;
          const p = interpolate(frame, [phaseStart, phaseStart + 25], [0, 1.3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const from = nodes[conn.from];
          const to = nodes[conn.to];
          const ex = from.x + (to.x - from.x) * Math.min(p, 1);
          const ey = from.y + (to.y - from.y) * Math.min(p, 1);
          return (
            <g key={i}>
              {/* Background dashed line */}
              <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#d2d2d7" strokeWidth={1.5} strokeDasharray="8 6" />
              {/* Animated solid line */}
              {p > 0 && (
                <line x1={from.x} y1={from.y} x2={ex} y2={ey}
                  stroke={from.color} strokeWidth={3} strokeLinecap="round" opacity={0.7}
                />
              )}
              {/* Traveling circle */}
              {p > 0 && p < 1.3 && (
                <>
                  <circle cx={ex} cy={ey} r={8} fill={from.color} opacity={0.8} />
                  <circle cx={ex} cy={ey} r={16} fill={from.color} opacity={0.15} />
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* ─── Nodes with real icons ─── */}
      {nodes.map((node, i) => {
        const appear = interpolate(frame, [i * 5 + 2, i * 5 + 18], [0, 1], {
          extrapolateLeft: "clamp", extrapolateRight: "clamp",
          easing: Easing.out(Easing.back(1.4)),
        });
        const isActive = connections.some(
          (c) => (c.from === i || c.to === i) && frame >= c.phase * 35 + 10 && frame < c.phase * 35 + 45
        );
        const bob = Math.sin(frame * 0.015 + i * 2) * 4;

        return (
          <div key={node.id} style={{
            position: "absolute",
            left: node.x - 45,
            top: node.y - 45 + bob,
            width: 90,
            height: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${appear})`,
            opacity: appear,
          }}>
            {/* Active pulse ring */}
            {isActive && (
              <div style={{
                position: "absolute",
                inset: -8,
                borderRadius: 24,
                border: `2px solid ${node.color}40`,
                animation: "none",
                opacity: 0.5 + Math.sin(frame * 0.1) * 0.3,
              }} />
            )}
            {/* Icon container */}
            <div style={{
              width: 68,
              height: 68,
              borderRadius: 20,
              background: isActive ? `${node.color}12` : "#fff",
              border: `2px solid ${isActive ? node.color + "50" : "#e5e5ea"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isActive
                ? `0 8px 30px ${node.color}25`
                : "0 2px 8px rgba(0,0,0,0.04)",
            }}>
              <Icon slug={node.slug} fallback={node.fallback} size={30} color={node.iconColor} />
            </div>
            {/* Label */}
            <span style={{
              marginTop: 6,
              fontSize: 14,
              fontWeight: 600,
              color: isActive ? node.color : GRAY,
              fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
            }}>{node.label}</span>
          </div>
        );
      })}

      {/* ─── Center dot ─── */}
      <div style={{
        position: "absolute",
        left: CX - 6,
        top: CY - 6,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: BLUE,
        boxShadow: `0 0 20px ${BLUE}40`,
        opacity: interpolate(frame, [0, 15], [0, 0.8], { extrapolateRight: "clamp" }),
      }} />

      {/* ─── Phase title ─── */}
      <div style={{
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        textAlign: "center",
      }}>
        <div style={{
          fontSize: 15,
          fontWeight: 600,
          color: BLUE,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
        }}>
          {currentPhase >= 0 ? `STEP ${currentPhase + 1}` : "CLOUD AI WORKFLOW"}
        </div>
        <div style={{
          fontSize: 40,
          fontWeight: 600,
          color: DARK,
          letterSpacing: "-0.02em",
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
        }}>
          {phase?.title || "AI Automation Pipeline"}
        </div>
        <div style={{
          fontSize: 20,
          color: GRAY,
          marginTop: 4,
          fontFamily: "Bai Jamjuree, -apple-system, sans-serif",
        }}>
          {phase?.sub || ""}
        </div>
      </div>

      {/* ─── Progress bar ─── */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#e5e5ea" }}>
        <div style={{
          width: `${progress * 100}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${BLUE}, ${PURPLE}, ${GREEN})`,
          borderRadius: 2,
        }} />
      </div>

      {/* ─── Branding ─── */}
      <div style={{
        position: "absolute", top: 28, left: 36,
        display: "flex", alignItems: "center", gap: 8,
        opacity: 0.5,
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: 8,
          background: `linear-gradient(135deg, ${BLUE}, ${PURPLE})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 11, fontWeight: 800,
        }}>C</div>
        <span style={{ fontSize: 14, fontWeight: 600, color: DARK, fontFamily: "Bai Jamjuree, -apple-system, sans-serif" }}>
          CloudAI Thailand
        </span>
      </div>
    </AbsoluteFill>
  );
}
