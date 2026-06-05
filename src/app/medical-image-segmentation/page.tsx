import type { Metadata } from "next";
import Hero from "@/components/sections/medical-image-segmentation/Hero";
import HowItWorks from "@/components/sections/medical-image-segmentation/HowItWorks";
import Platform from "@/components/sections/medical-image-segmentation/Platform";
import Applications from "@/components/sections/medical-image-segmentation/Applications";
import WhyChoose from "@/components/sections/medical-image-segmentation/WhyChoose";
import Pricing from "@/components/sections/medical-image-segmentation/Pricing";
import Trusted from "@/components/sections/medical-image-segmentation/Trusted";
import CtaBanner from "@/components/sections/medical-image-segmentation/CtaBanner";
import SampleFiles from "@/components/sections/medical-image-segmentation/SampleFiles";
import Faq from "@/components/sections/medical-image-segmentation/Faq";

export const metadata: Metadata = {
    title: "Medical Image Segmentation — Convert DICOM Scans to 3D Models | Graft3D",
    description:
        "Upload CT, MRI or CBCT scans and get accurate, ready-to-use 3D anatomical models. AI + expert segmentation with 24–48 hour turnaround for surgical planning, implant design and research.",
    alternates: { canonical: "/medical-image-segmentation" },
    openGraph: {
        title: "Medical Image Segmentation — Convert DICOM Scans to 3D Models",
        description:
            "Convert medical scans into accurate 3D models. Secure & HIPAA compliant, expert + AI accuracy, 24–48 hour turnaround.",
        url: "https://graft3d.com/medical-image-segmentation",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Medical Image Segmentation Service" }],
    },
};

export default function MedicalImageSegmentationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Medical Image Segmentation",
        serviceType: "DICOM to 3D Model Conversion & Medical Image Segmentation",
        provider: {
            "@type": "Organization",
            name: "Graft3D Health Care Solutions Pvt. Ltd.",
            url: "https://graft3d.com",
        },
        areaServed: "Worldwide",
        description:
            "Convert CT, MRI and CBCT scans into accurate, ready-to-use 3D anatomical models using AI-assisted and expert-reviewed segmentation, with a 24–48 hour turnaround for surgical planning, implant design and research.",
        url: "https://graft3d.com/medical-image-segmentation",
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <HowItWorks />
            <Platform />
            <Applications />
            <WhyChoose />
            <Pricing />
            <Trusted />
            <CtaBanner />
            <SampleFiles />
            <Faq />
        </main>
    );
}
