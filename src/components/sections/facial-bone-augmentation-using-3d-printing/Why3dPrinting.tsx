import React from 'react';
import Image from 'next/image';

const Why3dPrinting = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row w-full min-h-[500px]">
                {/* Left Side: Image with Blue Background */}
                <div className="w-full lg:w-[45%] bg-[#1c6bb5] flex justify-center items-center py-16 relative">
                    <div className="relative w-full max-w-[500px] aspect-[4/3]">
                        <Image
                            src="/images/facial-bone-augmentation-using-3d-printing/Group-1171275185.png"
                            alt="Mandible with Implant"
                            fill
                            className="object-contain drop-shadow-2xl translate-x-4 lg:translate-x-10 scale-110"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Text with Light Blue Background */}
                <div className="w-full lg:w-[55%] bg-[#eaf4fc] flex flex-col justify-center py-16 px-8 lg:px-20 xl:px-28">
                    <h2 className="text-2xl lg:text-[32px] font-bold text-[#1a5b9e] mb-6 leading-tight">
                        Why 3D Printing in Facial Bone Reconstruction?
                    </h2>
                    <p className="text-[#333333] leading-relaxed text-[15px] lg:text-[16px] font-medium text-justify">
                        Unlike standard fixation plates or grafting techniques, 3D printed facial implants are tailored to each patient's individual anatomy. Surgeons and biomedical engineers generate a digital image of the facial deformity, using high resolution images of CT scan, which is then processed through a computer-aided design (CAD) software. The facial implant is fabricated with exact dimensions for accurate fit, reducing the procedure time and eliminating trial and error during surgery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Why3dPrinting;
