"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "./servicesData";

export default function ServicesPanels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = servicesData[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-4">
      {/* Left: service list */}
      <div className="flex flex-col">
        {servicesData.map((service, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={service.id}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className={`group relative flex items-center gap-5 border-b border-white/8 py-6 text-left transition-colors duration-300 ${
                isActive ? "pl-4" : "pl-0"
              }`}
            >
              {/* Active indicator bar */}
              <motion.span
                className="absolute inset-y-0 left-0 w-[2px] bg-accent"
                initial={false}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ originY: 0.5 }}
              />

              <span
                className={`font-mono text-sm tracking-widest transition-colors duration-300 ${
                  isActive ? "text-accent" : "text-white/25"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className={`font-serif text-xl font-bold transition-colors duration-300 sm:text-2xl ${
                  isActive ? "text-accent" : "text-white group-hover:text-zinc-300"
                }`}
              >
                {service.title}
              </span>

              <motion.span
                animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-auto text-accent"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </motion.span>
            </button>
          );
        })}
      </div>

      {/* Right: detail panel */}
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: "#38bdf8" }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex h-full flex-col justify-between p-8 sm:p-12"
            style={{ minHeight: 420 }}
          >
            <div className="flex items-start justify-between">
              <motion.span
                initial={{ scale: 0.6, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 shadow-[0_0_28px_rgba(56,189,248,0.15)]"
              >
                <i
                  className={`ti ${active.icon} text-accent`}
                  style={{ fontSize: "28px" }}
                  aria-hidden="true"
                />
              </motion.span>
              <span className="font-mono text-6xl font-bold text-accent/10 sm:text-7xl">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-10">
              <h3 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                {active.title}
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
                {active.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "35%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 h-px bg-gradient-to-r from-accent to-transparent"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}