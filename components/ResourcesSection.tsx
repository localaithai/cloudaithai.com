"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Scale,
  Calculator,
  HelpCircle,
  Plus,
  Sparkles,
  Server,
  Brain,
  Zap,
  ChevronDown,
  Users,
  DollarSign,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

/* ─── Shared fade-in ─── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ═══════════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="apple-section pt-8 pb-4">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.div {...fadeUp}>
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-[44px] sm:text-[56px] md:text-[72px] font-semibold tracking-[-0.04em] leading-[1.05] mb-5">
            เรียนรู้เรื่อง AI
            <br />
            Automation.
          </h1>
          <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            คู่มือ บทความ เครื่องมือ สำหรับธุรกิจไทย
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — คู่มือเริ่มต้น (Guide Cards)
   ═══════════════════════════════════════════════ */

const guides = [
  {
    icon: Sparkles,
    category: "เริ่มต้น",
    title: "AI Automation คืออะไร? เหมาะกับธุรกิจไหน?",
    excerpt:
      "ทำความเข้าใจ AI Automation ตั้งแต่พื้นฐาน — มันทำอะไรได้ ธุรกิจแบบไหนได้ประโยชน์มากที่สุด และตัวอย่างจริงจากธุรกิจไทย",
    readTime: "5 min read",
    color: "#2997ff",
  },
  {
    icon: Server,
    category: "เปรียบเทียบ",
    title: "Cloud AI vs Local AI — เลือกแบบไหนดี?",
    excerpt:
      "วิเคราะห์ข้อดีข้อเสียของ Cloud AI กับ Local AI แบบตรงไปตรงมา — ความเร็ว ค่าใช้จ่าย ความปลอดภัย เหมาะกับใคร",
    readTime: "8 min read",
    color: "#30d158",
  },
  {
    icon: DollarSign,
    category: "งบประมาณ",
    title: "เริ่มต้น AI ด้วยงบ ฿20,000 ได้จริงไหม?",
    excerpt:
      "แจกแจงค่าใช้จ่ายจริง แบบรายรายการ — อะไรฟรี อะไรต้องจ่าย และวิธี prioritize งบให้คุ้มค่าที่สุด",
    readTime: "5 min read",
    color: "#ff9f0a",
  },
];

function GuidesSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
            Guides
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-3">
            คู่มือเริ่มต้น.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto">
            อ่านจบ เข้าใจเลย ไม่ต้อง Google ต่อ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="apple-card p-8 flex flex-col group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${g.color}15` }}
              >
                <g.icon size={22} style={{ color: g.color }} />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: `${g.color}12`, color: g.color }}
                >
                  {g.category}
                </span>
                <span className="text-[12px] text-[#86868b] flex items-center gap-1">
                  <Clock size={12} />
                  {g.readTime}
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-3 leading-snug">
                {g.title}
              </h3>
              <p className="text-[14px] text-[#6e6e73] leading-relaxed flex-1">
                {g.excerpt}
              </p>
              <div className="mt-5 flex items-center text-[#2997ff] text-[14px] font-medium gap-1 group-hover:gap-2 transition-all">
                อ่านเพิ่มเติม
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — เปรียบเทียบ (Comparison Cards)
   ═══════════════════════════════════════════════ */

interface ComparisonRow {
  label: string;
  values: string[];
}

interface ComparisonCard {
  title: string;
  options: string[];
  rows: ComparisonRow[];
  highlight?: string;
}

