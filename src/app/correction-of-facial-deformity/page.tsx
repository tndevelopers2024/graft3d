"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone, Mail } from "lucide-react";
import FaqAccordion from "@/components/common/FaqAccordion";
import { Button } from "@/components/ui/Button";

const faqItems = [
    {
        question: "What is 3D printing in craniofacial and facial deformity?",
        answer: "3D printing, also known as additive manufacturing, involves creating physical three-dimensional objects from digital models. In craniofacial surgery, it is used to produce anatomical models, surgical guides, and patient-specific implants (PSIs) tailored to the unique anatomy of each patient.",
    },
    {
        question: "How does 3D printing benefit correction of facial deformity?",
        answer: "It offers unparalleled precision, allows for personalized treatment plans, reduces operation time, and improves surgical outcomes by providing surgeons with patient-specific tools and models.",
    },
    {
        question: "Can 3D printing be used for complex craniofacial surgeries?",
        answer: "Yes, 3D printing is particularly beneficial for complex cases where standard implants or surgical approaches may not be sufficient, allowing for detailed planning and custom solutions.",
    },
    {
        question: "What is virtual surgical planning (VSP) in craniofacial correction?",
        answer: "VSP is a digital process where surgeons use 3D software to plan the surgery in a virtual environment. This plan is then translated into physical tools and implants using 3D printing.",
    },
    {
        question: "How soon 3D printing technology can usage reach to the patient?",
        answer: "With rapid prototyping and streamlined digital workflows, the turnaround time for custom models and guides can be very fast, often within a few days from the initial scan.",
    },
    {
        question: "Can 3D scan data be used for management of facial deformity?",
        answer: "Absolutely. 3D scans (CT or MRI) are the foundational data used to create the digital models for planning and manufacturing patient-specific solutions.",
    },
    {
        question: "Is the material used in 3D printed medical devices safe for children?",
        answer: "Yes, medical-grade materials such as biocompatible polymers (PEEK) and metals (Titanium) are used, which are thoroughly tested and safe for patients of all ages, including children.",
    },
    {
        question: "What are the common surgical items that can be manufactured using 3D printing for management of facial deformities?",
        answer: "Common items include anatomical models for pre-surgical practice, cutting guides for precise bone resection, and patient-specific implants for reconstruction.",
    },
    {
        question: "What is the future of facial deformity treatments following 3D printing technology?",
        answer: "The future includes even higher levels of personalization, potential for bio-printing tissues, and further integration of AI to optimize surgical planning and implant design.",
    },
];

const advantages = [
    {
        title: "Improved Precision",
        desc: "Superior accuracy in fitting and reconstruction.",
    },
    {
        title: "Time Efficiency",
        desc: "Reduced surgical operation time and faster healing.",
    },
    {
        title: "Strong Predictability",
        desc: "Leads towards better vision on the final outcome.",
    },
    {
        title: "Superior Customization",
        desc: "Tailored products to suit unique anatomical shapes.",
    },
];

const clinicalApps = [
    {
        title: "Orthognathic Surgery of Maxillofacial Management",
        desc: "Customized solutions for complex jaw alignments and corrections.",
    },
    {
        title: "Orbital Reconstruction in Craniofacial Correction",
        desc: "Precise repair of the eye socket using patient-specific implants and guides.",
    },
    {
        title: "Correction of Hypertelorism and Mid-facial Bone Correction",
        desc: "Advanced planning and execution for correcting facial bone spacing.",
    },
    {
        title: "Cranial Vault Remodeling",
        desc: "Digital workflow for complex skull reshaping and reconstruction.",
    },
    {
        title: "Micro-facial Bone Reconstruction",
        desc: "Small scale bone repairs and refinements with high detail.",
    },
];

