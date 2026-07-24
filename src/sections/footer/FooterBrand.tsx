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
        <span className="font-serif text-xl font-semibold text-white">
          Dr. <span className="text-accent">Saurabh Hirani</span>
        </span>
      </div>

      <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
        Board-certified Emergency Medicine physician dedicated to providing
        life-saving care when every second counts.
      </p>
    </motion.div>
  );
}