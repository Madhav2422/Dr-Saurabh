"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const headline = "Ready to Connect?";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#04070c] px-6 py-28 sm:px-12 lg:px-16">
      {/* Breathing ambient glow */}
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{ background: "#38bdf8" }}
      />

      {/* Floating vital dots */}
      <FloatingDots />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-accent/50"
            />
            Get in touch
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-accent/50"
            />
          </div>

          {/* Letter-by-letter headline reveal */}
          <h2 className="font-serif text-4xl font-bold text-white sm:text-6xl">
            {headline.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.025 }}
                className={
                  char !== " " &&
                  headline.slice(9, 16).includes(char) &&
                  i >= 9 &&
                  i <= 15
                    ? "inline-block text-accent"
                    : "inline-block"
                }
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Whether for consultations, speaking engagements, or professional
            collaboration.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton />
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useTransform(x, [-60, 60], [-10, 10]);
  const ty = useTransform(y, [-30, 30], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Pulse rings — heartbeat-monitor style, always animating */}
      <motion.span
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-0 rounded-md border border-accent"
      />
      <motion.span
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        className="absolute inset-0 rounded-md border border-accent"
      />

      <motion.a
        ref={ref}
        href="/contact"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: tx, y: ty }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="group relative inline-flex items-center gap-2 rounded-md bg-accent px-9 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-sky-500/50"
      >
        Contact Me
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </motion.a>
    </div>
  );
}

function FloatingDots() {
  const dots = [
    { top: "20%", left: "15%", delay: 0 },
    { top: "70%", left: "10%", delay: 0.8 },
    { top: "30%", left: "88%", delay: 1.4 },
    { top: "75%", left: "85%", delay: 0.4 },
    { top: "15%", left: "50%", delay: 1.8 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((dot, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent"
          style={{ top: dot.top, left: dot.left }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}