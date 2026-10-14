"use client";

import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import type { TreatmentPageContent } from "@/lib/treatment";
import { ArrowRight, ChevronUp, GoogleIcon, Stars } from "./icons";

const STAR_COLOR = "text-[#F5871F]";

export function ReviewsBadge({
  reviews,
}: {
  reviews: NonNullable<TreatmentPageContent["reviews"]>;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef("");
  const panelId = useId();
  const score = reviews.score.toFixed(1);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const hoverTo = (next: boolean) => (event: PointerEvent) => {
    if (event.pointerType === "mouse") setOpen(next);
  };

  return (
    <div
      ref={rootRef}
      onPointerEnter={hoverTo(true)}
      onPointerLeave={hoverTo(false)}
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-4 z-50 md:bottom-6 md:left-6"
    >
      <div
        className={`absolute bottom-full left-0 pb-3 transition duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <div
          id={panelId}
          role="region"
          aria-label={`${reviews.source} reviews`}
          className="w-[min(21rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-white shadow-elevated"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <span className="flex items-center gap-2 font-heading text-sm font-medium tracking-tight">
              <GoogleIcon />
              {reviews.source} reviews
            </span>
            <span className="text-xs text-muted tabular-nums">
              {score} · {reviews.count}
            </span>
          </div>
          <ul className="max-h-[min(22rem,calc(100dvh-18rem))] divide-y divide-border overflow-y-auto overscroll-contain">
            {reviews.items.map((item) => (
              <li key={item.name} className="px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-wash font-heading text-sm text-accent-dark"
                  >
                    {item.name.slice(0, 1)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-heading text-sm leading-tight font-medium tracking-tight">
                      {item.name}
                    </span>
                    <span className="block text-[0.7rem] text-muted">{item.detail}</span>
                  </span>
                </div>
                <p className="mt-2 line-clamp-4 text-[0.8rem] leading-relaxed text-text/85">
                  “{item.quote}”
                </p>
              </li>
            ))}
          </ul>
          <a
            href={reviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-border px-4 py-3 text-sm text-accent-dark transition-colors hover:bg-accent-wash"
          >
            Read all reviews on {reviews.source}
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onPointerDown={(event) => {
          pointerRef.current = event.pointerType;
        }}
        onClick={() => {
          const viaMouse = pointerRef.current === "mouse";
          pointerRef.current = "";
          setOpen((current) => (viaMouse ? true : !current));
        }}
        className="flex items-stretch rounded-lg border border-border bg-white text-left shadow-card transition-shadow hover:shadow-elevated"
      >
        <span className="sr-only">
          Rated {score} out of 5 from {reviews.count} on {reviews.source}. Show reviews.
        </span>
        <span aria-hidden="true" className="flex items-center px-3 sm:px-4">
          <GoogleIcon className="size-6 shrink-0 sm:size-7" />
        </span>
        <span
          aria-hidden="true"
          className="flex flex-col justify-center border-l border-border py-2 pr-3 pl-3 sm:py-2.5 sm:pl-4"
        >
          <span className="flex items-center gap-2">
            <span
              className={`font-heading text-lg leading-none font-medium tabular-nums sm:text-xl ${STAR_COLOR}`}
            >
              {score}
            </span>
            <Stars
              score={reviews.score}
              className="size-3.5 sm:size-4"
              filledClassName={STAR_COLOR}
              emptyClassName="text-[#F5871F]/25"
            />
          </span>
          <span className="mt-1 text-[0.62rem] tracking-[0.12em] text-text/80 uppercase">
            {reviews.count}
          </span>
        </span>
        <span aria-hidden="true" className="flex items-center border-l border-border px-2.5 text-muted">
          <ChevronUp className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
    </div>
  );
}
