import Image from "next/image";

const row1 = [
    {
        title: "Multi-specialty hospitals",
        src: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/ideal-1.png",
    },
    {
        title: "Medical colleges",
        src: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/ideal-2.png",
    },
    {
        title: "Orthopedic hospitals",
        src: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/ideal-3.png",
    },
];

const row2 = [
    {
        title: "Research institutions",
        src: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/ideal-4.png",
    },
    {
        title: "P&O Clinics",
        src: "/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/ideal-5.png",
    },
];

export default function IdealSection() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <h2 className="mb-2 text-center text-[1.75rem] font-bold text-[#2F2B2A] md:text-[2.25rem]">
                    Ideal For
                </h2>

                <h3 className="mb-9 text-center text-[1.25rem] font-semibold text-[#041B4D] md:text-[1.75rem] lg:mb-12">
                    This package is designed for:
                </h3>

                <div className="mx-auto flex w-full max-w-420 flex-col gap-8 lg:gap-12">
                    {/* Row 1 (3 items - stretched across) */}
                    <div className="flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between lg:gap-6 xl:gap-8">
                        {row1.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex w-full flex-col items-center sm:w-[calc(50%-1rem)] lg:w-[31.5%]"
                            >
                                <div className="relative mb-5 aspect-875/371 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="px-2 text-center text-[1.125rem] leading-snug font-bold text-[#2F2B2A] lg:text-[1.25rem]">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Row 2 (2 items - centered, matching height) */}
                    <div className="flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-center lg:gap-8 xl:gap-10">
                        {row2.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex w-full flex-col items-center sm:w-[calc(50%-1rem)] lg:w-[23.2%]"
                            >
                                <div className="relative mb-5 aspect-644/372 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="px-2 text-center text-[1.125rem] leading-snug font-bold text-[#2F2B2A] lg:text-[1.25rem]">
                                    {item.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
