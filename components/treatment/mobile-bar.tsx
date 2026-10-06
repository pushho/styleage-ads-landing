import type { TreatmentActions } from "@/lib/treatment";
import { ContactIcon } from "./icons";

export function MobileBar({
  actions,
  appointmentLabel,
}: {
  actions: TreatmentActions;
  appointmentLabel: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-2">
        <a
          href={actions.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center gap-2 border border-accent-dark px-4 text-sm text-accent-dark"
        >
          <ContactIcon kind="whatsapp" className="size-4.5" />
          {actions.whatsappLabel}
        </a>
        <a
          href="#appointment"
          className="flex h-12 items-center justify-center bg-accent-dark text-sm text-white"
        >
          {appointmentLabel}
        </a>
      </div>
    </div>
  );
}
