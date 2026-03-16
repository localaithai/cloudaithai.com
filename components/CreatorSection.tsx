"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool, Video, Camera, Hash, Calendar, BarChart3,
  Handshake, Sparkles, ChevronDown, ArrowRight, CheckCircle2,
  XCircle, Send, Bot, User, Clock, DollarSign, Zap,
  Play, Instagram, Youtube, Facebook, MessageCircle,
  TrendingUp, Users, FileText, Layers, Target, Palette
} from "lucide-react";

/* ─── Pain Points ─── */
const painPoints = [
  { icon: <Sparkles size={20} />, text: "คิด content ไม่ออก", detail: "นั่งหน้าจอ 2 ชม. ยังไม่รู้จะโพสต์อะไร creative block ตลอด", color: "#ff2d55" },
  { icon: <PenTool size={20} />, text: "เขียน caption นาน", detail: "แต่ละ post ใช้เวลาเขียน 30-60 นาที ทั้งคิด ทั้งหา hashtag", color: "#ff9500" },
  { icon: <Calendar size={20} />, text: "ลืม post / post ไม่สม่ำเสมอ", detail: "ตั้งใจจะ post ทุกวัน แต่วุ่น ลืม สุดท้ายหายไป 2 สัปดาห์", color: "#5856d6" },
  { icon: <BarChart3 size={20} />, text: "ไม่มีเวลาวิเคราะห์", detail: "โพสต์ไปแล้วไม่รู้อันไหนดี อันไหนควรทำอีก engagement ลงไม่รู้ทำไม", color: "#007aff" },
  { icon: <Video size={20} />, text: "ทำ TikTok ไม่ทัน", detail: "ต้องทำ video 3-5 ชิ้น/สัปดาห์ ตั้งแต่ script ถึง edit ไม่ไหว", color: "#ff3b30" },
  { icon: <Handshake size={20} />, text: "จัดการ Brand deal ยุ่ง", detail: "Brief เข้ามา 10 brand พร้อมกัน จำ deadline ไม่ได้ ส่งงานช้า", color: "#34c759" },
];

