"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool, Video, Camera, Hash, Calendar, BarChart3,
  Handshake, ChevronDown, Check, ArrowRight, Clock,
  Play, TrendingUp, TrendingDown, Users, Layers, Sparkles,
  FileText, Eye, Heart, MessageCircle, Share2, Zap
} from "lucide-react";

/* ─── CREATOR PAGE — Every section has creator-specific UI mockups ─── */

export default function CreatorSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <PenTool size={14} className="text-[#af52de]" />
              <span className="text-[12px] font-medium text-[#af52de]">Content Creator & Agency</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">ครีเอเตอร์</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              สร้าง script, caption, hashtag ใน 30 วินาที วางแผน content ทั้งเดือน วิเคราะห์ engagement — ให้ AI ทำงานซ้ำ คุณโฟกัสสร้างสรรค์
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — 4 cards with REAL UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่ครีเอเตอร์เจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">

            {/* 1) Empty content calendar mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#5856d6]/5 border-b border-[#5856d6]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#5856d6]">Content Calendar</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">Deadline พรุ่งนี้!</span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"].map((d) => (
                    <div key={d} className="text-center text-[9px] text-[#86868b] font-medium">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-[#fafafa] border border-dashed border-[#d2d2d7] flex items-center justify-center">
                      <span className="text-[10px] text-[#d2d2d7]">{i === 0 ? "?" : ""}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-3">ยังไม่มี content แม้แต่โพสต์เดียว ทั้งอาทิตย์</p>
              </div>
            </motion.div>

            {/* 2) Writer's block mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">Caption Draft</span>
                <span className="text-[11px] text-[#86868b]">แก้ครั้งที่ 7...</span>
              </div>
              <div className="p-4 font-mono">
                <div className="p-3 rounded-lg bg-[#fafafa] min-h-[120px]">
                  <p className="text-[12px] text-[#d2d2d7] line-through">วันนี้อยากเล่าเรื่อง...</p>
                  <p className="text-[12px] text-[#d2d2d7] line-through mt-1">สิ่งที่ได้เรียนรู้คือ...</p>
                  <p className="text-[12px] text-[#d2d2d7] line-through mt-1">ทุกคนเคยรู้สึกแบบนี้ไหม...</p>
                  <div className="mt-3 flex items-center gap-1">
                    <div className="w-[2px] h-4 bg-[#1d1d1f] animate-pulse" />
                  </div>
                  <p className="text-[10px] text-[#86868b] mt-2 italic">2 ชั่วโมงแล้ว ยังเขียนไม่ได้สักบรรทัด</p>
                </div>
                <p className="text-[12px] text-[#ff9500] text-center font-medium pt-3">Creative block นั่งหน้าจอ ไม่รู้จะเขียนอะไร</p>
              </div>
            </motion.div>

            {/* 3) Declining engagement mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">Engagement Analytics</span>
                <div className="flex items-center gap-1">
                  <TrendingDown size={12} className="text-[#ff3b30]" />
                  <span className="text-[11px] font-bold text-[#ff3b30]">-42%</span>
                </div>
              </div>
              <div className="p-4">
                {/* Mini declining graph */}
                <div className="flex items-end gap-1 h-[80px] mb-3">
                  {[80, 72, 65, 55, 48, 38, 30, 22].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i < 4 ? "#d2d2d7" : "#ff3b30", opacity: i < 4 ? 0.4 : 0.3 + (i - 4) * 0.2 }} />
                  ))}
                </div>
                <div className="flex justify-between text-[9px] text-[#86868b] mb-3">
                  <span>8 สัปดาห์ก่อน</span>
                  <span>สัปดาห์นี้</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-[#fafafa] text-center">
                    <p className="text-[9px] text-[#86868b]">Reach</p>
                    <p className="text-[13px] font-semibold text-[#ff3b30]">2.1K</p>
                    <p className="text-[8px] text-[#ff3b30]">-38%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#fafafa] text-center">
                    <p className="text-[9px] text-[#86868b]">Likes</p>
                    <p className="text-[13px] font-semibold text-[#ff3b30]">89</p>
                    <p className="text-[8px] text-[#ff3b30]">-51%</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[#fafafa] text-center">
                    <p className="text-[9px] text-[#86868b]">Comments</p>
                    <p className="text-[13px] font-semibold text-[#ff3b30]">12</p>
                    <p className="text-[8px] text-[#ff3b30]">-60%</p>
                  </div>
                </div>
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-3">โพสต์ไม่สม่ำเสมอ engagement ลงเรื่อย ๆ</p>
              </div>
            </motion.div>

            {/* 4) Messy brand deal spreadsheet */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#34c759]/5 border-b border-[#34c759]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#34c759]">Brand Deals Tracker</span>
                <span className="text-[11px] text-[#ff9500] font-medium">3 ยังไม่ตอบ</span>
              </div>
              <div className="p-4 space-y-1.5 overflow-x-auto">
                {[
                  { brand: "Brand A", fee: "฿15,000", deadline: "15 มี.ค.", status: "รอ brief", ok: false },
                  { brand: "Brand B", fee: "???", deadline: "ยังไม่ได้ถาม", status: "ลืมตอบ", ok: false },
                  { brand: "Brand C", fee: "฿8,000", deadline: "เลย deadline", status: "ยังไม่ส่งงาน!", ok: false },
                  { brand: "Brand D", fee: "฿20,000", deadline: "20 มี.ค.", status: "เสร็จแล้ว", ok: true },
                  { brand: "Brand E", fee: "—", deadline: "—", status: "หาเมลไม่เจอ", ok: false },
                ].map((d) => (
                  <div key={d.brand} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-medium text-[#1d1d1f] w-16">{d.brand}</span>
                      <span className="text-[10px] text-[#86868b]">{d.fee}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-[#86868b]">{d.deadline}</span>
                      <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${d.ok ? "bg-[#34c759]/10 text-[#34c759]" : "bg-[#ff3b30]/10 text-[#ff3b30]"}`}>{d.status}</span>
                    </div>
                  </div>
                ))}
                <p className="text-[12px] text-[#ff9500] text-center font-medium pt-2">ข้อมูลกระจาย จำ deadline ไม่ได้ เสียโอกาสรับงาน</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side content creation mockups ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">จากเขียน 2 ชั่วโมง เหลือ 30 วินาที</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">ใช้เวลา 2 ชม. ได้ caption 1 อัน</div>
                <div className="p-4 space-y-2 font-mono">
                  <p className="text-[12px] text-[#d2d2d7] line-through">วันนี้มาเล่าเรื่องสกินแคร์ที่ใช้แล้วชอบมาก...</p>
                  <p className="text-[12px] text-[#d2d2d7] line-through">ขอแชร์สกินแคร์ตัวเด็ดที่ใช้มา 3 เดือน...</p>
                  <p className="text-[12px] text-[#d2d2d7] line-through">รีวิวจริง ไม่ได้ค่าโฆษณา สกินแคร์ตัวนี้...</p>
                  <div className="pt-3 border-t border-dashed border-[#e5e5ea] mt-3">
                    <p className="text-[11px] text-[#86868b] italic">Draft 7 ยังไม่พอใจ...</p>
                    <p className="text-[11px] text-[#86868b]">Hashtag: #สกินแคร์ #รีวิว #... หา hashtag ดี ๆ ไม่ได้</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Clock size={14} className="text-[#ff3b30]" />
                    <span className="text-[11px] text-[#ff3b30] font-medium">2 ชม. 15 นาที</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">AI สร้าง TikTok script + IG caption + hashtags ใน 30 วินาที</div>
                <div className="p-4 space-y-3">
                  {/* TikTok script */}
                  <div className="p-3 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Play size={10} className="text-[#ff2d55]" />
                      <span className="text-[10px] font-semibold text-[#ff2d55]">TikTok Script 60s</span>
                    </div>
                    <p className="text-[11px] text-[#1d1d1f] font-medium">Hook: &quot;สกินแคร์ตัวนี้ทำให้ผิวเปลี่ยนใน 7 วัน&quot;</p>
                    <p className="text-[10px] text-[#86868b] mt-1">Content: รีวิว before/after + วิธีใช้</p>
                    <p className="text-[10px] text-[#2997ff] mt-1">CTA: &quot;ใครอยากผิวแบบนี้ คอมเมนต์ &apos;อยาก&apos; เลย&quot;</p>
                  </div>
                  {/* IG Caption */}
                  <div className="p-3 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Camera size={10} className="text-[#af52de]" />
                      <span className="text-[10px] font-semibold text-[#af52de]">IG Caption</span>
                    </div>
                    <p className="text-[11px] text-[#1d1d1f]">ใช้มา 3 เดือน บอกเลยว่าผิวเปลี่ยนจริง ไม่ได้พูดเล่น...</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {["#สกินแคร์", "#รีวิวจริง", "#ผิวสวย", "#skincare", "#beauty", "#review", "#ผิวใส", "#เซรั่ม", "#ดูแลผิว", "#glowup"].map((h) => (
                        <span key={h} className="text-[8px] px-1.5 py-0.5 rounded bg-[#af52de]/8 text-[#af52de]">{h}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[10px] text-[#86868b] px-2 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium">AI</span> 28 วินาที — พร้อมโพสต์ทันที
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOWS — 6 expandable with inline demos ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">6 ระบบอัตโนมัติ</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">ครบทุก workflow ที่ครีเอเตอร์ต้องการ</p>

          <div className="space-y-4">
            {[
              {
                icon: <Video size={20} />, title: "TikTok Script Generator", color: "#ff2d55", desc: "บอกหัวข้อ → AI สร้าง script พร้อมถ่ายใน 30 วินาที", saved: "10 ชิ้น/ชม.", cost: "~฿600/เดือน",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa] space-y-3">
                    <div className="flex items-center gap-2 mb-2"><Play size={12} className="text-[#ff2d55]" /><span className="text-[11px] font-semibold text-[#ff2d55]">Generated Script — 60 วินาที</span></div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-[#ff2d55]/5 border-l-2 border-[#ff2d55]">
                        <p className="text-[9px] font-bold text-[#ff2d55] uppercase mb-1">Hook (0-3s)</p>
                        <p className="text-[11px] text-[#1d1d1f]">&quot;หยุดเลื่อนก่อน! สกินแคร์ตัวนี้ทำให้ผิวฉันเปลี่ยนใน 7 วัน&quot;</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#fafafa] border-l-2 border-[#86868b]">
                        <p className="text-[9px] font-bold text-[#86868b] uppercase mb-1">Content (3-50s)</p>
                        <p className="text-[11px] text-[#1d1d1f]">1. โชว์ before/after — ผิวก่อน vs หลังใช้ 7 วัน</p>
                        <p className="text-[11px] text-[#1d1d1f]">2. อธิบายส่วนผสม — Niacinamide + Hyaluronic Acid</p>
                        <p className="text-[11px] text-[#1d1d1f]">3. วิธีใช้ — ทาหลังล้างหน้า เช้า-เย็น</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#2997ff]/5 border-l-2 border-[#2997ff]">
                        <p className="text-[9px] font-bold text-[#2997ff] uppercase mb-1">CTA (50-60s)</p>
                        <p className="text-[11px] text-[#1d1d1f]">&quot;ใครอยากลอง คอมเมนต์ &apos;อยาก&apos; เลย! ลิงก์อยู่ใน bio&quot;</p>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <Camera size={20} />, title: "IG Caption + Hashtags", color: "#af52de", desc: "Upload รูป → AI เขียน caption + 10 hashtag ที่ relevant", saved: "5 นาที/โพสต์", cost: "~฿800/เดือน",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa]">
                    <p className="text-[11px] text-[#1d1d1f] leading-relaxed">ใช้มา 3 เดือน บอกเลยว่าผิวเปลี่ยนจริง ไม่ได้พูดเล่น ตอนแรกไม่เชื่อ แต่พอลองแล้วหยุดไม่ได้ ผิวนุ่ม ชุ่มชื้น สิวลดลงเห็น ๆ ใครมีปัญหาผิวแพ้ง่าย ลองตัวนี้ดูนะ รับรองไม่ผิดหวัง</p>
                    <div className="flex flex-wrap gap-1 mt-3 pt-3 border-t border-black/[0.04]">
                      {["#สกินแคร์", "#รีวิวจริง", "#ผิวสวย", "#skincareroutine", "#beauty", "#reviewthailand", "#ผิวใส", "#เซรั่มหน้าใส", "#ดูแลผิว", "#glowingskin"].map((h) => (
                        <span key={h} className="text-[9px] px-2 py-0.5 rounded-full bg-[#af52de]/8 text-[#af52de] font-medium">{h}</span>
                      ))}
                    </div>
                    <p className="text-[10px] text-[#86868b] mt-2">แนะนำโพสต์: วันพุธ 19:00 (engagement สูงสุดของคุณ)</p>
                  </div>
                ),
              },
              {
                icon: <Calendar size={20} />, title: "Content Calendar AI", color: "#5856d6", desc: "AI วางแผน content ทั้งสัปดาห์/เดือน พร้อม content mix", saved: "30 นาที/เดือน", cost: "~฿500/เดือน",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa]">
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"].map((d) => (
                        <div key={d} className="text-center text-[9px] text-[#86868b] font-medium">{d}</div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[
                        { type: "value", color: "#2997ff" },
                        { type: "entertain", color: "#ff9500" },
                        { type: "promo", color: "#ff2d55" },
                        { type: "value", color: "#2997ff" },
                        { type: "personal", color: "#34c759" },
                        { type: "entertain", color: "#ff9500" },
                        { type: "", color: "" },
                      ].map((d, i) => (
                        <div key={i} className="aspect-square rounded-lg bg-white border border-black/[0.04] flex flex-col items-center justify-center gap-1 p-1">
                          {d.type ? (
                            <>
                              <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                              <span className="text-[7px] text-[#86868b]">{d.type === "value" ? "ให้ความรู้" : d.type === "entertain" ? "สนุก" : d.type === "promo" ? "ขาย" : "ส่วนตัว"}</span>
                            </>
                          ) : (
                            <span className="text-[8px] text-[#d2d2d7]">พัก</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-3 justify-center">
                      {[
                        { label: "ให้ความรู้", color: "#2997ff" },
                        { label: "สนุก", color: "#ff9500" },
                        { label: "ขาย", color: "#ff2d55" },
                        { label: "ส่วนตัว", color: "#34c759" },
                      ].map((l) => (
                        <div key={l.label} className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                          <span className="text-[8px] text-[#86868b]">{l.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                icon: <Layers size={20} />, title: "Batch Content Creator", color: "#2997ff", desc: "1 idea → สร้าง content 4 platforms พร้อมกัน", saved: "1→4 platforms", cost: "~฿1,000/เดือน",
                demo: (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[
                      { platform: "TikTok", icon: <Play size={10} />, color: "#ff2d55", content: "Script 60s + Hook + CTA" },
                      { platform: "Instagram", icon: <Camera size={10} />, color: "#af52de", content: "Caption + 10 Hashtags" },
                      { platform: "YouTube", icon: <Video size={10} />, color: "#ff3b30", content: "Description + Tags + Chapters" },
                      { platform: "Facebook", icon: <Share2 size={10} />, color: "#2997ff", content: "Post ยาว + Engagement hook" },
                    ].map((p) => (
                      <div key={p.platform} className="p-3 rounded-xl bg-[#fafafa] border border-black/[0.04]">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span style={{ color: p.color }}>{p.icon}</span>
                          <span className="text-[10px] font-semibold" style={{ color: p.color }}>{p.platform}</span>
                        </div>
                        <p className="text-[9px] text-[#86868b]">{p.content}</p>
                        <div className="mt-2 flex items-center gap-1">
                          <Check size={9} className="text-[#34c759]" />
                          <span className="text-[8px] text-[#34c759] font-medium">พร้อมโพสต์</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                icon: <BarChart3 size={20} />, title: "Engagement Analytics", color: "#34c759", desc: "วิเคราะห์ performance ทุกโพสต์ แนะนำวิธีปรับปรุง", saved: "insights รายวัน", cost: "~฿400/เดือน",
                demo: (
                  <div className="mt-3 p-4 rounded-xl bg-[#fafafa]">
                    <div className="flex items-end gap-1 h-[50px] mb-2">
                      {[35, 42, 38, 55, 70, 62, 85].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 6 ? "#34c759" : "#34c759" + "40" }} />
                      ))}
                    </div>
                    <div className="space-y-1.5 mt-3">
                      <div className="flex items-center gap-2">
                        <Sparkles size={10} className="text-[#34c759]" />
                        <span className="text-[10px] text-[#1d1d1f]">โพสต์วันพุธ 19:00 engagement สูงสุด +85%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={10} className="text-[#2997ff]" />
                        <span className="text-[10px] text-[#1d1d1f]">Reels ได้ reach มากกว่า carousel 3x</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hash size={10} className="text-[#af52de]" />
                        <span className="text-[10px] text-[#1d1d1f]">#สกินแคร์ reach ดีที่สุด ควรใช้ต่อ</span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                icon: <Handshake size={20} />, title: "Brand Deal Management", color: "#ff9500", desc: "ติดตาม brief, deadline, invoice ทุก brand deal", saved: "0 ลืม deadline", cost: "~฿300/เดือน",
                demo: (
                  <div className="mt-3 space-y-2">
                    {[
                      { brand: "Skincare X", fee: "฿25,000", deadline: "20 มี.ค.", status: "กำลังทำ", sc: "#2997ff", progress: 60 },
                      { brand: "Fashion Y", fee: "฿18,000", deadline: "25 มี.ค.", status: "รอ brief", sc: "#ff9500", progress: 20 },
                      { brand: "Food Z", fee: "฿12,000", deadline: "28 มี.ค.", status: "เสร็จแล้ว", sc: "#34c759", progress: 100 },
                    ].map((d) => (
                      <div key={d.brand} className="p-3 rounded-xl bg-[#fafafa] border border-black/[0.04]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-semibold text-[#1d1d1f]">{d.brand}</span>
                          <span className="text-[10px] font-medium" style={{ color: d.sc }}>{d.fee}</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#e5e5ea] mb-1.5">
                          <div className="h-full rounded-full" style={{ width: `${d.progress}%`, background: d.sc }} />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-[#86868b]">Deadline: {d.deadline}</span>
                          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: d.sc + "12", color: d.sc }}>{d.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map((wf, i) => (
              <motion.div key={wf.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="apple-card overflow-hidden">
                <button onClick={() => setExpandedWorkflow(expandedWorkflow === i ? null : i)} className="w-full text-left p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: wf.color + "10", color: wf.color }}>{wf.icon}</div>
                    <div className="flex-1"><h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{wf.title}</h3><p className="text-[13px] text-[#86868b]">{wf.desc}</p></div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="hidden sm:block text-right"><p className="text-[11px] font-medium" style={{ color: wf.color }}>{wf.saved}</p><p className="text-[10px] text-[#86868b]">{wf.cost}</p></div>
                      <motion.div animate={{ rotate: expandedWorkflow === i ? 180 : 0 }}><ChevronDown size={16} className="text-[#d2d2d7]" /></motion.div>
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedWorkflow === i && wf.demo && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="px-5 pb-5">{wf.demo}</div></motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DASHBOARD MOCKUP ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">Dashboard ที่คุณได้</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">ดูทุกอย่างในที่เดียว</p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.05]">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">Creator AI Dashboard</span>
            </div>
            <div className="p-6">
              {/* Top stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "โพสต์สัปดาห์นี้", value: "12/14", change: "86%", color: "#34c759" },
                  { label: "Engagement Rate", value: "4.8%", change: "+0.6%", color: "#2997ff" },
                  { label: "Followers", value: "+1,240", change: "สัปดาห์นี้", color: "#af52de" },
                  { label: "Brand Deals", value: "3 active", change: "฿55,000", color: "#ff9500" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-[#fafafa]">
                    <p className="text-[10px] text-[#86868b]">{s.label}</p>
                    <p className="text-[18px] font-semibold text-[#1d1d1f]">{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: s.color }}>{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Platform breakdown */}
              <div className="mb-6">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">Platform Breakdown</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { platform: "TikTok", followers: "45.2K", engagement: "6.2%", color: "#ff2d55", growth: "+2.1K" },
                    { platform: "Instagram", followers: "32.8K", engagement: "3.8%", color: "#af52de", growth: "+890" },
                    { platform: "YouTube", followers: "12.4K", engagement: "5.1%", color: "#ff3b30", growth: "+350" },
                  ].map((p) => (
                    <div key={p.platform} className="p-3 rounded-xl bg-[#fafafa]">
                      <p className="text-[11px] font-semibold" style={{ color: p.color }}>{p.platform}</p>
                      <p className="text-[16px] font-semibold text-[#1d1d1f] mt-1">{p.followers}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-[9px] text-[#86868b]">ER {p.engagement}</span>
                        <span className="text-[9px] font-medium text-[#34c759]">{p.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scheduled posts */}
              <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">โพสต์ที่กำลังจะลง</p>
              <div className="space-y-1.5">
                {[
                  { time: "วันนี้ 19:00", platform: "TikTok", title: "รีวิวสกินแคร์ตัวใหม่", status: "พร้อมลง", sc: "#34c759" },
                  { time: "พรุ่งนี้ 12:00", platform: "IG", title: "Carousel: 5 ทิปดูแลผิวหน้าฝน", status: "กำลังสร้าง", sc: "#2997ff" },
                  { time: "พรุ่งนี้ 18:00", platform: "YouTube", title: "Morning Routine เดือน มี.ค.", status: "Draft", sc: "#ff9500" },
                ].map((p) => (
                  <div key={p.title} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#86868b] w-20">{p.time}</span>
                      <div>
                        <p className="text-[12px] font-medium text-[#1d1d1f]">{p.title}</p>
                        <p className="text-[10px] text-[#86868b]">{p.platform}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: p.sc + "12", color: p.sc }}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING with ROI ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับครีเอเตอร์</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Solo Creator", price: "฿9,900", monthly: "฿500-1,500", color: "#2997ff", features: ["TikTok Script Generator", "IG Caption + Hashtags", "Content Calendar AI", "3 workflows", "Support 30 วัน"], best: "ครีเอเตอร์เริ่มต้น" },
              { name: "Agency", price: "฿24,900", monthly: "฿1,500-4,000", color: "#af52de", badge: "แนะนำ", features: ["ทุกอย่างใน Solo", "Batch Content (4 platforms)", "Engagement Analytics", "Brand Deal Management", "10 workflows", "Training 2 ชม."], best: "ครีเอเตอร์ full-time / Agency เล็ก" },
              { name: "Full Suite", price: "฿49,900", monthly: "฿3,000-8,000", color: "#ff2d55", features: ["ทุกอย่างใน Agency", "Multi-account management", "Client reporting", "Custom AI voice/tone", "Workflow ไม่จำกัด", "Training on-site"], best: "Agency ใหญ่ / หลาย account" },
            ].map((plan) => (
              <div key={plan.name} className={`apple-card p-6 ${plan.badge ? "ring-2 ring-[#af52de]/20" : ""}`}>
                {plan.badge && <div className="text-center mb-3"><span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>{plan.badge}</span></div>}
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] text-center">{plan.name}</h3>
                <p className="text-[32px] font-semibold text-center mt-1 mb-0.5" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-[11px] text-[#86868b] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                <p className="text-[11px] text-[#86868b] text-center mb-5 pb-5 border-b border-black/[0.04]">+ {plan.monthly}/เดือน</p>
                <div className="space-y-2 mb-5">{plan.features.map((f) => <div key={f} className="flex items-start gap-2"><Check size={13} className="mt-0.5 shrink-0" style={{ color: plan.color }} /><span className="text-[12px] text-[#86868b]">{f}</span></div>)}</div>
                <p className="text-[11px] text-[#86868b] mb-3">เหมาะกับ: {plan.best}</p>
                <a href="/#contact" className="block text-center text-[13px] font-medium py-2.5 rounded-full" style={plan.badge ? { background: plan.color, color: "#fff" } : { background: "#f5f5f7" }}>เริ่มต้นใช้งาน</a>
              </div>
            ))}
          </div>

          {/* ROI */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-6 mt-8">
            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">คุ้มค่าแค่ไหน?</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#ff3b30]/5"><p className="text-[11px] text-[#86868b]">จ้าง content writer</p><p className="text-[20px] font-semibold text-[#ff3b30]">฿20,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#34c759]/5"><p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p><p className="text-[20px] font-semibold text-[#34c759]">฿1,500/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5"><p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p><p className="text-[20px] font-semibold text-[#2997ff]">฿222,000</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยสร้าง content?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าคุณทำ content แนวไหน เราออกแบบ workflow ให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
