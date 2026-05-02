"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

const PatientSpecificImplantCTA = () => {
    return (
        <section className="py-20 bg-[#f4f8fb]">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Blue CTA Box */}
                <div
                    className="relative w-full rounded-[40px] overflow-hidden bg-[#0f548d] py-16 md:py-24 px-8 md:px-16 text-center text-white mb-12 shadow-xl"
                    style={{
                        backgroundImage: 'url("/images/patient-specific-implant-design/bg-text.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'soft-light'
                    }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Turn Complexity into Competitive Advantage
                        </h2>

                        <p className="text-lg md:text-xl text-blue-50/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Deliver patient-specific implants faster without compromising quality, compliance, or clinical confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/upload-dicom-data"
                                className="bg-white text-[#0f548d] font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Upload Your Scan Now
                            </Link>
                            {/* <Link
                                href="/contact-us"
                                className="bg-[#0f548d]/30 text-white font-bold py-4 px-10 rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors backdrop-blur-sm"
                            >
                                Schedule a Demo
                            </Link> */}
                        </div>
                    </div>
                </div>

                {/* Contact Info below the box */}
                <div className="flex flex-col md:flex-row justify-center max-md:items-start items-center gap-12 md:gap-24">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#155a96] flex items-center justify-center text-white shadow-md">
                            <Phone size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-[#155a96] font-bold text-sm">Call us now</p>
                            <div className="text-sm text-gray-700 font-medium">
                                <a href="tel:+919840478347" className="hover:text-[#155a96] transition-colors">+91 98404 78347</a>
                                <span className="mx-1">|</span>
                                <a href="tel:+916374410703" className="hover:text-[#155a96] transition-colors">+91 63744 10703</a>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#155a96] flex items-center justify-center text-white shadow-md">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-[#155a96] font-bold text-sm">Email Us at</p>
                            <div className="text-sm text-gray-700 font-medium">
                                <a href="mailto:Sales@graft3d.com" className="hover:text-[#155a96] transition-colors">Sales@graft3d.com</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PatientSpecificImplantCTA;
