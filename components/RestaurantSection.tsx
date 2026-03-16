"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, MessageSquare, Package, Star, DollarSign, ChevronDown, Check, ArrowRight, Clock, BarChart3, Bell, AlertTriangle, Calculator, Flame, TrendingUp } from "lucide-react";

/* ─── RESTAURANT PAGE — Every section has industry-specific UI mockups ─── */

export default function RestaurantSection() {
  const [expandedWorkflow, setExpandedWorkflow] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-6">
              <UtensilsCrossed size={14} className="text-[#ff9500]" />
              <span className="text-[12px] font-medium text-[#ff9500]">Restaurant & F&B AI Solution</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-3">
              AI สำหรับ<span className="gradient-text">ร้านอาหาร & F&B</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[520px] mx-auto mb-8">
              รับ order อัตโนมัติ จัดการ stock วัตถุดิบ ตอบรีวิว คำนวณ food cost สรุปยอดขาย — ลดงาน 70%
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — with real UI mockups ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-12">ปัญหาที่ร้านอาหารเจอทุกวัน</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* LINE inbox overflowing with food orders */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff3b30]">LINE OA — ช่วง Peak Hour</span>
                <span className="text-[11px] font-bold bg-[#ff3b30] text-white px-2 py-0.5 rounded-full">43 ข้อความใหม่</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { msg: "สั่งกะเพราหมูสับไข่ดาว 3 จาน", time: "11:42" },
                  { msg: "ต้มยำกุ้ง 2 ถ้วย ส่ง delivery", time: "11:43" },
                  { msg: "เมนูวันนี้มีอะไรบ้างคะ", time: "11:44" },
                  { msg: "order #231 ยังไม่มาเลยครับ", time: "11:45" },
                  { msg: "ผัดไทย 1 + ส้มตำ 2 รับที่ร้าน", time: "11:46" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-[#fafafa]">
                    <div className="w-7 h-7 rounded-full bg-[#06c755]/15 shrink-0 flex items-center justify-center"><MessageSquare size={12} className="text-[#06c755]" /></div>
                    <p className="text-[12px] text-[#1d1d1f] truncate flex-1">{item.msg}</p>
                    <span className="text-[9px] text-[#86868b] shrink-0">{item.time}</span>
                  </div>
                ))}
                <p className="text-[12px] text-[#ff3b30] text-center font-medium pt-1">พนักงานตอบไม่ทัน ลูกค้ายกเลิก order</p>
              </div>
            </motion.div>

            {/* Ingredient running out mockup */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#ff9500]/5 border-b border-[#ff9500]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#ff9500]">Stock วัตถุดิบวันนี้</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">2 รายการวิกฤต</span>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { name: "กุ้ง", qty: "เหลือ 3 ตัว", status: "หมดเกือบ", color: "#ff3b30" },
                  { name: "ผักชี", qty: "หมด", status: "หมดแล้ว", color: "#ff3b30" },
                  { name: "หมูสับ", qty: "เหลือ 0.5 กก.", status: "ใกล้หมด", color: "#ff9500" },
                  { name: "ไข่ไก่", qty: "เหลือ 8 ฟอง", status: "ใกล้หมด", color: "#ff9500" },
                  { name: "ข้าวสาร", qty: "เหลือ 5 กก.", status: "ปกติ", color: "#34c759" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2 rounded-lg bg-[#fafafa]">
                    <span className="text-[12px] text-[#1d1d1f]">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-[#86868b]">{item.qty}</span>
                      <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: item.color + "12", color: item.color }}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Google reviews with unanswered negative reviews */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#5856d6]/5 border-b border-[#5856d6]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#5856d6]">Google Reviews</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">2 รีวิวลบยังไม่ตอบ</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="p-3 rounded-lg bg-[#ff3b30]/3 border border-[#ff3b30]/8">
                  <div className="flex items-center gap-1 mb-1">{[1,2].map(n => <Star key={n} size={10} className="text-[#ff9500] fill-[#ff9500]" />)}{[3,4,5].map(n => <Star key={n} size={10} className="text-[#d2d2d7]" />)}<span className="text-[9px] text-[#86868b] ml-1">2 สัปดาห์ก่อน</span></div>
                  <p className="text-[11px] text-[#1d1d1f]">รออาหารนานมาก 45 นาที สั่ง 3 อย่างมา 2 อย่าง ไม่มีใครมาดูแล</p>
                  <p className="text-[10px] text-[#ff3b30] mt-1 font-medium">ยังไม่ได้ตอบ</p>
                </div>
                <div className="p-3 rounded-lg bg-[#ff3b30]/3 border border-[#ff3b30]/8">
                  <div className="flex items-center gap-1 mb-1"><Star size={10} className="text-[#ff9500] fill-[#ff9500]" />{[2,3,4,5].map(n => <Star key={n} size={10} className="text-[#d2d2d7]" />)}<span className="text-[9px] text-[#86868b] ml-1">3 วันก่อน</span></div>
                  <p className="text-[11px] text-[#1d1d1f]">อาหารรสชาติก็ได้ แต่พนักงานไม่สุภาพเลย ถามอะไรก็ไม่ตอบ</p>
                  <p className="text-[10px] text-[#ff3b30] mt-1 font-medium">ยังไม่ได้ตอบ</p>
                </div>
                <p className="text-[10px] text-[#86868b] text-center">Rating ร่วงจาก 4.3 เหลือ 3.8 ใน 2 เดือน</p>
              </div>
            </motion.div>

            {/* Messy food cost spreadsheet */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="apple-card p-0 overflow-hidden">
              <div className="px-5 py-3 bg-[#2997ff]/5 border-b border-[#2997ff]/10 flex items-center justify-between">
                <span className="text-[13px] font-medium text-[#2997ff]">Food Cost — Excel</span>
                <span className="text-[11px] text-[#ff3b30] font-medium">ตัวเลขผิด</span>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="border-b border-black/[0.06]">
                        <th className="text-left py-1.5 text-[#86868b] font-medium">เมนู</th>
                        <th className="text-right py-1.5 text-[#86868b] font-medium">ต้นทุน</th>
                        <th className="text-right py-1.5 text-[#86868b] font-medium">ขาย</th>
                        <th className="text-right py-1.5 text-[#86868b] font-medium">FC%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { menu: "กะเพราหมูสับ", cost: "฿28", sell: "฿60", fc: "47%", bad: true },
                        { menu: "ต้มยำกุ้ง", cost: "฿95", sell: "฿180", fc: "53%", bad: true },
                        { menu: "ผัดไทย", cost: "฿22", sell: "฿70", fc: "31%", bad: false },
                        { menu: "ส้มตำ", cost: "฿18", sell: "฿50", fc: "36%", bad: false },
                        { menu: "ข้าวมันไก่", cost: "฿35", sell: "฿55", fc: "64%", bad: true },
                      ].map((r) => (
                        <tr key={r.menu} className="border-b border-black/[0.03]">
                          <td className="py-1.5 text-[#1d1d1f]">{r.menu}</td>
                          <td className="py-1.5 text-right text-[#86868b]">{r.cost}</td>
                          <td className="py-1.5 text-right text-[#86868b]">{r.sell}</td>
                          <td className={`py-1.5 text-right font-medium ${r.bad ? "text-[#ff3b30]" : "text-[#34c759]"}`}>{r.fc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-[#ff3b30] text-center mt-2 font-medium">ราคาวัตถุดิบขึ้นแล้ว แต่ไม่ได้อัพเดท — FC% จริงสูงกว่านี้</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE/AFTER — side-by-side chat mockups ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">ก่อน vs หลัง ใช้ AI</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">จากวุ่นวาย เป็นอัตโนมัติ</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#ff3b30] uppercase tracking-wider mb-3 text-center">ก่อนใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
                <div className="px-4 py-2.5 bg-[#ff3b30]/5 text-[12px] text-[#ff3b30] font-medium text-center">Peak Hour 11:30-13:00 | พนักงาน 2 คน</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">สั่งกะเพราหมูสับไข่ดาว 2 จาน ครับ</div></div>
                  <div className="text-center py-2"><Clock size={20} className="text-[#d2d2d7] mx-auto mb-1" /><p className="text-[10px] text-[#d2d2d7]">โทรศัพท์ดัง + ลูกค้า walk-in</p><p className="text-[10px] text-[#d2d2d7]">ลืมตอบ LINE...</p></div>
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">เฮ้ยย ตอบหน่อย สั่งไปตั้งนานแล้ว</div></div>
                  <div className="flex justify-end"><div className="bg-[#e5e5ea] text-[#1d1d1f] text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">ไม่สั่งแล้ว ไปร้านอื่นดีกว่า</div></div>
                  <div className="p-2 rounded-lg bg-[#ff3b30]/5 text-center">
                    <p className="text-[10px] text-[#ff3b30] font-medium">เสีย order: ฿420 | วันละ 8-12 order หลุด</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-[13px] font-semibold text-[#34c759] uppercase tracking-wider mb-3 text-center">หลังใช้ AI</p>
              <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
                <div className="px-4 py-2.5 bg-[#34c759]/5 text-[12px] text-[#34c759] font-medium text-center">AI ตอบทันที | ส่ง order เข้าครัวอัตโนมัติ</div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-end"><div className="bg-[#06c755] text-white text-[12px] px-3 py-2 rounded-2xl rounded-br-sm max-w-[75%]">สั่งกะเพราหมูสับไข่ดาว 2 จาน ครับ</div></div>
                  <div className="flex justify-start">
                    <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[12px] px-3 py-2.5 rounded-2xl rounded-bl-sm max-w-[80%]">
                      <p className="font-medium">รับออเดอร์ค่ะ! #248</p>
                      <p className="text-[#86868b] mt-1">ข้าวกะเพราหมูสับไข่ดาว x2 — ฿120</p>
                      <p className="text-[#86868b]">เวลาเตรียม ~12 นาที</p>
                      <p className="text-[#2997ff] mt-1">เพิ่มเครื่องดื่มไหมคะ? ชามะนาว ฿25</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#86868b] px-2 flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-medium">AI</span> 1.5 วินาที — ส่งเข้าครัวแล้ว
                  </div>
                  <div className="p-2 rounded-lg bg-[#34c759]/5 text-center">
                    <p className="text-[10px] text-[#34c759] font-medium">0 order หลุด | upsell +15% ต่อบิล</p>
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
              { icon: <MessageSquare size={20} />, title: "LINE Order Bot", color: "#06c755", desc: "ลูกค้าสั่งผ่าน LINE → AI รับ order ทันที → ส่งเข้าครัว", saved: "ลด 70%", cost: "~฿500/เดือน",
                demo: (
                  <div className="space-y-2 mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <div className="flex justify-end"><div className="bg-[#06c755] text-white text-[11px] px-3 py-1.5 rounded-full">กะเพราหมูสับไข่ดาว 2 จาน ผัดไทยกุ้ง 1</div></div>
                    <div className="flex justify-start">
                      <div className="bg-white text-[11px] px-3 py-2 rounded-xl shadow-sm">
                        <p className="font-medium">Order #248</p>
                        <p className="text-[#86868b]">กะเพราหมูสับไข่ดาว x2 — ฿120</p>
                        <p className="text-[#86868b]">ผัดไทยกุ้ง x1 — ฿90</p>
                        <p className="font-medium mt-1">รวม ฿210 | ~15 นาที</p>
                        <p className="text-[#2997ff] text-[10px] mt-1">เพิ่มน้ำดื่มไหมคะ?</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#86868b]"><span className="px-1.5 py-0.5 rounded bg-[#06c755]/10 text-[#06c755] font-medium">AI</span>1.5 วินาที — ส่งเข้าครัวแล้ว</div>
                  </div>
                ) },
              { icon: <Bell size={20} />, title: "Inventory Alerts", color: "#ff9500", desc: "monitor stock วัตถุดิบ real-time → แจ้งเตือน LINE ทันที", saved: "0% หมด stock", cost: "~฿400/เดือน",
                demo: (
                  <div className="mt-3 space-y-1.5">
                    {[
                      { name: "กุ้งสด", qty: "3 ตัว", level: "w-[12%]", color: "#ff3b30", tag: "สั่งด่วน" },
                      { name: "หมูสับ", qty: "0.5 กก.", level: "w-[20%]", color: "#ff9500", tag: "ใกล้หมด" },
                      { name: "ไข่ไก่", qty: "24 ฟอง", level: "w-[50%]", color: "#ff9500", tag: "ปานกลาง" },
                      { name: "ข้าวสาร", qty: "8 กก.", level: "w-[80%]", color: "#34c759", tag: "ปกติ" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center gap-3 p-2 rounded-lg bg-[#f5f5f7]">
                        <span className="text-[11px] text-[#1d1d1f] w-14 shrink-0">{item.name}</span>
                        <div className="flex-1 h-2 rounded-full bg-black/[0.04] overflow-hidden"><div className={`h-full rounded-full ${item.level}`} style={{ background: item.color, width: item.level.replace("w-[","").replace("]","") }} /></div>
                        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full shrink-0" style={{ background: item.color + "12", color: item.color }}>{item.tag}</span>
                      </div>
                    ))}
                  </div>
                ) },
              { icon: <Star size={20} />, title: "Review Auto-Reply", color: "#ff2d55", desc: "รีวิวเข้า → AI วิเคราะห์ sentiment → draft คำตอบ", saved: "ตอบ 100%", cost: "~฿500/เดือน",
                demo: (
                  <div className="mt-3 space-y-3">
                    <div className="p-3 rounded-xl bg-[#ff3b30]/3 border border-[#ff3b30]/8">
                      <div className="flex items-center gap-1 mb-1">{[1,2].map(n => <Star key={n} size={9} className="text-[#ff9500] fill-[#ff9500]" />)}{[3,4,5].map(n => <Star key={n} size={9} className="text-[#d2d2d7]" />)}<span className="text-[9px] text-[#86868b] ml-1">ลูกค้า</span></div>
                      <p className="text-[10px] text-[#1d1d1f]">อาหารมาช้ามาก สั่ง 3 อย่างมาแค่ 2 ไม่มีใครมาดูแล</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#34c759]/5 border border-[#34c759]/10">
                      <div className="flex items-center gap-1.5 mb-1"><span className="text-[9px] px-1.5 py-0.5 rounded bg-[#2997ff]/10 text-[#2997ff] font-medium">AI Draft</span></div>
                      <p className="text-[10px] text-[#1d1d1f]">ขอบคุณสำหรับ feedback นะคะ ทางร้านต้องขออภัยจริงๆ ที่อาหารล่าช้าและมีรายการตกหล่น เราจะปรับปรุงทันทีค่ะ ครั้งหน้ามาทาน ลด 20% เลยนะคะ</p>
                    </div>
                  </div>
                ) },
              { icon: <Calculator size={20} />, title: "Food Cost Calculator", color: "#2997ff", desc: "คำนวณต้นทุนทุกเมนู → แจ้งเมื่อ FC% เกิน target", saved: "FC ลด 10%", cost: "~฿600/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <p className="text-[11px] font-medium text-[#1d1d1f] mb-2">ต้มยำกุ้ง — สูตรต้นทุน</p>
                    <div className="space-y-1">
                      {[
                        { ing: "กุ้งสด 5 ตัว", price: "฿45" },
                        { ing: "น้ำพริกเผา", price: "฿8" },
                        { ing: "เห็ดฟาง", price: "฿12" },
                        { ing: "มะนาว + ใบมะกรูด", price: "฿5" },
                        { ing: "น้ำสต็อก + เครื่องปรุง", price: "฿10" },
                      ].map((item) => (
                        <div key={item.ing} className="flex items-center justify-between text-[10px]">
                          <span className="text-[#86868b]">{item.ing}</span>
                          <span className="text-[#1d1d1f]">{item.price}</span>
                        </div>
                      ))}
                      <div className="border-t border-black/[0.06] pt-1 mt-1 flex items-center justify-between text-[11px] font-medium">
                        <span className="text-[#1d1d1f]">ต้นทุนรวม ฿80 | ขาย ฿180</span>
                        <span className="text-[#ff9500]">FC 44%</span>
                      </div>
                      <p className="text-[9px] text-[#ff3b30] mt-1">เกิน target 35% — แนะนำ: ลดกุ้งเหลือ 4 ตัว หรือปรับราคาเป็น ฿199</p>
                    </div>
                  </div>
                ) },
              { icon: <BarChart3 size={20} />, title: "Daily Sales Report", color: "#5856d6", desc: "ทุกคืน → AI สรุปยอดขาย + top dishes + food cost %", saved: "ขายเพิ่ม 20%", cost: "~฿800/เดือน",
                demo: (
                  <div className="mt-3 p-3 rounded-xl bg-[#f5f5f7]">
                    <p className="text-[11px] font-medium text-[#1d1d1f] mb-2">รายงานวันนี้ — 16 มี.ค. 2569</p>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-white text-center"><p className="text-[9px] text-[#86868b]">ยอดขาย</p><p className="text-[14px] font-semibold text-[#34c759]">฿18,450</p></div>
                      <div className="p-2 rounded-lg bg-white text-center"><p className="text-[9px] text-[#86868b]">จำนวนบิล</p><p className="text-[14px] font-semibold text-[#2997ff]">67</p></div>
                      <div className="p-2 rounded-lg bg-white text-center"><p className="text-[9px] text-[#86868b]">FC%</p><p className="text-[14px] font-semibold text-[#ff9500]">33%</p></div>
                    </div>
                    <p className="text-[10px] text-[#86868b] mb-1">Top 3 เมนู:</p>
                    <div className="space-y-1">
                      {[
                        { rank: "1", menu: "กะเพราหมูสับ", qty: "32 จาน", pct: "w-[85%]" },
                        { rank: "2", menu: "ต้มยำกุ้ง", qty: "18 ถ้วย", pct: "w-[55%]" },
                        { rank: "3", menu: "ผัดไทย", qty: "15 จาน", pct: "w-[45%]" },
                      ].map((item) => (
                        <div key={item.rank} className="flex items-center gap-2">
                          <span className="text-[10px] text-[#5856d6] font-medium w-3">{item.rank}</span>
                          <span className="text-[10px] text-[#1d1d1f] w-24 shrink-0">{item.menu}</span>
                          <div className="flex-1 h-1.5 rounded-full bg-black/[0.04] overflow-hidden"><div className="h-full rounded-full bg-[#5856d6]" style={{ width: item.pct.replace("w-[","").replace("]","") }} /></div>
                          <span className="text-[9px] text-[#86868b] shrink-0">{item.qty}</span>
                        </div>
                      ))}
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
          <p className="text-[17px] text-[#86868b] text-center mb-10">ดูทุกอย่างในที่เดียว — ยอดขาย ออเดอร์ stock ครบจบ</p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.05]">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]" /><div className="w-3 h-3 rounded-full bg-[#febc2e]" /><div className="w-3 h-3 rounded-full bg-[#28c840]" /></div>
              <span className="text-[12px] text-[#86868b] font-medium ml-2">Restaurant AI Dashboard</span>
            </div>
            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
                {[
                  { label: "ยอดขายวันนี้", value: "฿18,450", change: "+15%", color: "#34c759" },
                  { label: "จำนวนบิล", value: "67", change: "+8%", color: "#2997ff" },
                  { label: "เฉลี่ย/บิล", value: "฿275", change: "+5%", color: "#5856d6" },
                  { label: "Food Cost %", value: "33%", change: "target 35%", color: "#ff9500" },
                  { label: "เมนูขายดี", value: "กะเพรา", change: "32 จาน", color: "#ff2d55" },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-[#fafafa]">
                    <p className="text-[10px] text-[#86868b]">{s.label}</p>
                    <p className="text-[18px] font-semibold text-[#1d1d1f]">{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: s.color }}>{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Live Order Queue */}
              <div className="mb-5">
                <p className="text-[12px] font-medium text-[#86868b] mb-2">Live Order Queue</p>
                <div className="space-y-1.5">
                  {[
                    { id: "#248", cust: "LINE — คุณสมชาย", items: "กะเพราหมูสับ x2", total: "฿120", status: "กำลังทำ", sc: "#ff9500" },
                    { id: "#247", cust: "Walk-in โต๊ะ 5", items: "ต้มยำกุ้ง x1, ผัดไทย x2", total: "฿360", status: "เสร็จแล้ว", sc: "#34c759" },
                    { id: "#246", cust: "Grab — Delivery", items: "ข้าวมันไก่ x3, ส้มตำ x1", total: "฿215", status: "กำลังส่ง", sc: "#2997ff" },
                  ].map((o) => (
                    <div key={o.id} className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]">
                      <div className="flex items-center gap-3"><span className="text-[12px] font-mono text-[#86868b]">{o.id}</span><div><p className="text-[12px] font-medium text-[#1d1d1f]">{o.cust}</p><p className="text-[10px] text-[#86868b]">{o.items}</p></div></div>
                      <div className="text-right"><p className="text-[12px] font-medium text-[#1d1d1f]">{o.total}</p><span className="text-[9px] font-medium px-1.5 py-0.5 rounded-full" style={{ background: o.sc + "12", color: o.sc }}>{o.status}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low Stock Alerts */}
              <div>
                <p className="text-[12px] font-medium text-[#86868b] mb-2">Low Stock Alerts</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#ff3b30]/5 border border-[#ff3b30]/10">
                    <AlertTriangle size={13} className="text-[#ff3b30] shrink-0" />
                    <div className="flex-1"><p className="text-[11px] font-medium text-[#ff3b30]">กุ้งสด — เหลือ 3 ตัว</p><p className="text-[9px] text-[#86868b]">AI: สั่งเพิ่ม 2 กก. จาก Supplier A (฿280/กก.)</p></div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#ff9500]/5 border border-[#ff9500]/10">
                    <AlertTriangle size={13} className="text-[#ff9500] shrink-0" />
                    <div className="flex-1"><p className="text-[11px] font-medium text-[#ff9500]">หมูสับ — เหลือ 0.5 กก.</p><p className="text-[9px] text-[#86868b]">AI: สั่งเพิ่ม 3 กก. จาก Supplier B (฿120/กก.)</p></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ PRICING with ROI ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-3">แพ็คเกจสำหรับร้านอาหาร</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-10">Setup fee ครั้งเดียว + ค่า API ตามใช้จริง</p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Single Branch", price: "฿14,900", monthly: "฿500-1,500", color: "#06c755", features: ["LINE Order Bot (24/7)", "Inventory Alerts", "Review Auto-Reply", "Daily Sales Summary", "รองรับ 500 orders/เดือน", "Support ผ่าน LINE"], best: "ร้านเดี่ยว 1 สาขา" },
              { name: "Multi Branch", price: "฿34,900", monthly: "฿1,500-4,000", color: "#2997ff", badge: "แนะนำ", features: ["ทุกอย่างใน Single +", "Food Cost Calculator", "Multi-branch dashboard", "เปรียบเทียบสาขา", "Menu engineering", "รองรับ 3,000 orders/เดือน", "Priority support 7 วัน"], best: "2-5 สาขา" },
              { name: "Chain", price: "฿69,900", monthly: "฿3,000-8,000", color: "#af52de", features: ["ทุกอย่างใน Multi +", "Central kitchen mgmt", "Franchise tracking", "Custom workflows ไม่จำกัด", "API เชื่อม POS ที่ใช้อยู่", "Dedicated account manager", "SLA 99.9% uptime"], best: "6+ สาขา / franchise" },
            ].map((plan) => (
              <div key={plan.name} className={`apple-card p-6 ${plan.badge ? "ring-2 ring-[#2997ff]/20" : ""}`}>
                {plan.badge && <div className="text-center mb-3"><span className="text-[11px] font-semibold px-4 py-1 rounded-full text-white" style={{ background: plan.color }}>{plan.badge}</span></div>}
                <h3 className="text-[17px] font-semibold text-[#1d1d1f] text-center">{plan.name}</h3>
                <p className="text-[32px] font-semibold text-center mt-1 mb-0.5" style={{ color: plan.color }}>{plan.price}</p>
                <p className="text-[11px] text-[#86868b] text-center mb-1">Setup fee (ครั้งเดียว)</p>
                <p className="text-[11px] text-[#86868b] text-center mb-5 pb-5 border-b border-black/[0.04]">+ {plan.monthly}/เดือน (ค่า API)</p>
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
              <div className="p-4 rounded-xl bg-[#ff3b30]/5"><p className="text-[11px] text-[#86868b]">จ้างพนักงานรับ order + ตอบรีวิว</p><p className="text-[20px] font-semibold text-[#ff3b30]">฿18,000/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#34c759]/5"><p className="text-[11px] text-[#86868b]">ใช้ AI แทน</p><p className="text-[20px] font-semibold text-[#34c759]">฿1,500/เดือน</p></div>
              <div className="p-4 rounded-xl bg-[#2997ff]/5"><p className="text-[11px] text-[#86868b]">ประหยัด/ปี</p><p className="text-[20px] font-semibold text-[#2997ff]">฿198,000</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยร้านอาหารของคุณ?</h2>
          <p className="text-[15px] text-[#86868b] mb-6">ปรึกษาฟรี บอกเราว่าร้านคุณขายอะไร กี่สาขา เราออกแบบ workflow ให้</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}