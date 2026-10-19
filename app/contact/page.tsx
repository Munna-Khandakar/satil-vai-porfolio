import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { ContactList } from "@/components/profile/contact-list";
import { contactChannels, profile } from "@/lib/profile-data";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <div className="mx-auto flex max-w-2xl flex-col gap-5 text-[15px] leading-relaxed">
        <p>{contactChannels.description}</p>
        <ContactList />
        <p>
          <a href={profile.dossierHref} download>
            Download Curriculum Vitae
          </a>
        </p>
      </div>
    </>
  );
}
