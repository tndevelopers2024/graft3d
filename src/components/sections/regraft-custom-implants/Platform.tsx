"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Upload, Check } from "lucide-react";

const PIPELINE_STEPS = [
    "Scan Uploaded",
    "In Progress",
    "Segmentation Review",
    "Quotation",
    "Payment",
    "3D In Progress",
    "3D Review",
    "3D Model Approved",
    "Complete",
];

const FEATURES = [
    "Secure cloud-based platform for easy case management",
    "Intuitive scan viewer and 3D visualization",
    "Collaborate, review and approve from anywhere",
    "End-to-end tracking and case history",
];

const Platform = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="w-full bg-white py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-stretch">

                    {/* Left: Platform card */}
                    <div className="bg-[#f1faff] rounded-3xl p-6 lg:p-7">
                        <span className="inline-block bg-[#dfffcf] text-[#00a43e] font-bold text-xs px-3 py-1 rounded-full mb-3">
                            THE SOLUTION
                        </span>
                        <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1e1e1e] leading-tight">
                            Regraft3D Platform
                        </h2>
                        <p className="text-[#1b6db1] font-bold text-base mt-1 mb-5">
                            From Scan to Implant – Fully Managed
                        </p>

                        {/* Inner: vertical steps + screenshot */}
                        <div className="grid grid-cols-[auto_1fr] gap-4">
                            {/* Vertical step tabs */}
                            <div className="flex flex-col gap-1.5">
                                {PIPELINE_STEPS.map((step, i) => (
                                    <button
                                        key={step}
                                        onClick={() => setActiveStep(i)}
                                        className={`text-left px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                                            i === activeStep
                                                ? "bg-white text-[#1b6db1] shadow-sm"
                                                : "bg-[#1b6db1] text-white hover:bg-[#155fa0]"
                                        }`}
                                    >
                                        {step}
                                    </button>
                                ))}
                            </div>

                            {/* Upload + screenshot panel */}
                            <div className="flex flex-col">
                                <p className="text-[28px] sm:text-[34px] font-bold text-[#1b6db1] leading-none mb-3">
                                    Upload Scan
                                </p>
                                <div className="rounded-xl overflow-hidden border border-white bg-white shadow-sm flex-1">
                                    <Image
                                        src="/images/regraft-custom-implants/platform-screenshot.png"
                                        alt="Regraft3D platform dashboard screenshot"
                                        width={779}
                                        height={420}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <p className="mt-4 text-[#2e2e2e] text-sm font-semibold">
                            CT / CBCT / MRI <span className="font-normal text-[#2e2e2e]/70">Upload secure scan data</span>
                        </p>
                    </div>

                    {/* Right: description */}
                    <div className="flex flex-col justify-center gap-5 lg:py-4">
                        <span className="inline-block bg-[#f1faff] text-[#1b6db1] font-bold text-xs px-3 py-1 rounded-full w-fit">
                            THE REGRAFT3D PLATFORM
                        </span>
                        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1e1e1e] leading-[1.12]">
                            Built for Surgeons.{" "}
                            <span className="text-[#1b6db1]">Designed for Precision.</span>
                        </h2>

                        <ul className="flex flex-col gap-3.5">
                            {FEATURES.map((f) => (
                                <li key={f} className="flex items-start gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00ba00] shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                    </span>
                                    <span className="text-[#2e2e2e] text-[17px] font-semibold leading-snug">{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/upload-bio-data"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#1b6db1] px-6 py-3 text-white font-bold shadow-sm hover:bg-[#155fa0] transition-colors w-fit mt-1"
                        >
                            <Upload className="w-5 h-5" /> Upload Scan Data
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Platform;
