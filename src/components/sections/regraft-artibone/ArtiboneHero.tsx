import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const ArtiboneHero = () => {
    return (
        <section className="relative w-full bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/regraft-artibone/reg-arti-bg.png"
                    alt="Artibone Background"
                    fill
                    className="object-cover opacity-15"
                    priority
                />
                {/* Optional overlay gradient to ensure text readability if needed */}
                <div className="absolute inset-0 bg-white/70 md:bg-white/40 xl:bg-transparent"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                    {/* Content Block */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="text-4xl font-extrabold text-[#005696] md:text-5xl lg:text-7xl">
                            Artibone
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-lg">
                            Patient-Specific Bone Reconstruction Powered by Digital Precision
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/get-quote"
                                className="inline-flex justify-center items-center rounded-full bg-[#005696] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#004274] hover:shadow-lg"
                            >
                                Enquire now
                            </Link>
                            <Link
                                href="/get-quote"
                                className="inline-flex justify-center items-center rounded-full bg-white border-2 border-[#005696] px-8 py-4 text-lg font-bold text-[#005696] transition-all hover:bg-gray-50 hover:shadow-md"
                            >
                                Book 3D Scanning Appointment
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-200">
                            {/* Call Info */}
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#005696]">
                                    <Phone className="size-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Call us now</p>
                                    <div className="flex flex-col">
                                        <a href="tel:+916374410703" className="text-[#005696] font-medium hover:underline transition-all">+91 63744 10703</a>
                                        <a href="tel:+919840478347" className="text-[#005696] font-medium hover:underline transition-all">+91 98404 78347</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email Info */}
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 items-center justify-center rounded-full bg-[#f0f7ff] text-[#005696]">
                                    <Mail className="size-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Email Us at</p>
                                    <a href="mailto:sales@graft3d.com" className="text-[#005696] font-medium hover:underline transition-all">sales@graft3d.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Empty right column allowing the background image to shine on large screens */}
                    <div className="hidden md:block"></div>

                </div>
            </div>
        </section>
    );
};

export default ArtiboneHero;
