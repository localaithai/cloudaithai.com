import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { site } from "@/lib/site";
import { navigation } from "@/lib/site-data";

const ease = [0.22, 0.75, 0.2, 1] as const;

function currentState(path: string, href: string) {
  if (path === href) return "page" as const;
  if (href.startsWith("/") && path.startsWith(href)) return "true" as const;
  return undefined;
}

export default function Navbar({ currentPath = "" }: { currentPath?: string }) {
  const [open, setOpen] = useState(false);
  const [glass, setGlass] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setGlass(y > 24);
      if (y > lastY + 4) {
        if (y > window.innerHeight) setHidden(true);
        lastY = y;
      } else if (y < lastY - 4) {
        setHidden(false);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const root = document.documentElement;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        initial={false}
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.6, ease }}
        onFocus={() => setHidden(false)}
        data-glass={glass || open ? "" : undefined}
        className="fixed inset-x-0 top-0 z-50 border-b border-b-transparent transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-(--ease-brand) data-glass:border-b-[rgb(0_0_0/0.07)] data-glass:bg-[rgb(251_251_253/0.72)] data-glass:shadow-[0_12px_32px_-22px_rgb(29_29_31/0.28)] data-glass:backdrop-blur-[18px] data-glass:backdrop-saturate-[1.8]"
      >
        <a
          href="#content"
          className="fixed top-4 left-4 z-60 rounded-lg bg-white px-4 py-3 text-[#1d1d1f] shadow-[0_0_0_2px_#0071e3] [transform:translateY(-150%)] focus-visible:[transform:translateY(0)]"
        >
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
                aria-current={currentState(currentPath, item.href)}
                className="hairline-link inline-flex min-h-11 items-center hover:text-[#1d1d1f]"
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
            className="md:hidden min-h-11 min-w-11 -mr-2 rounded-full px-4 text-sm text-[#1d1d1f] transition-colors duration-300 hover:bg-black/[.04] aria-expanded:bg-black/[.05]"
          >
            Menu
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease }}
              className="md:hidden flex h-[calc(100dvh-4rem)] flex-col justify-between gap-10 overflow-y-auto border-t border-black/[.06] bg-[#fbfbfd] px-6 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
              <motion.ul
                initial={reducedMotion ? false : "closed"}
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.055, delayChildren: 0.06 },
                  },
                }}
                className="m-0 grid list-none gap-1 p-0"
              >
                {navigation.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      closed: { opacity: 0, y: 14 },
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease },
                      },
                    }}
                  >
                    <a
                      className="flex min-h-14 items-center text-[clamp(1.625rem,7.5vw,2.125rem)] font-semibold leading-[1.3] tracking-[-0.02em] text-[#1d1d1f] transition-colors duration-300 hover:text-[#0071e3] aria-[current]:text-[#0071e3]"
                      onClick={() => setOpen(false)}
                      href={item.href}
                      aria-current={currentState(currentPath, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.06 + navigation.length * 0.055,
                }}
                className="border-t border-black/[.06] pt-6"
              >
                <a
                  href={site.primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="apple-btn apple-btn-blue w-full"
                >
                  {site.primaryCta.label}
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
}
