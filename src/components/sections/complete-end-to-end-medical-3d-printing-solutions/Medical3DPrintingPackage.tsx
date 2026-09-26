import Image from "next/image";

const steps = [
    {
        num: "1",
        text: "Patient Data\nAcquisition",
        position: "lg:top-[5%] lg:left-1/2 lg:-translate-x-1/2",
    },
    {
        num: "2",
        text: "Medical Image\nSegmentation",
        position: "lg:top-[33%] lg:-right-[-4%]",
    },
    {
        num: "3",
        text: "Medical CAD\nDesign",
        position: "lg:bottom-[28%] lg:-right-[-4%]",
    },
    {
        num: "4",
        text: "Material Selection",
        position: "lg:bottom-[5%] lg:left-1/2 lg:-translate-x-1/2",
    },
    {
        num: "5",
        text: "Medical \n3D Printing",
        position: "lg:bottom-[28%] lg:-left-[-4%]",
    },
    {
        num: "6",
        text: "Training\nImplementation",
        position: "lg:top-[33%] lg:-left-[-4%]",
    },
];

export default function Medical3DPrintingPackage() {
    return (
        <section className="w-full bg-white py-8">
            <div className="container-fluid mx-auto px-20">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                    {/* Left Column (Content) */}
                    <div className="mt-8 flex flex-col gap-6 lg:col-span-4">
                        <h2 className="text-[2.5rem] leading-tight font-bold text-[#01101B]">
                            What is a Medical 3D Printing Package?
                        </h2>
                        <div className="flex flex-col gap-4 text-[1.3rem] font-normal text-[#01101B]">
                            <p>
                                A Medical 3D Printing Package is a complete
                                ecosystem that enables hospitals to transform
                                patient imaging into patient-specific medical
                                devices.
                            </p>
                            <p>
                                Instead of buying individual products from
                                different venders, you get one validated
                                workflow with compatible technologies,
                                implementation, training and support.
                            </p>
                        </div>
                    </div>

                    {/* Right Column (Visual Hexagon Graphic) */}
                    <div className="relative mt-8 flex w-full flex-col lg:col-span-8 lg:mt-0 lg:block lg:min-h-150">
                        {/* Center Image */}
                        <div className="relative z-0 mb-8 h-64 w-full lg:absolute lg:top-1/2 lg:left-1/2 lg:mb-0 lg:h-90 lg:-translate-x-1/2 lg:-translate-y-1/2">
                            <Image
                                src="/images/complete-end-to-end-medical-3d-printing-solutions/what-is-a-medical-3d-printing-package-image.png"
                                alt="Medical 3D Printing Package Ecosystem"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Floating Cards */}
                        <div className="z-10 flex w-full flex-col gap-3 lg:block">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex h-24.5 w-59.5 items-center gap-7 rounded-xl border border-[#1B6DB126] bg-[#F0F8FF] px-5 shadow-sm transition-shadow hover:shadow-md lg:absolute ${step.position}`}
                                >
                                    <span className="shrink-0 text-4xl font-bold text-[#1B6DB1]">
                                        {step.num}
                                    </span>
                                    <span className="text-lg leading-tight font-bold whitespace-pre-line text-[#01101B]">
                                        {step.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
