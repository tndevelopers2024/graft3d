import React from 'react';
import PatientSpecificImplantHero from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantHero';
import PatientSpecificImplantPrecision from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantPrecision';
import WhySurgeonsChooseUs from '@/components/sections/patient-specific-implant-design/WhySurgeonsChooseUs';
import PatientSpecificImplantHowItWorks from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantHowItWorks';
import PatientSpecificImplantCTA from '@/components/sections/patient-specific-implant-design/PatientSpecificImplantCTA';

export const metadata = {
  alternates: {
    canonical: '/patient-specific-implant-design',
  },
    title: 'Patient-Specific Implant Design | Graft3D',
    description: 'Patient-Specific Implant Design Made Faster and Easier. A centralized digital platform that transforms medical imaging into high precision patient specific implant designs.',
};

export default function PatientSpecificImplantDesignPage() {
    return (
        <main className="flex min-h-screen flex-col bg-gray-50">
            <PatientSpecificImplantHero />
            <PatientSpecificImplantPrecision />
            <WhySurgeonsChooseUs />
            <PatientSpecificImplantHowItWorks />
            <PatientSpecificImplantCTA />
        </main>
    );
}
