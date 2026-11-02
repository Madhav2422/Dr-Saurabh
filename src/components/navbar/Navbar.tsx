import NavbarLeft from "./NavbarLeft";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import CvButton from "./CvButton";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="flex h-20 w-full items-center justify-between px-8">
        <NavbarLeft />

        <div className="hidden items-center gap-8 xl:flex">
          <NavbarLinks />
          <CvButton />
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <CvButton light />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}