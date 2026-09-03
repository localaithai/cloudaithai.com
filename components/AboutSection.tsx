export default function AboutSection() {
  return (
    <section className="apple-section">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#2997ff] font-medium mb-3">About</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Mimir Suites Cloud คือ Suite บนเครื่องทำงาน
        </h1>
        <p className="mt-6 text-lg text-[#6e6e73] leading-relaxed">
          CloudAI Thailand คือประตูสำหรับ Mimir Suites Cloud ในไทย
          แอปติดตั้งบนเครื่องพนักงานแต่ละเครื่อง ทุก seat
          แยกการติดตั้งและข้อมูลออกจากกัน
        </p>
        <div className="mt-9 apple-card p-6">
          <p className="font-semibold text-[#1d1d1f]">ไม่ต้องซื้อเครื่อง AI</p>
          <p className="mt-2 text-[#6e6e73]">
            เลือกแอป เลือกโมเดล แล้วทำงานจาก Mimir Suite บนเครื่องของคุณ
          </p>
        </div>
      </div>
    </section>
  );
}
