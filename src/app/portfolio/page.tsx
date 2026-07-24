import { PortfolioHero, PortfolioBody } from "@/sections/portfolio";

export default function PortfolioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PortfolioHero />
      <PortfolioBody />
    </main>
  );
}