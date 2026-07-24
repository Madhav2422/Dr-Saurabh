"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect } from "react";
import { galleryImages } from "./galleryData";

export default function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  const total = galleryImages.length;
  const image = galleryImages[index];

  const goPrev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate]
  );

  // Keyboard: Esc closes, arrows navigate
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-accent hover:text-accent"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2 font-mono text-sm tracking-[0.3em] text-zinc-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-accent hover:text-accent sm:left-8 sm:h-14 sm:w-14"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-accent hover:text-accent sm:right-8 sm:h-14 sm:w-14"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 py-20"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.96, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) goNext();
              else if (info.offset.x > 80) goPrev();
            }}
            className="relative h-full w-full cursor-grab active:cursor-grabbing"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="select-none object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}