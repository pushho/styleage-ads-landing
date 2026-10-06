import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";
import { ArrowRight, MethodIconMark } from "./icons";

export function MethodsSection({
  methods,
}: {
  methods: NonNullable<TreatmentPageContent["methods"]>;
}) {
  return (
    <section
      id={methods.id}
      className="scroll-mt-32 border-t border-border bg-white lg:scroll-mt-24"
    >
      <div className="lg:grid lg:grid-cols-2">
        <figure className="relative aspect-4/3 overflow-hidden bg-accent-wash sm:aspect-video lg:aspect-auto lg:min-h-136">
          <img
            src={methods.image.src}
            alt={methods.image.alt}
            className={`absolute inset-0 h-full w-full object-cover ${methods.image.className ?? ""}`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent lg:hidden"
          />
        </figure>
        <div className="flex flex-col justify-center px-5 pt-4 pb-10 sm:px-8 md:py-20 lg:px-14 xl:px-20">
          <Eyebrow>{methods.eyebrow}</Eyebrow>
          <Heading
            text={methods.title}
            className={
              methods.titleClassName ??
              "mt-3 max-w-[18ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-md leading-relaxed text-muted">{methods.intro}</p>
        </div>
      </div>
      <div className="mx-auto w-full px-5 pb-16 sm:px-8 lg:px-10 lg:pt-10">
        {methods.groups.map((group) => (
          <div key={group.id} className="mt-10 first:mt-0">
            <h3 className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              {group.id}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {group.note}
            </p>
            <div className="mt-4 grid items-start gap-3 lg:grid-cols-2">
              {methods.items
                .filter((item) => item.group === group.id)
                .map((item) => (
                  <details
                    key={item.name}
                    className="group rounded-md border border-border bg-white shadow-soft transition-shadow open:shadow-card hover:shadow-card"
                  >
                    <summary className="flex cursor-pointer items-center gap-3.5 px-4 py-4 sm:gap-4 sm:px-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-deep sm:size-11">
                        <MethodIconMark kind={item.icon} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-2">
                          <span className="font-heading text-[1.05rem] font-medium tracking-tight">
                            {item.name}
                          </span>
                          <span className="text-[0.68rem] tracking-[0.14em] text-accent-dark uppercase">
                            {item.full}
                          </span>
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-muted">
                          {item.summary}
                        </span>
                      </span>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent-dark transition-colors group-open:bg-accent-dark group-open:text-white">
                        <ArrowRight className="size-3.5 transition-transform group-open:rotate-90" />
                      </span>
                    </summary>
                    <p className="border-t border-border px-4 py-4 text-sm leading-relaxed text-muted sm:px-5 sm:pl-20">
                      {item.detail}
                    </p>
                  </details>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
