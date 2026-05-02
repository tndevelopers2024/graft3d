"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const OrganripHero = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center overflow-hidden pt-20 md:pt-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-[#E8F1FC]">
            </div>

            <div className="container max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col items-start gap-8 max-w-2xl">
                        <div className="space-y-4">
                            <div className="relative w-56 h-14 md:w-72 md:h-20">
                                <Image
                                    src="/images/regraft/regraft-text.png"
                                    alt="ReGraft Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
                                Organrip
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

                    {/* Right Content - Image */}
                    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                        <Image
                            src="/images/regraft-orgonrip/orgon1.png"
                            alt="Organrip Models"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OrganripHero;
