import type { Metadata } from "next";

import ClinicalApplications from "@/components/sections/facial-prosthetic-design-and-manufacturing/ClinicalApplications";
import ContactSection from "@/components/sections/facial-prosthetic-design-and-manufacturing/ContactSection";
import FaqSection from "@/components/sections/facial-prosthetic-design-and-manufacturing/FaqSection";
import Hero from "@/components/sections/facial-prosthetic-design-and-manufacturing/Hero";
import IdealSection from "@/components/sections/facial-prosthetic-design-and-manufacturing/IdealSection";
import MedicalWorkflowPipeline from "@/components/sections/facial-prosthetic-design-and-manufacturing/MedicalWorkflowPipeline";
import WhyGraft3DHealthcare from "@/components/sections/facial-prosthetic-design-and-manufacturing/WhyGraft3DHealthcare";

export const metadata: Metadata = {
    title: "Complete Package for Patient-Specific Facial Prosthesis Design & Manufacturing | Graft3D",
    description:
        "The Graft3D Healthcare Facial Prosthesis Package combines advanced 3D scanning, medical visualization, CAD modelling, haptic design, and 3D printing technologies into one turnkey solution for customized facial prostheses tailored to individual patient anatomy.",
    robots: { index: true, follow: true },
};

export default function Page() {
    return (
        <main>
            <Hero />
            <MedicalWorkflowPipeline />
            <ClinicalApplications />
            <IdealSection />
            <WhyGraft3DHealthcare />
            <ContactSection />
            <FaqSection />
        </main>
    );
}
