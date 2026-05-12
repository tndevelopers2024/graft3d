import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is ReGraft and how does it transform modern surgery?",
        answer: "ReGraft is a next-generation digital surgical ecosystem that combines high-resolution imaging, virtual surgical planning (VSP), and 3D printing to create patient-specific solutions for complex surgical cases. It enables surgeons to move from estimation-based surgery to precision-driven execution, improving outcomes and confidence."
    },
    {
        question: "What types of clinical solutions does ReGraft offer?",
        answer: "ReGraft provides a complete portfolio including: Patient-specific implants (PSI) for reconstruction, VSP-based cutting guides and fixation plates, 3D printed anatomical models for planning and simulation. This integrated approach supports pre-operative planning, intraoperative guidance, and post-operative predictability in a single workflow."
    },
    {
        question: "Which surgical specialties benefit most from ReGraft solutions?",
        answer: "ReGraft is widely used across: Oral & Maxillofacial Surgery (OMFS), Craniofacial and reconstructive surgery, Orthopaedics and tumor resection cases, Facial trauma and deformity correction. It is especially valuable in complex, high-risk, or anatomically compromised cases where precision is critical."
    },
    {
        question: "How does ReGraft improve surgical accuracy and reduce complications?",
        answer: "By translating CT/CBCT-based planning directly into surgical guides and implants, ReGraft eliminates intraoperative guesswork. This results in: Sub-millimeter accuracy in execution, Reduced intraoperative errors, Better preservation of critical anatomy."
    },
    {
        question: "Can ReGraft reduce surgical time and improve workflow efficiency?",
        answer: "Yes. Pre-designed guides, implants, and models significantly reduce intraoperative decision-making, manual adjustments, and trial-and-error steps, leading to: Shorter operating time, Improved OT efficiency, Reduced anesthesia exposure for patients."
    },
    {
        question: "What materials are used in ReGraft solutions and are they clinically safe?",
        answer: "ReGraft utilizes medical-grade biomaterials such as titanium, PEEK, PMMA, and polycarbonate, selected based on the clinical application. These materials offer biocompatibility, strength, sterilization compatibility, and long-term stability, ensuring safe and reliable surgical outcomes."
    },
    {
        question: "How does ReGraft support surgeons before the actual surgery?",
        answer: "ReGraft enables preoperative simulation using patient-specific 3D models and virtual planning, allowing surgeons to: Visualize complex anatomy clearly, Rehearse procedures in advance, Identify risks before entering the OT."
    },
    {
        question: "Is ReGraft suitable for hospitals and institutional adoption?",
        answer: "Yes. ReGraft is designed as a scalable, end-to-end solution for hospitals, academic institutions, and surgical centers, enabling them to integrate digital surgery workflows, in-house planning, and advanced patient-specific care into routine practice."
    }
];

const RegraftFAQ = () => {
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
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12 uppercase tracking-tight">
                    Frequently Asked Questions
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default RegraftFAQ;
