"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "./experienceData";

export default function ExperienceCard({
  experience,
  index,
  total,
}: {
  experience: Experience;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As the next card scrolls over, this one shrinks + dims slightly
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="sticky top-24 flex items-start justify-center px-6 sm:px-12"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={isLast ? {} : { scale, opacity }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#070d16] p-8 shadow-2xl shadow-black/50 sm:p-12"
      >
        {/* Corner glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "#38bdf8" }}
        />

        {/* Ghost index number */}
        <span className="pointer-events-none absolute -bottom-8 -right-2 select-none font-serif text-[11rem] font-bold leading-none text-accent/[0.05]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          {/* Period badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5">
            <i
              className="ti ti-calendar text-accent"
              style={{ fontSize: "14px" }}
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-accent">
              {experience.period}
            </span>
          </div>

          <h3 className="mt-6 font-serif text-3xl font-bold text-white sm:text-4xl">
            {experience.role}
          </h3>
          <p className="mt-2 text-base text-accent">{experience.organization}</p>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="mt-7 flex flex-wrap gap-3">
            {experience.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}