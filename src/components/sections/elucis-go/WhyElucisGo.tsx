"use client";
import Image from "next/image";

const WhyElucisGo = () => {
    const reasons = [
        {
            title: "Untethered VR Experience",
            description: "Freedom to move. No cables. No fixed workstation.",
            icon: "/images/elucis-go/why-1.svg",
        },
        {
            title: "Everyone Can Use It",
            description: "Intuitive interface designed for clinicians.",
            icon: "/images/elucis-go/why-2.svg",
        },
        {
            title: "Faster Decision Making",
            description: "Better understanding leads to better outcomes.",
            icon: "/images/elucis-go/why-3.svg",
        },
        {
            title: "Quick to Deploy",
            description: "Start using in days, not months.",
            icon: "/images/elucis-go/why-4.svg",
        },
        {
            title: "Secure & Private",
            description: "Hospital data stays always protected.",
            icon: "/images/elucis-go/why-5.svg",
        },
    ];

    return (
        <section className="py-5 md:py-10">
            <div className="max-w-400 mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Hospitals{" "}
                        <span className="text-[#166aaf]">Choose Elucis Go</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white p-8  flex flex-col items-center text-center"
                        >
                            <div className="w-23 h-23 rounded-full bg-[#166aaf] flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                                <div className="relative w-13 h-13">
                                    <Image
                                        src={reason.icon}
                                        alt={reason.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-900 text-md leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyElucisGo;
