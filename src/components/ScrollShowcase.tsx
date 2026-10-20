import { MotionConfig, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { setupSteps } from "@/lib/site-data";
export default function ScrollShowcase() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="apple-section section-gray">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 data-reveal="" className="reveal-on-scroll text-h2 font-semibold tracking-tight">
              Suite พร้อมงาน, ทีละเครื่อง
            </h2>
            <p
              data-reveal=""
              style={{ "--i": 1 } as CSSProperties}
              className="reveal-on-scroll mx-auto mt-4 max-w-[44rem] text-balance text-lead text-[#6e6e73]"
            >
              ตั้งค่าในแอป แล้วเลือกสิ่งที่เหมาะกับงานของคุณ
            </p>
          </motion.div>
          <div className="mt-10 grid sm:grid-cols-5 gap-3">
            {setupSteps.map(([number, title, detail], index) => (
              <article
                key={number}
                data-reveal=""
                style={{ "--i": index } as CSSProperties}
                className="reveal-on-scroll apple-card p-5"
              >
                <p className="text-[#0066cc] text-sm font-semibold">{number}</p>
                <h3 className="mt-3 text-h3 font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
