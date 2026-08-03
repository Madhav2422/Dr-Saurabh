"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  as?: "input" | "textarea";
  delay?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
};

export default function ContactFormField({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
  delay = 0,
  value,
  onChange,
  required,
}: Props) {
  const [focused, setFocused] = useState(false);

  const baseClasses =
    "w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-all duration-300";

  const borderClasses = focused ? "border-accent/60 bg-white/[0.05]" : "border-white/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="relative"
    >
      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-zinc-400"
      >
        {label}
        {required && <span className="text-accent">*</span>}
        {focused && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-1 w-1 rounded-full bg-accent"
          />
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={`${baseClasses} ${borderClasses} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={`${baseClasses} ${borderClasses}`}
        />
      )}

      <motion.span
        className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-accent"
        initial={{ width: 0 }}
        animate={{ width: focused ? "100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}