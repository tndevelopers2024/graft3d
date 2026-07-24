"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
    {
        q: "How do I initiate a new case on the ReGraft platform?",
        a: "Surgeons or hospitals begin by creating a secure login and uploading patient DICOM data (CT/CBCT scans). The platform guides you step-by-step through case submission, with direct support from our clinical engineering team.",
    },
    {
        q: "What happens after the scan is uploaded?",
        a: "Once uploaded, the data is processed by the Graft3D clinical engineering team, where medical image segmentation is performed to create an accurate 3D anatomical model of the patient's anatomy.",
    },
    {
        q: "How is segmentation validated before implant design?",
        a: "The segmented 3D anatomy is shared with the surgeon for clinical review and approval. Surgeons can request changes or annotate the model directly through the platform before design begins.",
    },
    {
        q: "How is the quotation generated and what does it include?",
        a: "After segmentation approval, a detailed quotation is provided covering implant design, engineering time, material costs, and delivery. Pricing is transparent with no hidden fees.",
    },
    {
        q: "When does the implant design process begin?",
        a: "The Bio-CAD design process starts only after quotation approval and payment confirmation, ensuring alignment between the surgeon, hospital, and our engineering team.",
    },
    {
        q: "How do I review the 3D implant design?",
        a: "The completed design is shared via the platform for 3D model review, where surgeons can visualize the implant in context, request modifications, or schedule a live review session.",
    },
    {
        q: "What if I need design modifications after reviewing the implant?",
        a: "You can request modifications directly through the platform. Additionally, you can schedule a live Zoom/Teams session with our Bio-CAD engineers for real-time collaborative review.",
    },
    {
        q: "What happens after final design approval?",
        a: "Once approved, the case transitions to the production phase, where the implant is manufactured using precision CNC machining or 3D printing from medical-grade PEEK material.",
    },
    {
        q: "Is the platform secure for handling patient data?",
        a: "Yes. ReGraft follows secure, encrypted workflows with controlled access, ensuring compliance with medical data privacy standards. Patient data is never shared without authorization.",
    },
    {
        q: "Can multiple cases be managed simultaneously?",
        a: "Absolutely. The platform is designed for scalability, allowing hospitals and surgeons to manage multiple active cases simultaneously with real-time status tracking for each.",
    },
    {
        q: "What is the typical turnaround time from scan upload to implant delivery?",
        a: "Typical turnaround is 10–15 business days from scan upload to implant delivery, depending on design complexity and revision cycles. Rush timelines can be accommodated on request.",
    },
];

const Faq = () => {
    const [open, setOpen] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className="w-full bg-white py-14 lg:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1a1b23] mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-3">
                    {FAQS.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-xl border transition-all overflow-hidden ${
                                open === i ? "border-[#166aaf]/40 shadow-sm" : "border-slate-200"
                            }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f8fbff] transition-colors"
                            >
                                <span className="font-semibold text-[#1e1e1e] text-base leading-snug">{faq.q}</span>
                                {open === i ? (
                                    <ChevronUp className="w-5 h-5 text-[#166aaf] shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                                )}
                            </button>
                            {open === i && (
                                <div className="px-5 pb-4 bg-white">
                                    <p className="text-[#1e1e1e] text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
