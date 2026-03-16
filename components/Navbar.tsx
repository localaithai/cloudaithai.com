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
  { href: "/#models", label: "AI Models" },
  {
    label: "Solutions",
    children: [
      { href: "/solutions/ecommerce", label: "ร้านค้าออนไลน์", desc: "E-commerce & Retail" },
      { href: "/solutions/creator", label: "Content Creator", desc: "Creator & Agency" },
      { href: "/solutions/legal", label: "สำนักงานกฎหมาย", desc: "Legal & Compliance" },
      { href: "/solutions/healthcare", label: "คลินิก & โรงพยาบาล", desc: "Healthcare" },
      { href: "/solutions/realestate", label: "อสังหาริมทรัพย์", desc: "Real Estate" },
      { href: "/solutions/restaurant", label: "ร้านอาหาร & F&B", desc: "Food & Beverage" },
    ],
  },
  {
    label: "เครื่องมือ",
    children: [
      { href: "/#tools", label: "ภาพรวมเครื่องมือ", desc: "5 tools ที่เราติดตั้ง" },
      { href: "/#use-cases", label: "ตัวอย่างใช้งาน", desc: "8 automation workflows" },
      { href: "/home-ai", label: "Home AI Assistant", desc: "ผู้ช่วย AI ที่บ้าน" },
    ],
  },
  { href: "/#pricing", label: "ราคา" },
  { href: "/#contact", label: "ติดต่อ" },
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
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 rounded-2xl liquid-glass-strong overflow-hidden p-1"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(255,255,255,0.5)" }}
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
        scrolled ? "liquid-glass-strong" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#007aff] to-[#5856d6] flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-black">C</span>
          </div>
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
        <button onClick={() => setOpen(!open)} className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-[#1c1c1e] block" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[1.5px] bg-[#1c1c1e] block" />
          <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-[#1c1c1e] block" />
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
            <div className="liquid-glass-strong px-6 pb-6 pt-2">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
