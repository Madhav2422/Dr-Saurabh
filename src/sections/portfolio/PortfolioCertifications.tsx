"use client";

import { motion } from "framer-motion";
import { certifications } from "./portfolioData";
import { SectionLabel } from "./PortfolioResearch";

export default function PortfolioCertifications() {
  return (
    <div>
      <SectionLabel number="06" title="Certifications" icon="ti-certificate" />

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.04] p-7"
          >
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full opacity-[0.1] blur-[60px]"
              style={{ background: "#38bdf8" }}
            />

            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <i
                  className={`ti ${cert.icon} text-accent`}
                  style={{ fontSize: "24px" }}
                />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {cert.org}
                </p>
                <h3 className="mt-2 font-serif text-lg font-bold text-white sm:text-xl">
                  {cert.title}
                </h3>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-accent"
              />
              <span className="text-xs uppercase tracking-[0.15em] text-accent/70">
                Active Certification
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}