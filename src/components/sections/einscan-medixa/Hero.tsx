"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] flex items-center overflow-hidden py-16 bg-[#f7faff]">
            {/* Background Wave Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/einscan-medixa/wave-bg.png"
                    alt=""
                    fill
                    className="object-cover object-center opacity-70"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 lg:pl-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-start space-y-6">
                        <div>
                            <h1 className="text-4xl lg:text-[56px] font-bold text-[#0066b2] mb-8 leading-tight">
                                EinScan Medixa
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button className="flex-1 sm:flex-initial rounded-full px-8 py-6 text-[15px] font-semibold bg-[#0066b2] hover:bg-[#005596] text-white flex items-center gap-2">
                                    <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09#success">
                                        Meet Us Live Online
                                        <Video size={18} className="ml-1" />
                                    </Link>
                                </Button>
                                <Button className="flex-1 sm:flex-initial rounded-full px-8 py-6 text-[15px] font-semibold bg-white text-[#0066b2] border-2 border-[#0066b2] hover:bg-blue-50">
                                    <Link href="/get-quote">
                                        Get a Quote Now
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#0066b2] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                                    <Phone size={22} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#0066b2] font-bold text-[17px]">Call us now</p>
                                    <div className="flex flex-wrap gap-x-2 mt-0.5">
                                        <a href="tel:+916374410703" className="text-gray-800 text-[15px] hover:text-[#0066b2] transition-colors">+91 63744 10703</a>
                                        <span className="text-gray-400">|</span>
                                        <a href="tel:+919840478347" className="text-gray-800 text-[15px] hover:text-[#0066b2] transition-colors">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-[#0066b2] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                                    <Mail size={22} />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[#0066b2] font-bold text-[17px]">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-gray-800 text-[15px] mt-0.5 hover:text-[#0066b2] transition-colors">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[400px] lg:h-[450px] flex justify-center items-center">
                        <Image
                            src="/images/einscan-medixa/hero-device.png"
                            alt="EinScan Medixa Device"
                            fill
                            className="object-contain object-right drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
