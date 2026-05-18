"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What are patient-specific 3D printed anatomical models?",
    answer: "Patient-specific models are exact physical replicas of a patient’s anatomy, created using CT/CBCT/MRI imaging data, enabling surgeons to visualize and interact with the case before surgery."
  },
  {
    question: "How are these models created from medical scans?",
    answer: "The process involves high-resolution segmentation of DICOM data, followed by Bio-CAD modeling and precision 3D printing, ensuring that the final model accurately reflects the patient’s anatomical structures and pathology."
  },
  {
    question: "Why are patient-specific models important in modern surgery?",
    answer: "They provide a true 1:1 understanding of complex anatomy, allowing surgeons to plan procedures more precisely, especially in cases involving tumors, deformities, or complex fractures."
  },
  {
    question: "In which clinical cases are these models most useful?",
    answer: (
      <div>
        <p className="mb-2">These models are especially valuable where anatomical variation directly impacts surgical decisions.These are widely used in:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Orthopedic and trauma surgeries</li>
          <li>Maxillofacial and craniofacial reconstruction</li>
          <li>Tumor resection (oncology cases)</li>
          <li>Complex implant planning</li>
        </ul>
      </div>
    )
  },
  {
    question: "How do these models improve surgical planning?",
    answer: (
      <div>
        <p className="mb-2">They allow surgeons to:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Pre-plan surgical cuts and approaches</li>
          <li>Select and adapt implants beforehand</li>
          <li>Simulate procedures physically</li>
        </ul>
        <p>This leads to better accuracy, reduced intraoperative surprises, and improved efficiency in the OT.</p>
      </div>
    )
  },
  {
    question: "How accurate are patient-specific 3D printed models?",
    answer: "These models are derived directly from patient imaging data, achieving high anatomical fidelity and dimensional accuracy, making them reliable for clinical decision-making."
  },
  {
    question: "Can these models represent pathology like tumors or defects?",
    answer: "Yes, they accurately capture pathological structures such as tumors, cysts, defects, and fractures, helping surgeons clearly differentiate between healthy and affected tissues."
  },
  {
    question: "Can surgical guides or implants be tested on these models?",
    answer: "These models enable surgeons to perform trial fitting of plates and implants, pre-bending of fixation hardware, and simulation of cutting or drilling strategies in a controlled environment, allowing for thorough preoperative preparation. As a result, this significantly enhances intraoperative precision, reduces surgical time, and improves overall procedural efficiency."
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are patient-specific 3D printed anatomical models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patient-specific models are exact physical replicas of a patient’s anatomy, created using CT/CBCT/MRI imaging data, enabling surgeons to visualize and interact with the case before surgery."
        }
      },
      {
        "@type": "Question",
        "name": "How are these models created from medical scans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process involves high-resolution segmentation of DICOM data, followed by Bio-CAD modeling and precision 3D printing, ensuring that the final model accurately reflects the patient’s anatomical structures and pathology."
        }
      },
      {
        "@type": "Question",
        "name": "Why are patient-specific models important in modern surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They provide a true 1:1 understanding of complex anatomy, allowing surgeons to plan procedures more precisely, especially in cases involving tumors, deformities, or complex fractures."
        }
      },
      {
        "@type": "Question",
        "name": "In which clinical cases are these models most useful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These models are especially valuable where anatomical variation directly impacts surgical decisions.These are widely used in: Orthopedic and trauma surgeries, Maxillofacial and craniofacial reconstruction, Tumor resection (oncology cases), Complex implant planning"
        }
      },
      {
        "@type": "Question",
        "name": "How do these models improve surgical planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They allow surgeons to: Pre-plan surgical cuts and approaches, Select and adapt implants beforehand, Simulate procedures physically. This leads to better accuracy, reduced intraoperative surprises, and improved efficiency in the OT."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are patient-specific 3D printed models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These models are derived directly from patient imaging data, achieving high anatomical fidelity and dimensional accuracy, making them reliable for clinical decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "Can these models represent pathology like tumors or defects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, they accurately capture pathological structures such as tumors, cysts, defects, and fractures, helping surgeons clearly differentiate between healthy and affected tissues."
        }
      },
      {
        "@type": "Question",
        "name": "Can surgical guides or implants be tested on these models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These models enable surgeons to perform trial fitting of plates and implants, pre-bending of fixation hardware, and simulation of cutting or drilling strategies in a controlled environment, allowing for thorough preoperative preparation. As a result, this significantly enhances intraoperative precision, reduces surgical time, and improves overall procedural efficiency."
        }
      }
    ]
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
