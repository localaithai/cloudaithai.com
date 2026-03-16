"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, MessageSquare, Package, TrendingUp, Star, AlertTriangle, ChevronDown, Check, ArrowRight, Clock, DollarSign, BarChart3, Bell, Truck, FileText, Users } from "lucide-react";

/* ─── E-COMMERCE PAGE — Every section has industry-specific UI ─── */

export default function EcommerceSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <ShoppingCart size={14} className="text-[#2997ff]" />
              <span className="text-[12px] font-medium text-[#2997ff]">E-commerce AI Solution</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">ร้านค้าออนไลน์</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              ตอบแชทลูกค้า 24/7 จัดการ order อัตโนมัติ สร้าง content สินค้า วิเคราะห์ยอดขาย — ลดงาน 80%
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — with real UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่ร้านค้าออนไลน์เจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Inbox overflow mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">💬 กล่องข้อความ</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">127 ยังไม่อ่าน</span>
              </div>
              <div className="p-4 space-y-2">
                {["สินค้านี้มีสี Champagne ไหมคะ", "ส่งกี่วันถึงคะ?", "มีไซส์ XL ไหม", "ขอเลข tracking หน่อย", "ลดราคาอีกได้ไหม"].map((msg, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#fafafa]">
                    <div className="w-7 h-7 rounded-full bg-[#e5e5ea] shrink-0" />
                    <p className="text-[12px] text-[#1d1d1f] truncate flex-1">{msg}</p>
                    <span className="text-[9px] text-[#86868b] shrink-0">{i + 1}h</span>
                  </div>
                ))}
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-1">ตอบไม่ทัน ลูกค้าหนีไปร้านอื่น 😢</p>
              </div>
            </motion.div>

            {/* Order errors mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">📦 Order วันนี้</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">3 ผิดพลาด</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { id: "#1082", status: "ส่งผิดสี", ok: false },
                  { id: "#1079", status: "จำนวนไม่ตรง", ok: false },
                  { id: "#1075", status: "ลืมใส่ของแถม", ok: false },
                  { id: "#1073", status: "ส่งแล้ว ✓", ok: true },
                  { id: "#1070", status: "ส่งแล้ว ✓", ok: true },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                    <span className="text-[12px] font-mono text-[#1d1d1f]">{o.id}</span>
                    <span className={`text-[11px] ${o.ok ? "text-[#34c759]" : "text-[#ff3b30]"}`}>{o.ok ? "✅" : "❌"} {o.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content pain */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5856d6]/8 flex items-center justify-center shrink-0 text-[#5856d6]"><FileText size={20} /></div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">เขียน description ไม่ทัน</h3>
                  <p className="text-[12px] text-[#86868b]">200+ สินค้า × 30 นาที/ชิ้น = <span className="text-[#5856d6] font-medium">100 ชม./เดือน</span> แค่เขียน content</p>
                </div>
              </div>
            </motion.div>

            {/* Stock pain */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff3b30]/8 flex items-center justify-center shrink-0 text-[#ff3b30]"><AlertTriangle size={20} /></div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1">สินค้าหมด ไม่รู้ตัว</h3>
                  <p className="text-[12px] text-[#86868b]">ลูกค้าสั่ง แต่ของหมด → refund + เสียลูกค้า <span className="text-[#ff3b30] font-medium">ยิ่งหลาย platform ยิ่ง sync ไม่ทัน</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side chat mockups ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">เปลี่ยนจากทำมือ เป็นอัตโนมัติ</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">❌ ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">ตอบ: 45 นาที | ลูกค้าหนี: 30%</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[70%]">มีสี Champagne ไหมคะ?</div></div>
                  <div className="text-center py-6"><Clock size={24} className="text-[#d2d2d7] mx-auto mb-2" /><p className="text-[11px] text-[#d2d2d7]">รอ 45 นาที...</p></div>
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[70%]">ไม่ตอบเหรอคะ ไปร้านอื่นนะ</div></div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">✅ หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">ตอบ: 2 วินาที | ปิดการขาย: +40%</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#2997ff] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[70%]">มีสี Champagne ไหมคะ?</div></div>
                  <div className="flex justify-start">
                    <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[80%]">
                      <p>มีค่ะ! 🎨 Champagne Gold</p>
                      <p className="text-[#86868b] mt-1">📦 เหลือ 12 ชิ้น | 💰 ฿890 (ลด 15%)</p>
                      <p className="text-[#86868b]">🚚 ส่งฟรี ถึงพรุ่งนี้</p>
                      <p className="text-[#2997ff] mt-1">สั่งเลยไหมคะ? 😊</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#86868b] px-2 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium">AI</span> 1.8 วินาที
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
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">6 ระบบอัตโนมัติ</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">ทุกอย่างทำงาน 24/7 ไม่ต้องจ้างคนเพิ่ม</p>

          <div className="space-y-4">
            {[
              { icon: <MessageSquare size={20} />, title: "ตอบแชทอัตโนมัติ", color: "#2997ff", desc: "LINE/FB/IG → AI ตอบจาก product DB จริง", saved: "ลด 90%", cost: "~฿450/เดือน",
                demo: <div className="space-y-1.5 mt-3"><div className="flex justify-end"><div className="bg-[#2997ff] text-white text-[11px] px-3 py-1.5 rounded-full">ชุดเดรสสีชมพูราคาเท่าไหร่</div></div><div className="flex justify-start"><div className="bg-[#f5f5f7] text-[11px] px-3 py-1.5 rounded-full">ชุด "Bloom" ฿1,290→฿990 📦 มี S/M/L</div></div></div> },
              { icon: <Package size={20} />, title: "จัดการ Order อัตโนมัติ", color: "#ff9500", desc: "order เข้า → ตรวจ stock → invoice → แจ้งคลัง → tracking", saved: "ลด error 95%", cost: "~฿300/เดือน",
                demo: <div className="flex items-center gap-1 mt-3 overflow-x-auto">{["📥 รับ", "📋 stock", "🧾 invoice", "📦 คลัง", "🚚 tracking"].map((s, i) => <span key={i} className="text-[9px] px-2 py-1 rounded-full bg-[#ff9500]/8 text-[#ff9500] font-medium whitespace-nowrap shrink-0">{s}</span>)}</div> },
              { icon: <FileText size={20} />, title: "สร้าง Product Content", color: "#5856d6", desc: "ใส่ชื่อ+รูป → AI เขียน title, desc, SEO keywords", saved: "30นาที→30วินาที", cost: "~฿200/เดือน",
                demo: <div className="mt-3 p-3 rounded-lg bg-[#f5f5f7]"><p className="text-[11px] font-medium text-[#1d1d1f]">กระเป๋า "Luna" หนัง PU Premium</p><p className="text-[10px] text-[#86868b] mt-1">มินิมอล กันน้ำ 5 ช่อง ใส่ MacBook 13"</p><div className="flex gap-1 mt-1.5">{["กระเป๋า","หนัง PU","กันน้ำ"].map(t => <span key={t} className="text-[8px] px-1.5 py-0.5 rounded bg-[#5856d6]/8 text-[#5856d6]">{t}</span>)}</div></div> },
              { icon: <Bell size={20} />, title: "แจ้งเตือน Stock", color: "#ff3b30", desc: "monitor ทุก platform → แจ้ง LINE เมื่อต่ำ → แนะนำ reorder", saved: "0% out-of-stock", cost: "~฿100/เดือน", demo: null },
              { icon: <Star size={20} />, title: "จัดการ Review", color: "#34c759", desc: "1-3★→draft ตอบ+แจ้งทีม | 4-5★→ขอบคุณ+ขอ share", saved: "ตอบ 100%", cost: "~฿200/เดือน", demo: null },
              { icon: <BarChart3 size={20} />, title: "Sales Analytics", color: "#2997ff", desc: "ทุกเช้า 8 โมง → สรุปยอด top products revenue → ส่ง LINE", saved: "ไม่ต้องเปิด dashboard", cost: "~฿150/เดือน", demo: null },
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
              <span className="text-[12px] text-[#86868b] font-medium ml-2">E-commerce AI Dashboard</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "ยอดขายวันนี้", value: "฿23,450", change: "+12%", color: "#34c759" },
                  { label: "ออเดอร์", value: "47", change: "+8%", color: "#2997ff" },
                  { label: "แชทตอบแล้ว", value: "156/162", change: "96%", color: "#5856d6" },
                  { label: "Review ใหม่", value: "8", change: "4.7★", color: "#ff9500" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-[#fafafa]">
                    <p className="text-[10px] text-[#86868b]">{s.label}</p>
                    <p className="text-[18px] font-semibold text-[#1d1d1f]">{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: s.color }}>{s.change}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5">
                {[
                  { id: "#1089", cust: "คุณพิมพ์", items: "เดรส Bloom x1", total: "฿990", status: "กำลังส่ง", sc: "#2997ff" },
                  { id: "#1088", cust: "คุณสมชาย", items: "กระเป๋า Luna x2", total: "฿1,780", status: "เสร็จ", sc: "#34c759" },
                  { id: "#1087", cust: "คุณแก้ว", items: "รองเท้า Nova x1", total: "฿2,490", status: "แพ็ค", sc: "#ff9500" },
                ].map((o) => (
                  <div key={o.id} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                    <div className="flex items-center gap-3"><span className="text-[12px] font-mono text-[#86868b]">{o.id}</span><div><p className="text-[12px] font-medium text-[#1d1d1f]">{o.cust}</p><p className="text-[10px] text-[#86868b]">{o.items}</p></div></div>
                    <div className="text-right"><p className="text-[12px] font-medium text-[#1d1d1f]">{o.total}</p><span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: o.sc + "12", color: o.sc }}>{o.status}</span></div>
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
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับร้านค้าออนไลน์</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Starter", price: "฿19,900", monthly: "฿800-2,000", color: "#2997ff", features: ["ตอบแชท AI (LINE/FB)", "จัดการ order", "Stock alerts", "3 workflows", "Support 30 วัน"], best: "1-50 order/วัน" },
              { name: "Professional", price: "฿39,900", monthly: "฿2,000-5,000", color: "#5856d6", badge: "แนะนำ", features: ["ทุกอย่างใน Starter", "สร้าง content AI", "Review management", "Sales analytics", "10 workflows", "Training 2 ชม."], best: "50-200 order/วัน" },
              { name: "Enterprise", price: "฿69,900", monthly: "฿3,000-8,000", color: "#af52de", features: ["ทุกอย่างใน Pro", "Multi-platform sync", "Custom integration", "Dashboard ครบ", "Workflow ไม่จำกัด", "Training on-site"], best: "200+ order/วัน" },
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
            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">💡 คุ้มค่าแค่ไหน?</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-[#ff3b30]/5"><p className="text-[11px] text-[#86868b]">จ้างคนตอบแชท</p><p className="text-[20px] font-semibold text-[#ff3b30]">฿15,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#34c759]/5"><p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p><p className="text-[20px] font-semibold text-[#34c759]">฿1,500/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5"><p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p><p className="text-[20px] font-semibold text-[#2997ff]">฿162,000</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยขายของ?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าร้านคุณขายอะไร เราออกแบบ workflow ให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
