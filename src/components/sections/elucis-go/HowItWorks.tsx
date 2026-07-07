"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Access",
            desc: "Open a case on the Elucis Go headset.",
            img: "/images/elucis-go/how-1.png",
        },
        {
            num: "02",
            title: "Load Patient Data",
            desc: "Pre-processed 3D models are ready.",
            img: "/images/elucis-go/how-2.png",
        },
        {
            num: "03",
            title: "Explore in VR",
            desc: "Interact with anatomy in immersive 3D.",
            img: "/images/elucis-go/how-3.png",
        },
        {
            num: "04",
            title: "Review & Discuss",
            desc: "Annotate, measure and discuss with your team.",
            img: "/images/elucis-go/how-4.png",
        },
        {
            num: "05",
            title: "Decide & Plan",
            desc: "Take confident decisions faster and easier.",
            img: "/images/elucis-go/how-5.png",
        },
    ];

    return (
        <section className="py-6 md:py-12 bg-linear-to-b from-[#0e324f] to-[#2072b6]">
            <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24 ">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How Elucis Go Works
                    </h2>
                </div>

                <div className="relative">
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center group"
                            >
                                <div className="relative w-full aspect-4/3 mb-6 rounded-2xl bg-white/30 overflow-hidden">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        fill
                                        className={cn(index === 0 ? "object-contain p-6" : "object-cover")}
                                    />
                                </div>

                                <div className="text-center max-w-55">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {parseInt(step.num)}. {step.title}
                                    </h3>
                                    <p className="text-white text-lg leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
