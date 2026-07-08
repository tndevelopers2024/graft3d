import Image from "next/image";

const TrustBadges = () => {
    const institutions = [
        "/images/elucis-next/institution-1.png",
        "/images/elucis-next/institution-2.png",
        "/images/elucis-next/institution-3.png",
        "/images/elucis-next/institution-4.png",
        "/images/elucis-next/institution-5.png",
        "/images/elucis-next/institution-6.png",
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-400 mx-auto px-6 md:px-12 text-center">
                <p className="text-5xl font-bold mb-10">
                    Trusted by Academic and{" "}
                    <span className="text-[#166aaf]">Research Institutions</span>
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {institutions.map((imgSrc, index) => (
                        <div key={index} className="relative w-45 h-16">
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
