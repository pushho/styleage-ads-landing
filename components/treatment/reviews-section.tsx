import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";
import { ArrowRight } from "./icons";

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
          <a href={reviews.url} className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark">
            View all reviews
            <ArrowRight className="size-3.5" />                       
          </a>
        </div>
      </div>
    </section>
  );
}

function Stars({ score }: { score: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} fill={Math.min(1, Math.max(0, score - index))} />
      ))}
    </span>
  );
}

function Star({ fill }: { fill: number }) {
  return (
    <span className="relative block size-3.5">
      <StarIcon className="text-accent-soft" />
      <span
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${fill * 100}%` }}
      >
        <StarIcon className="text-accent" />
      </span>
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-4 shrink-0" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`size-3.5 ${className ?? ""}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 1.4l1.7 3.5 3.9.6-2.8 2.7.7 3.8L8 10.2l-3.5 1.8.7-3.8L2.4 5.5l3.9-.6L8 1.4z"
      />
    </svg>
  );
}
