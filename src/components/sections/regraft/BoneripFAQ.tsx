"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What is Bonerip and how does it enhance surgical planning?",
        answer: "Bonerip is a patient-specific 3D printed anatomical bone model created from CT/CBCT/MRI data, enabling surgeons to visualize and physically interact with complex anatomy before surgery. It transforms planning from 2D interpretation to real-world understanding, improving precision and confidence."
    },
    {
        question: "In which clinical scenarios is Bonerip most valuable?",
        answer: "Bonerip is highly effective in: Complex maxillofacial and craniofacial surgeries, Tumor resections and reconstruction planning, Orthopaedic deformity corrections, Trauma cases with distorted anatomy."
    },
    {
        question: "How does Bonerip improve surgical accuracy and outcomes?",
        answer: "By providing a true-to-scale, tactile replica of patient anatomy, Bonerip allows surgeons to: Pre-plan osteotomies and fixation strategies, Simulate surgical steps before entering the OT, Identify risks and anatomical limitations early. This leads to reduced intraoperative errors and improved predictability."
    },
    {
        question: "Can Bonerip reduce operative time and surgical stress?",
        answer: "Yes. Preoperative rehearsal using Bonerip significantly reduces: Intraoperative decision-making time, Trial-and-error adjustments, Unexpected challenges during surgery."
    },
    {
        question: "What types of anatomical models are available in Bonerip?",
        answer: "Bonerip offers multiple model types to suit different clinical needs: Bone-like models for realistic drilling and cutting simulation, Patient-specific models for surgical planning, Transparent models for internal anatomical visualization, Coloured models for teaching and communication."
    },
    {
        question: "How does Bonerip support training and institutional adoption?",
        answer: "Bonerip serves as a powerful tool for surgical training, simulation labs, and academic institutions, enabling hands-on practice without patient risk. It helps improve learning curves, team coordination, and procedural standardization across departments."
    },
    {
        question: "How does Bonerip compare to conventional imaging-based planning?",
        answer: "Unlike 2D imaging or screen-based 3D visualization, Bonerip provides a physical, touch-based understanding of anatomy, improving spatial awareness and surgical strategy especially in complex or high-risk cases."
    },
    {
        question: "Does Bonerip improve patient communication and case acceptance?",
        answer: "Yes. Patient-specific models help surgeons visually explain the condition and treatment plan, improving patient understanding, trust, and case acceptance rates, especially in complex or elective procedures."
    },
    {
        question: "Do you deliver the Regraft Bonerip all over India?",
        answer: "Yes, we doorstep deliver Bonerip throughout India."
    },
    {
        question: "What is the delivery time of the Bonerip to our hospital?",
        answer: "It depends on the location of your institute; it will take a minimum of 2 to 3 working days for delivery to receive the Bonerip."
    },
    {
        question: "How do you make Bonerip?",
        answer: "Bonerip range of products are made using 3D printing technology to create highly detailed and realistic representations of human bone, making it easier for medical professionals to understand the structure of human bone."
    },
    {
        question: "Is it possible to purchase Bonerip products online?",
        answer: "Yes, you can purchase Bonerip products online by clicking on the provided link. You can either upload a patient medical scan to receive a patient-specific model or buy a standard bone-like model."
    },
    {
        question: "What types of models does Bonerip offer?",
        answer: "Bonerip offers four types of 3D-printed anatomical models: coloured models, transparent models, bone-like models, and patient-specific models. Each type of model is designed for specific surgical applications and training needs."
    },
    {
        question: "What are Bonerip’s bone-like 3D-printed training models?",
        answer: "Bonerip’s bone-like training models are made from a durable, bone-like material that closely mimics the texture and feel of real bone. These models are ideal for practising surgical techniques and procedures, providing a realistic simulation of human bone structure."
    },
    {
        question: "What are Bonerip's patient-specific 3D-printed bone models?",
        answer: "Bonerip’s patient-specific 3D printed bone models are created from human bone-like material and provide an accurate and highly detailed representation of a patient’s bone structure. These models are ideal for surgical planning and training, allowing medical professionals to practice and perfect their skills before performing surgeries on real patients."
    },
    {
        question: "How can Bonerip's 3D-printed anatomical models benefit medical professionals?",
        answer: "Bonerip’s 3D-printed anatomical models provide medical professionals with a comprehensive solution for surgical planning and training, allowing them to practice and perfect their skills before performing surgeries on real patients. These models provide a realistic simulation of human bone structure, making it easier to study and understand complex medical concepts."
    }
];

const BoneripFAQ = () => {
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
            <div className="max-w-4xl mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1e73be] mb-12">
                    FAQs
                </h2>
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default BoneripFAQ;
