import Image from "next/image";
import { assetUrl } from "@/lib/assets";

const LOCAL_MACHINE_OPTIONS = [
  { name: "MSI EdgeXpert", path: "/msi-edgexpert.png", width: 520, height: 230 },
  { name: "Acer GN100", path: "/acer-gn100.jpg", width: 1306, height: 808 },
  { name: "ASUS Ascent GX10", path: "/asus-gx10.png", width: 498, height: 205 },
  { name: "Lenovo ThinkStation PGX", path: "/lenovo-pgx.png", width: 537, height: 281 },
] as const;

export default function CompareSection() {
  return (
    <section className="apple-section section-gray">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="text-[#0071e3] font-medium mb-3">
            Choose the right edition
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Cloud หรือ AI machine
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <article className="apple-card p-7">
            <h2 className="text-2xl font-semibold">Mimir Suites Cloud</h2>
            <p className="mt-4 text-[#6e6e73] leading-relaxed">
              Mimir Suite บนเครื่องพนักงาน ใช้โมเดลคลาวด์ ไม่ต้องซื้อเครื่อง AI
              แต่ข้อมูลเอกสารถูกส่งไปยังโมเดลคลาวด์หลังปิดทับข้อมูลส่วนบุคคลโดยค่าเริ่มต้น
            </p>
          </article>
          <article className="apple-card p-7">
            <h2 className="text-2xl font-semibold">Local edition</h2>
            <p className="mt-4 text-[#6e6e73] leading-relaxed">
              สำหรับองค์กรที่ต้องการทางเลือก on-site ด้วย AI machine
            </p>
            <a
              href="https://localaithai.com"
              className="apple-link mt-5 inline-block"
            >
              ดู Local AI Thailand
            </a>
          </article>
        </div>
        <div className="mt-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              ตัวอย่างเครื่อง AI แบบ GB10 4 รุ่น สำหรับ Local edition เท่านั้น
            </h3>
            <p className="mt-4 text-[#6e6e73] leading-relaxed">
              เครื่องทั้งสี่รุ่นนี้เป็นตัวอย่างสำหรับ Local edition: Cloud edition ใช้โมเดลจากคลาวด์จึงไม่ต้องซื้อเครื่อง AI ส่วนรุ่นที่เหมาะกับ Local edition ขึ้นอยู่กับโมเดลและลักษณะงานขององค์กร
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {LOCAL_MACHINE_OPTIONS.map((machine) => (
              <figure key={machine.name} className="apple-card p-5">
                <Image
                  src={assetUrl(machine.path)}
                  alt={`${machine.name}, ตัวอย่างเครื่อง AI แบบ GB10 สำหรับ Local edition`}
                  width={machine.width}
                  height={machine.height}
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 100vw"
                  className="h-32 w-full object-contain"
                />
                <figcaption className="mt-3 font-medium">
                  {machine.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
