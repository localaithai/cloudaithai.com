import { assetUrl } from "@/lib/assets";
import Image from "next/image";

const partners = [
  { name: "Ingram Micro", logo: assetUrl("/partners/ingram-micro.svg") },
  { name: "TD SYNNEX", logo: assetUrl("/partners/td-synnex.svg") },
  { name: "SiS Distribution", logo: assetUrl("/partners/sis.png") },
  { name: "Ascenti", logo: assetUrl("/partners/ascenti-dark.png") },
  { name: "Eaton", logo: assetUrl("/partners/eaton.svg") },
  { name: "Schneider Electric", logo: assetUrl("/partners/schneider-electric.svg") },
  { name: "VST ECS", logo: assetUrl("/partners/vst-ecs.png") },
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
        <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] sm:grid-cols-3 lg:grid-cols-7">
          {partners.map((partner) => (
            <li key={partner.name} className="flex min-h-28 items-center justify-center border-b border-r border-black/[0.08] px-5 py-6">
              <Image src={partner.logo} alt={`${partner.name} logo`} width={160} height={64} className="h-10 w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
