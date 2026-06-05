"use client";

import React, { useState } from "react";
import Image from "next/image";

const STATES = [
    { name: "Scan Uploaded", img: "/images/medical-image-segmentation/platform-scan-uploaded.png" },
    { name: "In Progress", img: "/images/medical-image-segmentation/platform-in-progress.png" },
    { name: "Segmentation Review", img: "/images/medical-image-segmentation/platform-segmentation-review.png" },
    { name: "Quotation", img: "/images/medical-image-segmentation/platform-quotation.png" },
    { name: "Payment", img: "/images/medical-image-segmentation/platform-payment.png" },
    { name: "Segmented Files", img: "/images/medical-image-segmentation/platform-segmented-files.png" },
    { name: "Delivered", img: "/images/medical-image-segmentation/platform-delivered.png" },
];

const Platform = () => {
    const [active, setActive] = useState(0);
    const current = STATES[active];

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <h2 className="text-center text-3xl lg:text-[40px] font-bold text-[#2A2A2A] mb-10 lg:mb-12">
                    A Complete Medical Image Management Platform
                </h2>

                <div className="rounded-2xl border border-[#E4ECF3] bg-white shadow-[0_8px_40px_rgba(16,80,140,0.08)] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

                        {/* Tabs panel */}
                        <div className="bg-[#1B6DB1] p-5 lg:p-7">
                            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1">
                                {STATES.map((s, i) => {
                                    const isActive = i === active;
                                    return (
                                        <button
                                            key={s.name}
                                            onClick={() => setActive(i)}
                                            aria-pressed={isActive}
                                            className={`whitespace-nowrap text-left rounded-lg px-4 py-3 text-sm lg:text-[15px] font-semibold transition-colors shrink-0 lg:w-full ${
                                                isActive
                                                    ? "bg-white text-[#1B6DB1] shadow-sm"
                                                    : "text-white hover:bg-white/10"
                                            }`}
                                        >
                                            {s.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Preview panel */}
                        <div className="p-6 lg:p-10">
                            <h3 className="text-2xl lg:text-[34px] font-bold text-[#1B6DB1] mb-5">{current.name}</h3>
                            <div className="relative w-full aspect-[519/402] rounded-xl border border-[#E4ECF3] bg-[#F7FAFD] overflow-hidden">
                                <Image
                                    key={current.img}
                                    src={current.img}
                                    alt={`${current.name} — platform screen`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;
