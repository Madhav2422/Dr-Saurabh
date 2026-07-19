"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative max-w-2xl"
    >
      <motion.div
        variants={item}
        className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-accent sm:text-sm"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Emergency Medicine Specialist
      </motion.div>

      <motion.h1
        variants={item}
        className="font-serif text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        style={{ textShadow: "0 4px 24px rgba(0,0,0,0.75)" }}
      >
        Saving Lives
        <br />
        <span className="text-accent">When It Matters</span>
        <br />
        Most
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl border-l-2 border-accent/40 pl-4 text-[15px] leading-relaxed text-zinc-100 sm:mt-8 sm:pl-5 sm:text-lg sm:text-zinc-300"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
      >
        Board-certified Emergency Medicine physician with over 15 years of
        experience in high-acuity trauma care, critical resuscitation, and
        emergency department leadership.
      </motion.p>
    </motion.div>
  );
}