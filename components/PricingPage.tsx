import { appGroups } from "@/lib/site-data";
import Pricing from "@/components/Pricing";
import Image from "next/image";
export default function PricingPage() {
  return (
    <>
      <Pricing />
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-5">
          {appGroups.map((group) => (
            <article key={group.title} className="apple-card p-7">
              <h2 className="text-2xl font-semibold">{group.title}</h2>
              <p className="mt-2 text-[#6e6e73]">{group.detail}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.apps.map((app) => (
                  <span
                    key={app}
                    className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-3 py-1.5 text-sm"
                  >
                    <Image
                      src={`/mimir-apps/${app.toLowerCase()}.png`}
                      alt=""
                      width={24}
                      height={24}
                      className="size-6 object-contain"
                    />
                    Mimir {app}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-[#6e6e73]">
                ราคาแอปต่อ seat: ติดต่อเรา
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
