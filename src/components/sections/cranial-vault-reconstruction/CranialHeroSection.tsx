"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const CranialHeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#eef7ff] via-[#dcedfa] to-[#eef7ff] py-16 lg:py-24">

            {/* Background Pattern overlay representing the wave pattern from the design */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/pattern-bg.png')] bg-repeat mix-blend-overlay"></div>

            <div className="container relative z-10 mx-auto px-4 lg:px-12 max-w-[1400px]">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start z-20 pt-8 lg:pt-0">
                        <h1 className="text-4xl lg:text-[54px] font-extrabold text-[#1a5b9e] mb-8 leading-[1.15]">
                            3D Printing in Cranial Vault Reconstruction
                        </h1>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
                            <Button asChild className="rounded-[40px] bg-[#1a5b9e] hover:bg-[#124275] text-white font-bold px-10 py-7 shadow-md text-[16px] transition-colors">
                                <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09" target="_blank">
                                    Meet Us Live Online
                                </Link>
                            </Button>
                            <Button asChild className="rounded-[40px] border-2 border-[#1a5b9e] bg-white text-[#1a5b9e] hover:bg-[#f0f7fb] font-bold px-10 py-7 shadow-md text-[16px] transition-colors">
                                <Link href="/get-quote">
                                    Get a Quote Now
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6 text-[#1a5b9e] font-medium text-[16px]">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a5b9e] rounded-full p-2.5 text-white flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="leading-tight">
                                    <div className="font-extrabold text-[15px] mb-1">Call us now</div>
                                    <a href="tel:+919840478347" className="hover:underline font-bold text-gray-800">+91 98404 78347</a> | <a href="tel:+916374410703" className="hover:underline font-bold text-gray-800">+91 63744 10703</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#1a5b9e] rounded-full p-2.5 text-white flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="leading-tight">
                                    <div className="font-extrabold text-[15px] mb-1">Email Us at</div>
                                    <a href="mailto:sales@graft3d.com" className="hover:underline font-bold text-gray-800">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10 relative">
                        <div className="relative w-full max-w-[650px] aspect-square lg:scale-110 translate-x-4">
                            <Image
                                src="/images/cranial-vault-reconstruction/5-1-1-e1762921248523.png"
                                alt="Cranial Vault Reconstruction"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>

                {/* Footer Disclaimer */}
                <div className="w-full text-center mt-12 z-20 relative">
                    <p className="inline-flex items-center text-[15px] font-bold text-[#1a5b9e]">
                        <span className="w-2 h-2 rounded-full bg-[#1a5b9e] mr-2"></span>
                        Designed by Zoriox Innovation Labs, Marketed by Graft3D Healthcare Solutions
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CranialHeroSection;
