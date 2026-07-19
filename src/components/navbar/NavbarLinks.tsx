"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-10">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
                isActive ? "text-accent" : "text-zinc-300 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}