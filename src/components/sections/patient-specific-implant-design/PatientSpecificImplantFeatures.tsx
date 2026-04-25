"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Anatomy Models",
        icon: "/images/patient-specific-implant-design/icon-1.png",
    },
    {
        id: 2,
        title: "Patient Specific Implants",
        icon: "/images/patient-specific-implant-design/icon-2.png",
    },
    {
        id: 3,
        title: "Surgical Guides",
        icon: "/images/patient-specific-implant-design/icon-3.png",
    }
];

const PatientSpecificImplantFeatures = () => {
    return (
        <section className="py-16 bg-[#eef5fa]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.id} 
                            className="bg-white rounded-2xl p-8 flex flex-col items-start justify-between min-h-[220px] shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <div>
                                <div className="w-16 h-16 rounded-xl bg-gray-100 mb-6 flex items-center justify-center overflow-hidden relative">
                                    {/* TODO: The user should place icon-1.png, icon-2.png, icon-3.png in public/images/patient-specific-implant-design/ */}
                                    <Image 
                                        src={feature.icon} 
                                        alt={feature.title} 
                                        fill
                                        className="object-contain p-2"
                                        onError={(e) => {
                                            // Fallback if image doesn't exist yet
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#111827] leading-tight pr-4">
                                    {feature.title}
                                </h3>
                            </div>
                            
                            <div className="w-full flex justify-end mt-4">
                                <ArrowRight className="text-[#155a96] w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientSpecificImplantFeatures;
