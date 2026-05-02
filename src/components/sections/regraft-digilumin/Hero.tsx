"use client"
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

/**
 * Hero Section for Regraft Digilumin
 * Designed to match the provided layout with branding, primary contact details, 
 * and product visualization.
 */
const Hero = () => {
    return (
        <section className="relative w-full min-h-[550px] md:min-h-[600px] flex items-center overflow-hidden bg-white">
            {/* Background Image - Contains the product visualization and gradient */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/regraft-digilumin/banner-bg.png"
                    alt="Digilumin Digital Drill Guides"
                    fill
                    className="object-cover object-right lg:object-center"
                    priority
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-[1367px] mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div className="flex flex-col items-start gap-10">
                    {/* Brand Identity & Header */}
                    <div className="space-y-3">
                        {/* ReGraft Logo */}
                        <div className="relative w-36 h-10 md:w-44 md:h-12 mb-2">
                            <Image
                                src="/images/regraft/regraft-text.png"
                                alt="ReGraft Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        
                        {/* Header Text */}
                        <h1 className="text-5xl md:text-7xl font-extrabold text-[#333333] tracking-tight">
                            Digilumin
                        </h1>
                        
                        {/* Subheading */}
                        <p className="text-lg md:text-[22px] text-gray-800 font-medium max-w-xl">
                            Digital Drill Guides for Optimized Implant Stability
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/get-quote"
                            className="bg-primary text-white text-base md:text-lg font-bold py-3.5 px-8 rounded shadow-sm hover:shadow-lg hover:bg-opacity-90 transition-all active:scale-[0.98]"
                        >
                            Enquire now
                        </a>
                        <a
                            href="/get-quote"
                            className="bg-primary text-white text-base md:text-lg font-bold py-3.5 px-8 rounded shadow-sm hover:shadow-lg hover:bg-opacity-90 transition-all active:scale-[0.98]"
                        >
                            Book 3D Scanning Appointment
                        </a>
                    </div>

                    {/* Contact Information Section */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-16 pt-4">
                        {/* Phone Link */}
                        <div className="flex items-center gap-4 group">
                            <a href="tel:+916374410703" className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                                <Phone size={24} />
                            </a>
                            <div className="flex flex-col">
                                <a href="tel:+916374410703" className="text-primary font-bold text-lg uppercase tracking-tight leading-tight">
                                    Call us now
                                </a>
                                <div className="flex flex-wrap text-gray-800 font-semibold text-lg">
                                    <a href="tel:+916374410703" className="hover:text-primary transition-colors">
                                        +91 63744 10703
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
                            <a href="mailto:Sales@graft3d.com" className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                                <Mail size={24} />
                            </a>
                            <div className="flex flex-col">
                                <a href="mailto:Sales@graft3d.com" className="text-primary font-bold text-lg uppercase tracking-tight leading-tight">
                                    Email Us at
                                </a>
                                <a 
                                    href="mailto:Sales@graft3d.com" 
                                    className="text-gray-800 font-semibold text-lg hover:text-primary transition-colors"
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
