import type { IconName } from "@/components/icons/icon-map";

export interface StatItem {
  label: string;
  value: string;
  sublabel: string;
  accent?: boolean;
}

export interface ValuePillar {
  icon: IconName;
  title: string;
  description: string;
}

export interface ResearchTrack {
  icon: IconName;
  title: string;
  trackLabel: string;
  description: string;
  tags: string[];
}

export interface ResearchProject {
  title: string;
  venue: string;
  dateRange: string;
  projectTitle: string;
  bullets: string[];
}

export interface ExperienceEntry {
  org: string;
  role: string;
  dateRange: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export interface Certification {
  icon: IconName;
  title: string;
  subtitle: string;
  logoSrc?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  detail?: string;
  detailIsBadge?: boolean;
}

export const profile = {
  name: "Md Nahidul Satil, PMP®",
  credentialTag: "Cybersecurity Governance Researcher",
  tagline: "Prospective Graduate Researcher",
  location: "Austin, Texas 78665",
  phone: "(929) 471-8424",
  phoneHref: "+19294718424",
  email: "mdsatilislam@gmail.com",
  availabilityBanner:
    "Available for Graduate Research & Strategic Technical Leadership (Ph.D. / M.S. Opportunities)",
  avatarSrc: "/profile.jpeg",
  avatarFallback: "NS",
  dossierHref: "/resume.pdf",
  pullQuote:
    "Advancing national cyber resilience by connecting cybersecurity governance, civil–military coordination, and institutional capacity in developing and middle-income states.",
  summary:
    "Research-oriented technology professional and former military officer with 15+ years of experience spanning defense operations, enterprise technology, cybersecurity, systems integration, and large-scale digital programs. Research interests focus on cybersecurity governance, national cyber resilience, cyber policy, critical infrastructure protection, and civil–military coordination in developing and middle-income states.",
  experienceRecordLabel: "15+ Years Systems Record",
} as const;

export const valuePillars: ValuePillar[] = [
  {
    icon: "balance",
    title: "Mature Engineering Judgment",
    description:
      "Brings an uncommon combination of mature engineering judgment, software automation experience, cybersecurity awareness, and high-stakes systems leadership to a research environment.",
  },
  {
    icon: "hub",
    title: "Cross-Domain Translator",
    description:
      "Comfortable working across technical and non-technical teams, translating operational problems into system requirements, validation plans, and measurable performance criteria.",
  },
  {
    icon: "science",
    title: "Applied Research Orientation",
    description:
      "Particularly well positioned for applied research connecting academic methods with real-world software, transportation, healthcare, manufacturing, government, defense, or cyber-physical systems.",
  },
];

export const stats: StatItem[] = [
  { label: "Experience", value: "15+", sublabel: "Years Systems & Ops" },
  {
    label: "Optimization",
    value: "+25%",
    sublabel: "Process Accuracy",
    accent: true,
  },
  {
    label: "Mission Scope",
    value: "UN",
    sublabel: "International Peacekeeping",
  },
  {
    label: "Academics",
    value: "3.59",
    sublabel: "Master of Defence Studies",
    accent: true,
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    icon: "shield",
    title: "Cybersecurity Governance & Policy",
    trackLabel: "TRACK 01",
    description:
      "National cybersecurity strategy, cybersecurity governance frameworks, cyber policy development, institutional coordination, and cyber risk governance.",
    tags: ["National Strategy", "Governance Frameworks", "Policy Development"],
  },
  {
    icon: "lock",
    title: "National Cyber Resilience",
    trackLabel: "TRACK 02",
    description:
      "National cyber defense, critical infrastructure protection, cyber capability development, and cyber resilience in developing and middle-income states.",
    tags: ["Critical Infrastructure", "Capability Development", "Resilience"],
  },
  {
    icon: "hub",
    title: "Civil–Military Cyber Governance",
    trackLabel: "TRACK 03",
    description:
      "Civil–military coordination, military cyber capability, defense–civilian cybersecurity integration, and cyber operational readiness.",
    tags: ["Civil–Military Coordination", "Military Cyber Capability", "Operational Readiness"],
  },
  {
    icon: "book",
    title: "Cybersecurity in Developing Countries",
    trackLabel: "TRACK 04",
    description:
      "South Asian cybersecurity, developing-country cyber capacity, cybersecurity institutional development, and international cybersecurity cooperation.",
    tags: ["South Asian Cybersecurity", "Institutional Development", "International Cooperation"],
  },
];

export const researchProjects: ResearchProject[] = [
  {
    title: "Independent Research Project",
    venue: "Independent",
    dateRange: "2026 – Present",
    projectTitle:
      "Toward a Resilient Digital Battlefield: Detection Capability and Strategic Force Development in Middle-Income Countries within a South Asian Context",
    bullets: [
      "Examines national cyber resilience and cybersecurity governance challenges in middle-income South Asian states, with Bangladesh as the primary case study.",
      "Investigates the preparedness of military and civilian institutions to respond to contemporary cyber threats.",
      "Examines civil–military coordination, national cybersecurity policy, and institutional cyber capability development.",
      "Uses primary survey data and secondary policy/literature analysis to assess cybersecurity readiness.",
      "Applies the NIST Cybersecurity Framework (CSF) 2.0 as a reference framework for evaluating organizational cybersecurity posture, and develops strategic recommendations for strengthening national cyber resilience while supporting military operational readiness.",
    ],
  },
  {
    title: "Graduate Researcher",
    venue: "Bangladesh University of Professionals",
    dateRange: "2015 – 2016",
    projectTitle:
      "Integration of JCOs and NCOs as Facilitators with the Senior Command and Leadership for Promoting Participatory Leadership in Bangladesh Army",
    bullets: [
      "Conducted independent graduate research examining the feasibility of integrating Junior Commissioned Officers (JCOs) and Non-Commissioned Officers (NCOs) as facilitators/advisors to senior military leadership.",
      "Developed primary and secondary research questions examining leadership, organizational decision-making, information flow, and the role of JCOs/NCOs within the Bangladesh Army.",
      "Collected and analyzed evidence using surveys, interviews, focus group discussions, document study, and professional experience.",
      "Examined existing command and information-flow structures and identified organizational \"grey areas\" affecting participatory leadership.",
      "Developed recommendations for selection, education, training, and progressive employment of JCOs/NCOs as facilitators at brigade, division, and Army levels.",
      "Completed the study as part of the requirements for the Master of Defence Studies (MDS), Army Staff Course, 2015–2016.",
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    org: "Cognizant Technology Solutions",
    role: "Software Development Engineer in Test • TriZetto Provider Services, Healthcare",
    dateRange: "Mar 2021 – Jan 2026",
    location: "Austin, TX (Remote)",
    bullets: [
      "Designed and implemented automated test frameworks using C#, .NET, Selenium, and Azure DevOps for enterprise healthcare software, creating a strong foundation in reproducible validation and software reliability.",
      "Integrated application, API, and database validation across the software lifecycle and used SQL-based reporting to convert execution data into actionable quality metrics for technical decision-making.",
      "Expanded regression coverage and accelerated defect detection, providing practical experience relevant to research in automated software testing, dependable systems, and AI-assisted quality engineering.",
    ],
  },
  {
    org: "Texas Department of Transportation (TxDOT)",
    role: "SDET Consultant (Part Time) • PRIMUS Global",
    dateRange: "Mar 2023 – Oct 2024",
    location: "Austin, TX (Remote)",
    bullets: [
      "Evaluated build-versus-buy alternatives for internal testing platforms by combining technical feasibility, scalability, and cost considerations to support executive decision-making.",
      "Architected modernization of legacy manual workflows into a scalable Behavior-Driven Development automation platform and coordinated requirements with engineering stakeholders.",
      "Developed dashboards and operational metrics for quality, execution progress, and deployment performance, demonstrating experience with data-informed systems engineering.",
    ],
  },
  {
    org: "Square Textile Group",
    role: "Head of Technical & HR",
    dateRange: "Mar 2019 – Jan 2020",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Led enterprise data and workflow modernization across ERP and HR systems, including automated reporting, standardized process documentation, and product traceability workflows.",
      "Improved operational accuracy by 25%, illustrating the measurable impact of systems integration and data-driven process redesign in a manufacturing environment.",
    ],
  },
  {
    org: "Bangladesh Army",
    role: "Military Officer",
    dateRange: "Jun 2004 – Feb 2019",
    location: "International Deployment (UN)",
    bullets: [
      "Coordinated cross-border logistics and operational reporting during a United Nations peacekeeping deployment in the Democratic Republic of the Congo, strengthening expertise in resilient systems, risk management, and mission-critical operations.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    icon: "award",
    title: "PMP® Certification",
    subtitle: "Project Management Institute (PMI)",
    logoSrc: "/logos/pmi.png",
  },
  {
    icon: "lock",
    title: "CompTIA Security+",
    subtitle: "Systems Security, IAM & Hardening",
    logoSrc: "/logos/comptia.svg",
  },
  {
    icon: "cloud",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "CLF-C02 Infrastructure Competence",
    logoSrc: "/logos/aws.svg",
  },
  {
    icon: "shieldCheck",
    title: "CISSP (In Progress)",
    subtitle: "ISC2 Candidate • Target Exam Q4 2026",
    logoSrc: "/logos/isc2.svg",
  },
  {
    icon: "brain",
    title: "Google Project Management Certificate",
    subtitle: "Google Career Certificates",
    logoSrc: "/logos/google.svg",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Defence Studies (MDS), Army Staff Course",
    institution: "Bangladesh University of Professionals",
    detail: "CGPA 3.59 / 4.00",
    detailIsBadge: true,
  },
  {
    degree: "Bachelor of Arts",
    institution: "National University",
  },
];

export const contactChannels = {
  outreachLabel: "Direct Scholarly Outreach",
  heading: "Initiate Dialogue",
  description:
    "Welcoming inquiries from principal investigators, research faculty, admissions committees, and technical directors looking for disciplined systems expertise.",
};
