import React from 'react';
import Hero from '@/components/sections/3d-printing-package-for-facial-prosthesis/Hero';
import Overview from '@/components/sections/3d-printing-package-for-facial-prosthesis/Overview';
import WorkflowPortfolio from '@/components/sections/3d-printing-package-for-facial-prosthesis/WorkflowPortfolio';
import ProductBundles from '@/components/sections/3d-printing-package-for-facial-prosthesis/ProductBundles';
import Benefits from '@/components/sections/3d-printing-package-for-facial-prosthesis/Benefits';
import FaqSection from '@/components/sections/3d-printing-package-for-facial-prosthesis/FaqSection';
import BookDemo from '@/components/sections/3d-printing-package-for-facial-prosthesis/BookDemo';
import BlogsSection from '@/components/sections/3d-printing-package-for-facial-prosthesis/BlogsSection';
import GallerySection from '@/components/sections/3d-printing-package-for-facial-prosthesis/GallerySection';

import { PAGE_METADATA } from '@/lib/metadata';
export const metadata = PAGE_METADATA.facialProsthesisPackage;

export default function FacialProsthesisPackagePage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <WorkflowPortfolio />
            <ProductBundles />
            <Benefits />
            <FaqSection />
            <BookDemo />
            <GallerySection />
            <BlogsSection />
        </main>
    );
}
