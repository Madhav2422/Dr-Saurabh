"use client";

import { motion } from "framer-motion";
import { contactInfo } from "./footerData";

export default function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white">
        Contact
      </h3>
      <ul className="mt-5 flex flex-col gap-4">
        {contactInfo.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/5">
              <i
                className={`ti ${item.icon} text-accent`}
                style={{ fontSize: "15px" }}
                aria-hidden="true"
              />
            </span>
            <a
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="text-sm text-zinc-400 transition-colors hover:text-accent"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}