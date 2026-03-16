"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, FileText, Calendar, ShoppingCart, PenTool, Search, Users } from "lucide-react";

const cases = [
  { icon: <Mail size={22} />, title: "Email AI Assistant", desc: "อีเมลเข้า → AI สรุป + draft ตอบ → รอคุณกด Send", color: "#ff6d5a" },
  { icon: <MessageSquare size={22} />, title: "LINE / Chat Auto-reply", desc: "ลูกค้าถามใน LINE → AI ตอบจาก FAQ → ส่งต่อคนจริงถ้าซับซ้อน", color: "#30d158" },
  { icon: <FileText size={22} />, title: "Document Q&A", desc: "Upload เอกสาร → AI ตอบคำถามจากเนื้อหา ค้นหาข้อมูลได้ทันที", color: "#0071e3" },
  { icon: <Calendar size={22} />, title: "Meeting Scheduler", desc: "สั่ง AI นัดประชุม ส่ง invite สรุป agenda ทำ note อัตโนมัติ", color: "#5856d6" },
  { icon: <ShoppingCart size={22} />, title: "Order Processing", desc: "ออเดอร์เข้า → ตรวจ stock → สร้าง invoice → แจ้งทีม อัตโนมัติ", color: "#ff9f0a" },
  { icon: <PenTool size={22} />, title: "Content Generator", desc: "กำหนดหัวข้อ → AI เขียน blog / social post → schedule โพสต์", color: "#bf5af2" },
  { icon: <Search size={22} />, title: "Market Research", desc: "AI ค้นหาข้อมูลคู่แข่ง ราคา trend สรุปเป็นรายงานอัตโนมัติ", color: "#ff375f" },
  { icon: <Users size={22} />, title: "HR Onboarding", desc: "พนักงานใหม่ → AI ส่งเอกสาร อบรม ตอบคำถาม policy อัตโนมัติ", color: "#34aadc" },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#0071e3] uppercase tracking-widest mb-3">Use Cases</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            ทุกอย่างที่ AI ทำแทนคุณได้
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            ตัวอย่าง automation ที่ธุรกิจไทยใช้จริง — ทำงาน 24/7 ไม่มีวันหยุด
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-black/[0.04] hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: c.color + "10", color: c.color }}>
                {c.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">{c.title}</h3>
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
