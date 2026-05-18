"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What are Transparent 3D Printed Models in surgical planning?",
    answer: "Transparent 3D printed models are anatomically accurate replicas created from CT or CBCT data using clear, medical-grade resins, allowing clinicians to visualize both external morphology and internal structures such as canals, lesions, or vascular pathways."
  },
  {
    question: "How are these transparent models different from conventional opaque models?",
    answer: "Unlike opaque models, transparent models enable simultaneous visualization of internal anatomy without sectioning, making them highly valuable for understanding complex pathologies, fracture patterns, or tumor margins."
  },
  {
    question: "What imaging data is required to fabricate these models?",
    answer: "High-resolution CT/CBCT DICOM data is used to segment anatomical structures, which are then digitally processed and 3D printed to achieve precise transparency and anatomical fidelity."
  },
  {
    question: "How accurate are Transparent 3D Printed Models?",
    answer: "These models offer high dimensional accuracy (often within ±0.1–0.3 mm depending on printer and workflow), ensuring reliable representation of both external contours and internal anatomical details."
  },
  {
    question: "What are the key clinical applications of transparent models?",
    answer: "They are widely used in maxillofacial surgery, orthopedics, neurosurgery, and oncology for visualizing internal defects, tumor boundaries, nerve canals, and vascular structures prior to surgery."
  },
  {
    question: "Can these models be used for surgical simulation and planning?",
    answer: "Yes, clinicians can perform visual planning, spatial orientation, and guided decision-making, especially in cases where internal anatomy plays a critical role in surgical outcomes."
  },
  {
    question: "Do Transparent Models help in patient communication?",
    answer: "Absolutely. The ability to see through the model helps patients clearly understand their condition, improving treatment acceptance and informed consent."
  },
  {
    question: "Can multiple anatomical structures be highlighted in one transparent model?",
    answer: "Yes, advanced workflows allow multi-color or tinted segmentation within transparent models, helping differentiate structures like tumors, nerves, or implants for better clinical interpretation."
  },
  {
    question: "How do Transparent Models improve surgical outcomes?",
    answer: "By providing a clear understanding of internal anatomy, these models reduce intraoperative guesswork, enhance precision, and contribute to shorter surgical time and improved safety."
  },
  {
    question: "Why choose Graft3D Transparent 3D Printed Models?",
    answer: "Graft3D combines advanced segmentation, high-resolution printing, and clinical expertise to deliver models that enhance visualization, improve surgical confidence, and support superior patient outcomes."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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
    <section className="w-full py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-4">
        <h2
          className="text-center text-[30px] font-bold text-[#1B6DB1] mb-6"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          FAQs
        </h2>
        <div className="w-full">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left py-[15px] px-[15px] border-b border-[#d5d8dc] text-[#1B6DB1] text-[16px] font-semibold"
                >
                  <span>{item.question}</span>
                  <span className="text-[#1B6DB1] text-lg font-semibold">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-b border-[#d5d8dc] px-[15px] py-[15px] text-[16px] text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
