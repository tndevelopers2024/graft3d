"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import FaqAccordion from '@/components/common/FaqAccordion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useLeadForm } from "@/lib/useLeadForm";

interface CaseStudy {
    image: string;
    title: string;
}

const caseStudies: CaseStudy[] = [
    {
        image: "/images/gio-touch/gio6.jpg",
        title: "Virtual Surgical Planning Assists With Full Face Transplant"
    },
    {
        image: "/images/gio-touch/gio7.jpg",
        title: "Geomagic Freeform Puts a Face To Missing Children"
    },
    {
        image: "/images/gio-touch/gio8.jpg",
        title: "Geomagic Phantom Haptic Devices Allow Surgeons To Practice"
    }
];

interface RelatedProduct {
    image: string;
    name: string;
    link: string;
}

const relatedProducts: RelatedProduct[] = [
    {
        image: "/images/gio-touch/gio9.png",
        name: "Geomagic Freeform",
        link: "https://graft3d.com/geomagic-freeform/"
    },
    {
        image: "/images/gio-touch/gio10.png",
        name: "Einscan HX",
        link: "/human-body-parts-3d-scanner"
    },
    {
        image: "/images/gio-touch/gio11.jpg",
        name: "Haptic Device",
        link: "/dicom-to-3d-model-conversion-software"
    }
];

const faqItems = [
    {
        question: "What is a Haptic Device Phantom Premium?",
        answer: "The phantom device allows the user to interact with the computer by inserting his or her finger into a thimble. Multiple fingers may be used simultaneously or other devices such as a stylus or tool handle may be substituted for the thimble. It gives us the ability to feel the physical properties of virtual 3-D objects with much higher fidelity and much lower cost than previous force feedback devices."
    },
    {
        question: "What are the applications of Phantom Premium?",
        answer: "With ranges of motion approximating hand movement pivoting at the wrist, elbow or shoulder, the Phantom Premium can fulfill the requirements of manufacturing verification, machine component visualization, medical research and simulation, and an assortment of other haptically-enabled 3D applications."
    },
    {
        question: "What are the variants of Phantom Premium devices?",
        answer: "There are two variants of haptic devices that are Phantom Premium 1.5 and 1.5 HF (High Force)."
    },
    {
        question: "What is the warranty period of Phantom Premium?",
        answer: "Phantom Premium has a warranty period of 1 year. To receive frequent updates on Haptic Device, the user needs to go for AMC renewal every year."
    },
    {
        question: "What are the accessories of Phantom Premium?",
        answer: "Phantom premium consists of a thumbpad, encoders stylus gimbal, and scissors."
    }
];

