import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageTitle } from "@/components/page-title";
import { recommendations } from "@/lib/profile-data";

export const metadata: Metadata = { title: "Recommendations" };

export default function RecommendationsPage() {
  return (
    <>
      <PageTitle title="Recommendations" />
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <p className="text-center text-[15px] leading-relaxed text-ink-muted">
          Letters of recommendation from senior military and academic leaders.
        </p>

        <ul className="flex flex-col gap-6">
          {recommendations.map((rec) => (
            <li key={rec.letterHref}>
              <article className="flex flex-col gap-5 rounded-md border border-rule p-6 transition-all duration-200 hover:-translate-y-0.5 hover:bg-heading/5 hover:shadow-sm md:p-8">
                <blockquote className="border-l-2 border-heading pl-4 text-[17px] italic leading-[28px] text-ink md:text-[19px] md:leading-[30px]">
                  &ldquo;{rec.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col gap-1 text-[15px] leading-snug">
                  <p className="font-bold text-ink">{rec.name}</p>
                  {rec.postNominals && (
                    <p className="text-sm text-ink-muted">{rec.postNominals}</p>
                  )}
                  {rec.positions.map((position) => (
                    <p key={position} className="text-sm text-ink-muted">
                      {position}
                    </p>
                  ))}
                  <p className="mt-2 text-sm text-ink-muted">
                    {rec.relationship} · {rec.date}
                  </p>
                </div>

                <a
                  href={encodeURI(rec.letterHref)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View recommendation letter from ${rec.name} (PDF, opens in a new tab)`}
                  className="group inline-flex w-fit items-center gap-1 self-end text-sm"
                >
                  View letter
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
