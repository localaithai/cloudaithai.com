"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MessageSquare, FileText, CalendarClock, TrendingUp, Users, ChevronDown, Check, ArrowRight, Clock, BarChart3, MapPin, DollarSign, Star, Phone, Eye } from "lucide-react";

/* ─── REAL ESTATE PAGE — Every section has industry-specific UI mockups ─── */

export default function RealEstateSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <Building2 size={14} className="text-[#2997ff]" />
              <span className="text-[12px] font-medium text-[#2997ff]">Real Estate AI Solution</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">อสังหาริมทรัพย์</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              ตอบลูกค้า 24/7 เขียน listing อัตโนมัติ นัดชมทรัพย์ วิเคราะห์ราคาตลาด จัดการ lead — ปิดดีลเร็วขึ้น 45%
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — with real UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่นายหน้าอสังหาฯ เจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* LINE inbox overflow mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">💬 LINE OA — สอบถามทรัพย์</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">50+ ยังไม่อ่าน</span>
              </div>
              <div className="p-4 space-y-2">
                {["มีคอนโดแถวพระราม9ไหมครับ งบ 3 ล้าน", "ห้องที่โพสต์ยังว่างไหมคะ?", "ราคาต่อรองได้ไหม", "อยากนัดดูห้อง เสาร์หน้าว่างไหม", "มีบ้านเดี่ยว ลาดพร้าว ไหม"].map((msg, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#fafafa]">
                    <div className="w-7 h-7 rounded-full bg-[#e5e5ea] shrink-0" />
                    <p className="text-[12px] text-[#1d1d1f] truncate flex-1">{msg}</p>
                    <span className="text-[9px] text-[#86868b] shrink-0">{i + 1}h</span>
                  </div>
                ))}
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-1">ตอบไม่ทัน ลูกค้าไปหานายหน้าคนอื่น</p>
              </div>
            </motion.div>

            {/* Listing spreadsheet mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">📋 Listing Spreadsheet</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">68 รายการ outdated</span>
              </div>
              <div className="p-4">
                <div className="text-[10px] grid grid-cols-12 gap-1 pb-2 border-b border-black/[0.04] mb-2 text-[#86868b] font-medium">
                  <span className="col-span-4">ทรัพย์</span>
                  <span className="col-span-2">ราคา</span>
                  <span className="col-span-3">สถานะ</span>
                  <span className="col-span-3">Description</span>
                </div>
                {[
                  { name: "Life Asoke #2205", price: "3.2M", status: "ว่าง", desc: "ยังไม่เขียน", ok: false },
                  { name: "Ideo Mobi #1803", price: "???", status: "ไม่แน่ใจ", desc: "เก่า 6 เดือน", ok: false },
                  { name: "The Base #910", price: "2.9M", status: "ว่าง", desc: "OK", ok: true },
                  { name: "Rhythm #1522", price: "4.1M", status: "จอง?", desc: "ยังไม่เขียน", ok: false },
                  { name: "Aspire #704", price: "2.5M", status: "ว่าง", desc: "เก่า 3 เดือน", ok: false },
                ].map((r) => (
                  <div key={r.name} className="text-[10px] grid grid-cols-12 gap-1 py-1.5 border-b border-black/[0.02]">
                    <span className="col-span-4 text-[#1d1d1f] font-medium truncate">{r.name}</span>
                    <span className="col-span-2 text-[#1d1d1f]">{r.price}</span>
                    <span className={`col-span-3 ${r.status.includes("?") || r.status === "ไม่แน่ใจ" ? "text-[#ff9500]" : "text-[#34c759]"}`}>{r.status}</span>
                    <span className={`col-span-3 ${r.ok ? "text-[#34c759]" : "text-[#ff3b30]"}`}>{r.desc}</span>
                  </div>
                ))}
                <p className="text-[11px] text-[#ff9500] text-center font-medium pt-2">200 รายการ จัดการไม่ไหว ข้อมูลไม่ update</p>
              </div>
            </motion.div>

            {/* Missed appointments mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#5856d6]/5 border-b border-[#5856d6]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#5856d6]">📅 นัดชมทรัพย์วันนี้</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">3 no-show</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { time: "10:00", client: "คุณสมชาย", unit: "Life Asoke", status: "ไม่มา", ok: false },
                  { time: "13:00", client: "คุณแพร", unit: "Ideo Mobi", status: "เลื่อน (ไม่บอก)", ok: false },
                  { time: "15:00", client: "คุณวิภา", unit: "The Base", status: "ไม่รับโทร", ok: false },
                  { time: "16:30", client: "คุณธนา", unit: "Rhythm", status: "มาแล้ว", ok: true },
                ].map((a) => (
                  <div key={a.time} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-mono text-[#1d1d1f]">{a.time}</span>
                      <div>
                        <p className="text-[11px] font-medium text-[#1d1d1f]">{a.client}</p>
                        <p className="text-[9px] text-[#86868b]">{a.unit}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] ${a.ok ? "text-[#34c759]" : "text-[#ff3b30]"}`}>{a.ok ? "✅" : "❌"} {a.status}</span>
                  </div>
                ))}
                <p className="text-[12px] text-[#5856d6] text-center font-medium pt-1">เสียเวลาเดินทาง ลูกค้าไม่มาไม่บอก</p>
              </div>
            </motion.div>

            {/* Competitor pricing mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#2997ff]/5 border-b border-[#2997ff]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#2997ff]">📊 ราคาคู่แข่ง — สุขุมวิท 1BR</span>
                <span className="text-[11px] text-[#86868b]">ต้องเช็คเอง</span>
              </div>
              <div className="p-4">
                <div className="text-[10px] grid grid-cols-12 gap-1 pb-2 border-b border-black/[0.04] mb-2 text-[#86868b] font-medium">
                  <span className="col-span-5">โครงการ</span>
                  <span className="col-span-3">ราคา/ตร.ม.</span>
                  <span className="col-span-4">คู่แข่ง listing</span>
                </div>
                {[
                  { name: "Life Asoke Rama 9", psm: "฿95K", comp: "ถูกกว่าเรา 5%" },
                  { name: "Ideo Mobi Sukhumvit", psm: "฿110K", comp: "เท่ากัน" },
                  { name: "The Base Phetchaburi", psm: "฿85K", comp: "แพงกว่าเรา 8%" },
                  { name: "Rhythm Asoke", psm: "฿125K", comp: "ถูกกว่าเรา 12%" },
                ].map((c) => (
                  <div key={c.name} className="text-[10px] grid grid-cols-12 gap-1 py-1.5 border-b border-black/[0.02]">
                    <span className="col-span-5 text-[#1d1d1f] font-medium truncate">{c.name}</span>
                    <span className="col-span-3 text-[#1d1d1f]">{c.psm}</span>
                    <span className={`col-span-4 ${c.comp.includes("ถูกกว่า") ? "text-[#ff3b30]" : "text-[#34c759]"}`}>{c.comp}</span>
                  </div>
                ))}
                <p className="text-[11px] text-[#2997ff] text-center font-medium pt-2">ไม่มี data ตั้งราคาจากความรู้สึก ขายช้า</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side chat mockups ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">เปลี่ยนจากตอบช้า เป็นปิดดีลทันที</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">ตอบ: 2 ชม. | ลูกค้าหนี: 40%</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">มีคอนโดแถวพระราม9ไหมครับ งบ 3 ล้าน</div></div>
                  <div className="text-center py-6"><Clock size={24} className="text-[#d2d2d7] mx-auto mb-2" /><p className="text-[11px] text-[#d2d2d7]">รอ 2 ชั่วโมง...</p></div>
                  <div className="flex justify-start"><div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[75%]">สวัสดีครับ ต้องเช็คให้ก่อนนะครับ รอแป๊บ...</div></div>
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">ช้ามาก ไปถามนายหน้าคนอื่นแล้วครับ</div></div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">ตอบ: 3 วินาที | นัดดูทันที: +45%</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#2997ff] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">มีคอนโดแถวพระราม9ไหมครับ งบ 3 ล้าน</div></div>
                  <div className="flex justify-start">
                    <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[85%]">
                      <p className="font-medium mb-1.5">มีค่ะ! พบ 3 ห้องตรงเงื่อนไข</p>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-1.5 rounded bg-white/60">
                          <p className="font-medium">1. Life Asoke Rama 9</p>
                          <p className="text-[#86868b]">1BR 30 ตร.ม. ชั้น 22 วิวเมือง ฿3.2M</p>
                        </div>
                        <div className="p-1.5 rounded bg-white/60">
                          <p className="font-medium">2. Aspire Rama 9</p>
                          <p className="text-[#86868b]">1BR 28 ตร.ม. ชั้น 15 ตกแต่งครบ ฿2.9M</p>
                        </div>
                        <div className="p-1.5 rounded bg-white/60">
                          <p className="font-medium">3. The Base Garden Rama 9</p>
                          <p className="text-[#86868b]">Studio 26 ตร.ม. ชั้น 10 ใกล้ MRT ฿2.65M</p>
                        </div>
                      </div>
                      <p className="text-[#2997ff] mt-1.5">สนใจนัดดูห้องไหนคะ? จัดให้ได้เลย</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#86868b] px-2 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium">AI</span> 2.8 วินาที
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WORKFLOWS — with inline mini-demos ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">5 ระบบอัตโนมัติ</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">ทุกอย่างทำงาน 24/7 ไม่ต้องจ้างคนเพิ่ม</p>

          <div className="space-y-4">
            {[
              { icon: <MessageSquare size={20} />, title: "Property Inquiry Bot", color: "#30d158", desc: "LINE → ลูกค้าถามคอนโด → AI ค้นทรัพย์ตรง criteria ตอบทันที", saved: "ลด 90%", cost: "~฿500/เดือน",
                demo: (
                  <div className="mt-3 apple-card p-0 overflow-hidden">
                    <div className="px-3 py-2 bg-[#00C300] text-white text-[11px] font-medium">LINE OA — สอบถามทรัพย์</div>
                    <div className="p-3 space-y-2 bg-[#7494a5]/5">
                      <div className="flex justify-end"><div className="bg-[#06C755] text-white text-[11px] px-3 py-1.5 rounded-full">หาคอนโดสุขุมวิท งบ 3-4 ล้าน ใกล้ BTS</div></div>
                      <div className="flex justify-start">
                        <div className="bg-white text-[11px] px-3 py-2 rounded-xl shadow-sm max-w-[85%]">
                          <p className="font-medium mb-1">พบ 3 ห้องที่ตรง criteria</p>
                          <div className="space-y-1">
                            <div className="p-1.5 rounded bg-[#f5f5f7] text-[10px]"><p className="font-medium">The Base Sukhumvit 77</p><p className="text-[#86868b]">1BR 30 ตร.ม. ชั้น 15 ฿3.2M ใกล้ BTS อ่อนนุช</p></div>
                            <div className="p-1.5 rounded bg-[#f5f5f7] text-[10px]"><p className="font-medium">Ideo Mobi Sukhumvit 66</p><p className="text-[#86868b]">1BR 35 ตร.ม. ชั้น 22 วิวเมือง ฿3.8M</p></div>
                            <div className="p-1.5 rounded bg-[#f5f5f7] text-[10px]"><p className="font-medium">Aspire Sukhumvit 48</p><p className="text-[#86868b]">1BR 28 ตร.ม. ชั้น 10 ตกแต่งครบ ฿2.9M</p></div>
                          </div>
                          <p className="text-[#2997ff] text-[10px] mt-1">สนใจดูห้องไหนคะ?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) },
              { icon: <FileText size={20} />, title: "Listing Description Generator", color: "#af52de", desc: "ใส่ข้อมูลทรัพย์ → AI เขียน listing มืออาชีพ 3 แบบ", saved: "30นาที→30วินาที", cost: "~฿800/เดือน",
                demo: (
                  <div className="mt-3 apple-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#af52de]/10 text-[#af52de] font-medium">AI Generated</span>
                      <span className="text-[10px] text-[#86868b]">Ideo Mobi Sukhumvit 66</span>
                    </div>
                    <p className="text-[12px] font-medium text-[#1d1d1f] mb-1">คอนโดหรู ทำเลทอง ติด BTS อุดมสุข</p>
                    <p className="text-[11px] text-[#86868b] leading-relaxed">ห้อง 1 Bedroom 35 ตร.ม. ชั้น 22 วิวเมืองแบบ Panoramic ตกแต่งครบพร้อมอยู่ Built-in ทั้งห้อง ครัวปิดแยกส่วน ใกล้ BTS อุดมสุข เดินเพียง 100 เมตร</p>
                    <div className="flex flex-wrap gap-1 mt-2">{["คอนโดสุขุมวิท","ใกล้BTS","วิวเมือง","ตกแต่งครบ","1BR"].map(t => <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-[#af52de]/8 text-[#af52de]">{t}</span>)}</div>
                  </div>
                ) },
              { icon: <CalendarClock size={20} />, title: "Appointment Scheduler", color: "#2997ff", desc: "ลูกค้าสนใจ → AI นัดชมทรัพย์ + reminder อัตโนมัติ", saved: "-60% no-show", cost: "~฿400/เดือน",
                demo: (
                  <div className="mt-3 apple-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <CalendarClock size={14} className="text-[#2997ff]" />
                      <span className="text-[11px] font-medium text-[#1d1d1f]">ยืนยันการนัดชมทรัพย์</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#34c759]/10 text-[#34c759] font-medium ml-auto">ยืนยันแล้ว</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-[#f5f5f7]"><p className="text-[9px] text-[#86868b]">วันที่</p><p className="font-medium text-[#1d1d1f]">เสาร์ 22 มี.ค. 2026</p></div>
                      <div className="p-2 rounded-lg bg-[#f5f5f7]"><p className="text-[9px] text-[#86868b]">เวลา</p><p className="font-medium text-[#1d1d1f]">13:00 - 14:00</p></div>
                      <div className="p-2 rounded-lg bg-[#f5f5f7]"><p className="text-[9px] text-[#86868b]">ทรัพย์</p><p className="font-medium text-[#1d1d1f]">Ideo Mobi #1803</p></div>
                      <div className="p-2 rounded-lg bg-[#f5f5f7]"><p className="text-[9px] text-[#86868b]">นายหน้า</p><p className="font-medium text-[#1d1d1f]">คุณแพร 08x-xxx-xxxx</p></div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-[9px] text-[#86868b]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34c759]" /> Reminder ส่งก่อน 24 ชม. และ 1 ชม.
                    </div>
                  </div>
                ) },
              { icon: <BarChart3 size={20} />, title: "Market Price Analysis", color: "#ff9500", desc: "AI วิเคราะห์ราคาตลาด → แนะนำช่วงราคาที่เหมาะ", saved: "+15% ราคาดีขึ้น", cost: "~฿1,500/เดือน",
                demo: (
                  <div className="mt-3 apple-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-[#1d1d1f]">CMA Report — สุขุมวิท 1BR</span>
                    </div>
                    <div className="text-[10px]">
                      <div className="grid grid-cols-12 gap-1 pb-1.5 border-b border-black/[0.04] text-[#86868b] font-medium mb-1.5">
                        <span className="col-span-4">โครงการ</span>
                        <span className="col-span-2">ตร.ม.</span>
                        <span className="col-span-3">ราคา/ตร.ม.</span>
                        <span className="col-span-3">ขายได้</span>
                      </div>
                      {[
                        { name: "Ideo Mobi 66", sqm: "35", psm: "฿109K", sold: "45 วัน" },
                        { name: "The Base 77", sqm: "30", psm: "฿95K", sold: "32 วัน" },
                        { name: "Life Asoke", sqm: "32", psm: "฿112K", sold: "28 วัน" },
                        { name: "Rhythm Asoke", sqm: "28", psm: "฿125K", sold: "55 วัน" },
                      ].map((r) => (
                        <div key={r.name} className="grid grid-cols-12 gap-1 py-1 border-b border-black/[0.02]">
                          <span className="col-span-4 text-[#1d1d1f] font-medium truncate">{r.name}</span>
                          <span className="col-span-2 text-[#86868b]">{r.sqm}</span>
                          <span className="col-span-3 text-[#1d1d1f]">{r.psm}</span>
                          <span className="col-span-3 text-[#86868b]">{r.sold}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 p-2 rounded-lg bg-[#ff9500]/5 text-[10px]">
                      <p className="font-medium text-[#ff9500]">AI แนะนำ: ตั้งราคา ฿105-115K/ตร.ม.</p>
                      <p className="text-[#86868b]">ขายได้ภายใน 30-40 วัน (เฉลี่ยตลาด)</p>
                    </div>
                  </div>
                ) },
              { icon: <Users size={20} />, title: "Lead Scoring & Follow-up", color: "#ff2d55", desc: "AI จัดลำดับลูกค้า Hot/Warm/Cold → follow-up อัตโนมัติ", saved: "+45% ปิดขาย", cost: "~฿1,000/เดือน",
                demo: (
                  <div className="mt-3 apple-card p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-[#1d1d1f]">Lead Card — คุณสมชาย</span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#ff2d55] text-white font-bold ml-auto">HOT 92/100</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between p-2 rounded-lg bg-[#f5f5f7]">
                        <span className="text-[#86868b]">สนใจ</span>
                        <span className="text-[#1d1d1f] font-medium">คอนโด 1BR สุขุมวิท</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-[#f5f5f7]">
                        <span className="text-[#86868b]">งบ</span>
                        <span className="text-[#1d1d1f] font-medium">3-4 ล้านบาท</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-[#f5f5f7]">
                        <span className="text-[#86868b]">พฤติกรรม</span>
                        <span className="text-[#1d1d1f] font-medium">ดู 8 ห้อง, ถามราคา 3 ครั้ง</span>
                      </div>
                      <div className="flex justify-between p-2 rounded-lg bg-[#f5f5f7]">
                        <span className="text-[#86868b]">ช่องทาง</span>
                        <span className="text-[#1d1d1f] font-medium">LINE + เว็บไซต์</span>
                      </div>
                    </div>
                    <div className="mt-2 p-2 rounded-lg bg-[#ff2d55]/5 text-[10px]">
                      <p className="font-medium text-[#ff2d55]">แนะนำ: โทรหาภายใน 5 นาที</p>
                      <p className="text-[#86868b]">เสนอ Ideo Mobi ชั้น 22 วิวเมือง (ตรง criteria ที่สุด)</p>
                    </div>
                  </div>
                ) },
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
          <p className="text-[17px] text-[#86868b] text-center mb-10">ดูทุกอย่างในที่เดียว — จาก lead ถึงปิดดีล</p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.05]">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">Real Estate AI Dashboard</span>
            </div>
            <div className="p-6">
              {/* Lead Pipeline Funnel */}
              <div className="mb-6">
                <p className="text-[11px] text-[#86868b] uppercase tracking-wider font-medium mb-3">Lead Pipeline</p>
                <div className="flex items-end gap-2">
                  {[
                    { label: "สอบถาม", count: 12, color: "#2997ff", h: "h-20" },
                    { label: "นัดดู", count: 5, color: "#ff9500", h: "h-14" },
                    { label: "เจรจา", count: 3, color: "#5856d6", h: "h-10" },
                    { label: "ปิดดีล", count: 1, color: "#34c759", h: "h-6" },
                  ].map((stage, i) => (
                    <div key={stage.label} className="flex-1 text-center">
                      <p className="text-[16px] font-semibold mb-1" style={{ color: stage.color }}>{stage.count}</p>
                      <div className={`${stage.h} rounded-t-lg mx-1`} style={{ background: stage.color + "20" }} />
                      <p className="text-[9px] text-[#86868b] mt-1">{stage.label}</p>
                      {i < 3 && <div className="hidden" />}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {["→","→","→"].map((a, i) => <span key={i} className="text-[#d2d2d7] text-[11px]">{a}</span>)}
                </div>
              </div>

              {/* Today's Appointments */}
              <div className="mb-6">
                <p className="text-[11px] text-[#86868b] uppercase tracking-wider font-medium mb-3">นัดดูวันนี้</p>
                <div className="space-y-1.5">
                  {[
                    { time: "10:00", client: "คุณสมชาย", unit: "Life Asoke #2205", status: "ยืนยันแล้ว", sc: "#34c759" },
                    { time: "13:00", client: "คุณพิมพ์", unit: "Ideo Mobi #1803", status: "รอยืนยัน", sc: "#ff9500" },
                    { time: "15:30", client: "คุณวิภา", unit: "The Base #910", status: "ยืนยันแล้ว", sc: "#34c759" },
                  ].map((apt) => (
                    <div key={apt.time} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] font-mono text-[#86868b]">{apt.time}</span>
                        <div>
                          <p className="text-[12px] font-medium text-[#1d1d1f]">{apt.client}</p>
                          <p className="text-[10px] text-[#86868b]">{apt.unit}</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: apt.sc + "12", color: apt.sc }}>{apt.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insight Card */}
              <div className="p-4 rounded-xl bg-[#2997ff]/5 border border-[#2997ff]/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[12px] text-[#2997ff] font-semibold">AI Insight</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#2997ff]/10 text-[#2997ff] font-medium">upsell</span>
                </div>
                <p className="text-[12px] text-[#1d1d1f]">คุณสมชาย สนใจ 1BR วิวเมือง งบ 3.5M — ห้อง #2408 ชั้นสูงกว่า วิวดีกว่า ราคา ฿3.7M (+200K)</p>
                <p className="text-[10px] text-[#86868b] mt-1">โอกาส upsell 68% — ลูกค้าถามเรื่องวิวบ่อย แนะนำเสนอชั้น 24 เปรียบเทียบ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING with ROI ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับอสังหาริมทรัพย์</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Solo Agent", price: "฿14,900", monthly: "฿1,500-3,000", color: "#2997ff", features: ["LINE Inquiry Bot (500 msg)", "Listing Description Generator", "Appointment Scheduler พื้นฐาน", "Support 30 วัน"], best: "นายหน้าเดี่ยว 1-20 ทรัพย์" },
              { name: "Agency", price: "฿39,900", monthly: "฿3,500-8,000", color: "#5856d6", badge: "แนะนำ", features: ["ทุกอย่างใน Solo Agent", "LINE Bot ไม่จำกัด", "Market Price Analysis", "Lead Scoring & Follow-up", "Appointment + Reminder", "Training ทีม 2 ชม."], best: "สำนักงาน 3-10 agents" },
              { name: "Developer", price: "฿79,900", monthly: "฿8,000-20,000", color: "#af52de", features: ["ทุกอย่างใน Agency", "Multi-project dashboard", "Custom CMA report", "API integration กับ CRM", "Multi-user + permissions", "On-site training 1 วัน"], best: "Developer / โครงการใหญ่" },
            ].map((plan) => (
              <div key={plan.name} className={`apple-card p-6 ${plan.badge ? "ring-2 ring-[#5856d6]/20" : ""}`}>
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
              <div className="p-4 rounded-xl bg-[#ff3b30]/5"><p className="text-[11px] text-[#86868b]">จ้างแอดมินตอบแชท + จัดการ lead</p><p className="text-[20px] font-semibold text-[#ff3b30]">฿25,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#34c759]/5"><p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p><p className="text-[20px] font-semibold text-[#34c759]">฿3,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5"><p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p><p className="text-[20px] font-semibold text-[#2997ff]">฿264,000</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยปิดดีลอสังหาฯ?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าธุรกิจคุณมีกี่ทรัพย์ เราออกแบบ workflow ให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
