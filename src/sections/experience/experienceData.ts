export type Experience = {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
};

export const experienceData: Experience[] = [
  {
    id: "director",
    period: "2020 — Present",
    role: "Director of Emergency Medicine",
    organization: "City General Hospital",
    description:
      "Leading a team of 40+ emergency physicians and overseeing 80,000+ annual ED visits.",
    highlights: [
      "Reduced door-to-provider time by 35%",
      "Implemented rapid triage protocols",
      "Led COVID-19 surge response planning",
    ],
  },
  {
    id: "attending",
    period: "2015 — 2020",
    role: "Attending Emergency Physician",
    organization: "Metro Level I Trauma Center",
    description:
      "Managed high-acuity trauma cases, led the cardiac arrest response team, and served as ultrasound fellowship director.",
    highlights: [
      "3,000+ critical resuscitations",
      "Cardiac arrest team lead",
      "Ultrasound fellowship director",
    ],
  },
  {
    id: "fellowship",
    period: "2014 — 2015",
    role: "Trauma & Critical Care Fellow",
    organization: "Johns Hopkins Hospital",
    description:
      "Advanced fellowship training in trauma resuscitation, surgical critical care, and mass casualty management.",
    highlights: [
      "Level 1 trauma rotations",
      "Surgical ICU training",
      "Disaster response certification",
    ],
  },
  {
    id: "residency",
    period: "2011 — 2014",
    role: "Emergency Medicine Resident",
    organization: "Massachusetts General Hospital",
    description:
      "Comprehensive residency covering the full spectrum of emergency care, from pediatrics to geriatric emergencies.",
    highlights: [
      "Chief resident, final year",
      "Research in sepsis protocols",
      "Excellence in teaching award",
    ],
  },
];

export type Publication = {
  id: string;
  title: string;
  journal: string;
  year: string;
};

export const publications: Publication[] = [
  {
    id: "sepsis",
    title:
      "Rapid Sepsis Identification in the Emergency Department: A Multicenter Prospective Study",
    journal: "Annals of Emergency Medicine",
    year: "2019",
  },
  {
    id: "ultrasound",
    title:
      "Point-of-Care Ultrasound in Trauma: Improving Outcomes Through Early Detection",
    journal: "Journal of Trauma & Acute Care Surgery",
    year: "2018",
  },
  {
    id: "flow",
    title: "Emergency Department Flow Optimization: A Data-Driven Approach",
    journal: "Academic Emergency Medicine",
    year: "2017",
  },
  {
    id: "cardiac",
    title:
      "Cardiac Arrest Management: Novel Approaches to Improving Neurological Outcomes",
    journal: "Resuscitation",
    year: "2016",
  },
];