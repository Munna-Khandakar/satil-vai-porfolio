import type { ReactNode } from "react";
import { iconMap } from "@/components/icons/icon-map";

/** Heading-only row that reveals its details on click (native <details>, no JS). */
export function Expandable({
  summary,
  children,
}: {
  summary: ReactNode;
  children: ReactNode;
}) {
  return (
    <details className="group border-b border-rule transition-colors duration-200 hover:bg-heading/5">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-3 py-4 text-ink transition-colors duration-200 group-hover:text-heading [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">{summary}</div>
        <iconMap.chevronDown className="size-4 shrink-0 text-ink-muted transition-all duration-300 group-open:rotate-180 group-hover:text-heading" />
      </summary>
      <div className="animate-in fade-in slide-in-from-top-1 px-3 pb-4 text-[15px] leading-relaxed text-ink duration-300">
        {children}
      </div>
    </details>
  );
}
