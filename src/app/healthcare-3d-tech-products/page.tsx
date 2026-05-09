import { PAGE_METADATA } from '@/lib/metadata';
import React from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

import TechProductsTabs from '@/components/sections/healthcare-3d-tech-products/TechProductsTabs';
import TechProductsFaqSection from '@/components/sections/healthcare-3d-tech-products/TechProductsFaqSection';

export const metadata = PAGE_METADATA.healthcareTechProducts;

export default function Healthcare3DTechProductsPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[600px] flex items-center bg-[#e6f4ff] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/healthcare-3d-tech-products/hero-bg.png"
                        alt="Healthcare 3D Tech Products Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                    {/* Spacing for left side of image (Face/Ear) */}
                    <div className="hidden md:block"></div>

                    {/* Content on the right */}
                    <div className="flex flex-col items-start justify-center max-w-xl pl-4 md:pl-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f6cbd] mb-4 leading-tight">
                            Healthcare 3D Tech Products
                        </h1>
                        <p className="text-base md:text-lg text-[#0f6cbd] mb-8 font-medium">
                            Get detailed information, quotes, and demos on 3D scanners, 3D printers, and software exclusively designed for advanced healthcare 3D printing applications.
                        </p>
                        {/* <Button asChild className="bg-[#8abadd] hover:bg-[#7aa0c6] text-[#1a3b5c] px-8 py-2 text-base font-semibold rounded shadow-sm border border-[#7aa0c6]">
                            <Link href="#tech-products">Explore</Link>
                        </Button> */}
                    </div>
                </div>
            </section>

            {/* Service Tabs Section */}
            <TechProductsTabs />

            {/* FAQ Section */}
            <TechProductsFaqSection />
        </main>
    );
}
