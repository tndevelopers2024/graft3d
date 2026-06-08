import React from "react";
import Image from "next/image";
import { Boxes, Crosshair, Target, Feather } from "lucide-react";

const FEATURES = [
    { Icon: Boxes, title: "Custom Geometry", desc: "Designed for perfect anatomical fit" },
    { Icon: Crosshair, title: "Surgical Accuracy", desc: "Precision fit reduces surgery time" },
    { Icon: Target, title: "Surgical Accuracy", desc: "Precision fit reduces surgery time" },
    { Icon: Feather, title: "Strong & Lightweight", desc: "PEEK material offers strength with comfort" },
];

const ArtiBone = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0a1b33] py-14 lg:py-20">
            {/* bg image overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/images/regraft-custom-implants/dark-bg-image.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover opacity-25"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left: title + description */}
                    <div className="flex flex-col gap-4">
                        <span className="inline-block bg-[#0086f5] text-white font-bold text-xs px-3 py-1 rounded-full w-fit">
                            FEATURED
                        </span>
                        <h2 className="text-[48px] sm:text-[60px] font-bold text-white leading-none">
                            ArtiBone
                        </h2>
                        <p className="text-[#0086f5] font-bold text-xl -mt-1">
                            Patient-Specific Artificial Bone Implants
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            Artibone (Artificial Bone) implants are custom-designed using advanced 3D technology and manufactured with medical-grade PEEK to restore anatomy and improve patient outcomes.
                        </p>
                    </div>

                    {/* Right: product image */}
                    <div className="relative w-full h-[280px] sm:h-[360px]">
                        <Image
                            src="/images/regraft-custom-implants/hero-product.png"
                            alt="ArtiBone custom PEEK implant"
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-contain object-center"
                        />
                    </div>
                </div>

                {/* Bottom: 4 feature columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 lg:mt-16">
                    {FEATURES.map(({ Icon, title, desc }, i) => (
                        <div key={i} className="flex flex-col items-start gap-3">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                                <Icon className="w-6 h-6 text-[#0086f5]" strokeWidth={2} />
                            </div>
                            <p className="text-[#0086f5] font-bold text-xl">{title}</p>
                            <p className="text-white/80 text-sm font-semibold leading-snug">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtiBone;
