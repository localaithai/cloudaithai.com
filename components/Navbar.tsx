"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface NavLink { href: string; label: string; desc?: string }
interface NavGroup { label: string; children: NavLink[] }
type NavItem = NavLink | NavGroup;
function isGroup(item: NavItem): item is NavGroup { return "children" in item; }

const navItems: NavItem[] = [
  {
    label: "Solutions",
    children: [
      { href: "/solutions/ecommerce", label: "ร้านค้าออนไลน์", desc: "E-commerce & Retail" },
      { href: "/solutions/creator", label: "Content Creator", desc: "Creator & Agency" },
      { href: "/solutions/legal", label: "สำนักงานกฎหมาย", desc: "Legal & Compliance" },
      { href: "/solutions/healthcare", label: "คลินิก & โรงพยาบาล", desc: "Healthcare" },
      { href: "/solutions/realestate", label: "อสังหาริมทรัพย์", desc: "Real Estate" },
      { href: "/solutions/restaurant", label: "ร้านอาหาร & F&B", desc: "Food & Beverage" },
      { href: "/home-ai", label: "Home AI", desc: "ผู้ช่วย AI ส่วนตัว" },
      { href: "/case-studies", label: "Case Studies", desc: "ตัวอย่างผลลัพธ์จริง" },
    ],
  },
  {
    label: "วิธีทำงาน",
    children: [
      { href: "/how-it-works", label: "ขั้นตอนทำงาน", desc: "ปรึกษา → ติดตั้ง → ใช้งาน" },
      { href: "/prototype", label: "Prototype & Demo", desc: "ทดลองก่อน จ่ายทีหลัง" },
      { href: "/tech-stack", label: "Tech Stack", desc: "เครื่องมือที่เราใช้" },
      { href: "/integrations", label: "55+ Integrations", desc: "เชื่อมต่อทุกแอป" },
      { href: "/methodology", label: "หลักการ & Security", desc: "Principles, PDPA, Risk" },
      { href: "/compare", label: "เปรียบเทียบ", desc: "ChatGPT vs Custom AI" },
    ],
  },
  { href: "/pricing", label: "ราคา" },
  {
    label: "เพิ่มเติม",
    children: [
      { href: "/resources", label: "Resources", desc: "คู่มือ + เครื่องมือคำนวณ" },
      { href: "/ecosystem", label: "Ecosystem", desc: "Cloud + Local AI" },
      { href: "/support", label: "Support", desc: "ดูแลระบบรายเดือน" },
      { href: "/about", label: "เกี่ยวกับเรา", desc: "CloudAI Thailand" },
      { href: "https://www.localaithai.com", label: "Local AI Thailand", desc: "ต้องการ Privacy 100% →" },
    ],
  },
];

function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[13px] text-[#6e6e73] hover:text-[#1c1c1e] transition-colors"
      >
        {group.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl overflow-hidden p-1"
            style={{ background: "rgba(251,251,253,0.96)", backdropFilter: "blur(60px) saturate(180%)", WebkitBackdropFilter: "blur(60px) saturate(180%)", boxShadow: "0 12px 40px rgba(0,0,0,0.1), 0 0 0 0.5px rgba(0,0,0,0.06), inset 0 0.5px 0 rgba(255,255,255,0.7)" }}
          >
            {group.children.map((child) => (
              <a
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 rounded-xl hover:bg-white/40 transition-all"
              >
                <span className="text-[13px] font-medium text-[#1c1c1e] block">{child.label}</span>
                {child.desc && <span className="text-[11px] text-[#8e8e93] block">{child.desc}</span>}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({ group, onNav }: { group: NavGroup; onNav: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-3 text-[15px] text-[#1c1c1e] font-medium">
        {group.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }}><ChevronDown size={16} className="text-[#8e8e93]" /></motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pl-4 pb-2 space-y-0.5">
              {group.children.map((child) => (
                <a key={child.href} href={child.href} onClick={onNav} className="block py-2 px-3 rounded-xl text-[14px] text-[#6e6e73] hover:bg-white/30 transition-colors">
                  {child.label}
                  {child.desc && <span className="text-[11px] text-[#8e8e93] block">{child.desc}</span>}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/icon.svg" alt="CloudAI" className="w-7 h-7 rounded-lg shadow-sm" />
          <span className="text-[15px] font-semibold text-[#1c1c1e] tracking-tight">
            Cloud<span className="text-[#007aff]">AI</span>
            <span className="text-[#8e8e93] text-[10px] font-normal ml-1 hidden sm:inline">Thailand</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item, i) =>
            isGroup(item) ? (
              <DesktopDropdown key={item.label} group={item} />
            ) : (
              <a key={item.href} href={item.href} className="text-[13px] text-[#6e6e73] hover:text-[#1c1c1e] transition-colors">
                {item.label}
              </a>
            )
          )}
          <a href="/#contact" className="text-[13px] font-medium text-white bg-[#007aff] hover:bg-[#0077ed] px-5 py-2 rounded-full transition-colors shadow-sm shadow-[#007aff]/20">
            เริ่มต้นใช้งาน
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl active:bg-black/5 transition-colors">
          <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-[#1c1c1e] block rounded-full" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-[2px] bg-[#1c1c1e] block rounded-full" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-[2px] bg-[#1c1c1e] block rounded-full" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 pb-8 pt-2 max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain" style={{ background: "rgba(251,251,253,0.98)", backdropFilter: "blur(40px) saturate(180%)", WebkitBackdropFilter: "blur(40px) saturate(180%)" }}>
              {navItems.map((item) =>
                isGroup(item) ? (
                  <MobileGroup key={item.label} group={item} onNav={() => setOpen(false)} />
                ) : (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-[15px] text-[#1c1c1e] font-medium">
                    {item.label}
                  </a>
                )
              )}
              <a href="/#contact" onClick={() => setOpen(false)} className="block mt-3 text-center text-[15px] font-medium text-white bg-[#007aff] py-3 rounded-full">
                เริ่มต้นใช้งาน
              </a>
              <div className="h-6" aria-hidden="true" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
