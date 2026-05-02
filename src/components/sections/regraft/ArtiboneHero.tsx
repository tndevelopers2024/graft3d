"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const ArtiboneHero = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden pt-20 md:pt-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/regraft-artibone/reg-arti-bg.png"
                    alt="Artibone Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay to ensure readability if needed */}
                <div className="absolute inset-0 bg-white/10" />
            </div>

            <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-8 max-w-2xl">
                        <div className="space-y-2">
                            <div className="relative w-48 h-12 md:w-64 md:h-16">
                                <Image
                                    src="/images/regraft/regraft-text.png"
                                    alt="ReGraft Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
                                Artibone
                            </h1>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link href="/contact-us">
                                <Button className="w-full sm:w-auto rounded-md px-10 py-7 text-lg font-bold shadow-md bg-[#1e73be] hover:bg-[#155a96]">
                                    Enquire now
                                </Button>
                            </Link>
                            <Link href="/contact-us">
                                <Button className="w-full sm:w-auto rounded-md px-10 py-7 text-lg font-bold shadow-md bg-[#1e73be] hover:bg-[#155a96]">
                                    Book 3D Scanning Appointment
                                </Button>
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1e73be] text-white p-3 rounded-full shadow-lg">
                                    <Phone size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#1e73be] font-bold text-lg">Call us now</p>
                                    <div className="flex flex-wrap gap-x-2">
                                        <a href="tel:+916374410703" className="text-gray-700 text-sm font-semibold hover:text-[#1e73be] transition-colors">+91 63744 10703</a>
                                        <span className="text-gray-400">|</span>
                                        <a href="tel:+919840478347" className="text-gray-700 text-sm font-semibold hover:text-[#1e73be] transition-colors">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1e73be] text-white p-3 rounded-full shadow-lg">
                                    <Mail size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#1e73be] font-bold text-lg">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-gray-700 text-sm font-semibold hover:text-[#1e73be] transition-colors">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiboneHero;
