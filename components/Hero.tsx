import Image from "next/image";
import Link from "next/link";

import { assetUrl } from "@/lib/assets";
import { site } from "@/lib/site";
import { models } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="bg-[#fbfbfd]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 sm:pt-32 lg:grid-cols-[0.95fr_1.1fr] lg:gap-12">
        <div>
          <p className="mb-5 font-medium text-[#0071e3]">
            Mimir Suites Cloud
          </p>
          <h1 className="max-w-[14ch] text-[clamp(2.5rem,4.2vw,4.2rem)] font-semibold leading-[1.2] tracking-[-.045em] text-[#1d1d1f]">
            AI บนทุกเครื่อง
            <br />
            <span className="text-[#0071e3]">ของทีมคุณ</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#6e6e73] sm:text-xl">
            ติดตั้ง Mimir Suite บนเครื่องพนักงาน เลือกแอปและโมเดลคลาวด์ได้เอง
            ไม่ต้องซื้อเครื่อง AI ไม่มีเซิร์ฟเวอร์ และไม่มีบริการโฮสต์จากเรา
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={site.primaryCta.href}
              className="apple-btn apple-btn-blue"
            >
              {site.primaryCta.label}
            </Link>
            <Link href="/pricing" className="apple-link min-h-11 px-2">
              ดูรูปแบบราคา
            </Link>
          </div>
          <p className="mt-4 max-w-prose text-sm leading-[1.5] text-[#6e6e73]">
            ข้อความเอกสารถูกส่งไปยังโมเดลคลาวด์ โดยปิดบัง PII เป็นค่าเริ่มต้น
          </p>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
          <div className="relative aspect-[3.4] overflow-hidden">
            <Image
              src={assetUrl("/mimir-suites-home.png")}
              alt="ตัวอย่างหน้ารวมแอป Mimir Suites"
              width={3016}
              height={1894}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="absolute bottom-0 left-1/2 h-auto w-[190%] max-w-none -translate-x-1/2 translate-y-[4.4%] object-contain object-bottom"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm leading-[1.5] text-[#6e6e73]">
            ตัวอย่างหน้ารวมแอป Mimir Suites · Cloud edition ใช้โมเดลคลาวด์
          </figcaption>
        </figure>

        <div className="flex flex-col gap-3 border-y border-black/10 py-4 sm:flex-row sm:items-center sm:gap-6 lg:col-span-2">
          <p className="m-0 text-xs font-medium uppercase tracking-[.12em] text-[#6e6e73]">
            Choose a model for the work
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-x-3 gap-y-1 p-0 text-sm text-[#1d1d1f]">
            {models.map((model) => (
              <li key={model}>{model}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
