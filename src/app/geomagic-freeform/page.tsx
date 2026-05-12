"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FaqAccordion from "@/components/common/FaqAccordion";
import { useLeadForm } from "@/lib/useLeadForm";

/* ------------------------------------------------------------------ */
/*  Static data                                                         */
/* ------------------------------------------------------------------ */

const faqItems = [
    {
        question: "Is geomagic software a perpetual or yearly subscription?",
        answer:
            "Geomagic Freeform Software Design X, Control X wrap and Geomagic for Solidworks, all are one-time purchase perpetual license application, it’s not possible to rent or yearly subscribe Geomagic design freeform software.",
    },
    {
        question: "Do I mandatorily update the geomagic freeform software AMC Every year?",
        answer:
            "To receive frequent updates on Geomagic software, the user needs to go for AMC renewal every year. However, it is not mandatory to renew every year. Users can keep using the software version and updates launched during the AMC period.ons.",
    },
    {
        question: "What are types of geomagic licensing?",
        answer:
            "It has online activation, offline dongle, and network licensing.",
    },
    {
        question: "What is the file format for geomagic design X provides?",
        answer:
            "It provides CAD neutral formats such as STL, OBJ, PLY, IGES, STEP.",
    },
    {
        question: "Can I create a drawing in solidworks from a part that was reverse engineered freeform?",
        answer:
            "Geomagic Freeform software is a haptic device-based digital sculpting software that you need to use parallelly with the device for best results, however, you can use freeform with a mouse and without the haptic device with limited functionality.",
    },
    {
        question: "Can I use 3D scan files into geomagic freeform and do freeform editing?",
        answer:
            "Yes, you can import 3D scanning files into Geomagic Freeform and can change the shape of it, edit the .STL and do organic modelling. This is widely used in statue renovation of broken ordamaged sculptures.",
    },
    {
        question: "Can I import 2D pictures and trace curves to do 3D modelling?",
        answer:
            "Yes, you can import 2D pictures and trace curves and use them for 3d sculpting and modelling.",
    },
    {
        question: "Is geomagic freeform a history based software?",
        answer:
            "Yes, Geomagic Freeform has a modeling history, however, it does not require access to edit the shape, you can directly access 3d voxels and do sculpting to change or enhance the shape.",
    },
    {
        question: "Where can i buy geomagic freeform software in india?",
        answer:
            "You can buy Geomagic Freeform software from 3D Systems Software authorized resellers in India. We, are one of the authorized distributors & a reseller of Geomagic Software products in India. You can buy from us.",
    },
];

const features = [
    {
        icon: "/images/geomagic-freeform/Group-12.png",
        title: "",
        desc: "Voxel-based CAD system to design organic and freeform shaped designs.",
    },
    {
        icon: "/images/geomagic-freeform/Group-13.png",
        title: "",
        desc: "Make custom medical devices that are highly personalized, better-fitting, lighter, and more robust.",
    },
    {
        icon: "/images/geomagic-freeform/Group-14.png",
        title: "",
        desc: "Creating functional cages for applications such as custom medical implant.",
    },
    {
        icon: "/images/geomagic-freeform/Group-15.png",
        title: "",
        desc: "Import any human body 3D scan files use them as a reference to design custom-made medical devices.",
    },
    {
        icon: "/images/geomagic-freeform/Group-16.png",
        title: "",
        desc: "Generate an auto surface of clay or polygon models for export as NURBS surfaces.",
    },
    {
        icon: "/images/geomagic-freeform/Group-17.png",
        title: "",
        desc: "Directly import both medical and industrial CT machines data, and use it for all the designing applications.",
    },
];

const specializations = [
    { icon: "/images/geomagic-freeform/cranioMaxilloFacialIcon-03.png", label: "Cranio-Maxillofacial" },
    { icon: "/images/geomagic-freeform/cardiology-icons-07.png", label: "Cardiology" },
    { icon: "/images/geomagic-freeform/neurology-icons-06-1.png", label: "Neurology" },
    { icon: "/images/geomagic-freeform/Orthopedic-05-1.png", label: "Orthopedic" },
    { icon: "/images/geomagic-freeform/prosthodontics-04.png", label: "Prosthodontics" },
    { icon: "/images/geomagic-freeform/urology-icons-08.png", label: "Urology" },
    { icon: "/images/geomagic-freeform/gasteroenterology-icons-09.png", label: "Gastroenterology" },
    { icon: "/images/geomagic-freeform/oncology-icons-10.png", label: "Oncology" },
    { icon: "/images/geomagic-freeform/orthodonticsIcon-01.png", label: "Orthodontics" },
];

