import React from 'react';
import Hero from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/Hero';
import Features from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/Features';
import Specifications from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/Specifications';
import Gallery from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/Gallery';
import FaqSection from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/FaqSection';
import BookingSection from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/BookingSection';
import RelatedProducts from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/RelatedProducts';
import DownloadBrochure from '@/components/sections/einscan-h2-human-body-bodyparts-3d-scanner/DownloadBrochure';

export const metadata = {
  alternates: {
    canonical: '/einscan-h2-human-body-bodyparts-3d-scanner',
  },
    title: 'Einscan H2 - Human Body & Body Parts 3D Scanner | Graft3D',
    description: 'Exclusive HumanBody 3D scanner with advanced algorithm for body scan. Hybrid LED and Infrared VCSEL Light Source for high-quality human body 3D scanning.',
};

export default function EinscanH2Page() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <DownloadBrochure />
            <div className="max-w-[1200px] mx-auto px-4 py-10">
                <section id="features-benefits">
                    <Features />
                </section>
                <section id="specification">
                    <Specifications />
                </section>
                <section id="gallery">
                    <Gallery />
                </section>
                <section id="faqs">
                    <FaqSection />
                </section>
                <section id="book-demo">
                    <BookingSection />
                </section>
                <section id="related-products">
                    <RelatedProducts />
                </section>
            </div>
        </main>
    );
}
