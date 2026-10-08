import { ConsultForm } from "@/components/consult-form";
import type { TreatmentPageContent } from "@/lib/treatment";
import { Heading } from "./heading";

export function HeroSection({
  hero,
  form,
  submitLabel,
}: {
  hero: TreatmentPageContent["hero"];
  form: TreatmentPageContent["form"];
  submitLabel: string;
}) {
  return (
    <section className="lg:grid lg:min-h-[max(30rem,80svh)] lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
      <figure className="relative overflow-hidden bg-surface">
        <div className="relative aspect-4/3 sm:aspect-video lg:absolute lg:inset-0 lg:aspect-auto">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className={`absolute inset-0 h-full w-full object-cover ${hero.image.className ?? ""}`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-1/2 bg-linear-to-r from-surface/90 via-surface/50 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-surface via-surface/70 to-transparent lg:hidden"
          />
        </div>
        <figcaption className="relative -mt-14 px-5 pb-2 sm:-mt-16 sm:px-8 lg:absolute lg:inset-y-0 lg:left-0 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:pb-0 xl:px-14">
          <p className="inline-flex items-center gap-2 text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-accent lg:hidden" />
            {hero.eyebrow}
          </p>
          <Heading
            as="h1"
            text={hero.title}
            className={
              hero.titleClassName ??
              "mt-3 max-w-[12ch] font-heading text-[clamp(2.25rem,9vw,2.75rem)] leading-[1.04] font-medium tracking-[-0.035em] lg:text-[clamp(2.2rem,3.6vw,3.6rem)]"
            }
          />
          <p
            className={
              hero.bodyClassName ??
              "mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base"
            }
          >
            {hero.body}
          </p>
        </figcaption>
      </figure>

      <div
        id="consult"
        className="mx-4 mt-8 mb-12 flex flex-col justify-center rounded-lg border border-border bg-white p-5 shadow-card sm:mx-8 sm:p-8 lg:m-0 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l lg:bg-surface lg:px-8 lg:py-6 lg:shadow-none xl:px-10"
      >
        <h2 className="font-heading text-[1.5rem] leading-none font-medium tracking-tight">
          {hero.formTitle}
        </h2>
        <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted">
          {hero.formBody}
        </p>
        <div className="mt-6 max-w-xl lg:max-w-none">
          <ConsultForm
            variant="aside"
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
