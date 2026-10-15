import { MotionConfig, motion } from "framer-motion";

import { site } from "@/lib/site";
import { footer } from "@/lib/site-data";

export default function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.footer
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-black/[.05] py-10"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-semibold text-[#1d1d1f]">CloudAI Thailand</p>
            <p className="mt-2 max-w-sm text-sm text-[#6e6e73]">
              Mimir Suites Cloud สำหรับงานบนเครื่องพนักงาน
            </p>
            {site.legalDisclosure && (
              <p className="mt-3 text-xs text-[#6e6e73]">
                {site.legalDisclosure}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#6e6e73]">
            {footer.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center hover:text-[#1d1d1f]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.primaryCta.href}
              className="inline-flex min-h-11 items-center hover:text-[#1d1d1f]"
            >
              {site.primaryCta.label}
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-5 border-t border-black/[.05] text-xs text-[#6e6e73]">
          © 2026 CloudAI Thailand
        </div>
      </motion.footer>
    </MotionConfig>
  );
}
