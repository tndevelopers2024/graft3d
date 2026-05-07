import React from 'react';
import FacialBoneHeroSection from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneHeroSection';
import FacialBoneOverview from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneOverview';
import FacialBoneMaterials from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneMaterials';
import FacialBoneFeaturesGrid from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneFeaturesGrid';
import FacialBoneCta from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneCta';
import FacialBoneFaqs from '@/components/sections/facial-bone-augmentation-using-3d-printing/FacialBoneFaqs';
import Why3dPrinting from '@/components/sections/facial-bone-augmentation-using-3d-printing/Why3dPrinting';

export const metadata = {
    title: 'Facial Bone Augmentation Using 3D Printed Implants',
    description: 'Facial bone augmentation with 3D-printed implants and precise planning to restore structure and aesthetics. Get Quote Now and improve surgical results.',
    openGraph: {
        title: 'Facial Bone Augmentation Using 3D Printed Implants',
        description: 'Facial bone augmentation with 3D-printed implants and precise planning to restore structure and aesthetics. Get Quote Now and improve surgical results.',
        images: [{ url: '/images/facial-bone-augmentation-using-3d-printing/Frame9.png' }],
    }
};

export default function FacialBoneAugmentationPage() {
    return (
        <main className="min-h-screen bg-white">
            <FacialBoneHeroSection />
            <FacialBoneOverview />
            <Why3dPrinting />
            <FacialBoneMaterials />
            <FacialBoneFeaturesGrid />
            <FacialBoneCta />
            <FacialBoneFaqs />
        </main>
    );
}
