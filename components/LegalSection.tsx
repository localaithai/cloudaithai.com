"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale,
  AlertTriangle,
  Check,
  Search,
  Shield,
  Clock,
  Mail,
  FileText,
  FileEdit,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  ChevronRight,
  Zap,
} from "lucide-react";

/* ─── LEGAL PAGE — "Contract Intelligence" demo concept ─── */

/* ─── Circular Gauge Component ─── */
function CircularGauge({
  value,
  max,
  size = 120,
  strokeWidth = 10,
  color,
  bgColor = "#f5f5f7",
  label,
  sublabel,
  animated = true,
}: {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  bgColor?: string;
  label?: string;
  sublabel?: string;
  animated?: boolean;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={animated ? { strokeDashoffset: circumference } : {}}
            whileInView={animated ? { strokeDashoffset: circumference - progress } : {}}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold" style={{ color }}>
            {value}
          </span>
          <span className="text-[10px] text-[#6e6e73]">/ {max}</span>
        </div>
      </div>
      {label && (
        <p className="text-[12px] font-semibold text-[#1d1d1f] mt-2">{label}</p>
      )}
      {sublabel && (
        <p className="text-[10px] text-[#6e6e73]">{sublabel}</p>
      )}
    </div>
  );
}

/* ─── Highlighted Text Component ─── */
function HL({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "yellow" | "red" | "green";
}) {
  const bgMap = {
    yellow: "bg-yellow-200/70",
    red: "bg-red-200/70",
    green: "bg-green-200/50",
  };
  return (
    <span className={`${bgMap[color]} px-0.5 rounded-sm`}>{children}</span>
  );
}

