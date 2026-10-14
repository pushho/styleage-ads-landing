import type { MethodIcon, ReasonIcon } from "@/lib/treatment";

export function BrandMark() {
  return (
    <span className="relative block size-10 shrink-0 overflow-hidden">
      <img
        src="/styleage-logo.png"
        alt=""
        className="absolute top-0 left-1/2 w-18 max-w-none -translate-x-1/2"
        width={128}
        height={128}
      />
    </span>
  );
}

export function PinIcon({ className = "size-4 shrink-0" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 14.5s4.5-4.2 4.5-8a4.5 4.5 0 0 0-9 0c0 3.8 4.5 8 4.5 8z" />
      <circle cx="8" cy="6.5" r="1.6" />
    </svg>
  );
}

export function ContactIcon({
  kind,
  className,
}: {
  kind: "phone" | "whatsapp" | "mail" | "clock";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "phone" && (
        <path d="M5.5 3.5h3l1.5 4.2-2 1.3a11.5 11.5 0 0 0 7 7l1.3-2 4.2 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3.5 5.5a2 2 0 0 1 2-2z" />
      )}
      {kind === "whatsapp" && (
        <>
          <path d="M3.5 20.5l1.3-4.3a8.6 8.6 0 1 1 3.1 3.1z" />
          <path d="M9.2 8.3c.2-.4.5-.5.8-.5h.5l.9 2.1-.7.9a5.2 5.2 0 0 0 2.5 2.5l.9-.7 2.1.9v.5c0 .3-.1.6-.5.8-1.6.9-4.2-.3-5.6-1.8-1.4-1.4-2.6-4-1.7-5.7z" />
        </>
      )}
      {kind === "mail" && (
        <>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="M4 6.5l8 6 8-6" />
        </>
      )}
      {kind === "clock" && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </>
      )}
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}

export function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 10l4-4 4 4" />
    </svg>
  );
}

export function ReasonIconMark({
  kind,
  className = "size-8",
}: {
  kind: ReasonIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {kind === "surgeon" && (
        <>
          <circle cx="16" cy="10" r="4.5" />
          <path d="M7 27v-2.5a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6V27" />
          <path d="M13 18.5l3 4 3-4" />
          <path d="M22 21.5v2.5a1.5 1.5 0 1 1-3 0" />
        </>
      )}
      {kind === "technology" && (
        <>
          <path d="M10 27v-3a8.5 8.5 0 1 1 12.4-7.6l1.8 3.6h-2v3.2a2.3 2.3 0 0 1-2.3 2.3H18v1.5" />
          <circle cx="15" cy="14" r="3" />
          <path d="M15 9.5V11M15 17v1.5M10.5 14H12M18 14h1.5" />
        </>
      )}
      {kind === "hairline" && (
        <>
          <path d="M10 27v-3a8.5 8.5 0 1 1 12.4-7.6l1.8 3.6h-2v3.2a2.3 2.3 0 0 1-2.3 2.3H18v1.5" />
          <path d="M9.5 13.5c1.5-3.5 5-5.2 9-4.4" strokeDasharray="1.4 1.8" />
        </>
      )}
      {kind === "discreet" && (
        <>
          <path d="M16 4.5l9 3.5v7c0 6-4 10.5-9 12.5-5-2-9-6.5-9-12.5V8z" />
          <path d="M16 20.5s-4.5-2.8-4.5-6a2.4 2.4 0 0 1 4.5-1.2 2.4 2.4 0 0 1 4.5 1.2c0 3.2-4.5 6-4.5 6z" />
        </>
      )}
      {kind === "course" && (
        <>
          <path d="M6 16h20" />
          <circle cx="8" cy="16" r="2.2" />
          <circle cx="14.7" cy="16" r="2.2" />
          <circle cx="21.3" cy="16" r="2.2" />
          <circle cx="26" cy="16" r="2.2" />
        </>
      )}
    </svg>
  );
}

export function MethodIconMark({ kind }: { kind: MethodIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      {kind === "prp" ? (
        <>
          <path d="M12 3.5c2.2 3 5 5.6 5 9a5 5 0 0 1-10 0c0-3.4 2.8-6 5-9z" />
          <path d="M12 11.5v3.5" />
        </>
      ) : (
        <>
          <path d="M7 20v-2.5a6.5 6.5 0 1 1 9.6-5.7l1.4 2.7h-1.5V17a2 2 0 0 1-2 2H13v1" />
          {kind === "fue" && (
            <>
              <circle cx="9" cy="9" r="0.6" fill="currentColor" />
              <circle cx="11.5" cy="7.6" r="0.6" fill="currentColor" />
              <circle cx="9.6" cy="12" r="0.6" fill="currentColor" />
              <circle cx="12.4" cy="10.6" r="0.6" fill="currentColor" />
            </>
          )}
          {kind === "sapphire" && <path d="M12 6.2l2.2 3.6h-4.4z" />}
          {kind === "dhi" && (
            <>
              <path d="M9 7.5l1.2 2M11.6 6.8l.6 2.2M8.6 10.8l1.4 1.6" />
              <path d="M13.4 9.6l1.8-1.8" />
            </>
          )}
          {kind === "fut" && <path d="M8.2 11.2h5.2" />}
          {kind === "beard" && (
            <path d="M8.4 12.2c.8 1.6 2 2.4 3.4 2.4s2.6-.8 3.4-2.4" />
          )}
          {kind === "brow" && <path d="M8.2 8.4c1.2-.8 2.4-.6 3.4.2" />}
        </>
      )}
    </svg>
  );
}

export function Stars({
  score,
  className = "size-3.5",
  filledClassName = "text-accent",
  emptyClassName = "text-accent-soft",
}: {
  score: number;
  className?: string;
  filledClassName?: string;
  emptyClassName?: string;
}) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={`relative block ${className}`}>
          <StarIcon className={`${className} ${emptyClassName}`} />
          <span
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${Math.min(1, Math.max(0, score - index)) * 100}%` }}
          >
            <StarIcon className={`${className} ${filledClassName}`} />
          </span>
        </span>
      ))}
    </span>
  );
}

function StarIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`block max-w-none ${className}`} aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 1.4l1.7 3.5 3.9.6-2.8 2.7.7 3.8L8 10.2l-3.5 1.8.7-3.8L2.4 5.5l3.9-.6L8 1.4z"
      />
    </svg>
  );
}

export function GoogleIcon({ className = "size-4 shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
