import React from "react";
import { Quote } from "lucide-react";

const STATS = [
    { value: "1000+", label: "Cases Processed" },
    { value: "200+", label: "Happy Doctors" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "4.9/5", label: "Customer Rating" },
];

const Trusted = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Left: heading + stats */}
                    <div>
                        <h2 className="text-3xl lg:text-[40px] font-bold text-[#2A2A2A] mb-8">
                            Trusted by Medical Professionals
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {STATS.map((s) => (
                                <div key={s.label}>
                                    <p className="text-3xl lg:text-[35px] font-bold text-[#1B6DB1] leading-none">{s.value}</p>
                                    <p className="mt-2 text-[#2A2A2A]/80 text-[15px] lg:text-base leading-snug">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: testimonial */}
                    <div className="rounded-2xl border border-[#D6E4F0] bg-white p-7 lg:p-9 shadow-[0_4px_20px_rgba(16,80,140,0.06)]">
                        <Quote className="w-8 h-8 text-[#1B6DB1]/30" />
                        <p className="mt-3 text-[#2A2A2A] text-[16px] lg:text-lg leading-relaxed">
                            <span className="font-bold text-[#1B6DB1]">GRAFT3D</span> has completely transformed our
                            surgical planning workflow. The accuracy and turnaround time are exceptional.
                        </p>
                        <div className="mt-5">
                            <p className="text-[#2A2A2A]">Dr. Rahul Mehta</p>
                            <p className="font-bold text-[#2A2A2A]">Neurosurgeon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trusted;
