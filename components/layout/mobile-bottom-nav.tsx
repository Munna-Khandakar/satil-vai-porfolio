"use client";

import Link from "next/link";
import { iconMap } from "@/components/icons/icon-map";
import { profile } from "@/lib/profile-data";
import { SECTION_IDS } from "@/lib/constants";
import { useActiveSection } from "@/lib/use-active-section";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "overview", label: "Profile", icon: iconMap.person },
  { id: "experience", label: "Record", icon: iconMap.briefcase },
  { id: "research", label: "Research", icon: iconMap.book },
] as const;

export function MobileBottomNav() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <nav className="fixed bottom-0 z-50 w-full bg-surface/90 backdrop-blur-xl shadow-[0_-1px_12px_rgba(0,0,0,0.04)] lg:hidden">
      <div className="flex h-16 items-center justify-between px-gutter-mobile">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeId === tab.id;
          return (
            <Link
              key={tab.id}
              href={`#${tab.id}`}
              className={cn(
                "flex h-12 min-w-[54px] flex-col items-center justify-center transition-colors",
                isActive
                  ? "font-semibold text-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              <Icon className="size-5" />
              <span className="mt-0.5 font-label-sm text-label-sm">
                {tab.label}
              </span>
            </Link>
          );
        })}
        <div className="flex items-center gap-space-xs pl-space-xs">
          <a
            href={profile.dossierHref}
            download
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-surface-container-high px-3.5 font-label-sm text-label-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest"
          >
            <iconMap.file className="mr-1 size-4" />
            CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-primary px-3.5 font-label-sm text-label-sm font-semibold text-on-primary transition-colors hover:opacity-90"
          >
            <iconMap.mail className="mr-1 size-4" />
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
