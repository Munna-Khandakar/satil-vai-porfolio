import { profile } from "@/lib/profile-data";

export function ContactList() {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-[15px] marker:text-ink">
      <li>
        Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      <li>
        Phone: <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
      </li>
      <li>
        LinkedIn:{" "}
        <a href={profile.linkedinHref} target="_blank" rel="noopener noreferrer">
          {profile.linkedinLabel}
        </a>
      </li>
      <li>Location: {profile.location}</li>
    </ul>
  );
}
