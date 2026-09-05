import { appGroups, models } from "@/lib/site-data";
export default function EcosystemSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#0071e3] font-medium mb-3">Mimir Suites Cloud</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          แอปของคุณ, โมเดลที่เลือก
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[#6e6e73]">
          Mimir Suite รวมแอปบนเครื่องของแต่ละ seat และเชื่อมต่อโมเดลคลาวด์ตามงาน
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {models.map((model) => (
            <span
              key={model}
              className="rounded-full bg-white px-4 py-2 shadow-sm"
            >
              {model}
            </span>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {appGroups.map((group) => (
            <article key={group.title} className="apple-card p-6">
              <h2 className="font-semibold text-[#1d1d1f]">{group.title}</h2>
              <p className="mt-2 text-sm text-[#6e6e73]">{group.detail}</p>
              <p className="mt-4 text-sm text-[#1d1d1f]">
                {group.apps.map((app) => `Mimir ${app}`).join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
