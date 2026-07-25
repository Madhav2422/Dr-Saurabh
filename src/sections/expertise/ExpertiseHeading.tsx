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
    
      <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">
        Areas of <span className="text-accent">Expertise</span>
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
        Specialized training across the full spectrum of emergency medicine.
      </p>
    </motion.div>
  );
}