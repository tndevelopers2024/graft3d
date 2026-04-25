"use client";

import React from 'react';
import Image from 'next/image';

const reasons = [
    {
        id: 1,
        title: "We Use FDA Clearance Software",
        image: "/images/bio-cad/why2.png"
    },
    {
        id: 2,
        title: "Experienced Bio-Cad Engineers",
        image: "/images/bio-cad/why1.png"
    },
    {
        id: 3,
        title: "In-House Doctors & Surgeons",
        image: "/images/bio-cad/why3.png"
    },
    {
        id: 4,
        title: "Exclusive Platform For Medical Image Conversion",
        image: "/images/bio-cad/why5.png"
    }
];

const DigitalImageConversionWhyChooseUs = () => {
    return (
        <section id="why-graft3d" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                WHY GRAFT 3D HEALTHCARE ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {reasons.map((reason) => (
                    <div key={reason.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 group">
                        {/* Image Container */}
                        <div className="relative w-48 h-32 flex-shrink-0">
                            <Image
                                src={reason.image}
                                alt={reason.title}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex items-center h-32">
                            <h3 className="text-lg font-bold text-gray-800 leading-tight">
                                {reason.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DigitalImageConversionWhyChooseUs;
