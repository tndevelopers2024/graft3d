"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const MaxillaHeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden p-5 ">
            <div className="container relative overflow-hidden mx-auto px-4 lg:py-20 lg:px-1 max-w-[1400px] bg-[#CBE4F9] rounded-3xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/reconstruction-of-the-maxilla-and-mandible/Line-6.png"
                        alt="Background Pattern"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:p-15 p-2 ">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start z-20">
                        <h1 className="text-4xl lg:text-[50px] font-extrabold text-[#1a5b9e] mb-6 leading-tight">
                            Reconstruction of Resected Mandible and Maxilla
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
                            <Button asChild className="rounded-full bg-[#1a5b9e] hover:bg-[#124275] text-white font-bold px-8 py-6 w-fit shadow-md text-[15px] transition-colors">
                                <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09" target="_blank">
                                    Meet Us Live Online
                                </Link>
                            </Button>
                            <Button asChild className="rounded-full border-2 border-[#1a5b9e] bg-transparent text-[#1a5b9e] hover:bg-[#f0f7fb] font-bold px-8 py-6 w-fit shadow-md text-[15px] transition-colors">
                                <Link href="/get-quote">
                                    Get a Quote Now
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4 text-[#1a5b9e] font-medium text-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#1a5b9e] rounded-full p-2 text-white">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Call us now</div>
                                    <a href="tel:+919840478347" className="hover:underline opacity-90">+91 98404 78347</a> | <a href="tel:+916374410703" className="hover:underline opacity-90">+91 63744 10703</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mt-2">
                                <div className="bg-[#1a5b9e] rounded-full p-2 text-white">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold">Email Us at</div>
                                    <a href="mailto:sales@graft3d.com" className="hover:underline opacity-90">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 mt-12 lg:mt-0 relative">
                        <div className="relative w-full max-w-[600px] aspect-[4/3]">
                            <Image
                                src="/images/reconstruction-of-resected-mandible-and-maxilla/8-1.png"
                                alt="Reconstruction of Resected Mandible and Maxilla"
                                fill
                                className="object-cover h"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MaxillaHeroSection;
