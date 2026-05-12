import FaqAccordion from "@/components/common/FaqAccordion";

const faqItems = [
  {
    question: "What is polycarbonate used for in clinical workflows?",
    answer:
      "Medical-grade polycarbonate is used for surgical guides, drill guides, anatomical models, splints, and temporary prosthetic components where strength and precision are required.",
  },
  {
    question: "Is polycarbonate safe for medical and surgical use?",
    answer:
      "Yes. Medical-grade polycarbonate is biocompatible and widely used in medical devices, making it suitable for temporary and intraoperative clinical applications.",
  },
  {
    question: "Why choose polycarbonate over standard plastics or resins?",
    answer:
      "Polycarbonate offers superior impact resistance, higher strength, and better durability, reducing the risk of breakage during surgical handling.",
  },
  {
    question: "Is polycarbonate accurate enough for surgical guides?",
    answer:
      "Yes. It provides excellent dimensional stability and low warpage, ensuring precise fit and reliable guidance during procedures.",
  },
  {
    question: "Can polycarbonate withstand surgical handling and drilling forces?",
    answer:
      "Absolutely. Its high toughness and flexural strength allow it to tolerate drilling, fixation, and repeated handling without cracking.",
  },
  {
    question: "Is polycarbonate compatible with sterilization protocols?",
    answer:
      "Yes. Polycarbonate is compatible with low-temperature sterilization methods such as EtO, maintaining strength and accuracy after sterilization.",
  },
];

const FaqSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="w-full py-16 bg-[#f5f9ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">FAQs</h2>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
};

export default FaqSection;
