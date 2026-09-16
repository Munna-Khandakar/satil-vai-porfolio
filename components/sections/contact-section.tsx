import { iconMap } from "@/components/icons/icon-map";
import { contactChannels, profile } from "@/lib/profile-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-y-5 rounded-xl bg-primary p-space-lg text-on-primary shadow-md"
    >
      <div className="flex flex-col gap-y-1.5">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary-fixed">
          {contactChannels.outreachLabel}
        </span>
        <h3 className="font-headline-md text-headline-md text-on-primary">
          {contactChannels.heading}
        </h3>
        <p className="max-w-xl font-body-sm text-body-sm text-primary-fixed-dim">
          {contactChannels.description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          className="flex flex-col gap-y-1 rounded-lg bg-surface-container-highest/10 p-3.5 transition-colors hover:bg-surface-container-highest/20"
        >
          <iconMap.mail className="size-[18px] text-primary-fixed" />
          <span className="font-label-sm text-label-sm text-primary-fixed-dim">
            Email Inquiries
          </span>
          <span className="truncate font-label-md text-label-md font-medium text-on-primary">
            {profile.email}
          </span>
        </a>
        <a
          href={`tel:${profile.phoneHref}`}
          className="flex flex-col gap-y-1 rounded-lg bg-surface-container-highest/10 p-3.5 transition-colors hover:bg-surface-container-highest/20"
        >
          <iconMap.smartphone className="size-[18px] text-primary-fixed" />
          <span className="font-label-sm text-label-sm text-primary-fixed-dim">
            Direct Mobile
          </span>
          <span className="font-label-md text-label-md font-medium text-on-primary">
            {profile.phone}
          </span>
        </a>
        <div className="flex flex-col gap-y-1 rounded-lg bg-surface-container-highest/10 p-3.5">
          <iconMap.pin className="size-[18px] text-primary-fixed" />
          <span className="font-label-sm text-label-sm text-primary-fixed-dim">
            Base of Operations
          </span>
          <span className="font-label-md text-label-md font-medium text-on-primary">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
