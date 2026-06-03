"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
        q: "What is the Inverse3 haptic device and how is it used in clinical environments?",
        a: "Inverse3 is a high-precision 3D haptic device that delivers real-time force feedback and motion control, allowing clinicians to interact with digital anatomical models. It is widely used in surgical simulation, medical training, and procedural planning to replicate realistic tactile sensations.",
    },
    {
        q: "How does Inverse3 improve surgical training and simulation accuracy?",
        a: "With ultra-high position resolution (0.01 mm) and force feedback up to 10 N, Inverse3 enables users to feel tissue resistance, texture, and tool interaction. This enhances motor skill development, procedural accuracy, and risk-free surgical training.",
    },
    {
        q: "Is Inverse3 compatible with medical simulation software and research platforms?",
        a: "Yes, Inverse3 integrates seamlessly with platforms like Unity, Unreal Engine, NVIDIA Omniverse, ROS, and SOFA, and supports C++, C#, and Python SDKs, making it ideal for clinical simulation, research, and custom medical applications.",
    },
    {
        q: "What makes Inverse3 suitable for delicate clinical and research applications?",
        a: "Its high stiffness (1 N/mm), fine force resolution (14 mN), and 4000 Hz refresh rate provide exceptional control and responsiveness, enabling precise manipulation required in microsurgery simulation, robotics, and haptics research.",
    },
    {
        q: "Can Inverse3 be used for robotic surgery and teleoperation?",
        a: "Yes, Inverse3 supports real-time motion tracking and force feedback, making it highly effective for robotic control, teleoperation systems, and remote surgical simulation, where accuracy and tactile feedback are critical.",
    },
    {
        q: "How does Inverse3 enhance clinical workflow and development efficiency?",
        a: "By enabling real-time interaction with digital environments, Inverse3 reduces reliance on physical prototypes, accelerates validation cycles, and improves training outcomes, design precision, and overall clinical decision-making.",
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
