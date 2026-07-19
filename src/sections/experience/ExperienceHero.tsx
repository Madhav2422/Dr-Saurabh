"use client";

import { motion } from "framer-motion";

export default function ExperienceHero() {
  return (
    <section className="relative overflow-hidden bg-[#04070c] px-6 pb-10 pt-24 text-center sm:pt-32">
      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "#38bdf8" }}
      />

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-8 bg-accent/50" />
          Experience
          <span className="h-px w-8 bg-accent/50" />
        </motion.div>

        <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">
          {["Professional", "Experience"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3 + i * 0.25, ease: "easeOut" }}
              className={`inline-block ${i === 1 ? "text-accent" : ""}`}
            >
              {word}
              {i === 0 && "\u00A0"}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          A career of dedication to emergency medicine excellence.
        </motion.p>
      </div>
    </section>
  );
}