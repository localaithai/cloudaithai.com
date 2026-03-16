"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, PenTool, Scale, Heart, Home, Building, UtensilsCrossed, Briefcase } from "lucide-react";

const solutions = [
  {
    icon: <ShoppingCart size={24} />,
    title: "ร้านค้าออนไลน์",
    subtitle: "E-commerce & Retail",
    desc: "ตอบลูกค้าอัตโนมัติ จัดการ order สร้าง product description วิเคราะห์ยอดขาย",
    examples: ["ตอบแชทลูกค้า 24/7", "สร้าง caption สินค้า", "สรุปยอดขายรายวัน", "แจ้ง stock ใกล้หมด"],
    savings: "ลดงาน 80%",
    href: "/solutions/ecommerce",
    color: "#2997ff",
    gradient: "from-[#2997ff]/10 to-[#5ac8fa]/10",
  },
  {
    icon: <PenTool size={24} />,
    title: "Content Creator & Agency",
    subtitle: "Creator Economy",
    desc: "AI เขียน script, caption, hashtag, schedule โพสต์ วิเคราะห์ engagement ให้ทั้งหมด",
    examples: ["เขียน TikTok script", "สร้าง IG caption + hashtag", "วางแผน content calendar", "วิเคราะห์ engagement"],
    savings: "ลดเวลา 60%",
    href: "/solutions/creator",
    color: "#ff2d55",
    gradient: "from-[#ff2d55]/10 to-[#ff9500]/10",
  },
  {
    icon: <Scale size={24} />,
    title: "สำนักงานกฎหมาย",
    subtitle: "Legal & Compliance",
    desc: "AI วิเคราะห์สัญญา ค้นข้อกฎหมาย draft เอกสาร ตรวจ compliance อัตโนมัติ",
    examples: ["วิเคราะห์สัญญา 50 หน้า", "ค้นข้อกฎหมายที่เกี่ยวข้อง", "Draft หนังสือทวงถาม", "ตรวจ PDPA compliance"],
    savings: "ประหยัด 3 ชม./วัน",
    href: "/solutions/legal",
    color: "#5856d6",
    gradient: "from-[#5856d6]/10 to-[#af52de]/10",
  },
  {
    icon: <Heart size={24} />,
    title: "คลินิก & โรงพยาบาล",
    subtitle: "Healthcare",
    desc: "AI ตอบคำถามผู้ป่วย นัดหมอ ค้นข้อมูลยา สรุปประวัติ patient สร้างรายงาน",
    examples: ["ตอบคำถามผู้ป่วย 24/7", "จัดนัดหมายอัตโนมัติ", "ค้นข้อมูลยา / dosage", "สรุป patient history"],
    savings: "ลดงานพยาบาล 40%",
    href: "/solutions/healthcare",
    color: "#ff3b30",
    gradient: "from-[#ff3b30]/10 to-[#ff2d55]/10",
  },
  {
    icon: <Building size={24} />,
    title: "อสังหาริมทรัพย์",
    subtitle: "Real Estate",
    desc: "AI ตอบลูกค้าเรื่องโครงการ จัดนัดดูบ้าน สร้าง listing วิเคราะห์ตลาด",
    examples: ["ตอบ LINE ลูกค้าอัตโนมัติ", "สร้าง listing description", "จัดนัดดูโครงการ", "วิเคราะห์ราคาตลาด"],
    savings: "ปิดดีลเร็วขึ้น 2x",
    href: "/solutions/realestate",
    color: "#34c759",
    gradient: "from-[#34c759]/10 to-[#30d158]/10",
  },
  {
    icon: <UtensilsCrossed size={24} />,
    title: "ร้านอาหาร & F&B",
    subtitle: "Food & Beverage",
    desc: "AI รับ order จัดคิว ตอบ review จัดการ inventory วิเคราะห์ต้นทุน",
    examples: ["รับ order ผ่าน LINE", "ตอบ review อัตโนมัติ", "แจ้ง ingredient ใกล้หมด", "วิเคราะห์ food cost"],
    savings: "ลดต้นทุนพนักงาน 30%",
    href: "/solutions/restaurant",
    color: "#ff9500",
    gradient: "from-[#ff9500]/10 to-[#ffcc00]/10",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">Solutions</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            AI สำหรับทุกธุรกิจ
          </h2>
          <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
            ไม่ว่าคุณทำธุรกิจอะไร เรามี solution AI ที่ออกแบบมาเฉพาะ — พร้อม workflow, model, และค่าใช้จ่ายที่ชัดเจน
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {solutions.map((sol, i) => (
            <motion.a
              key={sol.title}
              href={sol.href}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06 }}
              className="apple-card relative p-4 sm:p-6 group cursor-pointer"
            >
              {/* Tinted gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} rounded-[24px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f5f7] rounded-full flex items-center justify-center" style={{ color: sol.color }}>
                    {sol.icon}
                  </div>
                  <span className="text-[11px] font-semibold bg-[#f5f5f7] rounded-full px-3 py-1" style={{ color: sol.color }}>
                    {sol.savings}
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-0.5">{sol.title}</h3>
                <p className="text-[12px] text-[#6e6e73] mb-3">{sol.subtitle}</p>
                <p className="text-[13px] text-[#6e6e73] mb-4 leading-relaxed">{sol.desc}</p>

                {/* Example pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sol.examples.map((ex) => (
                    <span key={ex} className="text-[10px] px-2.5 py-1 rounded-full bg-[#f5f5f7] rounded-full text-[#6e6e73]">
                      {ex}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[13px] font-medium" style={{ color: sol.color }}>
                  ดูรายละเอียด <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
