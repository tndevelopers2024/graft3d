"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is the Graft3D Regraft Bonerip coloured 3D printed model?",
    answer: "The Graft3D Regraft Bonerip is a patient-specific, coloured 3D printed anatomical model designed using CT/CBCT imaging data. It accurately replicates bone morphology with color-coded anatomical differentiation, enabling enhanced visualization for diagnosis, surgical planning, and education."
  },
  {
    question: "How is a coloured 3D printed bone model different from a standard (monochrome) model?",
    answer: "Unlike conventional single-color models, coloured 3D prints provide segmented anatomical clarity, distinguishing structures such as cortical bone, cancellous bone, defects, lesions, and critical landmarks. This significantly improves clinical interpretation, communication, and surgical precision."
  },
  {
    question: "Can the coloured model be used for surgical simulation or drilling?",
    answer: "These models are primarily designed for visualization, planning, and patient communication. While they provide structural accuracy, they are not always suitable for drilling or load-bearing simulation unless specifically requested with reinforced materials."
  },
  {
    question: "How does this model improve surgical planning outcomes?",
    answer: "Color-coded models help clinicians clearly identify defect margins and anatomical boundaries while enabling precise pre-planning of osteotomies and implant positioning. They reduce intraoperative guesswork, improving surgical predictability, efficiency, and overall clinical outcomes."
  },
  {
    question: "Is the model useful for patient education and case acceptance?",
    answer: "Absolutely. The coloured model helps patients visually understand their condition, increasing trust and significantly improving treatment acceptance rates."
  },
  {
    question: "Can multiple anatomical structures be highlighted in different colours?",
    answer: "Yes. Custom segmentation allows for multi-structure color mapping, including nerves, sinuses, defects, tumors, or graft regions—tailored to the clinical requirement."
  },
  {
    question: "What specialties benefit most from coloured 3D printed bone models?",
    answer: "Coloured 3D printed bone models are highly beneficial in specialties such as maxillofacial surgery, implant dentistry, orthopedics, neurosurgery, and plastic & reconstructive surgery. They enhance visualization, enabling better diagnosis, surgical planning, and precision in complex cases."
  },
  {
    question: "What makes Graft3D Regraft Bonerip unique in the market?",
    answer: "Graft3D models combine true patient-specific customization with high-fidelity color segmentation for precise anatomical representation. Built on clinically driven workflows, they support accurate surgical planning and informed decision-making."
  },
  {
    question: "How do I order a coloured 3D printed Bonerip model from Graft3D?",
    answer: "Simply upload your DICOM dataset and clinical requirements via Graft3D. The team will handle segmentation, design, and production, delivering a ready-to-use model."
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
