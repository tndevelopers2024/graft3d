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
        <section className="relative w-full min-h-[600px] md:min-h-[500px] flex items-center overflow-hidden">
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/elucis/banner.png"
                    alt="Elucis XR Banner background"
                    fill
                    className="object-contain object-right md:object-center"
                    priority
                />
            </div>

            {/* Foreground Content Wrapper */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div className="max-w-[650px] space-y-10 animate-fade-in-up">
                    
                    {/* Elucis Logo Box */}
                    <div className="w-fit p-4 rounded-[20px] bg-[#67a7b8] shadow-lg flex items-center gap-3">
                
                        <span className="text-4xl font-semibold text-white tracking-tight">elucis</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-2xl md:text-3xl font-medium text-gray-800">
                            Advanced extended reality (XR) platform
                        </h1>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/get-quote"
                                className="bg-[#166AAF] text-white text-base font-bold py-3 px-8 rounded shadow-sm hover:shadow-lg transition-all"
                            >
                                Enquire now
                            </a>
                            <a
                                href="/book-demo"
                                className="bg-[#166AAF] text-white text-base font-bold py-3 px-8 rounded shadow-sm hover:shadow-lg transition-all"
                            >
                                Book 3D Scanning Appointment
                            </a>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="space-y-6 pt-4 border-t border-blue-100 max-w-[450px]">
                        {/* Phone Link */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-[#166AAF] text-white rounded-full flex items-center justify-center shadow-md">
                                <Phone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <a href="tel:+916374410703" className="text-primary font-bold text-lg leading-tight uppercase tracking-wide hover:underline transition-all">
                                    Call us now
                                </a>
                                <div className="flex flex-wrap text-gray-700 font-medium text-lg lg:text-xl">
                                    <a href="tel:+916374410703" className="hover:text-primary transition-colors">
                                        +91 6374410703
                                    </a>
                                    <span className="mx-2">|</span>
                                    <a href="tel:+919840478347" className="hover:text-primary transition-colors">
                                        +91 98404 78347
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Link */}
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-[#166AAF] text-white rounded-full flex items-center justify-center shadow-md">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <a href="mailto:Sales@graft3d.com" className="text-primary font-bold text-lg leading-tight uppercase tracking-wide hover:underline transition-all">
                                    Email Us at
                                </a>
                                <a 
                                    href="mailto:Sales@graft3d.com" 
                                    className="text-gray-700 font-medium text-lg lg:text-xl hover:text-primary transition-colors"
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
