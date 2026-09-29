"use client";

import Link from "next/link";
import { NAV_LINKS, SECTION_IDS } from "@/lib/constants";
import { profile } from "@/lib/profile-data";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-16 max-w-[1180px] flex-col justify-center gap-space-xs px-margin-mobile lg:h-28 lg:px-margin">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex min-w-0 flex-1 items-center gap-space-sm">
            <span className="truncate font-headline-sm text-headline-sm text-on-surface">
              {profile.name}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-space-xs">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary-fixed px-2 py-1 font-label-sm text-label-sm font-semibold text-on-secondary-fixed">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="hidden xs:inline">Open to Roles</span>
              <span className="xs:hidden">Available</span>
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-space-md lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-1 py-1 font-label-md text-label-md transition-colors",
                activeId === link.id
                  ? "text-secondary font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
