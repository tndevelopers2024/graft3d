import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Upload, MessageCircle, ShieldCheck, Zap, Users } from "lucide-react";

const POINTS = [
    { Icon: ShieldCheck, title: "Secure", desc: "Your data is safe and encrypted" },
    { Icon: Zap, title: "Fast Turnaround", desc: "Timely delivery you can rely on" },
    { Icon: Users, title: "Expert Team", desc: "Surgeons, engineers and designers" },
];

const CtaBanner = () => {
    return (
        <section className="relative w-full overflow-hidden py-14 lg:py-16">
            {/* Dark background image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/regraft-custom-implants/dark-bg-image.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0a1b33]/80" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left: copy + CTAs */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[30px] sm:text-[38px] font-bold text-white leading-tight">
                            Start Your First Case with
                        </h2>
                        <span className="text-[40px] sm:text-[52px] font-extrabold leading-none">
                            <span className="text-white">Re</span>
                            <span className="text-[#ff931e]">Graft</span>
                        </span>
                        <p className="text-white/85 text-lg font-semibold leading-relaxed max-w-md">
                            Upload your scan today and experience the future of patient-specific implants.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <Link
                                href="/upload-bio-data"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[#166aaf] font-bold shadow hover:bg-[#e8f4ff] transition-colors"
                            >
                                <Upload className="w-5 h-5" /> Upload Scan Data
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 rounded-lg bg-transparent border-2 border-white/80 px-6 py-3 text-white font-bold hover:bg-white/10 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" /> Talk to a Specialist
                            </Link>
                        </div>
                    </div>

                    {/* Right: surgeon reviewing 3D skull */}
                    <div className="relative w-full h-[220px] sm:h-[280px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/regraft-custom-implants/cta-visual.png"
                            alt="Surgeon reviewing a 3D skull model on screen"
                            fill
                            sizes="(max-width: 1024px) 90vw, 45vw"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Bottom: 3 points row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 lg:mt-12">
                    {POINTS.map(({ Icon, title, desc }) => (
                        <div key={title} className="flex flex-col items-center text-center gap-2">
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10">
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                            <p className="text-[#0086f5] font-bold text-2xl">{title}</p>
                            <p className="text-white/80 text-base font-semibold">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;
