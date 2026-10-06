import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function RecoverySection({
  recovery,
}: {
  recovery: NonNullable<TreatmentPageContent["recovery"]>;
}) {
  return (
    <section id={recovery.id} className="border-t border-border">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <Eyebrow>{recovery.eyebrow}</Eyebrow>
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Heading
            text={recovery.title}
            className={
              recovery.titleClassName ??
              "mt-3 max-w-[16ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-xl leading-relaxed text-muted 2xl:max-w-3xl">
            {recovery.intro}
          </p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5">
          {recovery.items.map((item) => (
            <li key={item.when} className="border-t border-accent-soft pt-5">
              <p className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                {item.when}
              </p>
              <h3 className="mt-2 font-heading text-lg font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
