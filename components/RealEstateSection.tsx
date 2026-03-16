"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, MapPin, Eye, Phone, Calendar, TrendingUp, Users, Check, ArrowRight, Star, DollarSign, ChevronDown, Search, Heart, AlertTriangle } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   REAL ESTATE — "Property Search Experience"

   Concept: The page IS a property search platform.
   Users browse listings, see AI features integrated
   into every step of the property buying journey.
   ═══════════════════════════════════════════════════════ */

const listings = [
  { name: "Life Asoke Rama 9", type: "1BR", sqm: 30, floor: 22, price: "3.29M", psm: "฿110K", view: "วิวเมือง", status: "ว่าง", img: "🏙️", hot: true },
  { name: "Ideo Mobi Sukhumvit 66", type: "1BR", sqm: 35, floor: 18, price: "4.15M", psm: "฿119K", view: "วิวสวน", status: "ว่าง", img: "🌳", hot: false },
  { name: "The Base Phetchaburi", type: "Studio", sqm: 26, floor: 10, price: "2.65M", psm: "฿102K", view: "วิวถนน", status: "ว่าง", img: "🛣️", hot: false },
  { name: "Rhythm Asoke", type: "1BR", sqm: 32, floor: 28, price: "3.95M", psm: "฿123K", view: "วิวพาโนรามา", status: "จอง", img: "🌆", hot: true },
  { name: "Aspire Rama 9", type: "1BR", sqm: 28, floor: 15, price: "2.89M", psm: "฿103K", view: "วิวสระว่ายน้ำ", status: "ว่าง", img: "🏊", hot: false },
  { name: "Whizdom Asoke", type: "2BR", sqm: 55, floor: 35, price: "8.50M", psm: "฿155K", view: "วิว 360°", status: "ว่าง", img: "✨", hot: true },
];

