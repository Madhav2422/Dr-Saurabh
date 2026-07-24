export type Expertise = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const expertiseData: Expertise[] = [
  {
    id: "resuscitation",
    icon: "ti-first-aid-kit",
    title: "Emergency Resuscitation",
    description:
      "Comprehensive management of cardiac arrest, anaphylaxis, shock, airway emergencies, and post-resuscitation care, guided by current ACLS principles and evidence-based emergency medicine protocols.",
  },
  {
    id: "pocus",
    icon: "ti-scan",
    title: "Point-of-Care Ultrasound (POCUS)",
    description:
      "Bedside ultrasound for rapid diagnosis and procedural guidance, including eFAST, lung, cardiac, IVC, DVT, ocular ultrasound, and shock assessment, enabling timely clinical decision-making in critically ill patients.",
  },
  {
    id: "critical-care",
    icon: "ti-heartbeat",
    title: "Critical Care & Procedural Medicine",
    description:
      "Management of critically ill patients with sepsis, septic shock, respiratory failure, hemodynamic instability, and multiorgan dysfunction requiring advanced airway management, mechanical ventilation, vasopressor support, and bedside emergency procedures.",
  },
  {
    id: "acute-medical",
    icon: "ti-stethoscope",
    title: "Acute Medical Emergencies",
    description:
      "Comprehensive management of time-sensitive medical emergencies including cardiovascular, respiratory, neurological, endocrine, renal, and infectious conditions.",
  },
  {
    id: "trauma-surgical",
    icon: "ti-ambulance",
    title: "Trauma & Acute Surgical Care",
    description:
      "Systematic assessment, triage, and multidisciplinary management of traumatic injuries and acute surgical emergencies following current evidence-based protocols.",
  },
  {
    id: "toxicology",
    icon: "ti-flask",
    title: "Clinical Toxicology",
    description:
      "Diagnosis and management of poisoning, drug overdoses, envenomation, and environmental toxic exposures using a structured, evidence-based emergency medicine approach.",
  },
  {
    id: "pediatric",
    icon: "ti-baby-carriage",
    title: "Pediatric Emergencies",
    description:
      "Comprehensive assessment, timely stabilization, and evidence-based management of critically ill and injured infants and children, with expertise in pediatric resuscitation and emergency care.",
  },
];