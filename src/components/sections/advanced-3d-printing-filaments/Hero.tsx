"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, FileDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white py-12 lg:pt-16 lg:pb-24">
            {/* Background Wave Pattern */}
            <div className="absolute inset-x-0 bottom-0 z-0 h-1/2 opacity-10">
                <Image
                    src="/images/reconstruction-of-the-maxilla-and-mandible/Line-6.png"
                    alt=""
                    fill
                    className="object-cover pointer-events-none"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px] relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-x-12 gap-y-16">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start pt-4">
                        <h1 className="text-3xl lg:text-[42px] font-extrabold text-[#1a1a1a] mb-6 leading-[1.15]">
                            Revolutionizing Craniofacial Reconstruction with <span className="text-[#166AAF]">Advanced 3D Printing Filaments</span>
                        </h1>

                        <div className="mb-10">
                            {/* <h2 className="text-xl lg:text-[22px] font-bold text-[#166AAF] mb-1">
                                PEEK / Med 3D Printer Ready
                            </h2> */}
                            <p className="text-[#555] text-lg font-medium opacity-80">
                                Precision. Performance. Biocompatibility.

                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-14 w-full sm:w-auto">
                            <Button asChild className="rounded-full bg-[#166AAF] hover:bg-[#124e87] text-white font-bold px-8 py-7 w-full sm:w-fit shadow-md text-base transition-all flex items-center gap-2 group">
                                <Link href="#" className="flex items-center gap-2">
                                    Download Catalog <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild className="rounded-full border-2 border-[#166AAF] bg-white text-[#166AAF] hover:bg-[#f0f7ff] font-bold px-8 py-7 w-full sm:w-fit shadow-sm text-base transition-all group">
                                <Link href="/get-quote" className="flex items-center gap-2">
                                    Get Quote Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>

                        {/* Contact Info (Icons/Text matching the image's pill format) */}
                        <div className="flex flex-col sm:flex-row gap-y-6 sm:gap-x-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#166AAF] rounded-xl p-3 text-white shadow-md mt-1 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#1a1a1a] text-lg">Call us now</div>
                                    <div className="text-[16px] text-[#555] font-semibold space-y-1">
                                        <a href="tel:+916374410703" className="block hover:text-[#166AAF] transition-colors">+91 63744 10703</a>
                                        <a href="tel:+919840478347" className="block hover:text-[#166AAF] transition-colors">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#166AAF] rounded-xl p-3 text-white shadow-md mt-1 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[#1a1a1a] text-lg">Email Us at</div>
                                    <a href="mailto:sales@graft3d.com" className="text-[16px] text-[#555] font-semibold hover:text-[#166AAF] transition-colors">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Area */}
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <div className="relative w-full lg:w-[800px] lg:h-[600px] aspect-square lg:aspect-auto group">
                            {/* Accent decorative elements could go here */}
                            <div className="absolute -inset-10 bg-[#166AAF]/5 blur-3xl rounded-full scale-110 pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
                            <Image
                                src="/images/Group 1171275483.png"
                                alt="Advanced 3D Printing Filaments for Medical 3D Printing"
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 transition-transform duration-700 hover:scale-[1.05]"
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
