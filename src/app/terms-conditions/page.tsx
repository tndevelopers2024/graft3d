import type { Metadata } from 'next';
import TermsConditionsContent from '@/components/sections/terms-conditions/TermsConditionsContent';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Graft3D',
    description:
        'Read the Terms and Conditions for using the Graft3D website, materials, and services.',
    alternates: {
        canonical: '/terms-conditions',
    },
    openGraph: {
        title: 'Terms & Conditions | Graft3D',
        description:
            'Website terms of use, restrictions, liability limitations, and policy revisions for Graft3D.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Graft3D Terms and Conditions',
            },
        ],
    },
};

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen">
            <TermsConditionsContent />
        </main>
    );
}
