import React from 'react';
import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import PackagesGrid from '@/components/sections/3d-packages/PackagesGrid';
import PackagesFaq from '@/components/sections/3d-packages/PackagesFaq';

export const metadata: Metadata = {
    title: '3D Packages - Medical 3D Printing Solutions | Graft3D',
    description: 'Explore our comprehensive 3D printing packages for healthcare including Digital Dentistry, PSI, Orthotic Devices, HD Prosthesis, Anatomical Models, and Surgical Planning solutions.',
    alternates: {
        canonical: '/3d-packages',
    },
    openGraph: {
        title: '3D Packages - Medical 3D Printing Solutions | Graft3D',
        description: 'Comprehensive 3D printing packages for hospitals and surgeons with end-to-end digital workflow solutions.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: '3D Packages - Graft3D Healthcare Solutions',
            },
        ],
    },
};

export default function ThreeDPackagesPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <PageHero
                title="3D"
                titleAccent="PACKAGES"
                description="We Graft3D healthcare have been trusted partners for hospitals and surgeons to provide an end-to-end digital workflow by adding appropriate medical 3D scanners, medical image conversion, lab CAD modeling software, and healthcare 3D printers."
            />

            {/* Packages Grid Section */}
            <PackagesGrid />

            {/* FAQs Section */}
            <PackagesFaq />

        </main>
    );
}
