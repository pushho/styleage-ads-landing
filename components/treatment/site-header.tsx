import { CLINIC, CLINIC_LINKS } from "@/lib/clinic";
import type { NavLink } from "@/lib/treatment";
import { BrandMark, ContactIcon } from "./icons";

export function SiteHeader({
  brandEyebrow,
  nav,
  appointmentLabel,
}: {
  brandEyebrow: string;
  nav: NavLink[];
  appointmentLabel: string;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <BrandMark />
          <span>
            <span className="block font-heading text-xl leading-none tracking-tight">
              {CLINIC.name}
            </span>
            <span className="mt-1 hidden text-[0.62rem] tracking-[0.18em] text-muted uppercase sm:block">
              {brandEyebrow}
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-text/80 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-text">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a
            href={CLINIC_LINKS.phone}
            className="hidden items-center gap-2 text-sm text-text/80 hover:text-accent-dark xl:inline-flex"
          >
            <ContactIcon kind="phone" className="size-4 text-accent" />
            {CLINIC.phone}
          </a>
          <a
            href={CLINIC_LINKS.phone}
            aria-label={`Call ${CLINIC.name}`}
            className="flex size-10 items-center justify-center rounded-full bg-accent-wash text-accent-dark md:hidden"
          >
            <ContactIcon kind="phone" className="size-4.5" />
          </a>
          <a
            href="#consult"
            className="hidden bg-accent-dark px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            {appointmentLabel}
          </a>
        </div>
      </div>
      <nav aria-label="Sections" className="border-t border-border/80 lg:hidden">
        <ul className="flex gap-1 overflow-x-auto px-3 py-1.5 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="inline-flex min-h-9 items-center px-2.5 text-[0.8rem] whitespace-nowrap text-text/75 hover:text-accent-dark"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
