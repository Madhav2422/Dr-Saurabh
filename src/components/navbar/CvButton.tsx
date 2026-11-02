type CvButtonProps = {
  light?: boolean;
};

export default function CvButton({ light }: CvButtonProps) {
  return (
    <a
      href="/Dr_Saurabh_Resume.pdf"
      download
      aria-label="Download CV"
      title="Download CV"
      className={`group inline-flex shrink-0 items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-accent hover:bg-accent hover:text-zinc-950 sm:gap-1.5 sm:px-4 sm:py-1.5 sm:text-sm ${
        light ? "border-white bg-white text-zinc-950" : "border-accent/30 bg-accent/8 text-accent"
      }`}
    >
      CV
      <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
    </a>
  );
}
