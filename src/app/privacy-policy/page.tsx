import type { Metadata } from 'next';
import PrivacyPolicyContent from '@/components/sections/privacy-policy/PrivacyPolicyContent';

export const metadata: Metadata = {
    title: 'Privacy Policy | Graft3D',
    description: 'Read the privacy policy of Graft3D Healthcare Solutions, detailing how we collect, protect, and use user information.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen">
            <PrivacyPolicyContent />
        </main>
    );
}
