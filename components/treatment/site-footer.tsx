import { CLINIC, CLINIC_LINKS } from "@/lib/clinic";
import type { NavLink, TreatmentActions, TreatmentPageContent } from "@/lib/treatment";
import { CtaButtons } from "./cta-buttons";
import { BrandMark, ContactIcon, ArrowRight } from "./icons";

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
          <div className="mt-6 max-w-xs">
            <CtaButtons actions={actions} primary={footer.primary} stack />
          </div>
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
