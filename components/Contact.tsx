"use client";

import { motion } from "framer-motion";

import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="apple-section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#0071e3] font-medium">{site.primaryCta.label}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            เลือกแอปและ seat ที่ต้องการ
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            บอกงาน จำนวนเครื่อง และแอปที่สนใจ เราจะช่วยเริ่มบทสนทนา
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-cta="form"
          className="max-w-xl mx-auto mt-9"
        />
        <p className="mt-6 text-center text-sm text-[#6e6e73]">
          <a data-cta="email" className="underline" />{" "}
          <a data-cta="tel" className="underline" />{" "}
          <a data-cta="line" className="underline">
            LINE
          </a>
        </p>
      </div>
    </section>
  );
}
