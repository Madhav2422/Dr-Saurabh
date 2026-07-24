"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { galleryImages } from "./galleryData";
import Lightbox from "./LightBox";

export default function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Row layout: row1 = 3 items, row2 = 2 items, row3 = 2 items
  const getWidthClass = (i: number) => {
    if (i < 3) return "lg:w-[calc(33.333%-14px)]"; // row 1: 3 cols
    return "lg:w-[calc(50%-10px)]";                 // row 2+: 2 cols
  };

  return (
    <section className="relative bg-[#04070c] px-6 pb-28 pt-8 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-5">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
              onClick={() => setOpenIndex(i)}
              className={`group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/8 sm:w-[calc(50%-10px)] ${getWidthClass(i)}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              {/* Expand icon */}
              <div className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <Lightbox
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={(newIndex) => setOpenIndex(newIndex)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}