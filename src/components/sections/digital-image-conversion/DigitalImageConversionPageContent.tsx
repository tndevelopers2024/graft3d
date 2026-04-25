"use client";

import React, { useState } from 'react';
import DigitalImageConversionHeroSection from '@/components/sections/digital-image-conversion/DigitalImageConversionHeroSection';
import DigitalImageConversionSidebar from '@/components/sections/digital-image-conversion/DigitalImageConversionSidebar';
import DigitalImageConversionHowItWorks from '@/components/sections/digital-image-conversion/DigitalImageConversionHowItWorks';
import DigitalImageConversionApplications from '@/components/sections/digital-image-conversion/DigitalImageConversionApplications';
import DigitalImageConversionSampleFiles from '@/components/sections/digital-image-conversion/DigitalImageConversionSampleFiles';
import DigitalImageConversionBenefits from '@/components/sections/digital-image-conversion/DigitalImageConversionBenefits';
import DigitalImageConversionWhyChooseUs from '@/components/sections/digital-image-conversion/DigitalImageConversionWhyChooseUs';

const DigitalImageConversionPageContent = () => {
    const [activeTab, setActiveTab] = useState('how-it-works');

    const renderContent = () => {
        switch (activeTab) {
            case 'how-it-works':
                return <DigitalImageConversionHowItWorks />;
            case 'applications':
                return <DigitalImageConversionApplications />;
            case 'sample-files':
                return <DigitalImageConversionSampleFiles />;
            case 'benefits':
                return <DigitalImageConversionBenefits />;
            case 'why-graft3d':
                return <DigitalImageConversionWhyChooseUs />;
            default:
                return <DigitalImageConversionHowItWorks />;
        }
    };

    return (
        <section className="bg-gray-50 flex-grow">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar - Sticky */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24">
                            <DigitalImageConversionSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                        </div>
                    </aside>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalImageConversionPageContent;
