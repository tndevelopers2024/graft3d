import React from "react";
import HeroSection from "@/components/sections/patient-specific-implants-for-maxilla-and-mandible/HeroSection";
import Overview from "@/components/sections/patient-specific-implants-for-maxilla-and-mandible/Overview";
import AdvantagesSection from "@/components/sections/patient-specific-implants-for-maxilla-and-mandible/AdvantagesSection";
import TechnologiesSection from "@/components/sections/patient-specific-implants-for-maxilla-and-mandible/TechnologiesSection";
import PossibleComplicationsSection from "@/components/sections/patient-specific-implants-for-maxilla-and-mandible/PossibleComplicationsSection";
import FaqSection from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/FaqSection";
import BottomCta from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/BottomCta";

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.maxillaMandibleImplants;

export default function PatientSpecificImplantsForMaxillaAndMandiblePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between font-poppins">
      <HeroSection />
      <Overview />
      <TechnologiesSection />
      <AdvantagesSection />
      <PossibleComplicationsSection />
      <FaqSection />
      <BottomCta />
    </main>
  );
}


