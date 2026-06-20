import React from 'react';
import type { Metadata } from 'next';
import CranialHeroSection from '@/components/sections/cranial-vault-reconstruction/CranialHeroSection';
import CranialOverview from '@/components/sections/cranial-vault-reconstruction/CranialOverview';
import CranialIndications from '@/components/sections/cranial-vault-reconstruction/CranialIndications';
import CranialMaterials from '@/components/sections/cranial-vault-reconstruction/CranialMaterials';
import CranialCta from '@/components/sections/cranial-vault-reconstruction/CranialCta';
import CranialFaqs from '@/components/sections/cranial-vault-reconstruction/CranialFaqs';

export const metadata: Metadata = {
  alternates: {
    canonical: '/cranial-vault-reconstruction',
  },
    title: 'Cranial Vault Reconstruction with Custom 3D Implants | Graft3D',
    description: 'Advanced cranial vault reconstruction using custom 3D-printed implants and planning. Improve surgical precision and outcomes.',
};

export default function CranialVaultReconstructionPage() {
    return (
        <main className="min-h-screen bg-white">
            <CranialHeroSection />
            <CranialOverview />
            <CranialIndications />
            <CranialMaterials />
            <CranialCta />
            <CranialFaqs />
        </main>
    );
}
