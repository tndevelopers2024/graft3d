import Hero from "@/components/sections/polycarbonate-pc/Hero";
import Overview from "@/components/sections/polycarbonate-pc/Overview";
import KeyMaterialHighlights from "@/components/sections/polycarbonate-pc/KeyMaterialHighlights";
import MechanicalProperties from "@/components/sections/polycarbonate-pc/MechanicalProperties";
import Applications from "@/components/sections/polycarbonate-pc/Applications";
import PrintingProcessability from "@/components/sections/polycarbonate-pc/PrintingProcessability";
import Sterilisation from "@/components/sections/polycarbonate-pc/Sterilisation";
import Certifications from "@/components/sections/polycarbonate-pc/Certifications";
import CtaSection from "@/components/sections/polycarbonate-pc/CtaSection";
import FaqSection from "@/components/sections/polycarbonate-pc/FaqSection";

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.polycarbonate;

export default function PolycarbonatePcPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Overview />
      <KeyMaterialHighlights />
      <MechanicalProperties />
      <Applications />
      <PrintingProcessability />
      <Sterilisation />
      <Certifications />
      <CtaSection />
      <FaqSection />
    </main>
  );
}
