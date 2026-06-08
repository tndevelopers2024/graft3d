import React from "react";
import { Skull, ShieldAlert, Timer, HeartCrack, X } from "lucide-react";

const CHALLENGES = [
    { Icon: Skull, title: "Poor Fit", desc: "Leads to complications and longer surgeries" },
    { Icon: ShieldAlert, title: "Increased Risk", desc: "Higher chances of infection and revision" },
    { Icon: Timer, title: "Time Delays", desc: "Manual adaptation wastes valuable time" },
    { Icon: HeartCrack, title: "Poor Outcomes", desc: "Affects patient recovery and quality of life" },
];

const Challenge = () => {
    return (
        <section className="w-full bg-white py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* Left: badge + heading */}
                    <div className="flex flex-col items-start gap-5">
                        <span className="inline-block bg-[#ffdfdf] text-[#cd201f] font-bold text-base px-4 py-1.5 rounded-full">
                            THE CHALLENGE
                        </span>
                        <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold text-[#1e1e1e] leading-[1.1]">
                            Why Standard Implants Fall Short
                        </h2>
                    </div>

                    {/* Right: 2x2 icon items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {CHALLENGES.map(({ Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4">
                                <div className="relative shrink-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f1faff]">
                                        <Icon className="w-9 h-9 text-[#166aaf]" strokeWidth={1.8} />
                                    </div>
                                    <span className="absolute -top-0.5 right-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#f44336] border-2 border-white">
                                        <X className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <p className="text-2xl font-bold text-[#292929]">{title}</p>
                                    <p className="mt-1 text-lg font-semibold text-[#292929] leading-snug">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
