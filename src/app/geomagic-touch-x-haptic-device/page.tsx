"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Scissors, Zap, Activity, Heart, BookOpen, Cpu, Settings, LucideIcon } from "lucide-react";
import Link from "next/link";

import FaqAccordion from '@/components/common/FaqAccordion';
import { useLeadForm } from '@/lib/useLeadForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const faqItems = [
  {
    question: "What is a Touch and Touch X Haptic Device?",
    answer: "Touch and Touch X are motorized devices that apply force feedback on the users’ hands, allowing them to feel virtual objects and producing true-to-life touch sensations as users manipulate on-screen 3D objects."
  },
  {
    question: "What is the Cost Of Touch And Touch X Haptic Device?",
    answer: "The Price Range of a haptic device is between $4500 to $17000 (USD)"
  },
  {
    question: "Which software is haptic-based?",
    answer: "Geomagic Sculpt, geomagic freeform, geomagic freeform plus are haptic-based software. Apart from geomagic freeform software you can also use this device to integrate haptic into your existing software."
  },
  {
    question: "Where can I buy Touch and Touch X in India?",
    answer: "You can buy Geomagic touch and Touch x from 3dsystems authorized resellers in India. We are Graft3D Healthcare, one of the authorized distributors, a reseller of Haptic Device in India."
  },
  {
    question: "What is the warranty period of Touch And Touch X?",
    answer: "Touch and Touch X has a warranty period of 1 year. To receive frequent updates on Haptic Device, the user needs to go for AMC renewal every year."
  }
];

interface AppItem {
  name: string;
  icon: LucideIcon;
}

