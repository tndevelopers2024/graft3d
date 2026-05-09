import React from 'react';
import { PAGE_METADATA } from '@/lib/metadata';

import ArtiNoseHero from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseHero';
import ArtiNoseOverview from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseOverview';
import ArtiNoseBenefits from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseBenefits';
import ArtiNoseFAQ from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseFAQ';
import ArtiNoseProcess from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseProcess';
import ArtiNoseConsultationForm from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseConsultationForm';
import ArtiNoseVideoGallery from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseVideoGallery';
import ArtiNoseTestimonials from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseTestimonials';
import ArtiNoseBlogs from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseBlogs';
import ArtiNoseCTA from '@/components/sections/regraft-arti-nose-arti-ear/ArtiNoseCTA';

export const metadata = PAGE_METADATA.regraftProface;

export default function ArtiNosePage() {
    return (
        <main>
            <ArtiNoseHero />
            <ArtiNoseOverview />
            <ArtiNoseBenefits />
            <ArtiNoseProcess />
            <ArtiNoseConsultationForm />
            <ArtiNoseVideoGallery />
            <ArtiNoseTestimonials />
            <ArtiNoseBlogs />
            <ArtiNoseCTA />
            <ArtiNoseFAQ />
        </main>
    );
}
