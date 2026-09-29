import { researchProjects } from "@/lib/profile-data";

export function ResearchExperience() {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Research Experience
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Active & Completed Studies
        </span>
      </div>
      <div className="flex flex-col gap-y-3">
        {researchProjects.map((project) => (
          <div
            key={project.projectTitle}
            className="flex flex-col gap-y-3 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {project.title}
                </h3>
                <p className="font-label-lg text-label-lg text-secondary">
                  {project.venue}
                </p>
              </div>
              <span className="w-fit rounded-md bg-surface-container px-2 py-0.5 font-label-sm text-label-sm text-on-surface-variant">
                {project.dateRange}
              </span>
            </div>
            <p className="font-body-md italic text-body-md text-on-surface">
              {project.projectTitle}
            </p>
            <div className="flex flex-col gap-y-2 pt-1 font-body-sm text-body-sm text-on-surface">
              {project.bullets.map((bullet, i) => (
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
