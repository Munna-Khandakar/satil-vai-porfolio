import Image from "next/image";
import { Expandable } from "@/components/expandable";
import { PageTitle, SectionHeading } from "@/components/page-title";
import { ContactList } from "@/components/profile/contact-list";
import { iconMap } from "@/components/icons/icon-map";
import { profile, valuePillars } from "@/lib/profile-data";

export default function Home() {
  return (
    <>
      <PageTitle title="Md Nahidul Satil, PMP®">
        <p>{profile.tagline}</p>
        <p>{profile.credentialTag}</p>
        <p className="text-base text-heading">{profile.availabilityBanner}</p>
      </PageTitle>

      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        <Image
          src={profile.avatarSrc}
          alt={profile.name}
          width={480}
          height={480}
          preload
          className="aspect-square w-56 shrink-0 rounded-2xl object-cover object-top shadow-sm md:w-60"
        />

        <div className="flex min-w-0 flex-col gap-5">
          <p className="text-left text-[20px] md:text-justify italic leading-[30px] text-ink md:text-[22px] md:leading-[32px]">
            &ldquo;{profile.pullQuote}&rdquo;
          </p>
          <p className="text-left text-[15px] md:text-justify leading-relaxed text-ink">
            {profile.summary}
          </p>
          <a
            href={profile.dossierHref}
            download
            className="inline-flex w-fit items-center gap-1.5"
          >
            <iconMap.download className="size-4" />
            Curriculum Vitae
          </a>
          <ContactList />
        </div>
      </div>

      <SectionHeading>What I Bring</SectionHeading>
      <div className="border-t border-rule">
        {valuePillars.map((pillar) => (
          <Expandable
            key={pillar.title}
            summary={
              <span className="text-[17px] text-ink">{pillar.title}</span>
            }
          >
            <p>{pillar.description}</p>
          </Expandable>
        ))}
      </div>
    </>
  );
}
