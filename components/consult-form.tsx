"use client";

import { FormEvent, useId, useRef, useState, type ReactNode } from "react";

const concerns = [
  { value: "hairline", label: "The hairline" },
  { value: "crown", label: "The crown" },
  { value: "density", label: "Overall density" },
  { value: "repair", label: "An earlier transplant" },
  { value: "opinion", label: "I want an opinion first" },
];

type Errors = {
  name?: string;
  phone?: string;
  concern?: string;
};

const sendError =
  "We could not send that just now. Please call or WhatsApp the clinic.";

export function ConsultForm({
  variant,
}: {
  variant: "desk" | "closing" | "aside";
}) {
  const baseId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [note, setNote] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sendingRef = useRef(false);

  function fieldId(name: string) {
    return `${baseId}-${name}`;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please give your name.";
    if (phone.replace(/\D/g, "").length < 8) {
      next.phone = "A full phone number, please.";
    }
    if (!concern) next.concern = "Choose what you want to talk about.";
    setErrors(next);
    setSubmitError("");
    if (Object.keys(next).length > 0 || sendingRef.current) return;

    sendingRef.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/consult.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          concern,
          note,
          sa_hp: honeypot,
        }),
      });
      const contentType = response.headers.get("content-type") ?? "";
      const payload = contentType.includes("application/json")
        ? ((await response.json()) as {
            ok?: boolean;
            error?: string;
            fields?: Errors;
          })
        : null;

      if (payload?.fields) setErrors(payload.fields);
      if (!response.ok || !payload?.ok) {
        setSubmitError(payload?.error || sendError);
        return;
      }
      setSent(true);
    } catch {
      setSubmitError(sendError);
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className={variant === "closing" ? "py-6" : "py-2"}>
        <p className="font-heading text-2xl tracking-tight text-text">
          Request received, {name.trim().split(" ")[0]}.
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
          Keep {phone.trim()} nearby. A clear photograph of the hairline, and
          one of the top of the head in daylight, will give the conversation a
          head start.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full min-w-0 max-w-full border-0 border-b border-border bg-transparent py-2 text-base text-text outline-none placeholder:text-muted focus:border-accent-dark";

  return (
    <form
      method="post"
      action="/api/consult.php"
      onSubmit={onSubmit}
      noValidate
      className="relative min-w-0"
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <input
          type="text"
          name="sa_hp"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>
      <div
        className={
          variant === "desk"
            ? "grid min-w-0 gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3"
            : variant === "aside"
              ? "grid min-w-0 gap-3.5"
              : "grid min-w-0 gap-5"
        }
      >
        <Field label="Name" id={fieldId("name")} error={errors.name}>
          <input
            id={fieldId("name")}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldId("name-error") : undefined}
          />
        </Field>
        <Field
          label="Phone or WhatsApp"
          id={fieldId("phone")}
          error={errors.phone}
        >
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="05X XXX XXXX"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? fieldId("phone-error") : undefined}
          />
        </Field>
        <Field
          label="What should we look at"
          id={fieldId("concern")}
          error={errors.concern}
          className={variant === "desk" ? "sm:col-span-2 xl:col-span-1" : undefined}
        >
          <div className="relative">
            <select
              id={fieldId("concern")}
              name="concern"
              value={concern}
              onChange={(event) => setConcern(event.target.value)}
              className={`${fieldClass} appearance-none pr-7`}
              aria-invalid={Boolean(errors.concern)}
              aria-describedby={
                errors.concern ? fieldId("concern-error") : undefined
              }
            >
              <option value="">Choose one</option>
              {concerns.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </Field>
        {variant === "closing" ? (
          <Field label="Anything we should know" id={fieldId("note")}>
            <textarea
              id={fieldId("note")}
              name="note"
              rows={3}
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className={`${fieldClass} resize-none`}
            />
          </Field>
        ) : null}
      </div>
      <div
        className={
          variant === "desk" ? "mt-6 lg:mt-7" : variant === "aside" ? "mt-5" : "mt-7"
        }
      >
        <button
          type="submit"
          disabled={sending}
          className={`cursor-pointer bg-accent-dark px-5 py-3 text-sm text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 ${
            variant === "aside" || variant === "closing" ? "w-full" : ""
          }`}
        >
          {sending ? "Sending…" : "Request a consult"}
        </button>
        {submitError ? (
          <p role="alert" className="mt-3 max-w-sm text-sm text-accent-dark">
            {submitError}
          </p>
        ) : null}
        <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted">
          Used only to reply. A sitting is never booked from a photograph alone.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  className,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={id} className={`block min-w-0 max-w-full ${className ?? ""}`}>
      <span className="mb-2 block text-[0.68rem] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      {children}
      <span
        id={`${id}-error`}
        className="mt-1 block text-xs text-accent-dark empty:hidden"
      >
        {error ?? ""}
      </span>
    </label>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 12 8"
      aria-hidden="true"
      className="pointer-events-none absolute top-3 right-0 h-2 w-3 text-muted"
    >
      <path
        d="M1 1.5 L6 6.5 L11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
