import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const CERTS = [
    { logo: "/images/regraft-custom-implants/cert-iso.png", text: ["ISO", "13485:2016"] },
    { logo: "/images/regraft-custom-implants/cert-ce.png", text: ["CE", "Certified"] },
    { logo: "/images/regraft-custom-implants/cert-fda.png", text: ["FDA Registered", "Facility"] },
];

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden bg-cover bg-center pt-10 sm:pt-14 lg:pt-16 pb-0 flex flex-col justify-between"
            style={{ backgroundImage: "url('/images/regraft-custom-implants/hero-bg.png')" }}
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: Content */}
                    <div className="flex flex-col lg:col-span-7 justify-center pb-8 sm:pb-12 lg:pb-20 z-20">
                        {/* ReGraft logo */}
                        <div className="mb-6">
                            <Image
                                src="/images/regraft-custom-implants/logo.png"
                                alt="ReGraft"
                                width={500}
                                height={150}
                                priority
                                className="h-20 sm:h-28 lg:h-32 w-auto object-contain"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-extrabold text-[#292929] leading-[1.12] tracking-tight">
                            ArtiBone - Custom PEEK <br />
                            Implants. Better Outcomes. <br />
                            <span className="text-[#1b6db1]">Saving Lives.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-4 text-[#4a4a4a] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-medium">
                            Regraft3D is a digital platform and manufacturing ecosystem that transforms patient scan data into custom PEEK implants designed to fit perfectly, every time.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Link
                                href="/upload-bio-data"
                                className="inline-flex items-center justify-center rounded bg-[#1b6db1] px-7 py-3.5 text-white text-[15px] font-bold shadow-md hover:bg-[#155fa0] transition-colors"
                            >
                                Upload Scan Data
                            </Link>
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center justify-center rounded bg-[#1b6db1] px-7 py-3.5 text-white text-[15px] font-bold shadow-md hover:bg-[#155fa0] transition-colors"
                            >
                                Request Demo
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-10">
                            <p className="text-[#292929] font-bold text-[14px]">
                                Trusted by Hospitals Worldwide
                            </p>
                            <div className="mt-4 flex flex-wrap gap-8 sm:gap-10">
                                {CERTS.map((c, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center gap-1 w-[100px]">
                                        <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                                            <Image
                                                src={c.logo}
                                                alt={c.text.join(" ")}
                                                fill
                                                sizes="50px"
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="text-[#292929] text-[12px] font-bold leading-tight mt-1">
                                            {c.text.map((t, i) => (
                                                <div key={i}>{t}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Details */}
                    <div className="relative lg:col-span-5 w-full flex flex-col justify-start items-start z-20 pb-[320px] sm:pb-[420px] lg:pb-0 pt-0 lg:pt-4">
                        {/* Contact details stack */}
                        <div className="flex flex-col gap-4 max-w-[280px]">
                            {/* Call Us */}
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1b6db1] text-white shrink-0 shadow-md">
                                    <Phone className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1364a8] font-bold text-[14px] leading-tight">Call us</p>
                                    <p className="text-[#000000] text-[13px] font-bold mt-0.5">
                                        <a href="tel:+916374410703" className="hover:underline">+91 6374410703</a>
                                        <span className="text-gray-400 font-normal mx-1">|</span>
                                        <a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1b6db1] text-white shrink-0 shadow-md">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1364a8] font-bold text-[14px] leading-tight">Email Us</p>
                                    <a
                                        href="mailto:Sales@graft3d.com"
                                        className="text-[#000000] text-[13px] font-bold hover:underline block mt-0.5"
                                    >
                                        Sales@graft3d.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Absolute Composite Surgeon/Skull Image sitting directly on the bottom border */}
            <div className="absolute -bottom-6 lg:-bottom-12 right-0 w-full lg:w-[48%] h-[320px] sm:h-[420px] lg:h-[96%] z-10 pointer-events-none select-none flex items-end justify-end">
                {/* Aspect-ratio locked wrapper based on hero-product.png (1122x1402) */}
                <div className="relative w-auto h-full aspect-[1122/1402] max-w-full max-h-full">
                    {/* Skull Image (1.png) positioned to the left and behind the surgeon/tablet */}
                    <div className="absolute left-[-15%] bottom-[4%] w-[55%] h-[55%] z-0">
                        <Image
                            src="/images/regraft-custom-implants/1.png"
                            alt="Anatomical skull model with custom PEEK implant"
                            fill
                            className="object-contain object-bottom"
                        />
                    </div>
                    {/* Surgeon Image */}
                    <Image
                        src="/images/regraft-custom-implants/hero-product.png"
                        alt="Custom PEEK implant — ArtiBone patient-specific artificial bone"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-bottom relative z-10"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
