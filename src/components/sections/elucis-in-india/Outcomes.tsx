import Image from "next/image";

const Outcomes = () => {
    const outcomes = [
        {
            title: "Enhanced 3D Visualization",
            description:
                "See anatomy as never before with true-to-life immersive models.",
            icon: "/images/elucis-in-india/outcome-1.svg",
        },
        {
            title: "Better Team Collaboration",
            description:
                "Enable real-time and asynchronous collaboration across specialities.",
            icon: "/images/elucis-in-india/outcome-2.svg",
        },
        {
            title: "Improved Surgical Planning",
            description:
                "Analyse, measure and plan with greater precision and confidence.",
            icon: "/images/elucis-in-india/outcome-3.svg",
        },
        {
            title: "Stronger Patient Engagement",
            description:
                "Explain conditions and procedures clearly to patients and families.",
            icon: "/images/elucis-in-india/outcome-4.svg",
        },
        {
            title: "Enterprise-Grade Security",
            description:
                "Your data stays secure with on-premise deployment and zero data sharing.",
            icon: "/images/elucis-in-india/outcome-5.svg",
        },
        {
            title: "Scalable Across Departments",
            description:
                "Seamless workflow for single departments to enterprise-wide adoption.",
            icon: "/images/elucis-in-india/outcome-6.svg",
        },
    ];

    return (
        <section className="py-8 md:py-10">
            <div className="max-w-450 mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        Elucis Helps Hospitals Achieve{" "}
                        <span className="text-[#166aaf]">Better Outcomes</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-center">
                    {outcomes.map((outcome, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl flex flex-col items-center justify-between p-2"
                        >
                            <div className="w-20 h-20 rounded-full bg-[#166aaf] flex items-center justify-center mb-6 text-[#166aaf] shrink-0 p-3">
                                <Image
                                    src={outcome.icon}
                                    alt={outcome.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-black mb-2">
                                {outcome.title}
                            </h3>
                            <p className="text-md text-black leading-relaxed">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Outcomes;
