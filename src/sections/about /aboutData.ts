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
      "MD from Johns Hopkins School of Medicine, Residency at Massachusetts General Hospital",
  },
  {
    icon: "ti-stethoscope",
    title: "Specialization",
    description:
      "Emergency Medicine with subspecialty training in Trauma and Critical Care",
  },
  {
    icon: "ti-certificate",
    title: "Board Certification",
    description:
      "American Board of Emergency Medicine, Advanced Trauma Life Support Instructor",
  },
  {
    icon: "ti-award",
    title: "Recognition",
    description:
      "Excellence in Emergency Care Award, Top Physician in Critical Response 2024",
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "2008",
    title: "Medical School",
    description: "Began the journey at Johns Hopkins School of Medicine.",
  },
  {
    year: "2012",
    title: "Residency",
    description: "Emergency Medicine residency at Massachusetts General Hospital.",
  },
  {
    year: "2016",
    title: "Trauma Fellowship",
    description: "Subspecialty training in trauma and critical care.",
  },
  {
    year: "2018",
    title: "Attending Physician",
    description: "Joined City General Hospital's Level 1 Trauma Center.",
  },
  {
    year: "2023",
    title: "ER Department Lead",
    description: "Leading a team of 40+ emergency care professionals.",
  },
];