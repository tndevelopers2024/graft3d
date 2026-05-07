"use client";

import React from 'react';
import Image from 'next/image';

const FacialBoneMaterials = () => {
    return (
        <section className="w-full bg-white flex flex-col gap-24 py-20">
            <div className="container mx-auto px-4 lg:px-20 max-w-[1400px] flex flex-col gap-32">

                {/* Section 1: Materials */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 flex flex-col items-start">
                        <h3 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-4 leading-tight">
                            Materials Used in 3D<br />Printing
                        </h3>
                        <p className="text-[#333333] mb-10 font-medium text-[15px] leading-relaxed">
                            Several biocompatible materials are used in 3D printed facial bone reconstruction, which provide advantages in terms of their clinical application:
                        </p>

                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">PEEK (Polyetheretherketone):</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Lightweight, strong and radiolucent allowing for easier post-operative imaging.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Porous Titanium:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Offers excellent mechanical strength and a surface that encourages bone ingrowth.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Biocompatible Polymers:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Flexible, safe and appropriate for long-term patient-specific use.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square lg:scale-110">
                            <Image
                                src="/images/facial-bone-augmentation-using-3d-printing/Frame-1618872641-1.png"
                                alt="Materials Used in 3D Printing"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Advantages */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[500px] aspect-[4/3] lg:scale-110">
                            <Image
                                src="/images/facial-bone-augmentation-using-3d-printing/Frameret.png"
                                alt="Advantages of 3D printed facial implants"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-10">
                        <h3 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-4 leading-tight">
                            Advantages of 3D printed<br />facial implants
                        </h3>
                        <p className="text-[#333333] mb-10 font-medium text-[15px] leading-relaxed">
                            Scaffold-like structures can be introduced in 3D printed facial implants, which is one of the biggest advantages. This porous, open latticework that mirrors the natural trabecular structure of cancellous bone results in:
                        </p>

                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Increased Osseointegration:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">The growth of new bone cells into the implant surface.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Improved Vascularization:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Long-term stability and natural healing.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Mechanical Reliability:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Maintaining structural integrity and facilitation of biological integration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Clinical Applications */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-10">
                        <h3 className="text-3xl lg:text-[34px] font-bold text-[#1a5b9e] mb-4 leading-tight">
                            Clinical Applications of 3D<br />Printed Facial Bone<br />Augmentation
                        </h3>
                        <p className="text-[#333333] mb-10 font-medium text-[15px] leading-relaxed">
                            This novel technology has now been implemented in various aspects of craniofacial reconstruction:
                        </p>

                        <div className="flex flex-col gap-8 w-full">
                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Orbit Augmentation:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Correcting enophthalmos and replacing atrophied orbital volume following trauma or disease.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Zygomatic and Malar Enhancement:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Restoring symmetry in the case of fractures, congenital underdevelopment or post traumatic deformities.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Mandibular and Maxillary Contouring:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Enhancing appearance and function for those with congenital jaw abnormalities or injury.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="w-12 h-1 bg-[#1a5b9e] mb-1"></div>
                                <h4 className="text-[17px] font-bold text-[#111111]">Reconstruction of the Skull and Frontal Bone:</h4>
                                <div className="flex items-start gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#1a5b9e] mt-1.5 shrink-0"></div>
                                    <p className="text-[#444444] font-semibold text-[15px]">Aesthetic and reconstructive aspects in injuries after cerebral and cranial trauma, oncologic surgery, radiotherapy or other congenital conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/images/facial-bone-augmentation-using-3d-printing/Frame8872643.png"
                                alt="Clinical Applications of 3D Printed Facial Bone Augmentation"
                                fill
                                className="object-contain drop-shadow-2xl translate-y-12 shrink-0 scale-110 lg:scale-[1.2]"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FacialBoneMaterials;
