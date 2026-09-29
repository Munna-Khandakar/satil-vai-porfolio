import { iconMap } from "@/components/icons/icon-map";
import { certifications, continuingEducation, education } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

export function CertificationsEducation() {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Certifications & Degrees
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Validated Standards
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {certifications.map((cert) => {
          const Icon = iconMap[cert.icon];
          return (
            <div
              key={cert.title}
              className="flex items-start gap-3 rounded-xl bg-surface-container-lowest p-3.5 shadow-sm"
            >
              <div className="shrink-0 rounded-lg bg-surface-container p-2 text-secondary">
                <Icon className="size-5" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {cert.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {cert.subtitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-y-2.5 rounded-xl bg-surface-container-lowest p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <iconMap.book className="size-[18px] text-secondary" />
          <h4 className="font-headline-sm text-headline-sm text-on-surface">
            Continuing Education
          </h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {continuingEducation.map((item) => (
            <span
              key={item}
              className="rounded bg-surface-container px-2.5 py-1 font-label-md text-label-md text-on-surface"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-4 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="flex items-center gap-2 text-on-surface">
          <iconMap.school className="size-5 text-secondary" />
          <h3 className="font-headline-sm text-headline-sm">Formal Education</h3>
        </div>
        {education.map((entry) => (
          <div
            key={entry.degree}
            className="flex flex-col justify-between gap-2 rounded-lg bg-surface-container-low p-3 sm:flex-row sm:items-center"
          >
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                {entry.degree}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {entry.institution}
              </p>
            </div>
            <div className="sm:text-right">
              <span
                className={cn(
                  "font-label-sm text-label-sm",
                  entry.detailIsBadge
                    ? "rounded-md bg-surface-container-lowest px-2.5 py-1 font-bold text-secondary shadow-xs"
                    : "text-on-surface-variant"
                )}
              >
                {entry.detail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
