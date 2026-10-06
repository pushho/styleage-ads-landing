import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment/treatment-page";
import { laserHairRemoval } from "@/content/laser-hair-removal";

export const metadata: Metadata = {
  title: { absolute: laserHairRemoval.meta.title },
  description: laserHairRemoval.meta.description,
};

export default function LaserHairRemovalPage() {
  return <TreatmentPage content={laserHairRemoval} />;
}
