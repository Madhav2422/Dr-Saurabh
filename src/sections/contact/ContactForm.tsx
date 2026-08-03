"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ContactFormField from "./ContactFormField";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">

        {/* IDLE / SENDING — show form */}
        {(status === "idle" || status === "sending" || status === "error") && (
          <motion.div key="form" exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
            <motion.h2
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-xl font-bold text-white sm:text-2xl"
            >
              Send a Message
            </motion.h2>
            <p className="mt-1 text-sm text-zinc-500">
              I typically respond within 24 hours.
            </p>

            {status === "error" && (
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/25 bg-red-500/8 px-4 py-3 text-sm text-red-400">
                <i className="ti ti-alert-circle" style={{ fontSize: "16px" }} />
                Something went wrong. Please try again or email directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <ContactFormField
                  label="Full Name"
                  name="name"
                  placeholder="Your full name"
                  delay={0.05}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <ContactFormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  delay={0.1}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <ContactFormField
                label="Subject"
                name="subject"
                placeholder="e.g. Consultation Enquiry, Collaboration, Speaking"
                delay={0.15}
                value={form.subject}
                onChange={handleChange}
                required
              />

              <ContactFormField
                label="Message"
                name="message"
                as="textarea"
                placeholder="Please describe your enquiry in detail..."
                delay={0.2}
                value={form.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                disabled={status === "sending"}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-zinc-950 shadow-lg shadow-sky-500/25 transition-all hover:shadow-sky-500/45 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <i className="ti ti-loader-2" style={{ fontSize: "16px" }} />
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span aria-hidden>→</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6 py-14 text-center"
          >
            {/* Animated checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/10"
            >
              <i className="ti ti-check text-3xl text-accent" aria-hidden="true" />
              {[0, 1].map((i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.9, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border border-accent"
                />
              ))}
            </motion.div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-serif text-2xl font-bold text-white"
              >
                Message Received
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400"
              >
                Thank you for reaching out. Dr. Saurabh Hirani will review your message and respond within <span className="text-accent font-medium">24–48 hours</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs uppercase tracking-[0.15em] text-accent"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                Response expected within 24–48 hours
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              onClick={() => {
                setStatus("idle");
                setForm({ name: "", email: "", subject: "", message: "" });
              }}
              className="mt-2 text-sm text-zinc-500 underline underline-offset-4 transition-colors hover:text-accent"
            >
              Send another message
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}