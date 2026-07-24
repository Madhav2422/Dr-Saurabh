export type FooterLink = {
  label: string;
  href: string;
};

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Clinical Practice", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type ContactItem = {
  icon: string;
  label: string;
  value: string;
  href: string;
};

export const contactInfo: ContactItem[] = [
  {
    icon: "ti-phone",
    label: "Phone",
    value: "+91 9664873365",
    href: "tel:+919664873365",
  },
  {
    icon: "ti-mail",
    label: "Email",
    value: "hiranisaurabh3@gmail.com",
    href: "mailto:hiranisaurabh3@gmail.com",
  },
  {
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "dr-saurabh-hirani",
    href: "https://www.linkedin.com/in/dr-saurabh-hirani",
  },
];