"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { site } from "@/lib/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="apple-section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#2997ff] font-medium">{site.primaryCta.label}</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            เลือกแอปและ seat ที่ต้องการ
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            บอกงาน จำนวนเครื่อง และแอปที่สนใจ เราจะช่วยเริ่มบทสนทนา
          </p>
        </motion.div>
        {submitted ? (
          <div className="apple-card max-w-xl mx-auto mt-9 p-7 text-center">
            ได้รับข้อความแล้ว
          </div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action="https://formspree.io/f/mzzeydvp"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            className="apple-card max-w-xl mx-auto mt-9 p-6 space-y-4"
          >
            <input
              name="name"
              required
              placeholder="ชื่อ"
              className="w-full rounded-xl border border-black/10 p-3"
            />
            <input
              name="email"
              required
              type="email"
              placeholder="อีเมล"
              className="w-full rounded-xl border border-black/10 p-3"
            />
            <select
              name="interest"
              className="w-full rounded-xl border border-black/10 p-3"
            >
              <option>แอปและ seat ที่สนใจ</option>
              <option>Converters</option>
              <option>Systems of record</option>
              <option>ยังไม่แน่ใจ</option>
            </select>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="งานที่อยากให้ Suite ช่วย และจำนวนเครื่อง"
              className="w-full rounded-xl border border-black/10 p-3"
            />
            <button className="apple-btn apple-btn-blue w-full" type="submit">
              {site.primaryCta.label}
            </button>
          </motion.form>
        )}
        <p className="mt-6 text-center text-sm text-[#6e6e73]">
          <a href={`mailto:${site.contact.email}`} className="underline">
            {site.contact.email}
          </a>{" "}
          · {site.contact.phone}
        </p>
      </div>
    </section>
  );
}
