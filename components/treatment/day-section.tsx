import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function DaySection({
  day,
}: {
  day: NonNullable<TreatmentPageContent["day"]>;
}) {
  return (
    <section id={day.id} className="border-t border-border bg-white">
      <div className="mx-auto grid w-full gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10">
        <div>
          <Eyebrow>{day.eyebrow}</Eyebrow>
          <Heading
            text={day.title}
            className={
              day.titleClassName ??
              "mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-md leading-relaxed text-muted">{day.intro}</p>
        </div>
        <ol className="grid gap-6">
          {day.items.map((item, index) => (
            <li key={item.mark} className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-dark text-xs font-medium text-white tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-heading text-lg font-medium tracking-tight">
                  {item.mark}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  {item.body}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
