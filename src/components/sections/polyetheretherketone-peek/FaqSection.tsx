import FaqAccordion from "@/components/common/FaqAccordion";

const faqItems = [
  {
    question: "What is Polyetheretherketone PEEK and why is it used in medical implants?",
    answer:
      "Polyetheretherketone PEEK is a high-performance polymer known for strong mechanical and chemical properties. It’s widely used for orthopaedic, trauma, dental, and spinal implants due to its dependable safety record and suitability for complex 3D printed parts.",
  },
  {
    question: "Why is PEEK used in medical implants?",
    answer:
      "PEEK is favored for medical implants because its mechanical stiffness closely mimics human bone, which reduces the risk of bone degradation caused by stress shielding. Its exceptional biocompatibility and chemical resistance ensure the material remains stable and non-toxic within the body, even when subjected to rigorous sterilization processes. Additionally, PEEK is radiolucent, allowing doctors to clearly monitor healing through X-rays and MRIs, while its versatility supports advanced 3D printing for patient-specific designs.",
  },
  {
    question: "Where is PEEK commonly used in medical applications?",
    answer:
      "PEEK is used in areas such as orthopaedics, spine-related procedures, dental applications, and prosthetics, depending on clinical needs and approved workflows. Its use is guided by medical standards and clinician expertise.",
  },
  {
    question: "Is PEEK 3D printing available in India?",
    answer:
      "PEEK 3D printing is available in India through specialized medical and industrial partners who support controlled workflows and quality requirements.",
  },
  {
    question: "Is PEEK used for patient-specific implants?",
    answer:
      "PEEK is often considered for custom or patient-matched medical components. Its use depends on proper design validation, manufacturing quality, and clinical approval for each case.",
  },
  {
    question: "How does Graft3D support medical PEEK workflows?",
    answer:
      "Graft3D supports medical PEEK workflows by providing technical expertise, application guidance, and training to help clinics and institutions adopt advanced medical manufacturing responsibly.",
  },
];

const FaqSection = () => {
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
    <section className="w-full py-16 bg-[#f5f9ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-6">FAQs</h2>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
};

export default FaqSection;