const applications = [
    { img: "/images/geomagic-freeform/Group-24.png", label: "Cranio-Maxillofacial Implants" },
    { img: "/images/geomagic-freeform/Group-26.png", label: "Orthopedic Implants" },
    { img: "/images/geomagic-freeform/Group-31.png", label: "Dental Prosthetics" },
    { img: "/images/geomagic-freeform/Group-47.png", label: "Hearing Aid Shells" },
    { img: "/images/geomagic-freeform/Group-49.png", label: "Ocular Prosthetics" },
    { img: "/images/geomagic-freeform/Group-51.png", label: "Surgical Guides" },
    { img: "/images/geomagic-freeform/Group-52.png", label: "Jewelry Design" },
    { img: "/images/geomagic-freeform/Group-53.png", label: "Consumer Products" },
    { img: "/images/geomagic-freeform/Group-54.png", label: "VFX & Animation" },
    { img: "/images/geomagic-freeform/Group-56.png", label: "Footwear Design" },
    { img: "/images/geomagic-freeform/Group-57.png", label: "Toy Design" },
    { img: "/images/geomagic-freeform/Group-58.png", label: "Industrial Design" },
];

const caseStudies = [
    {
        img: "/images/geomagic-freeform/CaseStudy1.jpg",
        title: "Virtual Surgical Planning Assists With Full Face Transplant",
    },
    {
        img: "/images/geomagic-freeform/CaseStudy2.jpg",
        title: "Geomagic Freeform Puts a Face To Missing Children",
    },
    {
        img: "/images/geomagic-freeform/CaseStudy3.jpg",
        title: "Geomagic Phantom Haptic Devices Allow Surgeons To Practice Procedure Using Virtual Touch",
    },
];

