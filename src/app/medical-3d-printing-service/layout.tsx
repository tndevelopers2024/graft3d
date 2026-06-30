import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Medical 3D Printing Service | Graft3D Healthcare',
    description: 'Explore our high-precision medical 3D printing services for patient-specific anatomical models, surgical guides, and implants.',
    alternates: {
        canonical: '/medical-3d-printing-service',
    },
};

export default function Medical3DPrintingServiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
