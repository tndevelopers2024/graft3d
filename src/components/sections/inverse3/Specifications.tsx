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
                            <Row label="Height" value="234 mm" />
                            <Row label="Width" value="144 mm" />
                            <Row label="Depth" value="48 mm" />
                            <Row label="Weight" value="1.6 kg" />
                        </div>
                        <div className="relative w-full h-[150px] mt-4">
                            <Image
                                src="/images/inverse3/device.png"
                                alt="Inverse3 device dimensions"
                                fill
                                sizes="(max-width: 1024px) 50vw, 25vw"
                                className="object-contain object-center"
                            />
                        </div>
                    </SpecCard>

                    <SpecCard icon={Move3d} title="Workspace Dimensions">
                        <div className="space-y-1.5">
                            <Row label="Height" value="510 mm" />
                            <Row label="Width" value="460 mm" />
                            <Row label="Depth" value="230 mm" />
                        </div>
                        <div className="relative w-full h-[180px] mt-4">
                            <Image
                                src="/images/inverse3/workspace.png"
                                alt="Inverse3 workspace dimensions"
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
                            <Row label="Position Resolution" value="0.01 mm" />
                            <Row label="Bandwidth" value="0 to 2000 Hz" />
                            <Row label="Maximum Force (80% workspace)" value="4 N" />
                            <Row label="Peak Force" value="10 N" />
                            <Row label="Force Resolution" value="14 mN" />
                        </div>
                    </SpecCard>

                    <SpecCard icon={Zap} title="Power" className="flex flex-col">
                        <div className="space-y-2">
                            <Row label="Supply Voltage" value="100 – 240 V AC (Range)" />
                            <Row label="Power Supply" value="Universal (Type)" />
                            <Row label="Output" value="External DC, 24 V" />
                        </div>
                        <div className="mt-auto pt-6 flex justify-center">
                            <span className="relative flex items-center justify-center w-28 h-28 rounded-full border-2 border-[#166AAF]/25">
                                <Zap className="w-14 h-14 text-[#166AAF] fill-[#166AAF]" strokeWidth={1} />
                            </span>
                        </div>
                    </SpecCard>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <SpecCard icon={Usb} title="Communication">
                                <div className="space-y-1.5">
                                    <Row label="Connection" value="USB-C" />
                                    <Row label="Refresh" value="Up to 4000 Hz" />
                                    <Row label="Interface" value="Status LED icon" />
                                </div>
                            </SpecCard>

                            <SpecCard icon={Code2} title="Software">
                                <div className="space-y-2">
                                    <Row label="Compatibility" value="Windows, Linux, macOS, any USB compatible system" />
                                    <Row label="SDK" value="C++, C#, Python" />
                                    <Row
                                        label="Integrations"
                                        value="Unity Engine, Unreal Engine, NVIDIA Omniverse, ROS, TOIA, iMSTK, SOFA-Unity, and more"
                                    />
                                </div>
                            </SpecCard>
                        </div>

                        <SpecCard icon={LifeBuoy} title="Support">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                <FeatureRow icon={Code2} label="Developer Hub" value="Latest releases of Haply apps and SDK - dev.haply.co" />
                                <FeatureRow icon={FileText} label="Documentation" value="Guides, tutorials, deep dives, reference material - docs.haply.co" />
                                <FeatureRow icon={MessagesSquare} label="Forum" value="Announcements and community discussion - forum.haply.co" />
                                <FeatureRow icon={Headset} label="Support Desk" value="Personalized ticket support - haply.co/support" />
                            </div>
                        </SpecCard>
                    </div>

                    <SpecCard icon={Joystick} title="Tracked handle" className="flex flex-col">
                        <div className="space-y-3">
                            <FeatureRow icon={BadgeCheck} label="End-effector Orientation Tracking" value="Available via VerseGrip Stylus" />
                            <FeatureRow icon={BadgeCheck} label="Customization" value="Ball connector for user applications" />
                            <FeatureRow icon={BadgeCheck} label="Swap Mechanism" value="Gimbal-lock-free, quick-swap for VerseGrip accessories" />
                        </div>
                        <div className="relative w-full h-[220px] mt-auto pt-4">
                            <Image
                                src="/images/inverse3/tracked-handle.png"
                                alt="Swapping the VerseGrip stylus on the Inverse3 tracked handle"
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
