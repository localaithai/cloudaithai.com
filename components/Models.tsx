import { models } from "@/lib/site-data";
export default function Models() {
  return (
    <section id="models" className="apple-section">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#0071e3] font-medium mb-3">Model choice</p>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          เลือกโมเดลให้เหมาะกับงาน
        </h2>
        <p className="mt-4 text-lg text-[#6e6e73]">
          ใน Suite คุณเลือก Claude, Gemini, GPT หรือ DeepSeek
          สำหรับงานที่กำลังทำได้
        </p>
        <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {models.map((model) => (
            <div
              key={model}
              className="apple-card p-5 font-semibold text-[#1d1d1f]"
            >
              {model}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#6e6e73]">
          ค่าใช้โมเดลยังไม่กำหนด, ติดต่อเราเพื่อคุยความต้องการ
        </p>
      </div>
    </section>
  );
}
