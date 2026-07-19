"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.05, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mt-10 flex flex-wrap gap-4"
    >
      <Link
        href="/contact"
        className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-300 hover:shadow-sky-500/50"
      >
        Get in touch
        <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
      </Link>

      <Link
        href="/experience"
        className="inline-flex items-center rounded-md border border-white/25 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
      >
        View Experience
      </Link>
    </motion.div>
  );
}