const appItems: AppItem[] = [
  { name: "3D Surgical Planning", icon: Scissors },
  { name: "Patient-Specific Implants", icon: Zap },
  { name: "Virtual Surgical Planning", icon: Activity },
  { name: "Medical Simulation", icon: Heart },
  { name: "Rehabilitation", icon: Activity },
  { name: "Research & Education", icon: BookOpen },
  { name: "Robotics", icon: Cpu }
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

const features: string[] = [
  "Portable design and compact footprint.",
  "Compact force feedback workspace.",
  "6-degree-of-freedom positional sensing.",
  "3-degree-of-freedom force feedback.",
  "Comfortable molded-rubber stylus.",
  "Automatic workspace calibration.",
  "One integrated momentary stylus switch.",
  "Patent protected.",
  "Supports OpenHaptics toolkit with QuickHaptics micro API.",
  "Constructed of metal components and injection-molded carbon fiber reinforced plastics.",
  "CE certified."
];

export default function GeomagicTouchXPage() {
  const [activeSection, setActiveSection] = React.useState("overview");
  const { status, feedback, handleSubmit } = useLeadForm({
    subject: "Geomagic Touch X Free Trial Request",
    successMessage: "Thanks. Your free-trial request has been submitted."
  });

  const menuItems = [
    { name: "Overview", id: "overview" },
    { name: "Features & Benefits", id: "features-benefits" },
    { name: "Applications", id: "specifications" },
    { name: "Video Gallery", id: "video-gallery" },
    { name: "Case Study", id: "case-study" },
    { name: "Related Products", id: "related-products" },
    { name: "FAQs", id: "faqs" }
  ];

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Map 'applications' section to 'specifications' menu item
          const id = entry.target.id === "applications" ? "specifications" : entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Track all sections in menu + applications icons
    const targetIds = ["overview", "features-benefits", "applications", "specifications", "video-gallery", "case-study", "related-products", "faqs"];
    // Also track "applications" (icons) but it should highlight "specifications" menu item if viewed? 
    // Or just track what's in the menu.
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
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const sliderImages = [
    "/images/gio-touch/gio2.png",
    "/images/gio-touch/gio3.png",
    "/images/gio-touch/gio4.png"
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="relative min-h-screen bg-white font-poppins">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(180deg, #2A0A0A 0%, #222121 100%)"
        }}
      >
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Content */}
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-6">
                {/* Vertical Line Decor */}
                <div className="h-16 w-1.5 bg-white/80 rounded-full md:h-24"></div>

                <h1 className="text-3xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
                  Geomagic Touch & Touch X
                </h1>
              </div>

              <div className="pl-[2.75rem] md:pl-[3.75rem]">
                <Link href="/get-quote" className="rounded-sm bg-[#355475] px-6 py-2 text-lg font-semibold text-white transition-all hover:bg-[#2a435d] hover:shadow-lg">
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-[500px] transform transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/gio-touch/gio1.png"
                  alt="Geomagic Touch X Haptic Device"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Section */}
      <section className="bg-[#f0f7ff] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
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

            {/* Right: Content Area */}
            <div className="lg:col-span-9">
              <div className="space-y-12">
                {/* Overview Text */}
                <div id="overview" className="scroll-mt-32 space-y-6">
                  <h2 className="text-3xl font-bold uppercase text-[#005696]">Overview</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The haptic device provides tactile feedback that can be used by medical students and clinicians to develop their skills before entering the clinical environment. As well as increasing the accuracy and efficiency of their procedures, surgeons also enjoy reduced risk of exposure to blood-borne pathogens and decrease the need for cadaver use.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold uppercase text-[#005696]">Geomagic Touch</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Touch is an essential tool for 3D Surgical Planning, Patient-Specific Implants, Virtual Surgical Planning, which helps surgeons clear 3D Visualization about the patient’s anatomy to develop surgical planning before the actual operation. It Creates a realistic user interface. Touch is a motorized device that applies force feedback on the users’ hand, allowing them to feel virtual objects and producing true-to-life touch sensations as users manipulate on-screen 3D objects.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold uppercase text-[#005696]">Geomagic Touch X</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The Touch X simulates real-world surgery so that novice surgeons can train with confidence at home before stepping into theatre. The Touch X allows surgeons to perform accurate virtual surgeries, learn the feel of a correct procedure before entering the clinical environment, and carry out multiple simulations in order to reach perfection before operating on real patients.
                  </p>
                </div>

                {/* Manual Navigation Image Slider */}
                <div id="applications-gallery" className="relative pt-8 scroll-mt-32 group">
                  <Swiper
                    modules={[Autoplay, Navigation]}
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
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    loop={true}
                    className="overflow-hidden rounded-2xl"
                  >
                    {sliderImages.map((src, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white bg-white p-2 shadow-md hover:shadow-lg transition-all">
                          <div className="relative h-full w-full overflow-hidden rounded-lg">
                            <Image
                              src={src}
                              alt={`Haptic Device Application ${index + 1}`}
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

                {/* Features & Benefits Section */}
                <div id="features-benefits" className="space-y-12 pt-16 scroll-mt-32">
                  <h2 className="text-3xl font-bold uppercase text-[#005696]">Features and Benefits</h2>

                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-6 group">
                        <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#005696] shadow-md transition-transform group-hover:scale-110">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <p className="text-lg font-medium leading-tight text-gray-700">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications Section */}
                <div id="specifications" className="space-y-12 pt-16 scroll-mt-32">
                  <h2 className="text-3xl font-bold uppercase text-[#005696] mb-0">Specifications</h2>

                  <div className="relative w-full overflow-hidden rounded-2xl">
                    <div className="relative w-full aspect-[4/2.5]">
                      <Image
                        src="/images/gio-touch/gio5.png"
                        alt="Geomagic Touch and Touch X Specifications"
                        fill
                        className="object-contain"
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
                        src="https://www.youtube.com/embed/DSEMWV_QQm8"
                        title="Midfacial Prosthesis Design Using Geomagic Freeform Software and Haptic Device"
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
                  <h2 className="text-3xl font-bold uppercase text-[#005696]">Request a Free Trial</h2>

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

                <style jsx global>{`
                  .swiper-linear .swiper-wrapper {
                    transition-timing-function: linear !important;
                  }
                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                  .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
