import React from "react";
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is reconstruction of the maxilla and mandible?",
        answer: "It is a surgical process to restore the jaw after tumour or cancer resection, focusing on rebuilding bone structure, facial symmetry, and oral function using digitally planned reconstruction techniques."
    },
    {
        question: "How does 3D printing support mandible reconstruction implants?",
        answer: "3D printing helps create patient-specific cutting guides, anatomical models, and reconstruction components, improving accuracy in mandible reconstruction implant placement and reducing surgical uncertainty."
    },
    {
        question: "What is fibula free flap mandibular reconstruction, and how long is recovery?",
        answer: "This technique uses bone from the fibula to rebuild the jaw after tumour removal. Fibula free flap mandibular reconstruction recovery depends on the defect size and patient health, but digital planning helps shorten surgical time and improve healing outcomes."
    },
    {
        question: "When is mandibular reconstruction with bone graft recommended?",
        answer: "Mandibular reconstruction with bone graft is considered when restoring jaw continuity and strength is essential, especially after cancer resection, to support chewing, speech, and facial structure."
    },
    {
        question: "Why is mandibular reconstruction with free fibula flap widely used?",
        answer: "The free fibula flap provides sufficient bone length and reliable blood supply, making it one of the most preferred options for complex mandibular reconstruction after tumour or cancer surgery."
    },
    {
        question: "What challenges are addressed in maxillary reconstruction?",
        answer: "Maxillary reconstruction aims to restore mid-face contour, speech, and swallowing. Digital planning helps manage complex anatomy and ensures accurate positioning of grafts or implants."
    },
    {
        question: "Who benefits from digitally planned jaw reconstruction?",
        answer: "Patients undergoing tumour or cancer surgery involving the jaw benefit from pre-planned reconstruction, while surgeons and clinics benefit from improved precision, predictable outcomes, and streamlined surgical workflows."
    }
];

const FaqSection = () => {
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
        <section className="w-full py-16 bg-[#f8fbff]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <h2 className="text-3xl font-bold text-[#005696] text-center mb-10">FAQs</h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default FaqSection;
