"use client";
import { motion } from "framer-motion";
import { setupSteps } from "@/lib/site-data";
export default function ScrollShowcase() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Suite พร้อมงาน, ทีละเครื่อง
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            ตั้งค่าในแอป แล้วเลือกสิ่งที่เหมาะกับงานของคุณ
          </p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-5 gap-3">
          {setupSteps.map(([number, title, detail], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="apple-card p-5"
            >
              <p className="text-[#0071e3] text-sm font-semibold">{number}</p>
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                {detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
