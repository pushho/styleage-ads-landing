import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function LimitsSection({
  limits,
}: {
  limits: NonNullable<TreatmentPageContent["limits"]>;
}) {
  return (
    <section id={limits.id} className="border-t border-border bg-white">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <Eyebrow>{limits.eyebrow}</Eyebrow>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Heading
            text={limits.title}
            className={
              limits.titleClassName ??
              "mt-3 max-w-[20ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-xl leading-relaxed text-muted 2xl:max-w-3xl">
            {limits.intro}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {limits.items.map((item) => (
            <li key={item.title} className="rounded-md border border-border bg-surface p-6">
              <h3 className="font-heading text-lg font-medium tracking-tight">
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
