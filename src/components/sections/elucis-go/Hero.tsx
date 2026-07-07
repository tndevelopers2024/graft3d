"use client";
import { Phone, CirclePlay } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] md:min-h-175 flex items-center overflow-hidden text-white">
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/elucis-go/hero-bg.png"
                    alt="Elucis Go VR Surgical Planning"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-400 mx-auto px-3 sm:px-6 md:px-12 py-20">
                <div className="max-w-2xl space-y-6 animate-fade-in-up">
                    <div className="inline-block text-3xl font-semibold mb-2">
                        ELUCIS GO
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        VR Surgical Planning Without{" "}
                        <span className="text-[#2899f7]">
                            Complex Infrastructure
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed max-w-xl">
                        Experience patient-specific anatomy anywhere using an
                        untethered VR headset. Review, discuss and plan complex
                        cases with unmatched clarity and ease.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                        <button className="bg-[#166AAF] text-white text-base md:text-lg font-bold py-3.5 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all hover:-translate-y-0.5">
                            <a href="/book-demo" className="flex items-center gap-2">
                                <Phone className="w-5 h-5" fill="white" strokeWidth={0} />
                                Book a Live Demo
                            </a>
                        </button>
                        <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base md:text-lg font-bold py-3.5 px-8 rounded-lg hover:bg-white/20 transition-all hover:-translate-y-0.5">
                            <a href="/contact-us" className="flex items-center gap-2">
                                <CirclePlay className="w-5 h-5" />
                                Take to Graft 3D India
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
