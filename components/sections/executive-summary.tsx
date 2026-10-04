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
        <p className="font-display text-[22px] italic leading-[30px] text-justify text-on-surface md:text-[26px] md:leading-[34px]">
          &ldquo;{profile.pullQuote}&rdquo;
        </p>
        <p className="font-body-md text-body-md text-justify text-on-surface-variant">
          {profile.summary}
        </p>
        <div className="grid grid-cols-1 items-start gap-3 pt-2 md:grid-cols-3">
          {valuePillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <details
                key={pillar.title}
                className="group rounded-lg bg-surface-container-low p-3.5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-2 text-secondary [&::-webkit-details-marker]:hidden">
                  <Icon className="size-[18px] shrink-0" />
                  <span className="flex-1 font-label-md text-label-md font-semibold text-on-surface">
                    {pillar.title}
                  </span>
                  <iconMap.chevronDown className="size-4 shrink-0 text-on-surface-variant transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-1.5 font-body-sm text-body-sm text-on-surface-variant">
                  {pillar.description}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
