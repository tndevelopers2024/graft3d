import React from 'react';
import Hero from '@/components/sections/human-body-parts-3d-scanner/Hero';
import JumpNavigation from '@/components/sections/human-body-parts-3d-scanner/JumpNavigation';
import Overview from '@/components/sections/human-body-parts-3d-scanner/Overview';
import Features from '@/components/sections/human-body-parts-3d-scanner/Features';
import Specifications from '@/components/sections/human-body-parts-3d-scanner/Specifications';
import Applications from '@/components/sections/human-body-parts-3d-scanner/Applications';
import VideoGallery from '@/components/sections/human-body-parts-3d-scanner/VideoGallery';
import CaseStudies from '@/components/sections/human-body-parts-3d-scanner/CaseStudies';
import TrialForm from '@/components/sections/human-body-parts-3d-scanner/TrialForm';
import RelatedProducts from '@/components/sections/human-body-parts-3d-scanner/RelatedProducts';
import FaqSection from '@/components/sections/human-body-parts-3d-scanner/FaqSection';

export const metadata = {
  alternates: {
    canonical: '/human-body-parts-3d-scanner',
  },
    title: 'Einscan Human - Human Body and Body Parts 3D Scanner | Graft3D',
    description: 'The EinScan H / HX series pioneers a hybrid light source technology, integrating LED and invisible infrared light for high-quality human body 3D scanning.',
};

export default function HumanScannerPage() {
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
                    <section id="features-benefits">
                        <Features />
                    </section>
                    <section id="specifications">
                        <Specifications />
                    </section>
                    <section id="applications">
                        <Applications />
                    </section>
                    <section id="video-gallery">
                        <VideoGallery />
                    </section>
                    <section id="case-studies">
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
