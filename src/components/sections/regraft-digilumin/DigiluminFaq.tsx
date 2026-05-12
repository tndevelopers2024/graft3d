import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is Regraft Digilumin?",
        answer: "Regraft Digilumin is a patient-specific 3D printed surgical guide system designed to enable high-precision drilling, cutting, and implant placement across multiple specialties, including dental, cranio-maxillofacial, neurosurgical, and orthopaedic procedures."
    },
    {
        question: "Which clinical domains can Digilumin be used in?",
        answer: "Digilumin is designed for multi-specialty surgical applications, including: Dental implantology, Cranio-maxillofacial surgery, Cranial flap and neurosurgical procedures, Orthopaedic drilling and fixation, Trauma and reconstructive surgeries."
    },
    {
        question: "Does Digilumin help in immediate implant placement?",
        answer: "Yes. Its precision allows same-day implant placement protocols, ensuring efficient and predictable results."
    },
    {
        question: "How does Digilumin improve surgical accuracy across specialties?",
        answer: "Using CBCT/CT-based virtual surgical planning (VSP), Digilumin translates digital plans into physical surgical guides, ensuring: Accurate drilling trajectory, Controlled depth and angulation, Reproducible surgical outcomes."
    },
    {
        question: "What data is required to design a Digilumin guide?",
        answer: "The system requires: CT or CBCT imaging (DICOM), Optional surface scans (STL). These are merged to create a patient-specific 3D surgical plan and guide."
    },
    {
        question: "Can Digilumin be integrated with other Regraft solutions?",
        answer: "Yes. It integrates seamlessly with: Virtual Surgical Planning (VSP), Customised plates, Patient-specific implants. Creating a fully guided surgical ecosystem."
    },
    {
        question: "Who should adopt Digilumin in their practice?",
        answer: "Oral & maxillofacial surgeons, Neurosurgeons, Orthopaedic surgeons, Implantologists, Surgical planning labs and hospitals."
    },
    {
        question: "How do I get started with Regraft Digilumin?",
        answer: "Upload CBCT and scan data, Collaborate on virtual planning, Approve the design, Receive your custom surgical guide."
    }
];

const DigiluminFaq = () => {
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
        <section className="py-20 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default DigiluminFaq;
