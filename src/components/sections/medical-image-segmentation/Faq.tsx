"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
        q: "What is a medical image conversion platform?",
        a: "This platform enables clinicians to convert raw DICOM imaging data (CT/CBCT/MRI) into clinically usable segmented 3D anatomical models for diagnosis, planning, and downstream applications like implant design or surgical simulation.",
    },
    {
        q: "What occurs once a scan has been successfully uploaded to the platform?",
        a: "Once a scan is uploaded, the case moves to the “In Progress” stage where trained specialists begin processing the data, including image cleaning, alignment, and preparation for segmentation.",
    },
    {
        q: "What does the “Segmentation Review” involve?",
        a: "During segmentation review, the reconstructed 3D anatomy (e.g., bone, defect regions) is shared with the clinician for validation. This step ensures anatomical accuracy before final file generation.",
    },
    {
        q: "Can I request changes during segmentation review?",
        a: "Yes. You can request precise modifications such as boundary corrections, inclusion/exclusion of structures, or refinement of pathological regions to ensure clinical relevance.",
    },
    {
        q: "How is segmentation accuracy ensured?",
        a: "Segmentation is performed using a combination of AI-assisted tools and expert manual refinement, ensuring high anatomical fidelity, especially in complex or low-contrast regions.",
    },
    {
        q: "What file formats are supported for output?",
        a: "The platform supports industry-standard formats such as STL, OBJ ensuring compatibility with surgical planning software, CAD tools, and 3D printers.",
    },
    {
        q: "How long does the entire process take?",
        a: "Turnaround time varies based on case complexity; however, the streamlined workflow enables significantly faster processing compared to traditional manual segmentation. In most cases, delivery is completed within a few days, depending on the anatomical region and clinical requirements.",
    },
    {
        q: "Can complex anatomical cases be handled?",
        a: "Yes. The platform is designed to process complex cases such as deformities, tumors, fractures, and atrophic regions with high precision.",
    },
    {
        q: "How is patient data secured?",
        a: "All data is managed through secure systems with controlled access, ensuring patient confidentiality and compliance with medical data standards.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };

    return (
        <section className="w-full bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-[26px] lg:text-[32px] font-bold text-[#1A1B23] mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-4">
                    {FAQS.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                                    isOpen
                                        ? "bg-white border-[#1B6DB1] shadow-[0_8px_30px_rgba(27,109,177,0.06)]"
                                        : "bg-white border-[#E4ECF3] hover:border-[#1B6DB1]/40 hover:shadow-[0_4px_12px_rgba(16,80,140,0.03)]"
                                }`}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer group"
                                >
                                    <span
                                        className={`font-bold text-base lg:text-lg transition-colors duration-250 ${
                                            isOpen ? "text-[#1B6DB1]" : "text-[#2A2A2A] group-hover:text-[#1B6DB1]"
                                        }`}
                                    >
                                        {item.q}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180 text-[#1B6DB1]" : "text-[#9AA3AD] group-hover:text-[#1B6DB1]"
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-[#4A4D5E] text-sm lg:text-base leading-relaxed">
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
