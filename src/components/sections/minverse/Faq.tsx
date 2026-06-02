"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
        q: "What is MinVerse and how is it used in clinical and simulation environments?",
        a: "MinVerse is a compact, high-precision 3D haptic device that provides real-time force feedback and motion control, enabling clinicians and researchers to interact with digital anatomical models for surgical simulation, training, and procedural planning.",
    },
    {
        q: "Is MinVerse compatible with clinical software and simulation platforms?",
        a: "Yes, MinVerse integrates seamlessly with platforms like Geomagic Freeform, Unity, Unreal Engine, NVIDIA Omniverse, ROS, and SOFA, and supports a flexible SDK compatible with multiple programming languages, making it ideal for medical simulation and research workflows.",
    },
    {
        q: "How does MinVerse improve workflow efficiency and development cycles?",
        a: "MinVerse enables rapid prototyping, real-time validation, and seamless integration into existing pipelines, reducing dependency on physical models and accelerating clinical simulation, product design, and research development cycles.",
    },
    {
        q: "How does MinVerse enable tactile interaction in digital medical simulations?",
        a: "MinVerse allows users to feel textures, resistance, and force variations within virtual environments, addressing a major limitation of traditional simulators that rely only on visual feedback. This enhances clinical realism in training scenarios such as palpation, procedural simulation, and anatomical interaction.",
    },
    {
        q: "How does MinVerse integrate with Geomagic Freeform for clinical design workflows?",
        a: "MinVerse integrates seamlessly with Geomagic Freeform, enabling clinicians and designers to sculpt, modify, and interact with 3D anatomical models using real-time haptic feedback. This enhances precision in prosthetic design, surgical planning, and complex anatomical modeling, allowing users to physically “feel” the digital structure for improved accuracy and control.",
    },
    {
        q: "How does MinVerse integrate with modern 3D ecosystems and simulation platforms?",
        a: "MinVerse is designed for the current digital ecosystem, offering native compatibility with leading 3D and simulation platforms and flexible APIs. This ensures smooth adoption in clinical simulation pipelines, CAD environments, and immersive training systems without workflow disruption.",
    },
    {
        q: "What operating systems are compatible?",
        a: "MinVerse runs on Windows, Linux, and macOS, with SDK support across all major programming languages and architectures for flexible integration into your existing toolchain.",
    },
];

const Faq = () => {
    const [open, setOpen] = useState<number[]>([0]);

    const toggle = (i: number) =>
        setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-[26px] lg:text-[32px] font-bold text-[#1A1B23] mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-3">
                    {FAQS.map((item, i) => {
                        const isOpen = open.includes(i);
                        return (
                            <div
                                key={i}
                                className={`rounded-lg overflow-hidden transition-colors ${isOpen
                                        ? "bg-white border border-[#E4ECF3] shadow-[0_2px_12px_rgba(16,80,140,0.05)]"
                                        : "bg-[#166AAF]"
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                                >
                                    <span
                                        className={`font-semibold text-[15px] lg:text-base ${isOpen ? "text-[#1E1E1E]" : "text-white"
                                            }`}
                                    >
                                        {item.q}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-[#166AAF] shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-white shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-5 text-[#434655] text-[15px] lg:text-base leading-relaxed">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
