"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const FacialBoneCta = () => {
    return (
        <section className="w-full py-20 bg-white">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-lg border border-gray-100">

                    {/* Left: Blue Image Block */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px]">
                        <Image
                            src="/images/facial-bone-augmentation-using-3d-printing/Group-1171275184-1.png"
                            alt="3D Facial Implant Detail on blue background"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right: CTA Details Area */}
                    <div className="w-full lg:w-1/2 bg-[#f4fbff] flex flex-col justify-center items-start p-12 lg:p-20 relative text-left">
                        <div className="relative z-10 w-full max-w-[400px]">
                            <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-4">
                                Contact Us & Get details for
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1a5b9e] mb-8 leading-tight">
                                Facial Bone<br />
                                Augmentation Using<br />
                                3D Printing
                            </h2>
                            <Button asChild className="rounded-full bg-[#1a5b9e] hover:bg-[#124275] text-white font-bold px-8 py-6 w-fit shadow-md text-[15px] transition-colors">
                                <Link href="/contact-us">
                                    Get a Quote Now
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FacialBoneCta;
