export type ContactDetail = {
  icon: string;
  label: string;
  value: string;
};

export const contactDetails: ContactDetail[] = [
  { icon: "ti-phone", label: "Phone", value: "+91 9664873365" },
  { icon: "ti-mail", label: "Email", value: "dr.saurabh@hospital.com" },
  { icon: "ti-map-pin", label: "Location", value: "Manipal Hospital, ER Dept." },
];