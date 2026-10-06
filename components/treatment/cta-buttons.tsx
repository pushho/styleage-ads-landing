import { CLINIC_LINKS } from "@/lib/clinic";
import type { TreatmentActions } from "@/lib/treatment";
import { ArrowRight, ContactIcon } from "./icons";

export function CtaButtons({
  actions,
  primary,
  tone = "light",
  stack = false,
}: {
  actions: TreatmentActions;
  primary?: { label: string; href: string };
  tone?: "light" | "dark";
  stack?: boolean;
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm transition-colors";
  const secondary =
    tone === "dark"
      ? "border border-white/35 text-white hover:bg-white/10"
      : "border border-accent-dark/35 bg-white text-accent-dark hover:border-accent-dark hover:bg-accent-wash";

  return (
    <div
      className={
        stack ? "grid gap-2.5" : "flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
      }
    >
      {primary && (
        <a
          href={primary.href}
          className={`${base} bg-accent-dark text-white hover:bg-accent`}
        >
          {primary.label}
          <ArrowRight className="size-3.5" />
        </a>
      )}
      <a href={CLINIC_LINKS.phone} className={`${base} ${secondary}`}>
        <ContactIcon kind="phone" className="size-4" />
        {actions.callLabel}
      </a>
      <a
        href={actions.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${secondary}`}
      >
        <ContactIcon kind="whatsapp" className="size-4" />
        {actions.whatsappLabel}
      </a>
    </div>
  );
}
