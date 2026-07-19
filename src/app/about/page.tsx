import { AboutHero, AboutBody } from "@/sections/about ";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />
      <AboutBody />
    </main>
  );
}