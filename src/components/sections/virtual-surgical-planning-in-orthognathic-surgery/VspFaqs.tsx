"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What are VSP plates and how are they used in orthognathic surgery?",
        answer: "VSP plates are patient-specific fixation plates designed using virtual surgical planning to transfer the planned jaw movements accurately from the digital plan to the operating room."
    },
    {
        question: "How do VSP plates improve surgical accuracy?",
        answer: "VSP plates are designed directly from CT-based surgical simulations, ensuring precise execution of planned osteotomies and final jaw positioning without intraoperative guesswork."
    },
    {
        question: "Do VSP plates reduce operating time?",
        answer: "Yes. By eliminating manual bending, repeated measurements, and intraoperative adjustments, VSP plates help significantly reduce operative time and improve surgical workflow efficiency."
    },
    {
        question: "Are VSP plates compatible with common orthognathic techniques?",
        answer: "Yes. VSP plates are designed to support Le Fort I, BSSO, and genioplasty procedures, and can be adapted to both single-jaw and bimaxillary surgeries."
    },
    {
        question: "How do VSP plates affect intraoperative predictability?",
        answer: "VSP plates provide guided positioning and stable fixation, allowing surgeons to reproduce the virtual plan accurately and minimize intraoperative variability."
    },
    {
        question: "Can VSP plates reduce dependence on intermediate splints?",
        answer: "Yes. In many cases, VSP plates can reduce or eliminate the need for intermediate splints, simplifying surgical steps while maintaining positional accuracy."
    },
    {
        question: "How does virtual planning benefit post-operative outcomes?",
        answer: "Accurate transfer of the surgical plan leads to improved skeletal symmetry, occlusal stability, and predictable aesthetic outcomes, contributing to higher patient satisfaction."
    }
];

const VspFaqs = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(item => ({
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
            <div className="container mx-auto px-4 max-w-[900px]">
                <h2 className="text-center text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-12">
                    FAQs
                </h2>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default VspFaqs;
