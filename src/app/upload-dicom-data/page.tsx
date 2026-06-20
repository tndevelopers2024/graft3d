import React from 'react';
import type { Metadata } from 'next';
import DicomWorkflowBanner from '@/components/sections/upload-dicom-data/DicomWorkflowBanner';
import DicomUploadSection from '@/components/sections/upload-dicom-data/DicomUploadSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/upload-dicom-data',
  },
    title: 'Upload DICOM Data | Secure 3D Model Delivery | Graft3D',
    description: 'Upload your DICOM imaging files securely up to 5 GB. Fast and secure delivery of 3D bio models from your CT/MRI scans. Send as email or share via cloud link.',
};

export default function UploadDicomDataPage() {
    return (
        <main className="min-h-screen bg-white">
            <DicomWorkflowBanner />
            <DicomUploadSection />
        </main>
    );
}
