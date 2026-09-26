import { CirclePlay, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section
            className="w-full py-8 lg:py-16"
            style={{
                background: "linear-gradient(90deg, #0E324F 0%, #1F72B5 100%)",
            }}
        >
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div className="mx-auto flex w-full max-w-450 flex-col items-center justify-between gap-12 lg:flex-row">
                    {/* Left Column */}
                    <div className="flex w-full flex-col gap-6 lg:w-3/5 lg:gap-8">
                        <h2 className="text-[2.5rem] leading-tight font-extrabold text-white md:text-[3rem] lg:text-[3.5rem]">
                            Ready to Buy Funmat HT
                        </h2>
                        <p className="max-w-175 text-[1.25rem] leading-relaxed font-semibold text-[#C9DEFF] lg:text-[1.5rem]">
                            Empower your surgical team with patient-specific 3D
                            anatomical models and a complete medical 3D printing
                            ecosystem.
                        </p>

                        <div className="mt-4 flex flex-col gap-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/funmat-ht/phone-icon.png"
                                    alt="Phone"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[1.125rem] font-semibold text-white">
                                        Call us now
                                    </span>
                                    <span className="mt-1 text-[0.9375rem] font-normal text-white">
                                        <a
                                            href="tel:+919840478347"
                                            className="hover:underline"
                                        >
                                            +91 98404 78347
                                        </a>{" "}
                                        |{" "}
                                        <a
                                            href="tel:+916374410703"
                                            className="hover:underline"
                                        >
                                            +91 63744 10703
                                        </a>
                                    </span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/funmat-ht/mail-icon.png"
                                    alt="Email"
                                    width={56}
                                    height={56}
                                    className="h-14 w-14 object-contain"
                                />
                                <div className="flex flex-col">
                                    <span className="text-[1.125rem] font-semibold text-white">
                                        Email Us at
                                    </span>
                                    <span className="mt-1 text-[0.9375rem] font-normal text-white">
                                        <a
                                            href="mailto:sm@graft3d.com"
                                            className="hover:underline"
                                        >
                                            sm@graft3d.com
                                        </a>{" "}
                                        |{" "}
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

                    {/* Right Column */}
                    <div className="flex w-full max-w-100 flex-col gap-5 lg:ml-auto lg:w-2/5">
                        <Link
                            href="/get-quote"
                            className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1F88DD] py-4 text-[1.125rem] font-bold text-white transition-colors hover:bg-[#166AAF] lg:text-[1.25rem]"
                        >
                            <Phone className="h-6 w-6" />
                            Get a Quote
                        </Link>
                        <Link
                            href="/book-demo"
                            className="flex w-full items-center justify-center gap-3 rounded-lg border border-white bg-transparent py-4 text-[1.125rem] font-bold text-white transition-colors hover:bg-white/10 lg:text-[1.25rem]"
                        >
                            <CirclePlay className="h-6 w-6" />
                            Request Demo
                        </Link>
                        <Link
                            href="/brochures/Graft3d.pdf"
                            className="flex w-full items-center justify-center gap-3 rounded-lg border border-white bg-transparent py-4 text-[1.125rem] font-bold text-white transition-colors hover:bg-white/10 lg:text-[1.25rem]"
                        >
                            <CirclePlay className="h-6 w-6" />
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
