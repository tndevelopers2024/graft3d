import type { Metadata } from 'next';
import VspMandibularCommentFormSection from '@/components/sections/virtual-surgical-planning-mandibular-reconstruction/VspMandibularCommentFormSection';
import VspMandibularFiguresSection from '@/components/sections/virtual-surgical-planning-mandibular-reconstruction/VspMandibularFiguresSection';
import VspMandibularIntroSection from '@/components/sections/virtual-surgical-planning-mandibular-reconstruction/VspMandibularIntroSection';
import VspMandibularRelatedSection from '@/components/sections/virtual-surgical-planning-mandibular-reconstruction/VspMandibularRelatedSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/virtual-surgical-planning-mandibular-reconstruction',
  },
    title: 'Virtual Surgical Planning for Mandibular Reconstruction | Graft3D',
    description:
        'Case study on virtual surgical planning for mandibular reconstruction with patient-specific implants and resection guides.',
    openGraph: {
        title: 'Virtual Surgical Planning for Mandibular Reconstruction | Graft3D',
        description:
            'How Graft3D uses CAD-CAM workflows, fibula free flap planning, and PSI design for mandibular reconstruction.',
        images: [
            {
                url: '/images/virtual-surgical-planning-mandibular-reconstruction/figure-1-resection-guides.png',
                width: 341,
                height: 251,
                alt: 'Mandible defect resection guides',
            },
        ],
    },
};

export default function VirtualSurgicalPlanningMandibularReconstructionPage() {
    return (
        <main className="w-full bg-[#f3f6fa] py-10 md:py-14">
            <article className="mx-auto w-full max-w-[1050px] px-4 text-[#1f2937]">
                <VspMandibularIntroSection />
                <VspMandibularFiguresSection />
                <VspMandibularRelatedSection />
                <VspMandibularCommentFormSection />
            </article>
        </main>
    );
}
