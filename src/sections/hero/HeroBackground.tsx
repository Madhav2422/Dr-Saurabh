export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Mobile — Next Image works fine for portrait */}
      <div
        className="absolute inset-0 animate-slow-zoom md:hidden"
        style={{
          backgroundImage: "url('/gallery-9.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "30% 8%",
        }}
      />

      {/* Desktop — plain div so objectPosition actually works */}
      <div
        className="absolute inset-0 hidden animate-slow-zoom md:block"
        style={{
          backgroundImage: "url('/gallery-9.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "35% 23%",
        }}
      />

      {/* Unified dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(3,8,18,0.88) 0%, rgba(3,8,18,0.75) 30%, rgba(3,8,18,0.55) 55%, rgba(3,8,18,0.40) 100%)",
        }}
      />
    </div>
  );
}