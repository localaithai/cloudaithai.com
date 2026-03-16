"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  HeartPulse,
  Smartphone,
  Building2,
  Pill,
  ClipboardList,
  BarChart3,
  Search,
  AlertTriangle,
  Clock,
  Users,
  Check,
  ChevronRight,
  Bell,
  ArrowRight,
  Activity,
  Stethoscope,
  Calendar,
  Shield,
} from "lucide-react";

/* ─── HEALTHCARE PAGE — "Patient Journey" Concept ─── */

const GREEN = "#34c759";
const GREEN_BG = "#34c75910";

/* ═══ JOURNEY STEP MOCKUPS ═══ */

function LineChatMockup() {
  return (
    <div className="w-full rounded-xl bg-white shadow-sm border border-black/[0.04] overflow-hidden">
      <div className="bg-[#06c755] px-3 py-2 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-white/30" />
        <span className="text-[10px] text-white font-medium">คลินิกสุขภาพดี</span>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="flex justify-end">
          <div className="bg-[#06c755] text-white text-[9px] px-2 py-1 rounded-xl rounded-br-sm max-w-[80%]">
            อยากนัดหมอวันเสาร์ค่ะ
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-[#f0f0f0] text-[#1d1d1f] text-[9px] px-2 py-1.5 rounded-xl rounded-bl-sm max-w-[85%]">
            <p className="font-medium">ว่างค่ะ:</p>
            <div className="flex gap-0.5 mt-1">
              {["09:00", "10:30", "14:00"].map((t) => (
                <span
                  key={t}
                  className="text-[7px] px-1.5 py-0.5 rounded-full bg-[#34c759]/15 text-[#34c759] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#06c755] text-white text-[9px] px-2 py-1 rounded-xl rounded-br-sm">
            10:30 ค่ะ
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckInMockup() {
  return (
    <div className="w-full rounded-xl bg-white shadow-sm border border-black/[0.04] overflow-hidden">
      <div className="bg-[#f5f5f7] px-3 py-2 text-center">
        <span className="text-[10px] font-semibold text-[#1d1d1f]">
          Self Check-in
        </span>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-[#34c759]/5 border border-[#34c759]/15">
          <Check size={12} className="text-[#34c759] shrink-0" />
          <span className="text-[9px] text-[#34c759] font-medium">
            ยืนยันตัวตนสำเร็จ
          </span>
        </div>
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1d1d1f]">A-07</p>
          <p className="text-[8px] text-[#6e6e73]">หมายเลขคิวของคุณ</p>
        </div>
        <div className="text-center p-1.5 rounded-lg bg-[#f5f5f7]">
          <p className="text-[8px] text-[#6e6e73]">เวลานัด</p>
          <p className="text-[11px] font-semibold text-[#1d1d1f]">10:30 น.</p>
          <p className="text-[8px] text-[#34c759]">อีก 2 คิว</p>
        </div>
      </div>
    </div>
  );
}

function DrugInfoMockup() {
  return (
    <div className="w-full rounded-xl bg-white shadow-sm border border-black/[0.04] overflow-hidden">
      <div className="bg-[#ff9500]/8 px-3 py-2 flex items-center gap-1.5">
        <Pill size={10} className="text-[#ff9500]" />
        <span className="text-[10px] font-semibold text-[#ff9500]">
          Drug Check
        </span>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold text-[#1d1d1f]">
            Metformin 500mg
          </span>
          <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759] font-medium">
            OK
          </span>
        </div>
        <div className="p-1.5 rounded-lg bg-[#ff9500]/5 border border-[#ff9500]/10">
          <p className="text-[8px] text-[#ff9500] font-medium">
            Interaction:
          </p>
          <p className="text-[7px] text-[#6e6e73]">
            Warfarin - monitor INR
          </p>
        </div>
        <div className="text-[8px] text-[#6e6e73]">
          <span className="text-[#1d1d1f] font-medium">Dose:</span> 500mg
          bid pc
        </div>
      </div>
    </div>
  );
}

function PrescriptionMockup() {
  return (
    <div className="w-full rounded-xl bg-white shadow-sm border border-black/[0.04] overflow-hidden">
      <div className="bg-[#5856d6]/8 px-3 py-2 flex items-center gap-1.5">
        <ClipboardList size={10} className="text-[#5856d6]" />
        <span className="text-[10px] font-semibold text-[#5856d6]">
          AI Prescription
        </span>
      </div>
      <div className="p-2.5 space-y-1">
        {[
          { drug: "Metformin 500mg", sig: "1x2 pc" },
          { drug: "Amlodipine 5mg", sig: "1x1 pc เช้า" },
          { drug: "Simvastatin 20mg", sig: "1x1 hs" },
        ].map((rx) => (
          <div
            key={rx.drug}
            className="flex items-center justify-between p-1.5 rounded bg-[#fafafa]"
          >
            <span className="text-[8px] text-[#1d1d1f] font-medium">
              {rx.drug}
            </span>
            <span className="text-[7px] text-[#5856d6]">{rx.sig}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 pt-1 text-[7px] text-[#34c759]">
          <Check size={8} />
          <span>AI ตรวจสอบแล้ว ไม่มี interaction</span>
        </div>
      </div>
    </div>
  );
}

function FollowUpMockup() {
  return (
    <div className="w-full rounded-xl bg-white shadow-sm border border-black/[0.04] overflow-hidden">
      <div className="bg-[#2997ff]/8 px-3 py-2 flex items-center gap-1.5">
        <Bell size={10} className="text-[#2997ff]" />
        <span className="text-[10px] font-semibold text-[#2997ff]">
          Auto Reminder
        </span>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="p-2 rounded-lg bg-[#f5f5f7]">
          <p className="text-[8px] text-[#6e6e73]">LINE Notification</p>
          <p className="text-[9px] text-[#1d1d1f] font-medium mt-0.5">
            คุณสมศรีคะ นัดพบแพทย์
          </p>
          <p className="text-[9px] text-[#1d1d1f]">
            วันเสาร์ 28 มี.ค. 10:30 น.
          </p>
          <p className="text-[8px] text-[#2997ff] mt-1">
            ตอบ 1 = ยืนยัน | 2 = เลื่อนนัด
          </p>
        </div>
        <div className="flex items-center gap-1 text-[7px] text-[#34c759]">
          <Check size={8} />
          <span>ส่งอัตโนมัติ 1 วันก่อนนัด</span>
        </div>
      </div>
    </div>
  );
}

/* ═══ JOURNEY STEPS DATA ═══ */
const journeySteps = [
  {
    num: 1,
    icon: <Smartphone size={18} />,
    emoji: "",
    title: "นัดหมายผ่าน LINE",
    desc: "ผู้ป่วยจองนัดได้ 24/7 ผ่าน LINE chatbot AI จัดคิวอัตโนมัติ",
    color: "#06c755",
    mockup: <LineChatMockup />,
  },
  {
    num: 2,
    icon: <Building2 size={18} />,
    emoji: "",
    title: "มาถึงคลินิก",
    desc: "Check-in ด้วย QR code รับคิวอัตโนมัติ ไม่ต้องรอกรอกฟอร์ม",
    color: GREEN,
    mockup: <CheckInMockup />,
  },
  {
    num: 3,
    icon: <Pill size={18} />,
    emoji: "",
    title: "พบแพทย์",
    desc: "AI ค้นข้อมูลยา drug interaction ให้หมอทันทีขณะตรวจ",
    color: "#ff9500",
    mockup: <DrugInfoMockup />,
  },
  {
    num: 4,
    icon: <ClipboardList size={18} />,
    emoji: "",
    title: "รับใบสั่งยา",
    desc: "AI สร้างใบสั่งยา ตรวจสอบ interaction อัตโนมัติก่อนจ่ายยา",
    color: "#5856d6",
    mockup: <PrescriptionMockup />,
  },
  {
    num: 5,
    icon: <BarChart3 size={18} />,
    emoji: "",
    title: "Follow-up อัตโนมัติ",
    desc: "AI แจ้งเตือนนัดถัดไปผ่าน LINE ผู้ป่วยไม่หลุดจากระบบ",
    color: "#2997ff",
    mockup: <FollowUpMockup />,
  },
];

/* ═══ DRUG DATABASE ═══ */
const drugDatabase: Record<
  string,
  {
    name: string;
    generic: string;
    category: string;
    dosages: { form: string; strength: string; frequency: string }[];
    interactions: { drug: string; severity: string; note: string }[];
    contraindications: string[];
    sideEffects: string[];
    note: string;
  }
> = {
  metformin: {
    name: "Metformin",
    generic: "Metformin HCl",
    category: "Biguanide (Antidiabetic)",
    dosages: [
      {
        form: "Tablet",
        strength: "500 mg",
        frequency: "1-2 เม็ด x 2-3 มื้อ หลังอาหาร",
      },
      {
        form: "Tablet",
        strength: "850 mg",
        frequency: "1 เม็ด x 2-3 มื้อ หลังอาหาร",
      },
      {
        form: "Tablet XR",
        strength: "500-1000 mg",
        frequency: "1-2 เม็ด x 1 ครั้ง หลังอาหารเย็น",
      },
    ],
    interactions: [
      {
        drug: "Warfarin",
        severity: "Moderate",
        note: "เพิ่มฤทธิ์ anticoagulant ต้อง monitor INR",
      },
      {
        drug: "Alcohol",
        severity: "Major",
        note: "เพิ่มความเสี่ยง lactic acidosis อย่างมาก",
      },
      {
        drug: "Iodinated contrast",
        severity: "Major",
        note: "หยุดยา 48 ชม. ก่อน-หลังฉีดสี",
      },
      {
        drug: "Cimetidine",
        severity: "Moderate",
        note: "เพิ่มระดับ metformin ในเลือด",
      },
    ],
    contraindications: [
      "eGFR < 30 mL/min (ห้ามใช้เด็ดขาด)",
      "Hepatic impairment รุนแรง",
      "Heart failure NYHA class IV",
      "Metabolic acidosis (incl. DKA)",
      "Severe dehydration / shock",
    ],
    sideEffects: [
      "คลื่นไส้ อาเจียน ท้องเสีย (พบบ่อยช่วงเริ่มยา)",
      "ท้องอืด แน่นท้อง",
      "Metallic taste ในปาก",
      "Vitamin B12 deficiency (ใช้ยาระยะยาว)",
      "Lactic acidosis (พบน้อยมาก แต่รุนแรง)",
    ],
    note: "First-line drug สำหรับ Type 2 DM ตาม ADA/WHO guidelines เริ่มขนาดต่ำ ค่อยๆ เพิ่ม เพื่อลด GI side effects",
  },
};

/* ═══ MAIN COMPONENT ═══ */
export default function HealthcareSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [drugQuery, setDrugQuery] = useState("");
  const [showDrugResult, setShowDrugResult] = useState(false);
  const journeyRef = useRef<HTMLDivElement>(null);
  const journeyInView = useInView(journeyRef, { once: true, margin: "-50px" });
  const dashRef = useRef<HTMLDivElement>(null);
  const dashInView = useInView(dashRef, { once: true, margin: "-50px" });

  const handleDrugSearch = () => {
    if (drugQuery.toLowerCase().includes("metformin") || drugQuery.length > 0) {
      setShowDrugResult(true);
    }
  };

  const activeDrug = drugDatabase["metformin"];

  return (
    <div>
      {/* ═══════════════════════════════════════════════
          1. COMPACT HERO — 3 lines, green accent
      ═══════════════════════════════════════════════ */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#34c759]/8 rounded-full px-4 py-1.5 mb-5">
              <HeartPulse size={14} className="text-[#34c759]" />
              <span className="text-[12px] font-medium text-[#34c759]">
                Healthcare AI Solution
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI ที่เข้าใจ
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #34c759, #30d158, #2997ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ทุกขั้นตอนในคลินิก
              </span>
            </h1>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              ตั้งแต่นัดหมาย ตรวจรักษา จ่ายยา จนถึง follow-up --- AI ดูแลทุก
              journey ของผู้ป่วย
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. HORIZONTAL PATIENT JOURNEY — visual timeline
      ═══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#f5f5f7]" ref={journeyRef}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              Patient Journey
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              เส้นทางผู้ป่วยตั้งแต่เริ่มต้นจนจบ ทุกขั้นตอนมี AI ช่วย
            </p>
          </motion.div>

          {/* Timeline connector + steps */}
          <div className="relative">
            {/* Horizontal connector line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#e5e5ea] z-0" />
            <motion.div
              className="hidden lg:block absolute top-[28px] left-[10%] h-[2px] z-[1]"
              style={{ background: GREEN }}
              initial={{ width: "0%" }}
              animate={
                journeyInView
                  ? { width: `${(activeStep / 4) * 80}%` }
                  : { width: "0%" }
              }
              transition={{ duration: 0.5 }}
            />

            {/* Steps row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {journeySteps.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = i < activeStep;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 25 }}
                    animate={journeyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  >
                    {/* Step indicator */}
                    <button
                      onClick={() => setActiveStep(i)}
                      className="w-full text-left group"
                    >
                      <div className="flex flex-col items-center mb-3">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 transition-all duration-300 cursor-pointer"
                          style={{
                            background: isActive
                              ? step.color
                              : isPast
                              ? step.color + "20"
                              : "#e5e5ea30",
                            color: isActive
                              ? "#fff"
                              : isPast
                              ? step.color
                              : "#6e6e73",
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {step.icon}
                        </motion.div>
                        <h3
                          className="text-[13px] font-semibold text-center transition-colors"
                          style={{
                            color: isActive ? step.color : "#1d1d1f",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[10px] text-[#6e6e73] text-center mt-0.5 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    </button>

                    {/* Mockup card — shows on active or always on mobile */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.97 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2"
                        >
                          {step.mockup}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Step navigation arrows */}
            <div className="flex justify-center gap-3 mt-8">
              {journeySteps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="transition-all duration-200"
                >
                  <div
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: activeStep === i ? 24 : 8,
                      height: 8,
                      background:
                        activeStep === i ? step.color : "#d2d2d7",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. DRUG INTELLIGENCE — search experience
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-[#ff9500]/8 rounded-full px-4 py-1.5 mb-4">
              <Pill size={14} className="text-[#ff9500]" />
              <span className="text-[12px] font-medium text-[#ff9500]">
                Drug Intelligence
              </span>
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              ค้นข้อมูลยาทันที
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              AI ดึงข้อมูลยาจาก database มาให้ใน 3 วินาที แทนเปิดหนังสือ 8
              นาที
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="apple-card p-2 flex items-center gap-3 shadow-lg shadow-black/[0.04]">
              <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center shrink-0">
                <Search size={18} className="text-[#6e6e73]" />
              </div>
              <input
                type="text"
                placeholder="ค้นข้อมูลยา เช่น Metformin, Amlodipine..."
                value={drugQuery}
                onChange={(e) => {
                  setDrugQuery(e.target.value);
                  setShowDrugResult(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleDrugSearch()}
                className="flex-1 text-[15px] text-[#1d1d1f] placeholder:text-[#d2d2d7] bg-transparent outline-none"
              />
              <button
                onClick={handleDrugSearch}
                className="px-5 py-2.5 rounded-xl text-[13px] font-medium text-white shrink-0 transition-transform active:scale-95"
                style={{ background: GREEN }}
              >
                ค้นหา
              </button>
            </div>
            <div className="flex items-center gap-2 mt-3 px-2">
              <span className="text-[11px] text-[#6e6e73]">ลองค้นหา:</span>
              {["Metformin", "Warfarin", "Amlodipine"].map((drug) => (
                <button
                  key={drug}
                  onClick={() => {
                    setDrugQuery(drug);
                    setShowDrugResult(true);
                  }}
                  className="text-[11px] px-3 py-1 rounded-full bg-[#f5f5f7] text-[#2997ff] font-medium hover:bg-[#e8e8ed] transition-colors"
                >
                  {drug}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Drug result card */}
          <AnimatePresence>
            {showDrugResult && activeDrug && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="apple-card p-0 overflow-hidden shadow-lg shadow-black/[0.06]"
              >
                {/* Drug header */}
                <div className="px-6 py-4 bg-gradient-to-r from-[#34c759]/5 to-[#2997ff]/5 border-b border-black/[0.04]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[20px] font-semibold text-[#1d1d1f]">
                        {activeDrug.name}
                      </h3>
                      <p className="text-[12px] text-[#6e6e73]">
                        {activeDrug.generic} --- {activeDrug.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-3 py-1 rounded-full bg-[#34c759]/10 text-[#34c759] font-semibold">
                        First-line DM
                      </span>
                      <span className="text-[10px] px-3 py-1 rounded-full bg-[#2997ff]/10 text-[#2997ff] font-semibold">
                        บัญชียา ED
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  {/* Dosage table */}
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#34c759]/10 flex items-center justify-center">
                        <Activity size={11} className="text-[#34c759]" />
                      </div>
                      Dosage & Administration
                    </h4>
                    <div className="rounded-xl border border-black/[0.04] overflow-hidden">
                      <div className="grid grid-cols-3 bg-[#f5f5f7] px-4 py-2">
                        <span className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">
                          รูปแบบ
                        </span>
                        <span className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">
                          ขนาด
                        </span>
                        <span className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">
                          วิธีรับประทาน
                        </span>
                      </div>
                      {activeDrug.dosages.map((d, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-3 px-4 py-2.5 border-t border-black/[0.04]"
                        >
                          <span className="text-[12px] text-[#1d1d1f]">
                            {d.form}
                          </span>
                          <span className="text-[12px] text-[#1d1d1f] font-medium">
                            {d.strength}
                          </span>
                          <span className="text-[11px] text-[#6e6e73]">
                            {d.frequency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactions */}
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-[#ff9500]/10 flex items-center justify-center">
                        <AlertTriangle size={11} className="text-[#ff9500]" />
                      </div>
                      Drug Interactions
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {activeDrug.interactions.map((ix) => (
                        <div
                          key={ix.drug}
                          className="p-3 rounded-xl border border-black/[0.04] bg-[#fafafa]"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[12px] font-semibold text-[#1d1d1f]">
                              + {ix.drug}
                            </span>
                            <span
                              className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                              style={{
                                background:
                                  ix.severity === "Major"
                                    ? "#ff3b3015"
                                    : "#ff950015",
                                color:
                                  ix.severity === "Major"
                                    ? "#ff3b30"
                                    : "#ff9500",
                              }}
                            >
                              {ix.severity}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#6e6e73]">
                            {ix.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contraindications + Side effects */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-3 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#ff3b30]/10 flex items-center justify-center">
                          <Shield size={11} className="text-[#ff3b30]" />
                        </div>
                        Contraindications
                      </h4>
                      <div className="space-y-1.5">
                        {activeDrug.contraindications.map((c) => (
                          <div
                            key={c}
                            className="flex items-start gap-2 p-2 rounded-lg bg-[#ff3b30]/3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] mt-1.5 shrink-0" />
                            <span className="text-[11px] text-[#1d1d1f]">
                              {c}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-3 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md bg-[#5856d6]/10 flex items-center justify-center">
                          <ClipboardList
                            size={11}
                            className="text-[#5856d6]"
                          />
                        </div>
                        Side Effects
                      </h4>
                      <div className="space-y-1.5">
                        {activeDrug.sideEffects.map((s) => (
                          <div
                            key={s}
                            className="flex items-start gap-2 p-2 rounded-lg bg-[#f5f5f7]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6e6e73] mt-1.5 shrink-0" />
                            <span className="text-[11px] text-[#6e6e73]">
                              {s}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clinical note */}
                  <div className="p-4 rounded-xl bg-[#34c759]/5 border border-[#34c759]/10">
                    <div className="flex items-start gap-2">
                      <Stethoscope
                        size={14}
                        className="text-[#34c759] mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="text-[12px] font-semibold text-[#34c759] mb-0.5">
                          Clinical Note
                        </p>
                        <p className="text-[11px] text-[#1d1d1f]">
                          {activeDrug.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-[#6e6e73]">
                    <Clock size={10} />
                    <span>
                      AI ค้นข้อมูลจาก MIMS Thailand + DrugBank ใน 2.3 วินาที
                      (แทนเปิดหนังสือ 8 นาที)
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. TODAY AT THE CLINIC — live dashboard view
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-[#f5f5f7]" ref={dashRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={dashInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              Today at the Clinic
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              Dashboard real-time ดูทุกอย่างในจอเดียว
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={dashInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.06]"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-black/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[12px] text-[#6e6e73] font-medium ml-2">
                Clinic Dashboard --- วันจันทร์ 16 มี.ค. 2026
              </span>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                <span className="text-[10px] text-[#34c759] font-medium">
                  LIVE
                </span>
              </div>
            </div>

            {/* Drug interaction alert banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={dashInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mx-4 mt-4 p-3 rounded-xl bg-[#ff3b30]/5 border border-[#ff3b30]/15 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#ff3b30]/10 flex items-center justify-center shrink-0">
                <AlertTriangle size={16} className="text-[#ff3b30]" />
              </div>
              <div className="flex-1">
                <p className="text-[12px] font-semibold text-[#ff3b30]">
                  Drug Interaction Alert
                </p>
                <p className="text-[11px] text-[#6e6e73]">
                  คุณสมศรี (A-07): Warfarin + Metformin --- ต้อง monitor INR
                  ใกล้ชิด
                </p>
              </div>
              <button className="text-[10px] px-3 py-1.5 rounded-lg bg-[#ff3b30] text-white font-medium shrink-0">
                ดูรายละเอียด
              </button>
            </motion.div>

            <div className="p-5">
              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  {
                    label: "ผู้ป่วยรอตรวจ",
                    value: "8",
                    sub: "คน",
                    color: "#2997ff",
                    icon: <Users size={14} />,
                  },
                  {
                    label: "เวลารอเฉลี่ย",
                    value: "12",
                    sub: "นาที",
                    color: GREEN,
                    icon: <Clock size={14} />,
                  },
                  {
                    label: "ตรวจแล้ววันนี้",
                    value: "24",
                    sub: "คน",
                    color: "#5856d6",
                    icon: <Check size={14} />,
                  },
                  {
                    label: "นัดหมายทั้งหมด",
                    value: "36",
                    sub: "คน",
                    color: "#ff9500",
                    icon: <Calendar size={14} />,
                  },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={
                      dashInView ? { opacity: 1, scale: 1 } : {}
                    }
                    transition={{ delay: 0.4 }}
                    className="p-3 rounded-xl bg-[#f5f5f7]"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span style={{ color: stat.color }}>{stat.icon}</span>
                      <span className="text-[10px] text-[#6e6e73]">
                        {stat.label}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[24px] font-semibold"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-[#6e6e73]">
                        {stat.sub}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Two-column: Queue + Doctor Schedule */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Real-time queue */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[13px] font-semibold text-[#1d1d1f]">
                      คิวผู้ป่วย (Real-time)
                    </h3>
                    <span className="text-[10px] text-[#6e6e73]">
                      อัพเดตอัตโนมัติ
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      {
                        queue: "A-05",
                        name: "คุณวิชัย",
                        status: "กำลังตรวจ",
                        statusColor: "#34c759",
                        doctor: "นพ.สมชาย",
                        room: "ห้อง 3",
                      },
                      {
                        queue: "A-06",
                        name: "คุณนภา",
                        status: "รอเรียก",
                        statusColor: "#ff9500",
                        doctor: "พญ.มาลี",
                        room: "ห้อง 2",
                      },
                      {
                        queue: "A-07",
                        name: "คุณสมศรี",
                        status: "รอเรียก",
                        statusColor: "#ff9500",
                        doctor: "นพ.สมชาย",
                        room: "ห้อง 3",
                      },
                      {
                        queue: "A-08",
                        name: "คุณประเสริฐ",
                        status: "รอเรียก",
                        statusColor: "#ff9500",
                        doctor: "นพ.ประวิทย์",
                        room: "ห้อง 5",
                      },
                      {
                        queue: "B-01",
                        name: "คุณแก้ว",
                        status: "Check-in",
                        statusColor: "#2997ff",
                        doctor: "พญ.มาลี",
                        room: "ห้อง 2",
                      },
                      {
                        queue: "B-02",
                        name: "คุณมาลี",
                        status: "นัด 14:00",
                        statusColor: "#6e6e73",
                        doctor: "นพ.สมชาย",
                        room: "ห้อง 3",
                      },
                      {
                        queue: "B-03",
                        name: "คุณพงษ์",
                        status: "นัด 14:30",
                        statusColor: "#6e6e73",
                        doctor: "นพ.ประวิทย์",
                        room: "ห้อง 5",
                      },
                      {
                        queue: "B-04",
                        name: "คุณสุดา",
                        status: "นัด 15:00",
                        statusColor: "#6e6e73",
                        doctor: "พญ.มาลี",
                        room: "ห้อง 2",
                      },
                    ].map((p, i) => (
                      <motion.div
                        key={p.queue}
                        initial={{ opacity: 0, x: -10 }}
                        animate={
                          dashInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa] hover:bg-[#f0f0f0] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md"
                            style={{
                              background: p.statusColor + "12",
                              color: p.statusColor,
                            }}
                          >
                            {p.queue}
                          </span>
                          <div>
                            <p className="text-[11px] font-medium text-[#1d1d1f]">
                              {p.name}
                            </p>
                            <p className="text-[9px] text-[#6e6e73]">
                              {p.doctor} | {p.room}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[9px] font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: p.statusColor + "12",
                            color: p.statusColor,
                          }}
                        >
                          {p.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Doctor schedule grid */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[13px] font-semibold text-[#1d1d1f]">
                      ตารางแพทย์วันนี้
                    </h3>
                    <span className="text-[10px] text-[#6e6e73]">
                      3 แพทย์ออกตรวจ
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        name: "นพ.สมชาย ใจดี",
                        dept: "อายุรกรรม",
                        room: "ห้อง 3",
                        color: "#2997ff",
                        slots: [
                          { time: "09:00-12:00", status: "done", count: 10 },
                          { time: "13:00-16:00", status: "active", count: 6 },
                        ],
                        totalToday: 16,
                        seen: 10,
                      },
                      {
                        name: "พญ.มาลี สว่าง",
                        dept: "ผิวหนัง",
                        room: "ห้อง 2",
                        color: "#af52de",
                        slots: [
                          { time: "09:00-12:00", status: "done", count: 8 },
                          { time: "13:00-16:00", status: "active", count: 4 },
                        ],
                        totalToday: 12,
                        seen: 8,
                      },
                      {
                        name: "นพ.ประวิทย์ เก่ง",
                        dept: "กระดูกและข้อ",
                        room: "ห้อง 5",
                        color: "#ff9500",
                        slots: [
                          { time: "10:00-12:00", status: "done", count: 4 },
                          { time: "13:00-17:00", status: "active", count: 4 },
                        ],
                        totalToday: 8,
                        seen: 4,
                      },
                    ].map((doc) => (
                      <motion.div
                        key={doc.name}
                        initial={{ opacity: 0, x: 10 }}
                        animate={
                          dashInView ? { opacity: 1, x: 0 } : {}
                        }
                        transition={{ delay: 0.5 }}
                        className="p-3 rounded-xl bg-[#fafafa]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{
                                background: doc.color + "15",
                                color: doc.color,
                              }}
                            >
                              <Stethoscope size={14} />
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold text-[#1d1d1f]">
                                {doc.name}
                              </p>
                              <p className="text-[9px] text-[#6e6e73]">
                                {doc.dept} | {doc.room}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p
                              className="text-[14px] font-bold"
                              style={{ color: doc.color }}
                            >
                              {doc.seen}/{doc.totalToday}
                            </p>
                            <p className="text-[8px] text-[#6e6e73]">
                              ตรวจแล้ว
                            </p>
                          </div>
                        </div>
                        {/* Time slots */}
                        <div className="flex gap-1.5">
                          {doc.slots.map((slot) => (
                            <div
                              key={slot.time}
                              className="flex-1 p-1.5 rounded-lg text-center"
                              style={{
                                background:
                                  slot.status === "done"
                                    ? "#34c75910"
                                    : doc.color + "10",
                              }}
                            >
                              <p className="text-[8px] text-[#6e6e73]">
                                {slot.time}
                              </p>
                              <p
                                className="text-[10px] font-semibold"
                                style={{
                                  color:
                                    slot.status === "done"
                                      ? "#34c759"
                                      : doc.color,
                                }}
                              >
                                {slot.count} คน
                              </p>
                              {slot.status === "done" && (
                                <p className="text-[7px] text-[#34c759]">
                                  เสร็จแล้ว
                                </p>
                              )}
                              {slot.status === "active" && (
                                <p
                                  className="text-[7px]"
                                  style={{ color: doc.color }}
                                >
                                  กำลังตรวจ
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CLOUD AI RISKS ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl border border-[#ff9500]/20 bg-[#ff9500]/[0.03] p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle size={18} className="text-[#ff9500]" />
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">ข้อควรรู้เกี่ยวกับ Cloud AI</h3>
              </div>
              <div className="space-y-3">
                {[
                  { title: "ข้อมูลผู้ป่วยถูกส่งไป Cloud", desc: "ข้อมูลสุขภาพ ประวัติการรักษา และข้อมูลส่วนบุคคลของผู้ป่วยถูกส่งผ่าน API ไปยัง server ต่างประเทศ — เสี่ยงขัด PDPA และ พ.ร.บ.สถานพยาบาล" },
                  { title: "AI ไม่ใช่แพทย์", desc: "ผลวิเคราะห์จาก AI เป็นเพียงข้อมูลประกอบ ห้ามใช้แทนการวินิจฉัยโรค — ต้องมีแพทย์ตรวจสอบเสมอ" },
                  { title: "ความเสี่ยงถ้าระบบล่ม", desc: "ถ้า Cloud AI หรืออินเทอร์เน็ตขัดข้อง ระบบนัดหมาย แจ้งเตือน และสรุปอาการจะหยุดทำงาน — ต้องมีระบบ manual รองรับ" },
                  { title: "มาตรฐาน HA/JCI", desc: "การใช้ AI ในสถานพยาบาลอาจต้องผ่านการประเมินตามมาตรฐาน HA — ควรปรึกษาก่อนใช้งานจริง" },
                ].map((risk) => (
                  <div key={risk.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff9500] mt-2 shrink-0" />
                    <div>
                      <p className="text-[13px] font-medium text-[#1d1d1f]">{risk.title}</p>
                      <p className="text-[12px] text-[#6e6e73] leading-relaxed">{risk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#8e8e93] mt-4 pt-3 border-t border-[#ff9500]/10">
                เราช่วยประเมินความเสี่ยงและออกแบบ guardrails ให้ — ปรึกษาฟรีก่อนตัดสินใจ
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. PRICING — single prominent card, green accent
      ═══════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              เริ่มต้นใช้ AI ในคลินิก
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              Setup ครั้งเดียว ใช้งานได้ตลอด ค่า API ตามใช้จริง
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="apple-card p-0 overflow-hidden ring-2 ring-[#34c759]/20 shadow-xl shadow-[#34c759]/[0.06]"
          >
            {/* Header */}
            <div className="px-8 py-6 bg-gradient-to-r from-[#34c759]/5 to-[#2997ff]/5 border-b border-black/[0.04] text-center">
              <span className="text-[11px] font-semibold px-4 py-1 rounded-full bg-[#34c759] text-white">
                Professional — แนะนำ
              </span>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-[48px] font-semibold text-[#34c759]">
                  ฿59,900
                </span>
                <span className="text-[14px] text-[#6e6e73]">
                  setup fee ครั้งเดียว
                </span>
              </div>
              <p className="text-[13px] text-[#6e6e73] mt-1">
                + ฿1,500-5,000/เดือน (ค่า API ตามใช้จริง)
              </p>
              <p className="text-[11px] text-[#8e8e93] mt-1">
                หรือใช้ Mac Mini แทน VPS — ข้อมูลผู้ป่วยอยู่ในคลินิก ไม่มีค่า hosting
              </p>
            </div>

            {/* Features grid */}
            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {[
                  "Appointment Bot (LINE) 24/7",
                  "Drug Info RAG ค้นยาทันที",
                  "Patient Summary AI",
                  "AI Prescription Check",
                  "Auto Follow-up Reminder",
                  "Clinic Dashboard Real-time",
                  "Drug Interaction Alert",
                  "Daily Report ส่ง LINE",
                  "Insurance Claim Auto-fill",
                  "Training & Support 60 วัน",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Check size={14} className="text-[#34c759] shrink-0" />
                    <span className="text-[13px] text-[#1d1d1f]">{f}</span>
                  </div>
                ))}
              </div>

              {/* ROI box */}
              <div className="p-5 rounded-xl bg-[#f5f5f7] mb-6">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3 text-center">
                  คุ้มค่าแค่ไหน?
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white">
                    <p className="text-[10px] text-[#6e6e73]">
                      จ้าง admin + โทร
                    </p>
                    <p className="text-[18px] font-semibold text-[#ff3b30]">
                      ฿18,000
                    </p>
                    <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white">
                    <p className="text-[10px] text-[#6e6e73]">ใช้ AI แทน</p>
                    <p className="text-[18px] font-semibold text-[#34c759]">
                      ฿2,500
                    </p>
                    <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white">
                    <p className="text-[10px] text-[#6e6e73]">ประหยัด/ปี</p>
                    <p className="text-[18px] font-semibold text-[#2997ff]">
                      ฿186,000
                    </p>
                    <p className="text-[9px] text-[#6e6e73]">
                      คืนทุนใน 2 เดือน
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-medium text-white transition-transform active:scale-95 hover:opacity-90"
                  style={{ background: GREEN }}
                >
                  ปรึกษาฟรี --- ออกแบบ AI ให้คลินิกคุณ
                  <ArrowRight size={16} />
                </a>
                <p className="text-[12px] text-[#6e6e73] mt-3">
                  บอกเราว่าคลินิกมีกี่หมอ ดูกี่คนต่อวัน เราออกแบบ workflow ให้
                </p>
                <p className="text-[12px] text-[#6e6e73] mt-4">
                  Starter ฿29,900 · <span className="font-semibold text-[#34c759]">Professional ฿59,900</span> · Enterprise ฿99,900
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
