import type { Metadata } from "next";

import ClinicalApplications from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/ClinicalApplications";
import ContactSection from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/ContactSection";
import FaqSection from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/FaqSection";
import Hero from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/Hero";
import IdealSection from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/IdealSection";
import ProductEcosystem from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/ProductEcosystem";
import WhyGraft3DHealthcare from "@/components/sections/complete-package-for-patient-specific-orthotic-design-and-manufacturing/WhyGraft3DHealthcare";

export const metadata: Metadata = {
    title: "Complete Package for Patient-Specific Orthotic Design & Manufacturing | Graft3D",
    description:
        "The Graft3D Healthcare Orthotics Package combines 3D scanning, medical visualization, CAD modelling, haptic design, and high-performance 3D printing into one solution for customized orthotic devices tailored to individual patient anatomy.",
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