/* ─── 6 Workflows ─── */
const workflows = [
  {
    icon: <Video size={22} />,
    title: "TikTok Script Generator",
    subtitle: "บอกหัวข้อ → AI เขียน script + hook ให้",
    color: "#ff2d55",
    steps: [
      "บอก AI: หัวข้อ, กลุ่มเป้าหมาย, tone (สนุก/ให้ความรู้/ขายของ)",
      "AI สร้าง 3 hooks แรกให้เลือก (3 วินาทีแรกสำคัญที่สุด)",
      "เลือก hook → AI เขียน script เต็ม (30/60/90 วินาที)",
      "ใส่ CTA + trending sound suggestion",
      "สร้าง caption + hashtag ที่ relevant",
      "Export ไป Notion / Google Docs พร้อมถ่าย",
    ],
    tools: ["n8n", "Dify", "Notion API"],
    models: ["Claude Sonnet (creative script)", "Gemini Flash (trend analysis)"],
    cost: "฿600-1,500/เดือน",
    result: "สร้าง script 10 ชิ้น/ชม. แทนที่จะ 2 ชิ้น views เพิ่ม 40%",
  },
  {
    icon: <Camera size={22} />,
    title: "IG Caption + Hashtag Generator",
    subtitle: "Upload รูป → AI เขียน caption + 30 hashtag",
    color: "#af52de",
    steps: [
      "Upload รูป / อธิบายเนื้อหาที่จะโพสต์",
      "AI วิเคราะห์ภาพ + เลือก tone ตาม brand voice",
      "สร้าง caption 3 แบบ: สั้น, กลาง, ยาว (storytelling)",
      "Generate 30 hashtag (mix trending + niche + brand)",
      "แนะนำเวลาโพสต์ที่ดีที่สุดจาก analytics",
      "Schedule post อัตโนมัติผ่าน Meta API",
    ],
    tools: ["n8n", "Meta Graph API", "Dify"],
    models: ["GPT-5 Vision (วิเคราะห์รูป)", "Claude Sonnet (caption)"],
    cost: "฿800-1,800/เดือน",
    result: "เขียน caption 5 นาที แทน 45 นาที engagement เพิ่ม 25%",
  },
  {
    icon: <Calendar size={22} />,
    title: "Content Calendar AI",
    subtitle: "AI วางแผน content ทั้งเดือน",
    color: "#5856d6",
    steps: [
      "บอก AI: niche, กลุ่มเป้าหมาย, เป้าหมาย (followers/sales)",
      "AI วิเคราะห์ trend + seasonal events + competitor",
      "สร้าง content calendar 30 วัน (หัวข้อ + format + platform)",
      "กำหนด content mix: 40% value, 30% entertain, 20% promo, 10% personal",
      "สร้าง content brief แต่ละ post พร้อม reference",
      "Sync เข้า Google Calendar + ตั้ง reminder",
    ],
    tools: ["n8n", "Google Calendar", "Notion"],
    models: ["GPT-5 (strategic planning)", "Gemini Flash (trend)"],
    cost: "฿500-1,000/เดือน",
    result: "วางแผน content ทั้งเดือนใน 30 นาที ไม่มี creative block",
  },
  {
    icon: <Layers size={22} />,
    title: "Batch Content Creator",
    subtitle: "1 idea → 5 platforms ทีเดียว",
    color: "#007aff",
    steps: [
      "สร้าง content idea หลัก 1 อัน (เช่น blog post)",
      "AI repurpose เป็น 5+ formats อัตโนมัติ:",
      "  → TikTok script 60 วินาที",
      "  → IG carousel 5-7 slides",
      "  → Facebook post ยาว",
      "  → Twitter/X thread 5-8 tweets",
      "  → LINE OA broadcast สรุป",
      "Schedule ทั้งหมดพร้อมกัน",
    ],
    tools: ["n8n", "Dify", "Multi-platform APIs"],
    models: ["Claude Sonnet (repurpose)", "GPT-5 (format adaptation)"],
    cost: "฿1,000-2,500/เดือน",
    result: "1 content → 5+ platforms ทำเสร็จใน 15 นาที แทน 3 ชม.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Engagement Analytics AI",
    subtitle: "AI วิเคราะห์ + แนะนำ content strategy",
    color: "#34c759",
    steps: [
      "ดึง analytics จากทุก platform (IG, TikTok, FB, YT)",
      "AI วิเคราะห์: post ไหนดี, ช่วงเวลาไหนดี, content type ไหนดี",
      "เปรียบเทียบ performance รายสัปดาห์ / รายเดือน",
      "วิเคราะห์ audience growth + demographics",
      "แนะนำ content strategy สัปดาห์หน้า",
      "ส่งรายงานทุกวันจันทร์เช้าผ่าน LINE",
    ],
    tools: ["n8n", "Meta API", "TikTok API", "Google Sheets"],
    models: ["GPT-5 (data analysis)", "Gemini Flash (daily report)"],
    cost: "฿800-1,500/เดือน",
    result: "รู้ทุก metric ไม่ต้องเปิด app เอง followers โตเร็วขึ้น 2x",
  },
  {
    icon: <Handshake size={22} />,
    title: "Brand Deal Management",
    subtitle: "Brief เข้ามา → AI จัดการทั้งหมด",
    color: "#ff9500",
    steps: [
      "Brand ส่ง brief มาทาง email / LINE",
      "AI extract ข้อมูล: brand, budget, deadline, requirements",
      "สร้าง task list + timeline ใน project board",
      "AI draft content ตาม brief ให้ review",
      "ส่ง draft ให้ brand approve ผ่าน email",
      "Track deadline + ส่ง reminder ก่อนครบกำหนด",
      "สร้าง invoice + ติดตามการจ่ายเงิน",
    ],
    tools: ["n8n", "Notion", "Gmail API", "LINE API"],
    models: ["GPT-5 (brief analysis)", "Claude Sonnet (draft content)"],
    cost: "฿700-1,500/เดือน",
    result: "จัดการ 10+ brand deal พร้อมกัน ไม่พลาด deadline",
  },
];

