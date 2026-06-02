import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, PlayCircle, FileText, CheckCircle2 } from "lucide-react";

const CHECKS = [
    "Ultra Compact Design",
    "Up to 4000 Hz Refresh Rate",
    "High - Precision Force Feedback",
    "Developer-First Ecosystem",
];

const CtaBanner = () => {
    return (
        <section className="w-full bg-[#EFF8FC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#03497C] via-[#155C95] to-[#2A6CA2] px-7 py-10 lg:px-14 lg:py-12">
                    {/* texture overlay */}
                    <Image
                        src="/images/minverse/cta-texture.png"
                        alt=""
                        fill
                        aria-hidden
                        className="object-cover opacity-20 mix-blend-screen pointer-events-none"
                    />

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
                        {/* Left content */}
                        <div>
                            <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-[50px] lg:leading-[1.08]">
                                Small in size.<br />Big in Performance.
                            </h2>
                            <p className="mt-4 text-[#C9DEFF] font-semibold text-lg lg:text-2xl">
                                MinVerse brings precision haptics within your reach.
                            </p>

                            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
                                {CHECKS.map((c) => (
                                    <div key={c} className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                                        <span className="text-white text-base lg:text-lg">{c}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-9 flex flex-col sm:flex-row gap-6 sm:gap-10">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <p className="text-white font-semibold text-lg leading-tight">Call us now</p>
                                        <p className="text-white/90 text-sm">
                                            <a href="tel:+916374410703" className="hover:underline">+91 63744 10703</a>
                                            {" | "}
                                            <a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <p className="text-white font-semibold text-lg leading-tight">Email Us at</p>
                                        <a href="mailto:sales@graft3d.com" className="text-white/90 text-sm hover:underline">
                                            Sales@graft3d.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right buttons */}
                        <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[200px]">
                            <a
                                href="tel:+919840478347"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[#004B84] font-semibold hover:bg-gray-100 transition-colors"
                            >
                                <Phone className="w-5 h-5" /> Call Us Now
                            </a>
                            <Link
                                href="/get-quote"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/40 px-7 py-3.5 text-white font-semibold hover:bg-white/20 transition-colors"
                            >
                                <FileText className="w-5 h-5" /> Get Quote
                            </Link>
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/40 px-7 py-3.5 text-white font-semibold hover:bg-white/20 transition-colors"
                            >
                                <PlayCircle className="w-5 h-5" /> Online Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
