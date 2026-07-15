import Image from "next/image";

const TrustBadges = () => {
    const institutions = [
        "/images/elucis-in-india/institution-1.png",
        "/images/elucis-in-india/institution-2.png",
        "/images/elucis-in-india/institution-3.png",
        "/images/elucis-in-india/institution-4.png",
        "/images/elucis-in-india/institution-5.png",
        "/images/elucis-in-india/institution-6.png",
        "/images/elucis-in-india/institution-7.png",
    ];

    return (
        <section className="py-8 md:py-12">
            <div className="max-w-450 mx-auto px-6 md:px-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-12">
                    Trusted by Leading{" "}
                    <span className="text-[#166aaf]">
                        Healthcare Institutions.
                    </span>
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 ">
                    {institutions.map((imgSrc, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-16 md:w-40 md:h-20"
                        >
                            <Image
                                src={imgSrc}
                                alt={`Institution ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
