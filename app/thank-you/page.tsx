import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BrandMark } from "@/components/treatment/icons";
import { CLINIC } from "@/lib/clinic";
import { BackLink } from "./back-link";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

const linkClass =
  "inline-flex min-h-12 items-center justify-center gap-2 bg-accent-dark px-5 text-sm text-white transition-colors hover:bg-accent";

export default function ThankYouPage() {
  const backLabel = (
    <>
      <ArrowRight className="size-3.5 rotate-180" />
      Back to the previous page
    </>
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-5 py-16 text-text">
      <div className="w-full max-w-lg text-center">
        <div className="flex justify-center">
          <BrandMark />
        </div>
        <p className="mt-6 text-[0.68rem] tracking-[0.2em] text-accent-dark uppercase">
          Request received
        </p>
        <h1 className="mt-3 font-heading text-4xl tracking-tight sm:text-5xl">
          Thank you
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
          A coordinator from {CLINIC.name} will call or WhatsApp you on the number
          you gave to arrange your consultation.
        </p>
        <div className="mt-9">
          <Suspense
            fallback={
              <Link href="/" className={linkClass}>
                {backLabel}
              </Link>
            }
          >
            <BackLink className={linkClass}>{backLabel}</BackLink>
          </Suspense>
        </div>
      </div>
    </main>
  );
}
