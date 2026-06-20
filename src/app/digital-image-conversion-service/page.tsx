import React from 'react';
import DigitalImageConversionHeroSection from '@/components/sections/digital-image-conversion/DigitalImageConversionHeroSection';
import DigitalImageConversionPageContent from '@/components/sections/digital-image-conversion/DigitalImageConversionPageContent';
import DigitalImageConversionFaq from '@/components/sections/digital-image-conversion/DigitalImageConversionFaq';

export const metadata = {
  alternates: {
    canonical: '/digital-image-conversion-service',
  },
    title: 'Digital Image Conversion Service | Graft3D',
    description: 'Are you looking for a DICOM image conversion service for your medical practice? Try Graft3DH 3D service today! Create 3D Models From Medical Scans online.',
};

export default function DigitalImageConversionServicePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <DigitalImageConversionHeroSection />
            <div className="bg-gray-50/50">
                <div className="container mx-auto px-4 py-12">
                    <DigitalImageConversionFaq />
                </div>
            </div>
            <DigitalImageConversionPageContent />
        </main>
    );
}
