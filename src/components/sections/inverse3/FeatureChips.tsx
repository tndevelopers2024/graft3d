import React from "react";
import {
    Vibrate,
    Activity,
    Crosshair,
    Feather,
    Move3d,
    Terminal,
    Joystick,
} from "lucide-react";

const CHIPS = [
    { icon: Vibrate, label: "High-Fidelity Force Feedback" },
    { icon: Activity, label: "Ultra-Responsive Performance" },
    { icon: Crosshair, label: "Precision Motion Tracking" },
    { icon: Feather, label: "Compact, Ergonomic Design" },
    { icon: Move3d, label: "Advanced Workspace Coverage" },
    { icon: Terminal, label: "Developer-First Ecosystem" },
    { icon: Joystick, label: "Modular Handle System" },
];

const FeatureChips = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#1463A2] via-[#1A6FB2] to-[#2580C4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-9">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-y-8 lg:divide-x lg:divide-white/15">
                    {CHIPS.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center text-center gap-2.5 px-3"
                        >
                            <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                            <span className="text-[13px] lg:text-sm font-medium text-white leading-tight">
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
