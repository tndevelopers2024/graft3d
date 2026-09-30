import type { Metadata } from "next";

import ClinicalApplications from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/ClinicalApplications";
import ContactSection from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/ContactSection";
import FaqSection from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/FaqSection";
import Hero from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/Hero";
import IdealSection from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/IdealSection";
import ProductEcosystem from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/ProductEcosystem";
import WhyGraft3DHealthcare from "@/components/sections/transform-medical-imaging-into-3d-anatomical-models/WhyGraft3DHealthcare";

export const metadata: Metadata = {
    title: "Transform Medical Imaging into 3D Anatomical Models | Graft3D",
    description:
        "The Graft3D Healthcare Anatomical Model Package enables hospitals, medical colleges, and healthcare professionals to transform patient imaging data into accurate, patient-specific 3D anatomical models.",
    robots: { index: true, follow: true },
};

export default function Page() {
    return (
        <main>
            <Hero />
            <ProductEcosystem />
            <ClinicalApplications />
            <IdealSection />
            <WhyGraft3DHealthcare />
            <ContactSection />
            <FaqSection />
        </main>
    );
}
