import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-[#00101B]">
            <div className="absolute inset-0 flex h-full w-full">
                <div className="h-full w-full bg-[#00101B] lg:w-[25%]"></div>

                <div className="relative hidden h-full w-[75%] lg:block">
                    <Image
                        src="/images/transform-medical-imaging-into-3d-anatomical-models/hero-bg.png"
                        alt="Transform Medical Imaging into 3D Anatomical Models"
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
            <div className="container-fluid relative z-10 px-4 py-16 lg:px-12 xl:px-24">
                <div className="flex w-full flex-col lg:w-[65%] xl:w-[65%]">
                    <h1 className="text-[2.5rem] leading-[1.1] font-bold text-white md:text-[3.5rem] lg:text-[4rem]">
                        Transform Medical Imaging into 3D Anatomical Models
                    </h1>

                    <p className="mt-6 max-w-250 text-[1rem] leading-relaxed font-medium text-white lg:text-[1.25rem]">
                        The Graft3D Healthcare Anatomical Model Package enables
                        hospitals, medical colleges, and healthcare
                        professionals to transform patient imaging data into
                        accurate, patient-specific 3D anatomical models.
                    </p>

                    <div
                        className="mt-8 mb-8 h-1.25 w-33.5 rounded-lg"
                        style={{
                            background:
                                "linear-gradient(90deg, #439AE2 0%, #388ED5 25%, #3288CF 37.5%, #2F85CB 43.75%, #2C82C8 50%, #166AAF 100%)",
                        }}
                    ></div>

                    <h2 className="text-[2rem] leading-[1.1] font-bold text-[#73BFFD] md:text-[2.5rem] lg:text-[3rem]">
                        A Complete Package for
                        <br className="hidden md:block" /> Anatomical Model
                        Generation
                    </h2>

                    <p className="mt-6 max-w-200 text-[1rem] leading-relaxed font-medium text-white lg:text-[1.25rem]">
                        The Graft3D Healthcare Anatomical Model Package combines
                        advanced medical imaging software, visualization
                        platforms, haptic technology, and 3D printing solutions
                        to create detailed physical and digital representations
                        of patient anatomy.
                    </p>

                    <div className="mt-10 flex flex-col gap-6">
                        {/* Phone */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 shrink-0">
                                <Image
                                    src="/images/transform-medical-imaging-into-3d-anatomical-models/phone-icon.png"
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
                                    src="/images/transform-medical-imaging-into-3d-anatomical-models/mail-icon.png"
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
            </div>
        </section>
    );
}
