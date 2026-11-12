import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { CLOUD_MARK_PATH, CLOUD_VIEWBOX } from "@/lib/brand-mark";
import { site } from "@/lib/site";
import { navigation } from "@/lib/site-data";

const ease = [0.22, 1, 0.36, 1] as const;

function currentState(path: string, href: string) {
  if (path === href) return "page" as const;
  if (href.startsWith("/") && path.startsWith(href)) return "true" as const;
  return undefined;
}

export default function Navbar({
  currentPath = "",
  onInk = false,
}: {
  currentPath?: string;
  /** The page opens on an ink band, so the bar starts transparent with white type. */
  onInk?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled(y > 24);
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
    const desktop = window.matchMedia("(min-width: 1024px)");
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

  const tone = open || (onInk && !scrolled) ? "ink" : "paper";

  return (
    <MotionConfig reducedMotion="user">
      <motion.nav
        initial={false}
        animate={{ y: hidden && !open ? -100 : 0 }}
        transition={{ duration: 0.6, ease }}
        onFocus={() => setHidden(false)}
        data-tone={tone}
        data-open={open ? "" : undefined}
        className="group/nav fixed inset-x-0 top-0 z-50 border-b border-transparent text-ink transition-[background-color,border-color,color] duration-300 data-open:bg-ink data-[tone=ink]:text-white data-[tone=ink]:[&_:focus-visible]:outline-white data-[tone=paper]:border-line data-[tone=paper]:bg-white"
      >
        <a
          href="#content"
          className="fixed top-4 left-4 z-60 rounded-lg bg-white px-4 py-3 font-semibold text-ink outline-2 outline-ink [transform:translateY(-150%)] focus-visible:[transform:translateY(0)]"
        >
          ข้ามไปยังเนื้อหา
        </a>
        <div className="shell flex h-16 items-center justify-between gap-6">
          <a
            href="/"
            className="inline-flex min-h-11 items-center gap-2.5 text-[1.0625rem] font-bold"
          >
            <svg
              viewBox={CLOUD_VIEWBOX}
              aria-hidden="true"
              className="h-5 w-auto flex-none"
            >
              <path
                d={CLOUD_MARK_PATH}
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span>
              CloudAI <span className="font-medium">Thailand</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-meta font-semibold lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={currentState(currentPath, item.href)}
                className="hairline-link inline-flex min-h-11 items-center"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.primaryCta.href}
              className="btn group-data-[tone=ink]/nav:bg-white group-data-[tone=ink]/nav:text-ink group-data-[tone=ink]/nav:hover:bg-wash group-data-[tone=paper]/nav:bg-ink group-data-[tone=paper]/nav:text-white group-data-[tone=paper]/nav:hover:bg-ink-deep"
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
            className="-mr-1 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg border-[1.5px] border-current px-4 text-meta font-semibold lg:hidden"
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
              transition={{ duration: reducedMotion ? 0 : 0.25, ease }}
              className="flex h-[calc(100dvh-4rem)] flex-col justify-between gap-10 overflow-y-auto bg-ink px-[clamp(1.25rem,4.5vw,3.5rem)] pt-2 pb-[max(2rem,env(safe-area-inset-bottom))] text-white lg:hidden"
            >
              <motion.ul
                initial={reducedMotion ? false : "closed"}
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                }}
                className="m-0 grid list-none p-0"
              >
                {navigation.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      closed: { y: 14 },
                      open: { y: 0, transition: { duration: 0.5, ease } },
                    }}
                    className="border-b border-on-ink-line"
                  >
                    <a
                      className="flex min-h-16 items-center text-[clamp(1.625rem,7vw,2.125rem)] [line-height:1.3] font-semibold aria-[current]:underline aria-[current]:decoration-2 aria-[current]:underline-offset-8"
                      onClick={() => setOpen(false)}
                      href={item.href}
                      aria-current={currentState(currentPath, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <a
                href={site.primaryCta.href}
                onClick={() => setOpen(false)}
                className="btn btn-paper w-full"
              >
                {site.primaryCta.label}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </MotionConfig>
  );
}
