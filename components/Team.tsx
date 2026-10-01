"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Eyas Medanat",
    role: "Specialist Surgeon",
    image: "/team/team-01.jpg",
  },
  {
    id: 2,
    name: "Hanan Almasri",
    role: "Aesthetic General Practitioner",
    image: "/team/team-09.jpg",
  },
  {
    id: 7,
    name: "Basel Nazeh Mohammed",
    role: "Manager",
    image: "/team/team-59.jpg",
  },
  {
    id: 15,
    name: "Ilham Belkihel",
    role: "Receptionist",
    image: "/team/team-75.jpg",
  },
  {
    id: 13,
    name: "Nasir Mehmood",
    role: "HR & Accounts Manager",
    image: "/team/team-61.jpg",
  },
  {
    id: 12,
    name: "Sandi Hanna Ghrayed",
    role: "Marketing Coordinator",
    image: "/team/team-55.jpg",
  },
  {
    id: 14,
    name: "Abdulrahman Jamal almohammed",
    role: "Doctor's Coordinator",
    image: "/team/team-71.jpg",
  },
  {
    id: 11,
    name: "Ullah Alwani",
    role: "Receptionist",
    image: "/team/team-52.jpg",
  },
  {
    id: 10,
    name: "Zyvonie Documos Otero",
    role: "Accountant",
    image: "/team/team-47.jpg",
  },
  {
    id: 8,
    name: "Shudesna Uprety",
    role: "Registered Nurse",
    image: "/team/team-38.jpg",
  },
  {
    id: 6,
    name: "Russel Enriquez Tugade",
    role: "Office Coordinator",
    image: "/team/team-29.jpg",
  },
  {
    id: 3,
    name: "Telisha Rai",
    role: "Assistant Nurse",
    image: "/team/team-12.jpg",
  },
  {
    id: 4,
    name: "Glenza Cabanian Dumlao",
    role: "Laser Coordinator",
    image: "/team/team-20.jpg",
  },
  {
    id: 5,
    name: "Girlie Rubin Gunsi",
    role: "Laser Coordinator",
    image: "/team/team-24.jpg",
  },
];

export function Team() {
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

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id="team" className="border-t border-border">
      <div className="mx-auto w-full px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
              Our team
            </p>
            <h2 className="mt-3 max-w-[22ch] font-heading text-[clamp(2rem,3.4vw,2.85rem)] leading-[1.1] font-medium tracking-tight">
              The people you meet at our Dubai clinic.
            </h2>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous team members"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              className="flex size-11 items-center justify-center border border-accent text-accent-dark transition-colors hover:bg-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next team members"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              className="flex size-11 items-center justify-center border border-accent text-accent-dark transition-colors hover:bg-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {TEAM.map((member) => (
            <li
              key={member.id}
              className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <figure className="relative aspect-3/4 overflow-hidden rounded-lg bg-accent-wash">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 78vw"
                  className="object-cover object-[50%_20%]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-text/85 via-text/35 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
                  <span className="block text-[0.62rem] tracking-[0.18em] text-white/80 uppercase">
                    {member.role}
                  </span>
                  <span className="mt-1.5 block font-heading text-lg leading-snug font-medium tracking-tight">
                    {member.name}
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
