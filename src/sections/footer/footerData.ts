export type FooterLink = {
  label: string;
  href: string;
};

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "+1 (555) 911-0199",
  email: "dr.saurabh@hospital.com",
  location: "City General Hospital, ER Dept.",
};