export default function CorrectionOfFacialDeformityPage() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <div className="relative min-h-screen bg-white font-poppins">
            {/* Hero Section */}
            <section className="relative w-full min-h-[600px] flex items-center overflow-hidden py-16 bg-[#f7faff]">
                {/* Background Wave Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/einscan-medixa/wave-bg.png"
                        alt=""
                        fill
                        className="object-cover object-center opacity-70"
                        priority
                    />
                </div>

                <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1200px] lg:pl-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col items-start space-y-8 animate-fade-in-left">
                            <div>
                                <h1 className="text-4xl lg:text-[44px] font-bold text-[#0066b2] mb-10 leading-tight">
                                    3D Printing in the Management <br /> of Facial Deformities
                                </h1>

                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <Button className="flex-1 sm:flex-initial rounded-full px-8 py-7 text-[16px] font-bold bg-[#0066b2] hover:bg-[#005596] text-white flex items-center gap-2 shadow-lg transition-transform hover:scale-105">
                                        <Link href="https://us02web.zoom.us/j/5903189768?pwd=T3VucDArMUY1NGxNRU1NMnJMYnVuQT09#success" className="flex items-center gap-2">
                                            Meet Us Live Online
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" /><rect width="14" height="12" x="2" y="6" rx="2" /></svg>
                                        </Link>
                                    </Button>
                                    <Button className="flex-1 sm:flex-initial rounded-full px-8 py-7 text-[16px] font-bold bg-white text-[#0066b2] border-2 border-[#0066b2] hover:bg-blue-50 shadow-md transition-transform hover:scale-105">
                                        <Link href="/get-quote">
                                            Get a Quote Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-6 pt-2">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#0066b2] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
                                        <Phone size={24} fill="currentColor" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#0066b2] font-bold text-[18px]">Call us now</p>
                                        <div className="flex flex-wrap gap-x-2 mt-0.5">
                                            <a href="tel:+916374410703" className="text-gray-800 text-[16px] font-medium hover:text-[#0066b2] transition-colors">+91 63744 10703</a>
                                            <span className="text-gray-400">|</span>
                                            <a href="tel:+919840478347" className="text-gray-800 text-[16px] font-medium hover:text-[#0066b2] transition-colors">+91 98404 78347</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-[#0066b2] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
                                        <Mail size={24} fill="currentColor" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#0066b2] font-bold text-[18px]">Email Us at</p>
                                        <a href="mailto:sales@graft3d.com" className="text-gray-800 text-[16px] font-medium mt-0.5 hover:text-[#0066b2] transition-colors">sales@graft3d.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square w-full max-w-[550px] mx-auto animate-fade-in-right">
                            <Image
                                src="/images/correction-of-facial-deformity/Frame-427319419-1-1.png"
                                alt="3D Printed Cranial Model"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm font-semibold text-gray-600">
                        <div className="bg-[#0066b2] rounded-full p-0.5 text-white">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <p>
                            Designed by <span className="text-[#0066b2]">Zoriox Innovation Labs</span> ,Marketed by <span className="text-[#0066b2]">Graft3D Healthcare Solutions</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 lg:py-24 bg-white">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="bg-[#f0f9ff] rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-xl border border-blue-50/50">
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-[#003c6e]">Overview</h2>
                            <p className="text-gray-700 leading-relaxed lg:text-lg">
                                The use of medical 3D printing is a revolutionary advance for craniofacial and facial surgeons.
                                Accurate 3D models can be produced from patient's anatomical data resulting in tools to
                                perform reconstruction, restore function, improve aesthetics, pre-operative surgical assessment
                                and anatomical model reproduction to simulate the procedures.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Support precise measurements and simulation for better outcomes.",
                                    "Facilitates highly personalized patient-specific solutions.",
                                    "Helps reduce surgical time and improves the overall quality of care."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square w-full">
                            <Image
                                src="/images/correction-of-facial-deformity/Rectangle-41915.png"
                                alt="Craniofacial Model Overview"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* VSP Section */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/2 relative aspect-square w-full">
                            <Image
                                src="/images/correction-of-facial-deformity/Rectangle-41915-1.png"
                                alt="Virtual Surgical Planning"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl font-bold text-[#003c6e]">Role of Virtual Surgical Planning (VSP)</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Virtual surgical planning (VSP) leads to accurate 3D printing for surgeons.
                                This results in more precise outcome for the facial deformity reconstruction.
                                Virtual surgical planning starts with patient's CT/MRI data and involves digital
                                segmentation to enhance planning accuracy.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Detailed pre-operative analysis of patient's anatomy.",
                                    "Simulation of potential surgical outcomes to ensure best precision.",
                                    "Reduces intra-operative guesswork by following precise virtual plans.",
                                    "Enhanced communication with patients through 3D visualization."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-600 italic">" {item} "</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl font-bold text-[#003c6e]">Integration of 3D Printing Technology</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Using 3D images from various modalities such as CT, MR and PET data, 3D printing
                                processes can convert this into high-quality anatomical virtual and printed medical
                                models for surgical planning and research.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "The digital data is refined through advanced segmentation and CAD software.",
                                    "Precision manufacturing tools generate patient-specific solutions for the medical industry.",
                                    "Enables rapid production of complex geometries which conventional methods could never achieve."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative aspect-square w-full">
                            <Image
                                src="/images/correction-of-facial-deformity/Frame-1618872641.png"
                                alt="Integration of 3D Printing"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/2 relative aspect-square w-full">
                            <Image
                                src="/images/correction-of-facial-deformity/Frame-1618872641-2.png"
                                alt="3D Printing Advantages"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-3xl font-bold text-[#003c6e]">Advantages of 3D Printing and VSP Assisted Facial Reconstruction</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                {advantages.map((adv, i) => (
                                    <div key={i} className="space-y-2 border-l-4 border-primary pl-4">
                                        <h3 className="font-bold text-[#003c6e] text-lg">{adv.title}:</h3>
                                        <p className="text-gray-600 text-sm italic">{adv.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <h2 className="text-3xl font-bold text-[#003c6e] mb-12">Clinical Applications</h2>
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                        <div className="lg:w-1/2 space-y-8">
                            {clinicalApps.map((app, i) => (
                                <div key={i} className="space-y-2">
                                    <h3 className="font-bold text-[#003c6e] text-lg">{app.title}:</h3>
                                    <ul className="pl-4">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <span className="text-gray-600 text-sm">{app.desc}</span>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="lg:w-1/2 relative aspect-square w-full">
                            <Image
                                src="/images/correction-of-facial-deformity/Rectangle-41923.png"
                                alt="Clinical Applications"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="mx-auto px-6 lg:px-12 max-w-[800px]">
                    <h2 className="text-4xl font-extrabold text-[#003c6e] text-center mb-12">FAQs</h2>
                    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-10">
                        <FaqAccordion items={faqItems} />
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-10 lg:py-8 bg-white">
                <div className="mx-auto px-6 lg:px-12 max-w-[1200px]">
                    <div className="relative overflow-hidden rounded-[40px] bg-[#f0f9ff] flex flex-col lg:flex-row items-center border border-blue-100/50 shadow-2xl">
                        <div className="lg:w-1/2 relative aspect-square w-full p-8 lg:p-16">
                            <Image
                                src="/images/correction-of-facial-deformity/Rectangle-41924.png"
                                alt="Get Started with 3D Printing"
                                fill
                                className="object-contain p-8 lg:p-16"
                            />
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-16 space-y-6 text-center lg:text-left">
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Digital Solutions</p>
                            <h2 className="text-3xl lg:text-3xl font-extrabold text-[#003c6e]">3D Printing in the Management of Facial Deformities</h2>
                            <Link href='/get-quote' className="bg-[#005696] hover:bg-[#003c6e] text-white px-6 py-2 h-auto text-lg rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                                Get Quote Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                @keyframes fade-in-left {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-right {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in-left {
                    animation: fade-in-left 1s ease-out forwards;
                }
                .animate-fade-in-right {
                    animation: fade-in-right 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
