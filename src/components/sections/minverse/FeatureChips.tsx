import React from "react";
import {
    Feather,
    Crosshair,
    Vibrate,
    Activity,
    MousePointer2,
    MonitorSmartphone,
    Puzzle,
    Terminal,
    PenTool,
} from "lucide-react";

const CHIPS = [
    { icon: Feather, label: "Compact & Lightweight Design" },
    { icon: Crosshair, label: "High-Precision Workspace" },
    { icon: Vibrate, label: "Advanced Force Feedback" },
    { icon: Activity, label: "High-Frequency Performance" },
    { icon: MousePointer2, label: "Fine Motion Resolution" },
    { icon: MonitorSmartphone, label: "Cross-Platform Compatibility" },
    { icon: Puzzle, label: "Extensive Software Integration" },
    { icon: Terminal, label: "Developer-Friendly SDK" },
    { icon: PenTool, label: "VerseGrip Stylus Support" },
];

const FeatureChips = () => {
    return (
        <section className="w-full bg-[#E7F0F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-x-4 gap-y-8">
                    {CHIPS.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex flex-col items-center text-center gap-2.5">
                            <Icon className="w-7 h-7 text-[#166AAF]" strokeWidth={1.75} />
                            <span className="text-[13px] lg:text-sm font-medium text-[#1E1E1E] leading-tight">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureChips;
