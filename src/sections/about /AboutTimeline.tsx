"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "./aboutData";

export default function AboutTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-8 bg-accent/50" />
          Journey
          <span className="h-px w-8 bg-accent/50" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-white sm:text-5xl">
          The Path <span className="text-accent">So Far</span>
        </h2>
      </motion.div>

      {/* Track line — fills as you scroll */}
      <div className="absolute bottom-0 left-5 top-40 w-px bg-white/10 sm:left-1/2">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-accent to-accent/30"
        />
      </div>

      <div className="flex flex-col gap-12">
        {timeline.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex items-start gap-6 pl-14 sm:w-1/2 sm:pl-0 ${
                isLeft
                  ? "sm:mr-auto sm:pr-12 sm:text-right"
                  : "sm:ml-auto sm:pl-12"
              }`}
            >
              {/* Node dot */}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                className={`absolute top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-[#04070c] ${
                  isLeft
                    ? "left-3.5 sm:left-auto sm:-right-2"
                    : "left-3.5 sm:-left-2"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </motion.span>

              <div>
                <span className="font-mono text-sm tracking-widest text-accent">
                  {event.year}
                </span>
                <h3 className="mt-1 font-serif text-xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {event.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}