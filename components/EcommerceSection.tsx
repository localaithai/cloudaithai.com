"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ShoppingCart, MessageSquare, Package, TrendingUp, Star,
  AlertTriangle, Check, ArrowRight, Clock, DollarSign,
  BarChart3, Bell, Truck, FileText, Users, Zap, Bot,
  Search, Heart, Eye, Sparkles, ShieldCheck, RefreshCw,
  Layers, Globe, Send, ChevronRight, X
} from "lucide-react";

/* ─── LIVE STORE — the page IS a mock e-commerce store with AI ─── */

/* ─── Order ticker data ─── */
const orderTickerItems = [
  { id: "#1093", status: "AI ตอบลูกค้า", emoji: "🤖", color: "#2997ff" },
  { id: "#1092", status: "ชำระแล้ว", emoji: "💳", color: "#34c759" },
  { id: "#1091", status: "กำลังแพ็ค", emoji: "📦", color: "#ff9500" },
  { id: "#1090", status: "ส่งแล้ว", emoji: "🚚", color: "#34c759" },
  { id: "#1089", status: "กำลังแพ็ค", emoji: "📦", color: "#ff9500" },
  { id: "#1088", status: "ส่งแล้ว", emoji: "🚚", color: "#34c759" },
  { id: "#1087", status: "AI ตอบลูกค้า", emoji: "🤖", color: "#2997ff" },
  { id: "#1086", status: "review ดี", emoji: "⭐", color: "#ff9500" },
  { id: "#1085", status: "ชำระแล้ว", emoji: "💳", color: "#34c759" },
  { id: "#1084", status: "กำลังแพ็ค", emoji: "📦", color: "#ff9500" },
  { id: "#1083", status: "ส่งแล้ว", emoji: "🚚", color: "#34c759" },
  { id: "#1082", status: "AI สร้าง content", emoji: "✨", color: "#5856d6" },
];

/* ─── Mock products ─── */
const mockProducts = [
  {
    name: "กระเป๋า Luna Minimal",
    price: 1290,
    originalPrice: 1590,
    sold: 2847,
    rating: 4.9,
    reviews: 412,
    image: "bag",
    colors: ["#1d1d1f", "#c4a882", "#8b6f5e"],
  },
  {
    name: "เดรส Bloom Summer",
    price: 890,
    originalPrice: 1190,
    sold: 5123,
    rating: 4.8,
    reviews: 687,
    image: "dress",
    colors: ["#ffb6c1", "#e6e6fa", "#f5f5dc"],
  },
  {
    name: "รองเท้า Nova Runner",
    price: 2490,
    originalPrice: 3290,
    sold: 1456,
    rating: 4.7,
    reviews: 298,
    image: "shoe",
    colors: ["#1d1d1f", "#ffffff", "#2997ff"],
  },
];

/* ─── AI capabilities pills ─── */
const aiCapabilities = [
  "ตอบแชท 24/7", "สร้าง Content สินค้า", "จัดการ Order อัตโนมัติ",
  "วิเคราะห์ยอดขาย", "แจ้งเตือน Stock", "ตอบ Review", "สรุปรายงานประจำวัน",
  "Multi-platform Sync", "SEO Optimization", "ราคา Dynamic", "Upsell อัตโนมัติ",
  "จัดการคืนสินค้า", "Loyalty Program", "A/B Testing Content",
];

/* ─── Chat conversation for bento card ─── */
const fullConversation = [
  { role: "customer", text: "สินค้านี้มีสี Champagne ไหมคะ?" },
  { role: "ai", text: "มีค่ะ! Champagne Gold พร้อมส่งเลย เหลือ 12 ชิ้น" },
  { role: "customer", text: "ส่งกี่วันถึงคะ ส่งฟรีไหม" },
  { role: "ai", text: "ส่งฟรี! ถึงภายใน 1-2 วัน สั่งก่อน 14:00 ส่งวันนี้เลยค่ะ" },
  { role: "customer", text: "มีโค้ดลดไหม" },
  { role: "ai", text: "ใช้โค้ด SAVE15 ลด 15% เหลือ ฿1,096.50 ค่ะ! สั่งเลยไหมคะ?" },
  { role: "customer", text: "สั่งเลยค่ะ 1 ชิ้น สี Champagne" },
  { role: "ai", text: "รับออเดอร์แล้วค่ะ! #1094 ฿1,096.50 จัดส่งพรุ่งนี้ ขอบคุณค่ะ" },
];

