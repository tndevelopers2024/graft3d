"use client";
import React from "react";
import Image from "next/image";

const Specialties = () => {
    const specialtiesList = [
        {
            name: "Cardiac Surgery",
            img: "/images/elucis-go/specialities-1.png",
        },
        { name: "Oncology", img: "/images/elucis-go/specialities-2.png" },
        { name: "Orthopedics", img: "/images/elucis-go/specialities-3.png" },
        { name: "ENT", img: "/images/elucis-go/specialities-4.png" },
        {
            name: "Maxillofacial Surgery",
            img: "/images/elucis-go/specialities-5.png",
        },
        { name: "Radiology", img: "/images/elucis-go/specialities-6.png" },
        { name: "Gynecology", img: "/images/elucis-go/specialities-7.png" },
        {
            name: "Biomedical Engineering",
            img: "/images/elucis-go/specialities-8.png",
        },
    ];

    return (
        <section className="py-10 md:py-12 bg-white">
            <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Elucis Go in Key{" "}
                        <span className="text-[#166AAF]">
                            Clinical Specialties
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {specialtiesList.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-[#ebf6ff] items-center pb-5 rounded-2xl text-center cursor-pointer shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent w-[calc(50%-8px)] md:w-[calc(33.333%-22px)] lg:w-[calc(20%-26px)]"
                        >
                            <div className="relative w-32 h-32 md:w-48 md:h-48">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    fill
                                    className="object-contain "
                                />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-md md:text-lg">
                                {item.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialties;
