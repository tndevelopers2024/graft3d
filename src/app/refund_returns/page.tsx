import type { Metadata } from 'next';
import RefundPolicyContent from '@/components/sections/refund-returns/RefundPolicyContent';

export const metadata: Metadata = {
    title: 'Refund and Returns Policy | Graft3D',
    description:
        'Read Graft3D refund and returns policy, eligibility conditions, and refund processing timelines.',
    alternates: {
        canonical: '/refund_returns',
    },
    openGraph: {
        title: 'Refund and Returns Policy | Graft3D',
        description:
            'Refund policy details including refund eligibility, process, and timelines for Graft3D orders.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Graft3D Refund and Returns Policy',
            },
        ],
    },
};

export default function RefundReturnsPage() {
    return (
        <main className="min-h-screen">
            <RefundPolicyContent />
        </main>
    );
}
