"use client";

import { motion } from "framer-motion";
import ContactDetailCard from "./ContactDetailCard";
import { contactDetails } from "./contactDetailsData";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-4">
      {contactDetails.map((detail, i) => (
        <ContactDetailCard key={detail.label} detail={detail} index={i} />
      ))}

      {/* Availability block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 rounded-2xl border border-accent/20 bg-accent/5 p-5"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Teleconsultation 
          </span>
        </div>

        
        <p className="mt-1 text-xs leading-relaxed text-zinc-400">
          Available for online consultations, academic collaborations, and
          emergency medicine discussions.
        </p>

        <a
          href="tel:+919664873365"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.9v2.02z" />
          </svg>
          Call +91 96648 73365
        </a>
      </motion.div>
    </div>
  );
}