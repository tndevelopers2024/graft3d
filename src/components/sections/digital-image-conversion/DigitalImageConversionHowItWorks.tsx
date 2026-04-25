"use client";

import React from 'react';
import { Upload, Mail, Receipt, FileText, CreditCard, Send, CheckSquare } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Upload The Dicom Files",
        icon: Upload,
    },
    {
        id: 2,
        title: "Get An Instant Quote In Your Email",
        icon: Mail,
    },
    {
        id: 3,
        title: "Conveniently Approve The Quote Via SMS Or Email",
        icon: CheckSquare,
    },
    {
        id: 4,
        title: "Send Us PO / Token Advance",
        icon: Receipt,
    },
    {
        id: 5,
        title: "Review The Files",
        icon: FileText,
    },
    {
        id: 6,
        title: "Conveniently Pay Online",
        icon: CreditCard,
    },
    {
        id: 7,
        title: "Get The Files In The Email Instantly",
        icon: Send,
    }
];

const DigitalImageConversionHowItWorks = () => {
    return (
        <section id="how-it-works" className="py-16 bg-[#f0f8ff] scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e73be] uppercase tracking-wide">
                    How It Works
                </h2>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-12 md:space-y-0">
                    {steps.map((step, index) => {
                        const isEven = (index + 1) % 2 === 0;
                        return (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-16 relative group ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Step Number Label (Always opposite to the card) */}
                                <div className={`md:w-5/12 text-center md:text-right ${isEven ? 'md:text-left' : ''} mb-4 md:mb-0`}>
                                    <span className={`text-[#1e73be] font-bold text-xl tracking-wider uppercase`}>
                                        Step {step.id}
                                    </span>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-[#1e73be] rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2 -translate-y-1/2 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12">
                                    <div className={`bg-blue-50 p-6 rounded-xl border-2 border-transparent hover:border-[#1e73be] shadow-sm hover:shadow-md transition-all duration-300 relative group-hover:-translate-y-1`}>

                                        {/* Arrow pointing to center */}
                                        <div className={`hidden md:block absolute top-1/2 w-4 h-4 bg-blue-50 border-t-2 border-l-2 border-transparent transform -translate-y-1/2 rotate-45 
                                            ${isEven ? '-right-2 border-r-gray-200 border-t-gray-200 bg-inherit' : '-left-2 border-l-gray-200 border-b-gray-200 bg-inherit'}
                                            group-hover:border-[#1e73be]
                                        `}></div>

                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-20 h-20 bg-[#1e73be] text-white rounded-lg flex items-center justify-center mb-4 shadow-inner">
                                                <step.icon size={40} strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                                                {step.title}
                                            </h3>
                                            {/* <p className="text-sm text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DigitalImageConversionHowItWorks;
