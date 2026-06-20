import type { Metadata } from 'next';
import NasalCaseCommentFormSection from '@/components/sections/artificial-nasal-prosthesis-case-study/NasalCaseCommentFormSection';
import NasalCaseDetailsSection from '@/components/sections/artificial-nasal-prosthesis-case-study/NasalCaseDetailsSection';
import NasalCaseIntroSection from '@/components/sections/artificial-nasal-prosthesis-case-study/NasalCaseIntroSection';
import NasalCaseProcessSection from '@/components/sections/artificial-nasal-prosthesis-case-study/NasalCaseProcessSection';
import NasalCaseRelatedSection from '@/components/sections/artificial-nasal-prosthesis-case-study/NasalCaseRelatedSection';

export const metadata: Metadata = {
  alternates: {
    canonical: '/artificial-nasal-prosthesis-case-study',
  },
    title: 'Case Study on replacing Cancer infected Nose with Artificial Nose Prosthesis | Graft3D',
    description:
        'Case study of a patient-specific artificial nasal prosthesis created with advanced 3D technology and medical-grade silicone.',
    openGraph: {
        title: 'Artificial Nasal Prosthesis Case Study | Graft3D',
        description:
            'See how Graft3D planned and delivered a patient-specific artificial silicone nose prosthesis using a digital workflow.',
        images: [
            {
                url: '/images/artificial-nasal-prosthesis-case-study/nasal-prosthesis-banner.jpeg',
                width: 907,
                height: 220,
                alt: 'Artificial nasal prosthesis case study banner',
            },
        ],
    },
};

export default function ArtificialNasalProsthesisCaseStudyPage() {
    return (
        <main className="w-full bg-[#f3f6fa] py-10 md:py-14">
            <article className="mx-auto w-full max-w-[1050px] px-4 text-[#1f2937]">
                <NasalCaseIntroSection />
                <NasalCaseDetailsSection />
                <NasalCaseProcessSection />
                <NasalCaseRelatedSection />
                <NasalCaseCommentFormSection />
            </article>
        </main>
    );
}
