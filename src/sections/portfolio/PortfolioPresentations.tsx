"use client";

import { motion } from "framer-motion";
import { presentations } from "./portfolioData";
import { SectionLabel } from "./PortfolioResearch";

export default function PortfolioPresentations() {
  return (
    <div>
      <SectionLabel number="03" title="Scientific Presentations" icon="ti-presentation" />

      <div className="mt-8 flex flex-col gap-5">
        {presentations.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-accent/35"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs uppercase tracking-[0.15em] text-accent">
                  {p.type}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400">
                  {p.conference}
                </span>
              </div>
            </div>

            <p className="mt-4 font-serif text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-accent sm:text-xl">
              {p.title}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
              <i className="ti ti-map-pin text-accent/60" style={{ fontSize: "13px" }} />
              {p.venue}
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}