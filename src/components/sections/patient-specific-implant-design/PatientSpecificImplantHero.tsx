"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const PatientSpecificImplantHero = () => {
    return (
        <section
            className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden py-20"
            style={{ backgroundImage: 'url("/images/patient-specific-implant-design/hero-bg.png")' }}
        >
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[#111827] mb-6">
                            Patient-Specific<br />
                            Implant Design<br />
                            <span className="text-[#155a96]">Made Faster</span><br />
                            and Easier
                        </h1>

                        <h2 className="text-xl md:text-2xl font-semibold text-[#475569] mb-4">
                            Designed with care. Delivered with confidence
                        </h2>

                        <p className="text-base md:text-lg text-[#64748b] mb-10 max-w-xl">
                            A centralized digital platform that transforms medical imaging into high precision patient specific implant designs.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link
                                href="/contact-us"
                                className="bg-[#155a96] hover:bg-[#0f406b] text-white font-medium py-3 px-8 rounded transition-all duration-300 shadow-md"
                            >
                                Enquire Now
                            </Link>
                            <a
                                href="#workflow"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-white hover:bg-gray-50 text-[#155a96] border border-[#155a96] font-medium py-3 px-8 rounded transition-all duration-300 inline-block text-center cursor-pointer"
                            >
                                View Sample Workflow
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#155a96] flex items-center justify-center text-white flex-shrink-0">
                                    <Phone size={18} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[#155a96] font-bold text-sm">Call us now</p>
                                    <p className="text-xs text-[#475569]">
                                        <a href="tel:+919840478347" className="hover:text-[#155a96] transition-colors">+91 98404 78347</a>
                                        <span className="mx-1">|</span>
                                        <a href="tel:+916374410703" className="hover:text-[#155a96] transition-colors">+91 63744 10703</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#155a96] flex items-center justify-center text-white flex-shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[#155a96] font-bold text-sm">Email Us at</p>
                                    <p className="text-xs text-[#475569]">
                                        <a href="mailto:Sales@graft3d.com" className="hover:text-[#155a96] transition-colors">Sales@graft3d.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area (Image) */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden relative">
                            <Image
                                src="/images/patient-specific-implant-design/image-2.jpeg"
                                alt="Patient Specific Implant Design"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
};

export default PatientSpecificImplantHero;
