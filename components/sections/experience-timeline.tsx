import { experience } from "@/lib/profile-data";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Field Record
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Chronological Milestones
        </span>
      </div>
      <div className="flex flex-col gap-y-3">
        {experience.map((entry) => (
          <div
            key={entry.org}
            className="flex flex-col gap-y-3 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {entry.org}
                </h3>
                <p className="font-label-lg text-label-lg text-secondary">
                  {entry.role}
                </p>
              </div>
              <span className="w-fit rounded-md bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                {entry.dateRange} • {entry.location}
              </span>
            </div>
            {entry.summary && (
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {entry.summary}
              </p>
            )}
            <div className="flex flex-col gap-y-2 pt-1 font-body-sm text-body-sm text-on-surface">
              {entry.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
