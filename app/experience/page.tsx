import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { experience } from "@/lib/profile-data";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageTitle title="Experience" />
      <div className="flex flex-col gap-10">
        {experience.map((entry) => (
          <article key={entry.org} className="text-[15px] leading-relaxed">
            <h2 className="text-[22px] font-normal leading-tight text-heading">
              {entry.org}
            </h2>
            <p className="mt-1 italic text-ink">{entry.role}</p>
            <p className="text-ink-muted">
              {entry.dateRange} · {entry.location}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {entry.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
