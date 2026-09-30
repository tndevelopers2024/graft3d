import Image from "next/image";

const cards = [
    {
        title: "Surgical Planning",
        image: "/images/transform-medical-imaging-into-3d-anatomical-models/application-1.png",
        items: [
            "Patient-specific anatomical visualization",
            "Complex case planning",
            "Procedure simulation",
            "Preoperative anatomical assessment",
        ],
    },
    {
        title: "Medical Education",
        image: "/images/transform-medical-imaging-into-3d-anatomical-models/application-2.png",
        items: [
            "Anatomical teaching models",
            "Student training",
            "Demonstration of complex anatomy",
            "Hands-on learning",
        ],
    },
    {
        title: "Patient Education",
        image: "/images/transform-medical-imaging-into-3d-anatomical-models/application-3.png",
        items: [
            "Visual explanation of medical conditions",
            "Patient-specific anatomy demonstration",
            "Treatment communication",
            "Improved understanding of proposed procedures",
        ],
    },
    {
        title: "Surgical Simulation",
        image: "/images/transform-medical-imaging-into-3d-anatomical-models/application-4.png",
        items: [
            "Procedure rehearsal",
            "Complex anatomy simulation",
            "Surgical team training",
            "Case-based learning",
        ],
    },
    {
        title: "Research & Development",
        image: "/images/transform-medical-imaging-into-3d-anatomical-models/application-5.png",
        items: [
            "Anatomical research",
            "Medical device development",
            "Prototype evaluation",
            "Patient-specific model generation",
        ],
    },
];

export default function ClinicalApplications() {
    return (
        <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                {/* Title Section */}
                <div className="mx-auto mb-16 flex w-full max-w-400 items-center justify-center gap-4 lg:gap-8">
                    <div className="h-0.5 flex-1 bg-[#166AAF]"></div>
                    <h2 className="px-2 text-[1.25rem] font-bold tracking-wide whitespace-nowrap text-[#1E1E1E] uppercase md:text-[1.5rem] lg:px-4 lg:text-[1.75rem]">
                        CLINICAL APPLICATIONS
                    </h2>
                    <div className="h-0.5 flex-1 bg-[#166AAF]"></div>
                </div>

                {/* Cards Section */}
                <div className="mx-auto flex max-w-450 flex-wrap justify-center gap-6 lg:gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="flex w-full flex-col overflow-hidden rounded-xl border border-[#F1F5F9] bg-white shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#00000040] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)]"
                        >
                            <h3 className="px-4 py-6 text-center text-[1.5rem] font-bold text-[#166AAF] lg:text-[1.75rem]">
                                {card.title}
                            </h3>

                            <div className="relative aspect-16/10 w-full">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

                            <ul className="flex grow list-disc flex-col gap-3 py-2 pr-6 pl-10">
                                {card.items.map((item, itemIdx) => (
                                    <li
                                        key={itemIdx}
                                        className="text-[1.125rem] leading-snug font-medium text-[#1E1E1E] lg:text-[1.25rem]"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
