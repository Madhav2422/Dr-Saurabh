export type ContactDetail = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  { icon: "ti-phone", label: "Phone", value: "+91 9664873365" },
  { icon: "ti-mail", label: "Email", value: "hiranisaurabh3@gmail.com" },
  {
    icon: "ti-brand-linkedin",
    label: "LinkedIn",
    value: "dr-saurabh-hirani",
    href: "https://www.linkedin.com/in/dr-saurabh-hirani",
  },
];