import { CLINIC, CLINIC_LINKS } from "@/lib/clinic";
import type { NavLink, TreatmentActions, TreatmentPageContent } from "@/lib/treatment";
import { CtaButtons } from "./cta-buttons";
import { BrandMark, ContactIcon, ArrowRight } from "./icons";

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/styleage.clinic/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/styleage.clinic/",
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/styleage-clinic/",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
];

export function SiteFooter({
  nav,
  footer,
  actions,
}: {
  nav: NavLink[];
  footer: TreatmentPageContent["footer"];
  actions: TreatmentActions;
}) {
  return (
    <footer className="bg-white pb-28 md:pb-0">
      <div className="mx-auto grid w-full gap-x-6 gap-y-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="#top" className="flex w-fit items-center gap-3">
            <BrandMark />
            <span>
              <span className="block font-heading text-xl leading-none tracking-tight">
                {CLINIC.name}
              </span>
              <span className="mt-1 block text-[0.62rem] tracking-[0.18em] text-muted uppercase">
                {CLINIC.tagline}
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{footer.blurb}</p>
          <div className="mt-6 max-w-xs hidden md:block">
            <CtaButtons actions={actions} primary={footer.primary} stack />
          </div>
          <ul className="mt-6 flex gap-2">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${CLINIC.name} on ${item.label}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-accent-dark transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    {item.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
            Explore
          </p>
          <ul className="mt-2 grid text-sm lg:mt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-text/80 transition-colors hover:text-accent-dark lg:min-h-9"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
            Contact
          </p>
          <ul className="mt-2 grid text-sm lg:mt-3">
            <li>
              <a
                href={CLINIC_LINKS.phone}
                className="inline-flex min-h-10 items-center gap-2 text-text/80 hover:text-accent-dark lg:min-h-9"
              >
                <ContactIcon kind="phone" className="size-4 shrink-0 text-accent" />
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a
                href={actions.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 text-text/80 hover:text-accent-dark lg:min-h-9"
              >
                <ContactIcon kind="whatsapp" className="size-4 shrink-0 text-accent" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={CLINIC_LINKS.email}
                className="inline-flex min-h-10 items-center gap-2 break-all text-text/80 hover:text-accent-dark lg:min-h-9"
              >
                <ContactIcon kind="mail" className="size-4 shrink-0 text-accent" />
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
            Visit
          </p>
          <address className="mt-4 text-sm leading-relaxed text-text/80 not-italic">
            {CLINIC.legalName}
            {CLINIC.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={CLINIC_LINKS.map}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 text-sm text-accent-dark hover:underline"
          >
            Get directions
            <ArrowRight className="size-3.5" />
          </a>
          <p className="mt-5 text-sm leading-relaxed text-text/80">
            {CLINIC.hours.days}
            <span className="block">{CLINIC.hours.weekdays}</span>
          </p>
          <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-muted">
            {CLINIC.hours.note}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full flex-col gap-3 px-5 py-6 text-xs leading-relaxed text-muted sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-10">
          <p>
            © {new Date().getFullYear()} {CLINIC.name} {CLINIC.tagline}. All rights
            reserved.
          </p>
          <p className="max-w-xl md:text-right">{footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
