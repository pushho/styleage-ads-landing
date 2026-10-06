import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function SuitabilitySection({
  suitability,
}: {
  suitability: NonNullable<TreatmentPageContent["suitability"]>;
}) {
  return (
    <section id={suitability.id} className="border-t border-border">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <Eyebrow>{suitability.eyebrow}</Eyebrow>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Heading
            text={suitability.title}
            className={
              suitability.titleClassName ??
              "mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-xl leading-relaxed text-muted 2xl:max-w-3xl">
            {suitability.intro}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {suitability.items.map((item) => (
            <li key={item.label} className="border-t border-border pt-5">
              <h3 className="font-heading text-lg font-medium tracking-tight">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
