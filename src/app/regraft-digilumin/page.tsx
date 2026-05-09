import Hero from '@/components/sections/regraft-digilumin/Hero';
import Overview from '@/components/sections/regraft-digilumin/Overview';
import Benefits from '@/components/sections/regraft-digilumin/Benefits';
import TheProcess from '@/components/sections/regraft-digilumin/TheProcess';
import Testimonials from '@/components/sections/regraft-digilumin/Testimonials';
import OurBlogs from '@/components/sections/regraft-digilumin/OurBlogs';
import DigiluminFaq from '@/components/sections/regraft-digilumin/DigiluminFaq';

import { PAGE_METADATA } from '@/lib/metadata';

export const metadata = PAGE_METADATA.regraftDigilumin;

export default function RegraftDigiluminPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Overview />
            <Benefits />
            <TheProcess />
            <Testimonials />
            <OurBlogs />
            <DigiluminFaq />
        </main>
    );
}
