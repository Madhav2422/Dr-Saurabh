"use client";

import { motion } from "framer-motion";

export default function FooterBottom() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-zinc-500 sm:flex-row"
    >
      <span>© 2026 Dr. Saurabh — Emergency Medicine. All rights reserved.</span>
      <span className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Available for consultations
      </span>
    </motion.div>
  );
}