const comparisons: ComparisonCard[] = [
  {
    title: "ChatGPT Plus vs Custom AI — อะไรคุ้มกว่า?",
    options: ["ChatGPT Plus", "Custom AI"],
    highlight: "Custom AI คุ้มกว่าระยะยาว เมื่อใช้เกิน 3 คน",
    rows: [
      { label: "ค่าใช้จ่าย", values: ["฿700/คน/เดือน", "฿19,900 ครั้งเดียว"] },
      { label: "จำนวนผู้ใช้", values: ["1 คน", "ไม่จำกัด"] },
      { label: "ปรับแต่ง Prompt", values: ["จำกัด", "เต็มที่"] },
      { label: "เชื่อมระบบอื่น", values: ["ไม่ได้", "เชื่อมได้หมด"] },
      { label: "ข้อมูลบริษัท", values: ["ส่งไป OpenAI", "เลือกได้"] },
    ],
  },
  {
    title: "n8n vs Zapier vs Make — เลือกอะไรดี?",
    options: ["n8n", "Zapier", "Make"],
    highlight: "n8n คุ้มสุดสำหรับธุรกิจที่ต้องการความยืดหยุ่น",
    rows: [
      { label: "ราคา", values: ["ฟรี (Self-host)", "฿700+/เดือน", "฿350+/เดือน"] },
      { label: "Open-source", values: ["ใช่", "ไม่", "ไม่"] },
      { label: "AI Node", values: ["มี (ครบ)", "มี (จำกัด)", "มี (จำกัด)"] },
      { label: "Self-host", values: ["ได้", "ไม่ได้", "ไม่ได้"] },
      { label: "ความง่าย", values: ["ปานกลาง", "ง่ายมาก", "ง่าย"] },
    ],
  },
  {
    title: "GPT-5 vs Claude 4.6 vs Gemini 3.1 — ใช้ตัวไหน?",
    options: ["GPT-5", "Claude 4.6", "Gemini 3.1"],
    highlight: "เราช่วยเลือก model ที่เหมาะกับงานแต่ละประเภท",
    rows: [
      { label: "ภาษาไทย", values: ["ดีมาก", "ดีมาก", "ดี"] },
      { label: "Reasoning", values: ["ดีมาก", "ดีเยี่ยม", "ดี"] },
      { label: "ราคา/1M token", values: ["~$5", "~$3", "~$1.25"] },
      { label: "Context window", values: ["256K", "1M", "2M"] },
      { label: "Code generation", values: ["ดีมาก", "ดีเยี่ยม", "ดีมาก"] },
    ],
  },
];

