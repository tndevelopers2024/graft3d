import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
  {
    question: "What is included in the 3D printing package for facial prosthesis?",
    answer: "The facial prosthesis package includes a facial 3D scanner Einscan Medixa for capturing patient anatomy, dedicated design software Geomagic Freeform for prosthesis modeling, and a 3D printer(MJP 2500)  capable of printing wax patterns. Together, these components enable a complete digital workflow from facial scanning to prosthesis fabrication."
  },
  {
    question: "How does a 3D scanner help in facial prosthesis fabrication?",
    answer: "Einscan Medixa captures the external facial anatomy accurately and non-invasively. This digital facial data serves as a precise reference for designing patient-specific prostheses such as ears, noses, or orbital prostheses, improving symmetry, fit, and aesthetics."
  },
  {
    question: "What role does the Geomagic freeform play in this workflow?",
    answer: "Geomagic Freeform allows clinicians or technicians to digitally sculpt and refine facial prostheses using the scanned facial data with a haptic device. It supports anatomical mirroring, margin control, and shape adjustments before fabrication, reducing manual trial-and-error and improving predictability."
  },
  {
    question: "Why is wax 3D printing used for facial prosthesis fabrication?",
    answer: "Wax 3D printing is commonly used to produce accurate prosthesis patterns that can be tried on the patient or used for mold making. Printing in wax allows easy modification, smooth surface finishing, and seamless integration into conventional silicone prosthesis workflows."
  },
  {
    question: "Is this package suitable for private prosthodontic clinics?",
    answer: "Yes. The package is designed for clinics and private prosthodontic practices that handle facial prosthesis cases. It supports in-house digitization, design, and prototyping, helping clinicians reduce dependency on external labs and shorten turnaround times."
  },
  {
    question: "Do I need advanced CAD or engineering knowledge to use this system?",
    answer: "No advanced engineering background is required. The workflow is optimized for clinical use, and the design software is intended to be intuitive for dental and prosthodontic professionals. Training and workflow guidance can further simplify adoption. We provide a 5 Day intensive training program for 3D Scanner and Software training."
  },
  {
    question: "What types of facial prostheses can be fabricated using this package?",
    answer: "This package can be used to design and fabricate wax patterns for auricular (ear), nasal, orbital, and other facial prostheses. The digital workflow supports customization based on patient anatomy and clinical requirements."
  }
];

const FaqSection = () => {
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
        <section className="py-14 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-[900px] mx-auto px-4">
                <h2 className="text-[32px] font-bold text-gray-900 text-center mb-10">
                    FAQs
                </h2>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default FaqSection;

