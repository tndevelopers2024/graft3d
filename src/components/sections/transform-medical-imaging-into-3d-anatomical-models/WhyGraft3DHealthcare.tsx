import Image from "next/image";

export default function WhyGraft3DHealthcare() {
    const reasons = [
        "End-to-end anatomical model generation",
        "Advanced medical image conversion",
        "Patient-specific 3D visualization",
        "Interactive anatomical modelling",
        "High-quality 3D printing solutions",
        "Integration of leading global technologies",
        "Clinical and educational workflow implementation",
        "Comprehensive user training",
        "Dedicated technical support",
        "Customized solutions based on your application",
    ];

    return (
        <section className="w-full bg-white py-8 lg:py-16">
            <div className="container-fluid mx-auto px-4 lg:px-12 xl:px-16">
                {/* Header */}
                <div className="mb-16 flex flex-col items-center justify-center">
                    <h2 className="mb-4 text-center text-[2.125rem] font-bold">
                        <span className="text-[#1E1E1E]">Why </span>
                        <span className="text-[#166AAF]">
                            Graft3D Healthcare
                        </span>
                        <span className="text-[#1E1E1E]">?</span>
                    </h2>
                    <p className="mx-auto max-w-6xl text-center text-[1.33rem] leading-relaxed font-normal whitespace-pre-line text-[#252525]">
                        {
                            "At Graft3D Healthcare, we deliver more than individual products. We provide complete, application-\nfocused medical 3D printing ecosystems tailored to your clinical and educational requirements."
                        }
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Side: Logo */}
                    <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
                        <Image
                            src="/images/transform-medical-imaging-into-3d-anatomical-models/graft3d-logo.png"
                            alt="Graft3D Healthcare Solutions"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Side: Features List */}
                    <div className="relative flex flex-col gap-6 pl-2 lg:gap-6 lg:pl-0">
                        {/* The vertical connection line */}
                        <div className="absolute top-3 bottom-3 left-4.75 z-0 w-px bg-[#00000040] lg:left-2.75" />

                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="relative z-10 flex items-center gap-6"
                            >
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-4 border-[#166AAF] bg-white"></div>
                                <span className="text-[1.125rem] font-semibold text-[#252525] lg:text-[1.25rem]">
                                    {reason}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
