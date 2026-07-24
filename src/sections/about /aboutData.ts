export type Credential = {
  icon: string;
  title: string;
  description: string;
};

export const credentials: Credential[] = [
  {
    icon: "ti-school",
    title: "Education",
    description:
      "MBBS (2017–2023) • GMERS Medical College, Junagadh\nDNB Emergency Medicine (2023–2026) • Manipal Hospital, New Delhi",
  },
  {
    icon: "ti-stethoscope",
    title: "Clinical Interests",
    description:
      "Emergency Resuscitation, Emergency Procedures, Point-of-Care Ultrasound (POCUS), Trauma Care, Critical Care, Cardiac Emergencies, Neurocritical Care, and Clinical Toxicology.",
  },
  {
    icon: "ti-microscope",
    title: "Research & Thesis",
    description:
      "Measurement of Bedside Ultrasound Guided Optic Nerve Sheath Diameter (ONSD) for Detection of Raised Intracranial Pressure in Non-Traumatic Neurocritical Patients.",
  },
  {
    icon: "ti-presentation",
    title: "Academic Activities",
    description:
      "Poster presentations at national Emergency Medicine conferences, Continuing Medical Education (CME), journal discussions, case presentations, and clinical research.",
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "2017",
    title: "Beginning the Journey",
    description:
      "Started MBBS at GMERS Medical College, Junagadh, where I developed a strong foundation in clinical medicine and discovered my passion for acute patient care.",
  },
  {
    year: "2023",
    title: "Medical Graduate",
    description:
      "Completed MBBS and chose Emergency Medicine as my career path.",
  },
  {
    year: "2023",
    title: "Emergency Medicine Residency",
    description:
      "Joined Manipal Hospital, New Delhi, for DNB Emergency Medicine residency with comprehensive exposure to high-acuity emergency care.",
  },
  {
    year: "2024",
    title: "Research & Academic Development",
    description:
      "Presented scientific posters at national Emergency Medicine conferences and pursued research in emergency ultrasound, with a thesis focusing on optic nerve sheath diameter (ONSD) for detecting raised intracranial pressure.",
  },
  {
    year: "2026",
    title: "Emergency Medicine Specialist",
    description:
      "Completed DNB Emergency Medicine, committed to delivering evidence-based emergency care while continuing to grow through research, teaching, and lifelong learning.",
  },
];

export const philosophy =
  "Every second counts in Emergency Medicine. My goal is to combine rapid clinical decision-making, evidence-based practice, and compassionate patient care to deliver the best possible outcomes.";