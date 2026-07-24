"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#04070c] px-6 pb-14 pt-24 text-center sm:pt-32">
      {/* Background image — kept from original */}
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

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-accent"
        />

        <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">
          {["About", "Me"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" }}
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
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          A career built on the frontlines of emergency care.
        </motion.p>
      </div>
    </section>
  );
}