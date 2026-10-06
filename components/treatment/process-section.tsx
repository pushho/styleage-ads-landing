import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";
import { ArrowRight } from "./icons";

export function ProcessSection({
  process,
}: {
  process: NonNullable<TreatmentPageContent["process"]>;
}) {
  return (
    <section id={process.id} className="border-t border-border">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <Eyebrow>{process.eyebrow}</Eyebrow>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Heading
            text={process.title}
            className={
              process.titleClassName ??
              "mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-xl leading-relaxed text-muted 2xl:max-w-3xl">
            {process.intro}
          </p>
        </div>

        <ol className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {process.steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:block">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-xs font-medium text-white tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < process.steps.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute top-11 -bottom-6 left-4.5 w-px bg-accent-soft lg:hidden"
                  />
                  <ArrowRight className="absolute top-2.5 -right-5 hidden size-4 translate-x-1/2 text-accent-soft-dark lg:block" />
                </>
              )}
              <div>
                <h3 className="font-heading text-lg leading-tight font-medium tracking-tight lg:mt-5">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
