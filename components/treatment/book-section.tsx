import { ConsultForm } from "@/components/consult-form";
import { CLINIC, CLINIC_LINKS } from "@/lib/clinic";
import type { TreatmentActions, TreatmentPageContent } from "@/lib/treatment";
import { CtaButtons } from "./cta-buttons";
import { Eyebrow, Heading } from "./heading";
import { ContactIcon, PinIcon } from "./icons";

export function BookSection({
  book,
  form,
  actions,
  submitLabel,
}: {
  book: TreatmentPageContent["book"];
  form: TreatmentPageContent["form"];
  actions: TreatmentActions;
  submitLabel: string;
}) {
  return (
    <section
      id={book.id}
      className="relative isolate overflow-hidden bg-accent-dark text-white"
    >
      <svg
        viewBox="0 0 800 400"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-24 -z-10 w-4xl max-w-none text-white/10"
      >
        <path
          d="M40 330 C 140 150, 300 80, 460 110 S 700 200, 780 120"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
        <path
          d="M20 380 C 150 210, 310 150, 470 175 S 710 260, 790 190"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
      </svg>

      <div className="mx-auto grid w-full items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-20 lg:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)]">
        <div>
          <Eyebrow className="text-accent-soft">{book.eyebrow}</Eyebrow>
          <Heading
            text={book.title}
            className="mt-3 font-heading text-[clamp(2.1rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-tight"
          />
          <p className="mt-5 leading-relaxed text-white/75">{book.body}</p>

          <ul className="mt-8 grid max-w-md gap-4">
            {book.assurances.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <svg
                    viewBox="0 0 12 12"
                    className="size-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.5 6.2l2.3 2.3 4.7-4.9" />
                  </svg>
                </span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CtaButtons actions={actions} tone="dark" />
          </div>

          <div className="mt-10 grid max-w-xl gap-x-8 gap-y-5 border-t border-white/15 pt-8 text-sm sm:grid-cols-2">
            <a
              href={CLINIC_LINKS.map}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <PinIcon className="mt-0.5 size-4.5 shrink-0 text-accent-soft" />
              <span>
                <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                  Visit
                </span>
                <span className="mt-1 block text-white group-hover:underline">
                  Dubai Healthcare City
                </span>
              </span>
            </a>
            <div className="flex items-start gap-3">
              <ContactIcon
                kind="clock"
                className="mt-0.5 size-4.5 shrink-0 text-accent-soft"
              />
              <span>
                <span className="block text-[0.68rem] tracking-[0.16em] text-white/60 uppercase">
                  Open
                </span>
                <span className="mt-1 block text-white">{CLINIC.hours.days}</span>
                <span className="block text-white/75">{CLINIC.hours.weekdays}</span>
              </span>
            </div>
          </div>
        </div>

        <div
          id="appointment"
          className="min-w-0 scroll-mt-28 rounded-md bg-white p-6 text-text shadow-elevated sm:p-8"
        >
          <p className="font-heading text-[1.4rem] leading-none font-medium tracking-tight">
            {book.formTitle}
          </p>
          <p className="mt-2.5 mb-6 text-sm leading-relaxed text-muted">{book.formNote}</p>
          <ConsultForm
            variant="closing"
            concerns={form.concerns}
            submitLabel={submitLabel}
            footnote={form.footnote}
            source={form.source}
          />
        </div>
      </div>
    </section>
  );
}
