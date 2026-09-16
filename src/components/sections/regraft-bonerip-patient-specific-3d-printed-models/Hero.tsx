import Image from "next/image";

const Hero = () => {
    return (
        <section
            className="w-full bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/images/regraft-bonerip-patient-specific-3d-printed-training-models/hero-bg.png')",
            }}
        >
            <div className="mx-auto max-w-[1367px] px-4 py-20">
                <div className="flex flex-col md:flex-row md:items-start md:gap-6 lg:gap-8">
                    <div className="flex flex-col items-center text-center text-black md:basis-[47.949%] md:items-start md:pt-[137px] md:pl-[101px] md:text-left">
                        <Image
                            src="/images/regraft-bonerip-patient-specific-3d-printed-training-models/regraft-logo.png"
                            alt="ReGraft Logo"
                            width={350}
                            height={140}
                            className="mb-4 object-contain"
                        />
                        <h1 className="text-[28px] font-bold text-black">
                            Bonerip- Patient Specific 3D Printed Models
                        </h1>
                        <p className="mt-4 text-[24px] text-black">
                            Plan .Train .Visualize.
                        </p>
                        <div className="mt-6 grid w-full max-w-[360px] grid-cols-2 gap-4">
                            <a
                                href="/contact-us"
                                className="bg-primary rounded px-6 py-2.5 text-center text-[18px] font-medium text-white"
                            >
                                Buy
                            </a>
                            <a
                                href="/brochures/Graft3d.pdf"
                                className="bg-primary rounded px-6 py-2.5 text-center text-[18px] font-medium text-white"
                            >
                                Download
                            </a>
                        </div>
                        <div className="mt-8 flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/regraft-bonerip-patient-specific-3d-printed-training-models/phone-icon.png"
                                    alt="Phone"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                                <div className="flex flex-col text-left">
                                    <span className="text-[1.125rem] font-semibold text-[#1364A8]">
                                        Call us now
                                    </span>
                                    <span className="text-[0.9375rem] font-normal text-black">
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
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/regraft-bonerip-patient-specific-3d-printed-training-models/mail-icon.png"
                                    alt="Email"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                                <div className="flex flex-col text-left">
                                    <span className="text-[1.125rem] font-semibold text-[#1364A8]">
                                        Email us
                                    </span>
                                    <span className="text-[0.9375rem] font-normal text-black">
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
