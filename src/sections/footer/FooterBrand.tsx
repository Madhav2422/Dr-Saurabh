"use client";

import { motion } from "framer-motion";

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-accent"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span className="font-serif text-xl font-semibold text-white">
          Dr. <span className="text-accent">Saurabh</span>
        </span>
      </div>

      <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
        Board-certified Emergency Medicine physician dedicated to providing
        life-saving care when every second counts.
      </p>
    </motion.div>
  );
}