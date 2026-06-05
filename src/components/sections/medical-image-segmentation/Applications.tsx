import React from "react";
import Image from "next/image";

const APPS = [
    { img: "/images/medical-image-segmentation/app-neurosurgery.png", label: "Neurosurgery Planning" },
    { img: "/images/medical-image-segmentation/app-orthopedic.png", label: "Orthopedic Implants" },
    { img: "/images/medical-image-segmentation/app-dental.png", label: "Dental / Maxillofacial" },
    { img: "/images/medical-image-segmentation/app-cardiovascular.png", label: "Cardiovascular Models" },
    { img: "/images/medical-image-segmentation/app-research.png", label: "Medical Research" },
];

const Applications = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-3xl lg:text-[40px] font-bold text-[#2A2A2A] mb-10 lg:mb-12">
                    Built for Real Clinical Applications
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {APPS.map((a) => (
                        <div
                            key={a.label}
                            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-[360px]"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(16,80,140,0.10)]">
                                <Image
                                    src={a.img}
                                    alt={a.label}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Applications;
