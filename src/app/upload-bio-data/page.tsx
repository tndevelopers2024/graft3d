import type { Metadata } from 'next';
import UploadBioDataSection from "@/components/sections/upload-bio-data/UploadBioDataSection";

export const metadata: Metadata = {
    title: 'Upload Bio Data | Graft3D',
    description: 'Securely upload your patient bio-CAD data and medical specifications to Graft3D Healthcare Solutions.',
    alternates: {
        canonical: '/upload-bio-data',
    },
};

export default function UploadBioDataPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] pb-20">
      <UploadBioDataSection />
    </main>
  );
}
