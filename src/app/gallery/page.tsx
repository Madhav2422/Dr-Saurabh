import { GalleryHero, GalleryGrid } from "@/sections/gallery";

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}