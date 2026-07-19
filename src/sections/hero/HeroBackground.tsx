import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile: stronger top-down dark for text readability, image still visible */}
      {/* Mobile: darker overall for crisp text */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,12,0.92) 0%, rgba(2,6,12,0.7) 40%, rgba(2,6,12,0.65) 65%, rgba(2,6,12,0.95) 100%)",
        }}
      />

      {/* Desktop: original angled gradient */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(100deg, rgba(4,10,18,0.96) 0%, rgba(4,10,18,0.85) 35%, rgba(8,20,32,0.55) 65%, rgba(8,20,32,0.35) 100%)",
        }}
      />
    </div>
  );
}