"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { quickLinks } from "./footerData";

export default function FooterQuickLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-white">
        Quick Links
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {quickLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-accent"
            >
              <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}