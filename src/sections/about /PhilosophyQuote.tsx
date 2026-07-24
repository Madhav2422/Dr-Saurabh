"use client";

import { motion } from "framer-motion";
import { philosophy } from "./aboutData";

export default function PhilosophyQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.04] px-8 py-12 text-center sm:px-14"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-[100px]"
        style={{ background: "#38bdf8" }}
      />

      <i
        className="ti ti-quote text-accent"
        style={{ fontSize: "28px" }}
        aria-hidden="true"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="mt-5 font-serif text-xl font-medium italic leading-relaxed text-white sm:text-2xl"
      >
        &ldquo;{philosophy}&rdquo;
      </motion.p>

      <div className="mx-auto mt-6 h-px w-16 bg-accent/40" />
      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-accent">
        Professional Philosophy
      </p>
    </motion.div>
  );
}