"use client";

import type { TreatmentPageContent } from "@/lib/treatment";
import { Eyebrow, Heading } from "./heading";

export function VideosSection({
  videos,
}: {
  videos: NonNullable<TreatmentPageContent["videos"]>;
}) {
  return (
    <section id={videos.id} className="border-t border-border">
      <div className="mx-auto grid w-full gap-8 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12 lg:px-10">
        <div>
          <Eyebrow>{videos.eyebrow}</Eyebrow>
          <Heading
            text={videos.title}
            className={
              videos.titleClassName ??
              "mt-3 max-w-[16ch] font-heading text-[clamp(1.75rem,2.8vw,2.4rem)] leading-[1.1] font-medium tracking-tight"
            }
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {videos.intro}
          </p>
        </div>

        <ul className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 [scrollbar-width:none] sm:mx-0 sm:gap-4 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {videos.items.map((item) => (
            <li key={item.src} className="w-[44%] shrink-0 snap-start sm:w-48 lg:w-auto">
              <figure>
                <div className="relative aspect-9/16 overflow-hidden rounded-md bg-accent-wash">
                  <video
                    src={item.src}
                    poster={item.poster}
                    controls
                    playsInline
                    preload="none"
                    aria-label={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onPlay={(event) => {
                      const current = event.currentTarget;
                      current
                        .closest("section")
                        ?.querySelectorAll("video")
                        .forEach((video) => {
                          if (video !== current) video.pause();
                        });
                    }}
                  />
                </div>
                <figcaption className="mt-2.5">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="font-heading text-sm leading-snug font-medium tracking-tight">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-xs text-muted tabular-nums">
                      {item.detail}
                    </span>
                  </span>
                  <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
