"use client";
import { motion } from "framer-motion";
import {
  Zap,
  ArrowRight,
  MessageSquare,
  Brain,
  GitBranch,
  Database,
  FileText,
  Calendar,
  Mail,
  Send,
  Globe,
  Users,
  Smartphone,
  Settings,
  BarChart3,
  Search,
  Layers,
  Box,
  CheckCircle,
  ChevronRight,
  Workflow,
  Bot,
  Puzzle,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";

/* ─── Shared animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Mockup Node component for workflow diagrams ─── */
function MockupNode({
  label,
  icon,
  color,
  size = "md",
}: {
  label: string;
  icon: React.ReactNode;
  color: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "px-3 py-2 text-[11px]",
    md: "px-4 py-3 text-[12px]",
    lg: "px-5 py-4 text-[13px]",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl font-medium text-white shadow-sm ${sizeClasses[size]}`}
      style={{ background: color }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* ─── Arrow connector ─── */
function Arrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="w-6 sm:w-10 h-[2px] bg-[#d2d2d7]" />
      <ChevronRight size={14} className="text-[#d2d2d7] -ml-1" />
    </div>
  );
}

/* ─── Arrow connector (vertical) ─── */
function ArrowDown() {
  return (
    <div className="flex flex-col items-center py-1">
      <div className="w-[2px] h-6 bg-[#d2d2d7]" />
      <ChevronRight size={14} className="text-[#d2d2d7] rotate-90 -mt-1" />
    </div>
  );
}

/* ─── Feature pill ─── */
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f]/70 border border-black/[0.04]">
      {children}
    </span>
  );
}

/* ─── Comparison card ─── */
function ComparisonCard({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="mt-6 rounded-2xl bg-[#f5f5f7] p-5">
      <p className="text-[13px] font-semibold text-[#1d1d1f] mb-2">
        {question}
      </p>
      <p className="text-[13px] text-[#6e6e73] leading-relaxed">{answer}</p>
    </div>
  );
}

/* ─── Section header with colored accent ─── */
function ToolHeader({
  icon,
  name,
  tagline,
  color,
  number,
}: {
  icon: string;
  name: string;
  tagline: string;
  color: string;
  number: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
        style={{ background: color + "12" }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-[11px] font-bold uppercase tracking-widest mb-1"
          style={{ color }}
        >
          {number}
        </p>
        <h3 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">
          {name}
        </h3>
        <p className="text-[15px] text-[#6e6e73]">{tagline}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function TechStackPage() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="apple-section pb-16">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-4"
          >
            Tech Stack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[40px] sm:text-[56px] md:text-[64px] font-semibold tracking-[-0.04em] leading-[1.05] mb-6"
          >
            เครื่องมือ 5 ตัว.
            <br />
            <span className="gradient-text">ที่ทำงานแทนคนได้ทั้งทีม.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[19px] text-[#6e6e73] max-w-[620px] mx-auto leading-[1.47]"
          >
            ไม่ใช่แค่รายชื่อเครื่องมือ แต่เป็นการอธิบายว่าทำไมเราเลือกใช้
            มันทำอะไรได้ และเชื่อมต่อกันอย่างไรเพื่อสร้างระบบ AI
            ที่ทำงานจริงให้ธุรกิจคุณ
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOOL 1: n8n
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section section-gray">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ToolHeader
              icon="⚡"
              name="n8n"
              tagline="Workflow Automation — หัวใจของระบบทั้งหมด"
              color="#EA4B71"
              number="Tool 01"
            />

            <p className="text-[15px] text-[#6e6e73] leading-relaxed max-w-[700px] mb-8">
              n8n คือ workflow automation platform ที่เป็น open-source
              ทำหน้าที่เป็นตัวกลางเชื่อมทุกอย่างเข้าด้วยกัน
              ไม่ว่าจะเป็นข้อความจาก LINE, คำสั่งจากฟอร์ม, หรือ trigger
              จากระบบอื่น n8n จะรับมาแล้วตัดสินใจว่าต้องทำอะไรต่อ
              ส่งต่อไปที่ AI model ดึงข้อมูลจาก database
              แล้วตอบกลับอัตโนมัติ
            </p>

            {/* Workflow mockup */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                ตัวอย่าง Workflow: LINE Chatbot อัตโนมัติ
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-0">
                <MockupNode
                  label="Webhook"
                  icon={<Globe size={14} />}
                  color="#6366f1"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="IF Condition"
                  icon={<GitBranch size={14} />}
                  color="#f59e0b"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="AI Agent"
                  icon={<Brain size={14} />}
                  color="#8b5cf6"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Reply LINE"
                  icon={<Send size={14} />}
                  color="#22c55e"
                />
              </div>
              <p className="text-[11px] text-[#86868b] mt-4">
                LINE ส่งข้อความเข้ามา → n8n รับผ่าน Webhook → เช็คเงื่อนไข →
                ส่งให้ AI ตอบ → ตอบกลับ LINE อัตโนมัติ
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Pill>400+ Integrations</Pill>
              <Pill>Visual Workflow Builder</Pill>
              <Pill>Webhook & Cron Triggers</Pill>
              <Pill>AI Agent Nodes</Pill>
              <Pill>Error Handling & Retry</Pill>
            </div>

            {/* Comparison */}
            <ComparisonCard
              question="ทำไมไม่ใช้ Zapier?"
              answer="Zapier คิดค่าบริการตามจำนวน task ที่รัน ยิ่งใช้เยอะยิ่งแพง ธุรกิจที่รัน 10,000+ tasks/เดือน อาจจ่าย $200+ ต่อเดือน แต่ n8n เป็น open-source self-hosted รันได้ไม่จำกัดโดยไม่มีค่า license เพิ่ม แถมยัง customize workflow ได้ลึกกว่า เขียน code node เสริมได้ และข้อมูลทั้งหมดอยู่ในเซิร์ฟเวอร์ของคุณเอง ปลอดภัยกว่า"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOOL 2: Flowise
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ToolHeader
              icon="🌊"
              name="Flowise"
              tagline="Chatbot & RAG Builder — สร้าง AI ที่รู้จักข้อมูลคุณ"
              color="#3b82f6"
              number="Tool 02"
            />

            <p className="text-[15px] text-[#6e6e73] leading-relaxed max-w-[700px] mb-8">
              Flowise คือเครื่องมือสร้าง AI Chatbot แบบ drag-and-drop
              จุดเด่นคือสร้าง RAG (Retrieval-Augmented Generation) pipeline ได้ง่าย
              ซึ่งทำให้ AI ตอบจากข้อมูลของธุรกิจคุณได้โดยเฉพาะ
              ไม่ใช่ตอบแบบกว้างๆ เหมือน ChatGPT ธรรมดา
            </p>

            {/* RAG pipeline mockup */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                RAG Pipeline: ให้ AI ตอบจากเอกสารของคุณ
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-0">
                <MockupNode
                  label="Document Loader"
                  icon={<FileText size={14} />}
                  color="#3b82f6"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Text Splitter"
                  icon={<Layers size={14} />}
                  color="#6366f1"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Embedding"
                  icon={<Box size={14} />}
                  color="#8b5cf6"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Vector Store"
                  icon={<Database size={14} />}
                  color="#a855f7"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="LLM"
                  icon={<Brain size={14} />}
                  color="#ec4899"
                />
              </div>

              {/* RAG explanation */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#f5f5f7] p-4">
                  <p className="text-[12px] font-semibold text-[#1d1d1f] mb-1">
                    1. โหลดเอกสาร
                  </p>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    นำ PDF, Word, เว็บไซต์ หรือ Google Docs
                    ของธุรกิจเข้าสู่ระบบ ตัดเป็นชิ้นเล็กๆ
                  </p>
                </div>
                <div className="rounded-xl bg-[#f5f5f7] p-4">
                  <p className="text-[12px] font-semibold text-[#1d1d1f] mb-1">
                    2. สร้าง Vector
                  </p>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    แปลงข้อความเป็นตัวเลข (embedding) เก็บใน vector database
                    เพื่อค้นหาได้เร็ว
                  </p>
                </div>
                <div className="rounded-xl bg-[#f5f5f7] p-4">
                  <p className="text-[12px] font-semibold text-[#1d1d1f] mb-1">
                    3. AI ตอบจากข้อมูลคุณ
                  </p>
                  <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                    เมื่อลูกค้าถาม ระบบจะค้นหาข้อมูลที่เกี่ยวข้อง
                    ส่งให้ AI สรุปเป็นคำตอบ
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Pill>Drag & Drop Builder</Pill>
              <Pill>RAG Pipeline</Pill>
              <Pill>Embed Widget ลงเว็บ</Pill>
              <Pill>100+ LLM รองรับ</Pill>
              <Pill>API Endpoint</Pill>
            </div>

            <ComparisonCard
              question="ทำไมไม่ใช้ custom code?"
              answer="การเขียน RAG pipeline ด้วย LangChain/LlamaIndex จาก code ตรงๆ ต้องใช้ developer ที่เข้าใจ embedding, vector store, chunking strategy ซึ่งใช้เวลาหลายสัปดาห์ Flowise ทำเรื่องเดียวกันได้ใน 1-2 ชั่วโมง แบบลากวาง ปรับ parameter ได้ทันที และยังส่ง API endpoint ให้ n8n หรือเว็บไซต์เรียกใช้ได้ทันที ไม่ต้องเขียน backend เอง"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOOL 3: OpenClaw
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section section-gray">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ToolHeader
              icon="🦞"
              name="OpenClaw"
              tagline="Personal AI Agent — สั่งงาน AI ผ่านแชทเดียว"
              color="#e74c3c"
              number="Tool 03"
            />

            <p className="text-[15px] text-[#6e6e73] leading-relaxed max-w-[700px] mb-8">
              OpenClaw ไม่ใช่แค่ chatbot ที่ตอบคำถาม
              แต่เป็น AI Agent ที่ทำงานหลายขั้นตอนได้ด้วยตัวเอง
              สั่งผ่าน LINE แค่ประโยคเดียว
              มันจะวางแผน ทำตามขั้นตอน และรายงานผลกลับมา
            </p>

            {/* Chat mockup */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                ตัวอย่าง: สั่งงานผ่าน LINE
              </p>
              <div className="max-w-[400px] space-y-3">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#2997ff] text-white rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[280px]">
                    <p className="text-[13px] leading-relaxed !text-white">
                      นัดประชุมกับทีม Marketing วันพุธบ่าย แล้วจองห้องอาหารญี่ปุ่นใกล้ออฟฟิศ 6 คนด้วย
                    </p>
                  </div>
                </div>

                {/* Agent thinking */}
                <div className="flex justify-start">
                  <div className="bg-[#f5f5f7] rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[300px]">
                    <p className="text-[11px] text-[#86868b] mb-1.5">
                      กำลังทำ 3 ขั้นตอน...
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-[#34c759]" />
                        <p className="text-[12px] !text-[#1d1d1f]">
                          เช็คปฏิทินวันพุธ — ว่าง 14:00-16:00
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-[#34c759]" />
                        <p className="text-[12px] !text-[#1d1d1f]">
                          จองร้าน Sushi Hiro สีลม 18:00 (6 ที่นั่ง)
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-[#34c759]" />
                        <p className="text-[12px] !text-[#1d1d1f]">
                          ส่ง calendar invite + LINE แจ้งทีม
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agent reply */}
                <div className="flex justify-start">
                  <div className="bg-[#f5f5f7] rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[300px]">
                    <p className="text-[13px] !text-[#1d1d1f] leading-relaxed">
                      เรียบร้อยครับ! นัดประชุมวันพุธ 14:00 และจองร้าน Sushi Hiro 18:00 ส่ง invite ให้ทีมแล้ว
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Skills */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">
                AgentSkills
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: <Calendar size={16} />, label: "จัดการปฏิทิน" },
                  { icon: <Mail size={16} />, label: "อ่าน/ส่งอีเมล" },
                  { icon: <Search size={16} />, label: "ค้นหาเว็บ" },
                  { icon: <FileText size={16} />, label: "อ่านเอกสาร" },
                  { icon: <Database size={16} />, label: "Query ฐานข้อมูล" },
                  { icon: <BarChart3 size={16} />, label: "สร้างรายงาน" },
                  { icon: <Globe size={16} />, label: "Browse เว็บไซต์" },
                  { icon: <Settings size={16} />, label: "เรียก API ภายนอก" },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2.5 rounded-xl bg-[#f5f5f7] px-3 py-2.5"
                  >
                    <span className="text-[#e74c3c]">{skill.icon}</span>
                    <p className="text-[12px] font-medium !text-[#1d1d1f]">
                      {skill.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform support */}
            <div className="flex flex-wrap gap-3">
              {[
                { name: "LINE", color: "#00C300" },
                { name: "WhatsApp", color: "#25D366" },
                { name: "Telegram", color: "#26A5E4" },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white text-[12px] font-medium"
                  style={{ background: platform.color }}
                >
                  <Smartphone size={14} />
                  {platform.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOOL 4: Dify
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ToolHeader
              icon="🔮"
              name="Dify"
              tagline="AI App Platform — สร้าง AI application ครบวงจร"
              color="#8b5cf6"
              number="Tool 04"
            />

            <p className="text-[15px] text-[#6e6e73] leading-relaxed max-w-[700px] mb-8">
              Dify คือ platform สำหรับสร้าง AI application
              ตั้งแต่ต้นจนจบ ตั้งแต่ออกแบบ workflow, ใส่ knowledge base,
              ทำ prompt engineering, ไปจนถึง deploy เป็น API หรือ web app
              พร้อม analytics dashboard ติดตามการใช้งานจริง
            </p>

            {/* Workflow canvas mockup */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                Workflow Canvas: สร้าง AI App แบบลากวาง
              </p>
              <div className="relative">
                {/* Row 1 */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-0 mb-4">
                  <MockupNode
                    label="User Input"
                    icon={<MessageSquare size={14} />}
                    color="#6366f1"
                  />
                  <Arrow className="hidden sm:flex" />
                  <ArrowDown />
                  <MockupNode
                    label="Knowledge Base"
                    icon={<Database size={14} />}
                    color="#8b5cf6"
                  />
                  <Arrow className="hidden sm:flex" />
                  <ArrowDown />
                  <MockupNode
                    label="LLM Node"
                    icon={<Brain size={14} />}
                    color="#a855f7"
                  />
                  <Arrow className="hidden sm:flex" />
                  <ArrowDown />
                  <MockupNode
                    label="Output"
                    icon={<Send size={14} />}
                    color="#22c55e"
                  />
                </div>
                {/* Branch */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-0 sm:ml-[180px]">
                  <div className="hidden sm:block w-[2px] h-6 bg-[#d2d2d7] ml-8 -mt-2 mb-2" />
                  <MockupNode
                    label="Tool: Web Search"
                    icon={<Search size={14} />}
                    color="#f59e0b"
                    size="sm"
                  />
                  <Arrow className="hidden sm:flex" />
                  <MockupNode
                    label="Tool: Calculator"
                    icon={<Settings size={14} />}
                    color="#f59e0b"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Knowledge Base card */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">
                Knowledge Base
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#f5f5f7] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-[#8b5cf6]" />
                    <p className="text-[13px] font-semibold !text-[#1d1d1f]">
                      อัปโหลดง่าย
                    </p>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                    ลาก PDF, Word, TXT, Notion page, เว็บไซต์ ใส่เข้าไป
                    ระบบจัดการ chunking และ indexing ให้อัตโนมัติ
                  </p>
                </div>
                <div className="rounded-xl bg-[#f5f5f7] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 size={16} className="text-[#8b5cf6]" />
                    <p className="text-[13px] font-semibold !text-[#1d1d1f]">
                      Analytics Dashboard
                    </p>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] leading-relaxed">
                    ดูจำนวนการใช้งาน, token usage, response quality,
                    user feedback ได้แบบ real-time
                  </p>
                </div>
              </div>
            </div>

            <ComparisonCard
              question="ทำไมใช้ Dify ด้วย ในเมื่อมี Flowise แล้ว?"
              answer="Flowise เก่งเรื่อง RAG chatbot โดยเฉพาะ — สร้างบอทที่ตอบจากเอกสารได้เร็วมาก แต่ Dify เก่งเรื่อง AI application ที่ซับซ้อนกว่า เช่น multi-step workflow ที่มี branching logic, tool calling, และ human-in-the-loop นอกจากนี้ Dify มี built-in analytics, prompt management, และ A/B testing ที่ Flowise ไม่มี ใช้คู่กัน: Flowise สำหรับ RAG chatbot, Dify สำหรับ AI workflow ที่ต้องการ production monitoring"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         TOOL 5: ActivePieces
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section section-gray">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ToolHeader
              icon="🧩"
              name="ActivePieces"
              tagline="No-Code Automation — ใช้ง่ายที่สุดในชุด"
              color="#30d158"
              number="Tool 05"
            />

            <p className="text-[15px] text-[#6e6e73] leading-relaxed max-w-[700px] mb-8">
              ActivePieces ออกแบบมาให้คนที่ไม่เขียนโค้ดใช้ได้
              UI สะอาด เข้าใจง่าย เหมาะสำหรับงาน automation ที่ไม่ซับซ้อนมาก
              เช่น เมื่อมีคนกรอกฟอร์ม ให้ส่งอีเมลแจ้ง แล้วบันทึกลง Google Sheets
              ทำได้ใน 5 นาที
            </p>

            {/* Simple automation mockup */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-5">
                ตัวอย่าง: ฟอร์มสมัครงาน อัตโนมัติ
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-0">
                <MockupNode
                  label="Google Form"
                  icon={<FileText size={14} />}
                  color="#34a853"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Send Email"
                  icon={<Mail size={14} />}
                  color="#ea4335"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="Google Sheets"
                  icon={<BarChart3 size={14} />}
                  color="#0f9d58"
                />
                <Arrow className="hidden sm:flex" />
                <ArrowDown />
                <MockupNode
                  label="LINE Notify"
                  icon={<Send size={14} />}
                  color="#00c300"
                />
              </div>
              <p className="text-[11px] text-[#86868b] mt-4">
                คนสมัครงานกรอกฟอร์ม → ส่งอีเมลยืนยันอัตโนมัติ → บันทึกข้อมูลลง
                Sheets → แจ้ง HR ผ่าน LINE
              </p>
            </div>

            {/* Who is it for? */}
            <div className="apple-card p-6 sm:p-8 mb-6">
              <p className="text-[13px] font-semibold text-[#1d1d1f] mb-4">
                เหมาะกับใคร?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    icon: <Users size={18} />,
                    title: "ทีม HR / Admin",
                    desc: "สร้าง workflow จัดการใบสมัคร, onboarding, แจ้งเตือนต่างๆ",
                  },
                  {
                    icon: <DollarSign size={18} />,
                    title: "ทีม Sales",
                    desc: "Lead เข้ามา → บันทึก CRM → แจ้งเซลส์ → follow-up อัตโนมัติ",
                  },
                  {
                    icon: <Shield size={18} />,
                    title: "เจ้าของธุรกิจ",
                    desc: "สร้าง automation ด้วยตัวเอง ไม่ต้องรอ developer",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[#f5f5f7] p-4"
                  >
                    <span className="text-[#30d158] mb-2 block">
                      {item.icon}
                    </span>
                    <p className="text-[13px] font-semibold !text-[#1d1d1f] mb-1">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill>No-Code Interface</Pill>
              <Pill>200+ App Connections</Pill>
              <Pill>AI Pieces</Pill>
              <Pill>Team Collaboration</Pill>
              <Pill>Self-Hosted</Pill>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         ARCHITECTURE DIAGRAM
         ═══════════════════════════════════════════════════════════ */}
      <section className="apple-section">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <p className="text-[13px] font-semibold text-[#2997ff] uppercase tracking-widest mb-3">
                Architecture
              </p>
              <h2 className="text-[34px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-4">
                ทั้ง 5 ตัวเชื่อมกันอย่างไร.
              </h2>
              <p className="text-[17px] text-[#6e6e73] max-w-[560px] mx-auto leading-[1.47]">
                นี่คือ architecture จริงที่เราติดตั้งให้ลูกค้า
                ทุกเครื่องมือทำงานร่วมกันเป็นระบบเดียว
              </p>
            </div>

            {/* Architecture diagram */}
            <div className="apple-card p-6 sm:p-10">
              <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-8 text-center">
                Full Architecture: LINE Chatbot + RAG + AI Agent
              </p>

              {/* Main flow */}
              <div className="space-y-6">
                {/* Layer 1: Input */}
                <div className="text-center">
                  <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
                    Input Layer
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <MockupNode
                      label="LINE"
                      icon={<MessageSquare size={14} />}
                      color="#00C300"
                      size="lg"
                    />
                    <MockupNode
                      label="WhatsApp"
                      icon={<MessageSquare size={14} />}
                      color="#25D366"
                      size="lg"
                    />
                    <MockupNode
                      label="Web Chat"
                      icon={<Globe size={14} />}
                      color="#6366f1"
                      size="lg"
                    />
                    <MockupNode
                      label="Form / API"
                      icon={<FileText size={14} />}
                      color="#f59e0b"
                      size="lg"
                    />
                  </div>
                </div>

                <ArrowDown />

                {/* Layer 2: n8n */}
                <div className="text-center">
                  <div className="inline-block">
                    <div className="rounded-2xl border-2 border-[#EA4B71]/30 bg-[#EA4B71]/[0.04] px-8 py-5">
                      <p className="text-[10px] font-bold text-[#EA4B71] uppercase tracking-widest mb-2">
                        Orchestration Layer
                      </p>
                      <MockupNode
                        label="n8n — Workflow Engine"
                        icon={<Workflow size={16} />}
                        color="#EA4B71"
                        size="lg"
                      />
                      <p className="text-[11px] text-[#86868b] mt-2">
                        รับ input ทั้งหมด, route ไปเครื่องมือที่ถูกต้อง,
                        จัดการ error & retry
                      </p>
                    </div>
                  </div>
                </div>

                <ArrowDown />

                {/* Layer 3: Processing */}
                <div className="text-center">
                  <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
                    Processing Layer
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="rounded-2xl border border-[#3b82f6]/20 bg-[#3b82f6]/[0.04] px-5 py-4 text-center">
                      <MockupNode
                        label="Flowise"
                        icon={<Bot size={14} />}
                        color="#3b82f6"
                      />
                      <p className="text-[10px] text-[#86868b] mt-2">
                        RAG Chatbot
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] px-5 py-4 text-center">
                      <MockupNode
                        label="Dify"
                        icon={<Workflow size={14} />}
                        color="#8b5cf6"
                      />
                      <p className="text-[10px] text-[#86868b] mt-2">
                        AI Workflow
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#e74c3c]/20 bg-[#e74c3c]/[0.04] px-5 py-4 text-center">
                      <MockupNode
                        label="OpenClaw"
                        icon={<Brain size={14} />}
                        color="#e74c3c"
                      />
                      <p className="text-[10px] text-[#86868b] mt-2">
                        AI Agent
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#30d158]/20 bg-[#30d158]/[0.04] px-5 py-4 text-center">
                      <MockupNode
                        label="ActivePieces"
                        icon={<Puzzle size={14} />}
                        color="#30d158"
                      />
                      <p className="text-[10px] text-[#86868b] mt-2">
                        Simple Automation
                      </p>
                    </div>
                  </div>
                </div>

                <ArrowDown />

                {/* Layer 4: AI Models */}
                <div className="text-center">
                  <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
                    AI Model Layer
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "GPT-5",
                      "Claude 4.6",
                      "Gemini 3.1",
                      "DeepSeek R1",
                      "Ollama (Local)",
                    ].map((model) => (
                      <span
                        key={model}
                        className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#1d1d1f] text-white"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowDown />

                {/* Layer 5: Output */}
                <div className="text-center">
                  <p className="text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
                    Output Layer
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <MockupNode
                      label="ตอบแชทลูกค้า"
                      icon={<MessageSquare size={14} />}
                      color="#22c55e"
                    />
                    <MockupNode
                      label="ส่งอีเมล"
                      icon={<Mail size={14} />}
                      color="#3b82f6"
                    />
                    <MockupNode
                      label="อัปเดต CRM"
                      icon={<Database size={14} />}
                      color="#f59e0b"
                    />
                    <MockupNode
                      label="สร้างรายงาน"
                      icon={<BarChart3 size={14} />}
                      color="#8b5cf6"
                    />
                  </div>
                </div>
              </div>

              {/* Connection explanation */}
              <div className="mt-10 pt-8 border-t border-[#d2d2d7]/50">
                <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">
                  การเชื่อมต่อแต่ละจุด
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      from: "LINE / WhatsApp",
                      to: "n8n",
                      how: "Webhook — LINE Messaging API ส่ง event มาที่ n8n endpoint",
                    },
                    {
                      from: "n8n",
                      to: "Flowise",
                      how: "HTTP Request — n8n เรียก Flowise API พร้อมคำถามและ session ID",
                    },
                    {
                      from: "n8n",
                      to: "Dify",
                      how: "HTTP Request — สำหรับ workflow ที่ซับซ้อน เช่น multi-step approval",
                    },
                    {
                      from: "n8n",
                      to: "OpenClaw",
                      how: "API Call — สั่ง agent ทำงานหลายขั้นตอน รอผลแล้วตอบกลับ",
                    },
                    {
                      from: "Flowise",
                      to: "AI Model",
                      how: "API Key — เรียก GPT-5, Claude หรือ Ollama ผ่าน provider ที่เลือก",
                    },
                    {
                      from: "ActivePieces",
                      to: "Google Sheets",
                      how: "OAuth — เชื่อมต่อ Google account โดยตรง ไม่ต้อง code",
                    },
                  ].map((conn) => (
                    <div
                      key={conn.from + conn.to}
                      className="rounded-xl bg-[#f5f5f7] p-3"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[11px] font-semibold !text-[#1d1d1f]">
                          {conn.from}
                        </span>
                        <ArrowRight size={12} className="text-[#2997ff]" />
                        <span className="text-[11px] font-semibold !text-[#1d1d1f]">
                          {conn.to}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#6e6e73] leading-relaxed">
                        {conn.how}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Summary ─── */}
      <section className="apple-section section-gray">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[34px] sm:text-[48px] font-semibold tracking-[-0.04em] mb-4">
              Open-source ทั้งหมด.
              <br />
              <span className="text-[#6e6e73]">ไม่มีค่า license.</span>
            </h2>
            <p className="text-[17px] text-[#6e6e73] max-w-[560px] mx-auto leading-[1.47] mb-8">
              เครื่องมือทั้ง 5 ตัวเป็น open-source
              คุณจ่ายแค่ค่าเซิร์ฟเวอร์และค่าบริการติดตั้ง
              ไม่มี vendor lock-in ย้ายออกได้ตลอด
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: <Clock size={16} />, text: "ติดตั้งเสร็จใน 3-5 วัน" },
                { icon: <Shield size={16} />, text: "ข้อมูลอยู่เซิร์ฟเวอร์คุณ" },
                { icon: <DollarSign size={16} />, text: "ไม่มี monthly license" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm border border-black/[0.04]"
                >
                  <span className="text-[#2997ff]">{item.icon}</span>
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
