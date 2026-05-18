"use client";

import React from "react";
import FaqAccordion from "@/components/common/FaqAccordion";

const faqItems = [
  {
    question: "What are patient-specific implants for atrophic maxilla and mandible?",
    answer: "Patient-specific implants (PSIs) are custom-designed, 3D printed implants developed from patient CT/CBCT data to restore severely resorbed maxillary or mandibular bone. These implants are digitally engineered to match the patient’s exact anatomy, ensuring optimal fit, stability, and functional rehabilitation."
  },
  {
    question: "Why are patient-specific implants preferred in atrophic jaw cases?",
    answer: "In cases of severe bone loss, conventional implants often require grafting procedures. PSIs eliminate or significantly reduce the need for bone grafting by utilizing existing anatomical structures, thereby reducing surgical complexity, morbidity, and treatment time."
  },
  {
    question: "What imaging data is required for designing these implants?",
    answer: "High-resolution CT or CBCT DICOM data is essential for accurate segmentation and Bio-CAD modeling. This data enables precise reconstruction of the patient’s anatomy, forming the foundation for implant design and surgical planning."
  },
  {
    question: "Which materials are used for patient-specific implants?",
    answer: "These implants are typically fabricated using medical-grade materials such as Titanium or PEEK, chosen for their biocompatibility, mechanical strength, and long-term stability."
  },
  {
    question: "Can these implants eliminate the need for bone grafting?",
    answer: "Yes, in many cases of atrophic maxilla and mandible, patient-specific implants are designed to anchor in available cortical bone, bypassing the need for extensive grafting procedures and enabling immediate or early functional loading."
  },
  {
    question: "How do PSIs improve patient outcomes?",
    answer: "They enhance functional rehabilitation, esthetics, and patient comfort, while reducing surgical invasiveness, treatment duration, and the number of clinical interventions required."
  },
  {
    question: "What makes Graft3D Regraft solutions clinically unique?",
    answer: "Graft3D integrates in-house clinical expertise with advanced Bio-CAD modeling and 3D printing technologies, delivering highly customized, workflow-driven implant solutions tailored specifically for complex atrophic jaw cases"
  }
];

const FaqSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are patient specific implants and why are they important in surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patient specific implants are custom-designed devices tailored to an individual’s unique anatomy. They improve fit, reduce surgery time, and enhance functional outcomes compared to generic off-the-shelf implants."
        }
      },
      {
        "@type": "Question",
        "name": "How does PSI 3D printing India help hospitals and clinics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PSI 3D printing India enables local fabrication of patient personalized implants with faster turnaround times and quality control. It supports surgeons with precise geometry matched to CT or MRI data, improving planning and clinical outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What are custom 3D printed implants used for in medical care?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom 3D printed implants are used to replace or reinforce bone and tissue structures based on individual scan data. They help restore function and symmetry in trauma, tumour resection, or congenital deformity cases."
        }
      },
      {
        "@type": "Question",
        "name": "How are maxillofacial implants 3D printed for complex facial reconstruction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Maxillofacial implants are created using CT or CBCT scan data that is converted into a 3D digital design. Engineers and surgeons collaborate on the implant geometry before manufacturing to ensure accurate fit and reconstruction outcomes."
        }
      },
      {
        "@type": "Question",
        "name": "What is a mandible reconstruction implant 3D print and when is it needed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mandible reconstruction implant 3D print replaces or supports the jawbone after trauma, tumour resection, or disease. By matching individual bone anatomy, it improves chewing function and facial contour compared to standard reconstruction plates."
        }
      },
      {
        "@type": "Question",
        "name": "Can a patient specific orthopedic implant improve recovery compared to standard implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Patient specific orthopedic implants are designed to match bone geometry precisely, reducing gaps and stress points. This improved fit can enhance stability, reduce complications, and support faster recovery compared to conventional implants."
        }
      },
      {
        "@type": "Question",
        "name": "What materials are commonly used for patient specific maxilla and mandible implants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Titanium and PEEK (Polyetheretherketone) are commonly used materials for patient specific implants. These materials are biocompatible, lightweight, durable, and suitable for complex cranio-maxillofacial reconstruction procedures."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to design and manufacture a patient specific implant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline depends on the complexity of the case, imaging quality, and surgical planning requirements. Most patient specific implants can be designed, reviewed, and manufactured within a few days to a couple of weeks."
        }
      },
      {
        "@type": "Question",
        "name": "What imaging data is required for designing a patient specific implant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CT, CBCT, or MRI DICOM data is typically required for designing patient specific implants. These scans help create accurate 3D anatomical models for precise surgical planning and implant fabrication."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advantages of patient specific implants over traditional reconstruction methods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patient specific implants offer improved surgical accuracy, reduced operative time, enhanced fixation stability, better anatomical fit, and improved aesthetic and functional outcomes compared to traditional reconstruction methods."
        }
      }
    ]
  };

  return (
    <section className="w-full py-16 bg-[#f8fbff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-[#005696] text-center mb-10">FAQs</h2>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
};

export default FaqSection;
