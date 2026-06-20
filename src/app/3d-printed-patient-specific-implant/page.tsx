import type { Metadata } from 'next';
import PsiHeroSection from '@/components/sections/3d-printed-patient-specific-implant/PsiHeroSection';
import PsiOverviewBenefitsSection from '@/components/sections/3d-printed-patient-specific-implant/PsiOverviewBenefitsSection';
import PsiSurgeonPerspectiveSection from '@/components/sections/3d-printed-patient-specific-implant/PsiSurgeonPerspectiveSection';
import PsiTestimonialsSection from '@/components/sections/3d-printed-patient-specific-implant/PsiTestimonialsSection';
import PsiBlogsSection from '@/components/sections/3d-printed-patient-specific-implant/PsiBlogsSection';
import PsiFaqSection from '@/components/sections/3d-printed-patient-specific-implant/PsiFaqSection';
import PsiServiceStepsSection from '@/components/sections/3d-printed-patient-specific-implant/PsiServiceStepsSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/3d-printed-patient-specific-implant',
  },
    title: 'Get Advanced 3D Printed Patient Specific Implants in India | Graft3D',
    description:
        'Graft3D offers titanium and PEEK 3D printed patient-specific implants with surgeon collaboration, digital planning, and fast delivery workflows.',
    openGraph: {
        title: '3D Printed Patient Specific Implants in India | Graft3D',
        description:
            'Fast and reliable patient-specific implant workflows for bone and skull defects with CAD planning and medical-grade manufacturing.',
        images: [
            {
                url: '/images/3d-printed-patient-specific-implant/overview.png',
                width: 843,
                height: 273,
                alt: '3D printed patient specific implants overview',
            },
        ],
    },
};

export default function PrintedPatientSpecificImplantPage() {
    return (
        <main className="w-full bg-white text-[#1f2937]">
            <PsiHeroSection />
            <PsiOverviewBenefitsSection />
            <PsiSurgeonPerspectiveSection />
            <PsiTestimonialsSection />
            <PsiBlogsSection />
            <PsiFaqSection />
            <PsiServiceStepsSection />
        </main>
    );
}
