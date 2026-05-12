import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What are Regraft customised plates in maxillofacial and orthognathic surgery?",
        answer: "Regraft customised plates are patient-specific titanium plates designed using Virtual Surgical Planning (VSP) and CAD/CAM technology. They are created from patient CT/CBCT data to precisely guide jaw repositioning and facial bone reconstruction with sub-millimeter accuracy."
    },
    {
        question: "How are customised plates different from conventional stock plates?",
        answer: "Unlike stock plates that require intraoperative bending, customised plates are pre-designed to match patient anatomy exactly, eliminating guesswork. This results in: Reduced surgical time, No intraoperative plate adaptation, Higher accuracy in skeletal positioning, More predictable functional and aesthetic outcomes."
    },
    {
        question: "How does Virtual Surgical Planning (VSP) improve surgical accuracy?",
        answer: "VSP allows surgeons to digitally simulate the entire procedure before surgery, including osteotomies and final bone positioning. Custom plates are then designed based on this plan, ensuring precise transfer from virtual plan to operating room with minimal deviation."
    },
    {
        question: "What clinical cases are best suited for customised plates?",
        answer: "Regraft customised plates are ideal for: Orthognathic surgery (maxilla & mandible repositioning), Facial trauma reconstruction (midface, mandibular fractures), Complex deformities and asymmetry corrections, Secondary or revision surgeries."
    },
    {
        question: "What materials are used in Regraft customised plates?",
        answer: "Regraft customised plates are typically manufactured using medical-grade titanium, ensuring: High strength and rigidity, Biocompatibility, Long-term stability, Resistance to corrosion."
    },
    {
        question: "What is the workflow for designing customised plates?",
        answer: "The workflow typically includes: Patient imaging (CT/CBCT), 3D segmentation and anatomical modeling, Virtual surgical planning (osteotomy + repositioning), Custom plate design (CAD), Precision manufacturing (CAM/3D printing)."
    },
    {
        question: "Why should a hospital or surgeon adopt customised plate workflows?",
        answer: "Adopting customised plates enables: Standardization of complex surgeries, Reduced dependence on intraoperative judgment, Improved surgical confidence, Better patient satisfaction."
    }
];

const CustomisedPlatesFAQ = () => {
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
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12 uppercase tracking-tight">
                    Frequently Asked Questions
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default CustomisedPlatesFAQ;
