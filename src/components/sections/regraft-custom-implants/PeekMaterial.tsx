import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const PEEK_PROPS = [
    "Biocompatible and safe for long-term use",
    "High strength and wear resistance",
    "Lightweight and patient comfortable",
    "Radiolucent – allows clear imaging",
    "Heat and chemical resistance",
];

const USE_CASES = [
    "Cranial Reconstruction",
    "Maxillofacial Surgery",
    "Orthopedic Reconstruction",
    "Trauma & Fracture Repair",
    "Oncology Reconstruction",
];

const PeekMaterial = () => {
    return (
        <section className="w-full bg-white py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">

                    {/* Left: PEEK details */}
                    <div className="relative bg-[#f1faff] rounded-3xl p-8 overflow-hidden">
                        <span className="inline-block text-[#1b6db1] font-bold text-2xl mb-3">
                            WHY PEEK?
                        </span>
                        <h2 className="text-[30px] sm:text-[38px] font-bold text-[#1e1e1e] leading-[1.12] mb-6 max-w-md">
                            Advanced Material for Better Outcomes
                        </h2>

                        <ul className="flex flex-col gap-3 relative z-10 max-w-sm">
                            {PEEK_PROPS.map((p) => (
                                <li key={p} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00ba00] shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </span>
                                    <span className="text-[#2e2e2e] font-semibold text-base leading-snug">{p}</span>
                                </li>
                            ))}
                        </ul>

                        {/* transparent skull overlapping right */}
                        <div className="pointer-events-none absolute right-3 bottom-0 w-[42%] h-[80%] hidden sm:block">
                            <Image
                                src="/images/regraft-custom-implants/peek-skull.png"
                                alt="PEEK implant on transparent skull model"
                                fill
                                sizes="40vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </div>

                    {/* Right: Use Cases */}
                    <div className="flex flex-col gap-4">
                        <span className="inline-block bg-[#f1faff] text-[#1b6db1] font-bold text-sm px-4 py-1.5 rounded-full w-fit">
                            USE CASES
                        </span>
                        <div className="flex flex-col gap-3 mt-1">
                            {USE_CASES.map((u) => (
                                <div
                                    key={u}
                                    className="flex items-center gap-4 bg-white border border-slate-200/80 rounded-xl px-5 py-3.5 shadow-sm"
                                >
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1b6db1] shrink-0">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </span>
                                    <span className="text-[#292929] font-semibold text-lg">{u}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeekMaterial;
