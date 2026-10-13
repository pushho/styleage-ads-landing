import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function ServicesSection({
  services,
}: {
  services: NonNullable<TreatmentPageContent["services"]>;
}) {
  return (
    <section
      id={services.id}
      className="scroll-mt-32 border-t border-border bg-white lg:scroll-mt-24"
    >
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Heading
            text={services.title}
            className={
              services.titleClassName ??
              "mt-3 max-w-[20ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-xl leading-relaxed text-muted 2xl:max-w-3xl">
            {services.intro}
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-md border border-border bg-surface p-6 shadow-soft"
            >
              <span aria-hidden="true" className="h-0.5 w-8 bg-accent" />
              <h3 className="mt-5 font-heading text-lg font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
