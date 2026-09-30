import Image from "next/image";

const row1 = [
    {
        title: "Multi-specialty hospitals",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-1.png",
    },
    {
        title: "Medical colleges",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-2.png",
    },
    {
        title: "Dental hospitals",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-3.png",
    },
    {
        title: "Cranio-maxillofacial centers",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-4.png",
    },
    {
        title: "Orthopedic hospitals",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-5.png",
    },
];

const row2 = [
    {
        title: "Neurosurgical centers",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-6.png",
    },
    {
        title: "Medical simulation centers",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-7.png",
    },
    {
        title: "Research institutions",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-8.png",
    },
    {
        title: "Medical device manufacturers",
        src: "/images/transform-medical-imaging-into-3d-anatomical-models/ideal-9.png",
    },
];

export default function IdealSection() {
    return (
        <section className="w-full bg-white py-8 lg:py-12">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <h2 className="mb-2 text-center text-[1.75rem] font-bold text-[#2F2B2A] md:text-[2.25rem]">
                    Ideal For
                </h2>

                <h3 className="mb-9 text-center text-[1.25rem] font-semibold text-[#041B4D] md:text-[1.75rem] lg:mb-10">
                    This package is designed for:
                </h3>

                <div className="mx-auto flex w-full max-w-420 flex-col gap-6 lg:gap-10">
                    {/* Row 1 (5 items) */}
                    <div className="flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between lg:gap-4">
                        {row1.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex w-[calc(50%-1rem)] flex-col items-center sm:w-[calc(33.33%-1rem)] lg:w-[18.5%]"
                            >
                                <div className="relative mb-6 aspect-4/3 w-full overflow-hidden rounded-xl">
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

                    {/* Row 2 (4 items) */}
                    <div className="flex w-full flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between lg:gap-4">
                        {row2.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex w-[calc(50%-1rem)] flex-col items-center sm:w-[calc(50%-1rem)] lg:w-[23.5%]"
                            >
                                <div className="relative mb-5 aspect-16/10 w-full overflow-hidden rounded-xl">
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
