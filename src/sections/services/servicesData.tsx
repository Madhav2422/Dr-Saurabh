export type Service = {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
};

export const servicesData: Service[] = [
  {
    id: "resuscitation",
    icon: "ti-first-aid-kit",
    title: "Emergency Resuscitation",
    tagline: "When every second matters, rapid and coordinated action saves lives.",
    description:
      "I provide emergency resuscitation for critically ill patients experiencing cardiac arrest, severe shock, airway compromise, and other life-threatening conditions. My approach follows current international guidelines, focusing on early stabilization and improving patient outcomes.",
  },
  {
    id: "pocus",
    icon: "ti-scan",
    title: "Point-of-Care Ultrasound (POCUS)",
    tagline: "Bringing imaging directly to the bedside for faster decisions.",
    description:
      "Bedside ultrasound enables rapid diagnosis and safer procedures without delaying emergency treatment. I routinely use POCUS to evaluate critically ill patients, identify life-threatening conditions, and guide emergency procedures with greater accuracy.",
  },
  {
    id: "critical-care",
    icon: "ti-heartbeat",
    title: "Critical Care & Emergency Procedures",
    tagline: "Advanced care for critically ill patients requiring intensive monitoring and life-saving interventions.",
    description:
      "Management includes sepsis and septic shock, respiratory failure, multiorgan dysfunction, hemodynamic instability, advanced airway management, mechanical ventilation, vasopressor support, and bedside procedures including central venous access, arterial line placement, chest tube insertion, thoracentesis, paracentesis, lumbar puncture, and procedural sedation.",
  },
  {
    id: "trauma",
    icon: "ti-ambulance",
    title: "Trauma & Acute Surgical Emergencies",
    tagline: "Prompt assessment and coordinated care are essential following serious injury or acute surgical illness.",
    description:
      "My practice includes the emergency management of road traffic accidents, falls, head injuries, fractures, abdominal trauma, gastrointestinal bleeding, acute abdominal conditions, burns, obstetric & gynecological emergencies, and other time-sensitive surgical emergencies, following current ATLS principles and evidence-based care.",
  },
  {
    id: "cardiac",
    icon: "ti-heart",
    title: "Cardiovascular Emergencies",
    tagline: "Timely treatment can make the difference between life and death.",
    description:
      "I manage acute heart conditions including heart attacks (STEMI/NSTEMI), cardiac arrhythmias, acute heart failure, hypertensive emergencies, and cardiogenic shock, ensuring rapid diagnosis, stabilization, and coordination of definitive care.",
  },
  {
    id: "respiratory",
    icon: "ti-lungs",
    title: "Respiratory Emergencies",
    tagline: "Helping patients breathe when they need it most.",
    description:
      "From severe asthma attacks and COPD exacerbations to pneumonia, pulmonary edema, pulmonary embolism, pneumothorax, and respiratory failure, I manage a wide range of breathing emergencies using oxygen therapy, non-invasive ventilation, bedside ultrasound, and advanced airway support when required.",
  },
  {
    id: "neuro",
    icon: "ti-brain",
    title: "Neurological Emergencies",
    tagline: "Rapid recognition and intervention can preserve brain function and save lives.",
    description:
      "I evaluate and manage neurological emergencies including acute stroke, intracranial hemorrhage, seizures, status epilepticus, meningitis, encephalopathy, and other neurocritical conditions, emphasizing timely diagnosis and evidence-based treatment.",
  },
  {
    id: "toxicology",
    icon: "ti-flask",
    title: "Clinical Toxicology & Environmental Emergencies",
    tagline: "Timely diagnosis and appropriate treatment are essential in poisoning and toxic exposures.",
    description:
      "I manage poisoning, drug overdoses, snakebite, scorpion sting, chemical exposure, electrical injuries, heat-related illness, and other environmental emergencies using evidence-based protocols and supportive care.",
  },
  {
    id: "endocrine",
    icon: "ti-droplet",
    title: "Endocrine & Metabolic Emergencies",
    tagline: "Early recognition and timely treatment are crucial to prevent life-threatening complications.",
    description:
      "I manage endocrine and metabolic emergencies including diabetic ketoacidosis (DKA), hyperosmolar hyperglycemic state (HHS), hypoglycemia, thyroid storm, myxedema coma, adrenal crisis, electrolyte disturbances, and other acute metabolic disorders using current evidence-based treatment protocols.",
  },
  
  {
    id: "pediatric",
    icon: "ti-mood-kid",
    title: "Pediatric Emergencies",
    tagline: "Children require specialized emergency care tailored to their unique needs.",
    description:
      "I provide comprehensive assessment, timely stabilization, and evidence-based management of acutely ill and injured infants and children, including respiratory illnesses, trauma, seizures, dehydration, shock, poisoning, and pediatric resuscitation.",
  },
];