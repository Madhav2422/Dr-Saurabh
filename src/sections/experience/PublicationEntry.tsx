"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Publication } from "./experienceData";

export default function PublicationEntry({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative grid cursor-default grid-cols-[auto_1fr] gap-6 border-b border-white/8 py-8 sm:grid-cols-[80px_1fr_auto] sm:gap-8"
    >
      {/* Citation marker like [01] */}
      <div className="relative">
        <motion.span
          animate={{
            color: hovered ? "#38bdf8" : "rgba(255,255,255,0.25)",
          }}
          transition={{ duration: 0.3 }}
          className="font-mono text-sm tracking-widest sm:text-base"
        >
          [{String(index + 1).padStart(2, "0")}]
        </motion.span>

        {/* Highlighter sweep behind the marker */}
        <motion.span
          initial={false}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute -inset-x-2 -inset-y-1 -z-10 rounded bg-accent/10"
          style={{ originX: 0 }}
        />
      </div>

      {/* Title + citation line */}
      <div className="min-w-0">
        <h3
          className={`font-serif text-lg font-bold leading-snug transition-colors duration-300 sm:text-xl ${
            hovered ? "text-accent" : "text-white"
          }`}
        >
          {publication.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-500">
          <span className="italic">{publication.journal}</span>
          <span className="h-1 w-1 rounded-full bg-zinc-600" />
          <span className="font-mono">{publication.year}</span>
        </div>

        {/* Underline draws under the title on hover */}
        <motion.div
          initial={false}
          animate={{ width: hovered ? "60%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-3 h-px bg-gradient-to-r from-accent/60 to-transparent"
        />
      </div>

      {/* DOI-style chip — desktop only */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0.3, x: hovered ? 0 : 8 }}
        transition={{ duration: 0.3 }}
        className="hidden items-center self-center sm:flex"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-accent">
          <i className="ti ti-file-text" style={{ fontSize: "13px" }} aria-hidden="true" />
          Published
        </span>
      </motion.div>
    </motion.div>
  );
}