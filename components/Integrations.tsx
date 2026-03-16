"use client";
import { motion } from "framer-motion";
import { useState } from "react";

/* ─── Brand icons: local /brands/ SVGs with emoji fallback ─── */
/* Map special slugs to local filenames where they differ */
const SLUG_TO_FILE: Record<string, string> = { x: "xai" };

function BrandIcon({ slug, fallback, color }: { slug: string; fallback: string; color: string }) {
  const [err, setErr] = useState(false);
  const file = SLUG_TO_FILE[slug] || slug;
  if (err) return <span className="text-lg">{fallback}</span>;
  return (
    <img
      src={`/brands/${file}.svg`}
      alt={slug}
      width={22}
      height={22}
      onError={() => setErr(true)}
      className="w-[22px] h-[22px]"
      loading="lazy"
    />
  );
}

interface Integration {
  name: string;
  slug: string;
  fallback: string;
  color: string;
  desc: string;
  category: string;
}

const categories = [
  { id: "ai", label: "AI Models", color: "#2997ff" },
  { id: "automation", label: "Automation", color: "#5856d6" },
  { id: "chat", label: "Chat & Social", color: "#34c759" },
  { id: "hosting", label: "Hosting & Infra", color: "#ff9500" },
  { id: "database", label: "Database & Storage", color: "#af52de" },
  { id: "productivity", label: "Productivity", color: "#ff3b30" },
  { id: "dev", label: "Developer", color: "#5ac8fa" },
];

