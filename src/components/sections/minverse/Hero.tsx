import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, PlayCircle, FileText } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#C6DAE8] via-[#E4EFF6] to-[#E0ECF4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">

                    {/* Left: copy + CTAs */}
                    <div className="flex flex-col">
                        <h1 className="text-5xl sm:text-6xl lg:text-[70px] lg:leading-[1.02] font-bold tracking-tight">
                            <span className="text-[#2A2A2A]">Min</span>
                            <span className="text-[#166AAF]">Verse</span>
                        </h1>

                        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[40px] lg:leading-[1.15] font-medium text-[#2A2A2A]">
                            Compact Precision,<br className="hidden sm:block" /> Maximum Control.
                        </h2>

                        <p className="mt-5 max-w-xl text-[#2A2A2A]/90 text-[15px] lg:text-base leading-relaxed">
                            MinVerse is a compact, high-performance haptic device engineered for
                            precision-driven workflows in simulation, design, and robotics. Despite its
                            lightweight and space-efficient form factor, it delivers highly responsive
                            feedback and ultra-fine motion control in immersive 3D environments. MinVerse
                            combines advanced haptics with high refresh rates and robust SDK support,
                            bridging the gap between physical interaction and digital environments.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-4">
                            <a
                                href="tel:+919840478347"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#166AAF] px-6 py-3 text-white font-semibold shadow-sm hover:bg-[#125a96] transition-colors"
                            >
                                <Phone className="w-5 h-5" /> Call us now
                            </a>
                            <Link
                                href="/get-quote"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#1E1E1E] font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <FileText className="w-5 h-5" /> Get Quote
                            </Link>
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#1E1E1E] font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <PlayCircle className="w-5 h-5" /> Online Demo
                            </Link>
                        </div>
                    </div>

                    {/* Right: product visual + contact */}
                    <div className="flex flex-col">
                        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[440px]">
                            <Image
                                src="/images/minverse/hero-device.png"
                                alt="MinVerse compact haptic device held in hand"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain object-center"
                            />
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row lg:justify-end gap-6 sm:gap-10">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#166AAF] text-white shrink-0">
                                    <Phone className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1364A8] font-semibold text-lg leading-tight">Call us now</p>
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
                                    <p className="text-[#1364A8] font-semibold text-lg leading-tight">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-[#000000] text-sm hover:underline">
                                        Sales@graft3d.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
