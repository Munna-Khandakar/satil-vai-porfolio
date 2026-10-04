import { PageShell } from "@/components/layout/page-shell";
import { HeroProfile } from "@/components/sections/hero-profile";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { ImpactStats } from "@/components/sections/impact-stats";
import { ResearchFoci } from "@/components/sections/research-foci";
import { ResearchExperience } from "@/components/sections/research-experience";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { CertificationsEducation } from "@/components/sections/certifications-education";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <PageShell sidebar={<HeroProfile />}>
      <ExecutiveSummary />
      <ImpactStats />
      <ResearchFoci />
      <ResearchExperience />
      <ExperienceTimeline />
      <CertificationsEducation />
      <ContactSection />
    </PageShell>
  );
}
