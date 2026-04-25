"use client";

import React from 'react';
import { Play } from 'lucide-react';

const benefits = [
    "3D Human Anatomy Models",
    "3D Print The Models For Surgical Practice",
    "Use 3D Images To Design Custom Implant And Medical Devices",
    "Convenient Online Service",
    "Get A Quote In A Minute"
];

const DigitalImageConversionBenefits = () => {
    return (
        <section id="benefits" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                BENEFITS
            </h2>

            <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                        <div className="flex-shrink-0">
                            <Play className="w-8 h-8 text-[#1e73be] fill-current group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                        <p className="text-lg md:text-xl font-medium text-gray-800">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DigitalImageConversionBenefits;
