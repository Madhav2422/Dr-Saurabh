"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "./servicesData";

export default function ServicePanel({
  service,
  index,
  active,
  onActivate,
}: {
  service: Service;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ layout: { duration: 0.55, ease: [0.32, 0.72, 0, 1] }, opacity: { duration: 0.5, delay: index * 0.08 }, y: { duration: 0.5, delay: index * 0.08 } }}
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-colors duration-500 ${
        active
          ? "flex-[3.5] border-accent/40 bg-accent/[0.05]"
          : "flex-1 border-white/8 bg-white/[0.02] hover:border-white/20"
      }`}
      style={{ minHeight: 420 }}
    >
      {/* Collapsed state — vertical title */}
      <AnimatePresence>
        {!active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex flex-col items-center justify-between py-8"
          >
            <span className="font-mono text-sm tracking-widest text-white/25">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="whitespace-nowrap font-serif text-lg font-semibold text-zinc-300"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {service.title}
            </span>
            <i
              className={`ti ${service.icon} text-white/30`}
              style={{ fontSize: "22px" }}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded state — full content */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="absolute inset-0 flex flex-col justify-between p-8"
          >
            <div className="flex items-start justify-between">
              <motion.span
                initial={{ scale: 0.6, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 shadow-[0_0_24px_rgba(56,189,248,0.15)]"
              >
                <i
                  className={`ti ${service.icon} text-accent`}
                  style={{ fontSize: "26px" }}
                  aria-hidden="true"
                />
              </motion.span>
              <span className="font-mono text-5xl font-bold text-accent/15">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="font-serif text-2xl font-bold text-white"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="mt-3 text-sm leading-relaxed text-zinc-300"
              >
                {service.description}
              </motion.p>

              {/* Accent line draws in */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40%" }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-5 h-px bg-gradient-to-r from-accent to-transparent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}