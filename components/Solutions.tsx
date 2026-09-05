import { solutions } from "@/lib/site-data";
export default function Solutions() {
  return (
    <section id="solutions" className="apple-section section-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#0071e3] font-medium mb-3">Solutions</p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            แอปที่เริ่มจากงานจริง
          </h2>
          <p className="mt-4 text-lg text-[#6e6e73]">
            เลือกแอปต่อ seat เพื่อช่วยงานเอกสาร ข้อมูล
            และเนื้อหาของคนทำงานแต่ละคน
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {Object.entries(solutions).map(([slug, solution]) => (
            <a
              key={slug}
              href={`/solutions/${slug}`}
              className="apple-card p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-[#1d1d1f]">
                {solution.title.replace("Mimir Suites Cloud สำหรับ", "")}
              </h3>
              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                {solution.intro}
              </p>
              <p className="mt-4 text-sm text-[#0071e3]">ดูแอปที่เกี่ยวข้อง</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
