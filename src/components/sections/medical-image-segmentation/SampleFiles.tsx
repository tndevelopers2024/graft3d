import React from "react";
import Image from "next/image";

const SAMPLES = [
    { img: "/images/medical-image-segmentation/sample-spine.png", name: "Spine" },
    { img: "/images/medical-image-segmentation/sample-shoulder.png", name: "Shoulder" },
    { img: "/images/medical-image-segmentation/sample-knee.png", name: "Knee" },
    { img: "/images/medical-image-segmentation/sample-heart.png", name: "Heart" },
    { img: "/images/medical-image-segmentation/sample-aneurysm.png", name: "Basilar Tip Aneurysm" },
    { img: "/images/medical-image-segmentation/sample-blood-vessel.png", name: "Blood Vessel" },
];

const SampleFiles = () => {
    return (
        <section id="sample-files" className="w-full bg-white scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-3xl lg:text-[40px] font-bold text-[#2A2A2A] mb-10 lg:mb-12">
                    Sample Files
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SAMPLES.map((s) => (
                        <div key={s.name} className="flex flex-col">
                            <div className="relative aspect-[395/300] rounded-xl overflow-hidden bg-[#f3f4f6] shadow-[0_2px_12px_rgba(16,80,140,0.06)]">
                                <Image
                                    src={s.img}
                                    alt={`${s.name} 3D model preview`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-3 text-center text-[13px]">
                                <span className="font-bold text-[#1CAAD9]">{s.name}</span>{" "}
                                <span className="text-[#4a4a4a]">by</span>{" "}
                                <span className="font-bold text-[#1CAAD9]">Graft3D</span>{" "}
                                <span className="text-[#4a4a4a]">on</span>{" "}
                                <span className="font-bold text-[#1CAAD9]">Sketchfab</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SampleFiles;
