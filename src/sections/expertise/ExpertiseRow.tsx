"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Expertise } from "./expertiseData";

export default function ExpertiseRow({
  item,
  index,
}: {
  item: Expertise;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);
  const active = hovered || tapped;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setTapped((v) => !v)}
      className="group relative cursor-pointer border-b border-white/8 sm:cursor-default"
      style={{
        background: isEven ? "rgba(255,255,255,0.012)" : "transparent",
      }}
    >
      {/* Accent fill sweeps in from left */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-accent/[0.05]"
        initial={{ width: 0 }}
        animate={{ width: active ? "100%" : 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute inset-y-0 left-0 w-[2px] bg-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originY: 0, boxShadow: active ? "0 0 12px rgba(56,189,248,0.6)" : "none" }}
      />

      <div className="relative flex items-center gap-6 py-8 pl-6 pr-4 sm:gap-10 sm:py-10 sm:pl-10">
        {/* Number */}
        <motion.span
          animate={{
            color: active ? "#38bdf8" : "rgba(255,255,255,0.25)",
            scale: active ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="font-mono text-sm tracking-widest sm:text-base"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Title + description */}
        <div className="min-w-0 flex-1">
          <motion.h3
            animate={{ x: active ? 12 : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`font-serif text-2xl font-bold transition-colors duration-300 sm:text-4xl ${
              active ? "text-accent" : "text-white"
            }`}
          >
            {item.title}
          </motion.h3>

          <AnimatePresence>
            {active && (
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: "auto", opacity: 1, marginTop: 10 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-2xl overflow-hidden text-sm leading-relaxed text-zinc-300 sm:text-base"
              >
                {item.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Icon badge with radar pulse — desktop only */}
        <div className="relative hidden h-16 w-16 shrink-0 items-center justify-center sm:flex">
          <AnimatePresence>
            {active && (
              <>
                <motion.span
                  initial={{ scale: 0.5, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                  className="absolute h-12 w-12 rounded-full border border-accent"
                />
                <motion.span
                  initial={{ scale: 0.5, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                  className="absolute h-12 w-12 rounded-full border border-accent"
                />
              </>
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              rotate: active ? 360 : 0,
              borderColor: active ? "rgba(56,189,248,0.6)" : "rgba(255,255,255,0.1)",
              backgroundColor: active
                ? "rgba(56,189,248,0.1)"
                : "rgba(255,255,255,0.02)",
              boxShadow: active ? "0 0 20px rgba(56,189,248,0.15)" : "none",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex h-12 w-12 items-center justify-center rounded-full border"
          >
            <i
              className={`ti ${item.icon}`}
              style={{
                fontSize: "20px",
                color: active ? "#38bdf8" : "rgba(255,255,255,0.3)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{
            rotate: tapped ? 90 : 0,
            x: active ? 6 : 0,
            opacity: active ? 1 : 0.2,
          }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-accent sm:rotate-0"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </motion.span>
      </div>

      {active && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.4, 1], opacity: 1 }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-accent sm:hidden"
        />
      )}
    </motion.div>
  );
}