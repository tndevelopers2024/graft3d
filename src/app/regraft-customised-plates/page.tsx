import { PAGE_METADATA } from '@/lib/metadata';
import RegraftCustomisedPlatesHero from '@/components/sections/regraft-customised-plates/RegraftCustomisedPlatesHero';
import RegraftCustomisedPlatesProducts from '@/components/sections/regraft-customised-plates/RegraftCustomisedPlatesProducts';
import CustomisedPlatesFAQ from '@/components/sections/regraft-customised-plates/CustomisedPlatesFAQ';

export const metadata = PAGE_METADATA.regraftCustomisedPlates;

export default function RegraftCustomisedPlatesPage() {
    return (
        <main className="min-h-screen">
            <RegraftCustomisedPlatesHero />
            <RegraftCustomisedPlatesProducts />
            <CustomisedPlatesFAQ />
        </main>
    );
}
