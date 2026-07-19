"use client";

import { motion } from "framer-motion";

export default function ExpertiseHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-14"
    >
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
        <span className="h-px w-8 bg-accent/50" />
        Specializations
      </div>
      <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
        Areas of <span className="text-accent">Expertise</span>
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
        Specialized training and extensive experience across the full spectrum
        of emergency medicine.
      </p>
    </motion.div>
  );
}