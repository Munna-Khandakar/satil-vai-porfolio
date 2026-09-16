export const SECTION_IDS = [
  "overview",
  "experience",
  "research",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
