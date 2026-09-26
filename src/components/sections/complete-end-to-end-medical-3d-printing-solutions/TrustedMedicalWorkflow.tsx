import Image from "next/image";

const cards = [
    { img: "trusted-1.png", text: "3D Scanner" },
    { img: "trusted-2.png", text: "Medical Image\nSegmentation" },
    { img: "trusted-3.png", text: "Bio CAD Modelling Software" },
    { img: "trusted-4.png", text: "Haptic Device" },
    { img: "trusted-5.png", text: "3D Printers" },
    { img: "trusted-6.png", text: "Bio Compatible Materials" },
    { img: "trusted-7.png", text: "Training &\nImplementation" },
    { img: "trusted-8.png", text: "Technical Support" },
    { img: "trusted-9.png", text: "Complete Medical 3D Printing Laboratory" },
];

export default function TrustedMedicalWorkflow() {
    return (
        <section className="w-full bg-white pt-16">
            <div className="container-fluid mx-auto px-12">
                {/* Border Gradient Wrapper Trick */}
                <div
                    className="w-full rounded-3xl p-px"
                    style={{
                        background:
                            "linear-gradient(107.93deg, #EBEBEB 0.39%, #AFAEAE 99.61%)",
                    }}
                >
                    {/* Inner Content with Radial Gradient & Background Image */}
                    <div
                        className="relative w-full overflow-hidden rounded-3xl px-6 py-12 lg:px-12 lg:py-16"
                        style={{
                            background:
                                "radial-gradient(127.77% 304.58% at 101.78% 127.77%, #88C9FF 0%, #F8FCFF 68.27%)",
                        }}
                    >
                        {/* Background Image Layer */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/complete-end-to-end-medical-3d-printing-solutions/trusted-medical-workflow-bg.png"
                                alt="Trusted Medical Workflow Background"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content Layer */}
                        <div className="relative z-10">
                            <div className="mb-10 text-left">
                                <h2 className="text-[2.5rem] leading-tight font-bold text-white">
                                    Trusted Medical Workflow
                                </h2>
                                <p className="mt-2 text-[1.1875rem] font-normal text-white">
                                    One Complete Medical 3D Printing Ecosystem
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                {/* Row 1: 4 Cards */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                                    {cards.slice(0, 4).map((card, index) => (
                                        <WorkflowCard
                                            key={index}
                                            card={card}
                                            index={index}
                                        />
                                    ))}
                                </div>

                                {/* Row 2: 5 Cards */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
                                    {cards.slice(4, 9).map((card, index) => (
                                        <WorkflowCard
                                            key={index + 4}
                                            card={card}
                                            index={index + 4}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorkflowCard({
    card,
    index,
}: {
    card: (typeof cards)[0];
    index: number;
}) {
    const isNinth = index === 8;
    return (
        <div
            className={`flex h-full flex-col items-center rounded-2xl border border-[#1B6DB1] p-4 lg:p-6 ${
                isNinth ? "bg-[#1B6DB1]" : "bg-white"
            }`}
        >
            <div className="relative mb-4 h-32 w-full grow md:h-40">
                <Image
                    src={`/images/complete-end-to-end-medical-3d-printing-solutions/${card.img}`}
                    alt={card.text.replace("\n", " ")}
                    fill
                    className="object-contain"
                />
            </div>
            <h3
                className={`w-full text-center text-[1.375rem] leading-tight font-bold whitespace-pre-line ${
                    isNinth ? "text-white" : "text-[#1B6DB1]"
                }`}
            >
                {card.text}
            </h3>
        </div>
    );
}
