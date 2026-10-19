"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            aria-current={pathname === link.href ? "page" : undefined}
            className={cn(
              "block py-2 text-[15px] leading-snug no-underline transition-colors",
              pathname === link.href
                ? "text-sidebar-active"
                : "text-sidebar-fg hover:text-white"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
