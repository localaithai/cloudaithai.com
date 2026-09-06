import { appGroups, models } from "@/lib/site-data";
import Image from "next/image";
export default function EcosystemSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-3 flex items-center gap-3">
          <Image
            src="/mimir-suite-logo.png"
            alt=""
            width={72}
            height={48}
            className="h-10 w-auto object-contain"
          />
          <p className="font-medium text-[#0071e3]">Mimir Suites Cloud</p>
        </div>
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
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {group.apps.map((app) => (
                  <li
                    key={app}
                    className="flex items-center gap-2 text-sm text-[#1d1d1f]"
                  >
                    <Image
                      src={`/mimir-apps/${app.toLowerCase()}.png`}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                    <span>Mimir {app}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
