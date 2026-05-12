"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is reconstruction of the resected mandible and maxilla?",
        answer: "It is a planned surgical process to restore jaw continuity, function, and facial form after tumour or cancer resection. Digital planning helps define resection margins and enables accurate reconstruction of the mandible and maxilla."
    },
    {
        question: "Why is pre-surgical planning important for mandible resection reconstruction?",
        answer: "Pre-surgical planning allows surgeons to visualize the defect in 3D, anticipate reconstruction challenges, and execute precise bone cuts. This improves accuracy, reduces operative time, and supports predictable functional outcomes."
    },
    {
        question: "How do mandible and maxilla reconstruction services support surgeons and hospitals?",
        answer: "These services integrate imaging, digital planning, and implant design into a single workflow, helping surgical teams perform complex reconstructions efficiently while maintaining hospital-grade standards and consistency."
    },
    {
        question: "What role do 3D printed jaw reconstruction implants play in surgery?",
        answer: "3D printed jaw reconstruction implants translate the digital plan into the operating room, allowing precise restoration of jaw anatomy and alignment, especially in complex oncologic defects."
    },
    {
        question: "What are patient-specific mandibular and maxillary implants?",
        answer: "Patient-specific mandibular and maxillary implants are custom-designed from the patient’s CT data to match individual anatomy, reducing intraoperative adjustments and improving fit and symmetry."
    },
    {
        question: "When are custom 3D printed mandibular and maxillary implants preferred?",
        answer: "Custom 3D printed mandibular implants and custom 3D printed maxillary implants are preferred in large, irregular, or complex defects where standard solutions may not restore anatomy accurately."
    },
    {
        question: "Can custom implants reduce recovery time after jaw reconstruction?",
        answer: "Yes, custom implants tailored to individual anatomy can improve fit, reduce intraoperative adjustments, and support more accurate fixation. This often contributes to smoother rehabilitation and faster return to oral function than non-custom alternatives."
    }
];

const MaxillaFaqs = () => {
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

export default MaxillaFaqs;
