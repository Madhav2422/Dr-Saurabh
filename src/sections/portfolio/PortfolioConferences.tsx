"use client";

import { motion } from "framer-motion";
import { conferences } from "./portfolioData";
import { SectionLabel } from "./PortfolioResearch";

export default function PortfolioConferences() {
  return (
    <div>
      <SectionLabel number="02" title="Conferences" icon="ti-building" />

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {conferences.map((conf, i) => (
          <motion.div
            key={conf.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-[0.15]"
              style={{ background: "#38bdf8" }}
            />
            <span className="font-mono text-4xl font-bold text-accent/10">
              {conf.year}
            </span>
            <h3 className="mt-3 font-serif text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent">
              {conf.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent/70">
              {conf.subtitle}
            </p>
            {conf.department && (
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                {conf.department}
              </p>
            )}
            <p className="mt-1 text-xs text-zinc-500">{conf.institution}</p>
            <div className="mt-5 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}