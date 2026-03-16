"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#models", label: "AI Models" },
  { href: "#tools", label: "เครื่องมือ" },
  { href: "#use-cases", label: "ตัวอย่างใช้งาน" },
  { href: "#pricing", label: "ราคา" },
  { href: "#contact", label: "ติดต่อ" },
];

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
        scrolled ? "glass border-b border-black/[0.04] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#5856d6] flex items-center justify-center">
            <span className="text-white text-xs font-black">C</span>
          </div>
          <span className="text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
            Cloud<span className="text-[#0071e3]">AI</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-[13px] font-medium text-white bg-[#0071e3] hover:bg-[#0077ed] px-5 py-2 rounded-full transition-colors">
            เริ่มต้นใช้งาน
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-[#1d1d1f] block" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[1.5px] bg-[#1d1d1f] block" />
          <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-[#1d1d1f] block" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-b border-black/[0.04]"
          >
            <div className="px-6 pb-6 pt-2 space-y-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[15px] text-[#1d1d1f] font-medium">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block mt-3 text-center text-[15px] font-medium text-white bg-[#0071e3] py-3 rounded-full">
                เริ่มต้นใช้งาน
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
