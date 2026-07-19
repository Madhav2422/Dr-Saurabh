"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ContactFormField from "./ContactFormField";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8"
    >
      <motion.h2
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-xl font-bold text-white sm:text-2xl"
      >
        Send a Message
      </motion.h2>

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.form
            key="form"
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <ContactFormField label="Name" name="name" placeholder="Your name" delay={0.05} />
              <ContactFormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@email.com"
                delay={0.1}
              />
            </div>

            <ContactFormField
              label="Subject"
              name="subject"
              placeholder="How can I help?"
              delay={0.15}
            />

            <ContactFormField
              label="Message"
              name="message"
              as="textarea"
              placeholder="Tell me more..."
              delay={0.2}
            />

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-lg shadow-sky-500/25 transition-shadow hover:shadow-sky-500/45"
            >
              Send Message
              <span aria-hidden>→</span>
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10"
            >
              <motion.i
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="ti ti-check text-2xl text-accent"
                aria-hidden="true"
              />
              {[0, 1].map((i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-full border border-accent"
                />
              ))}
            </motion.div>
            <p className="font-serif text-lg font-semibold text-white">
              Message sent
            </p>
            <p className="text-sm text-zinc-400">
              I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}