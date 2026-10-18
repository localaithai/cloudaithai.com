import { MotionConfig, motion } from "framer-motion";
import type { CSSProperties } from "react";

import { site } from "@/lib/site";

export default function Pricing({ reveal = true }: { reveal?: boolean }) {
  const revealAttr = reveal ? "" : undefined;
  return (
    <MotionConfig reducedMotion="user">
      <section id="pricing" className="apple-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p
              data-reveal={revealAttr}
              className="eyebrow text-[#0071e3] font-medium mb-3"
            >
              Pricing
            </p>
            <h2
              data-reveal={revealAttr}
              style={{ "--i": 1 } as CSSProperties}
              className="text-h2 font-semibold tracking-tight"
            >
              เลือกแอป, เลือก seat
            </h2>
            <div
              data-reveal={revealAttr}
              style={{ "--i": 2 } as CSSProperties}
              className="mt-8 apple-card border border-black/10 p-8"
            >
              <p className="text-lg text-[#1d1d1f]">
                Mimir Suites Cloud คิดราคา <strong>ต่อแอป ต่อ seat</strong>
              </p>
              <p className="mt-3 text-[#6e6e73]">
                ค่าใช้โมเดลยังไม่กำหนด จึงแสดงเป็น ติดต่อเรา
              </p>
              <a
                href={site.primaryCta.href}
                className="apple-btn apple-btn-blue mt-7 inline-flex"
              >
                {site.primaryCta.label}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
