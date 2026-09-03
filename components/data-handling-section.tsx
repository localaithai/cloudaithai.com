"use client";

import { motion } from "framer-motion";

const facts = [
  [
    "เอกสารไปที่โมเดลคลาวด์",
    "ข้อความในเอกสารถูกส่งไปยังโมเดลคลาวด์เพื่อทำงานที่เลือก",
  ],
  [
    "ปิดทับข้อมูลส่วนบุคคล",
    "ข้อมูลส่วนบุคคลถูกปิดทับโดยค่าเริ่มต้นก่อนออกจากเครื่อง",
  ],
  [
    "แยกข้อมูลตาม seat",
    "แต่ละ seat เก็บข้อมูลของตัวเองบนเครื่องนั้น ไม่มีข้อมูลร่วมกันระหว่างเครื่อง",
  ],
  ["เลือกโฟลเดอร์สำรอง", "เลือกโฟลเดอร์สำรองข้อมูลระหว่างขั้นตอนตั้งค่า"],
] as const;

export default function DataHandlingSection() {
  return (
    <section id="data-handling" className="apple-section section-gray">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10"
        >
          <p className="text-[#2997ff] font-medium mb-3">Data handling</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            ข้อมูลไปไหน, บอกตรงๆ
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {facts.map(([title, detail], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="apple-card p-6"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{title}</h3>
              <p className="text-[#6e6e73] leading-relaxed">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
