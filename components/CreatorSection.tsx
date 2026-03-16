"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PenTool, Video, Camera, Hash, Calendar, BarChart3,
  Play, TrendingUp, Users, Sparkles, Heart, MessageCircle,
  Share2, Zap, Eye, Bookmark, Music, Send, ArrowRight,
  Clock, Target, Lightbulb, Brain, ChevronRight, Check,
  FileText, Palette, LayoutGrid, Star, Award, Repeat,
  ThumbsUp, Bot, Wand2, LineChart, MousePointerClick
} from "lucide-react";

/* ─── CREATOR STUDIO — unique workspace layout ─── */

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

/* ─── Content Calendar Data ─── */
const calendarDays = ["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"];
const calendarSlots = [
  { dots: [{ color: "#ff2d55", label: "TikTok" }, { color: "#af52de", label: "IG" }] },
  { dots: [{ color: "#2997ff", label: "FB" }] },
  { dots: [{ color: "#ff2d55", label: "TikTok" }, { color: "#ff3b30", label: "YT" }] },
  { dots: [{ color: "#af52de", label: "IG" }, { color: "#34c759", label: "LINE" }] },
  { dots: [{ color: "#ff2d55", label: "TikTok" }, { color: "#2997ff", label: "FB" }, { color: "#af52de", label: "IG" }] },
  { dots: [{ color: "#34c759", label: "LINE" }] },
  { dots: [] },
];

