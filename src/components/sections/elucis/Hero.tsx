"use client"
import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

/**
 * Updated Hero Section for Elucis
 * Uses the requested banner as the full-width background and overlays branding/contact info.
 */
const Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-[#e6f4f7]">
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/elucis/banner.png"
                    alt="Elucis XR Platform Banner"
                    fill
                    className="object-contain object-right md:object-right"
                    priority
                />
            </div>

            {/* Foreground Content Wrapper */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-[700px] space-y-8 animate-fade-in-up">

                    {/* Elucis Logo Box */}
                    <div className="w-fit">
                        <div className="relative w-58 h-20 md:w-84 md:h-28 rounded-[20px] overflow-hidden shadow-xl">
                            <Image
                                src="/images/elucis/logo-elucis.png"
                                alt="Elucis Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className="mt-4 text-lg md:text-xl font-medium text-gray-800">
                            Advanced extended reality (XR) platform
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="/get-quote"
                            className="bg-[#166AAF] text-white text-base md:text-lg font-bold py-3 px-8 rounded shadow-sm hover:shadow-lg transition-all"
                        >
                            Enquire now
                        </a>
                        <a
                            href="/book-demo"
                            className="bg-[#166AAF] text-white text-base md:text-lg font-bold py-3 px-8 rounded shadow-sm hover:shadow-lg transition-all"
                        >
                            Book 3D Scanning Appointment
                        </a>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-6 pt-4">
                        {/* Phone Link */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-[#166aaf] text-white rounded-full flex items-center justify-center shadow-md">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#166AAF] font-bold text-lg leading-tight">
                                    Call us now
                                </span>
                                <div className="text-gray-900 font-medium text-base md:text-lg">
                                    <a href="tel:+916374410703" className="hover:underline">+91 6374410703</a>
                                    <span className="mx-2">|</span>
                                    <a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a>
                                </div>
                            </div>
                        </div>

                        {/* Email Link */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-[#166aaf] text-white rounded-full flex items-center justify-center shadow-md">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#166AAF] font-bold text-lg leading-tight">
                                    Email Us at
                                </span>
                                <a
                                    href="mailto:Sales@graft3d.com"
                                    className="text-gray-900 font-medium text-base md:text-lg hover:underline"
                                >
                                    Sales@graft3d.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
