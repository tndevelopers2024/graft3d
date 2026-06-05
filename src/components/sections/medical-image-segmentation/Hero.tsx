import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Check, Upload, PlayCircle } from "lucide-react";

const TICKS = ["Secure & HIPAA Compliant", "24–48 Hour Turnaround", "Expert + AI Accuracy"];

const STATS = [
    { value: "1000+", label: "Cases Processed" },
    { value: "200+", label: "Doctors Trust Us" },
    { value: "98%", label: "Accuracy Rate" },
    { value: "24–48 hrs", label: "Avg. Turnaround" },
];

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F4FAFD] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">

                    {/* Left: copy */}
                    <div className="flex flex-col order-2 lg:order-1">
                        <h1 className="text-[34px] sm:text-5xl lg:text-[60px] lg:leading-[1.05] font-bold tracking-tight text-[#2A2A2A]">
                            Convert Medical Scans into{" "}
                            <span className="text-[#1B6DB1]">Accurate 3D Models</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-[#2A2A2A]/90 text-[15px] lg:text-base leading-relaxed">
                            Upload your CT, MRI or CBCT scans. We segment, process and deliver
                            ready-to-use 3D models for surgical planning, implant design and research.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                            {TICKS.map((t) => (
                                <div key={t} className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#166AAF] text-white shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </span>
                                    <span className="text-[14px] lg:text-[15px] font-medium text-[#2A2A2A]">{t}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <Link
                                href="/upload-dicom-data"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#166AAF] px-6 py-3 text-white font-semibold shadow-sm hover:bg-[#125a96] transition-colors"
                            >
                                <Upload className="w-5 h-5" /> Upload DICOM Data
                            </Link>
                            <Link
                                href="#sample-files"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#1B6DB1] font-semibold border border-[#1B6DB1]/30 hover:bg-[#F1F7FC] transition-colors"
                            >
                                <PlayCircle className="w-5 h-5" /> View Sample Cases
                            </Link>
                        </div>

                        <p className="mt-6 text-[15px] font-bold">
                            <span className="text-[#FD9B00]">LIMITED TIME OFFER</span>{" "}
                            <span className="text-[#2A2A2A]">Get Your First Case at 50% OFF!</span>
                        </p>
                    </div>

                    {/* Right: contact + visual */}
                    <div className="flex flex-col order-1 lg:order-2">
                        <div className="flex flex-col sm:flex-row lg:justify-end gap-6 sm:gap-10 mb-4">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#166AAF] text-white shrink-0">
                                    <Phone className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1364A8] font-semibold leading-tight">Call us</p>
                                    <p className="text-[#000000] text-sm">
                                        <a href="tel:+916374410703" className="hover:underline">+91 63744 10703</a>
                                        {" | "}
                                        <a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#166AAF] text-white shrink-0">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1364A8] font-semibold leading-tight">Email Us</p>
                                    <a href="mailto:sales@graft3d.com" className="text-[#000000] text-sm hover:underline">
                                        Sales@graft3d.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px]">
                            <Image
                                src="/images/medical-image-segmentation/hero-visual.png"
                                alt="Medical CT scans converted into an accurate 3D anatomical model on screen"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div className="w-full bg-[#1B6DB1]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:divide-x lg:divide-white/20">
                        {STATS.map((s) => (
                            <div key={s.label} className="flex flex-col items-center text-center px-3">
                                <span className="text-2xl lg:text-[28px] font-bold text-white leading-none">{s.value}</span>
                                <span className="mt-1.5 text-[13px] lg:text-sm text-white/90">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
