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


  return (
    <div
      ref={rootRef}
      className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-4 z-50 md:bottom-6 md:left-6"
    >
      <button
        type="button"
        onClick={() => {
          window.open(reviews.url, "_blank");
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
      </button>
    </div>
  );
}
