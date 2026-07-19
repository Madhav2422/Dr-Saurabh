"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "./servicesData";

export default function ServiceAccordionItem({
  service,
  index,
  active,
  onToggle,
}: {
  service: Service;
  index: number;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onClick={onToggle}
      className={`cursor-pointer overflow-hidden rounded-xl border transition-colors duration-300 ${
        active ? "border-accent/40 bg-accent/[0.05]" : "border-white/8 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-center gap-4 p-5">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            active ? "border-accent/50 bg-accent/10" : "border-white/10 bg-white/[0.02]"
          }`}
        >
          <i
            className={`ti ${service.icon}`}
            style={{
              fontSize: "17px",
              color: active ? "#38bdf8" : "rgba(255,255,255,0.35)",
            }}
            aria-hidden="true"
          />
        </span>

        <h3
          className={`flex-1 font-serif text-lg font-bold transition-colors duration-300 ${
            active ? "text-accent" : "text-white"
          }`}
        >
          {service.title}
        </h3>

        <motion.span
          animate={{ rotate: active ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-accent"
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </div>

      <AnimatePresence>
        {active && (
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
    </motion.div>
  );
}