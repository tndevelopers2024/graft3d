import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";

type Plan = {
    title: string;
    subtitle: string;
    oldPrice?: string;
    price?: string;
    cta?: string;
    badge?: string;
    features: string[];
};

const PLANS: Plan[] = [
    {
        title: "Basic Segmentation",
        subtitle: "Single Structure",
        oldPrice: "₹4,999",
        price: "₹2,499",
        badge: "First Case Offer",
        features: ["Single Organ / Structure", "STL / NRRD Output", "24–48 hrs Delivery"],
    },
    {
        title: "Advanced Segmentation",
        subtitle: "Multi-Structure",
        oldPrice: "₹19,999",
        price: "₹9,999",
        badge: "First Case Offer",
        features: ["Multiple Structures", "Detailed 3D Model", "Measurement Report", "24–48 hrs Delivery"],
    },
    {
        title: "Implant Design",
        subtitle: "Custom Solution",
        cta: "Get a Custom Quote",
        features: ["Patient-Specific Implants", "Surgical Guides", "Expert Design Support"],
    },
];

const Pricing = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C1A32] to-[#23416B] p-6 lg:p-12">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.12]"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(115deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 26px)",
                        }}
                    />
                    
                    {/* Offer Banner inside the unified container */}
                    <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10 pb-8 lg:pb-12 border-b border-white/10 mb-8 lg:mb-12">
                        <div className="flex-1 text-center lg:text-left">
                            <p className="text-[13px] lg:text-sm font-bold tracking-wide text-white/80">LIMITED TIME OFFER</p>
                            <h2 className="mt-2 text-2xl lg:text-[40px] font-bold text-white leading-tight">
                                Your First Case at 50% OFF!
                            </h2>
                            <p className="mt-3 max-w-2xl text-white/85 text-[15px] lg:text-lg leading-relaxed">
                                Experience the speed, accuracy and convenience of GRAFT3D. Upload your first
                                case today and get 50% OFF.
                            </p>
                        </div>
                        <div className="relative w-[260px] h-[150px] lg:w-[320px] lg:h-[180px] shrink-0">
                            <Image
                                src="/images/medical-image-segmentation/offer-skulls.png"
                                alt="3D printed cranial models"
                                fill
                                sizes="320px"
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
                        {PLANS.map((p) => (
                            <div key={p.title} className="flex flex-col rounded-2xl bg-white p-7 shadow-lg">
                                <h3 className="text-2xl lg:text-[28px] font-bold text-[#2A2A2A] leading-tight">{p.title}</h3>
                                <p className="mt-1 text-[#2A2A2A]/70 text-[15px]">{p.subtitle}</p>

                                {p.price ? (
                                    <div className="mt-6 flex items-baseline gap-3">
                                        {p.oldPrice && (
                                            <span className="text-lg text-[#9aa3ad] line-through">{p.oldPrice}</span>
                                        )}
                                        <span className="text-4xl lg:text-[44px] font-bold text-[#1B6DB1] leading-none">
                                            {p.price}
                                        </span>
                                    </div>
                                ) : (
                                    <Link
                                        href="/get-quote"
                                        className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-[#1B6DB1] px-5 py-3 text-[#1B6DB1] font-bold hover:bg-[#1B6DB1] hover:text-white transition-colors"
                                    >
                                        {p.cta}
                                    </Link>
                                )}

                                {p.badge && (
                                    <p className="mt-5 text-center font-bold text-[#2A2A2A]">{p.badge}</p>
                                )}

                                <ul className="mt-5 space-y-3 list-none">
                                    {p.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2.5 text-[#2A2A2A]/85 text-[15px]">
                                            <Check className="w-4 h-4 mt-1 text-[#1B6DB1] shrink-0" strokeWidth={3} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
