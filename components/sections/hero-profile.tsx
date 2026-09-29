import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { iconMap } from "@/components/icons/icon-map";
import { profile } from "@/lib/profile-data";

export function HeroProfile() {
  return (
    <section
      id="overview"
      className="flex flex-col gap-y-5 rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
    >
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:flex-col lg:items-start">
        <div className="relative shrink-0">
          <div className="size-24 overflow-hidden rounded-xl bg-surface-container-high shadow-md sm:size-28">
            <Avatar className="size-full rounded-xl">
              <AvatarImage
                src={profile.avatarSrc}
                alt={profile.name}
                className="rounded-xl object-cover object-top"
              />
              <AvatarFallback className="rounded-xl bg-surface-container-high text-headline-md text-on-surface-variant">
                {profile.avatarFallback}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-secondary" />
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-1.5 inline-flex w-fit items-center gap-1.5 rounded-full bg-surface-container px-2.5 py-1 font-label-sm text-label-sm text-on-surface-variant">
            <iconMap.verified className="size-3.5 text-secondary" />
            <span>{profile.credentialTag}</span>
          </div>
          <h1 className="font-headline-md text-headline-md tracking-tight text-on-surface">
            {profile.name}
          </h1>
          <p className="mt-0.5 font-label-lg text-label-lg font-medium text-secondary">
            {profile.tagline}
          </p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
            <span className="inline-flex items-center gap-1">
              <iconMap.location className="size-3.5" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <iconMap.phone className="size-3.5" /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1">
              <iconMap.mail className="size-3.5" /> {profile.email}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 rounded-lg bg-secondary-fixed p-3 text-on-secondary-fixed">
        <iconMap.school className="size-5 shrink-0 text-secondary" />
        <span className="font-label-md text-label-md font-medium leading-snug">
          {profile.availabilityBanner}
        </span>
      </div>

      <div className="flex flex-wrap gap-2.5 pt-1">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 font-label-md text-label-md font-semibold text-on-primary shadow-sm transition-opacity hover:opacity-90"
        >
          <iconMap.send className="size-4" />
          Get in Touch
        </a>
        <a
          href={profile.dossierHref}
          download
          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-surface-container-high px-4 py-2 font-label-md text-label-md font-semibold text-on-surface transition-colors hover:bg-surface-container-highest"
        >
          <iconMap.download className="size-4" />
          Download
        </a>
      </div>
    </section>
  );
}
