import Link from "next/link";
import { NavLinks } from "@/components/layout/nav-links";
import { profile } from "@/lib/profile-data";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[250px] flex-col overflow-y-auto bg-sidebar-bg px-10 py-12 lg:flex">
      <Link
        href="/"
        className="mb-12 text-center text-2xl font-light leading-tight text-white no-underline"
      >
        Md Nahidul Satil
      </Link>
      <nav aria-label="Main">
        <NavLinks />
      </nav>
      <p className="mt-auto pt-10 text-xs text-sidebar-fg/60">
        {profile.credentialTag}
      </p>
    </aside>
  );
}
