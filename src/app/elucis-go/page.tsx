import localFont from "next/font/local";
import Hero from "@/components/sections/elucis-go/Hero";
import WhyElucisGo from "@/components/sections/elucis-go/WhyElucisGo";
import HowItWorks from "@/components/sections/elucis-go/HowItWorks";
import ClinicalUse from "@/components/sections/elucis-go/ClinicalUse";
import Specialties from "@/components/sections/elucis-go/Specialties";
import About from "@/components/sections/elucis-go/About";
import Testimonials from "@/components/sections/elucis-go/Testimonials";
import PilotProgram from "@/components/sections/elucis-go/PilotProgram";
import ElucisGoFaq from "@/components/sections/elucis-go/ElucisGoFaq";

export const metadata = {
    title: "Elucis Go - VR Surgical Planning Without Complex Infrastructure",
    description:
        "Experience patient-specific anatomy anywhere using an untethered VR headset. Review, discuss and plan complex cases with unmatched clarity and ease.",
};

const inter = localFont({
    src: "../../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    display: "swap",
});

export default function ElucisGoPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <Hero />
            <WhyElucisGo />
            <HowItWorks />
            <ClinicalUse />
            <Specialties />
            <About />
            <Testimonials />
            <PilotProgram />
            <ElucisGoFaq />
        </main>
    );
}
