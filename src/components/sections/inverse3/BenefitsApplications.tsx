import React from "react";
import Image from "next/image";
import {
    Globe,
    Rocket,
    GraduationCap,
    Crosshair,
    Workflow,
    Stethoscope,
    Bot,
    Boxes,
    PenTool,
    FlaskConical,
    Gamepad2,
} from "lucide-react";

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const BENEFITS: { icon: IconType; title: string; desc: string }[] = [
    {
        icon: Globe,
        title: "Bring Digital Environments to Life",
        desc: "Feel textures, resistance, and motion; transforming passive visuals into immersive, interactive experiences.",
    },
    {
        icon: Rocket,
        title: "Accelerate Development Cycles",
        desc: "Test and validate designs in real time with precise haptic feedback.",
    },
    {
        icon: GraduationCap,
        title: "Enhance Training and Simulation",
        desc: "Deliver realistic, hands-on training experiences without physical risk.",
    },
    {
        icon: Crosshair,
        title: "Improve Accuracy & Control",
        desc: "Ultra-high resolution enables fine motor control for delicate operations and simulations.",
    },
    {
        icon: Workflow,
        title: "Seamless Integration",
        desc: "Works effortlessly with existing pipelines, engines, and operating systems.",
    },
];

const APPLICATIONS: { icon: IconType; img: string; label: string }[] = [
    { icon: Stethoscope, img: "/images/inverse3/app-medical.png", label: "Medical & Surgical Simulation" },
    { icon: Bot, img: "/images/inverse3/app-robotics.png", label: "Robotics & Teleoperation" },
    { icon: Boxes, img: "/images/inverse3/app-vr.png", label: "Virtual Reality & Immersive Tech" },
    { icon: PenTool, img: "/images/inverse3/app-design.png", label: "Product Design & Prototyping" },
    { icon: FlaskConical, img: "/images/inverse3/app-research.png", label: "Research & Academia" },
    { icon: Gamepad2, img: "/images/inverse3/app-gaming.png", label: "Gaming & Interactive Media" },
];

const BenefitsApplications = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

                    {/* Benefits */}
                    <div>
                        <h2 className="text-[26px] lg:text-[32px] font-bold text-[#1E1E1E] mb-8">
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
                        <h2 className="text-[26px] lg:text-[32px] font-bold text-[#1E1E1E] mb-8">
                            Applications
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {APPLICATIONS.map(({ icon: Icon, img, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col rounded-xl overflow-hidden border border-[#E4ECF3] bg-white shadow-[0_2px_12px_rgba(16,80,140,0.05)]"
                                >
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={img}
                                            alt={label}
                                            fill
                                            sizes="(max-width: 640px) 50vw, 17vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-3">
                                        <Icon className="w-4 h-4 text-[#166AAF] shrink-0" />
                                        <span className="text-[12.5px] lg:text-[13px] font-semibold text-[#1E1E1E] leading-tight">
                                            {label}
                                        </span>
                                    </div>
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
