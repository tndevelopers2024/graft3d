import { Phone, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative flex min-h-150 w-full items-center overflow-hidden bg-[#000A18] py-16 lg:py-24">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-right"
                    priority
                />
                <div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        background:
                            "linear-gradient(90deg, #000A18 0%, rgba(0, 10, 24, 0.95) 30%, rgba(0, 10, 24, 0.5) 65%, rgba(0, 10, 24, 0) 100%)",
                    }}
                />
            </div>

            <div className="relative z-20 container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Left side content */}
                    <div className="flex flex-col gap-6">
                        <span className="text-[1.25rem] font-bold text-[#1F88DD]">
                            Graft3D Healthcare 3D Printing Packages
                        </span>

                        <h1 className="leading-tight font-bold">
                            <span className="block text-[2.5rem] text-white">
                                Complete End-to-End Medical
                            </span>
                            <span className="block text-[2.5rem] text-[#008BFF]">
                                3D Printing Solutions
                            </span>
                        </h1>

                        <div className="flex flex-col gap-4 text-[1.1875rem] font-normal text-white">
                            <p>
                                At Graft3D Healthcare, we don&apos;t simply
                                supply a 3D scanner, software, or 3D printer. We
                                design and deliver complete medical 3D printing
                                packages that enable hospitals, medical
                                colleges, prosthetic centers, and healthcare
                                innovators to create patient-specific,
                                life-saving medical devices.
                            </p>
                            <p>
                                Every medical application requires a unique
                                workflow. Our packages combine the right
                                hardware, software, and clinical workflow into
                                one integrated solution.
                            </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-4">
                            <Link
                                href="/book-demo"
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#1F88DD] px-6 py-3 text-[1.25rem] font-bold text-white transition-colors hover:bg-[#1F88DD]/90"
                            >
                                <Phone className="h-5 w-5 fill-white text-white" />
                                Book a Live Demo
                            </Link>
                            <Link
                                href="/contact-us"
                                className="flex items-center justify-center gap-2 rounded-lg border border-white bg-transparent px-6 py-3 text-[1.25rem] font-bold text-white transition-colors hover:bg-white/10"
                            >
                                <PlayCircle className="h-5 w-5 text-white" />
                                Talk to Graft 3D India
                            </Link>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="relative mt-8 aspect-square w-full lg:mt-0 lg:aspect-auto lg:h-150">
                        <Image
                            src="/images/complete-end-to-end-medical-3d-printing-solutions/hero-image.png"
                            alt="Complete End-to-End Medical 3D Printing Solutions"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
