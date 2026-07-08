import Image from "next/image";

const Workflow = () => {
    const steps = [
        {
            title: "1. Import DICOM",
            desc: "CT, MRI, Angio and more",
            icon: "/images/elucis-next/process-1.svg",
        },
        {
            title: "2. Process & Segment",
            desc: "Advanced tools for accurate segmentation",
            icon: "/images/elucis-next/process-2.svg",
        },
        {
            title: "3. Create 3D Models",
            desc: "Patient-specific models for exploration",
            icon: "/images/elucis-next/process-3.svg",
        },
        {
            title: "4. Explore in VR",
            desc: "Immersive learning and analysis",
            icon: "/images/elucis-next/process-4.svg",
        },
        {
            title: "5. Collaborate & Share",
            desc: "Real-time or asynchronous collaboration",
            icon: "/images/elucis-next/process-5.svg",
        },
        {
            title: "6. Research & Innovate",
            desc: "Develop, validate and publish new methods",
            icon: "/images/elucis-next/process-6.svg",
        },
    ];

    return (
        <section className="py-12">
            <div className="max-w-450 mx-auto px-6 md:px-12">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[##0f172a] mb-4 leading-tight">
                        From{" "}
                        <span className="text-[#166aaf]">
                            DICOM to Immersive Anatomy
                        </span>{" "}
                        for Education & Research
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="rounded-2xl flex flex-col items-center text-center relative"
                        >
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-10 left-[calc(50%+40px)] w-[calc(100%-48px)] items-center justify-center z-0">
                                    <div className="h-0.5 bg-[#166aaf] w-full absolute top-1/2 -translate-y-1/2"></div>
                                    <div className="w-5 h-5 rounded-full bg-[#166aaf] flex items-center justify-center z-10 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            )}

                            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative z-10">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">
                                {step.title}
                            </h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
