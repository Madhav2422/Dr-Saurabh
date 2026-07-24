"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "./servicesData";

export default function ServicesPanels() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const active = servicesData[activeIndex];

  return (
    <>
      {/* ===== DESKTOP: split list + sticky panel ===== */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-[340px_1fr]">
        <div className="flex flex-col">
          {servicesData.map((service, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={service.id}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`group relative flex items-center gap-4 border-b border-white/8 py-5 text-left transition-colors duration-300 ${
                  isActive ? "pl-4" : "pl-0"
                }`}
              >
                <motion.span
                  className="absolute inset-y-0 left-0 w-[2px] bg-accent"
                  initial={false}
                  animate={{ scaleY: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0.5 }}
                />
                <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${isActive ? "text-accent" : "text-white/25"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`flex-1 font-serif text-base font-bold leading-snug transition-colors duration-300 sm:text-lg ${isActive ? "text-accent" : "text-white group-hover:text-zinc-300"}`}>
                  {service.title}
                </span>
                <motion.span
                  animate={{ x: isActive ? 4 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-auto shrink-0 text-accent"
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </motion.span>
              </button>
            );
          })}
        </div>

        <div className="sticky top-28 self-start">
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-[0.1] blur-[110px]"
              style={{ background: "#38bdf8" }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative p-8 sm:p-12"
              >
                <div className="flex items-start justify-between">
                  <motion.span
                    initial={{ scale: 0.6, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 shadow-[0_0_28px_rgba(56,189,248,0.15)]"
                  >
                    <i className={`ti ${active.icon} text-accent`} style={{ fontSize: "30px" }} aria-hidden="true" />
                  </motion.span>
                  <span className="font-mono text-7xl font-bold text-accent/10">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mt-9 text-3xl font-bold leading-snug text-accent"
                >
                  {active.tagline}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="mt-5 text-xl leading-relaxed text-zinc-300"
                >
                  {active.description}
                </motion.p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "35%" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8 h-px bg-gradient-to-r from-accent to-transparent"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ===== MOBILE: inline accordion ===== */}
      <div className="flex flex-col gap-3 lg:hidden">
        {servicesData.map((service, i) => {
          const isOpen = mobileOpenIndex === i;
          return (
            <div
              key={service.id}
              onClick={() => setMobileOpenIndex(isOpen ? null : i)}
              className={`cursor-pointer overflow-hidden rounded-xl border transition-colors duration-300 ${
                isOpen ? "border-accent/40 bg-accent/[0.05]" : "border-white/8 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-4 p-5">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  isOpen ? "border-accent/50 bg-accent/10" : "border-white/10 bg-white/[0.02]"
                }`}>
                  <i
                    className={`ti ${service.icon}`}
                    style={{ fontSize: "17px", color: isOpen ? "#38bdf8" : "rgba(255,255,255,0.35)" }}
                    aria-hidden="true"
                  />
                </span>

                <span className={`flex-1 font-serif text-lg font-bold transition-colors duration-300 ${isOpen ? "text-accent" : "text-white"}`}>
                  {service.title}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-accent"
                  aria-hidden
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </motion.span>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-[76px] text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}