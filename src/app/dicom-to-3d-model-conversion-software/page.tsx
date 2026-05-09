import React from 'react';
import Hero from '@/components/sections/dicom-to-3d-model-conversion-software/Hero';
import JumpNavigation from '@/components/sections/dicom-to-3d-model-conversion-software/JumpNavigation';
import Overview from '@/components/sections/dicom-to-3d-model-conversion-software/Overview';
import Features from '@/components/sections/dicom-to-3d-model-conversion-software/Features';
import Applications from '@/components/sections/dicom-to-3d-model-conversion-software/Applications';
import VideoGallery from '@/components/sections/dicom-to-3d-model-conversion-software/VideoGallery';
import CaseStudies from '@/components/sections/dicom-to-3d-model-conversion-software/CaseStudies';
import TrialForm from '@/components/sections/dicom-to-3d-model-conversion-software/TrialForm';
import RelatedProducts from '@/components/sections/dicom-to-3d-model-conversion-software/RelatedProducts';
import FaqSection from '@/components/sections/dicom-to-3d-model-conversion-software/FaqSection';

import { PAGE_METADATA } from '@/lib/metadata';
export const metadata = PAGE_METADATA.dicomSoftware;

export default function DicomSoftwarePage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <div className="max-w-[1200px] mx-auto px-4 lg:flex lg:gap-12 py-10">
                <div className="hidden lg:block w-[280px] shrink-0">
                    <JumpNavigation />
                </div>
                <div className="flex-1">
                    <section id="overview">
                        <Overview />
                    </section>
                    <section id="featuresandbenefits">
                        <Features />
                    </section>
                    <section id="applications">
                        <Applications />
                    </section>
                    <section id="videogallery">
                        <VideoGallery />
                    </section>
                    <section id="casestudy">
                        <CaseStudies />
                    </section>
                    <section id="request-trial">
                        <TrialForm />
                    </section>
                    <section id="related-products">
                        <RelatedProducts />
                    </section>
                </div>
            </div>
            <section id="faqs">
                <FaqSection />
            </section>
        </main>
    );
}
