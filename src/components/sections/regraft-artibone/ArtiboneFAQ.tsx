import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is Artibone and how does it redefine bone reconstruction?",
        answer: "Artibone is a patient-specific bone reconstruction solution that combines virtual surgical planning (VSP), advanced biomaterials, and 3D printing to restore anatomy, function, and aesthetics with unmatched precision. It enables surgeons to move from conventional grafting to digitally driven, personalized reconstruction."
    },
    {
        question: "In which clinical cases is Artibone most beneficial?",
        answer: "Artibone is ideal for complex craniofacial, maxillofacial, and orthopedic reconstructions, including: Tumor resection defects, Trauma-related bone loss, Congenital deformities, Revision surgeries."
    },
    {
        question: "How does Artibone improve surgical accuracy and predictability?",
        answer: "Artibone leverages CT/CBCT-based planning and VSP to create implants that match the patient’s exact anatomy. This ensures: Precise defect reconstruction, Accurate anatomical restoration, Reduced intraoperative adjustments. Resulting in highly predictable functional and aesthetic outcomes."
    },
    {
        question: "What materials are used in Artibone and are they clinically reliable?",
        answer: "Artibone uses medical-grade titanium, PEEK, PMMA, and polycarbonate, selected based on the clinical indication. These materials provide biocompatibility, strength, sterilization compatibility, and long-term durability, ensuring safe and reliable reconstruction."
    },
    {
        question: "Does Artibone reduce surgical time and improve workflow efficiency?",
        answer: "Yes. By providing pre-designed, patient-specific implants, Artibone minimizes intraoperative shaping and trial-and-error, leading to: Reduced operative time, Improved OT efficiency, Lower surgical risk and fatigue. This allows surgeons to focus more on execution rather than intraoperative decision-making."
    },
    {
        question: "Can Artibone be integrated with tumor resection and reconstruction workflows?",
        answer: "Yes. Artibone supports simultaneous resection and reconstruction planning, enabling surgeons to achieve accurate margins and immediate anatomical restoration in oncologic cases."
    },
    {
        question: "How does Artibone impact long-term functional and aesthetic outcomes?",
        answer: "By restoring native anatomy with high precision, Artibone improves: Occlusion and biomechanics, Facial symmetry and contour, Long-term structural stability. This leads to better functional recovery and superior aesthetic results, enhancing overall patient satisfaction."
    }
];

const ArtiboneFAQ = () => {
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

export default ArtiboneFAQ;
