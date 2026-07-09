import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
    { title: "Secure & HIPAA", subtitle: "Compliant" },
    { title: "24–48 Hour", subtitle: "Turnaround" },
    { title: "Expert + AI", subtitle: "Accuracy" },
];

const HomeHero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-linear-to-b from-[#F4FAFD] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-14 pb-12 lg:pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left Side: Copy and CTAs */}
                    <div className="flex flex-col order-2 lg:order-1">
                        <h1 className="text-[34px] sm:text-5xl lg:text-[56px] lg:leading-[1.1] font-bold tracking-tight text-[#2A2A2A]">
                            Convert Medical Scans into{" "}
                            <span className="text-[#1B6DB1] block sm:inline">
                                Accurate 3D Models
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-[#2A2A2A]/90 text-[15px] lg:text-base leading-relaxed">
                            Upload your CT, MRI or CBCT scans. We segment,
                            process and deliver ready-to-use 3D models for
                            surgical planning, implant design and research.
                        </p>

                        {/* 3-Column Benefits */}
                        <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
                            {BENEFITS.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col text-left"
                                >
                                    <span className="text-[14px] lg:text-[16px] font-semibold text-[#2A2A2A]">
                                        {benefit.title}
                                    </span>
                                    <span className="text-[13px] lg:text-[14px] text-gray-500 font-medium mt-0.5">
                                        {benefit.subtitle}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/upload-dicom-data"
                                className="inline-flex items-center justify-center rounded-lg bg-[#166AAF] px-6 py-3.5 text-white font-semibold shadow-sm hover:bg-[#125a96] transition-colors text-sm lg:text-base"
                            >
                                Upload DICOM Data
                            </Link>
                            <Link
                                href="/medical-image-segmentation#sample-files"
                                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-[#1B6DB1] font-semibold border border-[#1B6DB1]/30 hover:bg-[#F1F7FC] transition-colors text-sm lg:text-base"
                            >
                                View Sample Cases
                            </Link>
                        </div>

                        {/* Split Limited Time Offer Badge */}
                        <div className="mt-8 self-start">
                            <div className="inline-flex items-center border border-[#E4E7EC] rounded-lg overflow-hidden shadow-sm bg-white">
                                <span className="bg-[#FFF6E6] text-[#FD9B00] font-bold text-[11px] lg:text-xs uppercase px-3.5 py-2 border-r border-[#E4E7EC] tracking-wider">
                                    LIMITED TIME OFFER
                                </span>
                                <span className="text-[#2A2A2A] text-[11px] lg:text-xs font-semibold px-3.5 py-2">
                                    Get Your First Case at{" "}
                                    <span className="text-[#D92D20] font-bold">
                                        50% OFF!
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact info & Visual */}
                    <div className="flex flex-col order-1 lg:order-2">
                        {/* Contact Info at Top Right */}
                        <div className="flex flex-col sm:flex-row lg:justify-end gap-6 sm:gap-8 mb-6 lg:mb-8">
                            {/* Call Us */}
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#166AAF] text-white shrink-0 shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1B6DB1] font-bold text-sm leading-tight">
                                        Call us
                                    </p>
                                    <p className="text-[#2A2A2A] text-[13px] font-medium mt-0.5">
                                        <a
                                            href="tel:+916374410703"
                                            className="hover:text-[#1B6DB1] transition-colors"
                                        >
                                            +91 6374410703
                                        </a>
                                        {" | "}
                                        <a
                                            href="tel:+919840478347"
                                            className="hover:text-[#1B6DB1] transition-colors"
                                        >
                                            +91 98404 78347
                                        </a>
                                    </p>
                                </div>
                            </div>
                            {/* Email Us */}
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#166AAF] text-white shrink-0 shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <div>
                                    <p className="text-[#1B6DB1] font-bold text-sm leading-tight">
                                        Email Us
                                    </p>
                                    <p className="text-[#2A2A2A] text-[13px] font-medium mt-0.5">
                                        <a
                                            href="mailto:sales@graft3d.com"
                                            className="hover:text-[#1B6DB1] transition-colors"
                                        >
                                            Sales@graft3d.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Monitor & Visual Graphic */}
                        <div className="flex items-center justify-between gap-4 lg:gap-6 w-full h-[280px] sm:h-[360px] lg:h-[400px]">
                            {/* Monitor Image */}
                            <div className="relative flex-1 h-full">
                                <Image
                                    src="/images/medical-image-segmentation/hero-visual.png"
                                    alt="Medical CT scans converted into an accurate 3D anatomical model on screen"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 80vw, 40vw"
                                    className="object-contain object-center lg:object-right"
                                />
                            </div>

                            {/* Vertical Small Images Column */}
                            <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4 w-[75px] sm:w-[110px] lg:w-[140px] shrink-0">
                                <div
                                    className="group relative w-full rounded-lg overflow-hidden border border-slate-200/80 bg-slate-950 shadow-sm hover:scale-105 hover:shadow-md hover:border-[#166AAF]/40 transition-all duration-300 cursor-pointer"
                                    style={{ aspectRatio: "150/104" }}
                                >
                                    <Image
                                        src="/images/medical-image-segmentation/banner-small-imgs/image 9977-Photoroom 4.png"
                                        alt="3D skull model visualization"
                                        fill
                                        sizes="(max-width: 640px) 75px, 140px"
                                        className="object-cover"
                                    />
                                </div>
                                <div
                                    className="group relative w-full rounded-lg overflow-hidden border border-slate-200/80 bg-slate-950 shadow-sm hover:scale-105 hover:shadow-md hover:border-[#166AAF]/40 transition-all duration-300 cursor-pointer"
                                    style={{ aspectRatio: "150/104" }}
                                >
                                    <Image
                                        src="/images/medical-image-segmentation/banner-small-imgs/image 9977-Photoroom 3.png"
                                        alt="3D cardiovascular heart model visualization"
                                        fill
                                        sizes="(max-width: 640px) 75px, 140px"
                                        className="object-cover"
                                    />
                                </div>
                                <div
                                    className="group relative w-full rounded-lg overflow-hidden border border-slate-200/80 bg-slate-950 shadow-sm hover:scale-105 hover:shadow-md hover:border-[#166AAF]/40 transition-all duration-300 cursor-pointer"
                                    style={{ aspectRatio: "150/104" }}
                                >
                                    <Image
                                        src="/images/medical-image-segmentation/banner-small-imgs/image 9977-Photoroom 2.png"
                                        alt="3D lungs/airway model visualization"
                                        fill
                                        sizes="(max-width: 640px) 75px, 140px"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
