import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What does Graft3D specialize in?",
        answer: "Graft3D specializes in patient-specific medical solutions, including CT/MRI/CBCT to 3D model conversion, surgical planning, and custom-designed implants and guides for clinical use."
    },
    {
        question: "Who can benefit from Graft3D services?",
        answer: "Our services are designed for surgeons, hospitals, clinics, and patients who require accurate anatomical models, customized implants, or procedure-specific surgical guides."
    },
    {
        question: "Which medical applications does Graft3D support?",
        answer: "We support applications across cranio-maxillofacial, orthopaedics, dental, spinal, and trauma cases, including pre-surgical planning, implant design, and cutting or drilling guides."
    },
    {
        question: "What imaging data is required to get started?",
        answer: "We work with CT, MRI, and CBCT DICOM data. Once the scan is shared, our team handles segmentation, 3D modeling, and design based on the clinical requirement."
    },
    {
        question: "How long does it take to deliver a solution?",
        answer: "Turnaround time depends on case complexity, but most models, guides, or implant designs are delivered within a few working days, with urgent cases prioritized when required."
    },
    {
        question: "How can surgeons or clinics collaborate with Graft3D?",
        answer: "Simply contact us with your case details or imaging data. Our team works closely with surgeons and clinics to ensure accuracy, customization, and clinical confidence at every step."
    }
];

const HomeFaqSection = () => {
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

export default HomeFaqSection;