/* ─── Carousel Content Cards ─── */
const contentCards = [
  {
    platform: "TikTok Script",
    icon: <Play size={16} />,
    color: "#ff2d55",
    bg: "#000",
    textColor: "#fff",
    content: (
      <div className="space-y-2.5">
        <div className="p-2 rounded-lg bg-white/10 border-l-2 border-[#ff2d55]">
          <p className="text-[9px] font-bold text-[#ff2d55] uppercase mb-0.5">Hook (0-3s)</p>
          <p className="text-[11px] text-white/90">&quot;หยุดเลื่อนก่อน! สิ่งที่ฉันเจอมันเปลี่ยนทุกอย่าง&quot;</p>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border-l-2 border-white/30">
          <p className="text-[9px] font-bold text-white/50 uppercase mb-0.5">Content (3-50s)</p>
          <p className="text-[10px] text-white/70">1. โชว์ before/after</p>
          <p className="text-[10px] text-white/70">2. อธิบายส่วนผสม</p>
          <p className="text-[10px] text-white/70">3. วิธีใช้จริง</p>
        </div>
        <div className="p-2 rounded-lg bg-[#ff2d55]/20 border-l-2 border-[#ff2d55]">
          <p className="text-[9px] font-bold text-[#ff2d55] uppercase mb-0.5">CTA (50-60s)</p>
          <p className="text-[11px] text-white/90">&quot;คอมเมนต์ &apos;อยาก&apos; เลย!&quot;</p>
        </div>
      </div>
    ),
  },
  {
    platform: "IG Post",
    icon: <Camera size={16} />,
    color: "#af52de",
    bg: "#fff",
    textColor: "#1d1d1f",
    content: (
      <div>
        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#af52de]/20 to-[#ff2d55]/20 mb-3 flex items-center justify-center">
          <Camera size={24} className="text-[#af52de]/40" />
        </div>
        <p className="text-[11px] text-[#1d1d1f] leading-relaxed mb-2">ใช้มา 3 เดือน ผิวเปลี่ยนจริง ไม่ได้พูดเล่น ตอนแรกไม่เชื่อ แต่พอลองแล้วหยุดไม่ได้...</p>
        <div className="flex flex-wrap gap-1">
          {["#สกินแคร์", "#รีวิวจริง", "#ผิวสวย", "#beauty"].map((h) => (
            <span key={h} className="text-[8px] text-[#af52de]">{h}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    platform: "YouTube Description",
    icon: <Video size={16} />,
    color: "#ff3b30",
    bg: "#fff",
    textColor: "#1d1d1f",
    content: (
      <div className="space-y-2">
        <div className="aspect-video rounded-lg bg-gradient-to-br from-[#ff3b30]/10 to-[#ff9500]/10 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#ff3b30]/20 flex items-center justify-center">
            <Play size={16} className="text-[#ff3b30] ml-0.5" />
          </div>
        </div>
        <p className="text-[10px] font-semibold text-[#1d1d1f]">Morning Routine เดือน มี.ค. | สกินแคร์ + แต่งหน้า</p>
        <div className="space-y-1">
          <p className="text-[9px] text-[#6e6e73]">0:00 Intro</p>
          <p className="text-[9px] text-[#6e6e73]">1:30 Skincare Step</p>
          <p className="text-[9px] text-[#6e6e73]">5:00 Makeup Look</p>
        </div>
        <div className="flex flex-wrap gap-1">
          {["skincare", "routine", "makeup"].map((t) => (
            <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-[#ff3b30]/8 text-[#ff3b30]">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    platform: "Facebook Post",
    icon: <ThumbsUp size={16} />,
    color: "#2997ff",
    bg: "#fff",
    textColor: "#1d1d1f",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-[#2997ff]/10 flex items-center justify-center">
            <Users size={12} className="text-[#2997ff]" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#1d1d1f]">Your Page</p>
            <p className="text-[8px] text-[#6e6e73]">Just now</p>
          </div>
        </div>
        <p className="text-[11px] text-[#1d1d1f] leading-relaxed mb-3">มีใครเคยรู้สึกแบบนี้บ้างไหมคะ? ช่วง 3 เดือนที่ผ่านมา ชีวิตเปลี่ยนไปเยอะมาก อยากเล่าให้ฟัง...</p>
        <p className="text-[10px] text-[#2997ff] font-medium">อ่านต่อ...</p>
        <div className="flex items-center gap-4 mt-3 pt-2 border-t border-black/[0.04]">
          <span className="text-[9px] text-[#6e6e73] flex items-center gap-1"><ThumbsUp size={9} /> 234</span>
          <span className="text-[9px] text-[#6e6e73] flex items-center gap-1"><MessageCircle size={9} /> 45</span>
          <span className="text-[9px] text-[#6e6e73] flex items-center gap-1"><Share2 size={9} /> 12</span>
        </div>
      </div>
    ),
  },
  {
    platform: "LINE Broadcast",
    icon: <Send size={16} />,
    color: "#34c759",
    bg: "#7BC67E",
    textColor: "#fff",
    content: (
      <div className="space-y-2">
        <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
          <p className="text-[11px] text-[#1d1d1f] leading-relaxed">สวัสดีค่ะ วันนี้มีโปรพิเศษสำหรับสมาชิก LINE เท่านั้น!</p>
        </div>
        <div className="bg-white rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
          <div className="aspect-[16/9] rounded-lg bg-gradient-to-r from-[#34c759]/20 to-[#2997ff]/20 mb-2 flex items-center justify-center">
            <span className="text-[10px] font-semibold text-[#34c759]">Promo Banner</span>
          </div>
          <p className="text-[10px] text-[#1d1d1f]">ลด 20% ใช้โค้ด: LINE20</p>
        </div>
        <div className="bg-white rounded-2xl rounded-tl-sm p-2 max-w-[60%]">
          <p className="text-[10px] text-[#2997ff] font-medium text-center">กดดูรายละเอียด</p>
        </div>
      </div>
    ),
  },
];

/* ─── AI Team Members ─── */
const aiTeam = [
  {
    name: "AI Copywriter",
    avatar: <PenTool size={24} />,
    color: "#af52de",
    tagline: "เขียนได้ทุก style ทุก platform",
    skills: ["TikTok Script 60s", "IG Caption + Hashtags", "YouTube Description", "Facebook Long-form", "LINE Broadcast Copy"],
    does: "สร้าง content 5 platforms จาก 1 idea ใน 30 วินาที ปรับ tone ตาม brand voice ของคุณ",
  },
  {
    name: "AI Strategist",
    avatar: <Target size={24} />,
    color: "#2997ff",
    tagline: "วางแผน content ให้ทั้งเดือน",
    skills: ["Content Calendar", "Content Mix Planning", "Best Time to Post", "Trend Analysis", "Competitor Research"],
    does: "วิเคราะห์ข้อมูลจริงของคุณ วางแผน content mix ที่เหมาะ แนะนำเวลาโพสต์ที่ดีที่สุด",
  },
  {
    name: "AI Analyst",
    avatar: <LineChart size={24} />,
    color: "#34c759",
    tagline: "วิเคราะห์ performance ทุกโพสต์",
    skills: ["Engagement Analytics", "Growth Tracking", "ROI Calculator", "A/B Test Results", "Monthly Report"],
    does: "ติดตาม engagement ทุกโพสต์ วิเคราะห์ว่า content แบบไหนทำงานได้ดี สรุปรายงานรายสัปดาห์",
  },
];

export default function CreatorSection() {
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);
  const studioInView = useInView(studioRef, { once: true, margin: "-100px" });

  return (
    <div>
      {/* ═══ COMPACT HERO — 3 lines ═══ */}
      <section className="pt-12 pb-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-4">
              <PenTool size={14} className="text-[#af52de]" />
              <span className="text-[12px] font-medium text-[#af52de]">Creator Studio</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
              AI ที่สร้าง<span className="gradient-text">ทุก content</span>ให้คุณ
            </h1>
            <p className="text-[17px] text-[#6e6e73] max-w-[560px] mx-auto">
              Workspace สำหรับครีเอเตอร์ — วางแผน สร้าง วิเคราะห์ content ทุก platform ในที่เดียว
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ STUDIO VIEW — full-width mock desktop workspace ═══ */}
      <section className="py-10 px-4 sm:px-6" ref={studioRef}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={studioInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          {/* Browser chrome */}
          <div className="rounded-t-2xl bg-[#e8e8ed] px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-white rounded-md px-3 py-1 text-[11px] text-[#6e6e73] text-center font-mono">
                creator-studio.ai / dashboard
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Workspace panels */}
          <div className="rounded-b-2xl bg-[#f5f5f7] border border-t-0 border-black/[0.06] overflow-hidden shadow-2xl shadow-black/[0.08]">
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_260px] min-h-[420px]">

              {/* ── LEFT PANEL: Content Calendar ── */}
              <div className="bg-white border-r border-black/[0.04] p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} className="text-[#5856d6]" />
                  <span className="text-[12px] font-semibold text-[#1d1d1f]">Content Calendar</span>
                </div>
                <p className="text-[10px] text-[#6e6e73] mb-3">สัปดาห์นี้ — มี.ค. 2026</p>

                {/* 7-day grid header */}
                <div className="grid grid-cols-7 gap-1 mb-1.5">
                  {calendarDays.map((d) => (
                    <div key={d} className="text-center text-[9px] text-[#6e6e73] font-medium">{d}</div>
                  ))}
                </div>

                {/* 7-day grid with colored dots */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {calendarSlots.map((slot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={studioInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      className={`aspect-square rounded-lg border flex flex-col items-center justify-center gap-0.5 p-1 ${
                        slot.dots.length > 0
                          ? "bg-white border-black/[0.06]"
                          : "bg-[#fafafa] border-dashed border-[#d2d2d7]"
                      }`}
                    >
                      {slot.dots.length > 0 ? (
                        <div className="flex gap-0.5">
                          {slot.dots.map((dot, di) => (
                            <div key={di} className="w-2 h-2 rounded-full" style={{ background: dot.color }} title={dot.label} />
                          ))}
                        </div>
                      ) : (
                        <span className="text-[8px] text-[#d2d2d7]">-</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Platform legend */}
                <div className="space-y-1.5">
                  {[
                    { label: "TikTok", color: "#ff2d55", count: 3 },
                    { label: "Instagram", color: "#af52de", count: 3 },
                    { label: "Facebook", color: "#2997ff", count: 2 },
                    { label: "YouTube", color: "#ff3b30", count: 1 },
                    { label: "LINE", color: "#34c759", count: 2 },
                  ].map((p) => (
                    <div key={p.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                        <span className="text-[10px] text-[#6e6e73]">{p.label}</span>
                      </div>
                      <span className="text-[10px] font-medium text-[#1d1d1f]">{p.count} โพสต์</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-black/[0.04]">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles size={10} className="text-[#af52de]" />
                    <span className="text-[10px] font-semibold text-[#af52de]">AI แนะนำ</span>
                  </div>
                  <p className="text-[9px] text-[#6e6e73] leading-relaxed">
                    วันอาทิตย์ควรเพิ่ม TikTok 1 คลิป — engagement สูงกว่าวันธรรมดา 40%
                  </p>
                </div>
              </div>

              {/* ── CENTER: TikTok-style vertical video card ── */}
              <div className="bg-[#f0f0f3] flex items-center justify-center p-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={studioInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="w-[220px] sm:w-[240px] rounded-2xl bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-black/30 relative"
                >
                  {/* Video area */}
                  <div className="aspect-[9/16] relative bg-gradient-to-b from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
                    {/* Play button */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={studioInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                    >
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </motion.div>

                    {/* Top overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="px-2 py-0.5 rounded-full bg-[#ff2d55]/80 text-[8px] text-white font-bold">LIVE Preview</div>
                      </div>
                      <span className="text-[10px] text-white/70">0:60</span>
                    </div>

                    {/* Bottom overlay — caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-[10px] text-white font-semibold mb-1">@your_username</p>
                      <p className="text-[9px] text-white/80 leading-relaxed">
                        สกินแคร์ตัวนี้ทำให้ผิวเปลี่ยนใน 7 วัน ไม่ได้พูดเล่น... #สกินแคร์ #รีวิวจริง #ผิวสวย
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <Music size={8} className="text-white/60" />
                        <span className="text-[8px] text-white/60">Original Sound — your_username</span>
                      </div>
                    </div>

                    {/* Right side — TikTok engagement icons */}
                    <div className="absolute right-2 bottom-20 flex flex-col items-center gap-4">
                      {[
                        { icon: <Heart size={20} />, label: "12.5K", active: true },
                        { icon: <MessageCircle size={20} />, label: "892" },
                        { icon: <Bookmark size={20} />, label: "2.1K" },
                        { icon: <Share2 size={20} />, label: "456" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={studioInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1.0 + i * 0.1 }}
                          className="flex flex-col items-center gap-0.5"
                        >
                          <div className={item.active ? "text-[#ff2d55]" : "text-white"}>
                            {item.icon}
                          </div>
                          <span className="text-[8px] text-white font-semibold">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* "AI Generated" badge floating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={studioInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="absolute top-4 right-4 hidden md:flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-lg shadow-black/[0.06]"
                >
                  <Wand2 size={12} className="text-[#af52de]" />
                  <span className="text-[10px] font-semibold text-[#af52de]">AI สร้างให้</span>
                </motion.div>
              </div>

              {/* ── RIGHT PANEL: AI-generated caption + hashtags ── */}
              <div className="bg-white border-l border-black/[0.04] p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Wand2 size={14} className="text-[#af52de]" />
                  <span className="text-[12px] font-semibold text-[#1d1d1f]">AI Caption</span>
                  <span className="ml-auto text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759]">Generated</span>
                </div>

                {/* Caption */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={studioInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="p-3 rounded-xl bg-[#fafafa] mb-3"
                >
                  <p className="text-[11px] text-[#1d1d1f] leading-relaxed">
                    หยุดเลื่อนก่อน! สกินแคร์ตัวนี้ทำให้ผิวฉันเปลี่ยนใน 7 วัน ใช้มา 3 เดือน ผิวนุ่ม ชุ่มชื้น สิวลดลง
                    ใครมีปัญหาผิวแพ้ง่ายลองดูนะ รับรองไม่ผิดหวัง
                  </p>
                </motion.div>

                {/* Hashtags */}
                <div className="mb-3">
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">Hashtags</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={studioInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-1"
                  >
                    {["#สกินแคร์", "#รีวิวจริง", "#ผิวสวย", "#skincare", "#beauty", "#reviewTH", "#ผิวใส", "#glowup", "#เซรั่ม", "#ดูแลผิว"].map((h) => (
                      <span key={h} className="text-[9px] px-2 py-0.5 rounded-full bg-[#af52de]/8 text-[#af52de] font-medium">{h}</span>
                    ))}
                  </motion.div>
                </div>

                {/* Best time */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={studioInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.0 }}
                  className="p-3 rounded-xl bg-[#2997ff]/5 mb-3"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Clock size={10} className="text-[#2997ff]" />
                    <span className="text-[10px] font-semibold text-[#2997ff]">Best Time to Post</span>
                  </div>
                  <p className="text-[10px] text-[#6e6e73]">วันพุธ 19:00 — engagement สูงสุดของคุณ</p>
                </motion.div>

                {/* Tone selector */}
                <div className="mb-3">
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">Tone</p>
                  <div className="flex gap-1.5">
                    {["สนุก", "จริงจัง", "น่ารัก", "มืออาชีพ"].map((t, i) => (
                      <span
                        key={t}
                        className={`text-[9px] px-2 py-1 rounded-full font-medium cursor-pointer transition-colors ${
                          i === 0
                            ? "bg-[#af52de] text-white"
                            : "bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed]"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Regenerate button */}
                <div className="mt-auto pt-3 border-t border-black/[0.04]">
                  <button className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-[#af52de] text-white text-[11px] font-medium hover:bg-[#9b3fcf] transition-colors">
                    <Repeat size={12} />
                    สร้างใหม่
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══ WHAT AI CREATES FOR YOU — horizontal scroll carousel ═══ */}
      <section className="py-16 px-0">
        <div className="max-w-5xl mx-auto px-6 mb-8">
          <motion.div {...fadeUp}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              What AI creates for you
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              Content ทุก platform — สร้างเสร็จพร้อมโพสต์ใน 30 วินาที
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Scroll container */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Left spacer for centering on large screens */}
            <div className="shrink-0 w-[max(0px,calc((100vw-1024px)/2))]" />

            {contentCards.map((card, i) => (
              <motion.div
                key={card.platform}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="snap-start shrink-0 w-[260px] sm:w-[280px]"
              >
                <div
                  className="rounded-2xl overflow-hidden shadow-lg shadow-black/[0.06] h-full"
                  style={{ background: card.bg }}
                >
                  {/* Card header */}
                  <div
                    className="px-4 py-3 flex items-center gap-2 border-b"
                    style={{
                      borderColor: card.bg === "#000" || card.bg === "#7BC67E" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: card.color + "20", color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <span
                      className="text-[12px] font-semibold"
                      style={{ color: card.color }}
                    >
                      {card.platform}
                    </span>
                    <span
                      className="ml-auto text-[8px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        background: card.color + "15",
                        color: card.color,
                      }}
                    >
                      AI Generated
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="p-4">{card.content}</div>
                </div>
              </motion.div>
            ))}

            {/* Right spacer */}
            <div className="shrink-0 w-[max(0px,calc((100vw-1024px)/2))]" />
          </div>

          {/* Scroll hint gradient */}
          <div className="absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-[#fbfbfd] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ═══ STATS RIBBON — full-width colored bar ═══ */}
      <section className="py-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#1d1d1f]"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "14", unit: "โพสต์/สัปดาห์", icon: <LayoutGrid size={18} /> },
              { value: "4.8%", unit: "Engagement Rate", icon: <MousePointerClick size={18} /> },
              { value: "90%", unit: "เวลาที่ประหยัด", icon: <Clock size={18} /> },
              { value: "฿18K", unit: "ประหยัด/เดือน", icon: <Zap size={18} /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.unit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center py-8 px-4 text-center border-r border-white/10 last:border-r-0"
              >
                <div className="text-white/80 mb-2">{stat.icon}</div>
                <p className="text-[28px] sm:text-[32px] font-bold text-white tracking-tight">{stat.value}</p>
                <p className="text-[12px] text-white font-medium mt-0.5">{stat.unit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ YOUR AI TEAM — 3 persona cards ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              Your AI Team
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              ทีม AI 3 คน ทำงานให้คุณ 24/7 ไม่มีวันหยุด
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {aiTeam.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="apple-card p-0 overflow-hidden group hover:shadow-lg hover:shadow-black/[0.06] transition-shadow duration-300"
              >
                {/* Profile header */}
                <div
                  className="px-5 pt-6 pb-4 text-center relative"
                  style={{ background: `linear-gradient(135deg, ${member.color}08, ${member.color}15)` }}
                >
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}, ${member.color}CC)`,
                      color: "#fff",
                    }}
                  >
                    {member.avatar}
                  </motion.div>
                  <h3 className="text-[16px] font-semibold text-[#1d1d1f]">{member.name}</h3>
                  <p className="text-[12px] text-[#6e6e73] mt-0.5">{member.tagline}</p>

                  {/* Online indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                    <span className="text-[9px] text-[#34c759] font-medium">Online</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="px-5 py-4 border-t border-black/[0.04]">
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-2.5">Skills</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: member.color + "10",
                          color: member.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* What they do */}
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider mb-1.5">สิ่งที่ทำให้คุณ</p>
                  <p className="text-[11px] text-[#1d1d1f] leading-relaxed">{member.does}</p>
                </div>

                {/* Activity bar */}
                <div className="px-5 py-3 bg-[#fafafa] border-t border-black/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Bot size={10} className="text-[#6e6e73]" />
                    <span className="text-[9px] text-[#6e6e73]">ทำงานไปแล้ว 1,240 ครั้ง</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={8} className="text-[#ff9500]" fill="#ff9500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SINGLE PROMINENT PRICING + CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] mb-2">
              เริ่มต้นใช้ Creator Studio
            </h2>
            <p className="text-[15px] text-[#6e6e73]">
              Setup ครั้งเดียว ใช้ได้ตลอด + ค่า AI ตามใช้จริง
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-0 overflow-hidden ring-2 ring-[#af52de]/20 shadow-xl shadow-[#af52de]/[0.06]"
          >
            {/* Header banner */}
            <div className="bg-[#1d1d1f] px-6 py-8 text-center text-white">
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mb-3">
                <Award size={12} className="text-white" />
                <span className="text-[11px] font-semibold">แพ็คเกจยอดนิยม</span>
              </div>
              <h3 className="text-[24px] font-bold">Creator Studio Pro</h3>
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="text-[48px] font-bold tracking-tight">฿14,900</span>
                <span className="text-[14px]">setup fee</span>
              </div>
              <p className="text-[14px] mt-2 font-medium">+ ค่า API ประมาณ ฿800–2,500/เดือน</p>
            </div>

            {/* Features */}
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {[
                  "AI Copywriter — script, caption, hashtags",
                  "AI Strategist — content calendar & planning",
                  "AI Analyst — engagement analytics",
                  "5 Platforms: TikTok, IG, YT, FB, LINE",
                  "Batch content — 1 idea สร้าง 5 platforms",
                  "Custom brand voice & tone",
                  "Best time to post analysis",
                  "Training 2 ชม. + support 60 วัน",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check size={14} className="text-[#af52de] mt-0.5 shrink-0" />
                    <span className="text-[12px] text-[#1d1d1f]">{f}</span>
                  </div>
                ))}
              </div>

              {/* ROI callout */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-[#f5f5f7]">
                <div className="text-center">
                  <p className="text-[10px] text-[#6e6e73] mb-0.5">จ้าง content writer</p>
                  <p className="text-[16px] font-semibold text-[#ff3b30]">฿20,000</p>
                  <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-[#6e6e73] mb-0.5">ใช้ AI แทน</p>
                  <p className="text-[16px] font-semibold text-[#34c759]">฿1,500</p>
                  <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-[#6e6e73] mb-0.5">ประหยัด/ปี</p>
                  <p className="text-[16px] font-semibold text-[#2997ff]">฿222,000</p>
                  <p className="text-[9px] text-[#6e6e73]">ROI 1,233%</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                className="block w-full text-center text-[15px] font-semibold py-3.5 rounded-full bg-gradient-to-r from-[#af52de] to-[#5856d6] text-white hover:opacity-90 transition-opacity"
              >
                เริ่มต้นใช้งาน — ปรึกษาฟรี
              </a>
              <p className="text-[11px] text-[#6e6e73] text-center mt-3">
                ไม่มีค่าใช้จ่ายล่วงหน้า — คุยก่อน ตัดสินใจทีหลัง
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
