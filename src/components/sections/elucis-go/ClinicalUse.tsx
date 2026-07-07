"use client";
import React from "react";
import Image from "next/image";

const ClinicalUse = () => {
    const useCases = [
        {
            title: "Consult Room Reviews",
            desc: "Review complex cases with colleagues or patients in VR.",
            img: "/images/elucis-go/clinical-1.png",
        },
        {
            title: "Patient Education",
            desc: "Help patients and families understand their condition.",
            img: "/images/elucis-go/clinical-2.png",
        },
        {
            title: "Multidisciplinary Discussions",
            desc: "Bring teams together for better planning & communication.",
            img: "/images/elucis-go/clinical-5.png",
        },
        {
            title: "Pre-Operative Planning",
            desc: "Understand anatomy and plan before entering the OR.",
            img: "/images/elucis-go/clinical-3.png",
        },
        {
            title: "Remote Expert Opinions",
            desc: "Share cases and get expert insights from anywhere.",
            img: "/images/elucis-go/clinical-4.png",
        },
    ];

    return (
        <section className="py-10 md:py-18 overflow-hidden">
            <div className="max-w-350 mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center mb-16 gap-6 mx-auto">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Designed for Real-World{" "}
                            <span className="text-[#166aaf]">Clinical Use</span>
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden shadow-sm flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={useCase.img}
                                    alt={useCase.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0"></div>
                            </div>
                            <div className="p-6 flex flex-col grow items-center text-center">
                                <h3 className="text-xl font-semibold mb-3 leading-tight">
                                    {useCase.title}
                                </h3>
                                <p className="text-md leading-relaxed">
                                    {useCase.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicalUse;
