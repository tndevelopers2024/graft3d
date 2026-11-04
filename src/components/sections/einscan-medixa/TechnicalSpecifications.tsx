"use client";

import React from "react";

const specs = [
    { label: "Light Source", value: "White Light + Infrared VCSEL" },
    { label: "Texture Camera Resolution", value: "5 MP" },
    {
        label: "Point Distance",
        value: "0.2 mm to 3.0 mm (adjustable by scanning mode)",
    },
    {
        label: "Field of View (FOV)",
        value: "White Light: 475 × 360 mm | Infrared VCSEL: 1090 × 1260 mm",
    },
    {
        label: "Alignment Modes",
        value: "Feature / Texture / Hybrid / Marker / Global Marker",
    },
    {
        label: "Scanning Modes",
        value: "Face, Cranial, Torso, Upper Limb, Lower Limb, Feet, Socket",
    },
    {
        label: "Operating Mode",
        value: "Standalone system with built in computing and touchscreen interface",
    },
    { label: "Output File Formats", value: "STL, OBJ, PLY" },
    { label: "Data Transfer", value: "USB or Local Network" },
    { label: "Power Supply", value: "AC 100 – 240 V | 50–60 Hz" },
    { label: "Operating Temperature", value: "10 – 35 °C" },
    { label: "Weight", value: "Approximately < 2 kg (device only)" },
];

const TechnicalSpecifications = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto max-w-[1000px] px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-[40px] font-bold text-[#0066b2]">
                        Technical Specifications
                    </h2>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex flex-col">
                        {specs.map((spec, index) => (
                            <div
                                key={index}
                                className={`flex flex-col p-6 md:flex-row md:p-8 ${index !== specs.length - 1 ? "border-b border-gray-100" : ""}`}
                            >
                                <div className="mb-2 w-full pr-4 text-[17px] font-bold text-gray-900 md:mb-0 md:w-1/3">
                                    {spec.label}
                                </div>
                                <div className="w-full text-[15px] font-medium text-gray-800 md:w-2/3">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download Brochure Button */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="/brochures/EinScan-Medixa.pdf"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1b4e8e] px-8 py-3 text-[15px] font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#153d72]"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecifications;
