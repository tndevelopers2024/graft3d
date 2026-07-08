"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] md:min-h-175 flex items-center overflow-hidden">
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/elucis-next/hero-bg.png"
                    alt="Elucis Next Background"
                    fill
                    className="object-cover object-center md:rounded-4xl md:p-4"
                    priority
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-400 mx-auto px-3 sm:px-6 md:px-12 py-20 mt-16">
                <div className="max-w-2xl space-y-6 animate-fade-in-up">
                    <div className="inline-block text-3xl text-[#166aaf] font-semibold mb-2 uppercase">
                        RESEARCH & EDUCATION EDITION
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                        <span>Immersive Medical </span>
                        <span className="text-[#166aaf]">
                            Research & Education
                        </span>{" "}
                        Platform
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed max-w-xl">
                        Convert DICOM imaging into immersive 3D anatomy for
                        research, teaching, training and methodology
                        development.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                        <button className="bg-[#166AAF] text-white text-base md:text-lg font-semibold py-3.5 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all hover:-translate-y-0.5">
                            <Link
                                href="#academic-licensing"
                                className="flex items-center gap-2"
                            >
                                <Phone
                                    className="w-5 h-5"
                                    fill="white"
                                    strokeWidth={0}
                                />
                                Request Academic Demo
                            </Link>
                        </button>
                        <button className="flex items-center gap-2  backdrop-blur-md border border-[#166AAF] text-[#166aaf] text-base md:text-lg font-semibold py-3.5 px-10 rounded-lg hover:bg-white/20 transition-all hover:-translate-y-0.5">
                            <Link
                                href="#features"
                                className="flex items-center gap-2"
                            >
                                Explore Features
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
