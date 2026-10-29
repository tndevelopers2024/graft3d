import Image from "next/image";
import Link from "next/link";

export default function ProductEcosystem() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <div className="flex w-full flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-8">
                    {/* Card 1: EinScan Medixa */}
                    <div className="flex flex-1 flex-col rounded-2xl border border-[#CBDCF0] bg-[#F4F8FD] p-6 shadow-[0px_1px_2px_0px_#0000000D] lg:p-8 xl:p-10">
                        <div className="mb-8 inline-flex items-center gap-3 self-start rounded-xl bg-[#166AAF] px-5 py-4 shadow-[0px_1px_2px_0px_#0000000D]">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/product-1.svg"
                                alt="3D Anatomy Scanning"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-[1rem] font-bold tracking-wide text-white lg:text-[1.125rem] xl:text-[1.25rem]">
                                3D Anatomy Scanning
                            </span>
                        </div>

                        <h2 className="mb-6 text-[2.25rem] leading-tight font-black text-[#0A1E3B] lg:text-[2.5rem] xl:text-[3rem]">
                            EinScan Medixa
                        </h2>

                        <p className="mb-10 grow text-[1rem] leading-relaxed font-normal text-[#1E1E1E] lg:text-[1.125rem] xl:text-[1.375rem]">
                            Capture accurate 3D surface data of the
                            patient&apos;s anatomy for creating customized
                            prosthetic designs. The scanner enables digital
                            capture of areas such as the foot, ankle, leg,
                            spine, and other external anatomical regions
                            relevant to prosthetic applications.
                        </p>

                        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/einscan-medixa.png"
                                alt="EinScan Medixa"
                                fill
                                className="object-contain p-4"
                            />
                        </div>

                        <Link
                            href="/einscan-medixa"
                            className="block w-full rounded-lg bg-[#1F88DD] py-3 text-center text-[1.125rem] font-bold text-white transition-colors hover:bg-[#166AAF] xl:text-[1.375rem]"
                        >
                            Explore EinScan Medixa
                        </Link>
                    </div>

                    {/* Card 2: Geomagic Freeform */}
                    <div className="flex flex-1 flex-col rounded-2xl border border-[#CBDCF0] bg-[#F4F8FD] p-6 shadow-[0px_1px_2px_0px_#0000000D] lg:p-8 xl:p-10">
                        <div className="mb-8 inline-flex items-center gap-3 self-start rounded-xl bg-[#166AAF] px-5 py-4 shadow-[0px_1px_2px_0px_#0000000D]">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/product-2.svg"
                                alt="Bio CAD Modelling"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-[1rem] font-bold tracking-wide text-white lg:text-[1.125rem] xl:text-[1.25rem]">
                                Bio CAD Modelling
                            </span>
                        </div>

                        <h2 className="mb-6 text-[2.25rem] leading-tight font-black text-[#0A1E3B] lg:text-[2.5rem] xl:text-[3rem]">
                            Geomagic Freeform
                        </h2>

                        <p className="mb-10 grow text-[1rem] leading-relaxed font-normal text-[#1E1E1E] lg:text-[1.125rem] xl:text-[1.375rem]">
                            Advanced medical CAD software for creating
                            customized prosthetic designs with precise
                            anatomical contours and patient-specific geometry.
                        </p>

                        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/geomagic-freeform.png"
                                alt="Geomagic Freeform"
                                fill
                                className="object-contain p-4"
                            />
                        </div>

                        <Link
                            href="/geomagic-freeform"
                            className="block w-full rounded-lg bg-[#1F88DD] py-3 text-center text-[1.125rem] font-bold text-white transition-colors hover:bg-[#166AAF] xl:text-[1.375rem]"
                        >
                            Explore Geomagic Freeform
                        </Link>
                    </div>

                    {/* Card 3: GO3D ARTISH 700 */}
                    <div className="flex flex-1 flex-col rounded-2xl border border-[#CBDCF0] bg-[#F4F8FD] p-6 shadow-[0px_1px_2px_0px_#0000000D] lg:p-8 xl:p-10">
                        <div className="mb-8 inline-flex items-center gap-3 self-start rounded-xl bg-[#166AAF] px-5 py-4 shadow-[0px_1px_2px_0px_#0000000D]">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/product-3.svg"
                                alt="High-Performance 3D Printing"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-[1rem] font-bold tracking-wide text-white lg:text-[1.125rem] xl:text-[1.25rem]">
                                High-Performance 3D Printing
                            </span>
                        </div>

                        <h2 className="mb-6 text-[2.25rem] leading-tight font-black text-[#0A1E3B] lg:text-[2.5rem] xl:text-[3rem]">
                            GO3D ARTISH 700
                        </h2>

                        <p className="mb-10 grow text-[1rem] leading-relaxed font-normal text-[#1E1E1E] lg:text-[1.125rem] xl:text-[1.375rem]">
                            Large-format industrial 3D printing technology
                            designed to produce customized, durable prosthetic
                            devices and components with precise patient-specific
                            geometry and dimensional accuracy.
                        </p>

                        <div className="relative mb-10 aspect-16/10 w-full overflow-hidden rounded-xl">
                            <Image
                                src="/images/complete-package-for-patient-specific-prosthetic-design-and-manufacturing/go3d-artish-700.png"
                                alt="GO3D ARTISH 700"
                                fill
                                className="object-contain p-4"
                            />
                        </div>

                        <Link
                            href="/go3d-artish-700"
                            className="block w-full rounded-lg bg-[#1F88DD] py-3 text-center text-[1.125rem] font-bold text-white transition-colors hover:bg-[#166AAF] xl:text-[1.375rem]"
                        >
                            Explore GO3D ARTISH 700
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
