import Link from "next/link";

export default function NavbarRight() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/contact"
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-sky-400"
      >
        Get in touch
      </Link>
    </div>
  );
}