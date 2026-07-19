import FooterPulseLine from "./FooterPulseLine";
import FooterBrand from "./FooterBrand";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#04070c] px-6 pb-10 pt-16 sm:px-12 lg:px-16">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[130px]"
        style={{ background: "#38bdf8" }}
      />

      <FooterPulseLine />

      <div className="relative mx-auto max-w-7xl pt-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <FooterBrand />
          <FooterQuickLinks />
          <FooterContact />
        </div>

        <div className="mt-14">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}