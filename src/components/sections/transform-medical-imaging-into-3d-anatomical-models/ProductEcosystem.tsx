import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductEcosystem() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <div className="relative flex w-full flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-12">
                    {/* Left Card */}
                    <div className="flex flex-1 flex-col rounded-2xl border border-[#CBDCF0] bg-[#F4F8FD] p-6 shadow-[0px_1px_2px_0px_#0000000D] lg:p-10 xl:p-12">
                        <div className="mb-8 inline-flex items-center gap-3 self-start rounded-xl bg-[#166AAF] px-6 py-4 shadow-[0px_1px_2px_0px_#0000000D]">
                            <Image
                                src="/images/transform-medical-imaging-into-3d-anatomical-models/product-1.svg"
                                alt="Product 1"
                                width={32}
                                height={32}
                                className="h-9 w-9 object-contain"
                            />
                            <span className="text-[1rem] font-bold tracking-wide text-white uppercase lg:text-[1.15rem] xl:text-[1.25rem]">
                                MEDICAL IMAGE CONVERSION SOFTWARE
                            </span>
                        </div>

                        <h2 className="mb-6 text-[2.5rem] leading-tight font-black text-[#0A1E3B] lg:text-[3rem] xl:text-[3rem]">
                            Elucis NEXT
                        </h2>

                        <p className="mb-10 grow text-[1rem] leading-relaxed font-normal text-[#1E1E1E] lg:text-[1.25rem] xl:text-[1.5rem]">
                            Advanced medical visualization solutions that enable
                            clinicians to interact with patient-specific 3D
                            anatomy and create detailed anatomical models for
                            clinical planning, simulation, and education.
                        </p>

                        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src="/images/transform-medical-imaging-into-3d-anatomical-models/elucis-next-image.png"
                                alt="Elucis NEXT"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <Link
                            href="/elucis"
                            className="block w-full rounded-lg bg-[#1F88DD] py-3 text-center text-[1.25rem] font-bold text-white transition-colors hover:bg-[#166AAF] xl:text-[1.5rem]"
                        >
                            Explore Elucis GO &amp; Elucis NEXT
                        </Link>
                    </div>

                    {/* Arrow Divider */}
                    <div className="absolute top-1/2 left-1/2 z-10 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white bg-[#2088dd] shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A] lg:flex">
                        <ChevronRight className="h-8 w-8 text-white" />
                    </div>

                    {/* Right Card */}
                    <div className="flex flex-1 flex-col rounded-2xl border border-[#CBDCF0] bg-[#F4F8FD] p-6 shadow-[0px_1px_2px_0px_#0000000D] lg:p-10 xl:p-12">
                        <div className="mb-8 inline-flex items-center gap-3 self-start rounded-xl bg-[#166AAF] px-6 py-4 shadow-[0px_1px_2px_0px_#0000000D]">
                            <Image
                                src="/images/transform-medical-imaging-into-3d-anatomical-models/product-2.svg"
                                alt="Product 2"
                                width={32}
                                height={32}
                                className="h-9 w-9 object-contain"
                            />
                            <span className="text-[1rem] font-bold tracking-wide text-white uppercase lg:text-[1.15rem] xl:text-[1.25rem]">
                                ANATOMICAL MODEL 3D PRINTING
                            </span>
                        </div>

                        <h2 className="mb-6 text-[2.5rem] leading-tight font-black text-[#0A1E3B] lg:text-[3rem] xl:text-[3rem]">
                            GO3D ARTISH 700
                        </h2>

                        <p className="mb-10 grow text-[1rem] leading-relaxed font-normal text-[#1E1E1E] lg:text-[1.25rem] xl:text-[1.5rem]">
                            Large-format industrial 3D printing technology
                            designed for producing detailed, durable anatomical
                            models and medical prototypes with high dimensional
                            accuracy.
                        </p>

                        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-xl bg-[#10182b] shadow-sm">
                            <Image
                                src="/images/transform-medical-imaging-into-3d-anatomical-models/go3d-artist-700.png"
                                alt="GO3D ARTISH 700"
                                fill
                                className="object-contain p-4"
                            />
                        </div>

                        <Link
                            href="/go3d-artish-700"
                            className="block w-full rounded-lg bg-[#1F88DD] py-3 text-center text-[1.25rem] font-bold text-white transition-colors hover:bg-[#166AAF] xl:text-[1.5rem]"
                        >
                            Explore GO3D ARTISH 700
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
