import Image from "next/image";

const Workflow = () => {
    const steps = [
        {
            title: "Import DICOM Data",
            image: "/images/elucis-family/insight-1.png",
        },
        {
            title: "Create Patient-Specific Anatomy",
            image: "/images/elucis-family/insight-2.png",
        },
        {
            title: "Explore Anatomy in VR",
            image: "/images/elucis-family/insight-3.png",
        },
        {
            title: "Measure & Analyze",
            image: "/images/elucis-family/insight-4.png",
        },
        {
            title: "Collaborate Across Teams",
            image: "/images/elucis-family/insight-5.png",
        },
        {
            title: "Prepare for Procedure",
            image: "/images/elucis-family/insight-6.png",
        },
    ];

    return (
        <section className="pb-12 bg-white">
            <div className="max-w-450 mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        From Imaging to Insight in{" "}
                        <span className="text-[#166aaf]">6 Simple Steps.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 relative">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-between text-center relative z-10 group bg-[#edf7ff] rounded-xl pt-10 pb-4 px-4 mt-6"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#166aaf] text-white font-bold text-xl flex items-center justify-center shadow-md">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl font-medium leading-snug max-w-50 ">
                                {step.title}
                            </h3>
                            <div className="relative w-50 h-50 ">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
