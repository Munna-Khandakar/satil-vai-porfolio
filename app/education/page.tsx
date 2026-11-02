import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { iconMap } from "@/components/icons/icon-map";
import { PageTitle, SectionHeading } from "@/components/page-title";
import { certifications, education } from "@/lib/profile-data";

export const metadata: Metadata = { title: "Education & Certifications" };

export default function EducationPage() {
  return (
    <>
      <PageTitle title="Education & Certifications" />

      <SectionHeading>Education</SectionHeading>
      <ul className="flex flex-col gap-4 text-[15px] leading-relaxed">
        {education.map((entry) => (
          <li key={entry.degree}>
            <span className="font-bold text-ink">{entry.degree}</span>
            <br />
            <span className="text-ink-muted">
              {entry.institution}
              {entry.detail && <> · {entry.detail}</>}
            </span>
          </li>
        ))}
      </ul>

      <SectionHeading>Certifications</SectionHeading>
      <ul className="flex flex-col divide-y divide-rule border-y border-rule">
        {certifications.map((cert) => {
          const Icon = iconMap[cert.icon];
          const content = (
            <>
              <div className="flex h-10 w-20 shrink-0 items-center justify-center transition-transform duration-200 group-hover:scale-105">
                {cert.logoSrc ? (
                  <Image
                    src={cert.logoSrc}
                    alt=""
                    width={80}
                    height={40}
                    className="max-h-full w-auto object-contain"
                  />
                ) : (
                  <Icon className="size-6 text-heading" />
                )}
              </div>
              <div className="min-w-0 flex-1 text-[15px] leading-snug">
                <p className="text-ink transition-colors duration-200 group-hover:text-link">
                  {cert.title}
                </p>
                <p className="text-sm text-ink-muted">{cert.subtitle}</p>
              </div>
            </>
          );

          return (
            <li key={cert.title}>
              {cert.certificateHref ? (
                <a
                  href={encodeURI(cert.certificateHref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate (PDF, opens in a new tab)`}
                  className="group -mx-3 flex items-center gap-4 rounded-md px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-heading/5 hover:shadow-sm focus-visible:bg-heading/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                >
                  {content}
                  <span className="flex shrink-0 items-center gap-1 text-sm text-link opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="hidden sm:inline">View certificate</span>
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-4 py-3">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
