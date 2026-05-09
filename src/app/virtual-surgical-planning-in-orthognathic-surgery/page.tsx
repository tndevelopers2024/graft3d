import React from 'react';
import VspHeroSection from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspHeroSection';
import VspOverview from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspOverview';
import VspHowItWorksGrid from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspHowItWorksGrid';
import VspBenefits from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspBenefits';
import VspCta from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspCta';
import VspFaqs from '@/components/sections/virtual-surgical-planning-in-orthognathic-surgery/VspFaqs';

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.vspOrthognathic;

export default function VirtualSurgicalPlanningPage() {
    return (
        <main className="min-h-screen bg-white">
            <VspHeroSection />
            <VspOverview />
            <VspHowItWorksGrid />
            <VspBenefits />
            <VspCta />
            <VspFaqs />
        </main>
    );
}
