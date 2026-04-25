"use client";

import React from 'react';
import FaqAccordion from '@/components/common/FaqAccordion';

const faqItems = [
    {
        question: "What Should Be The Format Of The DICOM FIles That I Am Uploading In The Graft3D Portal?",
        answer: "DICOM Data Should Be In .Dcm Format."
    },
    {
        question: "What Should Be The Minimum Slice Thickness Of Dicom Files?",
        answer: "Slice Thickness Should Be In The Range Of 0.2 To 1.0 (As Minimum As Possible, Depending Upon The Application)."
    },
    {
        question: "Which Software Do You Use For Medical Image Conversion?",
        answer: "We Use FDA 510 (K) Cleared Software D2P For Medical Image Conversion Software. algorithm in Body Scan mode of EinScan HX enables efficient alignment despite small movements of the scanned object or person. Using EinScan HX to scan the human body is much be easier and faster. The dedicated Face scanning mode of EinScan HX which is equipped with an invisible infrared light source provides a reliable solution to the problem of acquiring dark-colored objects and enables an easy acquisition of human hair and simultaneously a safe and comfortable scanning process."
    },
    {
        question: "Can We Directly Print The Segmented Part?",
        answer: "Yes, We Can Send You Segmented Parts As 3d Files In .Stl, Ply, Obj So You Can Direct Medical 3D Print In Various Technologies."
    },
    {
        question: "What Is The Price For Segmentation?",
        answer: "Upload The Raw Files. Depending Upon The Complexity, Our Team Will Get Back To You With The Instant Quotation For The Dicom Image Conversion Service."
    },
    {
        question: "How Can I Upload The DICOM File?",
        answer: "You Can Upload The Data On Graft3d.Com Or Deliver Us The CD With The Files At The Given Address."
    }
];

const DigitalImageConversionFaq = () => {
    return (
        <section id="faq" className="py-8 bg-white/50 animate-fade-in">
            <h2 className="text-center text-3xl font-bold text-[#1e73be] mb-12 uppercase tracking-wide">
                FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="max-w-6xl mx-auto">
                <FaqAccordion items={faqItems} />
            </div>
        </section>
    );
};

export default DigitalImageConversionFaq;
