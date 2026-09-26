import Image from "next/image";

const faqs = [
    {
        title: "Can it print\nimplantable parts?",
        description:
            "APOLLO processes medical-grade PEEK, producing biocompatible, sterilizable, and radiolucent parts suitable for permanent and temporary implantable applications.",
    },
    {
        title: "Is it fast enough\nfor clinical use?",
        description:
            "Equipped with a High-Flow extrusion system and Dual IDEX (Independent Dual Extruder) architecture, it prints PEEK at speeds up to 200 mm/s to meet tight surgical and clinical timelines without compromising mechanical integrity.",
    },
    {
        title: "Can it handle\ncomplex designs?",
        description:
            "Dual IDEX system enables support-free printing modes and multi-material capabilities, allowing for accurate fabrication of intricate, patient-specific geometries such as spinal cages, cranial plates, and maxillofacial implants.",
    },
    {
        title: "Can it run long\njobs unattended?",
        description:
            "Designed for continuous production, the system features dual 3 kg dry filament boxes, power-loss recovery, and precise thermal chamber control to reliably execute long, multi-day print cycles.",
    },
    {
        title: "Who supports\nit in India?",
        description:
            "Graft3D – INTAMSYS Master Reseller provides sales, service, spares, training and application engineering across India.",
    },
];

export default function Faq() {
    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <h2 className="mb-12 text-left text-[2rem] font-bold text-[#01101B] lg:text-[2.5rem]">
                    Frequently Asked Product Questions
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-lg p-6"
                            style={{
                                border: "1px solid #1B6DB180",
                                background:
                                    "radial-gradient(806.52% 198.85% at 57.8% -42.13%, #88C9FF 0%, #F8FCFF 27.99%)",
                            }}
                        >
                            <div className="mb-4 flex items-start gap-4">
                                <div className="relative h-8 w-8 shrink-0 lg:h-10 lg:w-10">
                                    <Image
                                        src="/images/310-for-medical-use/faq-icon.svg"
                                        alt="FAQ Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="pt-1 text-[1.125rem] leading-tight font-bold whitespace-pre-line text-[#00101B] xl:text-[1.25rem]">
                                    {faq.title}
                                </h3>
                            </div>
                            <p className="text-[1rem] leading-relaxed font-normal text-[#00101B]">
                                {faq.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
