import type { TreatmentActions, TreatmentPageContent } from "@/lib/treatment";
import { CtaButtons } from "./cta-buttons";
import { Eyebrow, Heading } from "./heading";

export function FaqSection({
  questions,
  actions,
}: {
  questions: NonNullable<TreatmentPageContent["questions"]>;
  actions: TreatmentActions;
}) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id={questions.id}
      className="scroll-mt-32 border-t border-border lg:scroll-mt-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto grid w-full gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-x-16 lg:gap-y-8 lg:px-10">
        <div>
          <Eyebrow>{questions.eyebrow}</Eyebrow>
          <Heading
            text={questions.title}
            className={
              questions.titleClassName ??
              "mt-3 max-w-[16ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-sm leading-relaxed text-muted">{questions.intro}</p>
        </div>

        <div className="grid content-start gap-3 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {questions.items.map((item, index) => (
            <details
              key={item.q}
              name="faq"
              open={index === 0}
              className="faq group rounded-md border border-border bg-white transition-shadow open:shadow-card hover:shadow-soft"
            >
              <summary className="flex cursor-pointer items-center gap-4 px-4 py-4 sm:gap-5 sm:px-6 sm:py-5">
                <span className="w-6 shrink-0 text-xs text-accent tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 font-heading text-base font-medium tracking-tight sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-dark transition-colors group-open:bg-accent-dark group-open:text-white"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="size-3.5 transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </span>
              </summary>
              <p className="px-4 pb-5 pl-14 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:pl-17">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="rounded-md border border-border bg-accent-wash p-6 sm:p-8 lg:col-start-1 lg:row-start-2 lg:self-end">
          <Eyebrow>{questions.prompt.eyebrow}</Eyebrow>
          <Heading
            text={questions.prompt.title}
            className={
              questions.prompt.titleClassName ??
              "mt-3 max-w-[22ch] font-heading text-[1.6rem] leading-[1.15] font-medium tracking-tight"
            }
          />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {questions.prompt.body}
          </p>
          <div className="mt-6">
            <CtaButtons actions={actions} primary={questions.prompt.primary} stack />
          </div>
        </div>
      </div>
    </section>
  );
}
