import type { Metadata } from "next";
import Hero from "@/components/sections/regraft-custom-implants/Hero";
import Challenge from "@/components/sections/regraft-custom-implants/Challenge";
import Platform from "@/components/sections/regraft-custom-implants/Platform";
import ArtiBone from "@/components/sections/regraft-custom-implants/ArtiBone";
import ClinicalCase from "@/components/sections/regraft-custom-implants/ClinicalCase";
import PeekMaterial from "@/components/sections/regraft-custom-implants/PeekMaterial";
import CtaBanner from "@/components/sections/regraft-custom-implants/CtaBanner";
import Faq from "@/components/sections/regraft-custom-implants/Faq";

export const metadata: Metadata = {
    title: "ArtiBone — Custom PEEK Implants | Regraft3D by Graft3D",
    description:
        "Patient-specific PEEK implants designed from your CT/CBCT scan data. Regraft3D delivers precision-engineered ArtiBone implants for cranial, maxillofacial, orthopedic and oncology reconstruction.",
    alternates: { canonical: "/regraft-custom-implants" },
    openGraph: {
        title: "ArtiBone — Custom PEEK Implants | Regraft3D",
        description:
            "From scan to sterilised implant — Regraft3D manufactures patient-specific PEEK implants with surgeon-approved Bio-CAD designs.",
        url: "https://graft3d.com/regraft-custom-implants",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "ArtiBone Custom PEEK Implants" }],
    },
};

export default function RegraftCustomImplantsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalDevice",
        name: "ArtiBone — Custom PEEK Implants",
        description:
            "Patient-specific artificial bone implants manufactured from medical-grade PEEK using advanced Bio-CAD design and the Regraft3D digital platform.",
        manufacturer: {
            "@type": "Organization",
            name: "Graft3D",
            url: "https://graft3d.com",
        },
        url: "https://graft3d.com/regraft-custom-implants",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <Challenge />
            <Platform />
            <ArtiBone />
            <ClinicalCase />
            <PeekMaterial />
            <CtaBanner />
            <Faq />
        </>
    );
}
