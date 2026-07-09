import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const Specialties = () => {
    const specialtiesList = [
        {
            name: "Cardiac Surgery",
            img: "/images/elucis-family/specialities-1.png",
        },
        { name: "Oncology", img: "/images/elucis-family/specialities-2.png" },
        {
            name: "Orthopedics",
            img: "/images/elucis-family/specialities-3.png",
        },
        { name: "ENT", img: "/images/elucis-family/specialities-4.png" },
        {
            name: "Maxillofacial Surgery",
            img: "/images/elucis-family/specialities-5.png",
        },
        { name: "Radiology", img: "/images/elucis-family/specialities-6.png" },
        { name: "Gynecology", img: "/images/elucis-family/specialities-7.png" },
        {
            name: "Biomedical Engineering",
            img: "/images/elucis-family/specialities-8.png",
        },
    ];

    return (
        <section className="py-10 md:py-12">
            <div className="max-w-450 mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Designed for Real-World{" "}
                        <span className="text-[#166AAF]">Clinical Use</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                    {specialtiesList.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-[#ebf6ff] items-center pb-5 rounded-2xl text-center cursor-pointer shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent w-[calc(50%-8px)] md:w-[calc(33.333%-22px)] lg:w-[calc(20%-26px)] transition-all duration-300"
                        >
                            <div className="relative w-32 h-32 md:w-55 md:h-55">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-semibold text-black text-md md:text-lg px-2">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/elucis"
                        className="inline-flex items-center gap-2 text-white font-bold bg-linear-to-r from-[#166AAF] to-[#46ACFF] px-8 py-3 rounded-xl hover:shadow-lg hover:opacity-95 transition-all group/btn text-lg"
                    >
                        Explore All Specialties
                        <MoveRight className="w-6 h-6 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Specialties;
