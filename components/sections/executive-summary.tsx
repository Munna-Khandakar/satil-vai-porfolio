import { iconMap } from "@/components/icons/icon-map";
import { profile, valuePillars } from "@/lib/profile-data";

export function ExecutiveSummary() {
  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Scholarly Profile & Mission
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          {profile.experienceRecordLabel}
        </span>
      </div>
      <div className="flex flex-col gap-y-4 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <p className="font-display text-headline-lg-mobile italic leading-snug text-on-surface md:text-headline-lg">
          &ldquo;{profile.pullQuote}&rdquo;
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {profile.summary}
        </p>
        <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-3">
          {valuePillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <div
                key={pillar.title}
                className="flex flex-col gap-y-1.5 rounded-lg bg-surface-container-low p-3.5"
              >
                <div className="flex items-center gap-2 text-secondary">
                  <Icon className="size-[18px]" />
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    {pillar.title}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
