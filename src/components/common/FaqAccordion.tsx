"use client";

import React, { useState } from 'react';

interface FaqItem {
    question: string;
    answer: string | React.ReactNode;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default first open

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": typeof item.answer === 'string' ? item.answer : "Please see our website for the full answer."
            }
        }))
    };

    return (
        <div className="w-full flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                    {/* Header */}
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between py-5 text-left transition-colors duration-300 group"
                    >
                        <span className="font-bold text-base lg:text-lg pr-4 text-[#005696] group-hover:text-[#003c6e]">
                            {item.question}
                        </span>
                        <span className="text-[#005696] shrink-0 font-medium text-2xl leading-none">
                            {activeIndex === index ? '−' : '+'}
                        </span>
                    </button>

                    {/* Content */}
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-200 opacity-100 pb-5' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="text-gray-600 text-sm lg:text-base leading-relaxed pr-8">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;
