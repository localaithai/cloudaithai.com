"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  UtensilsCrossed,
  MessageSquare,
  Star,
  Check,
  ArrowRight,
  Clock,
  TrendingUp,
  Thermometer,
  Users,
  ShoppingBag,
  Sparkles,
  Send,
  ThumbsDown,
  Reply,
  ChefHat,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════════════
   RESTAURANT PAGE — "Kitchen Command Center"
   A unique, dark-themed KDS board layout unlike any other page
   ═══════════════════════════════════════════════════════════════════════════ */

/* ─── Data ──────────────────────────────────────────────────────────────── */

type OrderStatus = "waiting" | "cooking" | "done";
interface KDSOrder {
  id: string;
  items: string[];
  time: string;
  source: "LINE" | "Walk-in" | "Grab";
  sourceColor: string;
  status: OrderStatus;
}

const initialOrders: KDSOrder[] = [
  { id: "#301", items: ["กะเพราหมูสับไข่ดาว x2", "ชามะนาว x2"], time: "2:14", source: "LINE", sourceColor: "#06c755", status: "waiting" },
  { id: "#302", items: ["ต้มยำกุ้ง x1", "ข้าวสวย x1"], time: "1:48", source: "Walk-in", sourceColor: "#ff9500", status: "waiting" },
  { id: "#303", items: ["ผัดไทยกุ้ง x2"], time: "0:55", source: "Grab", sourceColor: "#00b14f", status: "waiting" },
  { id: "#298", items: ["ส้มตำไทย x1", "ไก่ย่าง x1"], time: "8:22", source: "LINE", sourceColor: "#06c755", status: "cooking" },
  { id: "#299", items: ["ข้าวมันไก่ x3"], time: "6:10", source: "Walk-in", sourceColor: "#ff9500", status: "cooking" },
  { id: "#294", items: ["แกงเขียวหวาน x2"], time: "14:30", source: "Grab", sourceColor: "#00b14f", status: "done" },
  { id: "#295", items: ["ผัดกะเพราทะเล x1"], time: "13:05", source: "LINE", sourceColor: "#06c755", status: "done" },
  { id: "#296", items: ["ข้าวผัดปู x2", "ไข่เจียว x1"], time: "12:40", source: "Walk-in", sourceColor: "#ff9500", status: "done" },
  { id: "#297", items: ["ยำวุ้นเส้น x1"], time: "11:15", source: "Grab", sourceColor: "#00b14f", status: "done" },
];

const ingredients = [
  { name: "กุ้ง", level: 15, unit: "เหลือ 0.3 กก.", emoji: "🦐" },
  { name: "หมู", level: 45, unit: "เหลือ 1.5 กก.", emoji: "🥩" },
  { name: "ไข่", level: 80, unit: "เหลือ 24 ฟอง", emoji: "🥚" },
  { name: "ข้าว", level: 90, unit: "เหลือ 8 กก.", emoji: "🍚" },
  { name: "ผักชี", level: 10, unit: "เหลือ 50 กรัม", emoji: "🌿" },
  { name: "น้ำปลา", level: 60, unit: "เหลือ 400 มล.", emoji: "🫙" },
  { name: "พริก", level: 70, unit: "เหลือ 200 กรัม", emoji: "🌶️" },
  { name: "มะนาว", level: 35, unit: "เหลือ 8 ลูก", emoji: "🍋" },
];

function getLevelColor(level: number) {
  if (level <= 20) return "#ff3b30";
  if (level <= 40) return "#ff9500";
  return "#34c759";
}

function getLevelLabel(level: number) {
  if (level <= 20) return "วิกฤต";
  if (level <= 40) return "ใกล้หมด";
  return "ปกติ";
}

/* ─── Animated Counter ──────────────────────────────────────────────────── */

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── KDS Order Card ────────────────────────────────────────────────────── */