/* ─── Platform Features ─── */
const platforms = [
  { name: "TikTok", icon: <Play size={18} />, color: "#ff2d55", features: ["Script generator", "Hook optimizer", "Trending sound", "Caption + hashtag"] },
  { name: "Instagram", icon: <Camera size={18} />, color: "#af52de", features: ["Caption + 30 hashtag", "Carousel content", "Stories ideas", "Reel script"] },
  { name: "YouTube", icon: <Youtube size={18} />, color: "#ff3b30", features: ["Title + thumbnail idea", "Description + tags", "Chapter markers", "Community post"] },
  { name: "Facebook", icon: <Facebook size={18} />, color: "#007aff", features: ["Post + engagement bait", "Group content", "Live script", "Ad copy"] },
  { name: "LINE OA", icon: <MessageCircle size={18} />, color: "#34c759", features: ["Broadcast message", "Rich menu content", "Auto-reply", "Coupon + promo"] },
];

/* ─── Before/After ─── */
const comparisons = [
  { aspect: "คิด content idea", before: "นั่งคิด 2 ชม. ยังไม่ได้ idea ดีๆ", after: "AI สร้าง 20 ideas ใน 5 นาที", saving: "เร็วขึ้น 24x" },
  { aspect: "เขียน TikTok script", before: "1 script ใช้เวลา 30-60 นาที", after: "AI เขียน 10 script/ชม. แก้นิดหน่อย", saving: "เร็วขึ้น 10x" },
  { aspect: "IG caption + hashtag", before: "45 นาที/post ทั้งเขียนทั้งหา hashtag", after: "5 นาที/post AI ทำให้ + schedule", saving: "เร็วขึ้น 9x" },
  { aspect: "Content calendar", before: "ใช้เวลาทั้งวันวางแผนเดือนหน้า", after: "30 นาที AI วางแผนทั้งเดือน", saving: "ลด 90%" },
  { aspect: "วิเคราะห์ analytics", before: "เปิด 5 app ดูทีละ platform", after: "AI สรุปรวมส่ง LINE ทุกจันทร์", saving: "อัตโนมัติ" },
  { aspect: "จัดการ brand deal", before: "จำ deadline ไม่ได้ ส่งงานช้า", after: "AI track ทุก deadline + remind", saving: "0% miss" },
];

/* ─── TikTok Script Demo ─── */
const scriptDemo = {
  input: {
    topic: "5 เทคนิคแต่งตัวดูแพง ด้วยเสื้อผ้าราคาถูก",
    target: "ผู้หญิง 18-30 สนใจแฟชั่น",
    tone: "สนุก เป็นกันเอง",
    duration: "60 วินาที",
  },
  hooks: [
    "\"แต่งตัวดูแพงหลักหมื่น แต่จริงๆ ทั้งตัวไม่ถึงพัน!\" 🤯",
    "\"เพื่อนถามว่าเสื้อตัวนี้ซื้อจาก Zara ใช่ไหม... ไม่ค่ะ Chatuchak 150 บาท\" 😂",
    "\"ถ้าบอกว่าทั้งตัวนี้ 800 บาท จะเชื่อไหม?\" 👀",
  ],
  script: `🎬 HOOK (0-3 วิ):
"เพื่อนถามว่าเสื้อตัวนี้ Zara ใช่ไหม...
ไม่ค่ะ จตุจักร 150 บาท" 😂

📍 เทคนิคที่ 1 (4-15 วิ):
"อันดับแรก — สีต้อง neutral
ขาว ดำ เบจ น้ำตาล ใส่ยังไงก็ดูแพง
หลีกเลี่ยงลายเยอะๆ"

📍 เทคนิคที่ 2 (16-27 วิ):
"ทรงต้อง oversized เล็กน้อย
ไม่รัด ไม่หลวม พอดีๆ relaxed fit
แค่นี้ดูดีขึ้น 80%"

📍 เทคนิคที่ 3 (28-39 วิ):
"Accessories คือ game changer!
สร้อยเส้นเล็กๆ แหวน 2-3 วง
นาฬิกาเรียบๆ ทั้งหมดรวม 200 บาท"

📍 เทคนิคที่ 4 (40-48 วิ):
"รีดผ้าทุกครั้ง! เสื้อ 100 บาทที่รีดแล้ว
ดูดีกว่าเสื้อ 1,000 ที่ยับ เชื่อเถอะ"

📍 เทคนิคที่ 5 (49-55 วิ):
"Layer เสื้อซ้อน — ใส่เสื้อขาวข้างใน
ทับด้วยเชิ้ตปล่อยกระดุม ดูมีมิติ ดูแพงมาก"

🎯 CTA (56-60 วิ):
"Save เก็บไว้ แล้ว follow สำหรับเทคนิคเพิ่ม!
comment บอกด้วยว่าอยากให้ทำ part 2 ไหม?"

📱 Caption:
5 เทคนิคแต่งตัวดูแพง ทั้งตัวไม่ถึงพัน! 💰✨

#แต่งตัวดูแพง #แฟชั่นราคาถูก #เทคนิคแต่งตัว
#outfitinspo #budgetfashion #ootdth #จตุจักร`,
};

