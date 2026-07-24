"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#04070c] px-6 pb-16 pt-24 text-center sm:px-12 sm:pt-32 lg:px-16">
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "#38bdf8" }}
      />

      <div className="relative mx-auto max-w-2xl">
    
      

        <h1 className="font-serif text-4xl font-bold text-white sm:text-6xl">
          {["Get", "in", "Touch"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: "easeOut" }}
              className={`inline-block ${i === 2 ? "text-accent" : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {word}
              {i < 2 && "\u00A0"}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
         Open to professional collaborations, academic discussions, research opportunities, conference invitations, and Emergency Medicine networking.
        </motion.p>
      </div>
    </section>
  );
}