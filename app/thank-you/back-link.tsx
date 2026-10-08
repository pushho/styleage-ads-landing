"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

function safeReturnPath(from: string | null) {
  if (!from || !from.startsWith("/") || from.startsWith("//") || from.includes("\\")) {
    return "/";
  }
  return from;
}

export function BackLink({ className, children }: { className: string; children: ReactNode }) {
  const from = useSearchParams().get("from");
  return (
    <Link href={safeReturnPath(from)} className={className}>
      {children}
    </Link>
  );
}
