"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What healthcare 3D tech products are used by hospitals and surgeons?",
        answer: "Healthcare 3D Tech products integrate scanning, medical image conversion, and bio-CAD tools that help hospitals plan complex surgeries and produce accurate anatomical references. Graft3D’s portfolio includes medical scanners, CT/MRI conversion solutions, and advanced modeling software that streamline digital workflows from imaging to clinical application."
    },
    {
        question: "How do Graft3D tech products support Patient-Specific Implant (PSI) design and manufacturing?",
        answer: "Using Elucis, Geomagic Freeform, and haptic devices, clinicians can design highly accurate patient-specific implants. This enables a seamless workflow from CT data to precision-engineered implant manufacturing."
    },
    {
        question: "How do Graft3D tech products enable facial prosthesis design?",
        answer: "With EinScan Medica and Geomagic Freeform, clinicians can create lifelike digital prosthetic models. This allows restoration of facial symmetry, aesthetics, and patient confidence."
    },
    {
        question: "What makes digital facial prosthesis workflows more effective?",
        answer: "Combining EinScan H2 with haptic sculpting tools enables precise and repeatable prosthesis design. It reduces manual errors and delivers faster, more predictable aesthetic outcomes."
    },
    {
        question: "How are prosthetic (P&O) sockets designed using Graft3D tech products?",
        answer: "3D scanning with EinScan Medica and processing via Elucis allows accurate limb geometry capture. This results in custom-fit sockets with improved comfort and biomechanical performance."
    },
    {
        question: "Which technologies support brace and orthotic manufacturing?",
        answer: "The workflow combines EinScan H2, Geomagic Freeform, and Funmat Pro 410. This enables production of lightweight, ventilated, and patient-specific orthotic & Prosthetic devices."
    },
    {
        question: "How do haptic devices enhance design accuracy across these applications?",
        answer: "Devices like Geomagic Touch and Phantom Premium provide real-time tactile feedback during design. This allows clinicians to feel anatomy digitally and achieve superior precision in complex cases."
    }
];

const TechProductsFaqSection = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="w-full py-16 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-[1400px] mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-12">
                    FAQ
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default TechProductsFaqSection;

