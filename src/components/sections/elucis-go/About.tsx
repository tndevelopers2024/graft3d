"use client";
import Image from "next/image";

const About = () => {
    const items = [
        {
            icon: "/images/elucis-go/why-2.svg",
            title: "Lower Deployment Complexity",
            desc: "No high-end workstations required.",
        },
        {
            icon: "/images/elucis-go/testimonial-2.svg",
            title: "Faster Training",
            desc: "Easy for any clinician to learn.",
        },
        {
            icon: "/images/elucis-go/testimonial-3.svg",
            title: "High Adoption",
            desc: "Designed for everyday clinical workflow.",
        },
        {
            icon: "/images/elucis-go/testimonial-4.svg",
            title: "Better Outcomes",
            desc: "Better understanding leads to confident decisions.",
        },
    ];

    return (
        <section className="py-12 bg-[#1f72b5]">
            <div className="max-w-400 mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <div className="shrink-0 flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-md font-semibold leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
