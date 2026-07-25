"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./PortfolioResearch";

export default function PortfolioOutreach() {
  return (
    <div>
      <SectionLabel number="01" title="Community Outreach & CPR Education" icon="ti-heart-handshake" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-8 overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.03]"
      >
        {/* Top banner */}
        <div className="relative border-b border-accent/15 px-7 py-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.15] blur-[60px]"
            style={{ background: "#38bdf8" }}
          />
          <p className="relative text-sm font-medium leading-relaxed text-accent/90 sm:text-base">
            Promoting lifesaving skills through Basic Life Support (BLS) and CPR awareness programs for schools, educational institutions, corporate organizations, and the community.
          </p>
        </div>

        {/* Description */}
        <div className="px-7 py-6">
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Conducting Basic Life Support (BLS) and CPR awareness sessions to empower teachers, students, employees, and the general public with essential lifesaving skills. I welcome opportunities to collaborate with schools, colleges, organizations, and community groups to improve emergency preparedness and strengthen bystander response during medical emergencies.
          </p>

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex items-center gap-3 rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
            />
            <p className="text-sm text-zinc-300">
              <span className="font-semibold text-accent">Open to collaborate</span> — reach out to arrange a BLS/CPR session for your school, college, or organization.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}