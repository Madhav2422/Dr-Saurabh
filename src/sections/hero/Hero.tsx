import HeroBackground from "./HeroBackground";
import HeroECGLine from "./HeroECGLine";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroScrollHint from "./HeroScrollHint";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black">
      <HeroBackground />
      <HeroECGLine />

      <div className="relative w-full px-8 py-20 sm:px-12 lg:px-16">
        <HeroContent />
        <HeroActions />
      </div>

      <HeroScrollHint />
    </section>
  );
}