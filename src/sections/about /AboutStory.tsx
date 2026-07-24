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
          Emergency Medicine is where knowledge, teamwork, and decisive action come together to make the greatest impact. Every patient presents a unique challenge, requiring rapid assessment, sound clinical judgment, and timely intervention. This dynamic environment is what continues to inspire my commitment to Emergency Medicine.
        </p>
        <p>
         Throughout my residency, I have managed diverse emergency presentations ranging from cardiac arrest, trauma, stroke, and sepsis to pediatric emergencies and toxicological cases. Alongside clinical practice, I actively participate in research, academic conferences, and continuous learning, with the goal of advancing Emergency Medicine and improving patient outcomes through evidence-based practice.
        </p>
      </div>
    </motion.div>
  );
}