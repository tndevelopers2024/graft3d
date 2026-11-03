import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is included in the Facial Prosthesis Package?",
        answer: "The package includes 3D facial scanning technology, medical visualization software, CAD modelling software, haptic design devices, 3D printing technology, compatible materials, workflow implementation, installation, training, and ongoing technical support.",
    },
    {
        question: "2. What types of facial prostheses can be created?",
        answer: "The package can support customized ear, nose, orbital, midface, and other patient-specific facial prostheses.",
    },
    {
        question: "3. Can the package be used for post-trauma reconstruction?",
        answer: "Yes. The digital workflow can support facial reconstruction following trauma, surgery, congenital defects, and other conditions requiring customized prosthetic solutions.",
    },
    {
        question: "4. Is training provided?",
        answer: "Yes. Graft3D Healthcare provides installation, workflow implementation, hands-on training, and post-installation technical support.",
    },
    {
        question: "5. Can the package be customized?",
        answer: "Yes. Each Facial Prosthesis Package can be customized according to the prosthetic application, patient requirements, clinical workflow, and institutional objectives.",
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
