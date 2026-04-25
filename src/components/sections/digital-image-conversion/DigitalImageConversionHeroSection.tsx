"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const backgroundImages = [
    '/images/bio-cad/bioPic1.png',
    '/images/bio-cad/bioPic2.png',
];

const DigitalImageConversionHeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex items-center justify-center">
            {/* Background Slideshow */}
            {backgroundImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <div
                        className={`w-full h-full bg-cover bg-center transition-transform duration-[5000ms] ease-linear ${index === currentImageIndex ? 'scale-110' : 'scale-100'
                            }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>
            ))}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20 z-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                    Digital Image Conversion Service
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 drop-shadow-md text-gray-100">
                    Are you looking for a DICOM image conversion service for your medical practice? Try Graft3DH 3D service today !
                    <br />
                    <span className="block mt-4 text-sm md:text-base text-gray-300 font-light">
                        Create 3D Models From Medical Scans online
                    </span>
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/upload-dicom-data"
                        className="bg-[#1e73be] hover:bg-[#165b9a] text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(30,115,190,0.5)] hover:shadow-[0_0_30px_rgba(30,115,190,0.7)] transform hover:-translate-y-1"
                    >
                        Try Us Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DigitalImageConversionHeroSection;
