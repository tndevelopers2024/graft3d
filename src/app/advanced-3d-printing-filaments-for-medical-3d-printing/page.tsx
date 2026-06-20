import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/advanced-3d-printing-filaments/Hero';
import MaterialsCatalog from '@/components/sections/advanced-3d-printing-filaments/MaterialsCatalog';
import WhyChooseUs from '@/components/sections/advanced-3d-printing-filaments/WhyChooseUs';
import PolyurethaneCard from '@/components/sections/advanced-3d-printing-filaments/PolyurethaneCard';
import ClinicalApplications from '@/components/sections/advanced-3d-printing-filaments/ClinicalApplications';
import ServicePrecision from '@/components/sections/advanced-3d-printing-filaments/ServicePrecision';

export const metadata: Metadata = {
  alternates: {
    canonical: '/advanced-3d-printing-filaments-for-medical-3d-printing',
  },
  title: 'Advanced 3D Printing Filaments for Medical 3D Printing - Graft 3D',
  description: 'Precision. Performance. Biocompatibility. At Graft 3D, we’re transforming the future of craniofacial and orthopedic reconstruction through high performance 3D printing filaments engineered for safety, strength, and seamless biological integration.',
};

export default function Advanced3DPrintingFilamentsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <MaterialsCatalog />
      <WhyChooseUs />
      <PolyurethaneCard />
      <ClinicalApplications />
      <ServicePrecision />
    </main>
  );
}
