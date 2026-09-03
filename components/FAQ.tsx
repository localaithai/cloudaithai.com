import { faqs } from "@/lib/site-data";
export default function FAQ() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          คำถามที่พบบ่อย
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="apple-card p-5 group">
              <summary className="cursor-pointer list-none font-semibold text-[#1d1d1f] flex justify-between gap-4">
                {question}
                <span className="text-[#2997ff] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-5 text-[#6e6e73] leading-relaxed">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
