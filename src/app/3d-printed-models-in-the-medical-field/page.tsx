import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/sections/3d-printed-models/Hero';
import Overview from '@/components/sections/3d-printed-models/Overview';
import DiagnosticApplications from '@/components/sections/3d-printed-models/DiagnosticApplications';
import SurgicalApplications from '@/components/sections/3d-printed-models/SurgicalApplications';
import Conclusion from '@/components/sections/3d-printed-models/Conclusion';
import BottomCTA from '@/components/sections/3d-printed-models/BottomCTA';

export const metadata: Metadata = {
  alternates: {
    canonical: '/3d-printed-models-in-the-medical-field',
  },
  title: '3D Printed Models in the Medical Field for Healthcare - Graft 3D',
  description: 'Explore 3D printed models in the medical field for surgical planning, training, and patient education. Get accurate anatomical 3D models and Get Quote Now.',
};

export default function PrintedModelsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Overview />
      <DiagnosticApplications />
      <SurgicalApplications />
      <Conclusion />
            <BottomCTA />

    </main>
  );
}
