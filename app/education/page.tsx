import type { Metadata } from "next";
import Image from "next/image";
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
          return (
            <li key={cert.title} className="flex items-center gap-4 py-3">
              <div className="flex h-10 w-20 shrink-0 items-center justify-center">
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
              <div className="text-[15px] leading-snug">
                <p className="text-ink">{cert.title}</p>
                <p className="text-sm text-ink-muted">{cert.subtitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
