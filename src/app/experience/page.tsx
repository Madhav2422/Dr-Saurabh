import { ExperienceHero, ExperienceStack, Publications } from "@/sections/experience";

export default function ExperiencePage() {
  return (
    <main className="flex flex-1 flex-col">
      <ExperienceHero />
      <ExperienceStack />
      <Publications />
    </main>
  );
}