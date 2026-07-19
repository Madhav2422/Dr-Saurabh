"use client";

import { motion } from "framer-motion";
import PublicationEntry from "./PublicationEntry";
import { publications } from "./experienceData";

export default function Publications() {
  return (
    <section className="relative bg-[#04070c] px-6 pb-28 pt-8 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent/50" />
            Research
          </div>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-5xl">
            Key <span className="text-accent">Publications</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
            Peer-reviewed contributions to emergency medicine literature,
            indexed and cited across the field.
          </p>
        </motion.div>

        <div className="border-t border-white/8">
          {publications.map((publication, i) => (
            <PublicationEntry
              key={publication.id}
              publication={publication}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}