import React from "react";
import Image from "next/image";

const FEATURES = [
    {
        img: "/images/medical-image-segmentation/why-no-software.png",
        title: "No Software Needed",
        desc: "Works fully online. Access from anywhere.",
    },
    {
        img: "/images/medical-image-segmentation/why-faster.png",
        title: "Faster Clinical Decisions",
        desc: "Get accurate 3D models in just 24–48 hours.",
    },
    {
        img: "/images/medical-image-segmentation/why-accurate.png",
        title: "Accurate & Reliable",
        desc: "AI + expert-reviewed segmentation you can trust.",
    },
    {
        img: "/images/medical-image-segmentation/why-ready-surgery.png",
        title: "Ready for Surgery",
        desc: "Export STL, NRRD, DICOM, PDF & CAD formats.",
    },
    {
        img: "/images/medical-image-segmentation/why-security.png",
        title: "Enterprise Grade Security",
        desc: "Your data is encrypted and always protected.",
    },
    {
        img: "/images/medical-image-segmentation/why-scalable.png",
        title: "Scalable for All Needs",
        desc: "From single case to large hospital deployments.",
    },
];

const WhyChoose = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#E9F1F7] to-[#F3F8FC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-3xl lg:text-[40px] font-bold text-[#2A2A2A] mb-12">
                    Why Doctors &amp; Hospitals Choose <span className="text-[#1B6DB1]">GRAFT3D</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="flex gap-4">
                            <Image
                                src={f.img}
                                alt=""
                                width={56}
                                height={56}
                                className="w-14 h-14 object-contain shrink-0"
                            />
                            <div>
                                <h3 className="text-lg lg:text-xl font-bold text-[#2A2A2A] leading-snug">{f.title}</h3>
                                <p className="mt-1.5 text-[#2A2A2A]/80 text-[14px] lg:text-[15px] leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
