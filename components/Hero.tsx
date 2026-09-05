"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { site } from "@/lib/site";
import { models } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 left-1/4 h-[34rem] w-[34rem] rounded-full bg-[#0071e3]/10 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#0071e3] font-medium mb-5"
        >
          Mimir Suites Cloud
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl font-semibold tracking-[-.045em] text-[#1d1d1f]"
        >
          AI บนทุกเครื่อง
          <br />
          <span className="gradient-text">ของทีมคุณ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-7 text-lg sm:text-xl text-[#6e6e73] leading-relaxed"
        >
          ติดตั้ง Mimir Suite บนเครื่องพนักงาน เลือกแอปและโมเดลคลาวด์ได้เอง
          ไม่ต้องซื้อเครื่อง AI ไม่มีเซิร์ฟเวอร์ และไม่มีบริการโฮสต์จากเรา
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-9 flex flex-wrap justify-center items-center gap-4"
        >
          <Link
            href={site.primaryCta.href}
            className="apple-btn apple-btn-blue"
          >
            {site.primaryCta.label}
          </Link>
          <Link href="/pricing" className="apple-link">
            ดูรูปแบบราคา
          </Link>
        </motion.div>
        <div className="mt-14">
          <p className="text-xs text-[#6e6e73] uppercase tracking-[.16em] mb-4">
            Choose a model for the work
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {models.map((model) => (
              <span
                key={model}
                className="rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-[#1d1d1f] shadow-sm"
              >
                {model}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
