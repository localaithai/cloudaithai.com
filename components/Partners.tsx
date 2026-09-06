const partners = [
  "INGRAM MICRO",
  "TD SYNNEX",
  "SIS",
  "ASCENTI",
  "EATON",
  "SCHNEIDER",
  "VST ECS",
] as const;

export default function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="apple-section section-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-medium text-[#0071e3]">Partner ecosystem</p>
          <h2 id="partners-heading" className="text-4xl font-semibold tracking-tight sm:text-5xl">พร้อมเติบโตจาก cloud ไปถึงระบบเต็มรูปแบบ</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#515154]">Mimir Suites Cloud เริ่มได้โดยไม่ต้องมีเครื่อง AI และยังอยู่ในเครือข่ายพาร์ทเนอร์เดียวกับระบบ hardware และ infrastructure เมื่อต้องการขยายภายหลัง</p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-black/[0.08] py-8">
          {partners.map((partner) => (
            <li key={partner} className="px-2 text-sm font-semibold tracking-[-0.01em] text-[#515154] sm:text-base">{partner}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
