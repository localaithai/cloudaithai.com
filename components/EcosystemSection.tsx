"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cloud,
  Server,
  ArrowRight,
  ArrowLeftRight,
  ExternalLink,
  ChevronRight,
  Shield,
  DollarSign,
  Sparkles,
  WifiOff,
  CheckCircle,
  ArrowDown,
  Plus,
  RefreshCcw,
} from "lucide-react";

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Brand Icon with SVG fallback ─── */
const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function BrandIcon({
  slug,
  fallback,
  color,
}: {
  slug: string;
  fallback: string;
  color: string;
}) {
  const [err, setErr] = useState(false);
  const file = SLUG_TO_FILE[slug] || slug;
  if (err) return <span className="text-lg">{fallback}</span>;
  return (
    <img
      src={`/brands/${file}.svg`}
      alt={slug}
      width={22}
      height={22}
      onError={() => setErr(true)}
      className="w-[22px] h-[22px]"
      loading="lazy"
    />
  );
}

/* ─── Partner data ─── */
interface Partner {
  name: string;
  slug: string;
  fallback: string;
  color: string;
}

const partnerCategories: {
  id: string;
  label: string;
  labelTh: string;
  color: string;
  partners: Partner[];
}[] = [
  {
    id: "ai",
    label: "AI Models",
    labelTh: "โมเดล AI",
    color: "#2997ff",
    partners: [
      { name: "OpenAI", slug: "openai", fallback: "\u{1F916}", color: "#412991" },
      { name: "Anthropic", slug: "anthropic", fallback: "\u{1F9E0}", color: "#191919" },
      { name: "Google Gemini", slug: "googlegemini", fallback: "\u{1F535}", color: "#4285F4" },
      { name: "DeepSeek", slug: "deepseek", fallback: "\u{1F52E}", color: "#5b6abf" },
      { name: "xAI (Grok)", slug: "x", fallback: "\u{1D54F}", color: "#000000" },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    labelTh: "ระบบอัตโนมัติ",
    color: "#5856d6",
    partners: [
      { name: "n8n", slug: "n8n", fallback: "\u26A1", color: "#EA4B71" },
      { name: "Flowise", slug: "flowise", fallback: "\u{1F30A}", color: "#3b82f6" },
      { name: "Dify", slug: "dify", fallback: "\u{1F52E}", color: "#1f6feb" },
      { name: "OpenClaw", slug: "openclaw", fallback: "\u{1F99E}", color: "#e74c3c" },
      { name: "ActivePieces", slug: "activepieces", fallback: "\u{1F9E9}", color: "#000000" },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
    labelTh: "โฮสติ้ง",
    color: "#ff9500",
    partners: [
      { name: "DigitalOcean", slug: "digitalocean", fallback: "\u{1F30A}", color: "#0080FF" },
      { name: "Vultr", slug: "vultr", fallback: "\u{1F5A5}\uFE0F", color: "#007BFC" },
      { name: "Hetzner", slug: "hetzner", fallback: "\u{1F3D7}\uFE0F", color: "#D50C2D" },
      { name: "Cloudflare", slug: "cloudflare", fallback: "\u2601\uFE0F", color: "#F38020" },
      { name: "Tailscale", slug: "tailscale", fallback: "\u{1F310}", color: "#000000" },
    ],
  },
  {
    id: "platforms",
    label: "Platforms",
    labelTh: "แพลตฟอร์ม",
    color: "#34c759",
    partners: [
      { name: "LINE", slug: "line", fallback: "\u{1F4AC}", color: "#00C300" },
      { name: "Facebook", slug: "facebook", fallback: "\u{1F4D8}", color: "#0866FF" },
      { name: "Instagram", slug: "instagram", fallback: "\u{1F4F8}", color: "#E4405F" },
      { name: "WhatsApp", slug: "whatsapp", fallback: "\u{1F4F1}", color: "#25D366" },
      { name: "Telegram", slug: "telegram", fallback: "\u2708\uFE0F", color: "#26A5E4" },
    ],
  },
];

/* ─── Decision tree data ─── */
interface DecisionNode {
  question: string;
  yes: string | number; // answer string or index of next node
  no: string | number;
}

const decisionTree: DecisionNode[] = [
  {
    question: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 sensitive \u0E21\u0E32\u0E01?",
    yes: "LocalAI",
    no: 1,
  },
  {
    question: "\u0E07\u0E1A\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E01\u0E34\u0E19 \u0E3F60K?",
    yes: "LocalAI",
    no: "CloudAI",
  },
  {
    question: "\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 Frontier Model?",
    yes: "CloudAI",
    no: "Either",
  },
  {
    question: "\u0E15\u0E49\u0E2D\u0E07\u0E17\u0E33\u0E07\u0E32\u0E19 Offline?",
    yes: "LocalAI",
    no: "CloudAI",
  },
];

/* ─── Section heading helper ─── */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <p className="text-sm font-semibold tracking-widest uppercase text-[#2997ff] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Section 1 — CloudAI + LocalAI Ecosystem
   ═══════════════════════════════════════════════════════════════════ */
function EcosystemOverview() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Ecosystem"
          title="CloudAI + LocalAI"
          subtitle="สองแบรนด์ หนึ่งเครือข่าย — ครอบคลุมทุกความต้องการ AI ของธุรกิจไทย"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center"
        >
          {/* CloudAI Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="apple-card p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2997ff]/5 to-transparent" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-5">
                <Cloud className="w-7 h-7 text-[#2997ff]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                CloudAI
              </h3>
              <p className="text-[#86868b] text-sm font-medium mb-4">
                cloudaithai.com
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#2997ff] shrink-0" />
                  <span>Cloud-based AI Automation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#2997ff] shrink-0" />
                  <span>Frontier Models (GPT-5, Claude, Gemini)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#2997ff] shrink-0" />
                  <span>เริ่มต้นเร็ว ไม่ต้องซื้อ Hardware</span>
                </div>
              </div>
              <div className="inline-block bg-[#2997ff]/10 text-[#2997ff] text-sm font-semibold px-4 py-2 rounded-full">
                เริ่มต้น ฿19,900+
              </div>
            </div>
          </motion.div>

          {/* Cross-sell Arrow */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-2 py-4"
          >
            <ArrowLeftRight className="w-6 h-6 text-[#86868b] hidden md:block" />
            <ArrowDown className="w-6 h-6 text-[#86868b] md:hidden" />
            <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider">
              Cross-sell
            </span>
            <p className="text-[10px] text-[#86868b] text-center max-w-[120px] leading-tight">
              เริ่มจากฝั่งไหนก็ได้ ย้ายข้ามได้ตลอด
            </p>
          </motion.div>

          {/* LocalAI Card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="apple-card p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-[#1d1d1f]/5" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#06b6d4]/10 flex items-center justify-center mb-5">
                <Server className="w-7 h-7 text-[#06b6d4]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">
                LocalAI
              </h3>
              <p className="text-[#86868b] text-sm font-medium mb-4">
                localaithai.com
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                  <span>On-premise, Local Models</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                  <span>ข้อมูลอยู่ในบริษัท 100%</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#1d1d1f]">
                  <CheckCircle className="w-4 h-4 text-[#06b6d4] shrink-0" />
                  <span>ทำงาน Offline ได้</span>
                </div>
              </div>
              <div className="inline-block bg-[#06b6d4]/10 text-[#06b6d4] text-sm font-semibold px-4 py-2 rounded-full">
                เริ่มต้น ฿59,900+
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* LocalAI link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://localaithai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2997ff] hover:text-[#2997ff]/80 text-sm font-semibold transition-colors"
          >
            เยี่ยมชม LocalAI Thailand
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Section 2 — Technology Partners
   ═══════════════════════════════════════════════════════════════════ */
function TechnologyPartners() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Partners"
          title="Technology Partners"
          subtitle="เครื่องมือและแพลตฟอร์มที่เราใช้สร้างระบบ AI ให้ลูกค้า"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-10"
        >
          {partnerCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-lg font-semibold text-[#1d1d1f]">
                  {cat.label}
                  <span className="text-[#86868b] font-normal ml-2 text-sm">
                    {cat.labelTh}
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {cat.partners.map((p) => (
                  <motion.div
                    key={p.slug}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="apple-card p-4 flex flex-col items-center gap-3 text-center group cursor-default"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${p.color}10` }}
                    >
                      <BrandIcon
                        slug={p.slug}
                        fallback={p.fallback}
                        color={p.color}
                      />
                    </div>
                    <span className="text-xs font-medium text-[#1d1d1f] leading-tight">
                      {p.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Section 3 — Decision Tree: Cloud vs Local
   ═══════════════════════════════════════════════════════════════════ */
function DecisionTree() {
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<{ q: string; a: "yes" | "no" }[]>([]);

  const fullTree: DecisionNode[] = [
    {
      question: "ข้อมูล sensitive มาก?",
      yes: "LocalAI",
      no: 1,
    },
    {
      question: "งบเริ่มต้นเกิน ฿60K?",
      yes: "LocalAI",
      no: 2,
    },
    {
      question: "ต้องการ Frontier Model?",
      yes: "CloudAI",
      no: 3,
    },
    {
      question: "ต้องทำงาน Offline?",
      yes: "LocalAI",
      no: "CloudAI",
    },
  ];

  const handleAnswer = (answer: "yes" | "no") => {
    const node = fullTree[currentStep];
    const next = answer === "yes" ? node.yes : node.no;

    setHistory([...history, { q: node.question, a: answer }]);

    if (typeof next === "string") {
      setResult(next);
    } else {
      setCurrentStep(next);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setResult(null);
    setHistory([]);
  };

  const resultColor =
    result === "CloudAI"
      ? "#2997ff"
      : result === "LocalAI"
        ? "#06b6d4"
        : "#34c759";

  const resultIcon =
    result === "CloudAI" ? (
      <Cloud className="w-8 h-8" />
    ) : result === "LocalAI" ? (
      <Server className="w-8 h-8" />
    ) : (
      <ArrowLeftRight className="w-8 h-8" />
    );

  const questionIcons = [
    <Shield key="shield" className="w-5 h-5 text-[#ff3b30]" />,
    <DollarSign key="dollar" className="w-5 h-5 text-[#ff9500]" />,
    <Sparkles key="sparkles" className="w-5 h-5 text-[#af52de]" />,
    <WifiOff key="wifi" className="w-5 h-5 text-[#86868b]" />,
  ];

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Decision Guide"
          title="Cloud หรือ Local?"
          subtitle="ตอบคำถามง่ายๆ เพื่อหาคำตอบที่เหมาะกับธุรกิจคุณ"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="apple-card p-8 md:p-10 max-w-lg mx-auto"
        >
          {/* History */}
          {history.length > 0 && (
            <div className="space-y-3 mb-6">
              {history.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm text-[#86868b]"
                >
                  {questionIcons[i]}
                  <span>{h.q}</span>
                  <span className="ml-auto font-semibold text-[#1d1d1f]">
                    {h.a === "yes" ? "ใช่" : "ไม่"}
                  </span>
                </div>
              ))}
              <div className="border-t border-[#e5e5e5] pt-4" />
            </div>
          )}

          {/* Current question or result */}
          {result ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{
                  backgroundColor: `${resultColor}15`,
                  color: resultColor,
                }}
              >
                {resultIcon}
              </div>
              <p className="text-sm text-[#86868b] mb-1">
                แนะนำสำหรับคุณ
              </p>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: resultColor }}
              >
                {result === "Either" ? "ใช้ได้ทั้งคู่" : result}
              </h3>
              <p className="text-sm text-[#86868b] mb-6">
                {result === "CloudAI" &&
                  "เริ่มต้นง่าย ใช้ Frontier Model ได้ทันที ไม่ต้องลงทุน Hardware"}
                {result === "LocalAI" &&
                  "ข้อมูลปลอดภัย 100% อยู่ในบริษัท ทำงาน Offline ได้"}
                {result === "Either" &&
                  "ธุรกิจของคุณเหมาะกับทั้ง Cloud และ Local — เลือกตามงบและความสะดวก"}
              </p>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 text-[#2997ff] text-sm font-semibold hover:text-[#2997ff]/80 transition-colors"
              >
                <RefreshCcw className="w-4 h-4" />
                ลองใหม่
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] flex items-center justify-center mx-auto mb-5">
                {questionIcons[currentStep]}
              </div>
              <p className="text-xs text-[#86868b] mb-2 uppercase tracking-wider font-semibold">
                คำถาม {currentStep + 1}/{fullTree.length}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-8">
                {fullTree[currentStep].question}
              </h3>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="px-8 py-3 rounded-full bg-[#1d1d1f] text-white text-sm font-semibold hover:bg-[#1d1d1f]/80 transition-colors"
                >
                  ใช่
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="px-8 py-3 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-sm font-semibold hover:bg-[#e5e5e5] transition-colors"
                >
                  ไม่
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Section 4 — เริ่มต้นจากไหนก็ได้
   ═══════════════════════════════════════════════════════════════════ */
function FlexibleStart() {
  const paths = [
    {
      icon: <Cloud className="w-6 h-6 text-[#2997ff]" />,
      iconBg: "#2997ff",
      title: "เริ่มจาก Cloud",
      from: "CloudAI",
      fromColor: "#2997ff",
      arrow: "ธุรกิจโต ข้อมูลมากขึ้น",
      to: "LocalAI",
      toColor: "#06b6d4",
      desc: "เริ่มต้นเร็วด้วย Cloud — พอธุรกิจโตขึ้น ย้ายไป On-premise ได้ เราช่วย migrate ให้",
    },
    {
      icon: <Server className="w-6 h-6 text-[#06b6d4]" />,
      iconBg: "#06b6d4",
      title: "เริ่มจาก Local",
      from: "LocalAI",
      fromColor: "#06b6d4",
      arrow: "ต้องการ Frontier Model",
      to: "CloudAI",
      toColor: "#2997ff",
      desc: "เริ่มจาก On-premise — พอต้องการ Frontier Model เพิ่ม Cloud เข้ามาได้ทันที",
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6 text-[#34c759]" />,
      iconBg: "#34c759",
      title: "ใช้ทั้งคู่",
      from: "LocalAI",
      fromColor: "#06b6d4",
      arrow: "Sensitive data อยู่ Local",
      to: "CloudAI",
      toColor: "#2997ff",
      desc: "ข้อมูลลับใช้ Local — งานทั่วไปใช้ Cloud ได้ทั้งสองแบบพร้อมกัน",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Flexibility"
          title="เริ่มต้นจากไหนก็ได้"
          subtitle="ไม่ว่าจะเลือกแบบไหน เราช่วยให้คุณเปลี่ยนแปลงได้ตลอด"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {paths.map((path) => (
            <motion.div
              key={path.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="apple-card p-7 relative overflow-hidden"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${path.iconBg}10` }}
              >
                {path.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1d1d1f] mb-4">
                {path.title}
              </h3>

              {/* Flow visual */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${path.fromColor}15`,
                    color: path.fromColor,
                  }}
                >
                  {path.from}
                </span>
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <ArrowRight className="w-4 h-4 text-[#86868b]" />
                  <span className="text-[9px] text-[#86868b] leading-tight text-center mt-0.5 truncate w-full">
                    {path.arrow}
                  </span>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
                  style={{
                    backgroundColor: `${path.toColor}15`,
                    color: path.toColor,
                  }}
                >
                  <Plus className="w-3 h-3" />
                  {path.to}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#86868b] leading-relaxed">
                {path.desc}
              </p>

              {/* We help badge */}
              <div className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#34c759] uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5" />
                เราช่วย migrate ให้
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#86868b] text-sm mb-4">
            ไม่แน่ใจว่าจะเริ่มยังไง? ปรึกษาเราได้ฟรี
          </p>
          <a
            href="https://lin.ee/cloudaithai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1d1d1f]/80 transition-colors"
          >
            พูดคุยกับเรา
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   Main Export
   ═══════════════════════════════════════════════════════════════════ */
export default function EcosystemSection() {
  return (
    <>
      <EcosystemOverview />
      <TechnologyPartners />
      <DecisionTree />
      <FlexibleStart />
    </>
  );
}
