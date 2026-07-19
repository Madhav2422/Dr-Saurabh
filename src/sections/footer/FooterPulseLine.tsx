"use client";

import { motion } from "framer-motion";

export default function FooterPulseLine() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-white/8">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-y-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent, #38bdf8, transparent)",
        }}
      />
    </div>
  );
}