import Image from "next/image";

const LocalPartner = () => {
    const points = [
        {
            title: "Local Clinical Support",
            icon: "/images/elucis-in-india/partner-1.svg",
        },
        {
            title: "Pilot Programs",
            icon: "/images/elucis-in-india/partner-2.svg",
        },
        {
            title: "Implementation Excellence",
            icon: "/images/elucis-in-india/partner-3.svg",
        },
        {
            title: "Long-Term Partnership",
            icon: "/images/elucis-in-india/partner-4.svg",
        },
        {
            title: "Training & Workshops",
            icon: "/images/elucis-in-india/partner-5.svg",
        },
    ];

    return (
        <section className="py-10 md:py-12 bg-[#f2f9ff] overflow-hidden">
            <div className="max-w-450 mx-auto px-6 md:px-12 lg:px-18">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                            Your Local{" "}
                            <span className="text-[#166aaf]">
                                Partner For Success
                            </span>
                        </h2>

                        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-4 mt-11 w-full">
                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-4 w-[45%] sm:w-[18%]"
                                >
                                    <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                                        <Image
                                            src={point.icon}
                                            alt={point.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-lg font-medium text-black text-center leading-tight">
                                        {point.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-square md:aspect-16/5 flex items-center justify-center">
                            <Image
                                src="/images/elucis-in-india/india-map.png"
                                alt="India Map"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalPartner;
