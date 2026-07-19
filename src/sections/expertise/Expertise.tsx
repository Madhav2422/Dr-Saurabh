import ExpertiseHeading from "./ExpertiseHeading";
import ExpertiseGrid from "./ExpertiseGrid";

export default function Expertise() {
  return (
    <section className="relative overflow-hidden bg-[#050b14] px-6 py-24 sm:px-12 lg:px-16">
      {/* Base gradient — richer than flat black, deepens toward bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0a1420 0%, #060d16 30%, #04090f 70%, #030609 100%)",
        }}
      />

      {/* Top seam glow — where hero meets this section, catches light like a real transition */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.5) 50%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          background:
            "linear-gradient(180deg, rgba(56,189,248,0.06) 0%, transparent 100%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow, top-left */}
      <div
        className="pointer-events-none absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "#38bdf8" }}
      />

      {/* Ambient glow, bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: "#38bdf8" }}
      />

      {/* Fine noise-like texture for depth (subtle radial vignette) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <ExpertiseHeading />
        <ExpertiseGrid />
      </div>
    </section>
  );
}