import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Wave Background Pattern - Simulated with radial gradients or an absolute image if provided, using a soft blue pattern */}
            <div className="absolute inset-0 z-0 opacity-20" style={{ background: "radial-gradient(circle at top left, #e0f2fe 0%, transparent 40%), radial-gradient(circle at bottom right, #e0f2fe 0%, transparent 40%)" }}></div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="text-3xl font-bold text-[#005696] md:text-5xl lg:text-6xl leading-tight">
                            Temporomandibular Joint (TMJ) Replacement with 3D-Printed Titanium Implants
                        </h1>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#005696] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-lg"
                            >
                                Meet Us Live Online
                            </Link>
                            <Link
                                href="/get-quote"
                                className="rounded-full border-2 border-[#005696] px-8 py-3 text-lg font-semibold text-[#005696] transition-all hover:bg-[#005696] hover:text-white"
                            >
                                Get a Quote Now
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-4 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-[#005696] text-white">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#005696]">Call us now</p>
                                    <div className="flex flex-wrap gap-x-2">
                                        <a href="tel:+916374410703" className="text-gray-600 hover:text-[#005696] hover:underline transition-all">+91 63744 10703</a>
                                        <span className="text-gray-400">|</span>
                                        <a href="tel:+919840478347" className="text-gray-600 hover:text-[#005696] hover:underline transition-all">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-[#005696] text-white">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-[#005696]">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-gray-600 hover:text-[#005696] hover:underline transition-all">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-sm text-gray-500 italic">
                                Designed by Zoriox Innovation Labs, Marketed by Graft3D Healthcare Solutions
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative aspect-[4/3] w-full max-w-[600px]">
                            <Image
                                src="/images/temporomandibular-joint-imgs/temporo-mandibular-banner.png"
                                alt="Temporomandibular Joint"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
