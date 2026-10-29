import FaqAccordion from "@/components/common/FaqAccordion";

const faqs = [
    {
        question: "1. What is included in the Prosthetics Package?",
        answer: "The package includes the EinScan Medixa 3D scanner, Geomagic Freeform with a haptic design device, the large-format Go3D Artish 700 3D printer, compatible materials, installation, workflow training, and ongoing technical support.",
    },
    {
        question: "2. What types of prosthetics can be fabricated?",
        answer: "It supports transtibial and transfemoral sockets (diagnostic and definitive), upper-limb frames, flexible-inner/rigid-frame systems, pediatric prosthetics, and custom aesthetic limb fairings.",
    },
    {
        question: "3. How does the EinScan Medixa benefit prosthetic workflow?",
        answer: "It captures high-accuracy, contactless 3D scans of residual limbs without plaster, featuring clinical presets and patient movement compensation for rapid digital mold generation.",
    },
    {
        question:
            "4. What are the key capabilities of the Go3D Artish 700 3D printer?",
        answer: "With a large 700×500×500mm build envelope, it prints full-length adult sockets and fairings in one piece using high-strength composite filaments like PA-CF, PETG-CF, and TPU.",
    },
    {
        question: "5. Why is Geomagic Freeform with haptic feedback used?",
        answer: 'It enables clinicians to virtually "feel" and sculpt residual limb topography like physical plaster while precisely controlling wall thicknesses, relief zones, and adapter alignment.',
    },
    {
        question: "6. Can the package work with existing patient data?",
        answer: "Yes, the workflow seamlessly accepts standard 3D file formats (STL, OBJ, PLY) as well as compatible medical surface and imaging data.",
    },
    {
        question: "7. Is training and post-installation support provided?",
        answer: "Yes, Graft3D Healthcare provides complete hardware setup, hands-on digital workflow training, and dedicated ongoing technical support.",
    },
    {
        question: "8. Can the package be customized?",
        answer: "Yes, the hardware, software configuration, materials, and digital workflows are tailored to your clinic's patient demographics and production needs.",
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
