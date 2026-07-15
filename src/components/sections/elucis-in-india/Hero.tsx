import { CirclePlay, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] md:min-h-43.75 flex items-center overflow-hidden text-white py-12">
            {/* Background Image Panel */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/elucis-in-india/hero-bg.png"
                    alt="Elucis Family Background"
                    fill
                    className="object-cover md:object-contain object-center opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#00101B] from-20% via-[#00101B]/50 to-transparent"></div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-430 mx-auto px-6 md:px-12 py-10 md:py-20">
                <div className="max-w-3xl space-y-6 animate-fade-in-up">
                    <div className="inline-block text-sm md:text-md font-bold tracking-widest text-[#60bfff] uppercase mb-2">
                        ADVANCED 3D VR SURGICAL PLANNING PLATFORM
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Advanced 3D VR Surgical Planning Platform for{" "}
                        <span className="text-[#2899f7]">
                            Hospitals in India
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-gray-200">
                        Transform DICOM imaging into immersive patient-specific
                        anatomy for surgical planning, multidisciplinary
                        collaboration, patient engagement and procedural
                        confidence.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-6">
                        <Link
                            href="/book-demo"
                            className="flex items-center gap-2 bg-[#166AAF] text-white text-base md:text-lg font-bold py-3.5 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-all hover:-translate-y-0.5"
                        >
                            <Phone
                                className="w-5 h-5"
                                fill="white"
                                strokeWidth={0}
                            />
                            Book a Live Demo
                        </Link>
                        <Link
                            href="/contact-us"
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base md:text-lg font-bold py-3.5 px-8 rounded-lg hover:bg-white/20 transition-all hover:-translate-y-0.5"
                        >
                            <CirclePlay className="w-5 h-5" />
                            Talk to Graft 3D India
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
