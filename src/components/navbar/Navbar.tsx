import NavbarLeft from "./NavbarLeft";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="flex h-20 w-full items-center justify-between px-8">
        <NavbarLeft />

        <div className="hidden md:block">
          <NavbarLinks />
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}