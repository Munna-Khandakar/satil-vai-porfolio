import type { ReactNode } from "react";

/** Re-mounts on every navigation, so each page fades in gently. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out">
      {children}
    </div>
  );
}