/* ─── Creator Packages ─── */
const packages = [
  {
    name: "Solo Creator",
    price: "฿9,900",
    period: "ค่า setup ครั้งเดียว",
    apiCost: "~฿1,500-3,000/เดือน",
    color: "#007aff",
    features: [
      "TikTok script generator",
      "IG caption + hashtag AI",
      "Content calendar (1 เดือน)",
      "Basic analytics report",
      "LINE notification",
    ],
    best: false,
  },
  {
    name: "Small Agency",
    price: "฿24,900",
    period: "ค่า setup ครั้งเดียว",
    apiCost: "~฿3,000-6,000/เดือน",
    color: "#af52de",
    features: [
      "ทุกอย่างใน Solo Creator",
      "Batch content (1 idea → 5 platforms)",
      "Brand deal management",
      "Multi-account support (5 accounts)",
      "Advanced analytics + competitor tracking",
      "Team collaboration (3 คน)",
    ],
    best: true,
  },
  {
    name: "Full Agency",
    price: "฿49,900",
    period: "ค่า setup ครั้งเดียว",
    apiCost: "~฿6,000-15,000/เดือน",
    color: "#ff9500",
    features: [
      "ทุกอย่างใน Small Agency",
      "Unlimited accounts",
      "White-label dashboard",
      "Client reporting อัตโนมัติ",
      "Custom AI training (brand voice)",
      "API integration กับ tools เดิม",
      "Priority support + monthly review",
      "Team collaboration (unlimited)",
    ],
    best: false,
  },
];

