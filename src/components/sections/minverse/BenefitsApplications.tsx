import React from "react";
import Image from "next/image";
import { Sparkles, Workflow, Waves, SlidersHorizontal, ShieldCheck } from "lucide-react";

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const BENEFITS: { icon: IconType; title: string; desc: string }[] = [
    {
        icon: Sparkles,
        title: "Precision Performance",
        desc: "Achieve high-fidelity haptic interaction in a compact, workspace-friendly device.",
    },
    {
        icon: Workflow,
        title: "Seamless Development Workflow",
        desc: "Easy integration with industry-standard platforms accelerates prototyping and deployment.",
    },
    {
        icon: Waves,
        title: "Enhanced Realism",
        desc: "High refresh rates and force resolution create lifelike tactile feedback for immersive experiences.",
    },
    {
        icon: SlidersHorizontal,
        title: "Flexible Customization",
        desc: "Adapt the device to various use cases with interchangeable accessories and programmable SDK.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable Across Applications",
        desc: "Stable power input and robust hardware ensure consistent operation in demanding environments.",
    },
];

const APPLICATIONS = [
    { img: "/images/minverse/app-medical.png", label: "Medical & Surgical Simulation" },
    { img: "/images/minverse/app-robotics.png", label: "Robotics & Teleoperation" },
    { img: "/images/minverse/app-3d-design.png", label: "3D Design & Modeling" },
    { img: "/images/minverse/app-vr.png", label: "Virtual Reality & Gaming" },
    { img: "/images/minverse/app-research.png", label: "Research & Education" },
    { img: "/images/minverse/app-digital-twin.png", label: "Digital Twin & Simulation Environments" },
];

const BenefitsApplications = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

                    {/* Benefits */}
                    <div>
                        <h2 className="text-center text-[28px] lg:text-[32px] font-bold text-[#1E1E1E] mb-8">
                            Benefits
                        </h2>
                        <div className="flex flex-col gap-4">
                            {BENEFITS.map(({ icon: Icon, title, desc }) => (
                                <div
                                    key={title}
                                    className="flex gap-4 rounded-xl border border-[#DCE8F3] bg-white p-5 transition-shadow hover:shadow-[0_4px_18px_rgba(16,80,140,0.08)]"
                                >
                                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#166AAF]/10 text-[#166AAF] shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <h3 className="text-lg lg:text-[22px] font-bold text-[#1E1E1E] leading-snug">
                                            {title}
                                        </h3>
                                        <p className="mt-1.5 text-[#434655] text-[15px] lg:text-lg leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Applications */}
                    <div>
                        <h2 className="text-center text-[28px] lg:text-[32px] font-semibold text-[#121C2A] mb-8">
                            Applications
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {APPLICATIONS.map(({ img, label }) => (
                                <div
                                    key={label}
                                    className="relative aspect-[275/237] rounded-xl overflow-hidden group"
                                >
                                    <Image
                                        src={img}
                                        alt={label}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                    <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-[15px] leading-tight">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BenefitsApplications;
