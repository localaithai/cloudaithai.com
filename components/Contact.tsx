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
          <p className="text-[#0071e3] font-medium">{site.primaryCta.label}</p>
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
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="block text-sm font-medium text-[#1d1d1f]">
                ชื่อ
              </label>
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="ชื่อ"
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="block text-sm font-medium text-[#1d1d1f]">
                อีเมล
              </label>
              <input
                id="contact-email"
                name="email"
                required
                type="email"
                autoComplete="email"
                placeholder="อีเมล"
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-interest" className="block text-sm font-medium text-[#1d1d1f]">
                แอปและ seat ที่สนใจ
              </label>
              <select
                id="contact-interest"
                name="interest"
                className="w-full rounded-xl border border-black/10 p-3"
              >
                <option>แอปและ seat ที่สนใจ</option>
              <option>Converters</option>
              <option>Systems of record</option>
              <option>ยังไม่แน่ใจ</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#1d1d1f]">
                งานที่อยากให้ Suite ช่วย และจำนวนเครื่อง
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="งานที่อยากให้ Suite ช่วย และจำนวนเครื่อง"
                className="w-full rounded-xl border border-black/10 p-3"
              />
            </div>
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
