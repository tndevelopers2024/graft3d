import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is Elucis GO and who is it designed for?",
        answer: "Elucis GO is an immersive Virtual Reality medical visualization platform that allows clinicians to interact with patient-specific 3D anatomical models directly within a VR headset. It is ideal for surgeons, hospitals, educators, and multidisciplinary teams looking to improve anatomical understanding and clinical communication without requiring a desktop workstation.",
    },
    {
        question: "2. How does Elucis GO improve surgical planning?",
        answer: "Elucis GO enables surgeons to review patient-specific anatomy in a fully immersive 3D environment before surgery. By enhancing depth perception and spatial understanding, clinicians can better evaluate complex anatomical relationships and discuss procedural strategies with greater confidence.",
    },
    {
        question: "3. Can Elucis GO be used for patient education and informed consent?",
        answer: "Yes. The immersive VR experience helps patients visualize their own anatomy and better understand their diagnosis, planned procedure, and expected outcomes. This improves communication between clinicians and patients while supporting informed decision-making.",
    },
    {
        question: "4. Does Elucis GO support collaboration between surgeons and hospitals?",
        answer: "Yes. Elucis GO supports multi-user virtual collaboration, allowing surgeons, radiologists, and healthcare teams to review patient-specific 3D models together, even when working from different locations. This improves multidisciplinary planning and clinical discussions.",
    },
    {
        question: "5. Which medical specialties benefit from Elucis GO?",
        answer: "Elucis GO is suitable for specialties including craniomaxillofacial surgery, neurosurgery, orthopaedics, ENT, oncology, cardiovascular surgery, vascular surgery, plastic surgery, and trauma, where understanding complex 3D anatomy is essential for treatment planning.",
    },
    {
        question: "6. Can clinicians perform measurements and interact with anatomical models in VR?",
        answer: "Yes. Elucis GO provides interactive VR tools that allow clinicians to rotate, isolate, explore, and measure patient-specific anatomical structures. These capabilities help refine surgical understanding while maintaining a simple and intuitive workflow.",
    },
    {
        question: "7. How is Elucis GO different from conventional 3D imaging software?",
        answer: "Unlike conventional medical imaging software displayed on a flat monitor, Elucis GO offers immersive 3D medical visualization within a VR headset. This allows clinicians to naturally interact with anatomical models, improving spatial awareness and enhancing clinical collaboration.",
    },
    {
        question:
            "8. Why should hospitals choose Elucis GO for immersive medical visualization?",
        answer: "Elucis GO provides an accessible entry into Virtual Reality surgical planning and collaboration by enabling clinicians to visualize patient-specific anatomy, improve multidisciplinary communication, enhance medical education, and support better clinical decision-making—all without the need for a full desktop planning workflow.",
    },
];

const ElucisGoFaq = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-450 mx-auto px-4 md:px-12 lg:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about Elucis GO and how
                        it can benefit your clinical workflow.
                    </p>
                </div>
                <div className="max-w-400 mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default ElucisGoFaq;
