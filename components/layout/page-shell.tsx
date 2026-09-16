import type { ReactNode } from "react";

export function PageShell({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 gap-gutter-mobile px-margin-mobile md:grid-cols-8 md:gap-gutter md:px-margin lg:mx-auto lg:max-w-[1180px] lg:grid-cols-12">
      <div className="col-span-4 md:col-span-8 lg:col-span-4 lg:sticky lg:top-28 lg:mt-[30px] lg:self-start">
        {sidebar}
      </div>
      <div className="col-span-4 flex flex-col gap-space-2xl pb-10 md:col-span-8 lg:col-span-8">
        {children}
      </div>
    </div>
  );
}
