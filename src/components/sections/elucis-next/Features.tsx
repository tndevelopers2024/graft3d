import Image from "next/image";

const Features = () => {
    const features = [
        {
            title: "Advanced 3D Visualization",
            desc: "High-fidelity 3D models for deep anatomical exploration.",
            icon: "/images/elucis-next/tool-1.svg",
        },
        {
            title: "Model Library",
            desc: "Build, organize and reuse anatomical models.",
            icon: "/images/elucis-next/tool-2.svg",
        },
        {
            title: "Screenshot & Recording",
            desc: "Capture and record immersive sessions for learning.",
            icon: "/images/elucis-next/tool-3.svg",
        },
        {
            title: "Segmentation Toolkit",
            desc: "Manual and AI-assisted tools to refine complex anatomy.",
            icon: "/images/elucis-next/tool-4.svg",
        },
        {
            title: "Study & Annotation",
            desc: "Annotate and mark structures for teaching and research.",
            icon: "/images/elucis-next/tool-5.svg",
        },
        {
            title: "Data Management",
            desc: "Organize research data securely and efficiently.",
            icon: "/images/elucis-next/tool-6.svg",
        },
        {
            title: "Measurement & Analysis",
            desc: "Measure, analyze and quantify with precision.",
            icon: "/images/elucis-next/tool-7.svg",
        },
        {
            title: "Collaboration Suite",
            desc: "Share cases and collaborate across institutions.",
            icon: "/images/elucis-next/tool-8.svg",
        },
        {
            title: "3D Printing Support",
            desc: "Export models for 3D printing and prototyping.",
            icon: "/images/elucis-next/tool-9.svg",
        },
    ];

    return (
        <section className="py-12 bg-[#f6f6fa]" id="features">
            <div className="max-w-400 mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0e3350] mb-4">
                        Powerful Tools for{" "}
                        <span className="text-[#166aaf]">
                            Research and Education
                        </span>
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-6 items-center p-4 rounded-2xl border border-[#c3d7e8]">
                            <div className="shrink-0 w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={45}
                                    height={45}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed text-lg">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
