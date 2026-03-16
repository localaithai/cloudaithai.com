"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            ปรึกษาฟรี
          </h2>
          <p className="text-lg text-[#86868b]">บอกเราว่าต้องการ automate อะไร — เราออกแบบ solution ให้ฟรี</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 border border-[#30d158]/20 text-center">
                <div className="w-14 h-14 rounded-full bg-[#30d158]/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-[#30d158]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">ส่งเรียบร้อย!</h3>
                <p className="text-[14px] text-[#86868b]">เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mzzeydvp"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                <div>
                  <input name="name" type="text" required placeholder="ชื่อ-นามสกุล" className="w-full px-4 py-3 text-[14px] text-[#1d1d1f] placeholder:text-[#c7c7cc] bg-white rounded-[14px] border border-[#d2d2d7]/40 focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="email" type="email" required placeholder="อีเมล" className="w-full px-4 py-3 text-[14px] text-[#1d1d1f] placeholder:text-[#c7c7cc] bg-white rounded-[14px] border border-[#d2d2d7]/40 focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 focus:outline-none" />
                  <input name="phone" type="tel" placeholder="เบอร์โทร" className="w-full px-4 py-3 text-[14px] text-[#1d1d1f] placeholder:text-[#c7c7cc] bg-white rounded-[14px] border border-[#d2d2d7]/40 focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 focus:outline-none" />
                </div>
                <div>
                  <select name="package" className="w-full px-4 py-3 rounded-xl bg-white border border-black/[0.08] text-[14px] text-[#1d1d1f] focus:outline-none focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 transition-all">
                    <option value="">เลือกแพ็คเกจที่สนใจ</option>
                    <option value="starter">Starter ฿19,900</option>
                    <option value="professional">Professional ฿39,900</option>
                    <option value="enterprise">Enterprise ฿89,900</option>
                    <option value="custom">Custom / ไม่แน่ใจ</option>
                  </select>
                </div>
                <div>
                  <textarea name="message" rows={4} required placeholder="ธุรกิจทำอะไร? ต้องการ AI ช่วยส่วนไหน?" className="w-full px-4 py-3 text-[14px] text-[#1d1d1f] placeholder:text-[#c7c7cc] bg-white rounded-[14px] border border-[#d2d2d7]/40 focus:border-[#2997ff] focus:ring-2 focus:ring-[#2997ff]/10 focus:outline-none resize-none" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2997ff] text-white font-medium text-[15px] hover:bg-[#0077ed] transition-all shadow-lg shadow-[#2997ff]/20">
                  <Send size={16} /> ส่งข้อความ
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 border border-black/[0.04]">
              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">ช่องทางติดต่อ</h3>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={16} />, label: "โทร", value: "082-704-7606", href: "tel:0827047606" },
                  { icon: <Mail size={16} />, label: "อีเมล", value: "chavin@pace-design.co.th", href: "mailto:chavin@pace-design.co.th" },
                  { icon: <MessageCircle size={16} />, label: "LINE", value: "@542mgysj", href: "https://line.me/R/ti/p/@542mgysj" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-[#2997ff]/5 flex items-center justify-center text-[#2997ff]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-[#86868b]">{item.label}</p>
                      <p className="text-[14px] font-medium text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2997ff]/5 to-[#5856d6]/5 rounded-2xl p-6 border border-[#2997ff]/10">
              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">ต้องการ Privacy 100%?</h3>
              <p className="text-[13px] text-[#86868b] mb-3">
                ถ้าข้อมูลต้องอยู่ในออฟฟิศ 100% ไม่ส่งออกเลย — ดูบริการ Local AI ติดตั้ง AI บนเครื่องของคุณเอง
              </p>
              <a href="https://localaithai.com" target="_blank" className="text-[13px] font-medium text-[#2997ff] hover:underline">
                LocalAI Thailand →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
