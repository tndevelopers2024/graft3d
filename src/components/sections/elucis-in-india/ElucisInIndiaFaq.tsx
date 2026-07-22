import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "1. What is the Elucis VR Surgical Planning Platform?",
        answer: "The Elucis platform is an advanced 3D Virtual Reality solution that transforms medical imaging (CT/MRI) into immersive, patient-specific 3D models to assist surgeons and hospitals in India with preoperative planning."
    },
    {
        question: "2. How can Indian hospitals benefit from adopting Elucis?",
        answer: "Elucis helps hospitals enhance surgical precision, improve multidisciplinary collaboration, and elevate patient education. It integrates seamlessly with existing DICOM workflows to provide cost-effective and advanced medical visualization."
    },
    {
        question: "3. Are Elucis platforms compatible with existing hospital infrastructure?",
        answer: "Yes. Elucis is designed to seamlessly integrate with standard medical imaging data (DICOM) and PACS systems commonly used across healthcare facilities in India, requiring minimal infrastructure overhead."
    },
    {
        question: "4. What medical specialties can use the Elucis platform?",
        answer: "Elucis is highly beneficial across multiple specialties including craniomaxillofacial surgery, neurosurgery, orthopaedics, cardiovascular surgery, oncology, and trauma reconstruction."
    },
    {
        question: "5. How does Elucis improve patient education and consent?",
        answer: "By visualizing patient-specific anatomy in an immersive 3D space, clinicians can easily explain complex conditions and surgical procedures to patients and their families, ensuring clearer understanding and informed consent."
    },
    {
        question: "6. Is local support and training available for hospitals in India?",
        answer: "Yes, Graft3D provides dedicated local support, guided onboarding, and clinical training for healthcare professionals in India to ensure a smooth transition to Virtual Reality surgical planning."
    }
];

const ElucisInIndiaFaq = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-450 mx-auto px-4 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about adopting the Elucis platform in your hospital.
                    </p>
                </div>
                <div className="max-w-400 mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default ElucisInIndiaFaq;
