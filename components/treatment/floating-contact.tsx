import { CLINIC_LINKS } from "@/lib/clinic";
import type { TreatmentActions } from "@/lib/treatment";
import { ContactIcon } from "./icons";

export function FloatingContact({ actions }: { actions: TreatmentActions }) {
  const base =
    "flex size-14 items-center justify-center rounded-full text-white shadow-elevated transition-transform hover:scale-105";

  return (
    <div className="fixed right-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={CLINIC_LINKS.phone}
        aria-label={actions.callLabel}
        title={actions.callLabel}
        className={`${base} bg-accent-dark hover:bg-accent`}
      >
        <ContactIcon kind="phone" className="size-6" />
      </a>
      <a
        href={actions.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={actions.whatsappLabel}
        title={actions.whatsappLabel}
        className={`${base} bg-[#25D366]`}
      >
        <ContactIcon kind="whatsapp" className="size-7" />
      </a>
    </div>
  );
}
