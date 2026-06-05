import React from "react";
import Link from "next/link";
import { Upload, Headset } from "lucide-react";

const CtaBanner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C1A32] via-[#143562] to-[#1B5FA8]">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 24px)",
                }}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 text-center">
                <h2 className="text-3xl lg:text-[40px] font-bold text-white">Ready to Get Started?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-white/85 text-[16px] lg:text-xl leading-relaxed">
                    Upload your DICOM data and experience the fastest way to convert scans into accurate 3D models
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/upload-dicom-data"
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-[#166AAF] font-bold shadow-sm hover:bg-[#F1F7FC] transition-colors"
                    >
                        <Upload className="w-5 h-5" /> Upload DICOM Data
                    </Link>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-7 py-3.5 text-white font-bold hover:bg-white/10 transition-colors"
                    >
                        <Headset className="w-5 h-5" /> Talk to an Expert
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
