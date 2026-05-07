"use client";

import React from 'react';
import Image from 'next/image';

const FacialBoneOverview = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                           {/* Right side: Text Focus */}
                    <div className="w-full lg:w-[55%] flex flex-col">
                        <h2 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-6">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-loose text-[16px] font-medium text-justify">
                            Facial bone deformities can be due to congenital defects, traumatic injuries or loss of bone after excision of tumours. These are associated with functional difficulties and a high degree of aesthetic asymmetry that cannot be easily corrected through standard reconstructive methods. In recent years, the introduction of 3D printing in facial bone reconstruction has brought groundbreaking enhancement by enabling surgeons to deliver precise restoration of aesthetics and long-term stabilization.
                        </p>
                    </div>

                    {/* Left side: Image */}
                    <div className="w-full lg:w-[45%] flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/facial-bone-augmentation-using-3d-printing/Group-1171275184-1.png"
                                alt="Facial Bone Overview"
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

export default FacialBoneOverview;
