import React from 'react';
import BioCadPageContent from '@/components/sections/bio-cad/BioCadPageContent';
import BioCadFaq from '@/components/sections/bio-cad/BioCadFaq';

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.bioCadModeling;

export default function BioCadModelingServicePage() {
    return (
        <main>
            <BioCadPageContent />
            <div className="bg-gray-50/50">
                <div className="container mx-auto px-4 py-12">
                    <BioCadFaq />
                </div>
            </div>
        </main>
    );
}
