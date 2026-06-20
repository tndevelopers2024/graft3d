import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/sections/about-us/AboutHero';
import WhyWeAre from '@/components/sections/about-us/WhyWeAre';
import VisionMission from '@/components/sections/about-us/VisionMission';
import CustomersSection from '@/components/sections/home/CustomersSection';
import WhyChoose from '@/components/sections/about-us/WhyChoose';
import AboutProductGrid from '@/components/sections/about-us/AboutProductGrid';
import AboutPackageGrid from '@/components/sections/about-us/AboutPackageGrid';

export const metadata: Metadata = {
    title: "About Us | Graft 3D Healthcare Solutions",
    description: "Learn more about Graft 3D Healthcare Solutions, our vision, mission, and the innovative 3D healthcare solutions we provide.",
    alternates: {
        canonical: '/about-us',
    },
};

export default function AboutUsPage() {
    return (
        <main>
            <AboutHero />
            <WhyWeAre />
            <VisionMission />
            <CustomersSection />
            <WhyChoose />
            <AboutProductGrid />
            <AboutPackageGrid />
        </main>
    );
}