/* ─── Main Component ─── */
export default function LegalSection() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [pdpaAnimated, setPdpaAnimated] = useState(false);

  /* contract clauses data */
  const contractClauses = [
    {
      id: "1",
      number: "ข้อ 1",
      title: "คู่สัญญา",
      text: "สัญญาฉบับนี้ทำขึ้นระหว่าง บริษัท เอบีซี พร็อพเพอร์ตี้ จำกัด (\"ผู้ให้เช่า\") กับ บริษัท เทคสตาร์ท จำกัด (\"ผู้เช่า\") เมื่อวันที่ 1 มกราคม 2568",
      highlight: null,
    },
    {
      id: "2",
      number: "ข้อ 3",
      title: "ค่าเช่า",
      text: "ผู้เช่าตกลงชำระค่าเช่ารายเดือน เดือนละ 45,000 บาท (สี่หมื่นห้าพันบาทถ้วน) ภายในวันที่ 5 ของทุกเดือน",
      highlight: null,
    },
    {
      id: "3",
      number: "ข้อ 5.3",
      title: "ความรับผิด",
      text: "ผู้เช่าจะต้องรับผิดชอบค่าเสียหายทั้งหมดที่เกิดขึ้นกับอาคาร ไม่ว่าจะเกิดจากสาเหตุใดก็ตาม รวมถึงเหตุสุดวิสัย ภัยธรรมชาติ หรือการกระทำของบุคคลภายนอก",
      highlight: "red" as const,
    },
    {
      id: "4",
      number: "ข้อ 8.2",
      title: "ค่าปรับ",
      text: "หากผู้เช่าชำระค่าเช่าล่าช้า ผู้เช่าจะต้องชำระค่าปรับในอัตราร้อยละ 5 ต่อวัน ของยอดค้างชำระ จนกว่าจะชำระครบ",
      highlight: "red" as const,
    },
    {
      id: "5",
      number: "ข้อ 12",
      title: "การต่อสัญญา",
      text: "ผู้ให้เช่ามีสิทธิปรับค่าเช่าได้ไม่เกินร้อยละ 15 ต่อปี โดยแจ้งล่วงหน้าไม่น้อยกว่า 30 วัน",
      highlight: "yellow" as const,
    },
    {
      id: "6",
      number: "ข้อ 15",
      title: "เงินประกัน",
      text: "ผู้เช่าวางเงินประกันจำนวน 135,000 บาท ผู้ให้เช่าจะพิจารณาคืนเงินประกันตามที่เห็นสมควร",
      highlight: "red" as const,
    },
  ];

  /* risk items */
  const risks = [
    {
      clause: "ข้อ 5.3",
      title: "รับผิดเหตุสุดวิสัย",
      desc: "ผิดปกติ — ข้อนี้ทำให้ผู้เช่าต้องรับผิดแม้เหตุสุดวิสัย ซึ่งขัดต่อหลักกฎหมายทั่วไป",
      severity: "สูง",
    },
    {
      clause: "ข้อ 8.2",
      title: "ค่าปรับสูงเกินส่วน",
      desc: "ค่าปรับ 5%/วัน สูงกว่ามาตรฐาน (0.5-1.5%) ศาลอาจใช้ ม.383 ลดค่าปรับ",
      severity: "สูง",
    },
    {
      clause: "ข้อ 15",
      title: "ไม่มีเงื่อนไขคืนเงินประกัน",
      desc: "\"ตามที่เห็นสมควร\" ไม่ชัดเจน ควรกำหนดเงื่อนไข+ระยะเวลาคืนชัด",
      severity: "ปานกลาง",
    },
  ];

  /* recommendations */
  const recommendations = [
    { text: "เพิ่ม Force Majeure clause ยกเว้นเหตุสุดวิสัย", ref: "ม.8 พ.ร.บ.เช่า" },
    { text: "ลดค่าปรับจาก 5% เป็น 1.5%/วัน ตามมาตรฐาน", ref: "ม.383 ป.พ.พ." },
    { text: "กำหนดคืนเงินประกันภายใน 30 วัน พร้อมรายการหักค่าเสียหาย", ref: "ม.391 ป.พ.พ." },
  ];

  /* legal references */
  const legalRefs = [
    "ม.383 ป.พ.พ.",
    "ม.391 ป.พ.พ.",
    "ม.8 พ.ร.บ.เช่า",
    "ม.420 ป.พ.พ.",
  ];

  /* search results */
  const searchResults = [
    {
      section: "ม.383 ป.พ.พ.",
      title: "ลดเบี้ยปรับ",
      desc: "ถ้าเบี้ยปรับที่กำหนดไว้สูงเกินส่วน ศาลจะลดลงเป็นจำนวนพอสมควรก็ได้ การกำหนดเบี้ยปรับเป็นจำนวนเงินที่แน่นอนให้ถือว่าเป็นการกำหนดจำนวนค่าเสียหายไว้ล่วงหน้า",
      tags: ["ค่าปรับ", "สัญญา"],
    },
    {
      section: "ม.391 ป.พ.พ.",
      title: "การเลิกสัญญา",
      desc: "เมื่อคู่สัญญาฝ่ายหนึ่งได้เลิกสัญญาแล้ว คู่สัญญาแต่ละฝ่ายจำต้องให้อีกฝ่ายหนึ่งได้กลับคืนสู่ฐานะดังที่เป็นอยู่เดิม ส่วนเงินอันจะต้องใช้คืนให้บวกดอกเบี้ยเข้าด้วย",
      tags: ["เลิกสัญญา", "คืนเงิน"],
    },
    {
      section: "ม.8 พ.ร.บ.เช่า",
      title: "สิทธิผู้เช่า",
      desc: "ข้อกำหนดในสัญญาเช่าที่ไม่เป็นธรรมแก่ผู้เช่าอันเป็นข้อสาระสำคัญ ให้ถือว่าข้อสัญญาเช่านั้นเป็นโมฆะ ผู้เช่ามีสิทธิร้องขอให้ศาลวินิจฉัยได้",
      tags: ["สิทธิผู้เช่า", "โมฆะ"],
    },
  ];

  /* timeline items */
  const timelineItems = [
    {
      time: "08:00",
      icon: <Mail size={16} />,
      title: "AI สรุปอีเมล 12 ฉบับ",
      detail: "คัดแยกเร่งด่วน 3 ฉบับ สรุปประเด็นสำคัญทุกฉบับ",
      aiTime: "AI ทำใน 45 วินาที",
      oldTime: "เดิมใช้ 40 นาที",
      color: "#2997ff",
    },
    {
      time: "09:00",
      icon: <FileText size={16} />,
      title: "วิเคราะห์สัญญา 3 ฉบับ",
      detail: "สัญญาเช่า 54 หน้า + NDA 12 หน้า + MOU 27 หน้า — สรุปข้อเสี่ยงครบ",
      aiTime: "AI ทำใน 15 นาที",
      oldTime: "เดิมใช้ 1 วัน",
      color: "#5856d6",
    },
    {
      time: "11:00",
      icon: <FileEdit size={16} />,
      title: "Draft หนังสือทวงถาม",
      detail: "ร่างจดหมายทวงถามตามข้อมูลสัญญาและยอดค้างชำระ",
      aiTime: "AI ร่างให้ 2 นาที",
      oldTime: "เดิมใช้ 2 ชม.",
      color: "#34c759",
    },
    {
      time: "14:00",
      icon: <ClipboardCheck size={16} />,
      title: "ตรวจ PDPA Compliance",
      detail: "สแกนเว็บไซต์ + แอป 2 ตัว ตรวจ Privacy Policy, Consent, Cookie",
      aiTime: "AI ตรวจ 5 นาที",
      oldTime: "เดิมใช้ ครึ่งวัน",
      color: "#af52de",
    },
    {
      time: "16:00",
      icon: <BarChart3 size={16} />,
      title: "สรุปรายงานวัน",
      detail: "สรุปงานที่ทำ เคสที่เปิด ติดตามงาน deadline พรุ่งนี้",
      aiTime: "AI สรุปให้ 1 นาที",
      oldTime: "เดิมใช้ 30 นาที",
      color: "#ff9500",
    },
  ];

  /* PDPA categories */
  const pdpaCategories = [
    { label: "Privacy Policy", score: 95, color: "#34c759" },
    { label: "Consent Management", score: 88, color: "#34c759" },
    { label: "Data Retention", score: 45, color: "#ff3b30" },
    { label: "Breach Protocol", score: 30, color: "#ff3b30" },
    { label: "Cookie Banner", score: 92, color: "#34c759" },
    { label: "DPO Assignment", score: 100, color: "#34c759" },
    { label: "DPIA Assessment", score: 20, color: "#ff3b30" },
    { label: "Cross-border Transfer", score: 60, color: "#ff9500" },
  ];
  const pdpaOverall = Math.round(
    pdpaCategories.reduce((s, c) => s + c.score, 0) / pdpaCategories.length
  );

  return (
    <div>
      {/* ═══ 1. COMPACT HERO ═══ */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-5">
              <Scale size={14} className="text-[#5856d6]" />
              <span className="text-[12px] font-medium text-[#5856d6]">
                Contract Intelligence
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
              AI วิเคราะห์สัญญา<span className="gradient-text">ใน 5 นาที</span>
            </h1>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              จากสัญญา 54 หน้าที่ต้องอ่านทั้งวัน เป็นรายงานข้อเสี่ยง + ข้อเสนอแนะพร้อมมาตราอ้างอิง
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. FULL-WIDTH CONTRACT ANALYZER SPLIT SCREEN ═══ */}
      <section className="py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.06]"
          >
            {/* macOS chrome bar */}
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[12px] text-[#6e6e73] font-medium ml-2">
                Cloud AI — Contract Analyzer
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759] font-medium">
                  วิเคราะห์เสร็จ 4.7 วินาที
                </span>
              </div>
            </div>

            {/* Split panel */}
            <div className="flex flex-col lg:flex-row">
              {/* LEFT — Mock Document (60%) */}
              <div className="lg:w-[60%] border-r border-black/[0.04] p-5 sm:p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-[#5856d6]" />
                    <span className="text-[13px] font-semibold text-[#1d1d1f]">
                      สัญญาเช่าอาคารพาณิชย์
                    </span>
                  </div>
                  <span className="text-[10px] text-[#6e6e73]">54 หน้า | 23 ข้อ</span>
                </div>

                {/* Document body */}
                <div className="border border-black/[0.06] rounded-xl p-4 sm:p-5 bg-[#fefefe] font-serif space-y-4 max-h-[480px] overflow-y-auto">
                  <p className="text-center text-[14px] font-bold text-[#1d1d1f] font-sans tracking-wide">
                    สัญญาเช่าอาคารพาณิชย์
                  </p>
                  <p className="text-center text-[11px] text-[#6e6e73] font-sans">
                    เลขที่ L-2568/0234
                  </p>
                  <hr className="border-black/[0.06]" />

                  {contractClauses.map((clause) => (
                    <motion.div
                      key={clause.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className={`p-3 rounded-lg text-[12px] leading-relaxed text-[#1d1d1f]/80 ${
                        clause.highlight === "red"
                          ? "border-l-3 border-[#ff3b30] bg-[#ff3b30]/[0.03]"
                          : clause.highlight === "yellow"
                          ? "border-l-3 border-[#ff9500] bg-[#ff9500]/[0.03]"
                          : ""
                      }`}
                      style={{
                        borderLeftWidth: clause.highlight ? "3px" : undefined,
                        borderLeftColor:
                          clause.highlight === "red"
                            ? "#ff3b30"
                            : clause.highlight === "yellow"
                            ? "#ff9500"
                            : undefined,
                      }}
                    >
                      <p className="font-sans text-[11px] font-bold text-[#1d1d1f] mb-1">
                        {clause.number} — {clause.title}
                        {clause.highlight === "red" && (
                          <span className="ml-2 text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-[#ff3b30]/10 text-[#ff3b30]">
                            ข้อเสี่ยง
                          </span>
                        )}
                        {clause.highlight === "yellow" && (
                          <span className="ml-2 text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-[#ff9500]/10 text-[#ff9500]">
                            ควรระวัง
                          </span>
                        )}
                      </p>
                      <p>
                        {clause.highlight === "red" ? (
                          <HL color="red">{clause.text}</HL>
                        ) : clause.highlight === "yellow" ? (
                          <HL color="yellow">{clause.text}</HL>
                        ) : (
                          clause.text
                        )}
                      </p>
                    </motion.div>
                  ))}

                  <p className="text-center text-[11px] text-[#6e6e73] font-sans py-2">
                    ... ข้อ 16-23 (ไม่พบข้อเสี่ยงเพิ่มเติม) ...
                  </p>
                </div>
              </div>

              {/* RIGHT — AI Analysis Sidebar (40%) */}
              <div className="lg:w-[40%] p-5 sm:p-6 bg-[#fafafa]">
                {/* Risk Score Gauge */}
                <div className="text-center mb-6">
                  <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-3">
                    Risk Score
                  </p>
                  <CircularGauge
                    value={72}
                    max={100}
                    size={130}
                    strokeWidth={12}
                    color="#ff9500"
                    bgColor="#e8e8ed"
                    label="ความเสี่ยงปานกลาง-สูง"
                    sublabel="ควรแก้ไขก่อนลงนาม"
                  />
                </div>

                {/* Divider */}
                <hr className="border-black/[0.06] mb-5" />

                {/* Risks */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={13} className="text-[#ff3b30]" />
                    <span className="text-[12px] font-semibold text-[#ff3b30]">
                      ข้อเสี่ยง ({risks.length} รายการ)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {risks.map((risk, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white rounded-xl p-3 border border-[#ff3b30]/10"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-[#ff3b30]">
                            {risk.clause}
                          </span>
                          <span className="text-[10px] font-semibold text-[#1d1d1f]">
                            {risk.title}
                          </span>
                          <span className="ml-auto text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-[#ff3b30]/10 text-[#ff3b30]">
                            {risk.severity}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#6e6e73] leading-relaxed">
                          {risk.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Check size={13} className="text-[#2997ff]" />
                    <span className="text-[12px] font-semibold text-[#2997ff]">
                      ข้อเสนอแนะ ({recommendations.length} รายการ)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {recommendations.map((rec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white rounded-xl p-3 border border-[#2997ff]/10"
                      >
                        <p className="text-[11px] text-[#1d1d1f] mb-1">
                          {rec.text}
                        </p>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#5856d6]/8 text-[#5856d6] font-medium">
                          {rec.ref}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Legal references */}
                <div>
                  <p className="text-[11px] font-semibold text-[#6e6e73] mb-2">
                    มาตราอ้างอิง
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {legalRefs.map((ref) => (
                      <span
                        key={ref}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-[#5856d6]/8 text-[#5856d6] font-medium"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. SEARCH ANY LAW ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-2">
              Search Any Law
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              ค้นข้อกฎหมายด้วยภาษาธรรมชาติ AI หาให้ใน 2 วินาที
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div
              className={`flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-lg shadow-black/[0.04] border-2 transition-colors ${
                searchFocused
                  ? "border-[#2997ff]"
                  : "border-transparent"
              }`}
              onMouseEnter={() => setSearchFocused(true)}
              onMouseLeave={() => setSearchFocused(false)}
            >
              <Search
                size={20}
                className={`shrink-0 transition-colors ${
                  searchFocused ? "text-[#2997ff]" : "text-[#6e6e73]"
                }`}
              />
              <span className="text-[15px] text-[#1d1d1f]">
                ค่าปรับในสัญญาเช่า สูงเกินไปได้ไหม ศาลลดได้หรือเปล่า
              </span>
              <motion.div
                animate={searchFocused ? { scale: 1.05 } : { scale: 1 }}
                className="ml-auto shrink-0"
              >
                <div className="bg-[#2997ff] text-white text-[12px] font-medium px-4 py-2 rounded-full">
                  ค้นหา
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Search results */}
          <div className="space-y-3">
            {searchResults.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="apple-card p-5 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#5856d6]/8 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold text-[#5856d6] leading-tight text-center">
                      {result.section}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                        {result.section} — {result.title}
                      </h3>
                      <ChevronRight
                        size={14}
                        className="text-[#d2d2d7] group-hover:text-[#2997ff] transition-colors shrink-0 ml-auto"
                      />
                    </div>
                    <p className="text-[12px] text-[#6e6e73] leading-relaxed line-clamp-2">
                      {result.desc}
                    </p>
                    <div className="flex gap-1.5 mt-2">
                      {result.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] px-2 py-0.5 rounded-full bg-[#2997ff]/8 text-[#2997ff] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[11px] text-[#6e6e73] text-center mt-4">
            ค้นจากฐานข้อมูล พ.ร.บ. + ป.พ.พ. + คำพิพากษาศาลฎีกา | ค้นใน 2.1 วินาที
          </p>
        </div>
      </section>

      {/* ═══ 4. TIMELINE — Lawyer's Day with AI ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-2">
              1 วันของทนาย + AI
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              งานที่เคยใช้ทั้งวัน เสร็จก่อนบ่ายสอง
            </p>
          </motion.div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[52px] sm:left-[60px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2997ff] via-[#5856d6] to-[#ff9500]" />

            <div className="space-y-0">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 sm:gap-5 relative pb-8 last:pb-0"
                >
                  {/* Time label */}
                  <div className="w-[40px] sm:w-[48px] shrink-0 text-right pt-3">
                    <span className="text-[14px] sm:text-[16px] font-bold text-[#1d1d1f] font-mono">
                      {item.time}
                    </span>
                  </div>

                  {/* Node */}
                  <div
                    className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center mt-3 z-10 ring-4 ring-white"
                    style={{ background: item.color }}
                  >
                    <div className="text-white scale-75">{item.icon}</div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 apple-card p-4 sm:p-5">
                    <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-[#6e6e73] mb-3 leading-relaxed">
                      {item.detail}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white"
                        style={{ background: item.color }}
                      >
                        {item.aiTime}
                      </span>
                      <span className="text-[10px] text-[#6e6e73] line-through">
                        {item.oldTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 ml-[68px] sm:ml-[80px] apple-card p-4 bg-[#f5f5f7]"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <Zap size={16} className="text-[#ff9500]" />
                <span className="text-[13px] font-semibold text-[#1d1d1f]">
                  ประหยัดเวลารวม: 6+ ชั่วโมง/วัน
                </span>
                <span className="text-[11px] text-[#6e6e73]">
                  = 120+ ชั่วโมง/เดือน
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 5. PDPA COMPLIANCE METER ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-2">
              PDPA Compliance Meter
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              AI ตรวจสอบให้ครบทุกหมวด รู้ทันทีว่าต้องแก้ตรงไหน
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-6 sm:p-8 shadow-lg shadow-black/[0.04]"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Big central gauge */}
              <div className="shrink-0">
                <CircularGauge
                  value={pdpaOverall}
                  max={100}
                  size={180}
                  strokeWidth={16}
                  color={
                    pdpaOverall >= 80
                      ? "#34c759"
                      : pdpaOverall >= 60
                      ? "#ff9500"
                      : "#ff3b30"
                  }
                  bgColor="#e8e8ed"
                  label="Overall Compliance"
                  sublabel="ต้องปรับปรุง 3 หมวด"
                />
              </div>

              {/* Category breakdown */}
              <div className="flex-1 w-full space-y-3">
                {pdpaCategories.map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] text-[#1d1d1f] font-medium">
                        {cat.label}
                      </span>
                      <span
                        className="text-[11px] font-bold"
                        style={{ color: cat.color }}
                      >
                        {cat.score}%
                      </span>
                    </div>
                    <div className="w-full bg-[#e8e8ed] rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: cat.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${cat.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom actions */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#34c759]" />
                <span className="text-[11px] text-[#6e6e73]">ผ่าน (80%+)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff9500]" />
                <span className="text-[11px] text-[#6e6e73]">ควรปรับปรุง (50-79%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff3b30]" />
                <span className="text-[11px] text-[#6e6e73]">ไม่ผ่าน (&lt;50%)</span>
              </div>
              <span className="text-[10px] text-[#6e6e73] ml-auto">
                โทษปรับสูงสุด: 5 ล้านบาท (ม.90 PDPA)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. SINGLE PROMINENT PRICING + CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-8 sm:p-10 text-center shadow-lg shadow-black/[0.05] ring-2 ring-[#5856d6]/15"
          >
            <div className="inline-flex items-center gap-2 bg-[#5856d6]/8 rounded-full px-4 py-1.5 mb-5">
              <Scale size={13} className="text-[#5856d6]" />
              <span className="text-[11px] font-semibold text-[#5856d6]">
                Professional — แนะนำ
              </span>
            </div>

            <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-2">
              เริ่มใช้ AI สำหรับงานกฎหมาย
            </h2>
            <p className="text-[15px] text-[#6e6e73] mb-6">
              วิเคราะห์สัญญา + ค้นกฎหมาย + ร่างเอกสาร + ตรวจ PDPA
            </p>

            <div className="mb-6">
              <span className="text-[48px] sm:text-[56px] font-bold text-[#5856d6]">
                ฿59,900
              </span>
              <p className="text-[13px] text-[#6e6e73] mt-1">
                Setup fee ครั้งเดียว + API ตามใช้จริง ~฿1,500-5,000/เดือน
              </p>
              <p className="text-[11px] text-[#8e8e93] mt-1">
                ใช้ Mac Mini M4 Pro แทน VPS ได้ — ข้อมูลอยู่ในสำนักงาน ไม่มีค่า hosting รายเดือน
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 text-left mb-8">
              {[
                "วิเคราะห์สัญญาไม่จำกัด",
                "Legal RAG หลายฐานข้อมูล",
                "ร่างเอกสารทุก template",
                "PDPA compliance เต็มรูปแบบ",
                "Dashboard + analytics",
                "Training ทีม 2 ชม.",
                "Support 60 วัน",
                "คืนทุนใน 2 เดือน",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check
                    size={13}
                    className="text-[#5856d6] shrink-0 mt-0.5"
                  />
                  <span className="text-[12px] text-[#6e6e73]">{f}</span>
                </div>
              ))}
            </div>

            {/* ROI line */}
            <div className="flex items-center justify-center gap-4 flex-wrap mb-8 p-4 rounded-xl bg-[#f5f5f7]">
              <div className="text-center">
                <p className="text-[18px] font-bold text-[#ff3b30] line-through">
                  ฿25,000
                </p>
                <p className="text-[10px] text-[#6e6e73]">จ้างทนายจูเนียร์/เดือน</p>
              </div>
              <ArrowRight size={16} className="text-[#6e6e73]" />
              <div className="text-center">
                <p className="text-[18px] font-bold text-[#34c759]">฿3,000</p>
                <p className="text-[10px] text-[#6e6e73]">AI ค่าใช้จ่าย/เดือน</p>
              </div>
              <ArrowRight size={16} className="text-[#6e6e73]" />
              <div className="text-center">
                <p className="text-[18px] font-bold text-[#2997ff]">฿264,000</p>
                <p className="text-[10px] text-[#6e6e73]">ประหยัด/ปี</p>
              </div>
            </div>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#5856d6] text-white text-[15px] font-medium px-8 py-3.5 rounded-full hover:bg-[#4845b4] transition-colors"
            >
              ปรึกษาฟรี — ออกแบบระบบให้
              <ArrowRight size={16} />
            </a>
            <p className="text-[11px] text-[#6e6e73] mt-3">
              ไม่มีค่าใช้จ่ายจนกว่าจะตกลง | Demo ให้ดูก่อนตัดสินใจ
            </p>
            <p className="text-[12px] text-[#6e6e73] mt-4">
              Starter ฿29,900 · <span className="font-semibold text-[#5856d6]">Professional ฿59,900</span> · Enterprise ฿99,900
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
