import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Video, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Wave Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Image
                    src="/images/reconstruction-of-the-maxilla-and-mandible/Line-6.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold text-[#005696] md:text-4xl lg:text-4xl leading-tight">
                                Resection and reconstruction planning for tumour and cancer
                            </h1>
                            <p className="text-xl font-medium text-gray-800">
                                with Immediate Fibula Free Flap and 3D Printing Technology
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-[#005696] px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-lg"
                            >
                                Meet Us Live Online <Video className="size-5" />
                            </Link>
                            <Link
                                href="/get-quote"
                                className="rounded-full border border-[#005696] px-8 py-3 text-lg font-semibold text-[#005696] transition-all hover:bg-[#005696] hover:text-white"
                            >
                                Get a Quote Now
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-6 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="flex size-14 items-center justify-center rounded-full bg-[#005696] text-white">
                                    <Phone className="size-7" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl font-bold text-[#005696]">Call us now</p>
                                    <div className="flex flex-wrap gap-x-2">
                                        <a href="tel:+916374410703" className="text-lg font-medium text-gray-700 hover:text-[#005696] hover:underline transition-all">+91 63744 10703</a>
                                        <span className="text-gray-400">|</span>
                                        <a href="tel:+919840478347" className="text-lg font-medium text-gray-700 hover:text-[#005696] hover:underline transition-all">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex size-14 items-center justify-center rounded-full bg-[#005696] text-white">
                                    <Mail className="size-7" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl font-bold text-[#005696]">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-lg font-medium text-gray-700 hover:text-[#005696] hover:underline transition-all">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 pt-12">
                            <CheckCircle2 className="size-5 text-[#005696] fill-white" />
                            <p className="text-sm font-semibold text-gray-700">
                                <span className="text-gray-600">Designed by </span>
                                <span className="text-[#005696]">Zoriox Innovation Labs</span>
                                <span className="text-gray-600"> ,Marketed by </span>
                                <span className="text-[#005696]">Graft3D Healthcare Solutions</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative aspect-square w-full max-w-[500px]">
                            <Image
                                src="/images/reconstruction-of-the-maxilla-and-mandible/Rectangle-41928.png"
                                alt="Mandible Reconstruction"
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
