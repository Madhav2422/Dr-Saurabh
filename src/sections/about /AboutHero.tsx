"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-[#04070c] px-6 pt-20 text-center">
      {/* Background image — reuse hero-bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,7,12,0.7) 0%, rgba(4,7,12,0.5) 50%, #04070c 100%)",
        }}
      />

      <div className="relative max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-accent"
        >
          <span className="h-px w-8 bg-accent/50" />
          About
          <span className="h-px w-8 bg-accent/50" />
        </motion.div>

        <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">
          {["About", "Me"].map((word, i) => (
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
          A career built on the frontlines of emergency care.
        </motion.p>
      </div>
    </section>
  );
}