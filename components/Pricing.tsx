"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { site } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing" className="apple-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#2997ff] font-medium mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            เลือกแอป, เลือก seat
          </h2>
          <div className="mt-8 apple-card p-8">
            <p className="text-lg text-[#1d1d1f]">
              Mimir Suites Cloud คิดราคา <strong>ต่อแอป ต่อ seat</strong>
            </p>
            <p className="mt-3 text-[#6e6e73]">
              ค่าใช้โมเดลยังไม่กำหนด จึงแสดงเป็น ติดต่อเรา
            </p>
            <Link
              href={site.primaryCta.href}
              className="apple-btn apple-btn-blue mt-7 inline-flex"
            >
              {site.primaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
