import React from "react";
import Image from "next/image";
import {
    Box,
    Move3d,
    Gauge,
    Zap,
    Usb,
    Code2,
    Joystick,
    LifeBuoy,
    BadgeCheck,
    FileText,
    MessagesSquare,
    Headset,
} from "lucide-react";

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

const SpecCard = ({
    icon: Icon,
    title,
    children,
    className = "",
}: {
    icon: IconType;
    title: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <div
        className={`rounded-2xl border border-[#E4ECF3] bg-white p-6 shadow-[0_2px_14px_rgba(16,80,140,0.05)] ${className}`}
    >
        <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#166AAF]/10 text-[#166AAF] shrink-0">
                <Icon className="w-5 h-5" />
            </span>
            <h3 className="text-xl lg:text-[26px] font-semibold text-[#166AAF] leading-tight">
                {title}
            </h3>
        </div>
        {children}
    </div>
);

const Row = ({ label, value }: { label: string; value: string }) => (
    <p className="text-[#434655] text-[15px] lg:text-base leading-relaxed">
        {label} : <span className="font-semibold text-[#2A2A2A]">{value}</span>
    </p>
);

const FeatureRow = ({
    icon: Icon,
    label,
    value,
}: {
    icon: IconType;
    label: string;
    value: string;
}) => (
    <div className="flex gap-2.5">
        <Icon className="w-5 h-5 text-[#166AAF] shrink-0 mt-0.5" />
        <p className="text-[#434655] text-[15px] lg:text-base leading-relaxed">
            <span className="font-bold text-[#1E1E1E]">{label}:</span> {value}
        </p>
    </div>
);

const Specifications = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <SpecCard icon={Box} title="Device Dimensions">
                        <div className="space-y-1.5">
                            <Row label="Height" value="30 mm" />
                            <Row label="Width" value="200 mm" />
                            <Row label="Depth" value="160 mm" />
                            <Row label="Weight" value="1.2 kg" />
                        </div>
                        <div className="relative w-full h-[150px] mt-4">
                            <Image
                                src="/images/minverse/spec-device.png"
                                alt="MinVerse device dimensions"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-contain object-left"
                            />
                        </div>
                    </SpecCard>

                    <SpecCard icon={Move3d} title="Workspace Dimensions">
                        <div className="space-y-1.5">
                            <Row label="Height" value="250 mm" />
                            <Row label="Width" value="240 mm" />
                            <Row label="Depth" value="165 mm" />
                        </div>
                        <div className="relative w-full h-[170px] mt-4">
                            <Image
                                src="/images/minverse/spec-workspace.png"
                                alt="MinVerse workspace dimensions"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-contain"
                            />
                        </div>
                    </SpecCard>

                    <SpecCard icon={Gauge} title="Performance">
                        <div className="space-y-1.5">
                            <Row label="Stiffness" value="1 N/mm" />
                            <Row label="Velocity Output Frequency" value="200 Hz" />
                            <Row label="Velocity Resolution" value="0.5 mm/s" />
                            <Row label="Position Resolution" value="0.1 mm" />
                            <Row label="Bandwidth" value="0 to 2000 Hz" />
                            <Row label="Maximum Force (80% workspace)" value="2 N" />
                            <Row label="Peak Force" value="5.5 N" />
                            <Row label="Force Resolution" value="14 mN" />
                        </div>
                    </SpecCard>

                    <div className="flex flex-col gap-5">
                        <SpecCard icon={Zap} title="Power">
                            <div className="space-y-2">
                                <Row label="Supply Voltage" value="100 - 240 V AC Range" />
                                <Row label="Power Supply" value="External DC, 24 V Type" />
                            </div>
                        </SpecCard>
                        <SpecCard icon={Usb} title="Communication">
                            <div className="space-y-1.5">
                                <Row label="Connection" value="USB-C" />
                                <Row label="Refresh" value="Up to 4000 Hz" />
                                <Row label="Interface" value="Status LED line" />
                            </div>
                        </SpecCard>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <SpecCard icon={Code2} title="Software">
                            <div className="space-y-2">
                                <Row label="Compatibility" value="Windows, Linux, macOS" />
                                <Row
                                    label="SDK"
                                    value="Inverse service SDK, compatible with all programming languages and architectures"
                                />
                                <Row
                                    label="Integrations"
                                    value="Geomagic Freeform, Unity Engine, Unreal Engine, NVIDIA Omniverse, NVIDIA Isaac Sim, NVIDIA Isaac Lab, ROS, TOIA, iMSTK, SOFA-Unity, and more"
                                />
                            </div>
                        </SpecCard>

                        <SpecCard icon={LifeBuoy} title="Support">
                            <div className="space-y-3">
                                <FeatureRow icon={Code2} label="Developer Hub" value="Latest releases of Haply apps and SDK components - dev.haply.co" />
                                <FeatureRow icon={FileText} label="Documentation" value="Guides, tutorials, deep dives, reference material - docs.haply.co" />
                                <FeatureRow icon={MessagesSquare} label="Forum" value="Announcements and community discussion - forum.haply.co" />
                                <FeatureRow icon={Headset} label="Support Desk" value="Personalized ticket support - haply.co/support" />
                            </div>
                        </SpecCard>
                    </div>

                    <SpecCard icon={Joystick} title="Tracked handle" className="flex flex-col">
                        <div className="space-y-3">
                            <FeatureRow icon={BadgeCheck} label="Orientation Tracking" value="Available via VerseGrip Stylus" />
                            <FeatureRow icon={BadgeCheck} label="Customization" value="Ball connector for user applications" />
                            <FeatureRow icon={BadgeCheck} label="Swap Mechanism" value="Gimbal-lock-free, quick-swap for VerseGrip accessories" />
                        </div>
                        <div className="relative w-full h-[220px] mt-auto pt-4">
                            <Image
                                src="/images/minverse/spec-tracked-handle.png"
                                alt="MinVerse tracked handle on stand"
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="object-contain"
                            />
                        </div>
                    </SpecCard>
                </div>

            </div>
        </section>
    );
};

export default Specifications;
