"use client";

import { motion } from "framer-motion";
import type { ContactDetail } from "./contactDetailsData";

export default function ContactDetailCard({
  detail,
  index,
}: {
  detail: ContactDetail;
  index: number;
}) {
  const href =
    detail.href ??
    (detail.label === "Phone"
      ? `tel:${detail.value.replace(/\s+/g, "")}`
      : detail.label === "Email"
      ? `mailto:${detail.value}`
      : undefined);

  const isExternal = detail.label === "LinkedIn";

  return (
    <motion.div
      initial={{ opacity: 0, x: -30, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ x: 6, scale: 1.01 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/[0.04]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        whileHover={{ translateX: "100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/8 transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_0_16px_rgba(56,189,248,0.2)]">
        <i
          className={`ti ${detail.icon} text-accent`}
          style={{ fontSize: "18px" }}
          aria-hidden="true"
        />
        <motion.span
          animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
          className="pointer-events-none absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent"
        />
      </span>

      <div className="relative z-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
          {detail.label}
        </p>
        {href ? (
          
          <a  href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="relative z-10 mt-1 inline-block text-sm text-zinc-200 underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent sm:text-base"
          >
            {detail.value}
          </a>
        ) : (
          <p className="mt-1 text-sm text-zinc-200 sm:text-base">{detail.value}</p>
        )}
      </div>
    </motion.div>
  );
}