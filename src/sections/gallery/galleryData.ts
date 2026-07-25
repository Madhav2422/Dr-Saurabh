export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  // 1. Emergency dept
  {
    id: "g1",
    src: "/gallery-8.jpeg",
    alt: "Outside the Emergency Department, Manipal Hospitals",
  },

  // 2-3. Procedure pics
  {
    id: "g2",
    src: "/gallery-1.jpeg",
    alt: "Performing an ultrasound-guided bedside procedure",
  },
  {
    id: "g3",
    src: "/gallery-9.jpeg",
    alt: "Ultrasound-guided procedure with the EM team",
  },

  // 4-5. Teaching pics
  {
    id: "g4",
    src: "/gallery-10-sharpened.jpeg",
    alt: "Teaching a First Aid and CPR workshop",
  },
  {
    id: "g5",
    src: "/gallery-11-sharpened.jpeg",
    alt: "CPR training demonstration",
  },

  // 6-7. Conference / poster pics
  {
    id: "g6",
    src: "/gallery-5.jpeg",
    alt: "Poster presentation at EM Delhi 2026",
  },
  {
    id: "g7",
    src: "/gallery-6.jpeg",
    alt: "Poster presentation at EMPact 2025",
  },
];