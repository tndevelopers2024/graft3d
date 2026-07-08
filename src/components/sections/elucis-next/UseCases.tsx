import Image from "next/image";

const UseCases = () => {
    const cases = [
        {
            title: "Medical Education",
            desc: "Enhance anatomy curricula with interactive 3D learning.",
            image: "/images/elucis-next/case-1.png",
        },
        {
            title: "Surgical Training",
            desc: "Simulate procedures and improve surgical understanding.",
            image: "/images/elucis-next/case-2.png",
        },
        {
            title: "Research & Methodology",
            desc: "Develop and validate new surgical techniques.",
            image: "/images/elucis-next/case-3.png",
        },
        {
            title: "Innovation Labs",
            desc: "Design, test and prototype medical devices.",
            image: "/images/elucis-next/case-4.png",
        },
        {
            title: "Academic Collaboration",
            desc: "Collaborate across institutions and share knowledge.",
            image: "/images/elucis-next/case-5.png",
        },
    ];

    return (
        <section className="py-12 bg-linear-to-b from-[#0E324F] to-[#1F72B5] rounded-xl md:my-10 md:mx-5">
            <div className="max-w-450 mx-auto px-6 md:px-12 ">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Use Cases
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {cases.map((useCase, index) => (
                        <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden group h-100 flex flex-col justify-end"
                        >
                            <Image
                                src={useCase.image}
                                alt={useCase.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                            />
                            
                            {/* Black shadow at the bottom to hide empty space and make text visible */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent z-10"></div>

                            <div className="relative z-20 p-6">
                                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                                    {useCase.title}
                                </h3>
                                <p className="text-white leading-relaxed text-lg">
                                    {useCase.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
