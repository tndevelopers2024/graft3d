import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is the EinScan Medixa 3D Scanner used for?",
        answer: "The EinScan Medixa is a medical-grade 3D scanner specifically designed for prosthetics, orthotics, and facial prosthesis applications. It enables accurate digital capture of patient anatomy, supporting the design and fabrication of customized medical devices such as limb prostheses, orthoses, craniofacial prosthetics, and rehabilitation solutions."
    },
    {
        question: "How accurate is the EinScan Medixa for medical applications?",
        answer: "The scanner delivers high-resolution and clinically reliable accuracy of 0.3 mm, essential for medical-grade applications. This level of precision ensures better-fitting prostheses and orthoses, improved patient comfort, and reduced need for remakes or manual adjustments."
    },
    {
        question: "Can this scanner be used in private clinics and hospitals?",
        answer: "Absolutely. The EinScan Medixa is well-suited for private clinics, rehabilitation centers, and hospitals, offering fast scanning, reliable accuracy, and hygienic non-contact operation. It integrates smoothly into clinical workflows, helping practitioners reduce patient turnaround time while improving fitting precision."
    },
    {
        question: "Is the scanning process safe and comfortable for patients?",
        answer: "Yes. The EinScan Medixa uses non-invasive, non-contact optical scanning, making it completely safe and comfortable for patients. It is especially beneficial for scanning sensitive areas such as the face, residual limbs, or post-operative regions without causing discomfort."
    },
    {
        question: "What types of applications can be supported with this scanner?",
        answer: "The EinScan Medixa supports a wide range of applications, including upper and lower limb prosthetics, enabling precise digital capture for customized fittings. It is widely used for designing orthotic devices such as AFOs, KAFOs, and spinal orthoses with high accuracy and consistency. Additionally, it is suitable for facial prostheses, medical research, and training, making it a versatile solution for clinical and educational environments."
    },
    {
        question: "Is the scanner compatible with CAD/CAM and 3D printing workflows?",
        answer: "Yes. The EinScan Medixa seamlessly integrates with CAD/CAM software and 3D printing systems, enabling a complete digital workflow—from scanning to design and fabrication. This makes it ideal for labs and institutions adopting digital manufacturing in healthcare."
    },
    {
        question: "What support and training options are available?",
        answer: "Graft3D provides installation support, user training, and technical assistance for the EinScan Medixa. Hands-on training is provided for students, clinicians, and technicians using real-time patient cases, ensuring practical understanding of the scanning process. This approach helps users gain confidence in actual clinical scenarios, allowing them to fully utilize the scanner’s capabilities in day-to-day clinical practice."
    }
];

const EinscanMedixaFaq = () => {
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
        <section className="py-20 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Frequently Asked Questions</h2>
                </div>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default EinscanMedixaFaq;

