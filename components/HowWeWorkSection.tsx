"use client";
import { motion } from "framer-motion";

export default function HowWeWorkSection() {
  return (
    <section className="apple-section">
      <div className="max-w-[980px] mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-[40px] sm:text-[56px] font-semibold tracking-[-0.04em] text-[#1d1d1f] mb-4">วิธีทำงานของเรา</h1>
          <p className="text-[19px] text-[#6e6e73] max-w-[600px] mx-auto">กำลังปรับปรุง — เร็วๆ นี้</p>
        </motion.div>
      </div>
    </section>
  );
}
