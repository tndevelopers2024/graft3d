import React from 'react';
import Hero from '@/components/sections/3d-printing-packagefor-po-devices/Hero';
import Overview from '@/components/sections/3d-printing-packagefor-po-devices/Overview';
import WorkflowPortfolio from '@/components/sections/3d-printing-packagefor-po-devices/WorkflowPortfolio';
import ProductBundles from '@/components/sections/3d-printing-packagefor-po-devices/ProductBundles';
import Benefits from '@/components/sections/3d-printing-packagefor-po-devices/Benefits';
import FaqSection from '@/components/sections/3d-printing-packagefor-po-devices/FaqSection';
import BookDemo from '@/components/sections/3d-printing-packagefor-po-devices/BookDemo';
import BlogsSection from '@/components/sections/3d-printing-packagefor-po-devices/BlogsSection';
import GallerySection from '@/components/sections/3d-printing-packagefor-po-devices/GallerySection';

export const metadata = {
  alternates: {
    canonical: '/3d-printing-packagefor-po-devices',
  },
    title: '3D Printing Package for P&O Devices | Graft3D Healthcare',
    description: 'Graft3D offers a comprehensive 3D printing package for hospitals to fabricate personalized Prosthetics & Orthotics (P&O) devices using precise body scans and streamlined design workflows.',
};

export default function PODevicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <WorkflowPortfolio />
            <ProductBundles />
            <Benefits />
            <BookDemo />
            <BlogsSection />
            <GallerySection />
            <FaqSection />
        </main>
    );
}
