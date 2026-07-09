import Image from "next/image";

const WhyInvest = () => {
    const reasons = [
        {
            title: "Improve Case Planning",
            description: "Enhance accuracy and confidence for complex cases",
            image: "/images/elucis-family/why-1.png",
        },
        {
            title: "Enhance Patient Communication",
            description: "Build trust through clear visual explanations.",
            image: "/images/elucis-family/why-2.png",
        },
        {
            title: "Support Innovation Initiatives",
            description: "Position your hospital as a leader in digital healthcare.",
            image: "/images/elucis-family/why-3.png",
        },
        {
            title: "Enable Advanced Surgical Programs",
            description: "Support complex and high-value surgical services.",
            image: "/images/elucis-family/why-4.png",
        },
        {
            title: "Improve Clinical Collaboration",
            description: "Break silos and enable better multidisciplinary decisions.",
            image: "/images/elucis-family/why-5.png",
        },
        {
            title: "Scalable Enterprise Deployment",
            description: "Deploy across sites with centralized control and governance.",
            image: "/images/elucis-family/why-6.png",
        },
    ];

    return (
        <section className="py-8 md:py-16">
            <div className="max-w-400 mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0e3350] mb-6 leading-tight">
                        Why Hospital Leadership Teams{" "}
                        <span className="text-[#166aaf]">Invest in Elucis</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className="relative w-full h-56">
                                <Image
                                    src={reason.image}
                                    alt={reason.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    {reason.title}
                                </h3>
                                <p className="text-black leading-relaxed text-lg">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyInvest;
