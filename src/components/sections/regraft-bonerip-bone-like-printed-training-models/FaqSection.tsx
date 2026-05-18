"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is ReGraft Bonerip Bone-Like Training Model?",
    answer: "ReGraft Bonerip is a high-precision 3D printed anatomical bone model designed for surgical training, simulation, and preoperative planning, replicating real human bone structure using advanced medical 3D printing and imaging workflows."
  },
  {
    question: "How realistic are these bone-like models compared to real human bone?",
    answer: "Bonerip models are fabricated using bone-mimicking materials that replicate the density, tactile feedback, drilling resistance, and cutting feel of natural bone, enabling surgeons to practice procedures in a near-clinical environment."
  },
  {
    question: "What are the clinical applications of Bonerip models?",
    answer: (
      <div>
        <p className="mb-2">Bonerip models are widely used in:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Orthopedic and trauma surgery planning</li>
          <li>Maxillofacial and craniofacial reconstruction</li>
          <li>Tumor resection planning (oncology)</li>
          <li>Implant positioning and fixation practice</li>
          <li>Resident and surgical training programs</li>
        </ul>
        <p>They allow surgeons to simulate procedures before entering the OT, improving precision and reducing intraoperative uncertainty.</p>
      </div>
    )
  },
  {
    question: "Why is bone-like material important in surgical training?",
    answer: (
      <div>
        <p className="mb-2">Unlike standard plastic models, bone-like materials provide:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Realistic drilling and cutting resistance</li>
          <li>Accurate screw fixation feedback</li>
          <li>Better instrument handling simulation</li>
        </ul>
      </div>
    )
  },
  {
    question: "How does Bonerip improve surgical outcomes?",
    answer: (
      <div>
        <p className="mb-2">Studies show that 3D printed anatomical models significantly enhance surgical planning and execution by improving visualization and decision-making. By enabling preoperative rehearsal, Bonerip helps:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Reduce surgical time</li>
          <li>Minimize intraoperative errors</li>
          <li>Improve implant placement accuracy</li>
          <li>Enhance understanding of complex anatomy</li>
        </ul>
      </div>
    )
  },
  {
    question: "Why is Bonerip important in modern surgical education?",
    answer: "Because it allows surgeons to practice without risk, understand complex anatomy, and gain confidence, ultimately leading to safer surgeries and better patient outcomes."
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
        "name": "What is ReGraft Bonerip Bone-Like Training Model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ReGraft Bonerip is a high-precision 3D printed anatomical bone model designed for surgical training, simulation, and preoperative planning, replicating real human bone structure using advanced medical 3D printing and imaging workflows."
        }
      },
      {
        "@type": "Question",
        "name": "How realistic are these bone-like models compared to real human bone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonerip models are fabricated using bone-mimicking materials that replicate the density, tactile feedback, drilling resistance, and cutting feel of natural bone, enabling surgeons to practice procedures in a near-clinical environment."
        }
      },
      {
        "@type": "Question",
        "name": "What are the clinical applications of Bonerip models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonerip models are widely used in: Orthopedic and trauma surgery planning, Maxillofacial and craniofacial reconstruction, Tumor resection planning (oncology), Implant positioning and fixation practice, Resident and surgical training programs. They allow surgeons to simulate procedures before entering the OT, improving precision and reducing intraoperative uncertainty."
        }
      },
      {
        "@type": "Question",
        "name": "Why is bone-like material important in surgical training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike standard plastic models, bone-like materials provide: Realistic drilling and cutting resistance, Accurate screw fixation feedback, Better instrument handling simulation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Bonerip improve surgical outcomes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Studies show that 3D printed anatomical models significantly enhance surgical planning and execution by improving visualization and decision-making. By enabling preoperative rehearsal, Bonerip helps: Reduce surgical time, Minimize intraoperative errors, Improve implant placement accuracy, Enhance understanding of complex anatomy."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Bonerip important in modern surgical education?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because it allows surgeons to practice without risk, understand complex anatomy, and gain confidence, ultimately leading to safer surgeries and better patient outcomes."
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
