import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fades server-rendered children in once they scroll into view. The children
 * reach React as static HTML that it never reconciles, so omni's cta.js can
 * fill a [data-cta] host inside without hydration undoing its work.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
