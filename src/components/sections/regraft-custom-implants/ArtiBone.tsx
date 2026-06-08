import React from "react";
import Image from "next/image";

const FEATURES = [
    {
        img: "/images/regraft-custom-implants/featured-section/1.png",
        title: "Custom Geometry",
        desc: "Designed for perfect anatomical fit",
    },
    {
        img: "/images/regraft-custom-implants/featured-section/2.png",
        title: "Surgical Accuracy",
        desc: "Precision fit reduces surgery time",
    },
    {
        img: "/images/regraft-custom-implants/featured-section/3.png",
        title: "Fast Recovery",
        desc: "Optimised design for minimal downtime",
    },
    {
        img: "/images/regraft-custom-implants/featured-section/4.png",
        title: "Strong & Lightweight",
        desc: "PEEK material offers strength with comfort",
    },
];

const ArtiBone = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-14 lg:py-20"
            style={{ background: "#ffffff" }}
        >

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Card ── */}
                <div
                    className="relative rounded-3xl overflow-hidden px-8 py-10 sm:px-12 sm:py-12"
                    style={{
                        background: "linear-gradient(135deg, #0d2044 0%, #071428 60%, #0a1f3a 100%)",
                        boxShadow: "0 8px 60px rgba(0,100,220,0.18), 0 2px 12px rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.07)",
                    }}
                >
                    {/* Radial glow */}
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(ellipse 65% 80% at 85% 50%, rgba(0,86,200,0.18) 0%, transparent 70%)",
                            pointerEvents: "none",
                        }}
                    />

                    {/* SVG wave lines overlay */}
                    <svg
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                        }}
                        viewBox="0 0 900 440"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map((offset, i) => (
                            <ellipse
                                key={i}
                                cx="900"
                                cy="220"
                                rx={260 + offset}
                                ry={110 + offset * 0.55}
                                fill="none"
                                stroke="rgba(0,134,245,0.13)"
                                strokeWidth="1.2"
                            />
                        ))}
                    </svg>

                    {/* ── Top row: text left + skull right ── */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-start">

                        {/* Left: badge + title + subtitle + description */}
                        <div className="flex flex-col gap-3 max-w-xl">
                            {/* FEATURED badge */}
                            <span
                                style={{
                                    display: "inline-block",
                                    background: "#0076e0",
                                    color: "#fff",
                                    fontSize: "11px",
                                    fontWeight: 800,
                                    letterSpacing: "0.08em",
                                    padding: "4px 14px",
                                    borderRadius: "6px",
                                    width: "fit-content",
                                }}
                            >
                                FEATURED
                            </span>
                            <h2 className="text-[52px] sm:text-[64px] font-extrabold text-white leading-none tracking-tight">
                                ArtiBone
                            </h2>
                            <p className="font-bold text-lg sm:text-xl leading-snug" style={{ color: "#1a9aff" }}>
                                Patient-Specific Artificial Bone Implants
                            </p>
                            <p className="text-base sm:text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                                Artibone (Artificial Bone) implants are custom-designed using advanced
                                3D technology and manufactured with medical-grade PEEK to restore
                                anatomy and improve patient outcomes.
                            </p>
                        </div>

                        {/* Right: skull + implant image */}
                        <div className="relative w-[220px] sm:w-[280px] lg:w-[320px] h-[200px] sm:h-[260px] lg:h-[290px] flex-shrink-0 mx-auto lg:mx-0">
                            <Image
                                src="/images/regraft-custom-implants/featured-section/top.png"
                                alt="ArtiBone skull with PEEK implant"
                                fill
                                sizes="320px"
                                className="object-contain object-center drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div
                        className="relative z-10 w-full my-8"
                        style={{ height: "1px", background: "rgba(255,255,255,0.10)" }}
                    />

                    {/* ── Bottom row: 4 features ── */}
                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                        {FEATURES.map(({ img, title, desc }, i) => (
                            <div key={i} className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left">
                                {/* Circular icon ring */}
                                <div
                                    style={{
                                        width: "72px",
                                        height: "72px",
                                        borderRadius: "50%",
                                        background: "#ffffff",
                                        border: "1.5px solid rgba(0,134,245,0.35)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={img}
                                        alt={title}
                                        width={44}
                                        height={44}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-bold text-base sm:text-[15px] leading-tight" style={{ color: "#1a9aff" }}>
                                    {title}
                                </p>
                                <p className="text-sm font-medium leading-snug" style={{ color: "rgba(255,255,255,0.70)" }}>
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ArtiBone;
