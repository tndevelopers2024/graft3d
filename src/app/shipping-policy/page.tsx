
import ShippingPolicyContent from '@/components/sections/shipping-policy/ShippingPolicyContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Shipping Policy | Graft3D",
    description: "Read the shipping and delivery policy for Graft3D healthcare 3D printing products, methods, and delivery times.",
    alternates: {
        canonical: '/shipping-policy'
    },
    openGraph: {
        title: "Shipping Policy | Graft3D",
        description: "Read the shipping and delivery policy for Graft3D healthcare 3D printing products, methods, and delivery times.",
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: "Graft3D Shipping Policy"
            }
        ]
    }
}

export default function ShippingPolicyPage() {
    return (
        <main className="relative min-h-screen">
            <ShippingPolicyContent />
        </main>
    );
}
