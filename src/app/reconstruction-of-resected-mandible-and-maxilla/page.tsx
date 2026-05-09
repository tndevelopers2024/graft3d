import React from 'react';
import MaxillaHeroSection from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaHeroSection';
import MaxillaOverview from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaOverview';
import MaxillaDesignWorkflow from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaDesignWorkflow';
import MaxillaClinicalApplications from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaClinicalApplications';
import MaxillaAdvantagesGrid from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaAdvantagesGrid';
import MaxillaCta from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaCta';
import MaxillaFaqs from '@/components/sections/reconstruction-of-resected-mandible-and-maxilla/MaxillaFaqs';

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.resectedMandibleMaxilla;

export default function ReconstructionOfResectedMandibleAndMaxillaPage() {
    return (
        <main className="min-h-screen bg-white">
            <MaxillaHeroSection />
            <MaxillaOverview />
            <MaxillaDesignWorkflow />
            <MaxillaClinicalApplications />
            <MaxillaAdvantagesGrid />
            <MaxillaCta />
            <MaxillaFaqs />
        </main>
    );
}
