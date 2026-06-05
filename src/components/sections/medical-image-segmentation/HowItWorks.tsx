import React from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

const STEPS = [
    {
        img: "/images/medical-image-segmentation/step-1-upload.png",
        title: "Upload DICOM",
        desc: "Upload your CT, MRI, or CBCT scans securely.",
    },
    {
        img: "/images/medical-image-segmentation/step-2-review.png",
        title: "Project Review",
        desc: "Our experts review your data and confirm requirements.",
    },
    {
        img: "/images/medical-image-segmentation/step-3-segmentation.png",
        title: "AI + Expert Segmentation",
        desc: "Advanced AI and expert radiologists segment anatomical structures.",
    },
    {
        img: "/images/medical-image-segmentation/step-4-model.png",
        title: "Review 3D Model",
        desc: "View, evaluate and request modifications online.",
    },
    {
        img: "/images/medical-image-segmentation/step-5-download.png",
        title: "Pay & Download",
        desc: "Complete payment and download your files.",
    },
];

const HowItWorks = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-3xl lg:text-[40px] font-bold text-[#2A2A2A]">How It Works</h2>
                <p className="mt-3 text-center text-[#2A2A2A]/80 text-[15px] lg:text-base">
                    A simple and secure workflow from upload to delivery.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-2">
                    {STEPS.map((s, i) => (
                        <div key={s.title} className="relative flex flex-col items-center text-center px-2">
                            {/* connector */}
                            {i < STEPS.length - 1 && (
                                <span className="hidden lg:block absolute top-[52px] left-[calc(50%+58px)] w-[calc(100%-116px)] border-t-2 border-dashed border-[#C4D7E8]" />
                            )}

                            <div className="relative">
                                <div className="flex items-center justify-center w-[104px] h-[104px] rounded-full bg-[#EAF3FB]">
                                    <Image src={s.img} alt={s.title} width={56} height={56} className="object-contain" />
                                </div>
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#1B6DB1] text-white text-sm font-bold ring-4 ring-white">
                                    {i + 1}
                                </span>
                            </div>

                            <h3 className="mt-6 text-lg lg:text-xl font-bold text-[#1B6DB1] leading-tight">{s.title}</h3>
                            <p className="mt-2 max-w-[220px] text-[#2A2A2A]/85 text-[14px] lg:text-[15px] leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full bg-[#EAF3FB] px-5 py-2.5">
                        <Globe className="w-5 h-5 text-[#1B6DB1]" />
                        <span className="text-[14px] lg:text-[15px] font-bold text-[#2A2A2A]">
                            No software installation required. Everything works online
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
