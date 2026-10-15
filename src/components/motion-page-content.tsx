import { MotionConfig, motion } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionPageContent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
