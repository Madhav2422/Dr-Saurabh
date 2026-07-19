export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const servicesData: Service[] = [
  {
    id: "trauma",
    icon: "ti-ambulance",
    title: "Trauma Care",
    description:
      "Comprehensive management of multi-system injuries, from initial stabilization through definitive care.",
  },
  {
    id: "cardiac",
    icon: "ti-heart",
    title: "Cardiac Emergencies",
    description:
      "Rapid assessment and intervention for heart attacks, arrhythmias, and cardiac arrest.",
  },
  {
    id: "neuro",
    icon: "ti-brain",
    title: "Neurological Emergencies",
    description:
      "Stroke recognition, seizure management, and acute altered mental status evaluation.",
  },
  {
    id: "pediatric",
    icon: "ti-mood-kid",
    title: "Pediatric Emergency Care",
    description:
      "Specialized approach to critically ill and injured children with age-appropriate protocols.",
  },
  {
    id: "airway",
    icon: "ti-lungs",
    title: "Airway Management",
    description:
      "Advanced airway techniques including rapid sequence intubation and surgical airways.",
  },
  {
    id: "consult",
    icon: "ti-message-circle",
    title: "Consultations",
    description:
      "Expert medical opinions, speaking engagements, and professional collaboration.",
  },
];