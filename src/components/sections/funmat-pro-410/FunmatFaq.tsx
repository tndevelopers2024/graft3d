import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqs = [
    {
        question: "What is the INTAMSYS FUNMAT PRO 410 HT designed for?",
        answer: "The FUNMAT PRO 410 HT is an industrial high-temperature FFF 3D printer engineered for continuous, precision manufacturing of high-performance thermoplastics, including medical and engineering-grade materials."
    },
    {
        question: "Which high-performance materials can be printed on the FUNMAT PRO 410 HT?",
        answer: "The system supports PEEK, PEKK, PPSU, PSU, PC, Nylon composites, and other high-temperature polymers, making it suitable for demanding medical and industrial applications."
    },
    {
        question: "Why is a high-temperature printer important for medical applications?",
        answer: "High-temperature capability enables the use of implant-grade and sterilizable polymers that offer biocompatibility, mechanical strength, and chemical resistance, which are essential in medical environments."
    },
    {
        question: "What medical domains can benefit from this 3D printer?",
        answer: "The FUNMAT PRO 410 HT is widely used in cranio-maxillofacial and orthopaedic labs, as well as for surgical guide and instrumentation manufacturing. It is also ideal for patient-specific anatomical models and medical device R&D and prototyping."
    },
    {
        question: "Is the printer suitable for hospital and institutional environments?",
        answer: "Yes. Its fully enclosed heated chamber, material stability controls, and industrial-grade build quality make it suitable for in-house hospital labs, academic institutions, and regulated medical facilities."
    },
    {
        question: "Can this printer be used for sterilizable medical components?",
        answer: "Yes. Materials printed on the FUNMAT PRO 410 HT—such as PEEK and PPSU—are compatible with standard medical sterilization methods, enabling the production of sterilizable surgical tools and guides."
    },
    {
        question: "Can the FUNMAT PRO 410 HT be used for prosthetic and orthotic applications?",
        answer: "Yes. The system is well suited for prosthetic and orthotic manufacturing, including custom prosthetic sockets, orthotic braces, AFOs, spinal supports, and structural components requiring high strength and durability."
    },
    {
        question: "Which materials supported by this printer are suitable for prosthetics and orthotics?",
        answer: "High-performance polymers such as PEEK, PEKK, PPSU, and reinforced nylons offer impact resistance, fatigue strength, lightweight performance, and sterilization compatibility, making them ideal for clinical and functional P&O devices."
    },
    {
        question: "Is the Funmat Pro 410 an FDM 3D printer for medical & industrial use with a large build size?",
        answer: "Yes—this FDM/FFF-style system is described for both healthcare and industrial needs, with a 305 × 305 × 406 mm build volume and features like remote monitoring and runout sensors. It’s built for reliable production workflows."
    }
];

const FunmatFaq = () => {
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
                <div className="text-center mb-12">
                    <h2 className="text-[40px] font-bold text-[#0066b2]">Frequently Asked Questions</h2>
                </div>
                <FaqAccordion items={faqs} />
            </div>
        </section>
    );
};

export default FunmatFaq;

