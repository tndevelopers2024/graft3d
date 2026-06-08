import React from "react";
import Image from "next/image";

const STATS = [
    { value: "300+", label: "Surgeries Supported" },
    { value: "150+", label: "Hospitals Served" },
    { value: "98.6%", label: "Surgeon Satisfaction" },
    { value: "ISO", label: "13485:2016" },
];

const CERTS = [
    { logo: "/images/regraft-custom-implants/cert-ce.png", title: "CE Certified" },
    { logo: "/images/regraft-custom-implants/cert-fda.png", title: "FDA Registered Facility" },
];

const ClinicalCase = () => {
    return (
        <section className="w-full bg-[#f1faff] py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Trust & Credibility */}
                    <div className="flex flex-col gap-6">
                        <span className="inline-block bg-white text-[#1b6db1] font-bold text-sm px-4 py-1.5 rounded-full w-fit">
                            TRUST &amp; CREDIBILITY
                        </span>
                        <h2 className="text-[34px] sm:text-[40px] font-bold text-[#1e1e1e] leading-[1.12]">
                            Trusted by Surgeons.{" "}
                            <span className="text-[#1b6db1]">Proven by Results.</span>
                        </h2>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                            {STATS.map((s) => (
                                <div key={s.label} className="flex flex-col">
                                    <span className="text-[36px] font-bold text-[#1b6db1] leading-none">{s.value}</span>
                                    <span className="mt-1 text-base font-semibold text-[#292929] leading-snug">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
                            {CERTS.map((c) => (
                                <div key={c.title} className="flex items-center gap-2.5">
                                    <span className="relative w-9 h-9 shrink-0">
                                        <Image src={c.logo} alt={c.title} fill sizes="36px" className="object-contain" />
                                    </span>
                                    <span className="text-[#292929] font-semibold text-base">{c.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Case Study */}
                    <div>
                        <span className="inline-block bg-white text-[#1b6db1] font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                            CLINICAL CASE STUDY
                        </span>
                        <h2 className="text-[34px] sm:text-[40px] font-bold text-[#1e1e1e] leading-[1.12] mb-6">
                            Real Cases. <span className="text-[#1b6db1]">Real Impact.</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100">
                                    <Image
                                        src="/images/regraft-custom-implants/surgery-before.png"
                                        alt="Before surgery — skull with cranial defect"
                                        fill
                                        sizes="(max-width: 1024px) 45vw, 22vw"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="mt-2 text-center font-bold text-[#292929] text-base">Before Surgery</p>
                            </div>
                            <div>
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100">
                                    <Image
                                        src="/images/regraft-custom-implants/surgery-after.png"
                                        alt="After surgery — custom PEEK implant in place"
                                        fill
                                        sizes="(max-width: 1024px) 45vw, 22vw"
                                        className="object-cover"
                                    />
                                </div>
                                <p className="mt-2 text-center font-bold text-[#292929] text-base">After Surgery</p>
                            </div>
                        </div>

                        <p className="mt-4 text-[#292929] font-semibold text-base leading-relaxed">
                            Custom PEEK implant restores anatomy and improves patient quality of life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicalCase;
