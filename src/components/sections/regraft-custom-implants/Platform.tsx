"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Upload, Check } from "lucide-react";

const PIPELINE_STEPS = [
    { label: "Scan Uploaded",       img: "/images/regraft-custom-implants/Rectangle 44.png" },
    { label: "In Progress",         img: "/images/regraft-custom-implants/scan-to-implant/1.png" },
    { label: "Segmentation Review", img: "/images/regraft-custom-implants/scan-to-implant/2.png" },
    { label: "Quotation",           img: "/images/regraft-custom-implants/scan-to-implant/3.png" },
    { label: "Payment",             img: "/images/regraft-custom-implants/scan-to-implant/4.png" },
    { label: "3D In Progress",      img: "/images/regraft-custom-implants/scan-to-implant/5.png" },
    { label: "3D Review",           img: "/images/regraft-custom-implants/scan-to-implant/6.png" },
    { label: "3D Model Approved",   img: "/images/regraft-custom-implants/scan-to-implant/7.png" },
    { label: "Complete",            img: "/images/regraft-custom-implants/scan-to-implant/8.png" },
];

const FEATURES = [
    "Secure cloud-based platform for easy case management",
    "Intuitive scan viewer and 3D visualization",
    "Collaborate, review and approve from anywhere",
    "End-to-end tracking and case history",
];

const Platform = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { label, img } = PIPELINE_STEPS[activeStep];

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.7fr] gap-10 lg:gap-12 items-start">

                    {/* ── Left: Platform card ── */}
                    <div className="bg-[#eef7ff] rounded-3xl p-7 lg:p-9">
                        {/* Card header */}
                        <span className="inline-block bg-[#dfffcf] text-[#00a43e] font-bold text-xs px-3 py-1 rounded-full mb-4">
                            THE SOLUTION
                        </span>
                        <h2 className="text-[28px] sm:text-[34px] font-extrabold text-[#1e1e1e] leading-tight">
                            Regraft3D Platform
                        </h2>
                        <p className="text-[#1b6db1] font-bold text-[15px] mt-1 mb-6">
                            From Scan to Implant – Fully Managed
                        </p>

                        {/* Inner 2-col: tabs | screenshot */}
                        <div className="flex gap-5">
                            {/* Vertical tabs */}
                            <div className="flex flex-col gap-0.5 shrink-0 w-[160px]">
                                {PIPELINE_STEPS.map((step, i) => (
                                    <button
                                        key={step.label}
                                        onClick={() => setActiveStep(i)}
                                        className={`text-left px-3 py-2.5 rounded-lg text-[13px] font-bold transition-all ${i === activeStep
                                                ? "bg-white text-[#1b6db1] shadow-sm"
                                                : "text-[#3a3a3a] hover:bg-white/60"
                                            }`}
                                    >
                                        {step.label}
                                    </button>
                                ))}
                            </div>

                            {/* Screenshot area */}
                            <div className="flex-1 flex flex-col gap-3 min-w-0">
                                <p className="text-[24px] sm:text-[30px] font-extrabold text-[#1b6db1] leading-none">
                                    {label}
                                </p>
                                <div
                                    className="relative w-full rounded-xl overflow-hidden border border-[#cde6f7] bg-white shadow-md"
                                    style={{ height: "420px" }}
                                >
                                    <Image
                                        key={img}
                                        src={img}
                                        alt={`Regraft3D platform — ${label}`}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-contain object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 text-[#2e2e2e] text-sm font-semibold">
                            CT / CBCT / MRI{" "}
                            <span className="font-normal text-[#2e2e2e]/60">Upload secure scan data</span>
                        </p>
                    </div>

                    {/* ── Right: Features ── */}
                    <div className="flex flex-col justify-center gap-3 lg:pt-4">
                        <span className="inline-block bg-[#eef7ff] text-[#1b6db1] font-bold text-[10px] px-2.5 py-1 rounded-full w-fit tracking-wide">
                            THE REGRAFT3D PLATFORM
                        </span>
                        <h2 className="text-[22px] sm:text-[28px] font-extrabold text-[#1e1e1e] leading-[1.15]">
                            Built for Surgeons.{" "}
                            <span className="text-[#1b6db1]">Designed for Precision.</span>
                        </h2>

                        <ul className="flex flex-col gap-2.5 mt-1">
                            {FEATURES.map((f) => (
                                <li key={f} className="flex items-start gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00ba00] shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </span>
                                    <span className="text-[#2e2e2e] text-[13px] font-semibold leading-snug">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="https://approval.graft3d.com/auth/login"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1b6db1] px-5 py-2.5 text-white text-[13px] font-bold shadow-md hover:bg-[#155fa0] transition-colors w-full sm:w-fit mt-1"
                        >
                            <Upload className="w-4 h-4" /> Register Now
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Platform;
