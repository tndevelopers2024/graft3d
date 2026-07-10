"use client";

import { Button } from "@/components/ui/Button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import HomeHero from "./HomeHero";

const BANNER_SLIDES = [
    // 1. Geomagic Freeform With Haptic
    {
        id: 4,
        title: (
            <>
                Geomagic Freeform <span className="text-black">With</span>
                <br />
                <span className="text-black">Haptic</span>
            </>
        ),
        description:
            "Comprehensive Medical Design Software For Custom Medical Devices",
        desktopImage: "/images/home/banner/slide-1-mobile.png",
        mobileImage: "/images/home/banner/slide-1-mobile.png",
        imageAlt: "Geomagic Freeform Medical Design Software",
        titlePrimary: true,
        extraButtons: (
            <Button
                asChild
                variant="default"
                className="rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/30 mb-8"
            >
                <Link href="/geomagic-freeform">Know More</Link>
            </Button>
        ),
    },

    // 2. Medical 3D Printing Solution Provider
    {
        id: 5,
        subtitle: "Graft3D Healthcare",
        title: (
            <>
                Medical 3D Printing
                <br />
                Solution Provider
            </>
        ),
        description:
            "We Design and Develop Custom Healthcare 3D printed products, Healthcare 3D printing packages and Healthcare 3D services for hospitals and surgeons.",
        desktopImage: "/images/home/banner/slide-3-mobile.png",
        mobileImage: "/images/home/banner/slide-3-mobile.png",
        imageAlt: "Graft3D Healthcare Solution Provider",
        contentAlignCenter: false, // For lg:items-start
        extraButtons: (
            <Button
                asChild
                variant="default"
                className="rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/30 mb-8"
            >
                <Link href="/medical-3d-printing-service">Know More</Link>
            </Button>
        ),
    },

    // 3. EinScan Medixa
    {
        id: 3,
        title: "EinScan Medixa",
        desktopImage: "/images/home/banner/slide-2.png",
        mobileImage: "/images/home/banner/slide-2.png",
        imageAlt: "EinScan Medixa 3D Scanner",
        titlePrimary: true,
        titleLarge: true,
        extraButtons: (
            <div className="flex flex-wrap justify-start gap-4 mb-8">
                <Button
                    asChild
                    className="rounded-full px-6 py-5"
                    variant="default"
                >
                    <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09#success">
                        Meet Us Live Online
                    </Link>
                </Button>
                <Button
                    asChild
                    className="rounded-full px-6 py-5 bg-white text-primary border border-primary hover:bg-blue-50"
                >
                    <Link href="/get-quote">Get a Quote Now</Link>
                </Button>
                <Button
                    asChild
                    className="rounded-full px-6 py-5 bg-white text-primary border border-primary hover:bg-blue-50"
                >
                    <Link href="/einscan-medixa">Know More</Link>
                </Button>
            </div>
        ),
    },

    // 4. Funmat Pro 410
    {
        id: 2,
        subtitle: (
            <span className="text-gray-500 font-medium text-lg block mb-2 text-left">
                Medical 3D Printer
            </span>
        ),
        title: "Funmat Pro 410",
        description:
            "Self-Developed FFF (Fused Filament Fabrication) Core Technologies",
        desktopImage: "/images/home/banner/slide-4.png",
        mobileImage: "/images/home/banner/slide-4.png",
        imageAlt: "Funmat Pro 410 Medical 3D Printer",
        titlePrimary: true,
        imageRight: true,
        extraButtons: (
            <Button
                asChild
                variant="default"
                className="rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-500/30 mb-8"
            >
                <Link href="/funmat-pro-410">Know More</Link>
            </Button>
        ),
    },
    // 5. Medical 3D Filaments
    {
        id: 1,
        title: "Medical 3D Filaments",
        desktopImage: "/images/home/banner/slide-5.png",
        mobileImage: "/images/home/banner/slide-5.png",
        imageAlt: "Medical 3D Filaments",
        extraButtons: (
            <div className="flex flex-col gap-4 mb-8">
                <Button
                    asChild
                    className="rounded-full px-8 py-4 h-auto font-bold text-lg bg-white text-primary border border-primary hover:bg-blue-50 w-fit"
                >
                    <Link href="/polyetheretherketone-peek">
                        Polyetheretherketone (PEEK)
                    </Link>
                </Button>
                <Button
                    asChild
                    className="rounded-full px-8 py-4 h-auto font-bold text-lg bg-white text-primary border border-primary hover:bg-blue-50 w-fit"
                >
                    <Link href="/polymethyl-methacrylate-pmma">
                        Polymethyl Methacrylate (PMMA)
                    </Link>
                </Button>
                <Button
                    asChild
                    className="rounded-full px-8 py-4 h-auto font-bold text-lg bg-white text-primary border border-primary hover:bg-blue-50 w-fit"
                >
                    <Link href="/polycarbonate-pc">Polycarbonate (PC)</Link>
                </Button>
            </div>
        ),
    },
];