const relatedProducts = [
    {
        img: "/images/geomagic-freeform/OverviewImg.jpg",
        name: "D2P - Bone,Vascular,Teeth",
        link: "/dicom-to-3d-model-conversion-software/",
    },
    {
        img: "/images/geomagic-freeform/Einscan-Hx-e1651750527325.png",
        name: "Einscan HX",
        link: "/human-body-parts-3d-scanner",
    },
    {
        img: "/images/geomagic-freeform/Group-24.png",
        name: "Haptic Device",
        link: "/geomagic-touch-x-haptic-device",
    },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                      */
/* ------------------------------------------------------------------ */

export default function GeomagicFreeformPage() {
    const [activeSection, setActiveSection] = React.useState("overview");
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        industry: "",
        comment: "",
    });
    const { status, feedback, handleSubmit } = useLeadForm({
        subject: "Geomagic Freeform Trial Request",
        successMessage: "Thanks. Your free-trial request has been submitted.",
        onSuccess: () =>
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                country: "",
                industry: "",
                comment: "",
            }),
        resetOnSuccess: false,
    });

    const menuItems = [
        { name: "Overview", id: "overview" },
        { name: "Features & Benefits", id: "features-benefits" },
        { name: "Specialization", id: "specialization" },
        { name: "Applications", id: "applications" },
        { name: "Download Trial", id: "download-trial" },
        { name: "Video Gallery", id: "video-gallery" },
        { name: "Case Study", id: "case-study" },
        { name: "Related Products", id: "related-products" },
        { name: "FAQs", id: "faqs" },
    ];

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: "-100px 0px -70% 0px", threshold: 0 }
        );

        menuItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const top =
                el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <div className="relative min-h-screen bg-white font-poppins">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* ── Hero ── */}
            <section
                className="relative w-full overflow-hidden"
                style={{
                    backgroundImage: "url('/images/geomagic-freeform/CoverPhoto.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right",
                    minHeight: "220px",
                }}
            >
                <div className="relative z-10 mx-auto px-6 md:px-12 py-10 md:py-14" style={{ maxWidth: "1200px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Left content */}
                        <div className="flex flex-col space-y-4">
                            {/* Logo icon */}
                            <div className="relative h-14 w-14 shrink-0">
                                <Image
                                    src="/images/geomagic-freeform/UiFreeform-logo-5.jpg"
                                    alt="Geomagic Freeform Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-[#003c6e] md:text-4xl">
                                Geomagic Freeform
                            </h1>

                            <p className="max-w-md text-sm leading-relaxed text-gray-700 md:text-base">
                                Comprehensive Bio CAD modeling software for medical devices
                                and virtual surgical planning
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    onClick={() => scrollToSection("download-trial")}
                                    className="inline-flex items-center gap-2 rounded-sm bg-[#005696] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-md"
                                >
                                    <Link href="/brochures/Freefrom-Brochure.pdf">Download Free Trial</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <a
                                    href="https://calendly.com/graft3dh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-sm bg-[#005696] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-md"
                                >
                                    Book Online Meeting
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => scrollToSection("download-trial")}
                                    className="inline-flex items-center gap-2 rounded-sm bg-[#005696] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#004274] hover:shadow-md"
                                >
                                    <Link href="/brochures/Group-1.pdf">Download Software Brochure</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v9.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 13.586V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right spacer */}
                        <div className="hidden md:block" />
                    </div>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="bg-[#f0f7ff] py-16 md:py-24">
                <div className="mx-auto px-4 md:px-8" style={{ maxWidth: "1200px" }}>
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <div className="sticky top-20 z-10 -mx-4 overflow-x-auto bg-[#f8fafc] px-4 py-4 lg:mx-0 lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 no-scrollbar">
                                <div className="flex flex-row gap-4 lg:flex-col lg:min-w-0 min-w-max">
                                    {menuItems.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`block text-base font-semibold transition-all whitespace-nowrap text-left hover:text-[#005696] ${activeSection === item.id
                                                ? "border-b-2 border-[#005696] pb-2 text-[#005696] lg:border-b-0 lg:border-l-4 lg:pb-0 lg:pl-4"
                                                : "px-2 text-gray-400 lg:px-4"
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9">
                            <div className="space-y-16">

                                {/* OVERVIEW */}
                                <div id="overview" className="scroll-mt-32 space-y-6">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Overview</h2>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
                                        <div className="space-y-4 text-gray-700">
                                            <p className="text-base leading-relaxed md:text-lg">
                                                Geomagic Freeform is a professional 3D design software that uniquely
                                                combines digital sculpting, free-form surface modeling, and parametric
                                                CAD into a single integrated platform. It is purpose-built for designing
                                                complex organic shapes and is the gold standard for haptic-enabled design
                                                in the medical, dental, and consumer-products industries.
                                            </p>
                                            <p className="text-base leading-relaxed md:text-lg">
                                                Whether you are designing a patient-specific cranial implant, a custom
                                                hearing-aid shell, or an intricate piece of jewelry, Geomagic Freeform
                                                delivers the tools and tactile workflow to bring your vision to life —
                                                faster and more accurately than any other solution on the market.
                                            </p>
                                            <p className="text-base leading-relaxed md:text-lg">
                                                The software supports the full workflow from 3D scan import through
                                                design, validation, and direct export to 3D printing or CNC machining,
                                                making it the go-to choice for engineers who need production-ready
                                                digital models of organic geometry.
                                            </p>
                                        </div>
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                                            <Image
                                                src="/images/geomagic-freeform/HapticDevice.jpg"
                                                alt="Geomagic Freeform Overview"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURES & BENEFITS */}
                                <div id="features-benefits" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">
                                        Features &amp; Benefits
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {features.map((f, i) => (
                                            <div
                                                key={i}
                                                className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-6 shadow-sm border border-blue-50 transition-all hover:shadow-md hover:-translate-y-1"
                                            >
                                                <div className="relative h-16 w-16 shrink-0">
                                                    <Image src={f.icon} alt={f.title} fill className="object-contain" />
                                                </div>
                                                <h3 className="text-base font-bold text-[#005696] text-center">{f.title}</h3>
                                                <p className="text-sm leading-relaxed text-gray-600 text-center">{f.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SPECIALIZATION */}
                                <div id="specialization" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Specialization</h2>
                                    <div className="rounded-2xl bg-[#BEE1FF] p-6 shadow-sm border border-blue-50">
                                        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
                                            {specializations.map((s, i) => (
                                                <div
                                                    key={i}
                                                    className="group flex flex-col items-center gap-3 rounded-xl p-4 transition-all hover:bg-[#f0f7ff]"
                                                >
                                                    <div className="relative h-14 w-14 shrink-0 transition-transform group-hover:scale-110">
                                                        <Image src={s.icon} alt={s.label} fill className="object-contain" />
                                                    </div>
                                                    <p className="text-xs font-semibold text-center text-gray-600">{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* APPLICATIONS */}
                                <div id="applications" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Applications</h2>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                                        {applications.map((app, i) => (
                                            <div
                                                key={i}
                                                className="overflow-hidden rounded-xl transition-all hover:shadow-md"
                                            >
                                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                                    <Image
                                                        src={app.img}
                                                        alt={app.label}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* DOWNLOAD TRIAL */}
                                <div id="download-trial" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Download Free Trial</h2>
                                    <p className="text-gray-600">
                                        Please fill the details below
                                    </p>

                                    <p className="text-gray-600">
                                        Thank you so much for being interested in Geomagic Freeform, a comprehensive Bio cad modeling software for healthcare applications. Please download to register for your fully functional, 15-day free trial.All fields are required, and you need to key in the OTP sent to your mobile number. The email address must be valid, so instructions to access the software can also be sent to you. You should receive your notification soon after your request. Please check your spam or bulk email folder if the confirmation email got delivered there instead of your inbox.This free trial is for Geomagic freeform software only. You will also need a haptic device to understand the unlimited potential of geomagic freeform software.
                                    </p>

                                    <form
                                        className="space-y-6 rounded-2xl bg-white p-8 shadow-sm border border-blue-50"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            {[
                                                { label: "First Name", key: "firstName", type: "text", required: true },
                                                { label: "Last Name", key: "lastName", type: "text", required: true },
                                                { label: "Business Email", key: "email", type: "email", required: true },
                                                { label: "Mobile Number", key: "phone", type: "tel", required: true },
                                                { label: "Company Name", key: "company", type: "text", required: false },
                                                { label: "Country", key: "country", type: "text", required: false },
                                            ].map(({ label, key, type, required }) => (
                                                <div key={key} className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">
                                                        {label}{required && <span className="text-red-500 ml-1">*</span>}
                                                    </label>
                                                    <input
                                                        type={type}
                                                        name={key}
                                                        required={required}
                                                        value={formData[key as keyof typeof formData]}
                                                        onChange={(e) =>
                                                            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                                                        }
                                                        className="w-full rounded-md border-none bg-gray-100 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005696]/30 transition-all"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Industry</label>
                                            <input
                                                type="text"
                                                name="industry"
                                                value={formData.industry}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({ ...prev, industry: e.target.value }))
                                                }
                                                className="w-full rounded-md border-none bg-gray-100 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005696]/30 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700">Comment</label>
                                            <textarea
                                                name="comment"
                                                rows={4}
                                                value={formData.comment}
                                                onChange={(e) =>
                                                    setFormData((prev) => ({ ...prev, comment: e.target.value }))
                                                }
                                                className="w-full resize-none rounded-md border-none bg-gray-100 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005696]/30 transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="rounded-md bg-[#00AEEF] px-8 py-3 text-base font-bold text-white transition-all hover:bg-[#008dca] hover:shadow-lg active:scale-95"
                                        >
                                            {status === "loading" ? "Sending..." : "Send Message"}
                                        </button>
                                        {feedback && (
                                            <p className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>
                                                {feedback}
                                            </p>
                                        )}
                                    </form>
                                </div>

                                {/* VIDEO GALLERY */}
                                <div id="video-gallery" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Video Gallery</h2>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                        {/* Large video */}
                                        <div className="md:col-span-2 overflow-hidden rounded-2xl bg-white shadow-lg">
                                            <div className="relative aspect-video w-full">
                                                <iframe
                                                    className="absolute inset-0 h-full w-full"
                                                    src="https://www.youtube.com/embed/gDqxR0sh-Xc"
                                                    title="Bio CAD modelling for 3D Printing: Geomagic Freeform"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                />
                                            </div>
                                        </div>
                                        {/* Two smaller videos stacked */}
                                        <div className="flex flex-col gap-4">
                                            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                                                <div className="relative aspect-video w-full">
                                                    <iframe
                                                        className="absolute inset-0 h-full w-full"
                                                        src="https://www.youtube.com/embed/qrBmFeff78g"
                                                        title="Designing Sub-Periosteal Implant"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                                                <div className="relative aspect-video w-full">
                                                    <iframe
                                                        className="absolute inset-0 h-full w-full"
                                                        src="https://www.youtube.com/embed/keRZePyII0w"
                                                        title="3D Printed Medical Devices"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                        referrerPolicy="strict-origin-when-cross-origin"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CASE STUDY */}
                                <div id="case-study" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Case Study</h2>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                        {caseStudies.map((cs, i) => (
                                            <div key={i} className="group flex flex-col">
                                                <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
                                                    <Image
                                                        src={cs.img}
                                                        alt={cs.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <p className="mt-4 text-base italic leading-relaxed text-gray-600 min-h-[3rem]">
                                                    {cs.title}
                                                </p>
                                                <div className="mt-4">
                                                    <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#005696]/20 px-6 py-2 text-sm font-bold text-[#005696] transition-all hover:border-[#005696] hover:bg-[#005696] hover:text-white group/btn">
                                                        Read More
                                                        <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RELATED PRODUCTS */}
                                <div id="related-products" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-3xl font-bold uppercase text-[#005696]">Related Products</h2>
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                        {relatedProducts.map((rp, i) => (
                                            <Link
                                                key={i}
                                                href={rp.link}
                                                className="group flex flex-col items-center"
                                            >
                                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-blue-50 bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
                                                    <Image
                                                        src={rp.img}
                                                        alt={rp.name}
                                                        fill
                                                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="mt-6">
                                                    <button className="rounded-md bg-[#005696] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#004274] hover:shadow-lg active:scale-95 whitespace-nowrap">
                                                        {rp.name}
                                                    </button>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* FAQs */}
                                <div id="faqs" className="scroll-mt-32 space-y-8 pt-4">
                                    <h2 className="text-center text-3xl font-bold uppercase text-[#005696]">FAQs</h2>
                                    <div className="mx-auto max-w-3xl">
                                        <FaqAccordion items={faqItems} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div >
    );
}
