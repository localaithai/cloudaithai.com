"use client";

import { useState, ReactNode, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CrossSiteLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function CrossSiteLink({ href, children, className, style }: CrossSiteLinkProps) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsNavigating(true);
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className} style={style}>
        {children}
      </a>

      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fbfbfd]"
          >
            <div className="w-6 h-6 border-2 border-[#2997ff]/30 border-t-[#2997ff] rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
