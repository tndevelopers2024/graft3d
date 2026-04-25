import React from 'react';

const PatientSpecificImplantPrecision = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#155a96] mb-6">
                            Precision You Can Trust
                        </h2>
                        
                        <p className="text-base md:text-lg text-gray-700 font-medium mb-6">
                            Our implant design application supports the creation, review, and approval of customized implants using advanced 3D modeling.
                        </p>
                        
                        <p className="text-sm md:text-base text-gray-500">
                            Built to meet the needs of modern surgical planning, the platform ensures accuracy, traceability, and effortless communication at every stage of the medical device lifecycle.
                        </p>
                    </div>
                    
                    {/* Right Content Area (Placeholder) */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[600px] aspect-[4/3] bg-[#c4c4c4] rounded-2xl">
                            {/* Placeholder for video or image */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default PatientSpecificImplantPrecision;
