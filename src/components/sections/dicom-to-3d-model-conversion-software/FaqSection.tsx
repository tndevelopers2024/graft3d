"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is D2P ( DICOM TO PRINT ) Modelling Software ?",
        answer: "It is an Advanced Visualization Software, allows surgeons, radiologists, lab technicians, and device designers to create diagnostic-quality digital 3D models and physical 3D prints easily and quickly. Virtual reality (VR) visualization allows clinicians and point-of-care (POC) staff to minimize the effort and time associated with the creation of patient-specific anatomic models."
    },
    {
        question: "What all things can we segment using D2P ?",
        answer: "D2P software has three modules. 1. Bone 2. Teeth 3.Vascular. It has an auto segmentation feature in which we can directly segment the part in one Click."
    },
    {
        question: "Can we directly print from D2P ?",
        answer: "Yes We Can Directly Print the Segmented Part from any 3D System Verified Printer."
    },
    {
        question: "What is the use of Virtual Reality in D2P Software ?",
        answer: "Virtual Reality is used to perform Preoperative Surgical Planning, Improve Patient Education, Helps Patient Manage Stress, More Detailed Medical Imaging and Faster Rehabilitation."
    },
    {
        question: "What Different Scanned Data can be imported to Create 3D Models ?",
        answer: "D2P uses DICOM Images Created by CT Scan, CBCT Scan And MRI Scans for Creating 3D Models."
    },
    {
        question: "What Outputs can be obtained using D2P Software ?",
        answer: "We Can obtain PLY, OBJ, STL, IGES, PDF files using D2P Software. We can Directly use the given file in Geomagic Freeform and make changes or Directly Print it."
    },
    {
        question: "Is D2P Software A Perpetual Or Yearly Subscription?",
        answer: "D2P is a one-time purchase perpetual license application, it’s not possible to rent or yearly subscribe software."
    },
    {
        question: "Where can I buy D2P Software in India?",
        answer: "You can buy D2P Software from 3dsystems authorized resellers in India.We are Graft3D Healthcare, one of the authorized distributors, a reseller of Haptic Device in India."
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        <section className="py-20 bg-[#f8fbff]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-[#1a365d] text-center mb-12 uppercase tracking-tightLine">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-blue-50 shadow-sm overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-[#1a365d] pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-[#1e73be] shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-[#1e73be] shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
