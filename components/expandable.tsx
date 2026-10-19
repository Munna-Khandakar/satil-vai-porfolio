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
    <details className="group border-b border-rule py-3">
      <summary className="flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">{summary}</div>
        <iconMap.chevronDown className="size-4 shrink-0 text-ink-muted transition-transform group-open:rotate-180" />
      </summary>
      <div className="pt-2 text-[15px] leading-relaxed text-ink">{children}</div>
    </details>
  );
}