export default function PhantomPremiumPage() {
    const [activeSection, setActiveSection] = React.useState("overview");
    const { status, feedback, handleSubmit } = useLeadForm({
        subject: "Phantom Premium Quote Request",
        successMessage: "Thanks. Your quote request has been submitted."
    });

    const menuItems = [
        { name: "Overview", id: "overview" },
        { name: "Specifications", id: "specifications" },
        { name: "Video Gallery", id: "video-gallery" },
        { name: "Case Study", id: "case-study" },
        { name: "Related Products", id: "related-products" },
        { name: "FAQs", id: "faqs" },
    ];

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-100px 0px -70% 0px",
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        const targetIds = ["overview", "specifications", "video-gallery", "case-study", "related-products", "faqs"];
        targetIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveSection(id);
        }
    };

    const sliderImages = [
        "/images/phantom/phantom2.png",
        "/images/phantom/phantom3.png",
        "/images/phantom/phantom4.png",
    ];

    return (
        <main className="min-h-screen bg-[#f8fafc]">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/phantom/phantom1.png"
                        alt="Phantom Premium Haptic Device"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full w-full items-end pb-12 lg:pb-20">
                    <div className="container mx-auto px-4 lg:px-24">
                        <div className="max-w-2xl">
                            {/* Note: The image already contains "Phantom Premium" text */}
                            <h1 className="sr-only">Phantom Premium</h1>
                            <div>
                                <Link href="/get-quote" className="rounded-md bg-[#336699] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-[#285580] hover:shadow-lg active:scale-95">
                                    Enquire Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="container mx-auto px-4 py-16 lg:px-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    {/* Left: Sidebar Menu */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-20 lg:top-32 z-10 bg-[#f8fafc] lg:bg-transparent -mx-4 px-4 py-4 lg:mx-0 lg:px-0 lg:py-0 overflow-x-auto lg:overflow-visible no-scrollbar">
                            <div className="flex flex-row lg:flex-col gap-4 min-w-max lg:min-w-0">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block text-lg font-semibold transition-all whitespace-nowrap hover:text-[#005696] text-left ${activeSection === item.id
                                            ? 'text-[#005696] border-b-2 lg:border-b-0 lg:border-l-4 border-[#005696] pb-2 lg:pb-0 lg:pl-4'
                                            : 'text-gray-400 px-2 lg:px-4'
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Sections */}
                    <div className="lg:col-span-9">
                        <div className="space-y-20">
                            {/* Overview Section */}
                            <div id="overview" className="scroll-mt-32 space-y-8 mb-0">
                                <h2 className="text-3xl font-bold uppercase text-[#005696]">OVERVIEW - Premium Haptic Device</h2>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    The Phantom Premium (formerly Sensible Phantom Premium) haptic devices fulfil the requirements of a vast range of research and commercial applications. With ranges of motion approximating hand movement pivoting at the wrist, elbow, or shoulder, the Phantom Premium can fulfil the requirements of manufacturing verification, machine component visualization, medical research and simulation, and an assortment of other haptically-enabled 3D applications.
                                </p>

                                {/* Manual Navigation Image Slider */}
                                <div className="relative group pt-4">
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        breakpoints={{
                                            640: { slidesPerView: 2 },
                                            1024: { slidesPerView: 3 },
                                        }}
                                        navigation={{
                                            nextEl: ".swiper-button-next-custom",
                                            prevEl: ".swiper-button-prev-custom",
                                        }}
                                        className="overflow-hidden rounded-2xl"
                                    >
                                        {sliderImages.map((src, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white bg-white p-2 shadow-md hover:shadow-lg transition-all">
                                                    <div className="relative h-full w-full overflow-hidden rounded-lg">
                                                        <Image
                                                            src={src}
                                                            alt={`Phantom Premium Application ${index + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    {/* Custom Navigation Arrows */}
                                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-4 flex size-10 items-center justify-center rounded-full bg-white shadow-lg text-[#005696] transition-all hover:bg-[#005696] hover:text-white group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                                        <ChevronLeft className="size-6" />
                                    </button>
                                    <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-4 flex size-10 items-center justify-center rounded-full bg-white shadow-lg text-[#005696] transition-all hover:bg-[#005696] hover:text-white group-hover:translate-x-0 opacity-0 group-hover:opacity-100">
                                        <ChevronRight className="size-6" />
                                    </button>
                                </div>

                                <div className="space-y-6 pt-8">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-lg font-bold text-gray-800">phantom premium</p>
                                        <p className="text-lg font-bold text-gray-800">Designing in Haptic Device</p>
                                        <p className="text-lg font-bold text-gray-800">Haptic Device</p>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <p className="text-lg text-gray-700">Three models make up the Phantom Premium line of haptic devices:</p>
                                        <ol className="list-decimal list-inside space-y-3 pl-4 text-lg text-gray-700 font-medium">
                                            <li>Phantom Premium 1.0</li>
                                            <li>Phantom Premium 1.5 and 1.5 HF (High Force)</li>
                                            <li>Phantom Premium 3.0</li>
                                        </ol>
                                    </div>

                                    <p className="text-lg leading-relaxed text-gray-700 pt-6 border-t border-gray-100">
                                        The Phantom Premium 1.5 haptic device provides a range of motion approximating lower arm movement pivoting at the elbow. This device includes a passive stylus and thimble gimbal and provides three degrees of freedom positional sensing and three degrees of freedom force feedback. You can purchase an encoder stylus gimbal separately, enabling the measurement of pitch, roll, and yaw. A Phantom Premium 1.5 HF (High Force) device is also available and includes a built-in gear box option that provides higher forces. The thimble attachment is currently not available.
                                    </p>
                                </div>
                            </div>

                            {/* Future Sections Placeholders */}
                            {/* Specifications Section */}
                            <div id="specifications" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696] mb-0">Specifications</h2>

                                <div className="relative w-full overflow-hidden rounded-2xl mt-4">
                                    <div className="relative w-full aspect-[4/2.5]">
                                        <Image
                                            src="/images/phantom/phantom5.png"
                                            alt="Phantom Premium Specifications"
                                            fill
                                            className="object-contain w-full"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Video Gallery Section */}
                            <div id="video-gallery" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696]">Video Gallery</h2>

                                <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-lg border border-blue-50">
                                    <div className="relative aspect-video w-full">
                                        <iframe
                                            className="absolute inset-0 size-full"
                                            src="https://www.youtube.com/embed/XHOmBV4js_E"
                                            title="Phantom Premium Haptic Device Demonstration"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* Case Study Section */}
                            <div id="case-study" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696]">Case Study</h2>

                                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                                    {caseStudies.map((item: CaseStudy, index: number) => (
                                        <div key={index} className="flex flex-col group">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="mt-6 text-lg italic leading-relaxed text-gray-600 min-h-[4rem]">
                                                {item.title}
                                            </p>
                                            <div className="mt-6">
                                                <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#005696]/20 px-8 py-2.5 text-base font-bold text-[#005696] transition-all hover:bg-[#005696] hover:text-white hover:border-[#005696] group/btn">
                                                    Read More
                                                    <ChevronRight className="size-5 transition-transform group-hover/btn:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Free Trial Form Section */}
                            <div id="free-trial" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696]">get quote</h2>

                                <form className="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-blue-50" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                                        {/* First Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">
                                                First Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">
                                                Last Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>

                                        {/* Business Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">
                                                Business Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>

                                        {/* Mobile Number */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>

                                        {/* Country */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Country</label>
                                            <input
                                                type="text"
                                                name="country"
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Industry - Full Width */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Industry</label>
                                        <input
                                            type="text"
                                            name="industry"
                                            className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all"
                                        />
                                    </div>

                                    {/* Comment - Full Width */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Comment</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            className="w-full rounded-md border-none bg-gray-100 px-4 py-3 placeholder:text-gray-400 focus:ring-2 focus:ring-[#005696]/20 transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="rounded-md bg-[#00AEEF] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-[#008dca] hover:shadow-lg active:scale-95"
                                        >
                                            {status === "loading" ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                    {feedback && (
                                        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>
                                            {feedback}
                                        </p>
                                    )}
                                </form>
                            </div>

                            {/* Related Products Section */}
                            <div id="related-products" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696]">Related Products</h2>

                                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                                    {relatedProducts.map((product, index) => (
                                        <Link href={product.link} key={index} className="flex flex-col items-center group">
                                            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-blue-50 bg-white transition-all duration-500 hover:shadow-xl">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="mt-8">
                                                <button className="rounded-md bg-[#005696] px-8 py-3 text-lg font-bold text-white transition-all hover:bg-[#004274] hover:shadow-lg active:scale-95 whitespace-nowrap">
                                                    {product.name}
                                                </button>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div id="faqs" className="space-y-12 pt-16 scroll-mt-32">
                                <h2 className="text-3xl font-bold uppercase text-[#005696] text-center mb-12">
                                    FAQ
                                </h2>
                                <div className="max-w-4xl mx-auto">
                                    <FaqAccordion items={faqItems} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </main>
    );
}
