import React from "react";
import Image from "next/image";
import Link from "next/link";

const POINTS = [
    {
        img: "/images/regraft-custom-implants/cta-section/1.png",
        title: "Secure",
        desc: "Your data is safe and encrypted",
    },
    {
        img: "/images/regraft-custom-implants/cta-section/2.png",
        title: "Fast Turnaround",
        desc: "Timely delivery you can rely on",
    },
    {
        img: "/images/regraft-custom-implants/cta-section/3.png",
        title: "Expert Team",
        desc: "Surgeons, engineers and designers",
    },
];

const CtaBanner = () => {
    return (
        <section
            className="relative w-full overflow-hidden py-14 lg:py-16"
            style={{
                background: "linear-gradient(135deg, #0d2044 0%, #071428 60%, #0a1f3a 100%)",
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

            {/* SVG wave lines */}
            <svg
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
                viewBox="0 0 1440 440"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map((offset, i) => (
                    <ellipse
                        key={i}
                        cx="1440"
                        cy="220"
                        rx={300 + offset}
                        ry={120 + offset * 0.55}
                        fill="none"
                        stroke="rgba(0,134,245,0.13)"
                        strokeWidth="1.2"
                    />
                ))}
            </svg>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Top row: copy left + surgeon image right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center">

                    {/* Left: headline + buttons */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[26px] sm:text-[34px] font-bold text-white leading-tight">
                            Start Your First Case with
                        </h2>

                        {/* ReGRAFT logo */}
                        <div className="mb-1">
                            <Image
                                src="/images/regraft-custom-implants/logo.png"
                                alt="ReGRAFT"
                                width={320}
                                height={100}
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </div>

                        <p className="text-base sm:text-lg font-medium leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.82)" }}>
                            Upload your scan today and experience the future of patient-specific implants.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <Link
                                href="/upload-bio-data"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold shadow transition-colors hover:bg-[#e8f4ff]"
                                style={{ color: "#0076e0" }}
                            >
                                Upload Scan Data
                            </Link>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
                                style={{ border: "2px solid rgba(255,255,255,0.7)" }}
                            >
                                Talk to a Specialist
                            </Link>
                        </div>
                    </div>

                    {/* Right: surgeon reviewing skull on screen */}
                    <div
                        className="relative flex-shrink-0 rounded-2xl overflow-hidden mx-auto lg:mx-0"
                        style={{ width: "clamp(260px, 38vw, 460px)", height: "clamp(180px, 26vw, 320px)" }}
                    >
                        <Image
                            src="/images/regraft-custom-implants/cta-visual.png"
                            alt="Surgeon reviewing a 3D skull model on screen"
                            fill
                            sizes="460px"
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* ── Divider ── */}
                <div
                    className="w-full my-8"
                    style={{ height: "1px", background: "rgba(255,255,255,0.10)" }}
                />

                {/* ── Bottom: 3 feature points ── */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {POINTS.map(({ img, title, desc }) => (
                        <div key={title} className="flex flex-col items-center text-center gap-3">
                            {/* Circular icon ring */}
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
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
                                    width={50}
                                    height={50}
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-bold text-lg sm:text-xl" style={{ color: "#1a9aff" }}>
                                {title}
                            </p>
                            <p className="text-sm sm:text-base font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CtaBanner;
