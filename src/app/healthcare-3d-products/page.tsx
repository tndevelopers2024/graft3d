import React from 'react';
import type { Metadata } from 'next';
import HealthcareHero from '@/components/sections/healthcare-3d-products/HealthcareHero';
import FeaturedProducts from '@/components/sections/healthcare-3d-products/FeaturedProducts';
import ProductTabs from '@/components/sections/healthcare-3d-products/ProductTabs';
import Products3DFaqSection from '@/components/sections/healthcare-3d-products/Products3DFaqSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/healthcare-3d-products',
  },
    title: 'Healthcare 3D Products | Medical 3D Scanners, Printers & Software | Graft3D',
    description: 'Explore our comprehensive range of healthcare 3D products including medical 3D scanners, 3D printers, and specialized software for hospitals and medical professionals.',
    openGraph: {
        title: 'Healthcare 3D Products | Graft3D',
        description: 'Medical 3D scanners, printers, and software for healthcare professionals.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Healthcare 3D Products - Graft3D',
            },
        ],
    },
};

export default function Healthcare3DProductsPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <HealthcareHero />

            {/* Featured Products Section */}
            <FeaturedProducts />

            {/* Product Tabs Section */}
            <ProductTabs />

            {/* FAQ Section */}
            <Products3DFaqSection />

        </main>
    );
}
