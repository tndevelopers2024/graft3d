import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[#00101B] py-16 lg:py-24">
            <div className="absolute inset-0 flex h-full w-full">
                <div className="h-full w-full bg-[#00101B] lg:w-[25%]"></div>

                <div className="relative hidden h-full w-[75%] lg:block">
                    <Image
                        src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/hero-bg.png"
                        alt="Prosthetics Package Background"
                        fill
                        className="object-cover object-right"
                        priority
                    />
                    <div
                        className="pointer-events-none absolute inset-0 h-full w-full"
                        style={{
                            background:
                                "linear-gradient(90deg, #00101B 0%, rgba(0, 16, 27, 0.8) 25%, rgba(0, 16, 27, 0) 100%)",
                        }}
                    ></div>
                </div>
            </div>

            {/* Content */}
            <div className="container-fluid relative z-10 px-4 lg:px-12 xl:px-18">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    <div className="flex w-full flex-col lg:col-span-7 xl:col-span-6">
                        <h1 className="text-[2.5rem] leading-[1.1] font-bold text-white md:text-[3.5rem] lg:text-[4rem]">
                            Prosthetic package
                        </h1>

                        <div
                            className="mt-8 mb-8 h-1.25 w-33.5 rounded-lg"
                            style={{
                                background:
                                    "linear-gradient(90deg, #439AE2 0%, #388ED5 25%, #3288CF 37.5%, #2F85CB 43.75%, #2C82C8 50%, #166AAF 100%)",
                            }}
                        ></div>

                        <h2 className="text-[2rem] leading-[1.1] font-bold text-[#73BFFD] md:text-[2.5rem] lg:text-[3rem]">
                            A Complete Package for
                            <br className="hidden md:block" /> Patient-Specific
                            Prosthetic
                            <br className="hidden md:block" /> Design &amp;
                            Manufacturing
                        </h2>

                        <p className="mt-6 max-w-390 text-[1rem] leading-relaxed font-medium text-white lg:text-[1.25rem]">
                            The Graft3D Healthcare Prosthetics Package combines
                            advanced 3D scanning, medical visualization, CAD
                            modelling, haptic design, and high-performance 3D
                            printing technologies into one solution for
                            designing and producing customized prosthetic
                            devices tailored to individual patient anatomy.
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 shrink-0">
                                    <Image
                                        src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/phone-icon.png"
                                        alt="Phone"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[1.125rem] font-semibold text-[#1364A8] lg:text-[1.25rem]">
                                        Call us now
                                    </span>
                                    <a
                                        href="tel:+919840478347"
                                        className="mt-1 text-[0.875rem] font-normal text-white hover:underline lg:text-[0.9375rem]"
                                    >
                                        +91 9840478347 | +91 6374410703
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 shrink-0">
                                    <Image
                                        src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/mail-icon.png"
                                        alt="Email"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[1.125rem] font-semibold text-[#1364A8] lg:text-[1.25rem]">
                                        Email Us at
                                    </span>
                                    <a
                                        href="mailto:Sales@graft3d.com"
                                        className="mt-1 text-[0.875rem] font-normal text-white hover:underline lg:text-[0.9375rem]"
                                    >
                                        Sales@graft3d.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side hero-image */}
                    <div className="relative mt-8 aspect-5/4 w-full lg:col-span-5 lg:mt-0 lg:aspect-auto lg:h-135 xl:col-span-6 xl:h-155 2xl:h-175">
                        <Image
                            src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/hero-image.png"
                            alt="Complete Package for Patient-Specific Prosthetic Design & Manufacturing"
                            fill
                            className="object-contain lg:object-right"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
