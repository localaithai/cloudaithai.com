"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, FileText, Calendar, ShoppingCart, PenTool, Search, Users, ChevronDown, ArrowRight, Zap, Clock, DollarSign } from "lucide-react";

interface UseCase {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  workflow: string[];
  tools: string[];
  models: string[];
  timeSaved: string;
  monthlyCost: string;
  color: string;
  example: string;
}

const useCases: UseCase[] = [
  {
    icon: <MessageSquare size={22} />,
    title: "LINE / Chat Auto-reply",
    subtitle: "ลูกค้าถาม → AI ตอบทันที 24/7",
    description: "สร้าง AI chatbot ที่ตอบลูกค้าจาก FAQ, ข้อมูลสินค้า, นโยบายบริษัท ถ้าคำถามซับซ้อน → ส่งต่อพนักงานจริง พร้อมสรุปบริบทให้",
    workflow: [
      "ลูกค้าส่งข้อความใน LINE / Facebook / เว็บ",
      "n8n รับ webhook → ส่งให้ AI วิเคราะห์ intent",
      "AI ค้นข้อมูลจาก RAG (FAQ + product database)",
      "สร้างคำตอบภาษาไทย ส่งกลับทันที",
      "ถ้าซับซ้อน → แจ้ง Slack + ส่งต่อพนักงาน",
    ],
    tools: ["n8n", "Flowise", "LINE API"],
    models: ["Gemini 3 Flash (เร็ว ถูก)", "GPT-5 (ซับซ้อน)"],
    timeSaved: "ลดงานตอบแชท 70-90%",
    monthlyCost: "฿450-1,500",
    color: "#30d158",
    example: "ร้านขายเสื้อผ้าออนไลน์ — เดิมมีพนักงาน 2 คนตอบแชท ตอนนี้ AI ตอบ 85% ของคำถาม คนตอบแค่ 15% ที่ซับซ้อน",
  },
  {
    icon: <Mail size={22} />,
    title: "Email AI Assistant",
    subtitle: "อีเมลเข้า → AI สรุป + draft ตอบ",
    description: "AI อ่านอีเมลที่เข้ามา สรุปใจความสำคัญ จัดลำดับความสำคัญ draft คำตอบให้ คุณแค่ review แล้วกด Send",
    workflow: [
      "อีเมลเข้า Gmail / Outlook",
      "n8n trigger → AI อ่านและจัดประเภท (urgent/normal/spam)",
      "AI สรุปใจความ 2-3 บรรทัด",
      "Draft คำตอบให้ (ถ้าเป็นอีเมลที่ต้องตอบ)",
      "ส่ง notification + draft ไป Slack/LINE",
      "คุณ review + กด Send",
    ],
    tools: ["n8n", "Gmail API", "Slack"],
    models: ["Claude Sonnet 4.6 (draft quality)", "Gemini Flash (classification)"],
    timeSaved: "ประหยัด 2-3 ชม./วัน",
    monthlyCost: "฿800-2,000",
    color: "#ff6d5a",
    example: "สำนักงานกฎหมาย — ทนายได้อีเมล 50+ ฉบับ/วัน AI สรุปและ draft ตอบให้ ทนายใช้เวลาแค่ 30 นาทีแทน 3 ชั่วโมง",
  },
  {
    icon: <FileText size={22} />,
    title: "Document Q&A (RAG)",
    subtitle: "Upload เอกสาร → AI ตอบคำถามได้ทันที",
    description: "Upload เอกสารบริษัท (PDF, Word, Excel) → AI สร้าง knowledge base → ถามอะไรก็ตอบได้ พร้อมอ้างอิงหน้า/ย่อหน้าที่มา",
    workflow: [
      "Upload เอกสาร (PDF, Word, Excel, txt) เข้า Flowise/Dify",
      "AI สร้าง embedding + vector index",
      "พนักงานถามคำถามผ่าน chatbot",
      "AI ค้นหาข้อมูลที่เกี่ยวข้อง (RAG)",
      "สร้างคำตอบ + แสดงแหล่งอ้างอิง",
    ],
    tools: ["Flowise", "Dify", "Vector DB"],
    models: ["Claude Opus (เอกสารยาว)", "GPT-5 (ทั่วไป)"],
    timeSaved: "ค้นข้อมูลเร็วขึ้น 10 เท่า",
    monthlyCost: "฿1,000-3,000",
    color: "#2997ff",
    example: "โรงพยาบาล — upload คู่มือยา 2,000+ รายการ พยาบาลถาม AI เรื่อง dosage, contraindication ได้ทันทีแทนเปิดหาในหนังสือ",
  },
  {
    icon: <ShoppingCart size={22} />,
    title: "Order Processing",
    subtitle: "ออเดอร์เข้า → AI จัดการให้อัตโนมัติ",
    description: "เมื่อมีออเดอร์ใหม่ AI ตรวจ stock, สร้าง invoice, แจ้งคลัง, อัพเดท spreadsheet, ส่ง confirmation ให้ลูกค้า ทั้งหมดอัตโนมัติ",
    workflow: [
      "ออเดอร์เข้า (LINE, เว็บ, email)",
      "AI extract ข้อมูล (สินค้า, จำนวน, ที่อยู่)",
      "ตรวจ stock จาก Google Sheets / database",
      "สร้าง invoice อัตโนมัติ",
      "แจ้งคลังสินค้าผ่าน LINE/Slack",
      "ส่ง confirmation ให้ลูกค้า",
      "อัพเดท sales dashboard",
    ],
    tools: ["n8n", "Google Sheets", "LINE API"],
    models: ["Gemini Flash (extract)", "GPT-5 (complex orders)"],
    timeSaved: "ลดงาน manual 80%",
    monthlyCost: "฿600-1,500",
    color: "#ff9f0a",
    example: "ร้านขนมออนไลน์ — เดิมใช้คน 1 คนจัดการ order 50 รายการ/วัน ตอนนี้ AI จัดการ 90% คนจัดการแค่ case พิเศษ",
  },
  {
    icon: <PenTool size={22} />,
    title: "Content Generator",
    subtitle: "กำหนดหัวข้อ → AI เขียน + schedule โพสต์",
    description: "AI เขียน blog post, social media caption, email newsletter, product description ตาม brand voice ของคุณ schedule โพสต์อัตโนมัติ",
    workflow: [
      "กำหนดหัวข้อ / keyword / content calendar",
      "AI เขียน draft (blog / caption / email)",
      "Review + approve (หรือ auto-approve)",
      "Schedule โพสต์ Facebook, IG, LINE OA",
      "Track performance → AI ปรับ strategy",
    ],
    tools: ["n8n", "Dify", "Social Media APIs"],
    models: ["Claude Sonnet (creative writing)", "GPT-5 (SEO content)"],
    timeSaved: "ลดเวลาเขียน content 60%",
    monthlyCost: "฿1,000-2,500",
    color: "#bf5af2",
    example: "Agency ขนาดเล็ก — ดูแล social media 5 brand เดิมใช้ copywriter 2 คน ตอนนี้ AI draft ให้ copywriter แค่ edit + approve",
  },
  {
    icon: <Calendar size={22} />,
    title: "Meeting AI Assistant",
    subtitle: "สั่งผ่าน LINE → AI จัดนัดให้",
    description: "สั่ง AI ผ่าน LINE/WhatsApp ให้นัดประชุม ส่ง invite สรุป agenda ก่อนประชุม หลังประชุมสรุป meeting notes + action items ให้อัตโนมัติ",
    workflow: [
      "สั่ง: \"นัดประชุม marketing พรุ่งนี้ 10 โมง\"",
      "OpenClaw เช็คปฏิทินทุกคน หาเวลาว่าง",
      "สร้าง Google Calendar event + ส่ง invite",
      "ก่อนประชุม: สรุป agenda จาก email/notes ที่เกี่ยวข้อง",
      "หลังประชุม: สรุป meeting notes + assign action items",
    ],
    tools: ["OpenClaw", "Google Calendar", "LINE/WhatsApp"],
    models: ["GPT-5 (scheduling)", "Claude Sonnet (summarization)"],
    timeSaved: "ประหยัด 30 นาที/ประชุม",
    monthlyCost: "฿500-1,200",
    color: "#5856d6",
    example: "CEO ที่มีประชุม 8 ครั้ง/วัน — AI จัดนัด สรุปประชุม ส่ง action items ให้ทุกคนอัตโนมัติ",
  },
  {
    icon: <Search size={22} />,
    title: "Market Research",
    subtitle: "AI ค้นหา วิเคราะห์ สรุปเป็นรายงาน",
    description: "AI ค้นข้อมูลคู่แข่ง ราคาตลาด trend ใหม่ๆ สรุปเป็นรายงานอัตโนมัติทุกวัน/สัปดาห์ พร้อม insight และคำแนะนำ",
    workflow: [
      "ตั้ง schedule (ทุกเช้า / ทุกสัปดาห์)",
      "AI ค้นหาข่าว + ข้อมูลจาก web",
      "วิเคราะห์ sentiment + trend",
      "เปรียบเทียบกับข้อมูลย้อนหลัง",
      "สร้างรายงาน + ส่ง email/Slack",
    ],
    tools: ["n8n", "Grok 3 API", "Google Sheets"],
    models: ["Grok 3 (real-time data)", "Claude Sonnet (analysis)"],
    timeSaved: "ประหยัด 5-10 ชม./สัปดาห์",
    monthlyCost: "฿1,500-4,000",
    color: "#ff375f",
    example: "Startup FinTech — AI track ข่าว crypto + regulation 10 ประเทศ สรุปรายงานทุกเช้า 7 โมง",
  },
  {
    icon: <Users size={22} />,
    title: "HR & Onboarding",
    subtitle: "พนักงานใหม่ → AI ดูแลทุกอย่าง",
    description: "AI ส่งเอกสาร welcome kit ให้พนักงานใหม่ ตอบคำถาม HR policy ลา, สวัสดิการ, กฎระเบียบ 24/7 ช่วย onboard ได้เร็วขึ้น 3 เท่า",
    workflow: [
      "HR บันทึกพนักงานใหม่ใน spreadsheet",
      "n8n trigger → ส่ง welcome email + เอกสาร",
      "สร้าง account ในระบบต่างๆ อัตโนมัติ",
      "AI chatbot ตอบคำถาม policy 24/7",
      "Track onboarding progress + remind tasks",
    ],
    tools: ["n8n", "Flowise", "Google Workspace"],
    models: ["GPT-5 (onboarding)", "Gemini Flash (Q&A)"],
    timeSaved: "ลดเวลา onboard จาก 2 สัปดาห์เหลือ 3 วัน",
    monthlyCost: "฿500-1,200",
    color: "#34aadc",
    example: "บริษัท 50 คน — เดิม HR ใช้เวลา 2 สัปดาห์ onboard คนใหม่ ตอนนี้ AI ทำให้เหลือ 3 วัน",
  },
];

