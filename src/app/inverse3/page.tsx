import type { Metadata } from "next";
import Hero from "@/components/sections/inverse3/Hero";
import FeatureChips from "@/components/sections/inverse3/FeatureChips";
import Specifications from "@/components/sections/inverse3/Specifications";
import BenefitsApplications from "@/components/sections/inverse3/BenefitsApplications";
import Faq from "@/components/sections/inverse3/Faq";

export const metadata: Metadata = {
    title: "Inverse3 — High-Performance 3D Haptic Device | Graft3D",
    description:
        "Inverse3 is a high-performance 3D haptic device delivering ultra-fine force feedback and motion control for medical simulation, surgical training, robotics, research, and virtual prototyping.",
    alternates: { canonical: "/inverse3" },
    openGraph: {
        title: "Inverse3 — High-Performance 3D Haptic Device",
        description:
            "Precision Haptics. Real-World Feel. Digital Control. A high-performance 3D haptic device that bridges the gap between the physical and digital worlds.",
        url: "https://graft3d.com/inverse3",
        images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Inverse3 Haptic Device" }],
    },
};

export default function Inverse3Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Inverse3",
        brand: { "@type": "Brand", name: "Graft3D" },
        category: "Haptic Device",
        description:
            "Inverse3 is a high-performance 3D haptic device engineered for precision and seamless integration, delivering ultra-fine force feedback and motion control for surgical simulation, robotics, research, and virtual prototyping.",
        url: "https://graft3d.com/inverse3",
        image: "https://graft3d.com/images/inverse3/device.png",
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
        </main>
    );
}
