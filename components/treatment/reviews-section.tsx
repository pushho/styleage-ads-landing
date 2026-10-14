import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";
import { ArrowRight, GoogleIcon, Stars } from "./icons";

export function ReviewsSection({
  reviews,
}: {
  reviews: NonNullable<TreatmentPageContent["reviews"]>;
}) {
  return (
    <section id={reviews.id} className="border-t border-border">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <Eyebrow>{reviews.eyebrow}</Eyebrow>
            <Heading
              text={reviews.title}
              className={
                reviews.titleClassName ??
                "mt-3 font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight"
              }
            />
            <p className="mt-4 max-w-xl leading-relaxed text-muted">{reviews.intro}</p>
          </div>

          <div className="w-full shrink-0 rounded-md border border-border bg-white px-5 py-4 sm:w-fit sm:min-w-52">
            <p className="font-heading text-4xl leading-none font-medium tracking-tight tabular-nums">
              {reviews.score.toFixed(1)}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <Stars score={reviews.score} />
              <span className="sr-only">
                {reviews.score.toFixed(1)} out of 5 from {reviews.count} on{" "}
                {reviews.source}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{reviews.count}</p>
            <p className="mt-2 flex items-center gap-1.5 text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
              {reviews.source.toLowerCase() === "google" && <GoogleIcon />}
              {reviews.source}
            </p>
          </div>
        </div>

        <ul className="-mx-5 mt-12 flex scroll-px-5 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
          {reviews.items.map((item) => (
            <li
              key={item.name}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-md border border-border bg-white p-6 sm:w-[46%] lg:w-auto"
            >
              <p className="text-[0.68rem] tracking-[0.16em] text-accent-dark uppercase">
                {item.detail}
              </p>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-wash font-heading text-sm text-accent-dark"
                >
                  {item.name.slice(0, 1)}
                </span>
                <span className="font-heading text-base font-medium tracking-tight">
                  {item.name}
                </span>
              </footer>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center">
          <a href={reviews.url} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark underline">
            View all google reviews
            <ArrowRight className="size-3.5" />                       
          </a>
        </div>
      </div>
    </section>
  );
}