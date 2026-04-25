"use client";

import React from 'react';
import Image from 'next/image';

const steps = [
    {
        id: 1,
        title: "User Application",
        description: "Add patient details, select the implant region, upload the scan, and choose the implant material",
        image: "/images/patient-specific-implant-design/how1.png"
    },
    {
        id: 2,
        title: "Segmentation in Progress",
        description: "Our technical team creates the segmentation model from the uploaded scan.",
        image: "/images/patient-specific-implant-design/how2.png"
    },
    {
        id: 3,
        title: "Segmentation Review",
        description: "The segmented 3D model from your scan is ready for review",
        image: "/images/patient-specific-implant-design/how3.png"
    },
    {
        id: 4,
        title: "Material Confirmation",
        description: "Reconfirm the selected implant material and review the description to ensure accuracy before design initiation.",
        image: "/images/patient-specific-implant-design/how4.png"
    },
    {
        id: 5,
        title: "Quotation and Payment",
        description: "Finalize the quotation provided and authorize payment to continue.",
        image: "/images/patient-specific-implant-design/how5.png"
    },
    {
        id: 6,
        title: "Implant Design In Progress",
        description: "Our technical team is creating your 3D model from the approved segmentation.",
        image: "/images/patient-specific-implant-design/how6.png"
    },
    {
        id: 7,
        title: "Final Review",
        description: "Review and confirm the final 3D implant model for printing.",
        image: "/images/patient-specific-implant-design/how7.png"
    }
];

const TextBlock = ({ step }: { step: typeof steps[0] }) => (
    <div className="flex flex-col items-start max-w-sm bg-white/50 md:bg-transparent p-4 md:p-0 rounded-lg">
        <div className="w-8 h-8 rounded-full bg-[#0088ff] text-white flex items-center justify-center font-bold text-sm mb-3 shadow-md">
            {step.id}
        </div>
        <h3 className="text-[#155a96] text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-gray-600 text-[15px] leading-relaxed">{step.description}</p>
    </div>
);

const PatientSpecificImplantHowItWorks = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#113b69] inline-block relative">
                        How the Platform Works
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-[3px] bg-[#155a96]"></div>
                    </h2>
                </div>
                
                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto pb-12">
                    {/* Center Vertical Line (Desktop) */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#bfdbfe] transform -translate-x-1/2 z-0"></div>
                    
                    {/* Left Vertical Line (Mobile) */}
                    <div className="md:hidden absolute top-0 bottom-0 left-[48px] w-[2px] bg-[#bfdbfe] z-0"></div>

                    {steps.map((step, index) => (
                        <div key={step.id} className="relative z-10 w-full mb-16 md:mb-24 last:mb-0">
                            
                            {/* DESKTOP LAYOUT */}
                            <div className="hidden md:flex flex-row items-center w-full">
                                {/* Left Side */}
                                <div className="w-1/2 flex justify-end pr-12 lg:pr-20">
                                    {index % 2 === 0 && <TextBlock step={step} />}
                                </div>
                                
                                {/* Center Image Circle */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
                                    <div className="w-32 h-32 rounded-full border-[3px] border-[#93c5fd] bg-white shadow-[0_0_25px_rgba(147,197,253,0.8)] flex items-center justify-center p-5 relative">
                                        <Image 
                                            src={step.image} 
                                            alt={step.title} 
                                            fill
                                            className="object-contain p-6"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Right Side */}
                                <div className="w-1/2 flex justify-start pl-12 lg:pl-20">
                                    {index % 2 === 1 && <TextBlock step={step} />}
                                </div>
                            </div>
                            
                            {/* MOBILE LAYOUT */}
                            <div className="flex md:hidden flex-row items-start w-full relative">
                                <div className="w-24 flex justify-center flex-shrink-0 relative z-10 pt-2">
                                    <div className="w-20 h-20 rounded-full border-[2px] border-[#93c5fd] bg-white shadow-[0_0_20px_rgba(147,197,253,0.8)] flex items-center justify-center relative">
                                        <Image 
                                            src={step.image} 
                                            alt={step.title} 
                                            fill
                                            className="object-contain p-4"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 pl-6 pt-1">
                                    <TextBlock step={step} />
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default PatientSpecificImplantHowItWorks;
