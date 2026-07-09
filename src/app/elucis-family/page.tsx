import localFont from "next/font/local";
import Hero from "@/components/sections/elucis-family/Hero";
import Stats from "@/components/sections/elucis-family/Stats";
import Platforms from "@/components/sections/elucis-family/Platforms";
import Workflow from "@/components/sections/elucis-family/Workflow";
import Outcomes from "@/components/sections/elucis-family/Outcomes";
import Specialties from "@/components/sections/elucis-family/Specialties";
import WhyInvest from "@/components/sections/elucis-family/WhyInvest";
import EnterpriseSecurity from "@/components/sections/elucis-family/EnterpriseSecurity";
import TrustBadges from "@/components/sections/elucis-family/TrustBadges";
import Testimonials from "@/components/sections/elucis-family/Testimonials";
import LocalPartner from "@/components/sections/elucis-family/LocalPartner";

const inter = localFont({
    src: "../../../public/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
    display: "swap",
});

export const metadata = {
    title: "Elucis Family | Graft3D",
    description: "Advanced 3D VR Surgical Planning Platform for Hospitals in India.",
};

export default function ElucisFamilyPage() {
    return (
        <main className={`w-full min-h-screen ${inter.className}`}>
            <Hero />
            <Stats />
            <Platforms />
            <Workflow />
            <Outcomes />
            <Specialties />
            <WhyInvest />
            <EnterpriseSecurity />
            <TrustBadges />
            <Testimonials />
            <LocalPartner />
        </main>
    );
}
