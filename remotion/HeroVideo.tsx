import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring, useVideoConfig } from "remotion";

const BLUE = "#2997ff";
const PURPLE = "#5856d6";
const VIOLET = "#af52de";
const GREEN = "#34c759";
const TEAL = "#5ac8fa";
const GRAY = "#86868b";
const DARK = "#1d1d1f";

/* ─── Particle system ─── */
function Particles({ frame }: { frame: number }) {
  const particles = Array.from({ length: 60 }, (_, i) => {
    const seed = i * 137.508; // golden angle
    const baseX = (seed * 7.3) % 1920;
    const baseY = (seed * 4.1) % 1080;
    const speed = 0.3 + (i % 5) * 0.15;
    const hue = 200 + (i % 7) * 10;
    const size = 1.5 + (i % 4) * 0.8;
    return { baseX, baseY, speed, hue, size, i };
  });

  return (
    <svg width="1920" height="1080" style={{ position: "absolute" }}>
      {/* Connection lines */}
      {particles.map((p, pi) => {
        const x1 = p.baseX + Math.sin(frame * 0.008 + p.i * 0.5) * 40;
        const y1 = p.baseY + Math.cos(frame * 0.006 + p.i * 0.3) * 30;

        return particles.slice(pi + 1).map((q, qi) => {
          const x2 = q.baseX + Math.sin(frame * 0.008 + q.i * 0.5) * 40;
          const y2 = q.baseY + Math.cos(frame * 0.006 + q.i * 0.3) * 30;
          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 150) return null;
          const alpha = (1 - dist / 150) * 0.06;
          return (
            <line key={`${pi}-${qi}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={`hsla(${p.hue}, 70%, 65%, ${alpha})`} strokeWidth={0.5}
            />
          );
        });
      })}

      {/* Particles with glow */}
      {particles.map((p) => {
        const x = p.baseX + Math.sin(frame * 0.008 + p.i * 0.5) * 40;
        const y = p.baseY + Math.cos(frame * 0.006 + p.i * 0.3) * 30;
        const pulse = 1 + Math.sin(frame * 0.05 + p.i) * 0.3;
        return (
          <g key={p.i}>
            <circle cx={x} cy={y} r={p.size * 3 * pulse}
              fill={`hsla(${p.hue}, 70%, 65%, 0.08)`}
            />
            <circle cx={x} cy={y} r={p.size * pulse}
              fill={`hsla(${p.hue}, 80%, 70%, 0.5)`}
            />
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
    <div style={{
      position: "absolute",
      left: 960 - 150,
      top: 440 - 150,
      width: 300,
      height: 300,
    }}>
      {/* Outer glow rings */}
      {[200, 150, 100].map((r, i) => (
        <div key={i} style={{
          position: "absolute",
          left: 150 - r * pulse,
          top: 150 - r * pulse,
          width: r * 2 * pulse,
          height: r * 2 * pulse,
          borderRadius: "50%",
          border: `1px solid hsla(${210 + i * 20}, 80%, 60%, ${0.08 - i * 0.02})`,
          transform: `rotate(${rotate + i * 30}deg)`,
        }} />
      ))}
      {/* Core orb */}
      <div style={{
        position: "absolute",
        left: 150 - 40,
        top: 150 - 40,
        width: 80,
        height: 80,
        borderRadius: 20,
        background: `linear-gradient(135deg, ${BLUE}20, ${PURPLE}15)`,
        border: `1px solid ${BLUE}25`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 0 ${60 * pulse}px ${20 * pulse}px ${BLUE}08`,
      }}>
        <span style={{ fontSize: 32 }}>☁️</span>
      </div>
    </div>
  );
}

/* ─── Floating model badges ─── */
const models = [
  { name: "GPT-5", color: "#10a37f", angle: 0, dist: 220 },
  { name: "Claude 4.6", color: "#c96442", angle: 60, dist: 240 },
  { name: "Gemini 3.1", color: "#4285f4", angle: 120, dist: 210 },
  { name: "DeepSeek", color: "#5b6abf", angle: 180, dist: 230 },
  { name: "Grok 3", color: "#1d9bf0", angle: 240, dist: 220 },
  { name: "o3", color: "#10a37f", angle: 300, dist: 200 },
];

function ModelBadges({ frame }: { frame: number }) {
  const { fps } = useVideoConfig();

  return (
    <>
      {models.map((m, i) => {
        // Appear animation
        const appear = spring({
          frame: frame - 15 - i * 4,
          fps,
          config: { damping: 15, stiffness: 80 },
        });

        const rad = ((m.angle + frame * 0.15) * Math.PI) / 180;
        const bob = Math.sin(frame * 0.02 + i * 1.5) * 8;
        const x = 960 + m.dist * Math.cos(rad);
        const y = 440 + m.dist * 0.7 * Math.sin(rad) + bob;

        return (
          <div key={m.name} style={{
            position: "absolute",
            left: x - 55,
            top: y - 18,
            opacity: appear,
            transform: `scale(${appear})`,
          }}>
            {/* Connection line to center */}
            <svg style={{ position: "absolute", left: 55 - x + 960, top: 18 - y + 440, width: 1920, height: 1080, pointerEvents: "none" }}>
              <line x1={x} y1={y} x2={960} y2={440}
                stroke={m.color} strokeWidth={0.8} strokeDasharray="4 4"
                opacity={0.15}
              />
              {/* Traveling dot */}
              {appear > 0.5 && (() => {
                const t = (Math.sin(frame * 0.02 + i * 2) + 1) / 2;
                const dx = x + (960 - x) * t;
                const dy = y + (440 - y) * t;
                return <circle cx={dx} cy={dy} r={3} fill={m.color} opacity={0.5} />;
              })()}
            </svg>

            {/* Badge */}
            <div style={{
              padding: "8px 16px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.9)",
              border: `1px solid ${m.color}20`,
              boxShadow: `0 4px 20px ${m.color}12, 0 0 0 0.5px rgba(255,255,255,0.8)`,
              fontSize: 14,
              fontWeight: 500,
              color: m.color,
              fontFamily: "SF Pro Display, -apple-system, sans-serif",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: m.color }} />
              {m.name}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ─── Main Hero Video ─── */
export default function HeroVideo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title appear
  const titleY = interpolate(frame, [8, 30], [60, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const titleOp = interpolate(frame, [8, 25], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(frame, [18, 40], [40, 0], { extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const subOp = interpolate(frame, [18, 35], [0, 1], { extrapolateRight: "clamp" });
  const bodyOp = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const statsOp = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#fbfbfd" }}>
      {/* Particle field */}
      <Particles frame={frame} />

      {/* Center orb */}
      <CenterOrb frame={frame} />

      {/* Model badges orbiting */}
      <ModelBadges frame={frame} />

      {/* Title */}
      <div style={{
        position: "absolute",
        top: 120,
        left: 0,
        right: 0,
        textAlign: "center",
      }}>
        {/* Overline */}
        <div style={{
          opacity: interpolate(frame, [3, 15], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          marginBottom: 24,
        }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: GREEN,
            boxShadow: `0 0 ${8 + Math.sin(frame * 0.1) * 4}px ${GREEN}60`,
          }} />
          <span style={{ fontSize: 16, color: BLUE, fontWeight: 500, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
            CloudAI Thailand
          </span>
        </div>

        {/* Main headline */}
        <div style={{
          overflow: "hidden",
          marginBottom: 8,
        }}>
          <div style={{
            fontSize: 88,
            fontWeight: 600,
            color: DARK,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
            transform: `translateY(${titleY}px)`,
            opacity: titleOp,
          }}>
            ให้ AI ทำงานแทน
          </div>
        </div>

        <div style={{ overflow: "hidden", marginBottom: 20 }}>
          <div style={{
            fontSize: 48,
            fontWeight: 600,
            color: GRAY,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            fontFamily: "SF Pro Display, -apple-system, sans-serif",
            transform: `translateY(${subY}px)`,
            opacity: subOp,
          }}>
            คุณทำสิ่งที่สำคัญ
          </div>
        </div>

        {/* Body */}
        <div style={{
          fontSize: 21,
          color: GRAY,
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.52,
          opacity: bodyOp,
          fontFamily: "SF Pro Display, -apple-system, sans-serif",
          fontWeight: 400,
        }}>
          ติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model
          <br />
          สร้าง workflow อัตโนมัติ ลดงานซ้ำ 80%
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: "absolute",
        bottom: 100,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 100,
        opacity: statsOp,
      }}>
        {[
          { value: "6+", label: "Frontier Models" },
          { value: "55+", label: "Integrations" },
          { value: "฿19,900", label: "เริ่มต้น" },
        ].map((stat, i) => (
          <div key={stat.label} style={{
            textAlign: "center",
            opacity: interpolate(frame, [50 + i * 5, 65 + i * 5], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [50 + i * 5, 65 + i * 5], [15, 0], { extrapolateRight: "clamp" })}px)`,
          }}>
            <div style={{ fontSize: 32, fontWeight: 600, color: DARK, letterSpacing: "-0.02em", fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 13, color: GRAY, marginTop: 4, letterSpacing: "0.02em", fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Branding */}
      <div style={{
        position: "absolute",
        top: 24,
        left: 32,
        display: "flex",
        alignItems: "center",
        gap: 8,
        opacity: interpolate(frame, [0, 10], [0, 0.6], { extrapolateRight: "clamp" }),
      }}>
        <div style={{
          width: 24,
          height: 24,
          borderRadius: 7,
          background: `linear-gradient(135deg, ${BLUE}, ${PURPLE})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 11,
          fontWeight: 800,
        }}>C</div>
        <span style={{ fontSize: 13, fontWeight: 600, color: DARK, fontFamily: "SF Pro Display, -apple-system, sans-serif" }}>
          CloudAI
        </span>
      </div>
    </AbsoluteFill>
  );
}
