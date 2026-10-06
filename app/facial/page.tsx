import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment/treatment-page";
import { facial } from "@/content/facial";

export const metadata: Metadata = {
  title: { absolute: facial.meta.title },
  description: facial.meta.description,
};

export default function FacialPage() {
  return <TreatmentPage content={facial} />;
}
