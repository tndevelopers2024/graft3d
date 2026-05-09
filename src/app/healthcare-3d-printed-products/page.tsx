import { PAGE_METADATA } from '@/lib/metadata';
import React from 'react';
import HealthcarePrintedHero from '@/components/sections/healthcare-3d-printed-products/HealthcarePrintedHero';
import PrintedProductsGrid from '@/components/sections/healthcare-3d-printed-products/PrintedProductsGrid';
import HealthcareFaq from '@/components/sections/healthcare-3d-printed-products/HealthcareFaq';

export const metadata = PAGE_METADATA.healthcarePrintedProducts;

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <HealthcarePrintedHero />
      <PrintedProductsGrid />
      <HealthcareFaq />
    </main>
  );
};

export default Page;