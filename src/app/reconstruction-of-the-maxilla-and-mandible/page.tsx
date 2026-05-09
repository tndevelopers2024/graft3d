import React from "react";
import HeroSection from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/HeroSection";
import Overview from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/Overview";
import ImmediateFibulaSection from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/ImmediateFibulaSection";
import VirtualSurgicalPlanning from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/VirtualSurgicalPlanning";
import AdvantagesSection from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/AdvantagesSection";
import PrePlannedImplants from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/PrePlannedImplants";
import BenefitsAndImpact from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/BenefitsAndImpact";
import FaqSection from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/FaqSection";
import BottomCta from "@/components/sections/reconstruction-of-the-maxilla-and-mandible/BottomCta";

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.maxillaMandibleReconstruction;

export default function ReconstructionPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full font-poppins">
            <HeroSection />
            <Overview />
            <ImmediateFibulaSection />
            <VirtualSurgicalPlanning />
            <AdvantagesSection />
            <PrePlannedImplants />
            <BenefitsAndImpact />
            <FaqSection />
            <BottomCta />
        </main>
    );
}
