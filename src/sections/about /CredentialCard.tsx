"use client";

import { motion } from "framer-motion";
import type { Credential } from "./aboutData";

export default function CredentialCard({
  credential,
  index,
}: {
  credential: Credential;
  index: number;
}) {
  const lines = credential.description.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent opacity-[0.04] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.12]" />

      <div className="flex items-start gap-4">
        <motion.span
          whileHover={{ rotate: 12 }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/8 transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_0_18px_rgba(56,189,248,0.2)]"
        >
          <i
            className={`ti ${credential.icon} text-accent`}
            style={{ fontSize: "22px" }}
            aria-hidden="true"
          />
        </motion.span>

        <div>
          <h3 className="font-serif text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent">
            {credential.title}
          </h3>
          <div className="mt-2 flex flex-col gap-1.5">
            {lines.map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-zinc-400">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}