import Link from "next/link";

export default function NavbarLeft() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Dr. <span className="text-accent font-normal">Saurabh Hirani</span>
      </span>
    </Link>
  );
}