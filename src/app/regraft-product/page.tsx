import React from 'react';
import ProductsHero from '@/components/sections/regraft/ProductsHero';
import ProductsGrid from '@/components/sections/regraft/ProductsGrid';
import ProductFAQ from '@/components/sections/regraft/ProductFAQ';

export const metadata = {
  alternates: {
    canonical: '/regraft-product',
  },
    title: 'ReGraft Products & FAQ | Graft3D',
    description: 'Explore the range of ReGraft products including patient-specific implants, surgical guides, and anatomical models.',
};

export default function RegraftProductsPage() {
    return (
        <main>
            <ProductsHero />
            <ProductsGrid />
            <ProductFAQ />
        </main>
    );
}