export default function CreatorSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);
  const [selectedHook, setSelectedHook] = useState(1);

  return (
    <div className="mesh-gradient min-h-screen">
      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass-pill px-5 py-2 mb-6 text-[13px] text-[#ff2d55] font-medium">
              <PenTool size={16} /> Creator AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1c1c1e] tracking-tight mb-6">
              AI สำหรับ<span className="gradient-text">Content Creator</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto mb-10 leading-relaxed">
              เขียน script, สร้าง caption, วางแผน content, วิเคราะห์ engagement
              — ให้ AI ทำงานหนัก คุณโฟกัสแค่ creativity
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: "10x", label: "สร้าง content เร็วขึ้น", color: "#ff2d55" },
              { value: "40%", label: "views เพิ่มขึ้น", color: "#af52de" },
              { value: "5 นาที", label: "caption + hashtag", color: "#007aff" },
              { value: "0%", label: "creative block", color: "#34c759" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-widest mb-3">Pain Points</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              ปัญหาที่ Creator เจอทุกวัน
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              คุ้นไหม? ถ้าเจอแม้แต่ข้อเดียว AI ช่วยได้
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center mb-3" style={{ color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1c1c1e] mb-1">{p.text}</h3>
                  <p className="text-[12px] text-[#8e8e93] leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 WORKFLOWS ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#af52de] uppercase tracking-widest mb-3">Automation Workflows</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              6 ระบบ AI สำหรับ Creator
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              ทุกขั้นตอนตั้งแต่คิด idea จนถึงวิเคราะห์ผลลัพธ์ — AI ทำให้ทั้งหมด
            </p>
          </motion.div>

          <div className="space-y-4">
            {workflows.map((wf, i) => (
              <motion.div
                key={wf.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={`glass-card relative overflow-hidden ${expandedWorkflow === i ? "!bg-white/70" : ""}`}>
                  <button
                    onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)}
                    className="w-full text-left p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: wf.color + "15", color: wf.color }}>
                        {wf.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#1c1c1e] mb-0.5">{wf.title}</h3>
                        <p className="text-[13px] text-[#6e6e73]">{wf.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:block text-[11px] text-[#6e6e73]">{wf.cost}</span>
                        <motion.div animate={{ rotate: expandedWorkflow === i ? 180 : 0 }}>
                          <ChevronDown size={16} className="text-[#d2d2d7]" />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedWorkflow === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-5">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
                          <div>
                            <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-3">ขั้นตอนการทำงาน</p>
                            <div className="space-y-2">
                              {wf.steps.map((step, si) => (
                                <div key={si} className="flex items-start gap-3">
                                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-0.5" style={{ background: wf.color }}>
                                    {si + 1}
                                  </span>
                                  <span className="text-[13px] text-[#1c1c1e]/80">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">เครื่องมือ</p>
                              <div className="flex flex-wrap gap-1.5">
                                {wf.tools.map((t) => (
                                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#1c1c1e]">{t}</span>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">AI Model</p>
                              <div className="space-y-1">
                                {wf.models.map((m) => (
                                  <p key={m} className="text-[11px] text-[#1c1c1e]">{m}</p>
                                ))}
                              </div>
                            </div>
                            <div className="bg-[#fafafa] rounded-xl p-4">
                              <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">ผลลัพธ์</p>
                              <p className="text-[13px] font-medium" style={{ color: wf.color }}>{wf.result}</p>
                              <p className="text-[11px] text-[#6e6e73] mt-1">ค่า API ~{wf.cost}/เดือน</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM-SPECIFIC FEATURES ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#007aff] uppercase tracking-widest mb-3">Platform Support</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              รองรับทุก Platform
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center mb-3" style={{ color: p.color }}>
                    {p.icon}
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#1c1c1e] mb-2">{p.name}</h3>
                  <div className="space-y-1">
                    {p.features.map((f) => (
                      <p key={f} className="text-[11px] text-[#8e8e93] flex items-center gap-1">
                        <CheckCircle2 size={10} style={{ color: p.color }} className="shrink-0" /> {f}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-widest mb-3">Before / After</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              เดิม vs ใช้ AI
            </h2>
          </motion.div>

          <div className="glass-card overflow-hidden">
            <div className="relative z-10">
              <div className="grid grid-cols-12 gap-4 p-5 border-b border-black/[0.04] liquid-glass-strong">
                <div className="col-span-3 text-[12px] font-semibold text-[#6e6e73]">งาน</div>
                <div className="col-span-4 text-[12px] font-semibold text-[#ff3b30] flex items-center gap-1"><XCircle size={13} /> เดิม</div>
                <div className="col-span-4 text-[12px] font-semibold text-[#34c759] flex items-center gap-1"><CheckCircle2 size={13} /> ใช้ AI</div>
                <div className="col-span-1 text-[12px] font-semibold text-[#007aff] text-center">ผล</div>
              </div>
              {comparisons.map((c, i) => (
                <motion.div
                  key={c.aspect}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="grid grid-cols-12 gap-4 p-5 border-b border-black/[0.03] hover:bg-white/30 transition-colors"
                >
                  <div className="col-span-3 text-[13px] font-medium text-[#1c1c1e]">{c.aspect}</div>
                  <div className="col-span-4 text-[12px] text-[#8e8e93]">{c.before}</div>
                  <div className="col-span-4 text-[12px] text-[#1c1c1e]">{c.after}</div>
                  <div className="col-span-1 text-center">
                    <span className="text-[11px] font-semibold text-[#34c759] glass-pill px-2 py-0.5">{c.saving}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TIKTOK SCRIPT DEMO ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff2d55] uppercase tracking-widest mb-3">Live Demo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              AI สร้าง TikTok Script จริง
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              บอกหัวข้อ → AI สร้าง hook + script + caption + hashtag ให้ภายใน 30 วินาที
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-6">
                <div className="relative z-10 space-y-4">
                  <h3 className="text-[15px] font-semibold text-[#1c1c1e] flex items-center gap-2">
                    <Target size={16} className="text-[#ff2d55]" /> Input
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(scriptDemo.input).map(([key, val]) => (
                      <div key={key}>
                        <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-1">
                          {key === "topic" ? "หัวข้อ" : key === "target" ? "กลุ่มเป้าหมาย" : key === "tone" ? "Tone" : "ความยาว"}
                        </p>
                        <div className="glass-input px-4 py-2.5 text-[13px] text-[#1c1c1e]">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <h4 className="text-[13px] font-semibold text-[#1c1c1e] mb-3">AI สร้าง 3 Hook ให้เลือก:</h4>
                    <div className="space-y-2">
                      {scriptDemo.hooks.map((hook, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedHook(i)}
                          className={`w-full text-left p-3 rounded-xl text-[12px] transition-all ${
                            selectedHook === i
                              ? "bg-[#ff2d55]/10 border border-[#ff2d55]/20 text-[#1c1c1e]"
                              : "bg-[#fafafa] border border-transparent text-[#6e6e73] hover:bg-[#f0f0f5]"
                          }`}
                        >
                          <span className="font-semibold" style={{ color: selectedHook === i ? "#ff2d55" : "#8e8e93" }}>
                            Hook {i + 1}:
                          </span>{" "}
                          {hook}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Output side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card relative p-0 overflow-hidden">
                <div className="liquid-glass-strong px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-[12px] text-[#6e6e73] font-medium ml-2">TikTok Script Output</span>
                  <span className="ml-auto text-[10px] glass-pill px-2 py-0.5 text-[#ff2d55] font-medium">AI Generated</span>
                </div>
                <div className="p-5 max-h-[600px] overflow-y-auto">
                  <pre className="text-[12px] text-[#1c1c1e] whitespace-pre-wrap leading-relaxed font-sans">
                    {scriptDemo.script}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ LIVE MOCKUP: ดูตัวอย่างจริง ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#af52de] uppercase tracking-widest mb-3">Interactive Preview</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              ดูตัวอย่างจริง
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              AI Dashboard สำหรับ Creator — จัดการ content, สร้าง caption, วางแผนทั้งสัปดาห์ในที่เดียว
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-0 overflow-hidden"
          >
            {/* Browser chrome */}
            <div className="liquid-glass-strong px-5 py-3 flex items-center gap-3 border-b border-black/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#f5f5f7] rounded-lg px-4 py-1.5 text-[11px] text-[#6e6e73] flex items-center gap-2 max-w-md mx-auto">
                  <span className="text-[#34c759]">&#128274;</span> dashboard.cloudai.th/creator/bella.style
                </div>
              </div>
              <span className="text-[10px] glass-pill px-2 py-0.5 text-[#af52de] font-medium">AI Dashboard</span>
            </div>

            {/* Dashboard top bar */}
            <div className="px-6 py-3 border-b border-black/[0.04] flex items-center justify-between bg-white/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2d55] to-[#af52de] flex items-center justify-center text-white text-[11px] font-bold">BS</div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1c1c1e]">Bella.Style</p>
                  <p className="text-[10px] text-[#6e6e73]">Fashion & Lifestyle Creator</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-[#6e6e73]">
                <span className="flex items-center gap-1"><Users size={12} className="text-[#ff2d55]" /> 128K followers</span>
                <span className="flex items-center gap-1"><TrendingUp size={12} className="text-[#34c759]" /> +12.4% เดือนนี้</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-5 min-h-[500px]">
              {/* LEFT: TikTok Video Preview (2 cols) */}
              <div className="lg:col-span-2 p-5 border-r border-black/[0.04]">
                <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-3">Video Preview</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative rounded-2xl bg-gradient-to-b from-[#1c1c1e] to-[#2c2c2e] aspect-[9/14] max-w-[220px] mx-auto overflow-hidden"
                >
                  {/* Video content area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">&#128087;</div>
                      <p className="text-white/60 text-[10px]">5 เทคนิคแต่งตัวดูแพง</p>
                      <p className="text-white/40 text-[9px]">ทั้งตัวไม่ถึงพัน!</p>
                    </div>
                  </div>

                  {/* Play button overlay */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  </motion.div>

                  {/* TikTok-style right sidebar */}
                  <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
                    {[
                      { icon: "&#10084;&#65039;", count: "24.5K" },
                      { icon: "&#128172;", count: "1,842" },
                      { icon: "&#128279;", count: "3,291" },
                      { icon: "&#128278;", count: "892" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <span className="text-[16px]" dangerouslySetInnerHTML={{ __html: item.icon }} />
                        <span className="text-white text-[9px] font-medium">{item.count}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-3 left-3 right-12">
                    <p className="text-white text-[11px] font-semibold">@bella.style</p>
                    <p className="text-white/80 text-[9px] leading-relaxed mt-1">5 เทคนิคแต่งตัวดูแพง ทั้งตัวไม่ถึงพัน! &#128176;&#10024;</p>
                    <div className="flex items-center gap-1 mt-1.5">
                      <span className="text-[8px] text-white/50">&#127925;</span>
                      <p className="text-white/50 text-[8px]">original sound — bella.style</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-black/50 text-white text-[9px] px-2 py-0.5 rounded-full">0:58</span>
                  </div>
                </motion.div>

                {/* Engagement stats below video */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 grid grid-cols-3 gap-2 max-w-[220px] mx-auto"
                >
                  {[
                    { label: "Views", value: "482K", color: "#ff2d55" },
                    { label: "Eng. Rate", value: "6.2%", color: "#af52de" },
                    { label: "Shares", value: "3.2K", color: "#007aff" },
                  ].map((s) => (
                    <div key={s.label} className="text-center bg-[#fafafa] rounded-lg p-2">
                      <p className="text-[13px] font-bold" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-[9px] text-[#6e6e73]">{s.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT: AI Caption + Calendar (3 cols) */}
              <div className="lg:col-span-3 flex flex-col">
                {/* AI Generated Caption Card */}
                <div className="p-5 border-b border-black/[0.04] flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-[#af52de]" />
                    <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider">AI-Generated Caption</p>
                    <span className="ml-auto text-[9px] glass-pill px-2 py-0.5 text-[#34c759] font-medium">Auto-generated 3 sec</span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#fafafa] rounded-xl p-4 space-y-3"
                  >
                    <p className="text-[12px] text-[#1c1c1e] leading-relaxed">
                      &#128087; แต่งตัวดูแพงหลักหมื่น แต่จริงๆ ทั้งตัวไม่ถึงพัน! เทคนิคง่ายๆ 5 ข้อที่ใครก็ทำได้ &#10024;
                    </p>
                    <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                      &#128073; สี neutral เป็นพระเอก<br />
                      &#128073; ทรง relaxed fit ดูดีทันที<br />
                      &#128073; Accessories ราคาถูกเปลี่ยนลุคได้เลย<br />
                      &#128073; รีดผ้าเสมอ! เสื้อ 100 บาทก็ดูแพงได้<br />
                      &#128073; Layer ซ้อนเสื้อ = มิติ + ดูมีราคา
                    </p>
                    <p className="text-[11px] text-[#6e6e73]">
                      Save ไว้ แล้ว follow สำหรับเทคนิคเพิ่ม! &#128588;
                    </p>

                    {/* Hashtags */}
                    <div className="pt-2 border-t border-black/[0.04]">
                      <p className="text-[10px] font-medium text-[#6e6e73] mb-2">&#127919; Hashtags (10)</p>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "#แต่งตัวดูแพง", "#แฟชั่นราคาถูก", "#outfitinspo",
                          "#budgetfashion", "#เทคนิคแต่งตัว", "#ootdth",
                          "#fashiontiktok", "#สไตล์วันนี้", "#แต่งตัวทำงาน", "#จตุจักร"
                        ].map((tag, idx) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.05 }}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-[#af52de]/10 text-[#af52de] font-medium"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Calendar Grid */}
                <div className="p-5 bg-white/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} className="text-[#5856d6]" />
                    <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider">Content Calendar — สัปดาห์นี้</p>
                    <span className="ml-auto text-[10px] text-[#6e6e73]">Mar 10 - 16, 2026</span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-7 gap-1.5"
                  >
                    {[
                      { day: "จ.", label: "Mon", posts: [{ type: "tiktok", color: "#ff2d55" }, { type: "ig", color: "#af52de" }] },
                      { day: "อ.", label: "Tue", posts: [{ type: "ig-story", color: "#ff9500" }] },
                      { day: "พ.", label: "Wed", posts: [{ type: "tiktok", color: "#ff2d55" }, { type: "fb", color: "#007aff" }] },
                      { day: "พฤ.", label: "Thu", posts: [{ type: "ig", color: "#af52de" }] },
                      { day: "ศ.", label: "Fri", posts: [{ type: "tiktok", color: "#ff2d55" }, { type: "ig", color: "#af52de" }, { type: "yt", color: "#ff3b30" }] },
                      { day: "ส.", label: "Sat", posts: [{ type: "ig-story", color: "#ff9500" }] },
                      { day: "อา.", label: "Sun", posts: [] },
                    ].map((d, i) => (
                      <motion.div
                        key={d.label}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className={`rounded-xl p-2 text-center ${d.day === "ศ." ? "bg-[#af52de]/10 ring-1 ring-[#af52de]/20" : "bg-[#fafafa]"} ${d.posts.length === 0 ? "opacity-50" : ""}`}
                      >
                        <p className="text-[10px] font-semibold text-[#1c1c1e] mb-0.5">{d.day}</p>
                        <p className="text-[8px] text-[#6e6e73] mb-1.5">{d.label}</p>
                        <div className="flex justify-center gap-1 flex-wrap">
                          {d.posts.map((p, pi) => (
                            <motion.div
                              key={pi}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.7 + i * 0.05 + pi * 0.1, type: "spring" }}
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ background: p.color }}
                              title={p.type}
                            />
                          ))}
                          {d.posts.length === 0 && (
                            <span className="text-[8px] text-[#c7c7cc]">&#8212;</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Legend */}
                  <div className="flex items-center gap-3 mt-3 justify-center">
                    {[
                      { label: "TikTok", color: "#ff2d55" },
                      { label: "IG Post", color: "#af52de" },
                      { label: "IG Story", color: "#ff9500" },
                      { label: "Facebook", color: "#007aff" },
                      { label: "YouTube", color: "#ff3b30" },
                    ].map((l) => (
                      <div key={l.label} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                        <span className="text-[8px] text-[#6e6e73]">{l.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING PACKAGES ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[13px] font-semibold text-[#ff9500] uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] tracking-tight mb-3">
              แพ็คเกจสำหรับ Creator
            </h2>
            <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
              จ่ายค่า setup ครั้งเดียว + ค่า API ตามใช้งานจริง ไม่มี subscription รายเดือน
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 relative ${pkg.best ? "ring-2 ring-[#af52de]/30" : ""}`}
              >
                {pkg.best && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-4 py-1 rounded-full bg-[#af52de] text-white">
                    แนะนำ
                  </div>
                )}
                <div className="relative z-10">
                  <h3 className="text-[17px] font-semibold text-[#1c1c1e] mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold mb-0.5" style={{ color: pkg.color }}>{pkg.price}</p>
                  <p className="text-[11px] text-[#8e8e93] mb-1">{pkg.period}</p>
                  <p className="text-[12px] text-[#6e6e73] mb-5">+ ค่า API {pkg.apiCost}</p>

                  <div className="space-y-2 mb-6">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-[12px] text-[#1c1c1e]">
                        <CheckCircle2 size={14} style={{ color: pkg.color }} className="shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://lin.ee/cloudai"
                    className="block w-full text-center py-3 rounded-full font-medium text-[14px] transition-all"
                    style={{
                      background: pkg.best ? pkg.color : "transparent",
                      color: pkg.best ? "white" : pkg.color,
                      border: pkg.best ? "none" : `1.5px solid ${pkg.color}`,
                    }}
                  >
                    เลือกแพ็คเกจนี้
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-10 shimmer-bg">
              <div className="relative z-10">
                <PenTool size={40} className="text-[#ff2d55] mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#1c1c1e] mb-3">
                  พร้อมให้ AI ช่วยสร้าง content?
                </h2>
                <p className="text-base text-[#6e6e73] mb-8 max-w-lg mx-auto">
                  ปรึกษาฟรี — บอกว่าทำ content แนวไหน platform อะไร เราแนะนำ solution ที่เหมาะที่สุด
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://lin.ee/cloudai"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ff2d55] text-white font-medium text-[15px] hover:bg-[#e6003d] transition-all shadow-lg shadow-[#ff2d55]/20"
                  >
                    <MessageCircle size={18} /> ปรึกษาฟรีผ่าน LINE
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-pill text-[#ff2d55] font-medium text-[15px] hover:bg-white/60 transition-all"
                  >
                    ดูแพ็คเกจ <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
