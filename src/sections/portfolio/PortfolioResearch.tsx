"use client";

import { motion } from "framer-motion";
import { researchData } from "./portfolioData";

export default function PortfolioResearch() {
  return (
    <div>
      <SectionLabel number="02" title="Research" icon="ti-microscope" />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.04] p-7"
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.12] blur-[60px]"
            style={{ background: "#38bdf8" }}
          />
          <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent">
            <i className="ti ti-file-text" style={{ fontSize: "14px" }} />
            {researchData.thesis.label}
          </div>
          <p className="text-base font-medium leading-relaxed text-white sm:text-lg">
            {researchData.thesis.title}
          </p>
        </motion.div>

        {/* Future interests */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
        >
          <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent">
            Future Research Interests
          </div>
          <div className="flex flex-wrap gap-2">
            {researchData.futureInterests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function SectionLabel({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-xs tracking-[0.3em] text-accent/60">
        {number}
      </span>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/8">
          <i className={`ti ${icon} text-accent`} style={{ fontSize: "16px" }} />
        </span>
        <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="flex-1 h-px bg-white/8" />
    </motion.div>
  );
}