"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "ต้องมีความรู้ technical ไหม?",
    a: "ไม่ต้องเลย เราติดตั้ง ตั้งค่า สอนใช้ให้ครบ ทุก tool ที่เราใช้เป็น visual drag-and-drop ไม่ต้องเขียนโค้ด",
  },
  {
    q: "ข้อมูลบริษัทปลอดภัยไหม?",
    a: "ปลอดภัย — ถ้าใช้ VPS ข้อมูลอยู่บน server ของคุณ เลือก data center ในไทยหรือ Singapore ได้ ถ้าใช้ Frontier Model API ข้อมูลจะส่งไป process แล้วลบทันที (ไม่ถูกนำไป train model) ถ้าต้องการ privacy 100% แนะนำ Local AI แทน",
  },
  {
    q: "VPS กับ Managed Cloud ต่างกันยังไง?",
    a: "VPS = คุณเช่า server เอง ควบคุมได้ 100% ราคาถูกกว่าระยะยาว Managed Cloud = ใช้ platform ที่มี hosting ในตัว ง่ายกว่า ไม่ต้องดูแล server แต่ customize ได้น้อยกว่า",
  },
  {
    q: "ค่า API แพงไหม?",
    a: "ใช้งานทั่วไปประมาณ ฿300-3,000/เดือน ขึ้นกับปริมาณ ถ้าใช้ DeepSeek V3 ยิ่งถูกมาก (~$0.28/1M tokens) เราช่วย optimize ให้ใช้ model ที่เหมาะกับแต่ละงาน ประหยัดสุด",
  },
  {
    q: "ใช้เวลาติดตั้งนานไหม?",
    a: "Starter 3-5 วัน, Professional 1-2 สัปดาห์, Enterprise 2-4 สัปดาห์ ขึ้นกับจำนวน workflow และ integration ที่ต้องทำ",
  },
  {
    q: "ถ้าอยากเปลี่ยนจาก Cloud เป็น Local AI ทำได้ไหม?",
    a: "ได้ เราเป็นพาร์ทเนอร์กับ LocalAI Thailand ถ้าธุรกิจโตขึ้นหรือต้องการ privacy มากขึ้น สามารถ migrate ไป Local AI ได้ — เราช่วยย้ายให้",
  },
  {
    q: "Support หลังติดตั้งเป็นยังไง?",
    a: "ทุกแพ็คเกจมี support 30-90 วัน (ตามแพ็คเกจ) หลังจากนั้นมี Monthly Maintenance เริ่ม ฿3,900/เดือน สำหรับ monitoring + troubleshooting + updates",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.04]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="text-[15px] font-medium text-[#1d1d1f] pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Plus size={18} className="text-[#6e6e73] shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[14px] text-[#6e6e73] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            คำถามที่พบบ่อย
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
