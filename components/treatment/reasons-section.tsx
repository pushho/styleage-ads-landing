import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";
import { ArrowRight, ReasonIconMark } from "./icons";

export function ReasonsSection({
  why,
}: {
  why: NonNullable<TreatmentPageContent["why"]>;
}) {
  return (
    <section
      id={why.id}
      className="relative flex flex-col overflow-hidden border-t border-border lg:grid lg:min-h-112 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)_clamp(17rem,25vw,24rem)] 2xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)_27rem]"
    >
      <div className="relative z-10 order-1 px-5 pt-16 sm:px-8 lg:order-none lg:flex lg:flex-col lg:justify-center lg:py-16 lg:pr-8 lg:pl-10 xl:pl-14">
        <Eyebrow>{why.eyebrow}</Eyebrow>
        <Heading
          text={why.title}
          className={
            why.titleClassName ??
            "mt-3 max-w-[22ch] font-heading text-[clamp(1.9rem,2.8vw,2.6rem)] leading-[1.12] font-medium tracking-tight"
          }
        />
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {why.intro}
        </p>
        <a
          href={why.link.href}
          className="mt-8 inline-flex w-full items-center justify-center gap-2 border border-accent px-5 py-3 text-sm text-accent-dark transition-colors hover:bg-accent hover:text-white sm:w-fit"
        >
          {why.link.label}
          <ArrowRight className="size-3.5" />
        </a>
      </div>

      <ul className="relative z-10 order-3 -mt-6 grid gap-3 px-5 pb-16 sm:-mt-10 sm:grid-cols-2 sm:gap-4 sm:px-8 lg:order-none lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:gap-8 lg:px-0 lg:py-16">
        {why.reasons.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-lg border border-border bg-white p-4 shadow-soft lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent lg:mt-0.5 lg:size-auto lg:bg-transparent">
              <ReasonIconMark kind={item.icon} className="size-6 lg:size-8" />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-base font-medium tracking-tight">
                {item.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted lg:max-w-[30ch]">
                {item.body}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <figure className="relative order-2 mt-4 aspect-square overflow-hidden sm:aspect-video lg:order-none lg:mt-0 lg:aspect-auto">
        <img
          src={why.image.src}
          alt={why.image.alt}
          className={`absolute inset-0 h-full w-full object-cover ${why.image.className ?? ""}`}
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1/3 bg-linear-to-r from-surface to-transparent lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-surface to-transparent lg:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-surface via-surface/60 to-transparent lg:hidden"
        />
      </figure>
    </section>
  );
}
