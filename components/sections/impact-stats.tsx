import { stats } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

export function ImpactStats() {
  return (
    <section className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-4 shadow-sm"
        >
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
            {stat.label}
          </span>
          <div className="mt-2">
            <span
              className={cn(
                "font-headline-md text-headline-md font-bold",
                stat.accent ? "text-secondary" : "text-on-surface"
              )}
            >
              {stat.value}
            </span>
            <span className="block font-label-md text-label-md text-on-surface-variant">
              {stat.sublabel}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
