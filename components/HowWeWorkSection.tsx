import { setupSteps } from "@/lib/site-data";
export default function HowWeWorkSection() {
  return (
    <section className="apple-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-[#2997ff] font-medium mb-3">How it works</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            เริ่มจากเครื่องของแต่ละคน
          </h1>
        </div>
        <div className="mt-12 grid sm:grid-cols-5 gap-4">
          {setupSteps.map(([number, title, detail]) => (
            <article key={number} className="apple-card p-5">
              <p className="text-[#2997ff] font-semibold">{number}</p>
              <h2 className="mt-4 font-semibold text-[#1d1d1f]">{title}</h2>
              <p className="mt-2 text-sm text-[#6e6e73] leading-relaxed">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
