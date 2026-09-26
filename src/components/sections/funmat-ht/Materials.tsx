import { CircleCheck } from "lucide-react";
import Image from "next/image";

export default function Materials() {
    return (
        <section className="w-full bg-white pb-8 lg:pb-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-24">
                <div
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-6 lg:p-8 xl:p-10"
                    style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
                >
                    <h2 className="text-[1.25rem] font-bold text-[#1D4ED8] uppercase lg:text-[1.5rem]">
                        COMPATIBLE ENGINEERING &amp; MEDICAL GRADE MATERIALS
                    </h2>

                    <div className="mt-6 flex flex-col items-center gap-10 lg:mt-8 xl:flex-row xl:items-stretch xl:gap-0">
                        {/* Left Image */}
                        <div className="relative my-auto aspect-2/1 w-full shrink-0 sm:w-[80%] md:w-[70%] xl:aspect-auto xl:h-55 xl:w-137.5">
                            <Image
                                src="/images/funmat-ht/materials-image.png"
                                alt="Filament Spools"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Middle List */}
                        <div className="my-auto flex w-full flex-1 flex-col justify-center gap-y-6 border-[#F3F4F6] xl:border-l xl:px-10">
                            {/* Row 1 */}
                            <div className="flex w-full flex-wrap items-center justify-start gap-4 xl:flex-nowrap xl:justify-between xl:gap-2">
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PEEK
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PEEK CF / GF
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PEKK
                                    </span>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex w-full flex-wrap items-center justify-start gap-4 xl:flex-nowrap xl:justify-between xl:gap-2">
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PPS
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PC CF / GF
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PC
                                    </span>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="flex w-full flex-wrap items-center justify-start gap-4 xl:flex-nowrap xl:justify-between xl:gap-2">
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PA CF / PA GF
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        ASA
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        ABS
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PETG
                                    </span>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="flex w-full flex-wrap items-center justify-start gap-4 xl:flex-nowrap xl:justify-between xl:gap-2">
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        PPSU
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        TPU
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 xl:gap-3">
                                    <CircleCheck className="h-5 w-5 shrink-0 text-[#2563EB] xl:h-6 xl:w-6" />
                                    <span className="text-[0.875rem] font-medium whitespace-nowrap text-[#374151] xl:text-[1rem]">
                                        And more
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Info Box */}
                        <div className="my-auto h-fit w-full shrink-0 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB80] p-6 md:w-[80%] lg:p-8 xl:w-105">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="relative h-6 w-6 shrink-0">
                                    <Image
                                        src="/images/funmat-ht/advanced-4.svg"
                                        alt="Biocompatible"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h4 className="text-[1rem] font-bold text-[#111827]">
                                    Biocompatible Materials
                                </h4>
                            </div>
                            <p className="text-[1rem] leading-relaxed font-normal text-[#4B5563]">
                                Select materials are suitable for medical device
                                prototyping and end-use parts.
                            </p>
                            <p className="mt-2 text-[1rem] leading-relaxed font-normal text-[#4B5563]">
                                Please consult Graft3D for material
                                recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
