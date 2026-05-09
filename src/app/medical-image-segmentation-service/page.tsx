import { PAGE_METADATA } from '@/lib/metadata';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import SegmentationOverview from '@/components/sections/medical-segmentation/SegmentationOverview';
import SegmentationWorkflow from '@/components/sections/medical-segmentation/SegmentationWorkflow';
import WhyChooseUsSection from '@/components/sections/medical-segmentation/WhyChooseUsSection';
import SampleFilesSection from '@/components/sections/medical-segmentation/SampleFilesSection';
import TestimonialsSection from '@/components/sections/medical-segmentation/TestimonialsSection';
import SegmentationFaqSection from '@/components/sections/medical-segmentation/SegmentationFaqSection';
import BookDemoSection from '@/components/sections/medical-segmentation/BookDemoSection';
import Footer from '@/components/layout/Footer';

export const metadata = PAGE_METADATA.medicalImageSegmentation;

export default function MedicalImageSegmentationServicePage() {
    return (
        <main className="w-full bg-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] flex max-md:flex-col items-center py-16 md:py-0">
                {/* Blue Shape Background on Right */}
                <div className="absolute top-0 right-0 w-[55%] h-full  rounded-bl-[100px] z-0 hidden md:block"></div>
                {/* Mobile Blue Background */}
                <div className="absolute top-0 right-0 w-full h-[30%] z-0 md:hidden"></div>

                <div className="container mx-auto px-4 relative z-10 h-full flex items-center">

                    {/* Left: Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:pt-0">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl">
                            Are you from the hospital or medical service provider looking to segment your medical
                            scan into 3D models for 3D printing or advanced medical Study? Graft3D Healthcare
                            can be a trusted partner for your Medical Image Segmentation Service.
                        </p>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f6cbd] leading-tight">
                            Medical Image Segmentation <span className="text-gray-600">Service</span>
                        </h1>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#6ebbf7]"></div>
                                <span className="text-gray-600 font-medium">Get 3D models from CT, CBT & MRI Scans</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-[#6ebbf7]"></div>
                                <span className="text-gray-600 font-medium">Upload scans and get an instant quote for your Dicom to 3D</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button className="bg-[#1e73be] hover:bg-[#155a96] text-white px-8 py-6 text-lg rounded shadow-md">
                                <Link href="/upload-dicom-data">Try Us Now</Link>
                            </Button>
                            <Button variant="white" className="border border-gray-200 text-[#0f6cbd] hover:bg-gray-50 px-8 py-6 text-lg rounded shadow-md">
                                <Link href="/contact-us">Book A Demo</Link>
                            </Button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full pt-8">
                            <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center justify-center text-center">
                                <span className="text-[#1e73be] font-medium">Email your scans to <a href="mailto:sales@graft3d.com" className="underline">sales@graft3d.com</a></span>
                            </div>
                            <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-100 flex items-center justify-center text-center">
                                <span className="text-[#1e73be] font-medium">Talk to us now at <a href="tel:+919840478347" className="underline">+91 98404 78347</a> | <a href="tel:+916374410703" className="underline">+91 63744 10703</a></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image - Absolute Positioned to Edge on Desktop */}
                <div className="hidden md:flex absolute top-0 right-0 h-full w-[50%] z-20 items-center justify-end">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/medical-segmentation/medical-seg-bg.png"
                            alt="Medical Image Segmentation"
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </div>
                </div>

                {/* Mobile: Image below Text (if needed, but design implies side-by-side or stacked) 
                    The previous grid implementation had it. I should add it back for mobile if I hid the desktop one.
                    Wait, the previous implementation had it in the grid.
                    I will add a mobile-only image block below the text container.
                */}
                <div className="md:hidden w-full relative h-[300px] mt-8">
                    <Image
                        src="/images/medical-segmentation/medical-seg-bg.png"
                        alt="Medical Image Segmentation"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>


            </section>

            {/* Overview Section */}
            <SegmentationOverview />

            {/* Book Demo Section */}
            <BookDemoSection />

            {/* Workflow Section */}
            <SegmentationWorkflow />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* Sample Files Section */}
            <SampleFilesSection />

            {/* Testimonials Section */}
            <TestimonialsSection />


            {/* FAQ Section */}
            <SegmentationFaqSection />

        </main>
    );
}
