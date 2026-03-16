import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CloudAI Thailand — AI Automation สำหรับธุรกิจไทย",
    template: "%s | CloudAI Thailand",
  },
  description:
    "บริการติดตั้งระบบ AI Automation สำหรับธุรกิจ ใช้ Frontier Model (GPT-5, Claude 4.6, Gemini 3.1 Pro) + n8n, OpenClaw, Flowise, Dify สร้าง Workflow อัตโนมัติ ลดงาน 80% เริ่มต้น ฿19,900",
  keywords: [
    "AI Automation Thailand",
    "Cloud AI Thailand",
    "n8n Thailand",
    "AI Workflow",
    "GPT-5 Thailand",
    "Claude AI Thailand",
    "Chatbot Thailand",
    "AI Agent Thailand",
    "ระบบ AI อัตโนมัติ",
    "AI สำหรับธุรกิจไทย",
  ],
  openGraph: {
    title: "CloudAI Thailand — AI Automation สำหรับธุรกิจไทย",
    description: "ติดตั้งระบบ AI Automation ใช้ Frontier Model เริ่มต้น ฿19,900",
    url: "https://cloudaithai.com",
    siteName: "CloudAI Thailand",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudAI Thailand — AI Automation",
    description: "AI Automation สำหรับธุรกิจไทย เริ่ม ฿19,900",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