const integrations: Integration[] = [
  // AI Models
  { name: "OpenAI (GPT-5)", slug: "openai", fallback: "🤖", color: "#412991", desc: "GPT-5, o3, DALL·E", category: "ai" },
  { name: "Anthropic (Claude)", slug: "anthropic", fallback: "🧠", color: "#191919", desc: "Claude Opus, Sonnet, Haiku", category: "ai" },
  { name: "Google (Gemini)", slug: "googlegemini", fallback: "🔵", color: "#4285F4", desc: "Gemini 3.1 Pro, Flash", category: "ai" },
  { name: "DeepSeek", slug: "deepseek", fallback: "🔮", color: "#5b6abf", desc: "V3, R1 Reasoning", category: "ai" },
  { name: "xAI (Grok)", slug: "x", fallback: "𝕏", color: "#000000", desc: "Grok 3 Real-time", category: "ai" },
  { name: "Ollama", slug: "ollama", fallback: "🦙", color: "#000000", desc: "Local model inference", category: "ai" },
  { name: "Hugging Face", slug: "huggingface", fallback: "🤗", color: "#FFD21E", desc: "Open-source models", category: "ai" },
  { name: "Replicate", slug: "replicate", fallback: "♻️", color: "#000000", desc: "Run any ML model", category: "ai" },

  // Automation
  { name: "n8n", slug: "n8n", fallback: "⚡", color: "#EA4B71", desc: "400+ workflow integrations", category: "automation" },
  { name: "OpenClaw", slug: "openclaw", fallback: "🦞", color: "#e74c3c", desc: "Personal AI agent", category: "automation" },
  { name: "Flowise", slug: "flowise", fallback: "🌊", color: "#3b82f6", desc: "Chatbot & RAG builder", category: "automation" },
  { name: "Dify", slug: "dify", fallback: "🔮", color: "#1f6feb", desc: "AI app platform", category: "automation" },
  { name: "ActivePieces", slug: "activepieces", fallback: "🧩", color: "#000000", desc: "No-code automation", category: "automation" },
  { name: "Zapier", slug: "zapier", fallback: "⚡", color: "#FF4A00", desc: "5,000+ app connections", category: "automation" },
  { name: "Make", slug: "make", fallback: "🔧", color: "#6D00CC", desc: "Visual automation", category: "automation" },

  // Chat & Social
  { name: "LINE", slug: "line", fallback: "💬", color: "#00C300", desc: "LINE OA, Messaging API", category: "chat" },
  { name: "WhatsApp", slug: "whatsapp", fallback: "📱", color: "#25D366", desc: "Business API", category: "chat" },
  { name: "Facebook", slug: "facebook", fallback: "📘", color: "#0866FF", desc: "Messenger, Pages", category: "chat" },
  { name: "Instagram", slug: "instagram", fallback: "📸", color: "#E4405F", desc: "DM, Comment API", category: "chat" },
  { name: "Telegram", slug: "telegram", fallback: "✈️", color: "#26A5E4", desc: "Bot API", category: "chat" },
  { name: "Slack", slug: "slack", fallback: "💼", color: "#4A154B", desc: "Workspace messaging", category: "chat" },
  { name: "Discord", slug: "discord", fallback: "🎮", color: "#5865F2", desc: "Community bots", category: "chat" },
  { name: "TikTok", slug: "tiktok", fallback: "🎵", color: "#000000", desc: "Creator tools", category: "chat" },

  // Hosting & Infra
  { name: "AWS EC2", slug: "amazonec2", fallback: "☁️", color: "#FF9900", desc: "Cloud compute", category: "hosting" },
  { name: "Google Cloud", slug: "googlecloud", fallback: "☁️", color: "#4285F4", desc: "GCE, Cloud Run", category: "hosting" },
  { name: "DigitalOcean", slug: "digitalocean", fallback: "🌊", color: "#0080FF", desc: "Droplets, App Platform", category: "hosting" },
  { name: "Vultr", slug: "vultr", fallback: "🖥️", color: "#007BFC", desc: "VPS hosting", category: "hosting" },
  { name: "Hetzner", slug: "hetzner", fallback: "🏗️", color: "#D50C2D", desc: "Budget VPS Europe", category: "hosting" },
  { name: "Hostinger", slug: "hostinger", fallback: "🌐", color: "#673DE6", desc: "Web + VPS hosting", category: "hosting" },
  { name: "Vercel", slug: "vercel", fallback: "▲", color: "#000000", desc: "Frontend deploy", category: "hosting" },
  { name: "Railway", slug: "railway", fallback: "🚂", color: "#0B0D0E", desc: "Deploy anything", category: "hosting" },
  { name: "Render", slug: "render", fallback: "🎨", color: "#46E3B7", desc: "Managed hosting", category: "hosting" },
  { name: "Tailscale", slug: "tailscale", fallback: "🔐", color: "#242424", desc: "Secure VPN mesh", category: "hosting" },
  { name: "Cloudflare", slug: "cloudflare", fallback: "🛡️", color: "#F38020", desc: "CDN, DNS, Workers", category: "hosting" },

  // Database & Storage
  { name: "Supabase", slug: "supabase", fallback: "⚡", color: "#3FCF8E", desc: "Postgres + Auth + Storage", category: "database" },
  { name: "PostgreSQL", slug: "postgresql", fallback: "🐘", color: "#4169E1", desc: "Relational database", category: "database" },
  { name: "Redis", slug: "redis", fallback: "🔴", color: "#FF4438", desc: "Cache & queue", category: "database" },
  { name: "Pinecone", slug: "pinecone", fallback: "🌲", color: "#000000", desc: "Vector database for RAG", category: "database" },
  { name: "Qdrant", slug: "qdrant", fallback: "🔷", color: "#DC244C", desc: "Vector search engine", category: "database" },
  { name: "Google Sheets", slug: "googlesheets", fallback: "📊", color: "#34A853", desc: "Spreadsheet as DB", category: "database" },
  { name: "Airtable", slug: "airtable", fallback: "📋", color: "#18BFFF", desc: "No-code database", category: "database" },
  { name: "MongoDB", slug: "mongodb", fallback: "🍃", color: "#47A248", desc: "Document database", category: "database" },

  // Productivity
  { name: "Gmail", slug: "gmail", fallback: "📧", color: "#EA4335", desc: "Email automation", category: "productivity" },
  { name: "Google Calendar", slug: "googlecalendar", fallback: "📅", color: "#4285F4", desc: "Scheduling", category: "productivity" },
  { name: "Google Drive", slug: "googledrive", fallback: "📁", color: "#4285F4", desc: "File storage", category: "productivity" },
  { name: "Notion", slug: "notion", fallback: "📝", color: "#000000", desc: "Workspace & docs", category: "productivity" },
  { name: "Obsidian", slug: "obsidian", fallback: "💎", color: "#7C3AED", desc: "Knowledge base", category: "productivity" },
  { name: "Trello", slug: "trello", fallback: "📌", color: "#0052CC", desc: "Project boards", category: "productivity" },

  // Developer
  { name: "GitHub", slug: "github", fallback: "🐙", color: "#181717", desc: "Code & CI/CD", category: "dev" },
  { name: "Docker", slug: "docker", fallback: "🐳", color: "#2496ED", desc: "Containers", category: "dev" },
  { name: "Python", slug: "python", fallback: "🐍", color: "#3776AB", desc: "AI/ML scripts", category: "dev" },
  { name: "Node.js", slug: "nodedotjs", fallback: "🟢", color: "#5FA04E", desc: "Backend runtime", category: "dev" },
  { name: "LangChain", slug: "langchain", fallback: "🔗", color: "#1C3C3C", desc: "LLM framework", category: "dev" },
  { name: "Webhook", slug: "webhook", fallback: "🪝", color: "#c73a63", desc: "Event triggers", category: "dev" },
];

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState("ai");
  const filtered = integrations.filter((i) => i.category === activeCategory);
  const activeCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="integrations" className="apple-section">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-[40px] sm:text-[56px] font-semibold tracking-[-0.04em] mb-4">
            เชื่อมต่อทุกอย่าง.
          </h2>
          <p className="text-[19px] text-[#6e6e73] max-w-[600px] mx-auto leading-[1.47]">
            {integrations.length}+ integrations — ตั้งแต่ AI models, chat platforms, hosting, databases ถึง productivity tools ทั้งหมดเชื่อมกันได้
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${
                activeCategory === cat.id
                  ? "text-white shadow-sm"
                  : "bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
              style={activeCategory === cat.id ? { background: cat.color } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Integration grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="apple-card px-4 py-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center shrink-0">
                <BrandIcon slug={item.slug} fallback={item.fallback} color={item.color} />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#1d1d1f] truncate">{item.name}</p>
                <p className="text-[11px] text-[#6e6e73] truncate">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Count badge */}
        <p className="text-center text-[14px] text-[#6e6e73] mt-8">
          รวม <span className="font-medium text-[#1d1d1f]">{integrations.length}+</span> integrations — และเพิ่มเติมได้ตลอด
        </p>
      </div>
    </section>
  );
}
