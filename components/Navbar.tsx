"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { site } from "@/lib/site";
import { navigation } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50 bg-[#fbfbfd]/85 backdrop-blur-xl border-b border-black/[.04]"
    >
      <a href="#content" className="skip-link">
        ข้ามไปยังเนื้อหา
      </a>
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-[#1d1d1f]">
          Cloud<span className="text-[#0071e3]">AI</span>{" "}
          <span className="text-xs text-[#6e6e73]">Thailand</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-[#6e6e73]">
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#1d1d1f]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#1d1d1f]"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={site.primaryCta.href}
            className="apple-btn apple-btn-blue !py-2"
          >
            {site.primaryCta.label}
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-sm">
          Menu
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-black/[.04]"
          >
            <div className="px-6 py-4 grid gap-3 text-sm">
              {navigation.map((item) =>
                item.external ? (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <Link
                    onClick={() => setOpen(false)}
                    key={item.href}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <Link
                href={site.primaryCta.href}
                className="text-[#0071e3] font-medium"
              >
                {site.primaryCta.label}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
