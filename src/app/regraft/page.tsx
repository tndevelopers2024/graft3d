import { PAGE_METADATA } from '@/lib/metadata';
import React from 'react';
import RegraftHero from '@/components/sections/regraft/RegraftHero';
import RegraftAbout from '@/components/sections/regraft/RegraftAbout';
import RegraftFeatures from '@/components/sections/regraft/RegraftFeatures';
import RegraftFAQ from '@/components/sections/regraft/RegraftFAQ';

export const metadata = PAGE_METADATA.regraft;

export default function RegraftPage() {
    return (
        <main>
            <RegraftHero />
            <RegraftAbout />
            <RegraftFeatures />
            <RegraftFAQ />
        </main>
    );
}
