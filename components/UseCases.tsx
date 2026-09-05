import { solutions } from "@/lib/site-data";
export default function UseCases({
  solution,
}: {
  solution: keyof typeof solutions;
}) {
  const item = solutions[solution];
  return (
    <section className="apple-section">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#0071e3] font-medium mb-3">Mimir Suites Cloud</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {item.title.replace("Mimir Suites Cloud สำหรับ", "")}
        </h1>
        <p className="mt-5 text-lg text-[#6e6e73] leading-relaxed">
          {item.intro}
        </p>
        <div className="mt-9 apple-card p-7">
          <h2 className="font-semibold text-[#1d1d1f]">แอปที่ใช้กับงานนี้</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {item.apps.map((app) => (
              <span
                key={app}
                className="rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-medium"
              >
                {app}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6e6e73]">
            หนึ่ง seat อยู่บนหนึ่งเครื่อง และข้อมูลของ seat
            นั้นเก็บบนเครื่องนั้น
          </p>
        </div>
      </div>
    </section>
  );
}
