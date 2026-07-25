"use client";

import { motion } from "framer-motion";
import { academicActivities } from "./portfolioData";
import { SectionLabel } from "./PortfolioResearch";

export default function PortfolioAcademic() {
  return (
    <div>
      <SectionLabel number="05" title="Academic Activities" icon="ti-school" />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {academicActivities.map((activity, i) => (
          <motion.div
            key={activity}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-colors duration-300 hover:border-accent/35 hover:bg-accent/[0.04]"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-sm leading-snug text-zinc-300">{activity}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}