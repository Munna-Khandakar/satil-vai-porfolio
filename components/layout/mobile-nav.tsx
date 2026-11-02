"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLinks } from "@/components/layout/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sidebar-bg pt-[env(safe-area-inset-top)] lg:hidden">
      <div className="flex h-14 items-center justify-between px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-lg font-light text-white no-underline transition-colors duration-300 hover:text-sidebar-active"
        >
          Md Nahidul Satil
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-sm p-2 text-white transition-colors duration-200 hover:bg-white/10 hover:text-sidebar-active"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="animate-in fade-in slide-in-from-top-2 px-5 pb-4 duration-200"
        >
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