function ComparisonTable({ card }: { card: ComparisonCard }) {
  const cols = card.options.length;
  return (
    <motion.div
      {...fadeUp}
      className="apple-card p-8 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-2xl bg-[#5e5ce6]/10 flex items-center justify-center">
          <Scale size={20} className="text-[#5e5ce6]" />
        </div>
        <h3 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug">
          {card.title}
        </h3>
      </div>

      {/* Mini table */}
      <div className="overflow-x-auto -mx-2">
        <table className="w-full text-[13px] min-w-[320px]">
          <thead>
            <tr className="border-b border-black/[0.06]">
              <th className="text-left py-2.5 px-2 text-[#86868b] font-medium w-[100px]" />
              {card.options.map((o, i) => (
                <th
                  key={i}
                  className="text-center py-2.5 px-2 text-[#1d1d1f] font-semibold"
                >
                  {o}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {card.rows.map((row, ri) => (
              <tr key={ri} className="border-b border-black/[0.04]">
                <td className="py-2.5 px-2 text-[#6e6e73] font-medium">
                  {row.label}
                </td>
                {row.values.map((v, vi) => (
                  <td key={vi} className="py-2.5 px-2 text-center text-[#1d1d1f]">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {card.highlight && (
        <div className="mt-5 flex items-start gap-2 bg-[#2997ff]/[0.06] rounded-xl px-4 py-3">
          <Zap size={14} className="text-[#2997ff] mt-0.5 shrink-0" />
          <p className="text-[13px] text-[#1d1d1f] leading-relaxed">
            {card.highlight}
          </p>
        </div>
      )}
    </motion.div>
  );
}

function ComparisonsSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[13px] font-semibold text-[#5e5ce6] uppercase tracking-widest mb-3">
            Comparisons
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-3">
            เปรียบเทียบ.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto">
            ดูข้อมูลเทียบกันชัดๆ ตัดสินใจง่ายขึ้น
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {comparisons.map((card, i) => (
            <ComparisonTable key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — เครื่องมือคำนวณ (Interactive Tools)
   ═══════════════════════════════════════════════ */

const industries = [
  { label: "อีคอมเมิร์ซ", savingsPerPerson: 8500 },
  { label: "อสังหาริมทรัพย์", savingsPerPerson: 12000 },
  { label: "คลินิก / สุขภาพ", savingsPerPerson: 10000 },
  { label: "ร้านอาหาร", savingsPerPerson: 6500 },
  { label: "สำนักงานกฎหมาย", savingsPerPerson: 15000 },
  { label: "Content Creator", savingsPerPerson: 7000 },
  { label: "อื่นๆ", savingsPerPerson: 8000 },
];

const models = [
  { label: "GPT-5", costPer1k: 0.45 },
  { label: "Claude 4.6 Sonnet", costPer1k: 0.24 },
  { label: "Gemini 3.1 Pro", costPer1k: 0.10 },
  { label: "DeepSeek V3", costPer1k: 0.02 },
  { label: "Llama 4 (Self-host)", costPer1k: 0.005 },
];

function ROICalculator() {
  const [industryIdx, setIndustryIdx] = useState(0);
  const [teamSize, setTeamSize] = useState(5);
  const selected = industries[industryIdx];
  const annualSavings = selected.savingsPerPerson * teamSize * 12;
  const monthlySavings = selected.savingsPerPerson * teamSize;

  return (
    <motion.div {...fadeUp} className="apple-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-[#30d158]/10 flex items-center justify-center">
          <BarChart3 size={22} className="text-[#30d158]" />
        </div>
        <div>
          <h3 className="text-[19px] font-semibold text-[#1d1d1f]">
            ROI Calculator
          </h3>
          <p className="text-[13px] text-[#86868b]">
            ประเมินผลตอบแทนจากการใช้ AI Automation
          </p>
        </div>
      </div>

      {/* Industry dropdown */}
      <div className="mb-5">
        <label className="text-[13px] font-medium text-[#6e6e73] mb-2 block">
          ประเภทธุรกิจ
        </label>
        <div className="relative">
          <select
            value={industryIdx}
            onChange={(e) => setIndustryIdx(Number(e.target.value))}
            className="w-full appearance-none bg-[#f5f5f7] border-none rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#2997ff]/30 pr-10"
          >
            {industries.map((ind, i) => (
              <option key={i} value={i}>
                {ind.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] pointer-events-none"
          />
        </div>
      </div>

      {/* Team size slider */}
      <div className="mb-8">
        <label className="text-[13px] font-medium text-[#6e6e73] mb-2 block">
          จำนวนทีม: <span className="text-[#1d1d1f] font-semibold">{teamSize} คน</span>
        </label>
        <input
          type="range"
          min={1}
          max={50}
          value={teamSize}
          onChange={(e) => setTeamSize(Number(e.target.value))}
          className="w-full accent-[#30d158] h-1.5"
        />
        <div className="flex justify-between text-[11px] text-[#86868b] mt-1">
          <span>1 คน</span>
          <span>50 คน</span>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#f5f5f7] rounded-2xl p-6">
        <p className="text-[13px] text-[#6e6e73] mb-1">ประหยัดต่อเดือน (โดยประมาณ)</p>
        <p className="text-[32px] font-semibold text-[#30d158] tracking-tight">
          ฿{monthlySavings.toLocaleString()}
        </p>
        <div className="h-px bg-black/[0.06] my-4" />
        <p className="text-[13px] text-[#6e6e73] mb-1">ประหยัดต่อปี (โดยประมาณ)</p>
        <p className="text-[28px] font-semibold text-[#1d1d1f] tracking-tight">
          ฿{annualSavings.toLocaleString()}
        </p>
        <p className="text-[12px] text-[#86868b] mt-3">
          * คำนวณจากค่าเฉลี่ยเวลาที่ประหยัดได้ต่อคนต่อเดือน ในอุตสาหกรรม{selected.label}
        </p>
      </div>
    </motion.div>
  );
}

function APICostEstimator() {
  const [modelIdx, setModelIdx] = useState(0);
  const [messagesPerDay, setMessagesPerDay] = useState(100);
  const selected = models[modelIdx];
  // Estimate ~1.5K tokens per message (request + response)
  const tokensPerDay = messagesPerDay * 1500;
  const monthlyCostUSD = (tokensPerDay * 30 * selected.costPer1k) / 1000;
  const monthlyCostTHB = Math.round(monthlyCostUSD * 35);

  return (
    <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="apple-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-[#ff9f0a]/10 flex items-center justify-center">
          <Calculator size={22} className="text-[#ff9f0a]" />
        </div>
        <div>
          <h3 className="text-[19px] font-semibold text-[#1d1d1f]">
            API Cost Estimator
          </h3>
          <p className="text-[13px] text-[#86868b]">
            คำนวณค่า API ต่อเดือนตาม Model ที่เลือก
          </p>
        </div>
      </div>

      {/* Model dropdown */}
      <div className="mb-5">
        <label className="text-[13px] font-medium text-[#6e6e73] mb-2 block">
          เลือก AI Model
        </label>
        <div className="relative">
          <select
            value={modelIdx}
            onChange={(e) => setModelIdx(Number(e.target.value))}
            className="w-full appearance-none bg-[#f5f5f7] border-none rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#2997ff]/30 pr-10"
          >
            {models.map((m, i) => (
              <option key={i} value={i}>
                {m.label} — ${m.costPer1k}/1K tokens
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#86868b] pointer-events-none"
          />
        </div>
      </div>

      {/* Messages per day slider */}
      <div className="mb-8">
        <label className="text-[13px] font-medium text-[#6e6e73] mb-2 block">
          ข้อความต่อวัน: <span className="text-[#1d1d1f] font-semibold">{messagesPerDay}</span>
        </label>
        <input
          type="range"
          min={10}
          max={2000}
          step={10}
          value={messagesPerDay}
          onChange={(e) => setMessagesPerDay(Number(e.target.value))}
          className="w-full accent-[#ff9f0a] h-1.5"
        />
        <div className="flex justify-between text-[11px] text-[#86868b] mt-1">
          <span>10</span>
          <span>2,000</span>
        </div>
      </div>

      {/* Results */}
      <div className="bg-[#f5f5f7] rounded-2xl p-6">
        <p className="text-[13px] text-[#6e6e73] mb-1">ค่า API ต่อเดือน (โดยประมาณ)</p>
        <p className="text-[32px] font-semibold text-[#ff9f0a] tracking-tight">
          ฿{monthlyCostTHB.toLocaleString()}
        </p>
        <p className="text-[14px] text-[#6e6e73] mt-1">
          ~${monthlyCostUSD.toFixed(2)} USD
        </p>
        <div className="h-px bg-black/[0.06] my-4" />
        <div className="grid grid-cols-2 gap-4 text-[13px]">
          <div>
            <p className="text-[#86868b]">Tokens/วัน</p>
            <p className="text-[#1d1d1f] font-medium">{tokensPerDay.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-[#86868b]">Tokens/เดือน</p>
            <p className="text-[#1d1d1f] font-medium">{(tokensPerDay * 30).toLocaleString()}</p>
          </div>
        </div>
        <p className="text-[12px] text-[#86868b] mt-3">
          * ประมาณ 1,500 tokens ต่อข้อความ (รวม input + output) อัตราแลกเปลี่ยน 1 USD = 35 THB
        </p>
      </div>
    </motion.div>
  );
}

function CalculatorsSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[13px] font-semibold text-[#30d158] uppercase tracking-widest mb-3">
            Tools
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-3">
            เครื่องมือคำนวณ.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto">
            ลองคำนวณตัวเลขจริง ก่อนตัดสินใจ
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <ROICalculator />
          <APICostEstimator />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 5 — ถามตอบยอดนิยม (FAQ)
   ═══════════════════════════════════════════════ */

const faqs = [
  {
    q: "AI ปลอดภัยไหม ข้อมูลหลุดไหม?",
    a: "ปลอดภัย — ระบบที่เราติดตั้งสามารถเลือกเก็บข้อมูลบน server ของคุณเอง ถ้าใช้ Cloud API ข้อมูลจะถูก process แล้วลบทันที ไม่ถูกนำไป train model และเราตั้ง encryption ทั้ง at-rest และ in-transit ให้ทุกโปรเจกต์",
  },
  {
    q: "ต้องมีความรู้ technical ไหม?",
    a: "ไม่ต้องเลย เราออกแบบระบบให้ใช้งานง่าย ทุก tool เป็น visual drag-and-drop ไม่ต้องเขียนโค้ด เราติดตั้ง ตั้งค่า และสอนใช้ให้ครบ พร้อม support หลังติดตั้ง",
  },
  {
    q: "ใช้เวลาติดตั้งนานไหม?",
    a: "แพ็คเกจเริ่มต้น 3-5 วันทำการ แพ็คเกจ Professional 1-2 สัปดาห์ และ Enterprise 2-4 สัปดาห์ ขึ้นกับจำนวน workflow และระบบที่ต้องเชื่อมต่อ ระหว่างติดตั้งธุรกิจยังทำงานปกติ ไม่กระทบ",
  },
  {
    q: "ค่าใช้จ่ายรายเดือนจริงๆ เท่าไหร่?",
    a: "ค่า API ประมาณ ฿300-3,000/เดือน ขึ้นกับปริมาณการใช้งาน ค่า VPS (ถ้ามี) ฿200-800/เดือน ไม่มีค่า license เพราะใช้ open-source ทั้งหมด ลองใช้เครื่องคำนวณด้านบนเพื่อประมาณค่าใช้จ่ายจริง",
  },
  {
    q: "AI ตอบผิดบ่อยไหม?",
    a: "AI สมัยใหม่แม่นยำมากขึ้นมาก แต่เราไม่ปล่อยให้ AI ทำงานอัตโนมัติ 100% ทุกระบบมี human-in-the-loop คือมีจุดตรวจสอบก่อนส่งข้อมูลสำคัญ และเรา fine-tune prompt ให้เหมาะกับธุรกิจของคุณโดยเฉพาะ",
  },
  {
    q: "เปลี่ยนใจยกเลิกได้ไหม?",
    a: "ได้เสมอ ไม่ผูกสัญญารายปี ระบบทั้งหมดเป็นของคุณ ไม่มี vendor lock-in เพราะใช้ open-source tools ถ้าวันหนึ่งอยากดูแลเอง ก็ทำได้เลย เราส่งมอบ documentation ครบทุกขั้นตอน",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.04]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-[15px] font-medium text-[#1d1d1f] pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={18} className="text-[#6e6e73] shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[14px] text-[#6e6e73] leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[680px] mx-auto px-6">
        <motion.div {...fadeUp} className="text-center mb-14">
          <p className="text-[13px] font-semibold text-[#ff375f] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-[40px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-3">
            ถามตอบยอดนิยม.
          </h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[420px] mx-auto">
            คำถามที่ลูกค้าถามบ่อยที่สุด
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="apple-card p-6 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════ */
export default function ResourcesSection() {
  return (
    <>
      <HeroSection />
      <GuidesSection />
      <ComparisonsSection />
      <CalculatorsSection />
      <FAQSection />
    </>
  );
}
