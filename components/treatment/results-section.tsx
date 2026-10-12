"use client";

import { useEffect, useRef, useState } from "react";
import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function ResultsSection({
  results,
}: {
  results: NonNullable<TreatmentPageContent["results"]>;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };

    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, []);

  const scrollBySlide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const left = track.scrollLeft;
    const target =
      direction === 1
        ? slides.find((slide) => slide.offsetLeft > left + 1)
        : slides.findLast((slide) => slide.offsetLeft < left - 1);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    track.scrollTo({
      left: target ? target.offsetLeft : direction === 1 ? track.scrollWidth : 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id={results.id} className="border-t border-border">
      <div className="mx-auto w-full px-5 py-12 sm:px-8 md:py-14 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Eyebrow>{results.eyebrow}</Eyebrow>
            <Heading
              text={results.title}
              className={
                results.titleClassName ??
                "mt-3 font-heading text-[clamp(1.75rem,2.8vw,2.35rem)] leading-[1.1] font-medium tracking-tight"
              }
            />
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {results.intro}
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous before and after photo"
              onClick={() => scrollBySlide(-1)}
              disabled={atStart}
              className="flex size-11 items-center justify-center border border-accent text-accent-dark transition-colors hover:bg-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next before and after photo"
              onClick={() => scrollBySlide(1)}
              disabled={atEnd}
              className="flex size-11 items-center justify-center border border-accent text-accent-dark transition-colors hover:bg-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="relative mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {results.items.map((item) => (
            <li key={item.src} className="shrink-0 snap-start">
              <figure>
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-auto max-w-none rounded-lg bg-accent-wash sm:h-64 lg:h-72"
                />
                {/* Zero width keeps the caption from widening the slide past its image. */}
                <figcaption className="mt-2 w-0 min-w-full text-xs leading-relaxed text-muted">
                  {item.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
          {results.note}
        </p>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"} />
    </svg>
  );
}