function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className={`apple-card relative overflow-hidden ${
        expanded ? "" : ""
      }`}>
        <button onClick={() => setExpanded(!expanded)} className="w-full text-left p-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: useCase.color + "10", color: useCase.color }}>
              {useCase.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-0.5">{useCase.title}</h3>
              <p className="text-[13px] text-[#6e6e73]">{useCase.subtitle}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-[#6e6e73]">
                <span className="flex items-center gap-1"><Clock size={11} /> {useCase.timeSaved}</span>
                <span className="flex items-center gap-1"><DollarSign size={11} /> {useCase.monthlyCost}</span>
              </div>
              <motion.div animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown size={16} className="text-[#d2d2d7]" /></motion.div>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-5">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

                <p className="text-[14px] text-[#6e6e73] leading-relaxed">{useCase.description}</p>

                {/* Workflow steps */}
                <div>
                  <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-3">Workflow</p>
                  <div className="space-y-2">
                    {useCase.workflow.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold text-white mt-0.5" style={{ background: useCase.color }}>
                          {i + 1}
                        </span>
                        <span className="text-[13px] text-[#1d1d1f]/80">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools + Models + Stats */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-[#fafafa] rounded-xl p-4">
                    <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">เครื่องมือ</p>
                    <div className="flex flex-wrap gap-1.5">
                      {useCase.tools.map((t) => (
                        <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-black/[0.06] text-[#1d1d1f]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#fafafa] rounded-xl p-4">
                    <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">AI Model</p>
                    <div className="space-y-1">
                      {useCase.models.map((m) => (
                        <p key={m} className="text-[11px] text-[#1d1d1f]">{m}</p>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#fafafa] rounded-xl p-4">
                    <p className="text-[10px] font-medium text-[#6e6e73] uppercase tracking-wider mb-2">ผลลัพธ์</p>
                    <p className="text-[13px] font-medium" style={{ color: useCase.color }}>{useCase.timeSaved}</p>
                    <p className="text-[12px] text-[#6e6e73] mt-1">ค่า API ~{useCase.monthlyCost}/เดือน</p>
                  </div>
                </div>

                {/* Real example */}
                <div className="rounded-xl p-4 border-l-3 border border-black/[0.04]" style={{ borderLeftColor: useCase.color, borderLeftWidth: 3 }}>
                  <p className="text-[11px] font-medium text-[#6e6e73] uppercase tracking-wider mb-1">ตัวอย่างจริง</p>
                  <p className="text-[13px] text-[#1d1d1f]">{useCase.example}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">Use Cases</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            ทุกอย่างที่ AI ทำแทนคุณได้
          </h2>
          <p className="text-base text-[#6e6e73] max-w-xl mx-auto">
            8 ตัวอย่าง automation จริงที่ธุรกิจไทยใช้ — พร้อม workflow, เครื่องมือ, model ที่ใช้, และค่าใช้จ่ายจริง
          </p>
        </motion.div>

        <div className="space-y-4">
          {useCases.map((uc, i) => (
            <UseCaseCard key={uc.title} useCase={uc} index={i} />
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: "70-90%", label: "ลดงานซ้ำ", color: "#30d158" },
            { value: "฿500-4,000", label: "ค่า API ต่อเดือน", color: "#2997ff" },
            { value: "1-2 สัปดาห์", label: "เริ่มใช้งานได้", color: "#5856d6" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-6 bg-white rounded-2xl border border-black/[0.04]">
              <p className="text-xl md:text-2xl font-semibold" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-[12px] text-[#6e6e73] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
