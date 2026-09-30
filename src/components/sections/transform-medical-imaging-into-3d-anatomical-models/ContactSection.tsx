import { Phone, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section
            className="w-full py-16 lg:py-18"
            style={{
                background: "linear-gradient(90deg, #0E324F 0%, #1F72B5 100%)",
            }}
        >
            <div className="container mx-auto max-w-450 px-4 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Side Content */}
                    <div className="flex flex-col lg:col-span-8">
                        <h2 className="mb-4 text-[3.125rem] leading-tight font-extrabold whitespace-pre-line text-white lg:mb-6">
                            Ready to Bring Patient
                            <br />
                            Anatomy to Life?
                        </h2>
                        <p className="mb-10 max-w-4xl text-[1.5rem] leading-snug font-semibold text-[#C9DEFF]">
                            Transform medical imaging into accurate, tangible,
                            patient-specific 3D anatomical models for better
                            visualization, education, simulation, and clinical
                            planning.
                        </p>

                        <div className="flex flex-col gap-6">
                            {/* Phone Contact */}
                            <div className="flex items-center gap-5">
                                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                                    <Image
                                        src="/images/transform-medical-imaging-into-3d-anatomical-models/phone-icon.png"
                                        alt="Call Us"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[1.25rem] font-semibold text-white">
                                        Call us now
                                    </span>
                                    <span className="mt-1 text-[0.9375rem] font-normal text-white">
                                        <a
                                            href="tel:+919840478347"
                                            className="hover:underline"
                                        >
                                            +91 9840478347
                                        </a>{" "}
                                        |{" "}
                                        <a
                                            href="tel:+916374410703"
                                            className="hover:underline"
                                        >
                                            +91 6374410703
                                        </a>
                                    </span>
                                </div>
                            </div>

                            {/* Email Contact */}
                            <div className="flex items-center gap-5">
                                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                                    <Image
                                        src="/images/transform-medical-imaging-into-3d-anatomical-models/mail-icon.png"
                                        alt="Email Us"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[1.25rem] font-semibold text-white">
                                        Email Us at
                                    </span>
                                    <span className="mt-1 text-[0.9375rem] font-normal text-white">
                                        <a
                                            href="mailto:sales@graft3d.com"
                                            className="hover:underline"
                                        >
                                            sales@graft3d.com
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex flex-col gap-5 lg:col-span-4">
                        <Link
                            href="/book-demo"
                            className="flex w-full items-center justify-center gap-3 rounded-lg border border-white bg-transparent py-4 text-[1.25rem] font-bold text-white transition-colors hover:bg-white/10"
                        >
                            <PlayCircle size={24} />
                            Book a Live Demo
                        </Link>
                        <Link
                            href="/contact-us"
                            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1F88DD] py-4 text-[1.25rem] font-bold text-white transition-colors hover:bg-[#1970b5]"
                        >
                            <Phone fill="white" size={24} />
                            Speak to a Medical 3D Specialist
                        </Link>
                        <Link
                            href="/contact-us"
                            className="flex w-full items-center justify-center rounded-lg border border-white bg-transparent px-2 py-4 text-center text-[1.25rem] font-bold text-white transition-colors hover:bg-white/10"
                        >
                            Request a Customized Anatomical Model Package
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
