import type { ReactNode } from "react";

export function PageTitle({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-[40px] font-light leading-tight text-heading md:text-[60px]">
        {title}
      </h1>
      {children && (
        <div className="mt-4 flex flex-col gap-1.5 text-lg text-ink">
          {children}
        </div>
      )}
    </header>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 text-[26px] font-normal leading-tight text-heading first:mt-0 md:text-[28px]">
      {children}
    </h2>
  );
}
