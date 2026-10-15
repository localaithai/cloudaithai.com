import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { site } from "@/lib/site";
import { navigation } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        initial={false}
        animate={{ y: 0 }}
        className="fixed inset-x-0 top-0 z-50 bg-[#fbfbfd]/85 backdrop-blur-xl border-b border-black/[.04]"
      >
        <a href="#content" className="skip-link">
          ข้ามไปยังเนื้อหา
        </a>
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <a
            href="/"
            className="inline-flex min-h-11 items-center font-semibold text-[#1d1d1f]"
          >
            Cloud<span className="text-[#0071e3]">AI</span>{" "}
            <span className="text-xs text-[#6e6e73]">Thailand</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-[#6e6e73]">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center hover:text-[#1d1d1f]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.primaryCta.href}
              className="apple-btn apple-btn-blue !py-2"
            >
              {site.primaryCta.label}
            </a>
          </div>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="md:hidden min-h-11 min-w-11 px-3 text-sm"
          >
            Menu
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={reducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={
                reducedMotion
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              className="md:hidden overflow-hidden border-t border-black/[.04]"
            >
              <div className="px-6 py-4 grid gap-3 text-sm">
                {navigation.map((item) =>
                  item.external ? (
                    <a
                      className="flex min-h-11 items-center py-2.5"
                      onClick={() => setOpen(false)}
                      key={item.href}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      className="flex min-h-11 items-center py-2.5"
                      onClick={() => setOpen(false)}
                      key={item.href}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ),
                )}
                <a
                  href={site.primaryCta.href}
                  className="flex min-h-11 items-center py-2.5 text-[#0071e3] font-medium"
                >
                  {site.primaryCta.label}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
}
