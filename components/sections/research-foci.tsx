import { iconMap } from "@/components/icons/icon-map";
import { researchTracks } from "@/lib/profile-data";

export function ResearchFoci() {
  return (
    <section id="research" className="flex flex-col gap-y-3.5">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Research Foci
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Core Inquiry Tracks
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {researchTracks.map((track) => {
          const Icon = iconMap[track.icon];
          return (
            <div
              key={track.title}
              className="flex flex-col gap-y-2 rounded-xl bg-surface-container-lowest p-4 shadow-sm transition-colors hover:bg-surface-bright"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-secondary">
                  <Icon className="size-5" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {track.title}
                  </h3>
                </div>
                <span className="rounded bg-surface-container px-2 py-0.5 font-label-sm text-label-sm font-mono text-on-surface-variant">
                  {track.trackLabel}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {track.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {track.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-surface-container-low px-2 py-0.5 font-label-sm text-label-sm text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