// ... (keep the BANNER_SLIDES array as is, this will be handled automatically since we're replacing the component part)

const BannerCarousel = () => {
    return (
        <div className="w-full relative">
            <div className="w-full h-full z-10">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full pb-12"
                >
                    <SwiperSlide key="home-hero">
                        <HomeHero />
                    </SwiperSlide>

                    {BANNER_SLIDES.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="max-w-350 mx-auto w-full h-full group">
                                <div className="w-full flex flex-col lg:block min-h-125 lg:h-150 relative overflow-hidden">
                                    {/* Content Container */}
                                    <div
                                        className={`w-full lg:absolute lg:inset-0 z-20 max-w-350 mx-auto px-4 flex flex-col items-start justify-center lg:items-start lg:justify-center py-12 lg:py-0 h-full`}
                                    >
                                        <div className="max-w-2xl text-left">
                                            {slide.subtitle &&
                                                (typeof slide.subtitle ===
                                                "string" ? (
                                                    <h2 className="text-primary font-bold text-2xl lg:text-3xl mb-2 text-left">
                                                        {slide.subtitle}
                                                    </h2>
                                                ) : (
                                                    slide.subtitle
                                                ))}

                                            <h1
                                                className={`${slide.titlePrimary ? "text-primary" : "text-black"} font-extrabold ${slide.titleLarge ? "text-4xl lg:text-6xl" : "text-3xl lg:text-5xl"} mb-4 leading-tight text-left`}
                                            >
                                                {slide.title}
                                            </h1>

                                            {slide.description && (
                                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-lg text-left">
                                                    {slide.description}
                                                </p>
                                            )}

                                            {slide.extraButtons}

                                            <BannerContactInfo />
                                        </div>
                                    </div>

                                    {/* Image Container */}
                                    <div
                                        className={`w-full lg:absolute lg:inset-y-0 lg:right-0 h-100 lg:h-full z-10 ${slide.imageRight ? "lg:w-[45%] lg:p-1" : "lg:w-1/2"}`}
                                    >
                                        <div className="hidden lg:block w-full h-full relative">
                                            <Image
                                                src={slide.desktopImage}
                                                alt={`${slide.imageAlt} Desktop`}
                                                fill
                                                className={`object-contain ${slide.imageRight ? "object-center" : "object-right"}`}
                                                priority={slide.id === 1}
                                            />
                                        </div>
                                        <div className="block lg:hidden w-full h-full relative">
                                            <Image
                                                src={slide.mobileImage}
                                                alt={`${slide.imageAlt} Mobile`}
                                                fill
                                                className="object-contain"
                                                priority={slide.id === 1}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

const BannerContactInfo = () => (
    <div className="flex flex-col gap-4 mb-8 items-start lg:items-start">
        <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-3 rounded-full">
                <Phone size={24} />
            </div>
            <div className="text-left">
                <p className="text-primary font-bold text-lg">Call us now</p>
                <p className="text-gray-700 text-sm font-medium">
                    <a
                        href="tel:+916374410703"
                        className="hover:text-primary transition-colors"
                    >
                        +91 63744 10703
                    </a>
                    {" | "}
                    <a
                        href="tel:+919840478347"
                        className="hover:text-primary transition-colors"
                    >
                        +91 98404 78347
                    </a>
                </p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <div className="bg-primary text-white p-3 rounded-full">
                <Mail size={24} />
            </div>
            <div className="text-left">
                <p className="text-primary font-bold text-lg">Email Us at</p>
                <p className="text-gray-700 text-sm font-medium">
                    <a
                        href="mailto:sales@graft3d.com"
                        className="hover:text-primary transition-colors"
                    >
                        sales@graft3d.com
                    </a>
                </p>
            </div>
        </div>
    </div>
);

export default BannerCarousel;
