import type { Metadata } from "next";
import Hero from "@/components/sections/minverse/Hero";
import FeatureChips from "@/components/sections/minverse/FeatureChips";
import Specifications from "@/components/sections/minverse/Specifications";
import BenefitsApplications from "@/components/sections/minverse/BenefitsApplications";
import Faq from "@/components/sections/minverse/Faq";
import CtaBanner from "@/components/sections/minverse/CtaBanner";

export const metadata: Metadata = {
    title: "MinVerse — Compact High-Performance Haptic Device | Graft3D",
    description:
        "MinVerse is a compact, high-precision 3D haptic device delivering real-time force feedback and ultra-fine motion control for medical simulation, surgical planning, design, and robotics.",
    alternates: { canonical: "/minverse" },
    openGraph: {
        title: "MinVerse — Compact High-Performance Haptic Device",
        description:
            "Compact precision, maximum control. A high-performance haptic device for precision-driven workflows in simulation, design, and robotics.",
        url: "https://graft3d.com/minverse",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "MinVerse Haptic Device" }],
    },
};

export default function MinVersePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "MinVerse",
        brand: { "@type": "Brand", name: "Graft3D" },
        category: "Haptic Device",
        description:
            "MinVerse is a compact, high-performance haptic device engineered for precision-driven workflows in simulation, design, and robotics, delivering real-time force feedback and ultra-fine motion control in immersive 3D environments.",
        url: "https://graft3d.com/minverse",
        image: "https://graft3d.com/images/minverse/hero-device.png",
        manufacturer: { "@type": "Organization", name: "Graft3D Health Care Solutions Pvt. Ltd." },
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Hero />
            <FeatureChips />
            <Specifications />
            <BenefitsApplications />
            <Faq />
            <CtaBanner />
        </main>
    );
}
