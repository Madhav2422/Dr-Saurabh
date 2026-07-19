import { ServicesHero, ServicesBody } from "@/sections/services";

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ServicesHero />
      <ServicesBody />
    </main>
  );
}