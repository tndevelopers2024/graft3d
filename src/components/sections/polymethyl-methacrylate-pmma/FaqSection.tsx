import FaqAccordion from "@/components/common/FaqAccordion";

const faqItems = [
  {
    question: "What is medical-grade PMMA and where is it commonly used in clinical practice?",
    answer:
      "Medical-grade PMMA (Polymethyl Methacrylate) is a well-established biomaterial widely used in craniofacial reconstruction, maxillofacial surgery, neurosurgery, and facial contour restoration. It is preferred for patient-specific implants due to its biocompatibility, stability, and predictable clinical performance.",
  },
  {
    question: "Is PMMA suitable for long-term craniofacial and facial implant applications?",
    answer:
      "Yes. PMMA has a long history of safe, long-term clinical use in cranial and facial reconstructions. When properly designed and implanted, it demonstrates excellent biological tolerance, minimal tissue reaction, and long-term dimensional stability.",
  },
  {
    question: "What are the key mechanical properties of PMMA relevant to surgeons?",
    answer:
      "PMMA offers high compressive strength, good flexural resistance, and impact stability, making it suitable for both structural and contour-defining implants. These properties allow the implant to maintain anatomical accuracy under physiological loads without deformation.",
  },
  {
    question: "Can PMMA be used for patient-specific, CT-based implant design?",
    answer:
      "Yes. PMMA is highly compatible with digital workflows, including CT/CBCT-based planning, CAD design, and 3D-manufactured implant fabrication. This enables accurate patient-specific implants, improving fit, symmetry, and surgical predictability.",
  },
  {
    question: "How does PMMA compare with titanium and PEEK implants?",
    answer:
      "Compared to titanium, PMMA is lighter, radiolucent, and easier to modify intraoperatively. Compared to PEEK, PMMA offers a proven clinical track record, cost efficiency, and excellent surface finish, making it a practical option for many craniofacial and aesthetic reconstructions.",
  },
  {
    question: "Is PMMA radiolucent and suitable for post-operative imaging?",
    answer:
      "Yes. PMMA is radiolucent, allowing clear visualization on CT and MRI scans without image artifacts. This supports accurate post-operative assessment, long-term follow-up, and complication monitoring.",
  },
  {
    question: "What sterilization methods are compatible with PMMA implants?",
    answer:
      "PMMA implants are compatible with standard low-temperature sterilization methods such as ethylene oxide (EtO). These methods preserve the material’s structural integrity and dimensional accuracy while ensuring clinical safety.",
  },
  {
    question: "How does PMMA contribute to reduced surgical time and improved outcomes?",
    answer:
      "By enabling pre-planned, anatomically precise implants, PMMA reduces intraoperative shaping, trial-and-error fitting, and overall surgical time. This leads to more predictable results, improved symmetry, and enhanced patient outcomes.",
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
