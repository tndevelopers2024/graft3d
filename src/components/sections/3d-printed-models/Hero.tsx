"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
            {/* Background Wave Pattern */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/reconstruction-of-the-maxilla-and-mandible/Line-6.png"
                    alt=""
                    fill
                    className="object-cover opacity-20 pointer-events-none"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h1 className="text-4xl lg:text-[38px] font-extrabold text-[#166AAF] mb-4 leading-[1.2]">
                            3D-Printed Models in the<br />Medical Field:
                        </h1>

                        <h2 className="text-xl lg:text-[22px] font-bold text-[#1a1a1a] mb-8">
                            Diagnostic and Surgical Applications
                        </h2>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5 mb-12 w-full sm:w-auto">
                            <Button asChild className="rounded-full bg-[#166AAF] hover:bg-[#124e87] text-white font-bold px-10 py-7 w-fit shadow-lg text-[16px] transition-all flex items-center gap-2">
                                <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09" target="_blank" className="flex items-center gap-2">
                                    Meet Us Live Online <Video className="w-5 h-5" />
                                </Link>
                            </Button>
                            <Button asChild className="rounded-full border-2 border-[#166AAF] bg-white text-[#166AAF] hover:bg-[#eaf4fd] font-bold px-10 py-7 w-fit shadow-lg text-[16px] transition-all">
                                <Link href="/get-quote">
                                    Get a Quote Now
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6 text-[#166AAF]">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#166AAF] rounded-full p-3 text-white shadow-md">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[18px]">Call us now</div>
                                    <div className="text-[17px] font-semibold">
                                        <a href="tel:+916374410703" className="hover:underline">+91 63744 10703</a>
                                        <span className="mx-2 text-gray-400">|</span>
                                        <a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#166AAF] rounded-full p-3 text-white shadow-md">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[18px]">Email Us at</div>
                                    <a href="mailto:sales@graft3d.com" className="text-[17px] font-semibold hover:underline">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-full max-w-[580px] aspect-square">
                            <Image
                                src="/images/3d-printed-models-in-the-medical-field/7-e1759566238784.png"
                                alt="3D Printed Jaw Model for Medical Applications"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
