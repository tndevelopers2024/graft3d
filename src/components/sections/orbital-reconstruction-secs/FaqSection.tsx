import FaqAccordion from "@/components/common/FaqAccordion";

const faqItems = [
  {
    question: "What is orbital reconstruction and when is it clinically indicated?",
    answer:
"Orbital reconstruction is required to restore the bony orbit after trauma, tumour resection, infection, or congenital deformity. The primary goals are accurate orbital volume restoration, globe support, and prevention of functional complications such as diplopia and enophthalmos."  },
  {
    question: "How do 3D printed orbital reconstruction models support surgical planning?",
    answer:
      "3D printed orbital reconstruction models provide a tangible, patient-accurate representation of orbital defects. These models help surgeons assess defect size, plan implant positioning, and evaluate symmetry before surgery, improving intraoperative accuracy.",
  },
  {
    question: "What are the benefits of patient-specific and custom orbital implants?",
    answer:
      "Patient-specific and custom orbital implants are designed directly from CT data, ensuring precise anatomical fit. This reduces intraoperative contouring, improves orbital volume restoration, and leads to more predictable functional and aesthetic outcomes.",
  },
  {
    question: "When are titanium orbital implants preferred?",
    answer:
      "Titanium orbital implants are preferred in cases requiring high mechanical strength, long-term stability, or reconstruction of large or multi-wall defects. Titanium offers excellent biocompatibility and is commonly used in complex orbital reconstruction scenarios.",
  },
  {
    question: "What are the clinical advantages of PEEK orbital implants?",
    answer:
      "PEEK orbital implants are lightweight, radiolucent, and have an elastic modulus closer to bone. These properties allow improved postoperative imaging assessment and precise anatomical reconstruction, making PEEK suitable for patient-specific orbital reconstruction.",
  },
  {
    question: "How do 3D printed orbital implants improve hospital workflows?",
    answer:
      "3D printed orbital implants enable preoperative planning and accurate implant fabrication, reducing surgical time and intraoperative adjustments. This supports efficient orbital reconstruction solutions for hospitals and improves consistency in clinical outcomes.",
  },
  {
    question: "What should hospitals consider when selecting orbital reconstruction services?",
    answer:
      "Hospitals should evaluate orbital reconstruction services based on clinical expertise, availability of 3D printed orbital implants, material options such as titanium and PEEK, regulatory compliance, and collaboration with the surgical team throughout planning and execution.",
  }
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
