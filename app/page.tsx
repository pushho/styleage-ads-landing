import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment/treatment-page";
import { hairTransplant } from "@/content/hair-transplant";

export const metadata: Metadata = {
  title: { absolute: hairTransplant.meta.title },
  description: hairTransplant.meta.description,
};

export default function Home() {
  return <TreatmentPage content={hairTransplant} />;
}
