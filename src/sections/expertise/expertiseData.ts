export type Expertise = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const expertiseData: Expertise[] = [
  {
    id: "trauma",
    icon: "ti-first-aid-kit",
    title: "Trauma & Resuscitation",
    description:
      "Advanced trauma life support and critical care resuscitation in high-acuity scenarios.",
  },
  {
    id: "cardiac",
    icon: "ti-heart",
    title: "Cardiac Emergencies",
    description:
      "Rapid assessment and intervention for acute myocardial infarction, arrhythmias, and cardiac arrest.",
  },
  {
    id: "pediatric",
    icon: "ti-baby-carriage",
    title: "Pediatric Emergencies",
    description:
      "Specialized care for critically ill and injured children in emergency settings.",
  },
  {
    id: "toxicology",
    icon: "ti-flask",
    title: "Toxicology",
    description:
      "Expert management of poisonings, overdoses, and environmental exposures.",
  },
  {
    id: "procedural",
    icon: "ti-tools",
    title: "Procedural Skills",
    description:
      "Advanced airway management, central lines, chest tubes, and bedside ultrasound.",
  },
  {
    id: "disaster",
    icon: "ti-alert-triangle",
    title: "Disaster Medicine",
    description:
      "Mass casualty incident management and emergency preparedness leadership.",
  },
];