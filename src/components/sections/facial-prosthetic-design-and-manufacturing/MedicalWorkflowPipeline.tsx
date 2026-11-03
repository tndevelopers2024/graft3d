import Image from "next/image";
import Link from "next/link";

const cards = [
    {
        number: "1",
        title: "3D Facial Anatomy Scanning",
        subtitle: "EinScan Medixa",
        image: "/images/facial-prosthetic-design-and-manufacturing/medical-workflow-1.png",
        icon: "/images/facial-prosthetic-design-and-manufacturing/workflow-1.svg",
        description:
            "Capture accurate 3D surface data of the patient's facial anatomy to create a precise digital representation for customized prosthesis design.",
        buttonText: "EinScan Medixa",
        buttonHref: "/einscan-medixa",
    },
    {
        number: "2",
        title: "Anatomical Model Generation",
        subtitle: "Elucis NEXT",
        image: "/images/facial-prosthetic-design-and-manufacturing/medical-workflow-2.png",
        icon: "/images/facial-prosthetic-design-and-manufacturing/workflow-2.svg",
        description:
            "Advanced medical visualization and model generation technology that enables clinicians and designers to work with patient-specific 3D facial anatomy for prosthetic assessment, planning, and reconstruction.",
        buttonText: "Elucis NEXT",
        buttonHref: "/elucis-next",
    },
    {
        number: "3",
        title: "Bio CAD Modelling",
        subtitle: "Geomagic Freeform",
        image: "/images/facial-prosthetic-design-and-manufacturing/medical-workflow-3.png",
        icon: "/images/facial-prosthetic-design-and-manufacturing/workflow-3.svg",
        description:
            "Advanced medical CAD software for creating detailed, patient-specific facial prosthesis designs based on individual anatomical contours.",
        buttonText: "Geomagic Freeform",
        buttonHref: "/geomagic-freeform",
    },
];

export default function MedicalWorkflowPipeline() {
    return (
        <section className="w-full bg-[#F8FAFC] py-12 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                <div className="flex w-full flex-col items-stretch justify-between gap-8 lg:flex-row lg:gap-8">
                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="flex flex-1 flex-col justify-between rounded-[12px] border border-[#F1F5F9] bg-white p-6 shadow-[0px_1px_2px_0px_#0000000D,0px_4px_4px_0px_#00000040] sm:p-7 lg:p-8"
                        >
                            {/* Top row: Number circle on left, title & subtitle on right */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#166AAF] text-[1.125rem] font-bold text-white shadow-sm">
                                    {card.number}
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[1.25rem] leading-snug font-bold text-[#1E1E1E]">
                                        {card.title}
                                    </h2>
                                    <h3 className="mt-1 text-[1rem] leading-snug font-semibold text-[#1E1E1E]">
                                        {card.subtitle}
                                    </h3>
                                </div>
                            </div>

                            {/* Middle: Image */}
                            <div className="relative my-6 aspect-16/10 w-full overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.subtitle}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Bottom area: Icon box with description, followed by Button */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] bg-[#166AAF] p-3 shadow-sm">
                                        <Image
                                            src={card.icon}
                                            alt={card.title}
                                            width={34}
                                            height={34}
                                            className="h-8 w-8 object-contain"
                                        />
                                    </div>
                                    <p className="text-[1rem] leading-relaxed font-semibold text-[#1E1E1E]">
                                        {card.description}
                                    </p>
                                </div>

                                <Link
                                    href={card.buttonHref}
                                    className="block w-full rounded-lg bg-[#1F88DD] py-3.5 text-center text-[1.125rem] font-bold text-white transition-colors hover:bg-[#166AAF]"
                                >
                                    {card.buttonText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
