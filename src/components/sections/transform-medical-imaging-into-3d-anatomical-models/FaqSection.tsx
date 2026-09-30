import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is included in the Anatomical Model Package?",
        answer: "The package includes medical image conversion software, anatomical visualization and modelling solutions, haptic devices, 3D printing technology, compatible materials, installation, training, workflow implementation, and technical support.",
    },
    {
        question: "2. What types of anatomical models can be created?",
        answer: "Patient-specific models can be generated for structures such as the skull, facial bones, jaw, spine, pelvis, long bones, and other anatomies derived from compatible medical imaging data.",
    },
    {
        question: "3. Can the package work with existing CT and CBCT systems?",
        answer: "Yes. The workflow can utilize compatible DICOM data generated from CT and CBCT imaging systems.",
    },
    {
        question: "4. Is training provided?",
        answer: "Yes. Graft3D Healthcare provides installation, workflow implementation, hands-on training, and ongoing technical support.",
    },
    {
        question: "5. Can the package be customized?",
        answer: "Yes. The package can be customized according to your specialty, case requirements, educational objectives, printing needs, and institutional workflow.",
    },
];

const FaqSection = () => {
    return (
        <section className="bg-[#F8FAFC] py-16 md:py-18">
            <div className="container mx-auto px-4 lg:px-12 xl:px-16">
                <div className="mb-10 text-center md:mb-12">
                    <h2 className="text-[2rem] font-bold text-[#1e1e1e] md:text-[2.25rem]">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="max-w-8xl mx-auto">
                    <FaqAccordion items={faqs} />
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
