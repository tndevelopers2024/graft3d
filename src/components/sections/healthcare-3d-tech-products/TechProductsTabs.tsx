"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = ["All", "Healthcare 3D Scanners", "Medical Image Conversion", "Bio CAD Modeling", "Haptic Devices"];

const items = [
    {
        category: 'Healthcare 3D Scanners',
        title: 'Human Body Scanner',
        subtitle: 'Einscan Medixa',
        image: '/images/healthcare-3d-tech-products/einscan-medixa.png',
        link: '/einscan-medixa',
    },
    {
        category: 'Medical Image Conversion',
        title: 'Medical Image Conversion',
        subtitle: 'D2P – Bone , Vascular , Teeth',
        image: '/images/healthcare-3d-tech-products/d2p.jpg',
        link: '/dicom-to-3d-model-conversion-software',
    },
    {
        category: 'Bio CAD Modeling',
        title: 'Bio CAD Modeling',
        subtitle: 'Geomagic Freeform',
        image: '/images/healthcare-3d-tech-products/geomagic-freeform.jpg',
        link: '/geomagic-freeform',
    },
    {
        category: 'Haptic Devices',
        title: 'Haptic Device',
        subtitle: 'Geomagic Touch & Touch X',
        image: '/images/healthcare-3d-tech-products/geomagic-touch.jpg',
        link: '/geomagic-touch-x-haptic-device',
    },
    {
        category: 'Haptic Devices',
        title: 'Haptic Device',
        subtitle: 'Phantom Premium',
        image: '/images/healthcare-3d-tech-products/phantom-premium.jpg',
        link: '/phantom-premium-haptic-device',
    },
    {
        category: 'Haptic Devices',
        title: 'Haptic Device',
        subtitle: 'Inverse3',
        image: '/images/inverse3/device.png',
        link: '/inverse3',
    },
    {
        category: 'Haptic Devices',
        title: 'Custom Implants',
        subtitle: 'PEEK Implant',
        image: '/images/regraft-custom-implants/hero-product.png',
        link: '/peek-implant',
    },
    {
        category: 'Haptic Devices',
        title: 'Haptic Device',
        subtitle: 'mInverse',
        image: '/images/minverse/hero-device.png',
        link: '/minverse',
    },
];

const TechProductsTabs = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <section id="tech-products" className="w-full py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h3 className="text-[#3a7bd5] font-bold text-lg uppercase tracking-wider mb-2">
                        OUR 3D PRODUCTS
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a365d] uppercase tracking-tight">
                        HEALTHCARE 3D PRODUCT
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-md font-bold text-[15px] transition-all duration-200 border border-transparent
                                ${activeCategory === category
                                    ? 'bg-[#3a7bd5] text-white shadow-md'
                                    : 'bg-[#f0f0f0] text-gray-700 hover:bg-gray-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Image Placeholder/Container */}
                            <div className="relative aspect-[4/3] bg-white overflow-hidden p-4">
                                <Image
                                    src={item.image}
                                    alt={item.subtitle}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                    unoptimized
                                />
                            </div>

                            {/* Text Area */}
                            <div className="bg-[#f2f6ff] p-8 flex flex-col items-center justify-center text-center flex-grow">
                                <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {item.subtitle}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechProductsTabs;
