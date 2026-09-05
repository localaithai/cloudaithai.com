export default function CompareSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-[#0071e3] font-medium mb-3">
            Choose the right edition
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Cloud หรือ AI machine
          </h1>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <article className="apple-card p-7">
            <h2 className="text-2xl font-semibold">Mimir Suites Cloud</h2>
            <p className="mt-4 text-[#6e6e73] leading-relaxed">
              Mimir Suite บนเครื่องพนักงาน ใช้โมเดลคลาวด์ ไม่ต้องซื้อเครื่อง AI
              แต่ข้อมูลเอกสารถูกส่งไปยังโมเดลคลาวด์หลังปิดทับข้อมูลส่วนบุคคลโดยค่าเริ่มต้น
            </p>
          </article>
          <article className="apple-card p-7">
            <h2 className="text-2xl font-semibold">Local edition</h2>
            <p className="mt-4 text-[#6e6e73] leading-relaxed">
              สำหรับองค์กรที่ต้องการทางเลือก on-site ด้วย AI machine
            </p>
            <a
              href="https://localaithai.com"
              className="apple-link mt-5 inline-block"
            >
              ดู Local AI Thailand
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
