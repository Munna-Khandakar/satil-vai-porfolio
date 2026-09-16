import { iconMap } from "@/components/icons/icon-map";
import { skillCategories } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

export function SkillsGrid() {
  return (
    <section id="skills" className="flex flex-col gap-y-3.5">
      <div className="flex items-center justify-between">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary">
          Methodological Arsenal
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Validated Skillsets
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <div
              key={category.title}
              className="flex flex-col gap-y-2.5 rounded-xl bg-surface-container-lowest p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-[18px] text-secondary" />
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {category.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded bg-surface-container px-2.5 py-1 font-label-md text-label-md text-on-surface",
                      category.monospace && "font-mono"
                    )}
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
