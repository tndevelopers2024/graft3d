import Hero from "@/components/sections/elucis-next/Hero";
import Workflow from "@/components/sections/elucis-next/Workflow";
import Features from "@/components/sections/elucis-next/Features";
import UseCases from "@/components/sections/elucis-next/UseCases";
import Benefits from "@/components/sections/elucis-next/Benefits";
import TrustBadges from "@/components/sections/elucis-next/TrustBadges";
import Testimonials from "@/components/sections/elucis-next/Testimonials";
import AcademicLicensing from "@/components/sections/elucis-next/AcademicLicensing";
import localFont from "next/font/local";

export const metadata = {
    title: "Elucis Next - Research & Education Edition | Graft3D",
    description: "Convert DICOM imaging into immersive 3D anatomy for research, teaching, training and methodology development.",
};

const inter = localFont({
    src: "../../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    display: "swap",
});

export default function ElucisNextPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <Hero />
            <Workflow />
            <Features />
            <UseCases />
            <TrustBadges />
            <Benefits />
            <Testimonials />
            <AcademicLicensing />
        </main>
    );
}
