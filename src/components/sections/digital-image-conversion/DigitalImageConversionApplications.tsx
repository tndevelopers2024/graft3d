"use client";

import React from 'react';
import Image from 'next/image';

const applications = [
    {
        id: 1,
        title: "Tumor Segmentation",
        image: "/images/digital-image-conversion-service/app1.webp"
    },
    {
        id: 2,
        title: "Orthopedic",
        image: "/images/digital-image-conversion-service/app2.webp"
    },
    {
        id: 3,
        title: "Post Surgical Planning",
        image: "/images/digital-image-conversion-service/app3.webp"
    },
    {
        id: 4,
        title: "Vessel Segmentation",
        image: "/images/digital-image-conversion-service/app4.webp"
    },
    {
        id: 5,
        title: "Mandible Reconstruction",
        image: "/images/digital-image-conversion-service/app5.webp"
    },
    {
        id: 6,
        title: "Virtual Surgical Planning",
        image: "/images/digital-image-conversion-service/app6.webp"
    },
    {
        id: 7,
        title: "Virtual Reality",
        image: "/images/digital-image-conversion-service/app7.webp"
    },
    {
        id: 8,
        title: "Basilar Aneurysm",
        image: "/images/digital-image-conversion-service/app8.webp"
    },
    {
        id: 9,
        title: "Oral And Maxillo Facial",
        image: "/images/digital-image-conversion-service/app9.webp"
    }
];

const DigitalImageConversionApplications = () => {
    return (
        <section id="applications" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                APPLICATION
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app) => (
                    <div key={app.id} className="group cursor-pointer">
                        <div className="bg-white p-4 rounded-b-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Image Container */}
                            <div className="relative w-full h-64 mb-4 overflow-hidden rounded bg-gray-100">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-center font-bold text-gray-800 text-sm md:text-base min-h-[48px] flex items-center justify-center">
                                {app.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DigitalImageConversionApplications;
