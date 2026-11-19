import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Expandable } from "@/components/expandable";
import { PageTitle, SectionHeading } from "@/components/page-title";
import { researchProjects, researchTracks } from "@/lib/profile-data";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageTitle title="Research" />

      <SectionHeading>Research Foci</SectionHeading>
      <div className="border-t border-rule">
        {researchTracks.map((track) => (
          <Expandable
            key={track.title}
            summary={
              <span className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-[17px]">{track.title}</span>
                <span className="text-xs uppercase tracking-wider text-ink-muted">
                  {track.trackLabel}
                </span>
              </span>
            }
          >
            <p>{track.description}</p>
            <p className="mt-2 text-sm text-ink-muted">
              <span className="italic">Keywords:</span> {track.tags.join(" · ")}
            </p>
          </Expandable>
        ))}
      </div>

      <SectionHeading>Research Experience</SectionHeading>
      <div className="flex flex-col gap-10">
        {researchProjects.map((project) => (
          <article key={project.projectTitle} className="text-[15px] leading-relaxed">
            <h3 className="text-lg font-bold text-ink">{project.title}</h3>
            <p className="text-ink-muted">
              {project.venue} · {project.dateRange}
            </p>
            <p className="mt-2 italic text-ink">{project.projectTitle}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            {project.paperHref && (
              <a
                href={project.paperHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View paper: ${project.projectTitle} (PDF, opens in a new tab)`}
                className="group mt-3 inline-flex w-fit items-center gap-1 text-sm"
              >
                View paper (PDF)
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
