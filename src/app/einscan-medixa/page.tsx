
import React from 'react';
import Hero from '@/components/sections/einscan-medixa/Hero';
import Overview from '@/components/sections/einscan-medixa/Overview';
import CoreFeatures from '@/components/sections/einscan-medixa/CoreFeatures';
import TechnicalSpecifications from '@/components/sections/einscan-medixa/TechnicalSpecifications';
import Workflow from '@/components/sections/einscan-medixa/Workflow';
import DemoVideo from '@/components/sections/einscan-medixa/DemoVideo';
import ClinicalApplications from '@/components/sections/einscan-medixa/ClinicalApplications';
import Advantages from '@/components/sections/einscan-medixa/Advantages';
import ComplianceSafety from '@/components/sections/einscan-medixa/ComplianceSafety';
import EinscanMedixaFaq from '@/components/sections/einscan-medixa/EinscanMedixaFaq';

import { PAGE_METADATA } from '@/lib/metadata';
export const metadata = PAGE_METADATA.einscanMedixa;

export default function EinscanMedixaPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <CoreFeatures />
            <TechnicalSpecifications />
            <Workflow />
            <DemoVideo />
            <ClinicalApplications />
            <Advantages />
            <ComplianceSafety />
            <EinscanMedixaFaq />

        </main>
    );
}
