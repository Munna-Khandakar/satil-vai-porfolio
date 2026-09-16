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

export interface ExperienceEntry {
  org: string;
  role: string;
  dateRange: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export interface SkillCategory {
  icon: IconName;
  title: string;
  tags: string[];
  monospace?: boolean;
}

export interface Certification {
  icon: IconName;
  title: string;
  subtitle: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  detail: string;
  detailIsBadge?: boolean;
}

export const profile = {
  name: "Nahidul Satil, PMP®",
  credentialTag: "Credentialed Systems Practitioner",
  tagline:
    "Prospective Graduate Researcher • Software Systems • Cybersecurity • AI-Enabled Automation",
  location: "Austin, Texas",
  phone: "(929) 471-8424",
  phoneHref: "+19294718424",
  email: "mdsatilislam@gmail.com",
  availabilityBanner:
    "Available for Graduate Research & Strategic Technical Leadership (Ph.D. / M.S. Opportunities)",
  avatarSrc: "/profile.jpeg",
  avatarFallback: "NS",
  dossierHref: "/resume.pdf",
  pullQuote:
    "Connecting rigorous scientific inquiry with resilient, mission-critical automation across defense, healthcare, and enterprise platforms.",
  summary:
    "Technology professional and former military officer with 15+ years of disciplined execution across enterprise healthcare software, civil transportation data grids, manufacturing operations, and high-security national defense frameworks.",
  experienceRecordLabel: "15+ Years Systems Record",
} as const;

export const valuePillars: ValuePillar[] = [
  {
    icon: "balance",
    title: "Mature Judgment",
    description:
      "High-stakes systems experience providing grounded discernment across verification fidelity, security threat modeling, and fault tolerance.",
  },
  {
    icon: "hub",
    title: "Sociotechnical Bridge",
    description:
      "Translates ambiguous organizational and human requirements into formal validation criteria and mathematically reproducible test architectures.",
  },
  {
    icon: "science",
    title: "Applied Real-World Data",
    description:
      "Equips academic research cohorts with concrete empirical datasets spanning healthcare compliance, civic infrastructure, and multi-national logistics.",
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
    value: "UN & Gov",
    sublabel: "Peacekeeping & Biometrics",
  },
  {
    label: "Academics",
    value: "3.59",
    sublabel: "Master of Military Sci",
    accent: true,
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    icon: "bug",
    title: "Reliable Software Systems",
    trackLabel: "TRACK 01",
    description:
      "Formally verified software testing, empirical quality analytics, runtime safety invariant checking, and AI-assisted continuous synthesis of validation frameworks.",
    tags: ["Verification Theory", "Regression Synthesis", "Quality Metrics"],
  },
  {
    icon: "shield",
    title: "Cybersecurity & Resilience",
    trackLabel: "TRACK 02",
    description:
      "Identity & access authorization models, supply-chain safety, networked cyber-physical attack vector modeling, and security assurance protocols in regulated spaces.",
    tags: ["IAM Protocols", "Zero-Trust Audit", "Security+ Assured"],
  },
  {
    icon: "bot",
    title: "AI-Enabled Automation",
    trackLabel: "TRACK 03",
    description:
      "Statistical anomaly detection in telemetry, generative models for intelligent test input space exploration, automated triage, and heuristic decision-support systems.",
    tags: ["Anomaly Inference", "GenAI Testing", "Automated Triage"],
  },
  {
    icon: "workflow",
    title: "Digital Systems & Ops",
    trackLabel: "TRACK 04",
    description:
      "Complex workflow modernization, legacy system data pipeline re-engineering, and human-in-the-loop operational transparency under stringent federal or clinical compliance.",
    tags: ["System Modernization", "Data Architecture", "Human-in-the-Loop"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    org: "Cognizant Technology Solutions",
    role: "Software Development Engineer in Test (SDET) • TriZetto Healthcare",
    dateRange: "Mar 2021 – Jan 2026",
    location: "Austin, TX",
    summary:
      "Led automated test framework engineering for mission-critical enterprise healthcare applications, ensuring rigorous regulatory compliance and stability across millions of member claims.",
    bullets: [
      "Architected and maintained robust scalable test automation solutions using C#, .NET, Selenium WebDriver, and Azure DevOps, ensuring reproducible software verification pipelines.",
      "Synthesized cross-layer integration testing linking frontend UI, microservice REST APIs, and database validations with structured SQL-driven audit tracking.",
      "Pioneered early application of generative AI methodologies to streamline test script authoring and expand high-probability fault surface coverage.",
    ],
  },
  {
    org: "Texas Department of Transportation (TxDOT)",
    role: "SDET / QA Consultant (PRIMUS Global)",
    dateRange: "Mar 2023 – Oct 2024",
    location: "Austin, TX",
    bullets: [
      "Spearheaded quantitative build-vs-buy feasibility studies for state-level enterprise quality infrastructure, analyzing long-term lifecycle costs and scalability.",
      "Constructed unified Behavior-Driven Development (BDD) frameworks with SpecFlow/Cucumber, producing real-time operational telemetry for agency stakeholders.",
    ],
  },
  {
    org: "Square Textile Group",
    role: "Head of Technical & HR",
    dateRange: "Mar 2019 – Jan 2020",
    location: "Dhaka, Bangladesh",
    bullets: [
      "Engineered enterprise workflow modernizations connecting legacy ERP datastores to workforce automation pipelines, yielding a 25% elevation in operational accuracy.",
    ],
  },
  {
    org: "Bangladesh Army & United Nations Deployments",
    role: "Technical Project & Logistics Officer (Former Commissioned Officer)",
    dateRange: "Jun 2004 – Feb 2019",
    location: "Global Missions",
    bullets: [
      "Directed high-security physical and digital infrastructures, notably supporting the nationwide biometric voter registration deployment under austere operational parameters.",
      "Served under the United Nations mandate in the Democratic Republic of the Congo, managing tactical cross-border logistics telemetry, critical supplies, and high-consequence situational reporting.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "code",
    title: "Programming & Querying",
    tags: ["Python", "C# (.NET)", "Java", "JavaScript", "SQL (PostgreSQL/MSSQL)"],
    monospace: true,
  },
  {
    icon: "shieldCheck",
    title: "Quality & Automation Frameworks",
    tags: [
      "Selenium WebDriver",
      "Playwright (TS/Java/C#)",
      "Appium Mobile",
      "Cucumber / BDD",
      "TestNG / NUnit",
      "RESTful API Validation",
    ],
  },
  {
    icon: "cloudDone",
    title: "Cloud, DevOps & Security",
    tags: [
      "Azure DevOps CI/CD",
      "AWS Cloud",
      "Jenkins",
      "Git / GitHub",
      "CompTIA Security+",
      "IAM Architecture",
      "CISSP Domains (In-Flight)",
    ],
  },
  {
    icon: "microscope",
    title: "Scientific & Analytical Methods",
    tags: [
      "Experimental Test Formulation",
      "Root-Cause Telemetry",
      "Statistical Metrics",
      "Feasibility Architecture",
      "Risk & Threat Matrices",
    ],
  },
];

export const certifications: Certification[] = [
  {
    icon: "award",
    title: "PMP® Certification",
    subtitle: "Project Management Institute (PMI)",
  },
  {
    icon: "lock",
    title: "CompTIA Security+",
    subtitle: "Systems Security, IAM & Hardening",
  },
  {
    icon: "cloud",
    title: "AWS Certified Cloud Practitioner",
    subtitle: "CLF-C02 Infrastructure Competence",
  },
  {
    icon: "brain",
    title: "Generative AI in Engineering",
    subtitle: "AI Test Automation & Leadership",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Master of Military Science",
    institution: "Bangladesh University of Professionals",
    detail: "CGPA 3.59 / 4.00",
    detailIsBadge: true,
  },
  {
    degree: "Bachelor of Arts (Military Studies)",
    institution: "Bangladesh National University",
    detail: "Commissioned Academy Program",
  },
];

export const contactChannels = {
  outreachLabel: "Direct Scholarly Outreach",
  heading: "Initiate Dialogue",
  description:
    "Welcoming inquiries from principal investigators, research faculty, admissions committees, and technical directors looking for disciplined systems expertise.",
};
