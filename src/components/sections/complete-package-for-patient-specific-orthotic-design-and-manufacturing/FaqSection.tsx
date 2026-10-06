import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is included in the Orthotics Package?",
        answer: "The package includes 3D scanning technology, orthotic design software with haptic devices, high-performance 3D printing technology, compatible materials, workflow implementation, installation, training, and ongoing technical support.",
    },
    {
        question: "2. What types of orthotics can be created?",
        answer: "The package can support customized foot orthotics, spinal braces, limb orthoses, pediatric orthotics, rehabilitation supports, and other patient-specific orthotic devices.",
    },
    {
        question: "3. Can the package work with existing patient data?",
        answer: "Yes. The workflow can utilize compatible 3D scan data and medical imaging data for patient-specific orthotic design.",
    },
    {
        question: "4. Is training provided?",
        answer: "Yes. Graft3D Healthcare provides installation, workflow implementation, hands-on training, and post-installation technical support.",
    },
    {
        question: "5. Can the package be customized?",
        answer: "Yes. We tailor each Orthotics Package based on your specialty, orthotic applications, patient requirements, clinical workflow, and manufacturing objectives.",
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
