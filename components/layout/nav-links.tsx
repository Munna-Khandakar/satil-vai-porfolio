"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group relative block rounded-r-sm py-2 pl-4 pr-2 text-[15px] leading-snug no-underline transition-colors duration-200",
                // Accent bar on the left edge: full height when active, grows in on hover.
                "before:absolute before:left-0 before:top-1/2 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-sidebar-active before:transition-all before:duration-300 before:ease-out",
                "hover:bg-white/5 focus-visible:bg-white/5 focus-visible:outline-none",
                active
                  ? "text-sidebar-active before:h-5"
                  : "text-sidebar-fg before:h-0 hover:text-white hover:before:h-5 focus-visible:text-white focus-visible:before:h-5"
              )}
            >
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1">
                {link.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
