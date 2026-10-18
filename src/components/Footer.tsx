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
        className="border-t border-black/[.06] pt-16 pb-10 sm:pt-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
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
          <div className="grid grid-cols-2 content-start gap-x-8 border-t border-black/[.06] pt-4 text-sm text-[#6e6e73] sm:grid-cols-3 md:border-t-0 md:pt-0">
            {footer.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hairline-link inline-flex min-h-11 items-center justify-self-start hover:text-[#1d1d1f]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.primaryCta.href}
              className="hairline-link inline-flex min-h-11 items-center justify-self-start hover:text-[#1d1d1f]"
            >
              {site.primaryCta.label}
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-14">
          <p className="border-t border-black/[.06] pt-6 text-xs text-[#6e6e73]">
            © 2026 CloudAI Thailand
          </p>
        </div>
      </motion.footer>
    </MotionConfig>
  );
}
