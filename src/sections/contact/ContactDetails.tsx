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
          href="mailto:hiranisaurabh3@gmail.com"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
        >
          <i className="ti ti-mail" style={{ fontSize: "16px" }} aria-hidden="true" />
          hiranisaurabh3@gmail.com
        </a>
      </motion.div>
    </div>
  );
}