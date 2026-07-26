import PortfolioResearch from "./PortfolioResearch";
import PortfolioConferences from "./PortfolioConferences";
import PortfolioPresentations from "./PortfolioPresentations";
import PortfolioAcademic from "./PortfolioAcademic";
import PortfolioCertifications from "./PortfolioCertifications";
import PortfolioOutreach from "./PortfolioOutReach";

export default function PortfolioBody() {
  return (
    <section className="relative bg-[#04070c] px-6 pb-28 pt-12 sm:px-12 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl flex flex-col gap-20">
         <PortfolioOutreach />
        <PortfolioResearch />
        <PortfolioConferences />
        <PortfolioPresentations />
        {/* <PortfolioAcademic /> */}
        <PortfolioCertifications />
      </div>
    </section>
  );
}