export default function EcommerceSection() {
  const [chatBubbleVisible, setChatBubbleVisible] = useState(false);
  const [chatTypingIndex, setChatTypingIndex] = useState(0);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  /* Auto-show chat bubble after 1.5s */
  useEffect(() => {
    const t = setTimeout(() => setChatBubbleVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  /* Chat typing animation in bento card */
  useEffect(() => {
    if (chatTypingIndex < fullConversation.length) {
      const delay = chatTypingIndex === 0 ? 800 : 1600;
      const t = setTimeout(() => setChatTypingIndex((i) => i + 1), delay);
      return () => clearTimeout(t);
    }
  }, [chatTypingIndex]);

  return (
    <div className="bg-[#fbfbfd]">
      {/* ══════════════════════════════════════════════════════════════
          1. COMPACT HERO — 3 lines max
      ══════════════════════════════════════════════════════════════ */}
      <section className="pt-10 pb-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#f5f5f7] rounded-full px-4 py-1.5 mb-4">
              <ShoppingCart size={14} className="text-[#2997ff]" />
              <span className="text-[12px] font-medium text-[#2997ff]">
                E-commerce AI Solution
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.1] mb-2">
              ร้านค้าที่<span className="gradient-text">ไม่เคยหลับ</span>
            </h1>
            <p className="text-[17px] text-[#86868b] max-w-[480px] mx-auto">
              AI ตอบแชท ปิดการขาย จัดการ order สร้าง content — ทำงาน 24/7
              ไม่ต้องจ้างคนเพิ่ม
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FULL-WIDTH MOCK STOREFRONT
      ══════════════════════════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto apple-card p-0 overflow-hidden shadow-xl shadow-black/[0.06]"
        >
          {/* Store header bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#fafafa] border-b border-black/[0.04]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[12px] text-[#86868b] font-medium hidden sm:inline">
                myshop.co.th
              </span>
            </div>
            <div className="flex items-center gap-2 flex-1 max-w-[280px] mx-4">
              <div className="flex items-center gap-2 w-full bg-[#f5f5f7] rounded-full px-3 py-1.5">
                <Search size={12} className="text-[#86868b]" />
                <span className="text-[11px] text-[#d2d2d7]">
                  ค้นหาสินค้า...
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart size={16} className="text-[#86868b]" />
              <div className="relative">
                <ShoppingCart size={16} className="text-[#86868b]" />
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#ff3b30] rounded-full text-[8px] text-white flex items-center justify-center font-bold">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Store body — product grid + AI chat */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.04]">
              {mockProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-4 sm:p-5 group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(i)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Image placeholder */}
                  <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] mb-3 overflow-hidden flex items-center justify-center">
                    <div className="text-[48px] opacity-60">
                      {product.image === "bag"
                        ? "👜"
                        : product.image === "dress"
                        ? "👗"
                        : "👟"}
                    </div>
                    {/* Discount badge */}
                    <div className="absolute top-2 left-2 bg-[#ff3b30] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      -
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100
                      )}
                      %
                    </div>
                    {/* Quick actions on hover */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredProduct === i ? 1 : 0,
                        y: hoveredProduct === i ? 0 : 8,
                      }}
                      className="absolute bottom-2 right-2 flex gap-1.5"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <Heart size={14} className="text-[#1d1d1f]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <Eye size={14} className="text-[#1d1d1f]" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Product info */}
                  <h3 className="text-[13px] font-semibold text-[#1d1d1f] mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-1.5">
                    <Star
                      size={11}
                      className="text-[#ff9500]"
                      fill="#ff9500"
                    />
                    <span className="text-[11px] text-[#1d1d1f] font-medium">
                      {product.rating}
                    </span>
                    <span className="text-[11px] text-[#86868b]">
                      ({product.reviews})
                    </span>
                    <span className="text-[10px] text-[#86868b] ml-auto">
                      ขายแล้ว {product.sold.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[18px] font-bold text-[#ff3b30]">
                      ฿{product.price.toLocaleString()}
                    </span>
                    <span className="text-[12px] text-[#86868b] line-through">
                      ฿{product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  {/* Color swatches */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {product.colors.map((c, ci) => (
                      <div
                        key={ci}
                        className="w-4 h-4 rounded-full border border-black/10"
                        style={{ background: c }}
                      />
                    ))}
                    <span className="text-[10px] text-[#86868b] ml-1">
                      +{product.colors.length} สี
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Chat bubble — floating on the right */}
            <AnimatePresence>
              {chatBubbleVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-[260px] sm:w-[280px]"
                >
                  <div className="bg-white rounded-2xl shadow-2xl shadow-black/[0.12] border border-black/[0.06] overflow-hidden">
                    {/* Chat header */}
                    <div className="flex items-center justify-between px-3 py-2 bg-[#2997ff]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <Bot size={12} className="text-white" />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-white">
                            AI Assistant
                          </span>
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                            <span className="text-[9px] text-white/70">
                              ออนไลน์
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setChatBubbleVisible(false)}
                        className="text-white/60 hover:text-white"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    {/* Chat messages */}
                    <div className="p-3 space-y-2 max-h-[140px] overflow-y-auto">
                      <div className="flex justify-end">
                        <div className="bg-[#2997ff] text-white text-[11px] px-3 py-1.5 rounded-2xl rounded-br-sm max-w-[85%]">
                          มีสี Champagne ไหมคะ?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-[#f5f5f7] text-[#1d1d1f] text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm max-w-[85%]">
                          <p className="font-medium">มีค่ะ! Champagne Gold</p>
                          <p className="text-[#86868b] text-[10px] mt-0.5">
                            เหลือ 12 ชิ้น | ฿890 (ลด 15%)
                          </p>
                          <p className="text-[#86868b] text-[10px]">
                            ส่งฟรี ถึงพรุ่งนี้
                          </p>
                          <p className="text-[#2997ff] text-[10px] mt-1">
                            สั่งเลยไหมคะ?
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-1">
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#34c759]/10 text-[#34c759] font-bold">
                          AI
                        </span>
                        <span className="text-[9px] text-[#86868b]">
                          ตอบใน 1.8 วินาที
                        </span>
                      </div>
                    </div>
                    {/* Input */}
                    <div className="flex items-center gap-2 px-3 py-2 border-t border-black/[0.04]">
                      <div className="flex-1 bg-[#f5f5f7] rounded-full px-3 py-1.5">
                        <span className="text-[10px] text-[#d2d2d7]">
                          พิมพ์ข้อความ...
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#2997ff] flex items-center justify-center">
                        <Send size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Store footer stats */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#fafafa] border-t border-black/[0.04]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                <span className="text-[10px] text-[#34c759] font-medium">
                  AI Active
                </span>
              </div>
              <span className="text-[10px] text-[#86868b]">
                วันนี้: ตอบแชท 156 | ปิดการขาย 23
              </span>
            </div>
            <span className="text-[10px] text-[#86868b] hidden sm:inline">
              Powered by Cloud AI Thailand
            </span>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. ORDER TICKER — horizontal scrolling like stock ticker
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-5 overflow-hidden">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={tickerRef}
            className="flex gap-3 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...orderTickerItems, ...orderTickerItems].map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f5f7] border border-black/[0.04] shrink-0"
              >
                <span className="text-[12px]">{item.emoji}</span>
                <span className="text-[12px] font-mono font-semibold text-[#1d1d1f]">
                  {item.id}
                </span>
                <span
                  className="text-[11px] font-medium"
                  style={{ color: item.color }}
                >
                  {item.status}
                </span>
                <ChevronRight size={10} className="text-[#d2d2d7]" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. BENTO GRID — alternating large/small cards
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-2">
              ทุกอย่างที่ AI ทำให้คุณ
            </h2>
            <p className="text-[15px] text-[#86868b]">
              ดูผลลัพธ์จริงจาก dashboard
            </p>
          </motion.div>

          {/* Row 1: 1 large (left) + 2 small (right) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* LARGE CARD — AI Chat Demo (full conversation) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 apple-card p-0 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.04]">
                <div className="w-7 h-7 rounded-lg bg-[#2997ff]/10 flex items-center justify-center">
                  <MessageSquare size={14} className="text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                    AI Chat Demo
                  </h3>
                  <p className="text-[10px] text-[#86868b]">
                    สนทนาจริงระหว่าง AI กับลูกค้า
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse" />
                  <span className="text-[10px] text-[#34c759] font-medium">
                    Live
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-2.5 min-h-[260px]">
                {fullConversation
                  .slice(0, chatTypingIndex)
                  .map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        msg.role === "customer"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-6 h-6 rounded-full bg-[#2997ff]/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                          <Bot size={12} className="text-[#2997ff]" />
                        </div>
                      )}
                      <div
                        className={`text-[12px] px-3.5 py-2 max-w-[75%] ${
                          msg.role === "customer"
                            ? "bg-[#2997ff] text-white rounded-2xl rounded-br-sm"
                            : "bg-[#f5f5f7] text-[#1d1d1f] rounded-2xl rounded-bl-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                {chatTypingIndex < fullConversation.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex ${
                      fullConversation[chatTypingIndex].role === "customer"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {fullConversation[chatTypingIndex].role === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-[#2997ff]/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                        <Bot size={12} className="text-[#2997ff]" />
                      </div>
                    )}
                    <div className="bg-[#f5f5f7] px-4 py-2.5 rounded-2xl">
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="px-5 py-3 border-t border-black/[0.04] bg-[#fafafa] flex items-center justify-between">
                <span className="text-[10px] text-[#86868b]">
                  ค่าเฉลี่ย: ตอบใน 1.8 วินาที | ปิดการขาย 68%
                </span>
                <span className="text-[10px] font-medium text-[#2997ff]">
                  ดู log ทั้งหมด →
                </span>
              </div>
            </motion.div>

            {/* 2 small cards stacked */}
            <div className="flex flex-col gap-4">
              {/* Small card: Order stats */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="apple-card p-5 flex-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#34c759]/10 flex items-center justify-center">
                    <Package size={16} className="text-[#34c759]" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                    Orders วันนี้
                  </h3>
                </div>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-[42px] font-bold text-[#1d1d1f] leading-none">
                      47
                    </p>
                    <p className="text-[11px] text-[#86868b] mt-1">ออเดอร์</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <TrendingUp size={12} className="text-[#34c759]" />
                      <span className="text-[13px] font-semibold text-[#34c759]">
                        +12%
                      </span>
                    </div>
                    <p className="text-[10px] text-[#86868b]">vs เมื่อวาน</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#34c759]/5">
                  <ShieldCheck size={14} className="text-[#34c759]" />
                  <div>
                    <p className="text-[12px] font-semibold text-[#34c759]">
                      0 errors
                    </p>
                    <p className="text-[10px] text-[#86868b]">
                      AI ตรวจทุก order ก่อนส่ง
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small card: Content generated */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="apple-card p-5 flex-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#5856d6]/10 flex items-center justify-center">
                    <FileText size={16} className="text-[#5856d6]" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                    Content สร้างวันนี้
                  </h3>
                </div>
                <p className="text-[42px] font-bold text-[#1d1d1f] leading-none mb-1">
                  12
                </p>
                <p className="text-[11px] text-[#86868b] mb-3">
                  listings ใหม่
                </p>
                <div className="space-y-1.5">
                  {[
                    "กระเป๋า Luna Mini — Title + Desc + SEO",
                    "เดรส Bloom Set — 3 platform sync",
                    "รองเท้า Nova Kid — เขียน + อัพ",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[10px]"
                    >
                      <Check size={10} className="text-[#5856d6] shrink-0" />
                      <span className="text-[#86868b] truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Row 2: 2 small (left) + 1 large (right) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 2 small cards stacked */}
            <div className="flex flex-col gap-4">
              {/* Small card: Stock alerts */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="apple-card p-5 flex-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#ff9500]/10 flex items-center justify-center">
                    <AlertTriangle size={16} className="text-[#ff9500]" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                    Stock Alerts
                  </h3>
                  <span className="ml-auto text-[10px] font-bold bg-[#ff9500] text-white px-2 py-0.5 rounded-full">
                    3
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      name: "เดรส Bloom (S)",
                      stock: 3,
                      action: "สั่งเพิ่ม 50",
                    },
                    {
                      name: "กระเป๋า Luna",
                      stock: 5,
                      action: "สั่งเพิ่ม 30",
                    },
                    {
                      name: "สร้อย Pearl",
                      stock: 2,
                      action: "สั่งเพิ่ม 20",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#ff9500]/5"
                    >
                      <div>
                        <p className="text-[11px] font-medium text-[#1d1d1f]">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#ff9500]">
                          เหลือ {item.stock} ชิ้น
                        </p>
                      </div>
                      <span className="text-[9px] px-2 py-1 rounded-full bg-[#ff9500]/10 text-[#ff9500] font-medium">
                        {item.action}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Small card: Revenue summary */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="apple-card p-5 flex-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-[#2997ff]/10 flex items-center justify-center">
                    <BarChart3 size={16} className="text-[#2997ff]" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#1d1d1f]">
                    รายได้วันนี้
                  </h3>
                </div>
                <p className="text-[36px] font-bold text-[#1d1d1f] leading-none mb-1">
                  ฿23,450
                </p>
                <div className="flex items-center gap-1 mb-3">
                  <TrendingUp size={11} className="text-[#34c759]" />
                  <span className="text-[11px] font-medium text-[#34c759]">
                    +฿4,200 จากเมื่อวาน
                  </span>
                </div>
                {/* Mini bar chart */}
                <div className="flex items-end gap-1 h-[50px]">
                  {[35, 45, 28, 52, 68, 42, 78, 55, 82, 60, 90, 72].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 11
                              ? "#2997ff"
                              : i >= 9
                              ? "#2997ff40"
                              : "#e5e5ea",
                        }}
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[8px] text-[#86868b]">08:00</span>
                  <span className="text-[8px] text-[#86868b]">14:00</span>
                  <span className="text-[8px] text-[#86868b]">20:00</span>
                </div>
              </motion.div>
            </div>

            {/* LARGE CARD — Full dashboard preview */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 apple-card p-0 overflow-hidden"
            >
              {/* Dashboard chrome */}
              <div className="flex items-center gap-3 px-5 py-3 bg-[#f5f5f7] border-b border-black/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[12px] text-[#86868b] font-medium">
                  E-commerce AI Dashboard
                </span>
              </div>
              <div className="p-5">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    {
                      label: "ยอดขายวันนี้",
                      value: "฿23,450",
                      change: "+12%",
                      icon: <DollarSign size={14} />,
                      color: "#34c759",
                    },
                    {
                      label: "ออเดอร์",
                      value: "47",
                      change: "+8%",
                      icon: <Package size={14} />,
                      color: "#2997ff",
                    },
                    {
                      label: "แชทตอบแล้ว",
                      value: "156/162",
                      change: "96%",
                      icon: <MessageSquare size={14} />,
                      color: "#5856d6",
                    },
                    {
                      label: "Review ใหม่",
                      value: "8",
                      change: "4.7★",
                      icon: <Star size={14} />,
                      color: "#ff9500",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="p-3 rounded-xl bg-[#fafafa] border border-black/[0.03]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] text-[#86868b]">
                          {s.label}
                        </span>
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center"
                          style={{
                            background: s.color + "12",
                            color: s.color,
                          }}
                        >
                          {s.icon}
                        </div>
                      </div>
                      <p className="text-[18px] font-semibold text-[#1d1d1f]">
                        {s.value}
                      </p>
                      <p
                        className="text-[10px] font-medium"
                        style={{ color: s.color }}
                      >
                        {s.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-[12px] font-semibold text-[#1d1d1f]">
                      Recent Orders
                    </h4>
                    <span className="text-[10px] text-[#2997ff] font-medium">
                      ดูทั้งหมด →
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      {
                        id: "#1094",
                        cust: "คุณแอน",
                        items: "กระเป๋า Luna Champagne",
                        total: "฿1,096",
                        status: "AI ปิดการขาย",
                        sc: "#2997ff",
                      },
                      {
                        id: "#1093",
                        cust: "คุณพิมพ์",
                        items: "เดรส Bloom x2",
                        total: "฿1,780",
                        status: "กำลังแพ็ค",
                        sc: "#ff9500",
                      },
                      {
                        id: "#1092",
                        cust: "คุณสมชาย",
                        items: "รองเท้า Nova x1",
                        total: "฿2,490",
                        status: "ส่งแล้ว",
                        sc: "#34c759",
                      },
                      {
                        id: "#1091",
                        cust: "คุณแก้ว",
                        items: "สร้อย Pearl Set",
                        total: "฿890",
                        status: "ชำระแล้ว",
                        sc: "#34c759",
                      },
                    ].map((o) => (
                      <div
                        key={o.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#fafafa]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-[#86868b]">
                            {o.id}
                          </span>
                          <div>
                            <p className="text-[12px] font-medium text-[#1d1d1f]">
                              {o.cust}
                            </p>
                            <p className="text-[10px] text-[#86868b]">
                              {o.items}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[12px] font-medium text-[#1d1d1f]">
                            {o.total}
                          </p>
                          <span
                            className="text-[9px] font-medium px-1.5 py-0.5 rounded-full"
                            style={{
                              background: o.sc + "12",
                              color: o.sc,
                            }}
                          >
                            {o.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Activity log */}
                <div>
                  <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5">
                    AI Activity
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      {
                        icon: <MessageSquare size={12} />,
                        text: 'ตอบแชท "มีสีอะไรบ้าง"',
                        time: "2 นาทีที่แล้ว",
                        color: "#2997ff",
                      },
                      {
                        icon: <FileText size={12} />,
                        text: "สร้าง listing กระเป๋า Mini",
                        time: "8 นาทีที่แล้ว",
                        color: "#5856d6",
                      },
                      {
                        icon: <Bell size={12} />,
                        text: "แจ้ง stock เดรส Bloom ต่ำ",
                        time: "15 นาทีที่แล้ว",
                        color: "#ff9500",
                      },
                    ].map((a, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-[#fafafa]"
                      >
                        <div
                          className="w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0"
                          style={{
                            background: a.color + "12",
                            color: a.color,
                          }}
                        >
                          {a.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-[#1d1d1f] font-medium">
                            {a.text}
                          </p>
                          <p className="text-[9px] text-[#86868b]">
                            {a.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. AI CAPABILITIES — horizontal scroll pill badges
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#1d1d1f] px-6">
            AI ทำอะไรได้บ้าง
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none" />

          {/* Row 1 — scrolls left */}
          <motion.div
            className="flex gap-2.5 mb-2.5 whitespace-nowrap"
            animate={{ x: [0, -800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...aiCapabilities.slice(0, 7), ...aiCapabilities.slice(0, 7)].map(
              (cap, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/[0.06] shadow-sm shrink-0"
                >
                  <Sparkles size={12} className="text-[#2997ff]" />
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    {cap}
                  </span>
                </div>
              )
            )}
          </motion.div>

          {/* Row 2 — scrolls right */}
          <motion.div
            className="flex gap-2.5 whitespace-nowrap"
            animate={{ x: [-800, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {[...aiCapabilities.slice(7), ...aiCapabilities.slice(7)].map(
              (cap, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-black/[0.06] shadow-sm shrink-0"
                >
                  <Zap size={12} className="text-[#5856d6]" />
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    {cap}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. PRICING — single recommended plan prominently
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-2">
              แพ็คเกจที่เราแนะนำ
            </h2>
            <p className="text-[15px] text-[#86868b]">
              เหมาะกับร้านค้าออนไลน์ 50-200 orders/วัน
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="apple-card p-0 overflow-hidden ring-2 ring-[#2997ff]/20 shadow-xl shadow-[#2997ff]/[0.06]"
          >
            {/* Plan header */}
            <div className="bg-gradient-to-r from-[#2997ff] to-[#5856d6] px-6 sm:px-8 py-6 text-center text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">
                แนะนำ
              </span>
              <h3 className="text-[24px] font-bold mt-1">Professional</h3>
              <div className="flex items-baseline justify-center gap-1 mt-2">
                <span className="text-[48px] font-bold leading-none">
                  ฿39,900
                </span>
              </div>
              <p className="text-[13px] opacity-80 mt-1">
                Setup fee (ครั้งเดียว) + ฿2,000-5,000/เดือน (API ตามใช้จริง)
              </p>
            </div>

            {/* Features grid */}
            <div className="p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                {[
                  "ตอบแชท AI (LINE / FB / IG)",
                  "จัดการ Order อัตโนมัติ",
                  "Stock Alerts ทุก platform",
                  "สร้าง Product Content AI",
                  "Review Management",
                  "Sales Analytics รายวัน",
                  "10 Custom Workflows",
                  "Training 2 ชั่วโมง",
                  "Support 60 วัน",
                  "Dashboard ครบ",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#34c759]/10 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-[#34c759]" />
                    </div>
                    <span className="text-[13px] text-[#1d1d1f]">{f}</span>
                  </div>
                ))}
              </div>

              {/* ROI box */}
              <div className="p-4 rounded-2xl bg-[#f5f5f7] mb-6">
                <p className="text-[12px] font-semibold text-[#1d1d1f] mb-3">
                  คุ้มค่าแค่ไหน?
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-[18px] font-bold text-[#ff3b30]">
                      ฿15,000
                    </p>
                    <p className="text-[10px] text-[#86868b]">
                      จ้างคนตอบแชท/เดือน
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-[#34c759]">
                      ฿2,500
                    </p>
                    <p className="text-[10px] text-[#86868b]">
                      ใช้ AI แทน/เดือน
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-bold text-[#2997ff]">
                      ฿150K+
                    </p>
                    <p className="text-[10px] text-[#86868b]">ประหยัด/ปี</p>
                  </div>
                </div>
              </div>

              {/* CTA in pricing */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/#contact"
                  className="w-full sm:flex-1 text-center apple-btn apple-btn-blue text-[15px] font-semibold py-3.5"
                >
                  เริ่มต้นใช้งาน Professional
                </a>
              </div>
              <p className="text-center mt-3">
                <a
                  href="/#contact"
                  className="text-[13px] text-[#2997ff] font-medium hover:underline"
                >
                  ดูแพ็คเกจอื่น (Starter ฿19,900 / Enterprise ฿69,900) →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#34c759]/10 rounded-full px-4 py-1.5 mb-5">
            <Zap size={14} className="text-[#34c759]" />
            <span className="text-[12px] font-medium text-[#34c759]">
              Setup ภายใน 3-5 วัน
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#1d1d1f] mb-3">
            พร้อมให้ AI ช่วยขายของ?
          </h2>
          <p className="text-[15px] text-[#86868b] mb-3 max-w-[420px] mx-auto">
            บอกเราว่าร้านคุณขายอะไร ขายที่ไหน — เราออกแบบ AI workflow ให้ฟรี
          </p>
          <div className="flex items-center justify-center gap-4 text-[12px] text-[#86868b] mb-8">
            <span className="flex items-center gap-1">
              <Check size={12} className="text-[#34c759]" /> ปรึกษาฟรี
            </span>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-[#34c759]" /> ไม่ผูกสัญญา
            </span>
            <span className="flex items-center gap-1">
              <Check size={12} className="text-[#34c759]" /> เห็นผลใน 7 วัน
            </span>
          </div>
          <a href="/#contact" className="apple-btn apple-btn-blue text-[15px] px-10 py-3.5">
            ปรึกษาฟรี — เริ่มต้นวันนี้
          </a>
        </motion.div>
      </section>
    </div>
  );
}