export default function RealEstateSection() {
  const [search, setSearch] = useState("");
  const [selectedListing, setSelectedListing] = useState<number | null>(null);
  const [showAIChat, setShowAIChat] = useState(false);

  const filtered = search
    ? listings.filter((l) => l.name.toLowerCase().includes(search.toLowerCase()) || l.type.includes(search) || l.view.includes(search))
    : listings;

  return (
    <div>
      {/* ═══ HERO — minimal, search-first ═══ */}
      <section className="pt-12 pb-6 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
              ค้นหาทรัพย์ด้วย <span className="gradient-text">AI</span>
            </h1>
            <p className="text-[17px] text-[#6e6e73] mb-8">
              บอก AI ว่าต้องการอะไร — ตอบทันที พร้อมนัดชม
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ SEARCH BAR — the centerpiece ═══ */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="apple-card p-2 flex items-center gap-3"
          >
            <Search size={20} className="text-[#6e6e73] ml-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ค้นหา: คอนโด สุขุมวิท งบ 3 ล้าน ใกล้ BTS..."
              className="flex-1 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#c7c7cc] bg-transparent outline-none"
            />
            <button
              onClick={() => setShowAIChat(true)}
              className="px-4 py-2 rounded-xl bg-[#2997ff] text-white text-[13px] font-medium shrink-0"
            >
              AI ค้นหา
            </button>
          </motion.div>
          <p className="text-[11px] text-[#6e6e73] text-center mt-2">ลองพิมพ์ "1BR" หรือ "วิว" เพื่อกรอง</p>
        </div>
      </section>

      {/* ═══ PROPERTY GRID — like a real listing platform ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[14px] text-[#6e6e73]">พบ <span className="font-medium text-[#1d1d1f]">{filtered.length}</span> ทรัพย์</p>
            <p className="text-[11px] text-[#2997ff] font-medium">AI จัดอันดับตาม relevance</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((listing, i) => (
              <motion.div
                key={listing.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="apple-card p-0 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedListing(selectedListing === i ? null : i)}
              >
                {/* Image placeholder */}
                <div className="h-36 bg-gradient-to-br from-[#f5f5f7] to-[#e5e5ea] flex items-center justify-center text-4xl relative">
                  {listing.img}
                  {listing.hot && (
                    <span className="absolute top-3 left-3 text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#ff3b30] text-white">HOT</span>
                  )}
                  {listing.status === "จอง" && (
                    <span className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#ff9500] text-white">จองแล้ว</span>
                  )}
                  <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={14} className="text-[#6e6e73]" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-[14px] font-semibold text-[#1d1d1f]">{listing.name}</h3>
                    <span className="text-[13px] font-semibold text-[#2997ff]">฿{listing.price}</span>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] mb-2">{listing.type} · {listing.sqm} ตร.ม. · ชั้น {listing.floor} · {listing.view}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#6e6e73]">{listing.psm}/ตร.ม.</span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${listing.status === "ว่าง" ? "bg-[#34c759]/10 text-[#34c759]" : "bg-[#ff9500]/10 text-[#ff9500]"}`}>{listing.status}</span>
                  </div>
                </div>

                {/* AI detail expand */}
                <AnimatePresence>
                  {selectedListing === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <div className="px-4 pb-4 pt-0 border-t border-black/[0.04]">
                        <div className="mt-3 p-3 rounded-xl bg-[#2997ff]/5 border border-[#2997ff]/10">
                          <p className="text-[10px] text-[#2997ff] font-medium mb-1">AI Analysis</p>
                          <p className="text-[11px] text-[#1d1d1f]">ราคาต่ำกว่าตลาด 8% เหมาะกับการลงทุน yield ~5.2% ทำเลใกล้ MRT 300m</p>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <button className="flex-1 text-[11px] font-medium py-2 rounded-xl bg-[#2997ff] text-white">นัดดูห้อง</button>
                          <button className="flex-1 text-[11px] font-medium py-2 rounded-xl bg-[#f5f5f7] text-[#1d1d1f]">AI วิเคราะห์เพิ่ม</button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI CHAT POPUP — appears when clicking AI ค้นหา ═══ */}
      <AnimatePresence>
        {showAIChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setShowAIChat(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="apple-card w-full max-w-md p-0 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
                <span className="text-[13px] font-semibold text-[#1d1d1f]">🏠 AI Property Assistant</span>
                <button onClick={() => setShowAIChat(false)} className="text-[#6e6e73] text-[18px]">×</button>
              </div>
              <div className="p-5 space-y-3 max-h-[400px] overflow-y-auto">
                <div className="flex justify-end"><div className="bg-[#2997ff] text-white text-[13px] px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[75%]">หาคอนโด พระราม 9 งบ 3 ล้าน</div></div>
                <div className="flex justify-start">
                  <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[13px] px-4 py-3 rounded-2xl rounded-bl-sm max-w-[85%]">
                    <p className="font-medium mb-2">พบ 3 ห้องที่ตรง criteria ค่ะ 🏢</p>
                    {listings.slice(0, 3).filter(l => parseFloat(l.price) <= 3.5).map((l) => (
                      <div key={l.name} className="p-2 rounded-lg bg-white mb-1.5 text-[12px]">
                        <p className="font-medium">{l.name}</p>
                        <p className="text-[#6e6e73]">{l.type} {l.sqm} ตร.ม. ชั้น {l.floor} · ฿{l.price}</p>
                      </div>
                    ))}
                    <p className="text-[#2997ff] text-[12px] mt-1">สนใจนัดดูห้องไหนคะ? 📅</p>
                  </div>
                </div>
                <div className="text-[10px] text-[#6e6e73] text-center">AI ตอบใน 2.1 วินาที · ข้อมูลจาก listing database</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ AGENT PIPELINE — unique visual ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] text-center mb-3">จาก Lead ถึงปิดดีล</h2>
          <p className="text-[17px] text-[#6e6e73] text-center mb-12">AI ดูแลทุกขั้นตอน</p>

          {/* Visual funnel — NOT a standard list */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            {[
              { label: "สอบถาม", count: 48, pct: "100%", color: "#2997ff", desc: "AI ตอบ LINE ทันที", icon: "💬" },
              { label: "นัดดู", count: 18, pct: "38%", color: "#5856d6", desc: "AI จัดนัด + reminder", icon: "📅" },
              { label: "เจรจา", count: 8, pct: "17%", color: "#af52de", desc: "AI เตรียม CMA report", icon: "📊" },
              { label: "ปิดดีล", count: 3, pct: "6%", color: "#34c759", desc: "AI ช่วย negotiate", icon: "🤝" },
            ].map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 apple-card p-5 text-center relative overflow-hidden"
              >
                {/* Background fill representing funnel */}
                <div className="absolute bottom-0 left-0 right-0" style={{ height: stage.pct, background: stage.color + "08" }} />
                <div className="relative z-10">
                  <span className="text-3xl mb-2 block">{stage.icon}</span>
                  <p className="text-[28px] font-semibold" style={{ color: stage.color }}>{stage.count}</p>
                  <p className="text-[13px] font-medium text-[#1d1d1f] mb-1">{stage.label}</p>
                  <p className="text-[11px] text-[#6e6e73]">{stage.desc}</p>
                </div>
                {i < 3 && <div className="hidden sm:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-[#d2d2d7] text-xl z-20">→</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI INSIGHT CARD — unique, not a dashboard ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="apple-card p-6 border-l-4 border-[#2997ff]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[13px] font-semibold text-[#2997ff]">💡 AI Insight ประจำสัปดาห์</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#f5f5f7]">
                  <p className="text-[13px] text-[#1d1d1f]"><strong>คุณสมชาย</strong> ดูห้อง 1BR วิวเมือง 8 ครั้งในสัปดาห์นี้ — งบ 3.5M</p>
                  <p className="text-[11px] text-[#2997ff] mt-1">แนะนำ: เสนอ Life Asoke ชั้น 22 (฿3.29M ต่ำกว่างบ) โทรภายใน 5 นาที</p>
                </div>
                <div className="p-3 rounded-xl bg-[#f5f5f7]">
                  <p className="text-[13px] text-[#1d1d1f]"><strong>Trend:</strong> ราคา 1BR พระราม 9 ขึ้น 3.2% เดือนนี้</p>
                  <p className="text-[11px] text-[#34c759] mt-1">โอกาส: ปรับราคา listing ขึ้น 2-3% ยังขายได้ใน 30 วัน</p>
                </div>
                <div className="p-3 rounded-xl bg-[#f5f5f7]">
                  <p className="text-[13px] text-[#1d1d1f]"><strong>คู่แข่ง:</strong> Agency B ลง listing ใหม่ 5 ห้องใน Ideo Mobi ราคาต่ำกว่าเรา 5%</p>
                  <p className="text-[11px] text-[#ff9500] mt-1">แนะนำ: เพิ่มจุดขาย "ตกแต่งครบ+เฟอร์นิเจอร์" ในรายละเอียด</p>
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
                  { title: "ข้อมูลลูกค้าและทรัพย์ถูกส่งไป Cloud", desc: "ข้อมูล lead, ประวัติการดูห้อง, งบประมาณ และข้อมูลทรัพย์ถูกส่งผ่าน API ไปยัง server ต่างประเทศ — คู่แข่งอาจใช้ provider เดียวกัน" },
                  { title: "AI อาจให้ข้อมูลราคาผิด", desc: "การวิเคราะห์ราคาตลาดของ AI อาจไม่แม่นยำ — ไม่ควรใช้เป็นฐานในการตั้งราคาหรือเจรจาโดยไม่ตรวจสอบ" },
                  { title: "ค่า API ขึ้นอยู่กับปริมาณ lead", desc: "ยิ่งมี inquiry เยอะ ค่า API ยิ่งสูง — ช่วง launch โครงการใหม่อาจมีค่าใช้จ่ายพุ่งสูง" },
                  { title: "พึ่งพา Internet 100%", desc: "ถ้าเน็ตล่ม AI จะหยุดตอบ LINE, หยุดวิเคราะห์ราคา, หยุดนัดหมาย — ต้องมี fallback plan" },
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

      {/* ═══ PRICING — single prominent plan ═══ */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-3">เริ่มต้นใช้งาน</h2>
          <p className="text-[17px] text-[#6e6e73] mb-10">Setup fee ครั้งเดียว ทดลองใช้ 14 วันฟรี</p>

          {/* Featured plan */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="apple-card p-8 max-w-md mx-auto ring-2 ring-[#2997ff]/20 mb-6">
            <span className="text-[11px] font-semibold px-4 py-1 rounded-full bg-[#2997ff] text-white">แนะนำ</span>
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] mt-3">Professional</h3>
            <p className="text-[40px] font-semibold text-[#2997ff] mt-1">฿39,900</p>
            <p className="text-[12px] text-[#6e6e73] mb-1">Setup fee (ครั้งเดียว)</p>
            <p className="text-[12px] text-[#6e6e73] mb-1">+ ฿1,500-5,000/เดือน (API)</p>
            <p className="text-[11px] text-[#8e8e93] mb-6">หรือใช้ Mac Mini แทน VPS — ไม่มีค่า hosting รายเดือน</p>
            <div className="space-y-2 text-left mb-6">
              {["LINE Inquiry Bot ไม่จำกัด", "AI Listing Generator", "Appointment Scheduler + Reminder", "Market Price Analysis", "Lead Scoring & Follow-up", "Training ทีม 2 ชม.", "Support 60 วัน"].map((f) => (
                <div key={f} className="flex items-start gap-2"><Check size={14} className="mt-0.5 text-[#2997ff] shrink-0" /><span className="text-[13px] text-[#6e6e73]">{f}</span></div>
              ))}
            </div>
            <a href="/#contact" className="block text-center py-3 rounded-full bg-[#2997ff] text-white font-medium">เริ่มต้นใช้งาน</a>
          </motion.div>

          <div className="flex justify-center gap-6 text-[13px] text-[#6e6e73]">
            <span>Starter: ฿19,900</span>
            <span>|</span>
            <span>Enterprise: ฿79,900</span>
          </div>

          {/* ROI */}
          <div className="mt-8 flex justify-center gap-6">
            <div className="text-center"><p className="text-[11px] text-[#6e6e73]">จ้างแอดมิน</p><p className="text-[18px] font-semibold text-[#ff3b30]">฿25K/เดือน</p></div>
            <div className="text-center text-[#6e6e73] pt-4">vs</div>
            <div className="text-center"><p className="text-[11px] text-[#6e6e73]">ใช้ AI</p><p className="text-[18px] font-semibold text-[#34c759]">฿3K/เดือน</p></div>
            <div className="text-center text-[#6e6e73] pt-4">=</div>
            <div className="text-center"><p className="text-[11px] text-[#6e6e73]">ประหยัด/ปี</p><p className="text-[18px] font-semibold text-[#2997ff]">฿264K</p></div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#1d1d1f] mb-3">พร้อมให้ AI ช่วยปิดดีล?</h2>
          <p className="text-[15px] text-[#6e6e73] mb-6">ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
          <a href="/#contact" className="apple-btn apple-btn-blue">ปรึกษาฟรี</a>
        </div>
      </section>
    </div>
  );
}
