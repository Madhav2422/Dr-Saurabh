"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        My Story
      </div>

      <h2 className="font-serif text-3xl font-bold text-white sm:text-5xl">
        Passion for <span className="text-accent">Emergency Medicine</span>
      </h2>

      <div className="mt-6 flex flex-col gap-5 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
        <p>
          My journey in emergency medicine began during medical school when I
          witnessed the incredible impact of rapid, decisive care during a mass
          casualty drill. That moment crystallized my calling — to be there
          when every second counts.
        </p>
        <p>
          Over 15 years later, that same urgency and purpose drives me every
          shift. From leading trauma resuscitations to mentoring the next
          generation of emergency physicians, I believe exceptional emergency
          care combines clinical excellence with genuine human compassion.
        </p>
      </div>
    </motion.div>
  );
}