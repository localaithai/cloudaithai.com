export default function MethodologySection() {
  return (
    <section className="apple-section">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#2997ff] font-medium mb-3">Working principles</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          เลือกงานและข้อมูลก่อนเลือกแอป
        </h1>
        <div className="mt-9 grid sm:grid-cols-3 gap-4">
          {[
            [
              "เริ่มที่งาน",
              "คุยว่างานเอกสาร เสียง รูป หรือข้อมูลส่วนไหนควรอยู่ใน Suite",
            ],
            [
              "กำหนด seat",
              "หนึ่งเครื่องต่อหนึ่ง seat และข้อมูลของแต่ละ seat ไม่แชร์กัน",
            ],
            [
              "ตั้งค่าอย่างตรงไปตรงมา",
              "เลือกแอป โมเดล และโฟลเดอร์สำรองข้อมูลระหว่างตั้งค่า",
            ],
          ].map(([title, text]) => (
            <article key={title} className="apple-card p-6">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
