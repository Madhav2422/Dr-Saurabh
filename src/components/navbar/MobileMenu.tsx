"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.path
                key="close"
                d="M6 6l12 12M6 18L18 6"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            ) : (
              <motion.path
                key="open"
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
        </svg>
      </button>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-0 right-0 top-20 z-50"
            style={{
              background: "linear-gradient(180deg, rgba(4,7,12,0.97) 0%, rgba(4,7,12,0.92) 100%)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(56,189,248,0.12)",
            }}
          >
            <div className="flex flex-col items-center py-8 gap-1">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block w-full py-3.5 text-center text-sm font-medium uppercase tracking-[0.25em] transition-colors ${
                        isActive ? "text-accent" : "text-zinc-300 hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}