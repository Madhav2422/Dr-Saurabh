"use client";

import { motion } from "framer-motion";

export default function HeroScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-400"
    >
      <span>Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <i
          className="ti ti-stethoscope text-accent"
          style={{ fontSize: "20px" }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
}