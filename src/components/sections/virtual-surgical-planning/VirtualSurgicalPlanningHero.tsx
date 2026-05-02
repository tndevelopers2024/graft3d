"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function VirtualSurgicalPlanningHero() {
    return (
        <section className="relative w-full min-h-[600px] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/virtual/virtual-bg.png"
                    alt="Virtual Surgical Planning Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Optional overlay if the background needs to be lighter/darker
            <div className="absolute inset-0 bg-white/10"></div>
        */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text and Actions */}
                    <div className="space-y-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1f5f99] leading-tight">
                            Virtual Surgical Planning and Plates for Facial Trauma
                        </h1>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button
                                variant="default"
                                className="bg-[#1f5f99] hover:bg-blue-800 text-white rounded-full px-8 py-6 text-base font-semibold shadow-md flex items-center gap-2"
                            >
                                Meet Us Live Online
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                            </Button>
                            <Button
                                variant="white"
                                className="bg-white text-[#1f5f99] border-2 border-[#1f5f99] rounded-full px-8 py-6 text-base font-semibold shadow-md hover:bg-gray-50 transition-colors"
                            >
                                Get a Quote Now
                            </Button>
                        </div>

                        <div className="space-y-6 pt-6">
                            {/* Phone Contacts */}
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1f5f99] text-white p-3 rounded-full flex-shrink-0 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[#1f5f99] font-bold text-lg mb-1">Call us now</h3>
                                    <p className="text-gray-600 font-medium"><a href="tel:+919840478347" className="hover:underline">+91 98404 78347</a> | <a href="tel:+916374410703" className="hover:underline">+91 63744 10703</a></p>
                                </div>
                            </div>

                            {/* Email Contact */}
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1f5f99] text-white p-3 rounded-full flex-shrink-0 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-[#1f5f99] font-bold text-lg mb-1">Email Us at</h3>
                                    <p className="text-gray-600 font-medium">sales@graft3d.com</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center">
                        {/* 
              Using an inner relative container to control maximum size if needed, 
              though object-contain usually handles this well.
            */}
                        <div className="relative w-full h-full max-w-[500px] mx-auto">
                            <Image
                                src="/images/virtual/virtual1.png"
                                alt="Facial Trauma Model"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>

                {/* Footer Credit */}
                <div className="mt-16 text-center w-full flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#1f5f99]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-gray-700">
                        Designed by <span className="text-[#1f5f99]">Zoriox Innovation Labs</span> ,Marketed by <span className="text-[#1f5f99]">Graft3D Healthcare Solutions</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