function KDSCard({ order, isAnimating }: { order: KDSOrder; isAnimating?: boolean }) {
  const statusColors: Record<OrderStatus, string> = {
    waiting: "#ff9500",
    cooking: "#2997ff",
    done: "#34c759",
  };

  return (
    <motion.div
      layout
      layoutId={order.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: isAnimating ? "0 0 20px rgba(255,149,0,0.4)" : "0 1px 3px rgba(0,0,0,0.3)",
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="rounded-lg overflow-hidden"
      style={{ background: "#2a2a2e" }}
    >
      {/* card header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
        <span className="text-[13px] font-mono font-bold text-white/90">{order.id}</span>
        <span
          className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: order.sourceColor + "25", color: order.sourceColor }}
        >
          {order.source}
        </span>
      </div>
      {/* card body */}
      <div className="px-3 py-2 space-y-1">
        {order.items.map((item, i) => (
          <p key={i} className="text-[11px] text-white/70">{item}</p>
        ))}
      </div>
      {/* card footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.06]">
        <div className="flex items-center gap-1">
          <Clock size={10} className="text-white/60" />
          <span className="text-[10px] text-white/60 font-mono">{order.time}</span>
        </div>
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: statusColors[order.status], boxShadow: `0 0 6px ${statusColors[order.status]}` }}
        />
      </div>
    </motion.div>
  );
}

/* ═══ MAIN COMPONENT ═══════════════════════════════════════════════════ */

export default function RestaurantSection() {
  const [orders, setOrders] = useState<KDSOrder[]>(initialOrders);
  const [movingOrderId, setMovingOrderId] = useState<string | null>(null);

  /* Auto-animate orders moving between columns every 4 seconds */
  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prev) => {
        const waiting = prev.filter((o) => o.status === "waiting");
        const cooking = prev.filter((o) => o.status === "cooking");

        if (waiting.length > 0) {
          const toMove = waiting[0];
          setMovingOrderId(toMove.id);
          setTimeout(() => setMovingOrderId(null), 800);
          return prev.map((o) => (o.id === toMove.id ? { ...o, status: "cooking" as OrderStatus } : o));
        } else if (cooking.length > 0) {
          const toMove = cooking[0];
          setMovingOrderId(toMove.id);
          setTimeout(() => setMovingOrderId(null), 800);
          return prev.map((o) => (o.id === toMove.id ? { ...o, status: "done" as OrderStatus } : o));
        } else {
          // Reset cycle
          return initialOrders;
        }
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const waiting = orders.filter((o) => o.status === "waiting");
  const cooking = orders.filter((o) => o.status === "cooking");
  const done = orders.filter((o) => o.status === "done");

  /* ─── Chat messages for LINE mockup ─── */
  const [chatStep, setChatStep] = useState(0);
  const chatMessages = [
    { from: "customer", text: "สวัสดีค่ะ สั่งกะเพราหมูสับไข่ดาว 2 จาน กับต้มยำกุ้ง 1 ถ้วยค่ะ" },
    { from: "ai", text: "รับออเดอร์ค่ะ! 🙏\n\n📋 Order #304\n• กะเพราหมูสับไข่ดาว x2 — ฿120\n• ต้มยำกุ้ง x1 — ฿180\n\n💰 รวม ฿300\n⏱ เตรียมอาหาร ~15 นาที\n\n✨ เพิ่มข้าวเหนียวมะม่วง ฿59 ไหมคะ? วันนี้มะม่วงหวานมาก!" },
    { from: "customer", text: "เพิ่มมะม่วงข้าวเหนียวด้วยค่ะ!" },
    { from: "ai", text: "เพิ่มแล้วค่ะ! รวมทั้งหมด ฿359\n\n✅ ส่งเข้าครัวแล้ว — อาหารจะพร้อมใน ~15 นาที\n📍 ส่งอัพเดทให้เมื่ออาหารเสร็จนะคะ" },
  ];

  useEffect(() => {
    if (chatStep >= chatMessages.length) return;
    const delay = chatStep === 0 ? 1500 : 2500;
    const timer = setTimeout(() => setChatStep((p) => p + 1), delay);
    return () => clearTimeout(timer);
  }, [chatStep, chatMessages.length]);

  return (
    <div>
      {/* ═══ 1. COMPACT HERO — 3 lines ═══ */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#ff9500]/8 rounded-full px-4 py-1.5 mb-5">
              <UtensilsCrossed size={14} className="text-[#ff9500]" />
              <span className="text-[12px] font-medium text-[#ff9500]">Kitchen Command Center</span>
            </div>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
              AI ที่<span className="text-[#ff9500]">คุมครัว</span>ได้จริง
            </h1>
            <p className="text-[17px] text-[#6e6e73] max-w-[540px] mx-auto">
              รับออเดอร์ จัดคิว ติดตาม stock ตอบรีวิว สรุปยอด — ทุกอย่างอัตโนมัติ
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 2. FULL-WIDTH KDS BOARD — Dark Theme ═══ */}
      <section className="w-full bg-[#1d1d1f] py-10 px-4 sm:px-6 overflow-hidden">
        {/* KDS Header */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#34c759] animate-pulse" />
              <h2 className="text-[18px] sm:text-[22px] font-semibold text-white/90 tracking-tight">
                Kitchen Display System
              </h2>
              <span className="text-[10px] text-white/50 font-mono hidden sm:inline">LIVE</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-white/60">
              <span className="hidden sm:inline">วันนี้ 16 มี.ค. 2569</span>
              <span className="font-mono">12:34 PM</span>
            </div>
          </div>

          {/* 3-Column KDS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column: รอทำ */}
            <div className="rounded-xl overflow-hidden" style={{ background: "#2a2a2e" }}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff9500]" />
                  <h3 className="text-[14px] font-semibold text-white/80">รอทำ</h3>
                </div>
                <span className="text-[12px] font-mono text-[#ff9500] font-bold">{waiting.length}</span>
              </div>
              <div className="p-3 space-y-3 min-h-[200px]">
                <AnimatePresence mode="popLayout">
                  {waiting.map((order) => (
                    <KDSCard key={order.id} order={order} isAnimating={movingOrderId === order.id} />
                  ))}
                </AnimatePresence>
                {waiting.length === 0 && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] text-white/40 text-center py-8">
                    ว่างอยู่
                  </motion.p>
                )}
              </div>
            </div>

            {/* Column: กำลังทำ */}
            <div className="rounded-xl overflow-hidden" style={{ background: "#2a2a2e" }}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2997ff] animate-pulse" />
                  <h3 className="text-[14px] font-semibold text-white/80">กำลังทำ</h3>
                </div>
                <span className="text-[12px] font-mono text-[#2997ff] font-bold">{cooking.length}</span>
              </div>
              <div className="p-3 space-y-3 min-h-[200px]">
                <AnimatePresence mode="popLayout">
                  {cooking.map((order) => (
                    <KDSCard key={order.id} order={order} isAnimating={movingOrderId === order.id} />
                  ))}
                </AnimatePresence>
                {cooking.length === 0 && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[12px] text-white/40 text-center py-8">
                    ว่างอยู่
                  </motion.p>
                )}
              </div>
            </div>

            {/* Column: เสร็จแล้ว */}
            <div className="rounded-xl overflow-hidden" style={{ background: "#2a2a2e" }}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#34c759]" />
                  <h3 className="text-[14px] font-semibold text-white/80">เสร็จแล้ว</h3>
                </div>
                <span className="text-[12px] font-mono text-[#34c759] font-bold">{done.length}</span>
              </div>
              <div className="p-3 space-y-3 min-h-[200px] max-h-[420px] overflow-y-auto">
                <AnimatePresence mode="popLayout">
                  {done.map((order) => (
                    <KDSCard key={order.id} order={order} isAnimating={movingOrderId === order.id} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* KDS Footer stats */}
          <div className="flex items-center justify-center gap-6 mt-6 text-[11px] text-white/50">
            <span className="flex items-center gap-1.5"><Clock size={11} /> Avg. เวลา: 12 นาที</span>
            <span className="flex items-center gap-1.5"><TrendingUp size={11} /> ออเดอร์วันนี้: 67</span>
            <span className="flex items-center gap-1.5"><Users size={11} /> พนักงานครัว: 3</span>
          </div>
        </div>
      </section>

      {/* ═══ 3. LINE CHAT MOCKUP ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-2">
              AI รับ Order ผ่าน LINE
            </h2>
            <p className="text-[15px] text-[#6e6e73] text-center mb-8">
              ลูกค้าพิมพ์สั่ง — AI ตอบทันที พร้อม upsell อัตโนมัติ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-0 overflow-hidden shadow-lg shadow-black/[0.06]"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-3.5 bg-[#06c755] text-white">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <ChefHat size={16} />
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-semibold">ร้านครัว AI สาขา 1</p>
                <p className="text-[10px] text-white/70">ตอบอัตโนมัติ 24/7</p>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={12} className="text-white/80" />
                <span className="text-[10px] text-white/80">AI Active</span>
              </div>
            </div>

            {/* Chat body */}
            <div className="p-5 space-y-4 bg-[#f5f5f7] min-h-[320px]">
              <AnimatePresence>
                {chatMessages.slice(0, chatStep).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-[#ff9500]/10 flex items-center justify-center shrink-0 mr-2 mt-1">
                        <Sparkles size={12} className="text-[#ff9500]" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-[12px] leading-relaxed whitespace-pre-line ${
                        msg.from === "customer"
                          ? "bg-[#06c755] text-white rounded-br-sm"
                          : "bg-white text-[#1d1d1f] rounded-bl-sm shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {chatStep < chatMessages.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`flex ${chatMessages[chatStep]?.from === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex items-center gap-1 px-4 py-2 rounded-2xl bg-white/60 shadow-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-[#6e6e73]"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat input */}
            <div className="flex items-center gap-3 px-4 py-3 border-t border-black/[0.04] bg-white">
              <div className="flex-1 h-9 rounded-full bg-[#f5f5f7] flex items-center px-4">
                <span className="text-[12px] text-[#6e6e73]">พิมพ์สั่งอาหาร...</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#06c755] flex items-center justify-center">
                <Send size={14} className="text-white" />
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-6 mt-4 text-[11px] text-[#6e6e73]">
            <span className="flex items-center gap-1"><Clock size={10} /> ตอบใน 1.5 วินาที</span>
            <span className="flex items-center gap-1"><TrendingUp size={10} /> Upsell +18% ต่อบิล</span>
            <span className="flex items-center gap-1"><ShoppingBag size={10} /> 0 order หลุด</span>
          </div>
        </div>
      </section>

      {/* ═══ 4. INGREDIENT INTELLIGENCE — Visual Fridge ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-2">
              Ingredient Intelligence
            </h2>
            <p className="text-[15px] text-[#6e6e73] text-center mb-10">
              AI monitor วัตถุดิบ real-time — รู้ก่อนหมด สั่งก่อนขาด
            </p>
          </motion.div>

          {/* Fridge mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-0 overflow-hidden shadow-lg shadow-black/[0.06]"
          >
            {/* Fridge header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.04] bg-white">
              <div className="flex items-center gap-2">
                <Thermometer size={16} className="text-[#2997ff]" />
                <span className="text-[14px] font-semibold text-[#1d1d1f]">ตู้เย็นอัจฉริยะ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                <span className="text-[10px] text-[#6e6e73]">อัพเดทล่าสุด 2 นาทีที่แล้ว</span>
              </div>
            </div>

            {/* Ingredient Grid */}
            <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#fafafa]">
              {ingredients.map((item, i) => {
                const color = getLevelColor(item.level);
                const label = getLevelLabel(item.level);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="relative rounded-xl bg-white p-4 border border-black/[0.04] hover:shadow-md transition-shadow"
                  >
                    {/* Emoji + name */}
                    <div className="text-center mb-3">
                      <span className="text-[28px]">{item.emoji}</span>
                      <p className="text-[13px] font-semibold text-[#1d1d1f] mt-1">{item.name}</p>
                      <p className="text-[10px] text-[#6e6e73]">{item.unit}</p>
                    </div>

                    {/* Fill level bar — vertical style */}
                    <div className="relative w-full h-3 rounded-full bg-black/[0.04] overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{ background: color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] font-semibold" style={{ color }}>{item.level}%</span>
                      <span
                        className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
                        style={{ background: color + "15", color }}
                      >
                        {label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* AI Recommendation */}
            <div className="px-5 py-4 border-t border-black/[0.04] bg-[#ff9500]/[0.04]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ff9500]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles size={14} className="text-[#ff9500]" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#1d1d1f] mb-1">AI แนะนำ</p>
                  <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                    สั่ง<span className="text-[#ff3b30] font-semibold"> กุ้ง 2 กก. </span>+
                    <span className="text-[#ff3b30] font-semibold"> ผักชี 500 กรัม </span>+
                    <span className="text-[#ff9500] font-semibold"> หมู 1 กก. </span>+
                    <span className="text-[#ff9500] font-semibold"> มะนาว 20 ลูก </span>
                    จาก Supplier A — ราคารวม ฿1,240 (ถูกกว่า Supplier B ฿180)
                  </p>
                  <button className="mt-2 text-[11px] font-semibold text-[#ff9500] flex items-center gap-1 hover:opacity-70 transition-opacity">
                    สั่งซื้อผ่าน LINE <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 5. REVENUE TICKER ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-8 text-center overflow-hidden relative"
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ff9500 0, #ff9500 1px, transparent 1px, transparent 10px)" }} />
            <div className="relative">
              <p className="text-[13px] text-[#6e6e73] mb-2">ยอดขายวันนี้ (real-time)</p>
              <p className="text-[48px] sm:text-[64px] font-bold text-[#1d1d1f] tracking-tight">
                <AnimatedCounter target={18450} prefix="฿" />
              </p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="text-center">
                  <p className="text-[24px] font-semibold text-[#2997ff]">
                    <AnimatedCounter target={67} />
                  </p>
                  <p className="text-[11px] text-[#6e6e73]">บิลวันนี้</p>
                </div>
                <div className="w-px h-8 bg-black/[0.06]" />
                <div className="text-center">
                  <p className="text-[24px] font-semibold text-[#34c759]">
                    ฿<AnimatedCounter target={275} />
                  </p>
                  <p className="text-[11px] text-[#6e6e73]">เฉลี่ย/บิล</p>
                </div>
                <div className="w-px h-8 bg-black/[0.06]" />
                <div className="text-center">
                  <p className="text-[24px] font-semibold text-[#ff9500]">
                    <AnimatedCounter target={33} suffix="%" />
                  </p>
                  <p className="text-[11px] text-[#6e6e73]">Food Cost</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-4">
                <TrendingUp size={13} className="text-[#34c759]" />
                <span className="text-[12px] text-[#34c759] font-medium">+15% vs เมื่อวาน</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. AI REVIEW MANAGER ═══ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-2">
              AI Review Manager
            </h2>
            <p className="text-[15px] text-[#6e6e73] text-center mb-10">
              รีวิวเชิงลบ? AI ร่าง reply ให้ทันที — ปกป้อง rating ร้านคุณ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5"
          >
            {/* Negative Review */}
            <div className="apple-card p-0 overflow-hidden border-2 border-[#ff3b30]/10">
              <div className="px-5 py-3 bg-[#ff3b30]/5 border-b border-[#ff3b30]/10 flex items-center gap-2">
                <ThumbsDown size={14} className="text-[#ff3b30]" />
                <span className="text-[13px] font-semibold text-[#ff3b30]">Google Review ใหม่</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#e5e5ea] flex items-center justify-center text-[14px] font-semibold text-[#6e6e73]">ส</div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">สมศักดิ์</p>
                    <div className="flex items-center gap-0.5">
                      {[1, 2].map((n) => (
                        <Star key={n} size={11} className="text-[#ff9500] fill-[#ff9500]" />
                      ))}
                      {[3, 4, 5].map((n) => (
                        <Star key={n} size={11} className="text-[#d2d2d7]" />
                      ))}
                      <span className="text-[10px] text-[#6e6e73] ml-1">3 ชั่วโมงก่อน</span>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] text-[#1d1d1f] leading-relaxed">
                  สั่งอาหาร 4 อย่าง รอเกือบ 1 ชั่วโมง มา 3 อย่าง อีกอย่างหนึ่งไม่มาเลย ถามพนักงานก็บอกรอแป๊บ แต่สุดท้ายก็ไม่ได้กิน ผิดหวังมากครับ ไม่คิดจะกลับไปอีก
                </p>
                <div className="mt-3 p-2.5 rounded-lg bg-[#ff3b30]/5 text-center">
                  <p className="text-[10px] text-[#ff3b30] font-medium">Rating ร้านจะลดจาก 4.2 เหลือ 4.0</p>
                </div>
              </div>
            </div>

            {/* AI Draft Reply */}
            <div className="apple-card p-0 overflow-hidden border-2 border-[#34c759]/10">
              <div className="px-5 py-3 bg-[#34c759]/5 border-b border-[#34c759]/10 flex items-center gap-2">
                <Reply size={14} className="text-[#34c759]" />
                <span className="text-[13px] font-semibold text-[#34c759]">AI Draft Reply</span>
                <span className="text-[9px] bg-[#34c759]/10 text-[#34c759] px-2 py-0.5 rounded-full font-medium ml-auto">สร้างใน 3 วินาที</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#ff9500]/10 flex items-center justify-center">
                    <ChefHat size={16} className="text-[#ff9500]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">เจ้าของร้าน (AI Draft)</p>
                    <p className="text-[10px] text-[#6e6e73]">รอคุณ approve ก่อนโพสต์</p>
                  </div>
                </div>
                <div className="text-[13px] text-[#1d1d1f] leading-relaxed space-y-2">
                  <p>
                    สวัสดีครับคุณสมศักดิ์ ขอบคุณที่สละเวลาให้ feedback ครับ ต้องขออภัยจริงๆ ที่อาหารล่าช้าและมีรายการตกหล่น ไม่ใช่มาตรฐานของร้านเราเลยครับ
                  </p>
                  <p>
                    ผมได้ตรวจสอบแล้ว พบว่าวันนั้นเป็นช่วง peak hour ที่ระบบครัวมีปัญหา ซึ่งเราได้แก้ไขเรียบร้อยแล้วครับ
                  </p>
                  <p className="text-[#2997ff]">
                    ครั้งหน้ามาทาน ลด 30% ทั้งบิลเลยนะครับ แจ้งชื่อคุณสมศักดิ์กับพนักงานได้เลยครับ
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 py-2 rounded-full bg-[#34c759] text-white text-[12px] font-semibold flex items-center justify-center gap-1">
                    <Check size={13} /> Approve & โพสต์
                  </button>
                  <button className="px-4 py-2 rounded-full bg-[#f5f5f7] text-[12px] text-[#6e6e73] font-medium">
                    แก้ไข
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. PRICING — Single package + CTA ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1d1d1f] text-center mb-2">
              เริ่มต้นคุมครัวด้วย AI
            </h2>
            <p className="text-[15px] text-[#6e6e73] text-center mb-10">
              ครบทุกระบบใน package เดียว
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="apple-card p-0 overflow-hidden shadow-lg shadow-[#ff9500]/[0.08] ring-2 ring-[#ff9500]/15"
          >
            {/* Pricing header */}
            <div className="bg-[#ff9500] px-6 py-5 text-center text-white">
              <p className="text-[13px] font-medium text-white/80 mb-1">Kitchen Command Center</p>
              <p className="text-[42px] font-bold tracking-tight">฿14,900</p>
              <p className="text-[13px] text-white/70">Setup fee ครั้งเดียว + ฿500-1,500/เดือน (ค่า API ตามใช้จริง)</p>
            </div>

            {/* Features */}
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Kitchen Display System (KDS)",
                  "LINE Order Bot — 24/7",
                  "Inventory Intelligence",
                  "AI auto-สั่งซื้อวัตถุดิบ",
                  "Google Review auto-reply",
                  "Revenue Dashboard real-time",
                  "Food Cost Calculator",
                  "Daily Sales Report ส่ง LINE",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#ff9500]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-[#ff9500]" />
                    </div>
                    <span className="text-[13px] text-[#1d1d1f]">{f}</span>
                  </div>
                ))}
              </div>

              {/* ROI quick calc */}
              <div className="rounded-xl bg-[#f5f5f7] p-4 mb-6">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">คุ้มค่าแค่ไหน?</p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-[9px] text-[#6e6e73]">จ้างพนักงาน</p>
                    <p className="text-[17px] font-semibold text-[#ff3b30]">฿18,000</p>
                    <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-[#6e6e73]">ใช้ AI แทน</p>
                    <p className="text-[17px] font-semibold text-[#34c759]">฿1,500</p>
                    <p className="text-[9px] text-[#6e6e73]">/เดือน</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-[#6e6e73]">ประหยัด/ปี</p>
                    <p className="text-[17px] font-semibold text-[#ff9500]">฿198,000</p>
                    <p className="text-[9px] text-[#6e6e73]">+ upsell revenue</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                className="block w-full py-3.5 rounded-full bg-[#ff9500] text-white text-center text-[15px] font-semibold hover:opacity-90 transition-opacity"
              >
                ปรึกษาฟรี — เริ่มคุมครัวด้วย AI
              </a>
              <p className="text-[11px] text-[#6e6e73] text-center mt-3">
                บอกเราว่าร้านคุณขายอะไร กี่สาขา — เราออกแบบ workflow ให้
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
