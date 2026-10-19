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
          className="text-lg font-light text-white no-underline"
        >
          Md Nahidul Satil
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-white"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Main" className="px-5 pb-4">
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>
      )}
    </header>
  );
}
